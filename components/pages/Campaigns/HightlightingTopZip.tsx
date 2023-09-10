 
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import {PiLinkSimpleBold} from "react-icons/pi"
import {AiFillLinkedin, AiOutlineTwitter} from "react-icons/ai"
import {BiLogoFacebook} from "react-icons/bi"

const HightlightingTopZip = () => {
  return (
    <div className="container flex-col my-48">
      <div className="flex flex-row gap-2">
        <div className="my-1 text-black">
          <AiOutlineLeft Size={10} />
        </div>
        <p> Latest Post </p>
      </div>
      <div className="flex flex-row font-semibold gap-4 mt-[50px] text-sm">
        <div className="bg-[#f4f4f4] w-auto h-auto px-2 py-1 ">Inspiration</div>
        <div className="flex items-center">5 Minutes Read</div>
      </div>
      <h1 className="font-black text-5xl mt-[25px]">
        Highlighting Top Zip Code Campaigns to Inspire Contribution
      </h1>
      <div className="relative w-[1312px] h-[600px] mt-[80px]">
        <Image src="/images/placeHolder_1.png" alt="Icon" fill={true} />
      </div>
      
      <div className="flex flex-row justify-between mt-[25px]">

        <div className="flex flex-row gap-10">
          <div className="flex flex-col">
            <div>Written by</div>
            <div className="font-bold">John Doe</div>
          </div>
          <div className="flex flex-col">
            <div>Published on</div>
            <div className="font-bold">22nd January 2021</div>
          </div>
        </div>

        <div className="flex flex-row gap-4 mr-6">
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
