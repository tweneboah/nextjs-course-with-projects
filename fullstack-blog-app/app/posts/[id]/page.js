"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
useRouter;
const PostDetails = ({ params }) => {
  const { id } = params;
  //navigation
  const router = useRouter();

  const [data, setData] = useState(null);
  // make http request
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      const result = await response.json();
      setData(result);
    };
    fetchData();
    console.log(data);
  }, [id]);
  //Delete post
  const handleDeletePost = async () => {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });
    //Redirect
    if (response.ok) {
      router.push("/posts");
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Details</h1>
        <div>
          <Link href={`/posts/edit/${data?.post?._id}`}>
            <button className="text-blue-500 hover:text-blue-700 mr-2">
              <MdEdit size="24" /> {/* Edit icon */}
            </button>
          </Link>
          <button
            onClick={handleDeletePost}
            className="text-red-500 hover:text-red-700"
          >
            <MdDelete size="24" /> {/* Delete icon */}
          </button>
        </div>
      </div>
      <p className="text-gray-500">{data?.post?.title}</p>
      <p className="text-gray-500">{data?.post?.description}</p>
    </div>
  );
};

export default PostDetails;
