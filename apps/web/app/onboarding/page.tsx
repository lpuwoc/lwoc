"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    if (localStorage.getItem("access_token"))
      window.location.href = "/onboarding";
    else window.location.href = "http://localhost:4000/api/login";
  }, []);

  return <div>LOLOLO</div>;
};

export default page;
