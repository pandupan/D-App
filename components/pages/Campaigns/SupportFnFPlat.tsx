 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const SupportFnFPlat= () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container sm:px-0 px-4 sm:mt-48 sm:mb-48 mb-28">
      <div className="flex flex-col sm:gap-10 gap-6 sm:w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black sm:text-5xl text-3xl ">
        Support the F-N-F Platform with Exclusive Merchandise
        </h1>
        <p className="sm:text-base text-sm sm:w-full w-[292px]">
        Explore our collection of F-N-F merchandise and make a difference by purchasing them with F-N-F stablecoin. Every purchase supports the platform and its micro-crowdfunded campaigns.
        </p>
        <div className="flex flex-row gap-3">
            <ButtonOutline title = {"Shop"}/>        
            <div className="flex my-auto">
              Learn More
            </div>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative aspect-square sm:w-[616px] sm:h-[640px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default SupportFnFPlat