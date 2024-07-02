import { NextResponse } from "next/server";
import OpenAI from "openai";
//! Authenticate
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function POST(request) {
  const { text, imageUrl } = await request.json();
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: text },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
    });
    return new NextResponse(JSON.stringify(response.choices[0]));
  } catch (error) {
    return new NextResponse(JSON.stringify("Error generating response", error));
  }
}
