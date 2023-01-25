import Link from "next/link";
import React from "react";

const Navlink = ({
  category,
  isActive,
}: {
  category: Category;
  isActive: boolean;
}) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive
          ? "underline decoration-red-800 underline-offset-4 font-bold text-lg"
          : ""
      } `}
    >
      {category}
    </Link>
  );
};

export default Navlink;
