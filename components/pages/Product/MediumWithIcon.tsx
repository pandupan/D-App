import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const MediumWithIcon = () => {
  return (
    <div className="flex justify-between container my-48">
      <div className="flex flex-col justify-center gap-10 w-[600px] mt-6">
        <h3 className="text-xl font-bold">Tagline</h3>
        <h1 className="font-black text-5xl ">
          Medium length section heading goes here
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="w-full h-auto flex justify-between my-2 gap-4">
          <div className="space-y-4 w-[60%]">
            <BiSolidCube size={40}/>
            <h3 className="font-bold">Subheading One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className="space-y-4 w-[60%] ">
            <BiSolidCube size={40}/>
            <h3 className="font-bold">Subheading Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
            <ButtonOutline title={"Button"}/>        
            <div className="flex my-auto">
              Button
            </div>
            <div className="flex mt-[10px]">
              <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className=" relative w-[650px] h-[650px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default MediumWithIcon
