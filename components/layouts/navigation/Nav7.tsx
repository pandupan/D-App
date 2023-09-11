import ButtonOutline from '@/components/core/buttons/ButtonOutline'
import ButtonOutlineFull from '@/components/core/buttons/ButtonOutlineFull'
import ButtonPrimary from '@/components/core/buttons/ButtonPrimary'
import ButtonPrimaryFull from '@/components/core/buttons/ButtonPrimaryfull'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'


const Nav7 = () => {
  const [nav, setNav] = useState(false)

  return (
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
  )
}

export default Nav7 