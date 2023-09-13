 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const SupportFnFPlat= () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">
      <div className="flex flex-col sm:gap-10 gap-6 lg:w-[600px] mt-32">
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

export default SupportFnFPlat