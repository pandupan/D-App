 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const GetExclusive = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-7 w-[600px] mt-32">
        <div className="font-bold">
          Support
        </div>
        <h1 className="font-black text-5xl ">
        Get Exclusive F-N-F Merchandise and Support the Platform
        </h1>
        <p className="w-[570px]">
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

export default GetExclusive