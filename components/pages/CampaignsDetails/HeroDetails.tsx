import React from "react";
import Image from "next/image";

const HeroDetails = () => {
  return (
    <div className="flex justify-start w-full sm:h-[497px] h-[424px]">
      <div className="relative w-full sm:h-[497px] h-[424px]">
        <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
      </div>
      <div className=" sm:left-[84px] my-[110px] sm:w-full w-[335px] sm:h-[273px] h-[224px] sm:container absolute sm:px-0 px-4 flex flex-col text-white sm:gap-8 gap-4">
        <div className="font-semibold sm:text-base text-sm">Empower</div>
        <h1 className="sm:text-5xl text-3xl font-black ">
          Supporting Local Initiatives
        </h1>
        <p className="sm:w-[680px] w-[300px] sm:h-full h-[72px] sm:text-base text-sm">
          Join us in empowering local communities by supporting
          micro-crowdfunded campaigns in your zip code.
        </p>
        <div className="flex flex-row gap-4">
          <button className="text-white bg-black flex justify-center place-items-center sm:w-[103px] sm:h-[48px] w-[99px] h-[48px]">
            Donate
          </button>
          <button className="text-white border-white border flex justify-center place-items-center sm:w-[103px] sm:h-[48px] w-[129px] h-[48px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
