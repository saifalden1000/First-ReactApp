import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-[#1abc9c] flex justify-center items-center">
      <div className="container mx-auto  w-3/4">
        <h2 className="text-white text-4xl text-center font-bold mb-5">
          ABOUT COMPONENT
        </h2>
        <div className="flex justify-center gap-5 items-center text-xl mt-4 mb-3">
          <div className=" w-20 h-1 bg-white"></div>

          <FontAwesomeIcon icon={faStar} className="text-white" />
          <div className="w-20 h-1 bg-white"></div>
        </div>
        <div className="grid md:grid-cols-2  gap-10">
          <div className="text-white">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="text-white">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
