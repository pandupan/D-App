 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const GetExclusive = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 gap-4 mb-28">
      <div className="flex flex-col sm:gap-7 gap-6 sm:w-[600px] w-full mt-32">
        <div className="font-medium">
          Support
        </div>
        <h1 className="font-black sm:text-5xl text-3xl xl:w-full sm:w-full lg:w-[300px] ">
        Get Exclusive F-N-F Merchandise and Support the Platform
        </h1>
        <p className="xl:w-[570px] sm:w-full lg:w-[300px] w-full sm:text-base text-sm">
        Purchase exclusive F-N-F merchandise with F-N-F stablecoin to support the platform and show your pride.
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
      <div className=" relative aspect-square sm:w-[650px] sm:h-[650px] w-full h-[300px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default GetExclusive