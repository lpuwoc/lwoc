"use client";
import React, { useEffect } from "react";

const Onboarding = () => {
  useEffect(() => {
    if (!localStorage.getItem("access_token"))
      window.location.href = "http://localhost:4000/api/login";
  }, []);

  return <div className="text-6xl"> YAYY!!!</div>;
};

export default Onboarding;
