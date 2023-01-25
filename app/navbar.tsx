import Link from "next/link";
import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
const Navbar = () => {
  return (
    <header>
      {/* top navbar */}
      <div className="grid grid-cols-3 p-10 items-center">
        <HiOutlineBars3 className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center flex justify-center gap-1">
            The
            <span className="underline decoration-6 decoration-red-800">
              Latest
            </span>
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* dark mode buttons */}
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg-px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      <NavLinks />
      <SearchBox />
    </header>
  );
};

export default Navbar;
