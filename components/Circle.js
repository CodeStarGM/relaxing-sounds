import React from "react";

const Circle = ({ icon }) => {
  return (
    <div className="hover:cursor-pointer w-20 SHA h-20 primary rounded-full flex justify-center items-center">
      {icon}
    </div>
  );
};

export default Circle;
