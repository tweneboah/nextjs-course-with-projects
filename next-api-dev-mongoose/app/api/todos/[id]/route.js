// app/todos/route.js
import { NextResponse } from "next/server";

import Todo from "@/src/models/Todo";
import connectDB from "@/src/utils/connectDB";
connectDB();

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo not found",
        },
        {
          status: 404,
        }
      );
    }
    // Send a user-friendly message on successful deletion with additional headers
    return NextResponse.json(
      {
        success: true,
        message: "Todo successfully deleted",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Delete operation failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

//Update

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  const todo = await Todo.findByIdAndUpdate(id, data, { new: true });

  if (!todo) {
    return new NextResponse("Todo not found", { status: 404 });
  }

  return new NextResponse(JSON.stringify(todo), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
