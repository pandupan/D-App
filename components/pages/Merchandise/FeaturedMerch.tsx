 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const FeaturedMerch = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container sm:px-4 px-4 sm:mt-48 sm:mb-48 mb-16">
      <div className="flex flex-col gap-10 sm:w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black sm:text-5xl text-3xl">
        Shop Our Featured F-N-F Merchandise Collection
        </h1>
        <p className="sm:w-[550px] sm:text-base text-sm">
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
      <div className=" relative aspect-square sm:w-[656px] sm:h-[640px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default FeaturedMerch