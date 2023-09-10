 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const MicroCrowdfunding = () => {
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
      </div>
    </div>
  )
}

export default MicroCrowdfunding