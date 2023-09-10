 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const FeaturedMerch = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-10 w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black text-5xl ">
        Shop Our Featured F-N-F Merchandise Collection
        </h1>
        <p className="w-[550px]">
        Discover our exclusive collection of F-N-F merchandise, including t-shirts, hats, coffee mugs, candles, hand soap, and home decor. Show your support for a great cause while looking stylish.
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

export default FeaturedMerch