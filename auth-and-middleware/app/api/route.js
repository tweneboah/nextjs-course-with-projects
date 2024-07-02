import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";

export async function GET(req, res, next) {
  const { userId } = auth();
  if (!userId)
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }));
  console.log(userId);
  const user = await currentUser();
  console.log(user);
  return new NextResponse(JSON.stringify({ message: "Profile " }));
}
