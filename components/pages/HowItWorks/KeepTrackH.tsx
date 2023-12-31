import Link from "next/link";
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const KeepTrackH = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">
      <div className="flex flex-col gap-6 mt-28">
      <div className="font-medium">Track</div>
        <h1 className="font-black sm:text-5xl text-3xl xl:w-[616px]">
        Keep Track of Your Donation History
        </h1>
        <p className="xl:w-[560px] sm:text-based text-sm">
        With our user dashboard, you can easily keep track of your donation history and personal achievements.
        </p>
        <div className="flex flex-col sm:text-base text-sm gap-5">
          <div className="flex flex-row gap-3">
          <div className="mt-[5px]">
            <BiSolidCube size = {15}/>
            </div>   
            <div className="flex my-auto">
            View Your Donation History and Achievements
            </div>
          </div>
          <div className="flex flex-row gap-3">
          <div className="mt-[5px]">
            <BiSolidCube size = {15}/>
            </div>   
            <div className="flex my-auto">
            Stay Updated on Your Contributions and Milestones
            </div>
          </div>
          <div className="flex flex-row gap-3">
          <div className="mt-[5px]">
            <BiSolidCube size = {15}/>
            </div>   
            <div className="flex my-auto">
            Track Your Progress and Impact on the Community
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-3">
            <Link href="/campaigns#LocalZip" className="flex flex-row gap-3">
            <div className="flex my-auto">
              Learn More
            </div>
            <div className="flex mt-[4px]">
            <BiSolidCube size = {22}/>
            </div>
            </Link>       
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

export default KeepTrackH