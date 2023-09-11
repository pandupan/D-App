"use client";
import { useState } from "react";
import {BsChevronDown} from "react-icons/bs"
import ButtonOutline from "../core/buttons/ButtonOutline";
import ButtonPrimary from "../core/buttons/ButtonPrimary";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ButtonOutlineFull from "../core/buttons/ButtonOutlineFull";
import ButtonPrimaryFull from "../core/buttons/ButtonPrimaryfull";
import Link from "next/link";


const navbar1 = ["/", "/product"]
const navbar2 = ["/teams"]
const navbar3 = ["/works"]
const navbar4 = ["/campaigns"]
const navbar5 = ["/details"]
const navbar6 = ["/donate"]
const navbar7 = ["/merch"]

const Navbar = () => {
  const pathname = usePathname()
  const [nav, setNav] = useState(false)

  return (
    <div>

      {navbar1.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
              <Link href="/campaigns" className="flex justify-center items-center">
                <p>Link One</p>
              </Link>
              <Link href="/donate" className="flex justify-center items-center">
                <p>Link Two</p>
              </Link>
              <Link href="/works" className="flex justify-center items-center">
                <p>Link Three</p>
              </Link>
              <Link href="/merch" className="flex justify-center items-center gap-2">
                <p>Link Four</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Button"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Button"/>
              </div>
            </div>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/campaigns">Discover Campaigns</Link></li>
                <li><Link href="/donate">Donate Now</Link></li>
                <li><Link href="/works">Join Waitlist</Link></li>
                <li>
                  <div className="flex justify-between items-center">
                    Explore
                    <BsChevronDown size={15}/>
                  </div>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

      {navbar2.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
              <Link href="/teams" className="flex justify-center items-center">
                <p>Our Mision</p>
              </Link>
              <Link href="/teams" className="flex justify-center items-center">
                <p>Teams</p>
              </Link>
              <Link href="/teams" className="flex justify-center items-center">
                <p>Parthners</p>
              </Link>
              <Link href="/product" className="flex justify-center items-center gap-2">
                <p>Service</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Learn"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Sign Up"/>
              </div>
            </div>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/teams">Our Mision</Link></li>
                <li><Link href="/teams">Teams</Link></li>
                <li><Link href="/teams">Patners</Link></li>
                <li>
                  <div className="flex justify-between items-center">
                    <Link href="product">Service</Link>
                    <BsChevronDown size={15}/>
                  </div>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

      {navbar3.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center">
                <p><Link href="/campaigns">Discover Campaigns</Link></p>
              </div>
              <Link href="/campaigns" className="flex justify-center items-center">
                <p>Start a Campaigns</p>
              </Link>
              <div className="flex justify-center items-center">
                <p><Link href="/donate">Donate Now</Link></p>
              </div>
              <Link href="/" className="flex justify-center items-center gap-2">
                <p>More Options</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Sign Up"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Login"/>
              </div>
            </div>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/campaigns">Discover Campaigns</Link></li>
                <li><Link href="/donate">Donate Now</Link></li>
                <li><Link href="/works">Join Waitlist</Link></li>
                <li>
                  <div className="flex justify-between items-center">
                    <Link href="/details">Explore</Link>
                    <BsChevronDown size={15}/>
                  </div>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

      {navbar4.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
              <Link href="/details" className="flex justify-center items-center">
                <p><Link href="">Explore Campaigns</Link></p>
              </Link>
              <div className="flex justify-center items-center">
                <p><Link href="/donate">Donate Now</Link></p>
              </div>
              <div className="flex justify-center items-center">
                <p><Link href="/works">Join Waitlist</Link></p>
              </div>
              <Link href="/" className="flex justify-center items-center gap-2">
                <p>More Options</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Sign Up"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Login"/>
              </div>
            </div>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/campaigns">Explore Campaigns</Link></li>
                <li><Link href="/details">Start a Campaign</Link></li>
                <li><Link href="/donate">Donate Now</Link></li>
                <li>
                  <Link href="/" className="flex justify-between items-center">
                    More Options
                    <BsChevronDown size={15}/>
                  </Link>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

      {navbar5.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center">
                <p><Link href="/campaigns">Discover Campaigns</Link></p>
              </div>
              <div className="flex justify-center items-center">
                <p><Link href="/donate">Donate Now</Link></p>
              </div>
              <Link href="/works" className="flex justify-center items-center">
                <p>Get Involved</p>
              </Link>
              <Link href="/" className="flex justify-center items-center gap-2">
                <p>More Options</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Sign Up"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Login"/>
              </div>
            </div>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/campaigns">Discover Campaigns</Link></li>
                <li><Link href="/donate">Donate Now</Link></li>
                <li><Link href="/works">Get Involved</Link></li>
                <li>
                  <Link href="/" className="flex justify-between items-center">
                    More Options
                    <BsChevronDown size={15}/>
                  </Link>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

      {navbar6.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <Link href="/" className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center">
                <p>Home</p>
              </div>
              <Link href="/donate" className="flex justify-center items-center">
                <p>Donate</p>
              </Link>
              <Link href="/works" className="flex justify-center items-center">
                <p>About Us</p>
              </Link>
              <Link href="/campaigns" className="flex justify-center items-center gap-2">
                <p>Campaigns</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Sign Up"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Login"/>
              </div>
            </Link>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/works">About Us</Link></li>
                <li>
                  <Link href="/campaigns" className="flex justify-between items-center">
                    Campaigns
                    <BsChevronDown size={15}/>
                  </Link>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

      {navbar7.includes(pathname) && (
        <>
          <div className="hidden w-full h-[72px] md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
            <Link href="/" className="font-bold text-2xl">
              <h2>Logo</h2>
            </Link>
            <div className="flex justify-center items-center gap-4">
              <Link href="/" className="flex justify-center items-center">
                <p>Home</p>
              </Link>
              <Link href="/works" className="flex justify-center items-center">
                <p>About Us</p>
              </Link>
              <Link href="/merch" className="flex justify-center items-center">
                <p>Contact</p>
              </Link>
              <Link href="/product" className="flex justify-center items-center gap-2">
                <p>Product</p>
                <BsChevronDown size={15} className="mt-1"/>
              </Link>
              <div className="flex justify-center items-center">
                <ButtonOutline title="Sign Up"/>
              </div>
              <div className="flex justify-center items-center">
                <ButtonPrimary title="Login"/>
              </div>
            </div>
          </div>

          <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
            <div className="font-bold text-2xl">Logo</div>
            {nav ? 
              <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
            : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
            }
          </div>


          <div className={
            nav ?
              "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
            :
              "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          }>
            <div className="w-full h-full px-[25px]">
              <ul className="space-y-4 text-base my-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/works">About Us</Link></li>
                <li><Link href="/merch">Contact</Link></li>
                <li>
                  <Link href="/product" className="flex justify-between items-center">
                    Products
                    <BsChevronDown size={15}/>
                  </Link>
                </li>
              </ul>
              <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <ButtonOutlineFull title="Sign Up"/>
                <ButtonPrimaryFull title="Login"/>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Navbar
