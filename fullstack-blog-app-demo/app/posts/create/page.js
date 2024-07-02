"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddNewPost = () => {
  const [submitError, setSubmitError] = useState(null);
  // throw new Error("Could not create post from form");
  //formik config
  const formik = useFormik({
    initialValues: {
      description: "",
      title: "",
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(
            result.message || "An error occurred while creating the post"
          );
        }

        // Handle success here, perhaps redirecting to a different page or clearing the form
        console.log("Post created:", result.post);
      } catch (error) {
        console.log("errr", error);
        setSubmitError(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-lg w-full p-8 bg-white shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Add Post</h1>
        <p className="text-gray-500">Create your dream post</p>
        <div>{submitError?.message}</div>
        <form onSubmit={formik.handleSubmit} className="space-y-6 mt-6">
          <div>
            <input
              className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter Title"
              name="title"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.title}
              </div>
            )}
          </div>
          <div>
            <textarea
              className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter description here..."
              name="description"
              {...formik.getFieldProps("description")}
              rows="5"
              maxLength="5000"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-150 ease-in-out"
          >
            {formik.isSubmitting ? "Processing..." : "Add Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
