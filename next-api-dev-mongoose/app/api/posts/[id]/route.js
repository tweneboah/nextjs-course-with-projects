// app/posts/[pid]/route.js
import axios from "axios";
import { NextResponse } from "next/server";

//!=====USING PARAMS=======
export async function GET(request) {
  // Extract the post ID from the URL
  const url = new URL(request.url);
  const pid = url.pathname.split("/").pop();
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${pid}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const post = await response.json();

    // Return the post data as JSON using NextResponse for consistency with Next.js features
    return NextResponse.json(post);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return new NextResponse("Post not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
