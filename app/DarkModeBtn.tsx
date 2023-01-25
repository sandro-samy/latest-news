"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const DarkModeBtn = () => {
  const [IsMounted, setIsMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonStarsFill
          className="h-8 w-8 cursor-pointer text-gray-900"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModeBtn;
