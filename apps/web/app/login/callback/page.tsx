"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Callback = () => {
  const searchParams = useSearchParams();
  try {
    const token = searchParams.get("access_token");
    if (!token) throw new Error("No token found");
    localStorage.setItem("access_token", token);
    window.location.href = "/onboarding";
    //navigate to /home page
    return <div>Redirecting...</div>;

  } catch (error) {
    return <div>Please give me token 😭</div>;
  }
};

export default Callback;
