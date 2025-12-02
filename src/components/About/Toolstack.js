import React from "react";
import { SiLinux, SiWindows, SiGit, SiPostman, SiVercel } from "react-icons/si";

function Toolstack() {
  const icons = [
    { Icon: SiLinux, name: "Linux" },
    { Icon: SiWindows, name: "Windows" },
    { Icon: SiGit, name: "Git" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiVercel, name: "Vercel" },
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

export default Toolstack;
