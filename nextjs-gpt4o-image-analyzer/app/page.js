import { FaReact, FaRobot, FaWpforms } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import MyFormComponent from "./vision/page";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Image Analysis Tool</h1>
          <p className="text-xl mb-8">
            Analyze images effortlessly with the power of Next.js and
            ChatGPT-4o.
          </p>
          <Link
            href="/vision"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 inline-block"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Tools Used</h2>
          <div className="flex flex-wrap justify-center space-x-8">
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-6xl text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold">Next.js</h3>
              <p className="text-gray-600">
                A powerful React framework for building web applications.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaRobot className="text-6xl text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold">ChatGPT-4o</h3>
              <p className="text-gray-600">
                A state-of-the-art AI model for natural language understanding.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaWpforms className="text-6xl text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold">Formik</h3>
              <p className="text-gray-600">
                A form library for React that simplifies form handling and
                validation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
