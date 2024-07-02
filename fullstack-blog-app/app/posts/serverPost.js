import React from "react";
import Link from "next/link";
const Posts = async () => {
  const response = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const posts = await response.json();
  console.log(posts);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">All Posts</h1>
      {posts?.posts?.map((post) => {
        return (
          <div
            key={post?._id}
            className="mb-5 p-4 bg-gray-50 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {post?.title}
            </h2>
            <p className="text-gray-600">{post?.description}</p>
            <Link
              href={`/posts/${post?._id}`}
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Read more
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
