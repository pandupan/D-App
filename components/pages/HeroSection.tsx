import React from 'react'
import ButtonOutline from '../core/buttons/ButtonOutline'
import ButtonPrimary from '../core/buttons/ButtonPrimary'

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col mt-[225px]">
      <h1 className="text-6xl font-bold text-center">Join the F-N-F Dapp revolution today!</h1>
      <p className=" text-xl text-center mt-[80px]">Experience the power of decentralized micro-crowdfunding and earn exclusive F-N-F NFTs.</p>
      <div className="mt-[220px] flex justify-center items-center gap-6 ">
        <ButtonPrimary title="Sign Up"/>
        <ButtonOutline title="Learn More"/>
      </div>
    </div>
  )
}

export default HeroSection
