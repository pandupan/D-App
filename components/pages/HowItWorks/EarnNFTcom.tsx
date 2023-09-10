import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const EarnNFTcom = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-7 w-[616px] h-[640px] justify-center">
      <div className="font-bold">Empower</div>
        <h1 className="font-black text-5xl ">
        Earn F-N-F NFTs and Contribute to the Community
        </h1>
        <p>
        By reaching donation milestones and contributing to the community, you can earn exclusive F-N-F NFTs that showcase your support.
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
              Reach Milestones
              </h2>
              <p className="w-[296px]">
              Donate and contribute to the community to unlock unique F-N-F NFTs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
              Show Support
              </h2>
              <p className="w-[296px]">
              Display your commitment to giving back with exclusive F-N-F NFTs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-3">
            <ButtonOutline title = {"Learn More"}/>        
            <div className="flex my-auto">
              Sign Up
            </div>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative w-[656px] h-[640px]">
        <Image 
          src="/images/placeHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default EarnNFTcom