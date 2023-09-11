 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const EarnUnique = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container sm:my-48 px-4 sm:px-0">
      <div className="flex flex-col gap-10 mt-32">
        <h1 className="font-black text-3xl w-full sm:w-[560px]">
        Earn unique F-N-F NFTs by reaching donation milestones and supporting the community.
        </h1>
        <p className="sm:w-[560px] w-full sm:text-base text-sm">
        Contribute to micro crowdfunded campaigns and earn special F-N-F NFTs as you reach donation milestones. Support your community and make a difference.
        </p>
        <div className="flex flex-col gap-3 sm:text-base text-sm">
          <div className="flex flex-row gap-3">
          <div className="mt-[5px]">
            <BiSolidCube size = {15}/>
            </div>   
            <div className="flex my-auto">
            Reach donation milestones and earn exclusive F-N-F NFTs.
            </div>
          </div>
          <div className="flex flex-row gap-3">
          <div className="mt-[5px]">
            <BiSolidCube size = {15}/>
            </div>   
            <div className="flex my-auto">
            Support the community and collect unique F-N-F NFTs.
            </div>
          </div>
          <div className="flex flex-row gap-3">
          <div className="mt-[5px]">
            <BiSolidCube size = {15}/>
            </div>   
            <div className="flex my-auto">
            Make a difference and unlock special F-N-F NFTs.
            </div>
          </div>
        </div>
      </div>
      <div className=" relative sm:w-[650px] sm:h-[650px] w-full h-[300px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default EarnUnique