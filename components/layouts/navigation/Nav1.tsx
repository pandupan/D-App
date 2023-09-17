import ButtonOutline from '@/components/core/buttons/ButtonOutline'
import ButtonOutlineFull from '@/components/core/buttons/ButtonOutlineFull'
import ButtonPrimary from '@/components/core/buttons/ButtonPrimary'
import ButtonPrimaryFull from '@/components/core/buttons/ButtonPrimaryfull'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'


const Nav1 = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <div className="hidden w-full md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
        <Link href="/">
          <div className="font-bold text-2xl">
            <h2>Logo</h2>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-4 ">
          <Link href="/teams" className="flex justify-center items-center">
            <p>Meet Team</p>
          </Link>
          <Link href="/works" className="flex justify-center items-center">
            <p>How it Works</p>
          </Link>
          <div className="relative h-[72px] flex justify-center items-center group">
            <Link href="/donate">
              <p>Donate</p>
            </Link>
            <div className="hidden group-hover:flex border border-black absolute top-[74px] left-0 w-[250px] bg-white shadow-lg px-8 flex-col justify-center py-4">
              <Link href="/campaigns">
                <div className="py-2 hover:text-blue-500">Zip Code Campaigns</div>
              </Link>
              <Link href="/details">
                <div className="py-2 hover:text-blue-500 whitespace-nowrap">Campaign Details</div>
              </Link>
            </div>
          </div>
          <Link href="/merch">
            <div className="h-[72px] flex-row flex justify-center items-center gap-2 group">
              <p>Merchandise</p>
              <BsChevronDown size={15} className="mt-1" />
            {/* <div className="transform-gpu transition-transform group-hover:rotate-180">
            </div> */}
            {/* <div className="hidden group-hover:flex border border-black absolute top-[74px] left-0 w-[200px] bg-white shadow-lg px-8 flex-col justify-center py-4">
              <Link href="/product">
              <div className="py-2 hover:text-blue-500">Shop</div>
              </Link>
              <Link href="/product">
              <div className="py-2 hover:text-blue-500 whitespace-nowrap">Product</div>
              </Link>
            </div> */}
            </div>
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
        <Link href="/" className="font-bold text-2xl">Logo</Link>
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
            <li><Link href="/campaigns">Meet Teams</Link></li>
            <li><Link href="/donate">How it Works</Link></li>
            <li><Link href="/works">Donate</Link></li>
            <li>
              <div className="flex justify-between items-center">
                Merchaindise
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
  )
}

export default Nav1
