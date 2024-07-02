"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { Login } from "@/components/Login";

const Posts = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log({ isLoaded, userId, sessionId, getToken });
  return <div>Posts</div>;
};

export default Posts;
