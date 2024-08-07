import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="p-10 bg-[#2c3e50]">
        <div className="container py-4 text-white mx-auto ">
          <div className="grid md:grid-cols-3">
            <div className="text-center m-6">
              <h3 className="font-semibold text-3xl mb-3">LOCATION</h3>
              <p className="mb-4">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="text-center m-6">
              <h3 className="font-semibold text-3xl mb-3">AROUND THE WEB</h3>
              <div className="social-icons text-base flex justify-center items-center">
                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>

                <div className="me-2 size-8 border rounded-full cursor-pointer flex justify-center items-center">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
              </div>
            </div>

            <div className="text-center m-6">
              <h3 className="font-semibold text-3xl mb-3">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a252f] py-3">
        <div className="container text-center mx-auto">
          <p className="text-white my-2">Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
}
