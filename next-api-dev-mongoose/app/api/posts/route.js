// app/posts/route.js
import axios from "axios";

//!=====USING RESPONSE====
// export async function GET() {
//   try {
//     // Make the HTTP GET request using Axios
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );

//     // Axios automatically handles converting the JSON response body
//     const posts = response.data;

//     // Return the posts in a JSON response
//     return new Response(JSON.stringify({ posts }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     // Handle errors, such as network issues or invalid responses
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

//!=====NextResponse====
// app/posts/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    // Use NextResponse to return the data
    return NextResponse.json({ posts });
  } catch (error) {
    // Handle errors with NextResponse
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
