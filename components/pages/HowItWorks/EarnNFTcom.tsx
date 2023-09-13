 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";


const EarnNFTcom = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">
      <div className="flex flex-col gap-7 sm:w-[616px] sm:h-[640px] w-full justify-center">
      <div className="font-medium">Empower</div>
        <h1 className="font-black sm:text-5xl text-3xl sm:w-full w-[250px]">
        Earn F-N-F NFTs and Contribute to the Community
        </h1>
        <p className="sm:text-base text-sm">
        By reaching donation milestones and contributing to the community, you can earn exclusive F-N-F NFTs that showcase your support.
        </p>
        <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
              Reach Milestones
              </h2>
              <p className="w-[296px] sm:text-based text-sm">
              Donate and contribute to the community to unlock unique F-N-F NFTs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
              Show Support
              </h2>
              <p className="w-[296px] sm:text-based text-sm">
              Display your commitment to giving back with exclusive F-N-F NFTs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 sm:mt-3 mt-2">
            <ButtonOutline title = {"Learn More"}/>        
            <div className="flex my-auto">
              Sign Up
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

export default EarnNFTcom