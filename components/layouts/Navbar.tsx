"use client";
import {BsChevronDown} from "react-icons/bs"
import ButtonOutline from "../core/buttons/ButtonOutline";
import ButtonPrimary from "../core/buttons/ButtonPrimary";

const Navbar = () => {
  return (
    <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
      <div className="font-bold text-2xl">
        <h2>Logo</h2>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <p>Link One</p>
        </div>
        <div className="flex justify-center items-center">
          <p>Link Two</p>
        </div>
        <div className="flex justify-center items-center">
          <p>Link Three</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p>Link Four</p>
          <BsChevronDown size={15} className="mt-1"/>
        </div>
        <div className="flex justify-center items-center">
          <ButtonOutline title="Button"/>
        </div>
        <div className="flex justify-center items-center">
          <ButtonPrimary title="Button"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
