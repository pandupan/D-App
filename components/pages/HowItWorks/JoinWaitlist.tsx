 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const JoinWaitlist = () => {
  return(
    <div className="flex justify-between container my-28">
      <div className="flex flex-col gap-7 w-[616px] h-[640px] justify-center">
      <div className="font-bold">Empower</div>
        <h1 className="font-black text-5xl ">
        Join the Waitlist and Make a Difference
        </h1>
        <p>
        Donate to your chosen campaign and join the waitlist for a chance to receive a USDC award. Every contribution counts!
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {40}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-lg">
                Step 1:
              </h2>
              <p className="w-[296px]">
              Choose a Campaign and Make a Donation
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
              Join the Waitlist for a Chance to Receive an Award
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
            <ButtonOutline title = {"Donate"}/>        
            <div className="flex my-auto">
              Join
            </div>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative w-[656px] h-[640px]">
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