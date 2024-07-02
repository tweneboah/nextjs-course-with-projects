import { NextResponse } from "next/server";
//!CRUD

//! Register(POST)
export async function POST() {
  return new NextResponse(
    JSON.stringify({
      message: "Register API",
    })
  );
}
//! lists(GET)
export async function GET() {
  return new NextResponse(
    JSON.stringify({
      message: "List users api",
    })
  );
}

//! Delete  user(DELETE)
export async function DELETE() {
  return new NextResponse(
    JSON.stringify({
      message: "Delete User",
    })
  );
}
//! Update  user(PUT)
export async function PUT() {
  return new NextResponse(
    JSON.stringify({
      message: "Update User API",
    })
  );
}
