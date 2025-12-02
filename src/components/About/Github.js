import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center justify-center pb-12">
      <h1 className="text-3xl font-bold text-white pb-8">
        Days I <strong className="text-primary">Code</strong>
      </h1>
      <div className="glass p-4 rounded-xl">
        <GitHubCalendar
          username="fa-salu"
          blockSize={15}
          blockMargin={5}
          color="#6c63ff"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
