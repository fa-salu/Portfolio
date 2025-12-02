import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="w-full min-h-screen pt-24 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-blue-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12" id="home">
        <Particle />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left z-10">
            <h1 className="text-4xl md:text-6xl font-bold pb-4 text-white">
              Hi There!{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">
                👋🏻
              </span>
            </h1>

            <h1 className="text-4xl md:text-6xl font-bold text-white pb-8">
              I'M
              <strong className="text-primary pl-4">FASALU RAHMAN M</strong>
            </h1>

            <div className="p-8 text-left text-primary text-2xl md:text-4xl font-bold">
              <Type />
            </div>
          </div>

          <div className="flex justify-center md:justify-end pb-8 md:pb-0">
            <img
              src={homeLogo}
              alt="home pic"
              className="max-h-[450px] w-auto animate-float"
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
