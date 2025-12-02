import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgMenu, CgClose } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        navColour ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={() => updateExpanded(false)}>
              <h1 className="text-primary text-3xl font-bold">FR.</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2 transition-colors"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Link>

              <Link
                to="/about"
                className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2 transition-colors"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Link>

              <Link
                to="/project"
                className="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-lg font-medium flex items-center gap-2 transition-colors"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => updateExpanded(!expand)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {expand ? (
                <CgClose className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <CgMenu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${expand ? "block" : "hidden"} glass absolute w-full left-0 top-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
            onClick={() => updateExpanded(false)}
          >
            <AiOutlineHome /> Home
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
            onClick={() => updateExpanded(false)}
          >
            <AiOutlineUser /> About
          </Link>

          <Link
            to="/project"
            className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
            onClick={() => updateExpanded(false)}
          >
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
