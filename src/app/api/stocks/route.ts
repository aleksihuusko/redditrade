import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://tradestie.com/api/v1/apps/reddit");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch stock data" },
      { status: 500 }
    );
  }
}
