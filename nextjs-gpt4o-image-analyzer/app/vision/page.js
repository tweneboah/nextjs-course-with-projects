"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const MyFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const formik = useFormik({
    initialValues: {
      text: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      text: Yup.string().required("Text is required"),
      imageUrl: Yup.string()
        .url("Invalid URL")
        .required("Image URL is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      setResponse(null);

      try {
        const res = await fetch("/api/vision", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch the response");
        }

        const data = await res.json();
        setResponse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Image and Text Analysis
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter some text and an image URL to analyze the content.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <textarea
              name="text"
              placeholder="Enter text here..."
              {...formik.getFieldProps("text")}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
              rows="4"
              maxLength="5000"
            />
            {formik.touched.text && formik.errors.text ? (
              <div className="text-red-500 text-sm mt-1 flex items-center">
                <FaExclamationCircle className="mr-1" />
                {formik.errors.text}
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="url"
              name="imageUrl"
              placeholder="Enter image URL here..."
              {...formik.getFieldProps("imageUrl")}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
            />
            {formik.touched.imageUrl && formik.errors.imageUrl ? (
              <div className="text-red-500 text-sm mt-1 flex items-center">
                <FaExclamationCircle className="mr-1" />
                {formik.errors.imageUrl}
              </div>
            ) : null}
          </div>
          {error && (
            <div className="text-red-500 text-sm mt-2 flex items-center">
              <FaExclamationCircle className="mr-1" />
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !formik.isValid || formik.isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Get Response"
            )}
          </button>
        </form>
        {response && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-inner">
            <h3 className="font-bold text-lg text-blue-600 flex items-center">
              <FaCheckCircle className="mr-2" />
              Response
            </h3>
            {response.message?.content && (
              <p className="mt-2 text-gray-700">
                <strong>Text:</strong> {response.message.content}
              </p>
            )}
            {formik.values.imageUrl && (
              <div className="mt-4">
                <strong>Image:</strong>
                <img
                  src={formik.values.imageUrl}
                  alt="Provided content"
                  className="mt-2 border border-gray-300 rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFormComponent;
