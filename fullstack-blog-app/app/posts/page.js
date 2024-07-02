"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        const posts = await response.json();
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
