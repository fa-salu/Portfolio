import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

function ProjectCards(props) {
  return (
    <Tilt perspective={1000} scale={1.02} className="h-full">
      <div className="glass rounded-xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group">
        <div className="relative overflow-hidden">
          <img
            src={props.imgPath}
            alt="card-img"
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
             <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-primary transition-colors"
            >
              <BsGithub /> GitHub
            </a>
            {!props.isBlog && props.demoLink && (
              <a
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-primary transition-colors"
              >
                <CgWebsite /> Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-4 text-center">{props.title}</h3>
          <p className="text-gray-300 text-justify mb-6 flex-grow">
            {props.description}
          </p>
          
          <div className="flex justify-center gap-4 mt-auto md:hidden">
             <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-primary transition-colors text-sm"
            >
              <BsGithub /> GitHub
            </a>
            {!props.isBlog && props.demoLink && (
              <a
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-primary transition-colors text-sm"
              >
                <CgWebsite /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
export default ProjectCards;
