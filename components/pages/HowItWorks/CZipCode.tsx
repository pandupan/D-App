import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const CZipCode = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-6 w-[616px] h-[640px] justify-center">
        <h1 className="font-black text-4xl ">
        Choose a Zip Code and Discover Micro-Crowdfunding Campaigns
        </h1>
        <p>
        Explore a variety of micro-crowdfunding campaigns available in your chosen zip code, with donation amounts of $1, $5, and $10 in USDC stablecoin.
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {40}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
                Step 1:
              </h2>
              <p className="w-[296px]">
              Select a Zip Code and Browse Micro-Crowdfunding Campaigns
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {40}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
                Step 2:
              </h2>
              <p className="w-[296px]">
              Choose a Campaign and Make a Micro-Donation
              </p>
            </div>
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

export default CZipCode