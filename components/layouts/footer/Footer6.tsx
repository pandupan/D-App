import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";

const Footer6 = () => {
  return (
    <div>
      <div className="sm:container px-4 sm:px-16">
        <div className="font-bold text-3xl">
          <h2 className="sm:text-3xl text-3xl">Logo</h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-between justify-start">
          <div className="mt-8">
            {/* <h3 className="font-medium text-sm">Address:</h3>
            <p className="text-sm">Level 1, 12 Sample St, Sydney NSW 2000</p>
            <h3 className="font-medium text-sm mt-6">Contact:</h3>
            <p className="text-sm underline underline-offset-3">
              1800 123 4567
            </p>
            <p className="text-sm underline underline-offset-3">
              info@relume.io
            </p>

            <div className="flex flex-row mt-6 gap-3 w-[168px]">
              <BiLogoFacebook size={25} />
              <AiOutlineInstagram size={25} />
              <AiOutlineTwitter size={25} />
              <AiFillLinkedin size={25} />
              <BiLogoYoutube size={25} />
            </div> */}
          </div>

          <div className="flex sm:flex-row flex-col gap-8 mt-10 sm:mt-0 sm:justify-between sm:gap-x-20 font-semibold sm:text-base text-sm sm:mr-16">
            {/* old */}
            {/* <div className="flex flex-col gap-y-3">
              <h2 className="">Link One</h2>
              <h2 className="">Link Two </h2>
              <h2 className="">Link Three</h2>
              <h2 className="">Link Four</h2>
              <h2 className="">Link Five</h2>
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="">Link Six</h2>
              <h2 className="">Link Seven</h2>
              <h2 className="">Link Eight</h2>
              <h2 className="">Link Nine</h2>
              <h2 className="">Link Ten</h2>
            </div> */}
                      {/* new */}
                      <div className="flex flex-col gap-y-3">
              <h2 className="">Meet Team</h2>
              <h2 className="">How it Works</h2>
              <h2 className="">Donate</h2>
              <h2 className="">Contact</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-black w-[90%] mx-auto sm:mt-20 mt-12" />
      <div className="flex sm:container px-4 sm:px-16 sm:flex-row flex-col-reverse sm:justify-between gap-5  mt-8 sm:mb-28 mb-14">
        <h3 className="text-sm">
          © 2023 Example Company. All rights reserved.
        </h3>
        <div className="flex sm:flex-row flex-col mt-4 sm:mt-0 gap-4 text-sm underline underline-offset-3 sm:gap-10">
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Cookies Settings</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer6;
