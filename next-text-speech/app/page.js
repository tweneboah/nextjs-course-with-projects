// import { SiTailwindcss, SiFormik } from "react-icons/si";
import { FaWpforms } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center py-12 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">
          Welcome to Text to Speech Converter!
        </h1>
        <p className="text-xl mt-4">Powered by Next.js and OpenAI</p>
        <Link href="/speech">
          <button className="mt-8 inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-gray-200">
            Try It Now
          </button>
        </Link>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Technologies Used
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <TbBrandNextjs className="text-6xl mx-auto text-blue-500" />
            <h3 className="text-lg font-semibold mt-2">Next.js</h3>
            <p>Framework for building server-rendered React applications.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <FaWpforms className="text-6xl mx-auto text-green-500" />
            <h3 className="text-lg font-semibold mt-2">Formik</h3>
            <p>Builds forms in React, managing form state and validation.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <RiOpenaiFill className="text-6xl mx-auto text-purple-500" />
            <h3 className="text-lg font-semibold mt-2">OpenAI API</h3>
            <p>
              Utilizes advanced AI models for natural language processing tasks.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <SiTailwindcss className="text-6xl mx-auto text-teal-500" />
            <h3 className="text-lg font-semibold mt-2">TailwindCSS</h3>
            <p>A utility-first CSS framework for rapid UI development.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <FaNodeJs className="text-6xl mx-auto text-green-600" />
            <h3 className="text-lg font-semibold mt-2">React Icons</h3>
            <p>
              Easily utilize icons from a variety of popular icon libraries in
              React.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <IoLogoJavascript className="text-6xl mx-auto text-yellow-500" />
            <h3 className="text-lg font-semibold mt-2">JavaScript</h3>
            <p>The programming language used to build dynamic web content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
