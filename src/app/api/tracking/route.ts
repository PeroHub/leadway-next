import { type NextRequest, NextResponse } from "next/server";
import { dataStore } from "../../../../lib/data-store";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { applicant, visaDetails, documents } = body;

    // Validate required fields
    if (!applicant?.fullName || !applicant?.country || !applicant?.email) {
      return NextResponse.json(
        { error: "Missing required applicant information" },
        { status: 400 }
      );
    }

    if (!visaDetails?.type) {
      return NextResponse.json({ error: "Missing visa type" }, { status: 400 });
    }

    // Create the application (now with await)
    const result = await dataStore.createApplication({
      applicant,
      visaDetails,
      documents: documents || [],
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to create application" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        trackingNumber: result.trackingNumber,
        message: "Application created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const filters = {
      name: searchParams.get("name") ?? undefined,
      country: searchParams.get("country") ?? undefined,
      status: searchParams.get("status") ?? undefined,
    };

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Now with await
    const result = await dataStore.getApplications(filters, page, limit);

    return NextResponse.json({
      applications: result.data,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
