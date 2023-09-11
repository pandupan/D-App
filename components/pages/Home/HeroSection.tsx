import React from 'react'
import ButtonOutline from '../../core/buttons/ButtonOutline'
import ButtonPrimary from '../../core/buttons/ButtonPrimary'

const HeroSection = () => {
  return (
    <div className="w-full sm:min-h-screen flex flex-col">
      <h1 className="sm:text-6xl text-4xl font-bold text-center mt-[225px]">Join the F-N-F Dapp revolution today!</h1>
      <p className=" sm:text-xl text-center sm:mt-[80px] mt-[20px] text-sm">Experience the power of decentralized micro-crowdfunding and earn exclusive F-N-F NFTs.</p>
      <div className="sm:mt-[220px] mt-[20px] flex justify-center items-center gap-6 ">
        <ButtonPrimary title="Sign Up"/>
        <ButtonOutline title="Learn More"/>
      </div>
    </div>
  )
}

export default HeroSection
