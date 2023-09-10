import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const RevoMicro = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-10 w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black text-5xl ">
        Revolutionizing Micro-Crowdfunding with Stablecoins and NFTs
        </h1>
        <p>
        Welcome to the F-N-F Dapp, a decentralized micro-crowdfunding platform that aims to transform the way we give and receive through the use of stablecoins and NFTs.
        </p>
        <div className="flex flex-row gap-3">
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

export default RevoMicro