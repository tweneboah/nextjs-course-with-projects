import { NextResponse } from "next/server";

//GET- Details (id)

import Post from "@/models/Post";
import connectDB from "@/utils/connectDb";

//GET - Details (id)
export async function GET(request, { params }) {
  const { id } = params;
  //Connect db
  await connectDB();
  try {
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify({ post }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

//PUT-Update(id)
export async function PUT(request, { params }) {
  const { id } = params;
  //Connect db
  //!get the payload
  const data = await request.json();

  await connectDB();
  try {
    const post = await Post.findByIdAndUpdate(id, data, { new: true });
    return new NextResponse(JSON.stringify({ post }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
//DELETE-Delete post(id)
export async function DELETE(request, { params }) {
  const { id } = params;
  //Connect db
  await connectDB();
  try {
    const post = await Post.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify({ message: "Post deleted" }));
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
