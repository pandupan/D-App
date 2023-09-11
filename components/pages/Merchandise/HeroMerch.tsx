import React from 'react'
import Image from 'next/image'


const HeroMerch = () => {
  return (
    <div className="flex justify-start w-full sm:h-[497px] h-[335px]">
              <div className="relative w-full sm:h-[497px] h-[335px]">
                <Image
                  src="/images/PlaceHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' place-self-center sm:mx-10 sm:container px-4 absolute flex flex-col text-white sm:gap-8 gap-4'>
                <h1 className='sm:text-5xl text-3xl font-black sm:w-[768px] sm:h-[58px] w-[250px] h-[86px]'>Medium length heading goes here</h1>
                <p className='sm:w-[680px] sm:h-[54px] w-[270px] h-[72px] sm:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
