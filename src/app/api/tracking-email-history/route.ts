// app/api/tracking-email-history/route.ts
import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "../../../../lib/data-store"; // Adjust path based on your project structure

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const trackingNumber = searchParams.get("trackingNumber");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  if (!trackingNumber) {
    return NextResponse.json(
      { success: false, error: "Tracking number is required." },
      { status: 400 }
    );
  }

  const pageNum = parseInt(page || "1", 10);
  const limitNum = parseInt(limit || "10", 10);

  if (isNaN(pageNum) || pageNum < 1 || isNaN(limitNum) || limitNum < 1) {
    return NextResponse.json(
      { success: false, error: "Invalid page or limit." },
      { status: 400 }
    );
  }

  try {
    const result = await dataStore.getEmailHistory(
      trackingNumber,
      pageNum,
      limitNum
    );
    return NextResponse.json({ success: true, ...result }, { status: 200 });
  } catch (error) {
    console.error("API Error fetching email history:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch email history." },
      { status: 500 }
    );
  }
}
