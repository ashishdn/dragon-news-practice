"use client"

import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function RightSidebar() {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log("data", data)
  };
  return (
    <div className="flex flex-col gap-3">
      <button
        className=" btn border border-blue-500 py-2 rounded-sm flex justify-center  gap-3   text-blue-500"
        onClick={handleGoogleLogin}
      >
        <FaGoogle></FaGoogle>Login with Google
      </button>
      <button className=" btn border border-blue-500 py-2 rounded-sm flex justify-center  gap-3   text-blue-500">
        <FaGithub></FaGithub>Login with Github
      </button>
    </div>
  );
  z;
}
