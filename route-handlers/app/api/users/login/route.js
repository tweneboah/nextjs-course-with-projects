import { NextResponse } from "next/server";
//! Login (POST)
export async function POST() {
  return new NextResponse(
    JSON.stringify({
      message: "Login API",
    })
  );
}
