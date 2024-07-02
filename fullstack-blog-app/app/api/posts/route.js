import Post from "@/models/Post";
import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDb";
import { revalidatePath } from "next/cache";

//POST-Create
export async function POST(request) {
  //Connect db
  await connectDB();
  //!get the payload
  const data = await request.json();

  try {
    //DB Operations
    const post = await Post.create(data);
    return new NextResponse(JSON.stringify({ post }));
  } catch (error) {
    // console.log(error);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
//GET - Lists all posts
export async function GET() {
  //Connect db
  await connectDB();

  try {
    const posts = await Post.find();

    return new NextResponse(JSON.stringify({ posts }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
