"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function TrackApplicationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackingSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking number",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);

    try {
      // First check if the application exists
      const response = await fetch(`/api/tracking/${trackingNumber}`);

      if (response.ok) {
        // Application found, navigate to the details page
        router.push(`/tracking/${trackingNumber}`);
      } else {
        // Application not found
        toast({
          title: "Not Found",
          description: `No application found with tracking number: ${trackingNumber}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error searching for application:", error);
      toast({
        title: "Error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleNameSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!applicantName.trim()) {
      toast({
        title: "Error",
        description: "Please enter an applicant name",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);

    try {
      // Navigate to applications page with search query
      router.push(`/tracking?name=${encodeURIComponent(applicantName)}`);
    } catch (error) {
      console.error("Error searching for application:", error);
      toast({
        title: "Error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Toaster />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Track Application
          </h2>
          <div className="flex items-center space-x-2">
            <Link href="/tracking">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Applications
              </Button>
            </Link>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Search for Applications</CardTitle>
            <CardDescription>
              Find applications by tracking number or applicant name.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tracking" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tracking">By Tracking Number</TabsTrigger>
                <TabsTrigger value="applicant">By Applicant Name</TabsTrigger>
              </TabsList>
              <TabsContent value="tracking" className="space-y-4 pt-4">
                <form onSubmit={handleTrackingSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="tracking-number">Tracking Number</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input
                        id="tracking-number"
                        placeholder="5414-0756"
                        className="flex-1"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                      />
                      <Button type="submit" disabled={isSearching}>
                        <Search className="mr-2 h-4 w-4" />
                        {isSearching ? "Searching..." : "Search"}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enter the tracking number in the format: XXXX-XXXX
                    </p>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="applicant" className="space-y-4 pt-4">
                <form onSubmit={handleNameSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="applicant-name">Applicant Name</Label>
                    <div className="flex w-full items-center space-x-2">
                      <Input
                        id="applicant-name"
                        placeholder="John Smith"
                        className="flex-1"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                      />
                      <Button type="submit" disabled={isSearching}>
                        <Search className="mr-2 h-4 w-4" />
                        {isSearching ? "Searching..." : "Search"}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enter the full name or partial name of the applicant
                    </p>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
