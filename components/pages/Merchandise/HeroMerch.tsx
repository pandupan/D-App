import React from 'react'
import Image from 'next/image'


const HeroMerch = () => {
  return (
    <div className="flex justify-start w-full sm:h-[421px] h-[354px]">
              <div className="relative w-full sm:h-[421px] h-[354px]">
                <Image
                  src="/images/placeHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' my-[122px] sm:container sm:px-8 px-4 absolute flex flex-col place-self-center text-white gap-4'>
                <h1 className='sm:text-5xl text-4xl font-black '>Medium length heading here</h1>
                <p className='sm:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='flex flex-row gap-4'>
                  <button className='text-white bg-black flex justify-center place-items-center w-[103px] h-[48px]'>
                    Sign Up
                  </button>
                  <button className='text-white border-white border flex justify-center place-items-center w-[103px] h-[48px]'>
                    Donate
                  </button>
                </div>
              </div>
    </div>
  )
}

export default HeroMerch
