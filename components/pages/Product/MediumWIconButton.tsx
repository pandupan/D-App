import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const MediumWIconButton = () => {
  return (
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-4 sm:mt-48 sm:mb-48 mt-20 mb-20">
      <div className="flex flex-col sm:justify-center gap-10 sm:w-[600px] mt-6">
        <h1 className="font-black sm:text-5xl text-3xl xl:w-full sm:w-full lg:w-[320px]">
        Long heading is what you see here in this feature section
        </h1>
        <p className="sm:text-base text-sm xl:w-full sm:w-full lg:w-[320px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="w-full h-auto flex flex-col lg:flex-col xl:flex-row sm:flex-row sm:justify-between my-2 gap-4">
          <div className="space-y-4 sm:w-[60%]">
            <BiSolidCube size={40}/>
            <h3 className="font-bold">Subheading one</h3>
            <p className=" sm:text-base text-sm xl:w-full sm:w-full lg:w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className="space-y-4 sm:w-[60%]">
            <BiSolidCube size={40}/>
            <h3 className="font-bold">Subheading two</h3>
            <p className=" sm:text-base text-sm xl:w-full sm:w-full lg:w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
        <div className="sm:flex hidden flex-row gap-3">
            <ButtonOutline title={"Button"}/>        
            <div className="flex my-auto">
              Button
            </div>
            <div className="flex mt-[10px]">
              <BiSolidCube size = {22}/>
            </div>
      </div>
        </div>
      <div className=" relative aspect-square sm:w-[650px] sm:h-[650px] xl:mt-0 mt-10">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default MediumWIconButton
