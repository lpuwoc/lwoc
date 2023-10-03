"use client";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center w-full">
        <button
          className="flex flex-row justify-center items-center px-2 py-1 rounded-md bg-blue-200"
          onClick={() => {
            window.location.href = "http://localhost:4000/api/login";
          }}
        >
          <AiFillGithub className="text-3xl" />
          <span className="text-2xl">Login</span>
        </button>
      </div>
    </main>
  );
}
