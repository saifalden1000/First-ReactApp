import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState(false);
  const [age, setAge] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <div className=" mb-14 mt-[86px]">
      <div className="container pt-5 mx-auto">
        <h2 className="text-[#2c3e50] text-center pt-5 font-bold text-4xl">
          CONTACT SECTION
        </h2>

        <div className="flex justify-center gap-5 items-center text-lg mt-4 mb-5">
          <div className="line w-20 h-1 bg-[#2c3e50]"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#2c3e50]" />
          <div className="line w-20 h-1 bg-[#2c3e50]"></div>
        </div>

        <div className="form w-1/2 mx-auto mt-14">
          <div className="mb-8 relative">
            <label
              htmlFor="name"
              className={`label-setting 
                ${name ? "top-0 z-10" : "top-10 -z-10"}`}
            >
              userName :
            </label>
            <input
              onInput={(e) => {
                e.target.value == "" ? setName(false) : setName(true);
              }}
              type="text"
              id="name"
              placeholder="userName"
              name="name"
              className="input-setting"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="age"
              className={`label-setting
                 ${age ? "top-0 z-10" : "top-10 -z-10"}`}
            >
              userAge :
            </label>
            <input
              onInput={(e) => {
                e.target.value == "" ? setAge(false) : setAge(true);
              }}
              type="number"
              id="age"
              placeholder="userAge"
              name="age"
              className="input-setting"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email"
              className={`label-setting
                ${email ? "top-0 z-10" : "top-10 -z-10"}`}
            >
              userEmail :
            </label>
            <input
              onInput={(e) => {
                e.target.value == "" ? setEmail(false) : setEmail(true);
              }}
              type="email"
              id="email"
              placeholder="userEmail"
              name="email"
              className="input-setting"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className={`label-setting
                ${password ? "top-0 z-10" : "top-10 -z-10"}`}
            >
              userPassword :
            </label>
            <input
              onInput={(e) => {
                e.target.value == "" ? setPassword(false) : setPassword(true);
              }}
              type="password"
              id="password"
              placeholder="userPassword"
              name="password"
              className="input-setting"
            />
          </div>
          <div className="text-left">
            <button className="bg-[#1abc9c] px-3 py-2 rounded-md text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
