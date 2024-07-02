"use client";
export default function Error({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="p-6 max-w-md w-full bg-white rounded-lg border border-red-200 shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          An Error Occurred
        </h1>
        <p className="text-red-500">{error.message}</p>
      </div>
    </div>
  );
}
