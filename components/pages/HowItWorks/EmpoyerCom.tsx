import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const EmpoyerCom = () => {
  return(
    <div className="flex justify-between container my-28">
      <div className="flex flex-col gap-10 w-[616px] mt-32">
        <h1 className="font-black text-6xl ">
        Empower Your Community with F-N-F Dapp
        </h1>
        <p>
        Discover how the F-N-F Dapp revolutionizes micro-crowdfunding to create positive change in your local community.
        </p>
        <div className="flex flex-row gap-3">
          <ButtonPrimary title = {"Get Started"}/>  
          <ButtonOutline title = {"Learn More"}/>  
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

export default EmpoyerCom