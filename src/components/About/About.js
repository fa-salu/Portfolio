import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="w-full min-h-screen pt-24 relative overflow-hidden">
      <Particle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-8 text-center md:text-left">
              Know Who <strong className="text-primary">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          <div className="flex justify-center">
            <img
              src={laptopImg}
              alt="about"
              className="w-full max-w-lg animate-float"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Professional <strong className="text-primary">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="text-4xl font-bold text-white text-center mb-12">
          <strong className="text-primary">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </div>
    </div>
  );
}

export default About;
