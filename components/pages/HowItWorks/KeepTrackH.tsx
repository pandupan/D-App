 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const KeepTrackH = () => {
  return(
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-6 mt-28">
      <div className="font-bold">Track</div>
        <h1 className="font-black text-5xl w-[616px]">
        Keep Track of Your Donation History
        </h1>
        <p className="w-[560px]">
        With our user dashboard, you can easily keep track of your donation history and personal achievements.
        </p>
        <div className="flex flex-col gap-5">
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
      <div className=" relative w-[616px] h-[640px]">
        <Image 
          src="/images/placeHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default KeepTrackH