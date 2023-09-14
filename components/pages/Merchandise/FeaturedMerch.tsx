 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const FeaturedMerch = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 sm:gap-2 xl:gap-0 sm:mt-48 sm:mb-48 mb-16">
      <div className="flex flex-col gap-10 sm:w-full lg:w-[320px] xl:w-[600px] mt-32">
        <BiSolidCube size = {70}/>
        <h1 className="font-black sm:text-5xl text-3xl">
        Shop Our Featured F-N-F Merchandise Collection
        </h1>
        <p className="sm:w-full lg:w-[320px] xl:w-[550px] sm:text-base text-sm">
        Discover our exclusive collection of F-N-F merchandise, including t-shirts, hats, coffee mugs, candles, hand soap, and home decor. Show your support for a great cause while looking stylish.
        </p>
        <div className="flex flex-row gap-3">
            <ButtonOutline title = {"Shop"}/>        
            <div className="flex mt-[10px]">
            </div>
        </div>
      </div>
      <div className=" relative aspect-square md:w-[656px] md:h-[640px] lg:mt-0 md:mt-[20px] mt-[40px]">
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