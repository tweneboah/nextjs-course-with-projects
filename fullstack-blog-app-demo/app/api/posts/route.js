import Post from "@/models/Post";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDb";

//POST-Create
// POST-Create
export async function POST(request) {
  // Connect to the database
  await connectDB();

  // Get the payload
  const data = await request.json();

  try {
    // Database Operations
    const post = await Post.create(data);
    return new NextResponse(JSON.stringify({ post }), {
      status: 201, // Indicates successful creation
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to create post: " + error.message }),
      {
        status: 500, // Server error status code
      }
    );
  }
}
//GET - Lists all posts
export async function GET() {
  //Connect db
  await connectDB();
  try {
    const posts = await Post.find();
    if (!posts) {
      return new NextResponse(JSON.stringify({ message: error }), {
        status: 500,
      });
    }
    return new NextResponse(JSON.stringify({ posts: u }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
}
