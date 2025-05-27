import ApplicationDetailsPage from "./components/ApplicationDetailsPage";
import { Metadata } from "next";

// Define the params type separately
type PageParams = {
  trackingNumber: string;
};

// Use the correct type structure for Next.js 15
export default function TrackingPage({ params }: { params: PageParams }) {
  const { trackingNumber } = params;

  return (
    <div>
      <h1>Tracking Details for {trackingNumber}</h1>
      {/* Add your tracking page content here */}
      <ApplicationDetailsPage trackingNumber={trackingNumber} />
    </div>
  );
}

// Update metadata generation to match Next.js 15 types
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  return {
    title: `Tracking Details - ${params.trackingNumber}`,
  };
}
