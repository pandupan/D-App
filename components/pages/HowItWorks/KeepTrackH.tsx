 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const KeepTrackH = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container sm:px-0 px-4 sm:mt-48 sm:mb-48 mb-28">
      <div className="flex flex-col gap-6 mt-28">
      <div className="font-medium">Track</div>
        <h1 className="font-black sm:text-5xl text-3xl sm:w-[616px]">
        Keep Track of Your Donation History
        </h1>
        <p className="sm:w-[560px] sm:text-based text-sm">
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
            <ButtonOutline title = {"View"}/>        
            <div className="flex my-auto">
              Learn More
            </div>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative aspect-square sm:w-[616px] sm:h-[640px] sm:mt-0 mt-[40px]">
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