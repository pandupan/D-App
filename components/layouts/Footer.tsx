import React from 'react'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiLogoYoutube} from 'react-icons/bi'

const Footer = () => {
  return (
    <div>
    <div className='container px-16'>
      <div className="font-bold text-3xl">
        <h2>Logo</h2>
      </div>
      <div className='flex justify-between'>

        <div className='mt-8'>
          <h3 className='font-medium text-sm'>Address:</h3>
          <p className='text-sm'>
            Level 1, 12 Sample St, Sydney NSW 2000
          </p>
          <h3 className='font-medium text-sm mt-6'>Contact:</h3>
          <p className='text-sm underline underline-offset-3'>
            1800 123 4567
          </p>
          <p className='text-sm underline underline-offset-3'>info@relume.io</p>
          
          <div className='flex flex-row mt-6 gap-3'>
          <BiLogoFacebook size = {25}/>
          <AiOutlineInstagram size = {25}/>
          <AiOutlineTwitter size = {25} />
          <AiFillLinkedin size = {25} />
          <BiLogoYoutube size = {25} />
          </div>
        </div>

        <div className='flex sm:justify-between sm:gap-x-20 font-semibold text-base mr-16'>
          <div className='flex flex-col gap-y-3'>
            <h2 className=''>About Us</h2>
            <h2 className=''>Services</h2>
            <h2 className=''>Products</h2>
            <h2 className=''>Blog</h2>
            <h2 className=''>Contact</h2>
          </div>
          <div className='flex flex-col gap-y-3'>
            <h2 className=''>FAQ</h2>
            <h2 className=''>Support</h2>
            <h2 className=''>Terms</h2>
            <h2 className=''>Privacy</h2>
            <h2 className=''>Sitemap</h2>
          </div>
        </div>

      </div>
    </div>
      <div className='border-t-[2px] border-black mt-20 container w-full'>
      </div>
      <div className='flex justify-between container px-12 mt-8 mb-28'>
        <h3 className='text-sm'>
        © 2023 Example Company. All rights reserved.  
        </h3>
        <div className='flex flex-row text-sm underline underline-offset-3 gap-10'>
        <h3>
          Privacy Policy
        </h3>
        <h3>
          Terms of Service
        </h3>
        <h3>
          Cookie Policy
        </h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
