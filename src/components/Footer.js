import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-full bg-dark py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
          <div className="text-white text-lg font-medium">
            <h3>By Fasalu Rahman</h3>
          </div>
          <div className="text-white text-lg font-medium">
            <h3>Copyright © {year} FR</h3>
          </div>
          <div>
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="https://github.com/fa-salu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <AiFillGithub className="text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Fazal_Kl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <AiOutlineTwitter className="text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fa-salu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/fa_sa_lu__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <AiFillInstagram className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
