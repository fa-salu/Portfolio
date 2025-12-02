import React from "react";

function Pre(props) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-dark transition-opacity duration-500 ${
        props.load ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Pre;
