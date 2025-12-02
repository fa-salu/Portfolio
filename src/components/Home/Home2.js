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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p className="mb-4">
              I am fluent in classics like
              <i className="text-primary font-bold"> MongoDB, Express.js, React.js and Nodejs </i>
            </p>
            <p className="mb-4">
              My field of Interest's are building new &nbsp;
              <i className="text-primary font-bold">Web Technologies and Products </i> and
              also in areas related to <b className="text-primary">Blockchain.</b>
            </p>
            <p className="mb-4">
              Whenever possible, I also apply my passion for developing products
              with <b className="text-primary">Node.js</b> and
              <i>
                <b className="text-primary"> Modern Javascript Library and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="text-primary"> React.js</b>
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
