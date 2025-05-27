import { type NextRequest, NextResponse } from "next/server";
import { dataStore } from "../../../../lib/data-store"; // Adjust path as necessary

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get the tracking number from the query parameters
    const trackingNumber = searchParams.get("trackingNumber");

    // Validate if trackingNumber is provided
    if (!trackingNumber) {
      return NextResponse.json(
        { error: "Tracking number is required." },
        { status: 400 }
      );
    }

    // Use the dataStore to get the specific application by tracking number
    const application = await dataStore.getApplication(trackingNumber);

    // Check if the application was found
    if (!application) {
      return NextResponse.json(
        { error: "Application not found with the provided tracking number." },
        { status: 404 }
      );
    }

    // Return the found application data
    // You might want to filter what data is sent to the user side for security/privacy.
    // For example, you might only return the status and a few key details.
    return NextResponse.json(
      {
        success: true,
        application: {
          trackingNumber: application.trackingNumber,
          applicant: {
            fullName: application.applicant.fullName,
            country: application.applicant.country,
            // Only include essential details for user-facing view
          },
          visaDetails: {
            type: application.visaDetails.type,
            submissionDate: application.visaDetails.submissionDate,
          },
          status: application.status,
          // You might choose to omit documents and full email history for the user
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching application by tracking number:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}
