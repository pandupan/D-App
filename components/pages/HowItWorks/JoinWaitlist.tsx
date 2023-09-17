import Link from "next/link";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";


const JoinWaitlist = () => {
  return(
    <div className="flex lg:flex-row lg:gap-0 sm:gap-10 flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">
      <div className="flex flex-col gap-7 sm:w-[616px] sm:h-[640px] justify-center">
      <div className="font-bold">Empower</div>
        <h1 className="font-black sm:text-5xl text-3xl xl:w-full sm:w-full lg:w-[340px]">
        Join the Waitlist and Make a Difference
        </h1>
        <p className="sm:text-lg text-sm xl:w-full sm:w-full lg:w-[350px]">
        Donate to your chosen campaign and join the waitlist for a chance to receive a USDC award. Every contribution counts!
        </p>
        <div className="flex  lg:flex-col xl:flex-row sm:flex-row flex-col gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {36}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
                Step 1:
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Choose a Campaign and Make a Donation
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {36}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
                Step 2:
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Join the Waitlist for a Chance to Receive an Award
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:justify-between gap-3">
            <ButtonOutline title = {"Donate"}/>     
            <a href="" className="flex flex-row gap-3 md:mr-60">
              <div className="flex my-auto">
                Join
              </div>
              <div className="flex mt-[10px]">
              <BiSolidCube size = {22}/>
              </div>
            </a>   
        </div>
      </div>
      <div className=" relative aspect-square md:w-[616px] md:h-[640px] lg:mt-[20px] mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default JoinWaitlist