import { type NextRequest, NextResponse } from "next/server";
import { dataStore } from "../../../../../lib/data-store";

export async function GET(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const { trackingNumber } = params;

    if (!trackingNumber) {
      return NextResponse.json(
        { error: "Tracking number is required" },
        { status: 400 }
      );
    }

    const application = dataStore.getApplication(trackingNumber);

    if (!application) {
      return NextResponse.json(
        {
          error: `Application with tracking number ${trackingNumber} not found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error("Error fetching application:", error);
    return NextResponse.json(
      { error: "Failed to fetch application" },
      { status: 500 }
    );
  }
}
