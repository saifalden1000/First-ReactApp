import React from "react";
import error from "../../assets/error.png";

export default function NotFound() {
  return (
    <div className="bg-[#B5FFEC] pt-28 pb-11 flex justify-center items-center">
      <img src={error} alt="" />
    </div>
  );
}
