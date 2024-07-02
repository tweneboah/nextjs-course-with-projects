import { NextResponse } from "next/server";
//! Get user details(GET)
export async function GET() {
  return new NextResponse(
    JSON.stringify({
      message: "User details API",
    })
  );
}
