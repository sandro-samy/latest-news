"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        type="text"
        value={input}
        placeholder={"Search For a Article..."}
        onChange={(e) => setInput(e.target.value)}
        className="w-full outline-none h-12 placeholder-gray-500 text-gray-500 bg-transparent dark:text-red-800
      flex-1"
      />
      <button
        type="submit"
        className="text-red-800 disabled:text-gray-500 font-bold"
        disabled={!input}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
