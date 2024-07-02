// app/posts/[pid]/route.js
import axios from "axios";
import { NextResponse } from "next/server";

//!=====USING QUERY STRINGS=======
//http://localhost:3000/api/posts?pid=1
export async function GET(request) {
  // Extract the post ID from the query string
  const { searchParams } = new URL(request.url);
  const pid = searchParams.get("id");
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${pid}`
    );
    const post = response.data;

    // Return the post data as JSON
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
