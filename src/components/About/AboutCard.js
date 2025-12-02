import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="glass rounded-xl p-8 hover:scale-[1.02] transition-transform duration-300">
      <blockquote className="text-lg relative pl-4 border-l-4 border-primary">
        <p className="text-justify mb-4 text-gray-300">
          Hi Everyone, I am <span className="text-primary font-bold">Fasalu Rahman</span>.
          <br />
          I am looking for a MERN Stack Developer job.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <ImPointRight className="text-primary" /> Reading Books
          </li>
          <li className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <ImPointRight className="text-primary" /> Playing Games
          </li>
          <li className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <ImPointRight className="text-primary" /> Travelling
          </li>
        </ul>

        <p className="text-purple-300 italic mb-2">
          "Strive to build things that make a difference!"
        </p>
        <footer className="text-gray-400 font-medium">— Fasalu Rahman</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
