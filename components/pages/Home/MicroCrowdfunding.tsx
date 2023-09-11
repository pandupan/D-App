 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const MicroCrowdfunding = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between px-4 sm:px-0 sm:container sm:my-48 my-0">
      <div className="flex flex-col sm:gap-10 gap-4 sm:w-[600px] w-full mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black sm:text-5xl text-3xl ">
          Support Local Causes with Micro-Crowdfunding
        </h1>
        <p className="sm:text-base text-sm">
        Donate to micro-crowdfunding campaigns in your local zip code and make a difference in causes like clean water, clothing, and food.
        </p>
        <div className="flex flex-row gap-3 mb-[40px]">
            <ButtonOutline title = {"Donate"}/>        
            <button className="flex my-auto">
              Learn More
            </button>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative sm:w-[616px] sm:h-[640px] w-full h-[300px] items-center">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default MicroCrowdfunding