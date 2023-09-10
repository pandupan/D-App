import React from 'react'
import Image from 'next/image'


const HeroMerch = () => {
  return (
    <div className="flex justify-start w-full h-[497px]">
              <div className="relative w-full h-[497px]">
                <Image
                  src="/images/PlaceHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' my-[110px] mx-10 container absolute flex flex-col text-white gap-8'>
                <h1 className='text-5xl font-black '>Medium length heading goes here</h1>
                <p className='w-[680px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='flex flex-row gap-4'>
                  <button className='text-white bg-black flex justify-center place-items-center w-[103px] h-[48px]'>
                  Button
                  </button>
                  <button className='text-white border-white border flex justify-center place-items-center w-[103px] h-[48px]'>
                  Button
                  </button>
                </div>
              </div>
    </div>
  )
}

export default HeroMerch
