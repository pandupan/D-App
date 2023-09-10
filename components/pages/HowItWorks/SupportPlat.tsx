import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const SupportPlat = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className=" relative w-[616px] h-[640px]">
        <Image 
          src="/images/placeHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-7 w-[616px] h-[640px] justify-center">
        <h1 className="font-black text-4xl ">
        Support the Platform with F-N-F Stablecoin and Get F-N-F Merchandise
        </h1>
        <p>
        Purchase F-N-F merchandise using F-N-F stablecoin and show your support for the platform.
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
              Shop Now
              </h2>
              <p className="w-[296px]">
              Explore our collection of F-N-F merchandise and make a difference.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
              Support Us
              </h2>
              <p className="w-[296px]">
              Join the movement and show your support for the F-N-F Dapp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPlat