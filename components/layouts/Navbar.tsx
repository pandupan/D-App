"use client";
import {BsChevronDown} from "react-icons/bs"
import ButtonOutline from "../core/buttons/ButtonOutline";
import ButtonPrimary from "../core/buttons/ButtonPrimary";
import { usePathname } from "next/navigation";


const navbar1 = ["/", "/product"]
const navbar2 = ["/teams"]
const navbar3 = ["/works"]
const navbar4 = ["/campaigns"]
const navbar5 = ["/details"]
const navbar6 = ["/donate"]
const navbar7 = ["/merch"]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div>

      {navbar1.includes(pathname) && (
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
      )}

      {navbar2.includes(pathname) && (
        <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <p>Our Mision</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Teams</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Parthners</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>Service</p>
              <BsChevronDown size={15} className="mt-1"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonOutline title="Learn"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary title="Sign Up"/>
            </div>
          </div>
        </div>
      )}

      {navbar3.includes(pathname) && (
        <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <p>Discover Campaigns</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Start a Campaigns</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Donate Now</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>More Options</p>
              <BsChevronDown size={15} className="mt-1"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonOutline title="Sign Up"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary title="Login"/>
            </div>
          </div>
        </div>
      )}

      {navbar4.includes(pathname) && (
        <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <p>Explore Campaigns</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Donate Now</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Join Waitlist</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>More Options</p>
              <BsChevronDown size={15} className="mt-1"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonOutline title="Sign Up"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary title="Login"/>
            </div>
          </div>
        </div>
      )}

      {navbar5.includes(pathname) && (
        <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <p>Discover Campaigns</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Donate Now</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Get Involved</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>More Options</p>
              <BsChevronDown size={15} className="mt-1"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonOutline title="Sign Up"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary title="Login"/>
            </div>
          </div>
        </div>
      )}

      {navbar6.includes(pathname) && (
        <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <p>Home</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Donate</p>
            </div>
            <div className="flex justify-center items-center">
              <p>About Us</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>Campaigns</p>
              <BsChevronDown size={15} className="mt-1"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonOutline title="Sign Up"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary title="Login"/>
            </div>
          </div>
        </div>
      )}

      {navbar7.includes(pathname) && (
        <div className="w-full h-[72px] flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <p>Home</p>
            </div>
            <div className="flex justify-center items-center">
              <p>About Us</p>
            </div>
            <div className="flex justify-center items-center">
              <p>Contact</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p>Product</p>
              <BsChevronDown size={15} className="mt-1"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonOutline title="Sign Up"/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonPrimary title="Login"/>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar
