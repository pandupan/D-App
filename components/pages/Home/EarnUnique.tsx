 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const EarnUnique = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-10 mt-32">
        <h1 className="font-black text-4xl w-[560px]">
        Earn unique F-N-F NFTs by reaching donation milestones and supporting the community.
        </h1>
        <p className="w-[560px]">
        Contribute to micro crowdfunded campaigns and earn special F-N-F NFTs as you reach donation milestones. Support your community and make a difference.
        </p>
        <div className="flex flex-col gap-3">
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

export default EarnUnique