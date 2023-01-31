"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ReadMoreBtn = ({ article }: { article: Article }) => {
  const router = useRouter();

  const clickHandler = () => {
    const query = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${query}`;
    router.push(url);
  };

  return (
    <button
      onClick={clickHandler}
      className="bg-red-800 h-10 rounded-b-lg  dark:text-gray-900 hover:bg-red-800"
    >
      Read more
    </button>
  );
};

export default ReadMoreBtn;
