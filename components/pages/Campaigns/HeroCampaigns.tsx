import React from 'react'
import Image from 'next/image'

const HeroCampaigns = () => {
  return (
    <div className="flex justify-center w-full sm:h-[343px] h-[250px] mt-16 sm:mt-0">
      <div className="relative w-full sm:h-[343px] h-[250px]">
        <Image
          src="/images/placeHolder_3.png"
          alt="Icon"
          fill={true}
        />
      </div>
      <div className='justify-center items-center align-center place-self-center my-[122px] absolute flex flex-col text-white gap-4'>
        <h1 className='sm:text-5xl text-4xl font-black text-center'>Find Local Campaigns</h1>
        <p className='text-center sm:text-base text-sm'>Discover and support micro-crowdfunding campaigns in your local zip code.</p>
      </div>
    </div>
  )
}

export default HeroCampaigns
