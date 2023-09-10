import React from 'react'
import Image from 'next/image'


const HeroDetails = () => {
  return (
    <div className="flex justify-start w-full h-[497px]">
              <div className="relative w-full h-[497px]">
                <Image
                  src="/images/PlaceHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' my-[110px] container absolute flex flex-col text-white gap-8'>
                <div className='font-semibold'>Empower</div>
                <h1 className='text-5xl font-black '>Supporting Local Initiatives</h1>
                <p className='w-[680px]'>Join us in empowering local communities by supporting micro-crowdfunded campaigns in your zip code.</p>
                <div className='flex flex-row gap-4'>
                  <button className='text-white bg-black flex justify-center place-items-center w-[103px] h-[48px]'>
                  Donate
                  </button>
                  <button className='text-white border-white border flex justify-center place-items-center w-[103px] h-[48px]'>
                  Learn More
                  </button>
                </div>
              </div>
    </div>
  )
}

export default HeroDetails
