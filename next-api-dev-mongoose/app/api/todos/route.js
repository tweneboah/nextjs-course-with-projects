// app/todos/route.js
import { NextResponse } from "next/server";

import Todo from "@/src/models/Todo";
import connectDB from "@/src/utils/connectDB";
connectDB();

export async function GET(request) {
  const todos = await Todo.find({});
  return new NextResponse(JSON.stringify(todos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

//Create
export async function POST(request) {
  const data = await request.json();
  const todo = new Todo({
    title: data.title,
    completed: data.completed,
  });
  console.log("data", data);
  try {
    await todo.save();
    return new NextResponse(JSON.stringify(todo), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
