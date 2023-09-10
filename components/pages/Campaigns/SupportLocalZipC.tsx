import React from 'react'
import Image from 'next/image'
import ButtonPrimary from '@/components/core/buttons/ButtonPrimary'
import ButtonOutline from '@/components/core/buttons/ButtonOutline'

const SupportLocalZipC = () => {
  return (
    <div className="flex justify-start w-full h-[421px]">
              <div className="relative w-full h-[421px]">
                <Image
                  src="/images/placeHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' my-[122px] container absolute flex flex-col text-white gap-4'>
                <h1 className='text-5xl font-black '>Support Local Zip Code Campaigns</h1>
                <p>Join a campaign waitlist or start donating to your local zip code campaigns.</p>
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

export default SupportLocalZipC
