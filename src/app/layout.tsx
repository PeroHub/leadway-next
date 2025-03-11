"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Legal Pathway Immigration Law Firm",
//   description: "Legal Pathway Immigration Law Firm",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return (
      <html lang="en">
        <body>
          <div>
            <QueryClientProvider client={queryClient}>
              <ToastContainer position="top-right" autoClose={5000} />

              {children}
            </QueryClientProvider>
          </div>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          <Navbar />
          <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" autoClose={5000} />

            {children}
          </QueryClientProvider>
          <Footer />
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
