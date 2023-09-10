import React from 'react'
import Image from 'next/image'

const HeroCampaigns = () => {
  return (
    <div className="flex justify-center w-full h-[343px]">
              <div className="relative w-full h-[343px]">
                <Image
                  src="/images/placeHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className='justify-center items-center align-center my-[122px] absolute flex flex-col text-white gap-4'>
                <h1 className='text-5xl font-black '>Find Local Campaigns</h1>
                <p>Discover and support micro-crowdfunding campaigns in your local zip code.</p>
              </div>
    </div>
  )
}

export default HeroCampaigns
