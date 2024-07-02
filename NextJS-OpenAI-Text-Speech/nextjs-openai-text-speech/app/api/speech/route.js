import { NextResponse } from "next/server";
import Openai from "openai";

//Configure openai
const openai = new Openai({
  apiKey: process.env.OPENAI_KEY,
});
//! Open ai post request

export async function POST(request) {
  try {
    //get the input from user
    const { text } = await request.json();
    //!validations
    if (!text) {
      return new NextResponse(
        JSON.stringify(
          { message: "No text provided" },
          {
            status: 400,
          }
        )
      );
    }
    //make request to openai
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });
    //Convert to buffer
    const buffer = Buffer.from(await mp3.arrayBuffer());
    //send the response
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error generating speech" }),
      {
        status: 500,
      }
    );
  }
}
