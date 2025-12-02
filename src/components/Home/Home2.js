import React from "react";
import myImg from "../../Assets/my.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="w-full py-20 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 text-white text-lg leading-relaxed">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
              LET ME <span className="text-primary"> INTRODUCE </span> MYSELF
            </h1>
            <p className="mb-4">
              I am a <b className="text-primary">Full Stack Developer</b> with a passion for building beautiful and functional web applications.
            </p>
            <p className="mb-4">
              I started my journey specializing in the <b className="text-primary">MERN Stack</b>, but I have since expanded my skills to work across the <b className="text-primary">entire web stack</b>.
            </p>
            <p className="mb-4">
              I am especially passionate about <b className="text-primary">Front-end Design</b> and creating intuitive <b className="text-primary">User Experiences</b>.
            </p>
            <p className="mb-4">
              I love to build scalable and efficient applications using modern technologies like
              <i>
                <b className="text-primary"> React.js, Next.js, and Node.js</b>
              </i>
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <Tilt>
              <img
                src={myImg}
                className="rounded-full w-64 h-64 object-cover border-4 border-primary shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
                alt="avatar"
              />
            </Tilt>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">FIND ME ON</h1>
          <p className="text-gray-300 mb-8">
            Feel free to <span className="text-primary">connect </span>with me
          </p>
          <ul className="flex justify-center gap-6">
            <li>
              <a
                href="https://github.com/fa-salu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <AiFillGithub className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Fazal_Kl"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <AiOutlineTwitter className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fa-salu/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fa_sa_lu__"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <AiFillInstagram className="text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home2;
