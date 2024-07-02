import { NextResponse } from "next/server";
import OpenAI from "openai";

//Openai
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function POST(request) {
  try {
    const { text } = await request.json();
    if (!text) {
      return new NextResponse(JSON.stringify({ message: "No text provided" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error generating speech:", error);
    return new NextResponse(
      JSON.stringify({ message: "Error generating speech" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
