"use client";
import { useState } from "react";

export default function Speech() {
  const [responseText, setResponseText] = useState("");
  const [errorText, setErrorText] = useState("");

  const textToSpeech = async () => {
    const voiceId = "DJDkcaY4POaxra3iaZ5b"; // Replace with the actual voice ID provided by ElevenLabs

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer e99aa68a5155558ddfb36e322d59e0f9`, // Use your API key here
      },
      body: JSON.stringify({
        text: "Hello, world!", // Example text to be converted to speech
        model_id: "DJDkcaY4POaxra3iaZ5b", // Model ID if needed
        voice_settings: {
          stability: 123,
          similarity_boost: 123,
          style: 123,
          use_speaker_boost: true,
        },
        pronunciation_dictionary_locators: [
          {
            pronunciation_dictionary_id: "dict_id",
            version_id: "ver_id",
          },
        ],
      }),
    };

    fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, options)
      .then((response) => response.json())
      .then((data) => {
        setResponseText(JSON.stringify(data, null, 2));
      })
      .catch((err) => {
        console.error(err);
        setErrorText("Failed to fetch data: " + err.message);
      });
  };

  return (
    <div>
      <h1>Text to Speech Conversion</h1>
      <button onClick={textToSpeech}>Convert Text</button>
      <div>
        {responseText && <pre>{responseText}</pre>}
        {errorText && <p style={{ color: "red" }}>{errorText}</p>}
      </div>
    </div>
  );
}
