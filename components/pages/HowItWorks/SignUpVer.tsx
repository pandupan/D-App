import React from "react";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const SignUpVer = () => {
  return(
    <div className="flex justify-between container mb-48">
      <div className="flex flex-col gap-6 w-[616px] h-[640px] justify-center">
        <h1 className="font-black text-4xl ">
        Sign Up and Verify Your Zip Code for a Seamless Experience
        </h1>
        <p>
        To get started, simply sign up and grant Meta Mask access for registration and login. You&apos;ll also need to allow geolocation access to verify your zip code.
        </p>
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

export default SignUpVer