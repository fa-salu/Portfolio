import React from "react";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiHtml5, DiCss3 } from "react-icons/di";
import { SiRedux, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiReactquery, SiPostgresql } from "react-icons/si";

function Techstack() {
  const icons = [
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: DiReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiRedux, name: "Redux Toolkit" },
    { Icon: SiReactquery, name: "TanStack Query" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: SiExpress, name: "Express" },
    { Icon: DiMongodb, name: "MongoDB" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: DiHtml5, name: "HTML5" },
    { Icon: DiCss3, name: "CSS3" },
    { Icon: SiTailwindcss, name: "Tailwind" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12">
      {icons.map((item, index) => (
        <div
          key={index}
          className="w-32 h-32 flex items-center justify-center rounded-xl glass text-4xl text-white hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/50"
          title={item.name}
        >
          <item.Icon className="text-6xl" />
        </div>
      ))}
    </div>
  );
}

export default Techstack;
