 
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import {PiLinkSimpleBold} from "react-icons/pi"
import {AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"

const HightlightingTopZip = () => {
  return (
    <div className="xl:container flex-col lg:px-8 px-4 md:mt-48 md:mb-48 mt-12 mb-28">
      <div className="flex flex-row gap-2">
        <div className="my-1 text-black">
          <AiOutlineLeft size={10} />
        </div>
        <p> Latest Post </p>
      </div>
      <div className="flex flex-row font-semibold gap-4 mt-[50px] text-sm">
        <div className="bg-[#f4f4f4] w-auto h-auto px-2 py-1 ">Inspiration</div>
        <div className="flex items-center">5 Minutes Read</div>
      </div>
      <h1 className="font-black sm:text-5xl text-3xl mt-[25px]">
        Highlighting Top Zip Code Campaigns to Inspire Contribution
      </h1>
      <div className="relative xl:w-[1312px] w-full xl:h-[600px] sm:h-auto h-[168px] xl:mt-[80px] mt-10">
        <Image src="/images/placeHolder_1.png" alt="Icon" fill={true} />
      </div>
      
      <div className="flex xl:flex-row flex-col xl:justify-between mt-[25px] w-[1312px]">

        <div className="flex flex-row gap-10">
          <div className="flex flex-col">
            <div className="sm:text-base text-sm w-[72px]">Written by</div>
            <div className="font-medium">John Doe</div>
          </div>
          <div className="flex flex-col">
            <div className="sm:text-base text-sm sm:w-full w-[93px]">Published on</div>
            <div className="font-medium sm:w-full w-[139px]">22nd January 2021</div>
          </div>
        </div>

        <div className="flex flex-row gap-4 sm:mt-0 mt-4">
          <div className="flex justify-center pt-1 border bg-[#f4f4f4] h-[32px] w-[32px] rounded-full">
          <PiLinkSimpleBold size = {24}/>
          </div>
          <div className="flex justify-center pt-1 border bg-[#f4f4f4] h-[32px] w-[32px] rounded-full">
          <AiFillLinkedin size = {24}/>
          </div>
          <div className="flex justify-center pt-1 border bg-[#f4f4f4] h-[32px] w-[32px] rounded-full">
          <BiLogoFacebook size = {24}/>
          </div>
          <div className="flex justify-center pt-1 border bg-[#f4f4f4] h-[32px] w-[32px] rounded-full">
          <AiOutlineTwitter size = {24}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HightlightingTopZip;
