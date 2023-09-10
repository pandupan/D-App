 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const SupportFnFPlat= () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-10 w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black text-5xl ">
        Support the F-N-F Platform with Exclusive Merchandise
        </h1>
        <p>
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
      <div className=" relative w-[616px] h-[640px]">
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