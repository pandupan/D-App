<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const SupportLocal = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-10 w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black text-5xl ">
          Support Local Causes with Micro-Crowdfunding
        </h1>
        <p>
        Donate to micro-crowdfunding campaigns in your local zip code and make a difference in causes like clean water, clothing, and food.
        </p>
        <div className="flex flex-row gap-3">
            <ButtonOutline title = {"Donate"}/>        
            <div className="flex my-auto">
              Learn More
            </div>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative w-[650px] h-[650px]">
        <Image 
          src="/images/placeHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
=======
import ButtonOutline from "@/components/core/buttons/ButtonOutline"
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"


const SupportLocal = () => {
  return (
    <div className="w-full flex items-center justify-between px-[84px] min-h-[50vh] lg:-mt-60">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-normal">Support Local Initiatives with Donations</h1>
        <p>Join our platform and start donating to campaigns in your area</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <ButtonPrimary title="Sign Up"/>
        <ButtonOutline title="Learn More"/>

>>>>>>> cc6a39bab3d0b51a0e843625af17e1867dd08cb5
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default SupportLocal
=======
export default SupportLocal
>>>>>>> cc6a39bab3d0b51a0e843625af17e1867dd08cb5
