import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";

const Footer3 = () => {
  return (
    <div>
      <div className="sm:container px-4 sm:px-16">
        <div className="font-bold text-3xl">
          <h2 className="sm:text-3xl text-3xl">Logo</h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-between justify-start">
          <div className="mt-8">
            <h3 className="font-medium text-sm">Address:</h3>
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
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-8 mt-10 sm:mt-0 sm:justify-between sm:gap-x-20 font-semibold sm:text-base text-sm sm:mr-16">
            <div className="flex flex-col gap-y-3">
              <h2 className="">About Us</h2>
              <h2 className="">FAQs</h2>
              <h2 className="">Contact Us</h2>
              <h2 className="">Support</h2>
              <h2 className="">Blog</h2>
            </div>
            <div className="flex flex-col gap-y-3">
              <h2 className="">Terms of User</h2>
              <h2 className="">Privacy Policy</h2>
              <h2 className="">Cookie Policy</h2>
              <h2 className="">Sitemap</h2>
              <h2 className="">Accessibility</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-black sm:mt-20 mt-12 sm:container px-4 sm:px-16 sm:w-[1280px] w-[290px] "></div>
      <div className="flex sm:container px-4 sm:px-16 sm:flex-row flex-col-reverse sm:justify-between gap-5  mt-8 sm:mb-28 mb-14">
        <h3 className="text-sm">
          © 2023 Example Company. All rights reserved.
        </h3>
        <div className="flex sm:flex-row flex-col mt-4 sm:mt-0 gap-4 text-sm underline underline-offset-3 sm:gap-10">
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Cookie Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
