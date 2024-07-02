import React from "react";
import "./module.css";
const PostDetails = ({ params }) => {
  const { id } = params;
  console.log(id);
  return <div className="title">PostDetails</div>;
};

export default PostDetails;
