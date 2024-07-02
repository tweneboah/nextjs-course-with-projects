import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
    </div>
  );
};

export default Loading;
