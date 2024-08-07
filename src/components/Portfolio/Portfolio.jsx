import React, { useState } from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Portfolio() {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <div className="mt-[86px] min-h-screen">
      <div className="container mx-auto pt-4 ">
        <h2 className="text-[#2c3e50] text-center  pt-5 font-bold text-4xl">
          PORTFOLIO COMPONENT
        </h2>

        <div className="flex justify-center gap-5 items-center text-lg mt-4 mb-5">
          <div className=" w-20 h-1 bg-[#2c3e50]"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#2c3e50]" />
          <div className=" w-20 h-1 bg-[#2c3e50]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div
            onClick={() => {
              setShow(true);
              setSrc(port1);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={port1} className="w-full" alt="port1" />
            <div className="overlay">
              <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(port2);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={port2} className="w-full" alt="port2" />
            <div className="overlay">
              <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(port3);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={port3} className="w-full" alt="port3" />
            <div className="overlay">
              <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(port1);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={port1} className="w-full" alt="port1" />
            <div className="overlay">
              <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(port2);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={port2} className="w-full" alt="port2" />
            <div className="overlay">
              <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
            </div>
          </div>
          <div
            onClick={() => {
              setShow(true);
              setSrc(port3);
            }}
            className="rounded-lg overflow-hidden relative group cursor-pointer"
          >
            <img src={port3} className="w-full" alt="port3" />
            <div className="overlay">
              <FontAwesomeIcon icon={faPlus} className="text-8xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div
        id="screen"
        onClick={(e) => e.target.id == "screen" && setShow(false)}
        className={`bg-[#0d6efd40] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-30 
            ${show ? "" : "hidden"}`}
      >
        <img src={src} className="w-2/5" alt="" />
      </div>
    </div>
  );
}
