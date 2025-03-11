import { NextResponse } from "next/server";
import dbConnect from "../../../../../lib/mongodb";
import Submission from "../../../../../models/Submission";

export async function GET() {
  try {
    await dbConnect();
    const applications = await Submission.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: applications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
