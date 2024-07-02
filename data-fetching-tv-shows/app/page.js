// pages/index.js
import Link from "next/link";
import Image from "next/image";
import {
  FaDatabase,
  FaSpinner,
  FaExclamationTriangle,
  FaBars,
  FaReact,
  FaServer,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background image using Next.js Image Component */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2023/12/12/13/05/godzilla-8445254_1280.jpg"
          alt="TV Show Spotlight"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-75"
        />
        {/* Transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold text-white">
            Discover Amazing TV Shows
          </h1>
          <p className="text-lg mt-3 text-white">
            Dive into the world of endless entertainment. Explore genres, follow
            your favorite series, and never miss an episode!
          </p>
          <Link href="/shows">
            <p className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Shows
            </p>
          </Link>
        </div>
      </div>

      {/* What You Will Learn Section */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            What You Will Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaDatabase className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Data Fetching
              </span>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaSpinner className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Loading Techniques
              </span>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaExclamationTriangle className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Error Handling
              </span>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaBars className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Navigation
              </span>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaReact className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Use of React Icons
              </span>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaServer className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Server Data Fetching
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-8 text-sm text-white">
        TV Show Central || Masynctech Coding School
      </footer>
    </div>
  );
}
