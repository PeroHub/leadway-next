import { type NextRequest, NextResponse } from "next/server";
import { dataStore } from "../../../../../../lib/data-store";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const { trackingNumber } = params;
    const body = await request.json();
    const { status, updatedBy, notes } = body;

    // Validate the status
    const validStatuses = [
      "Visa Application Received",
      "Visa Is Being Processed",
      "Visa Document Validated",
      "Visa Almost Ready",
      "Visa Ready",
    ];

    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    if (!updatedBy) {
      return NextResponse.json(
        { error: "Missing updatedBy field" },
        { status: 400 }
      );
    }

    // Updated with await
    const result = await dataStore.updateStatus(
      trackingNumber,
      status,
      updatedBy,
      notes
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to update status" },
        { status: result.error === "Application not found" ? 404 : 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error("Error updating status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
