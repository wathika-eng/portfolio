import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes, className }) => {
  const { theme } = useTheme();
  
  // If custom className is provided, use it directly
  if (className) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`${className} ${data.showCursor && "cursor-none"}`}
      >
        {children}
      </button>
    );
  }
  
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 ease-out hover:scale-105 active:scale-100 shadow-lg hover:shadow-xl ${
          data.showCursor && "cursor-none"
        } ${classes}`}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base px-4 py-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-gray-800 text-gray-300 hover:text-white"
          : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
      } hover:scale-105 active:scale-100 font-medium ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
