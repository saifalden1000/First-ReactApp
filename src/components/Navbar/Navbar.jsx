import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  let [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <div
      className={`bg-[#2c3e50] z-50 text-white fixed w-full top-0 left-0 duration-500 
        ${scroll ? "py-2" : "py-5"}`}
    >
      <div className="container mx-auto px-5 flex justify-between font-bold flex-wrap items-center">
        <h1 className="sm:text-3xl text-2xl my-3">
          <Link to={""}>START FRAMEWORK</Link>
        </h1>

        <div
          onClick={() => {
            setShow(!show);
          }}
          className="icon px-3 py-1 border border-black rounded-md cursor-pointer md:hidden text-black "
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>

        <ul
          className={`md:flex flex-col items-start mt-5 md:mt-0 w-full md:gap-10 md:flex-row md:w-auto  gap-4 text-lg 
            ${show ? "flex" : "hidden"} transition-all duration-500`}
        >
          <li>
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              to={"about"}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              to={"portfolio"}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              to={"contact"}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
