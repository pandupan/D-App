 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const EmpoweringCom = () => {
  return(
    <div className="flex sm:flex-row flex-col-reverse sm:justify-between sm:px-[84px] px-4 sm:mt-28 sm:mb-28 mt-12 mb-12">
      <div className=" relative aspect-square sm:w-[616px] sm:h-[640px] sm:mt-0 mt-[50px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-7 sm:w-[616px] sm:h-[640px] justify-center">
        <h1 className="font-black sm:text-4xl text-2xl sm:w-[520px] w-[250px]">
        Empowering Communities Through Micro-Crowdfunding
        </h1>
        <p className="sm:w-[520px] sm:text-base text-sm w-[300px]">
        Discover the impact of our micro-crowdfunding campaign and join us in making a difference.
        </p>
        <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <div className="flex flex-col sm:gap-4">
            <div className="flex flex-col sm:gap-4 gap-2">
              <h2 className="sm:font-bold font-black sm:text-5xl text-3xl">
              50%
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Support Local Initiatives and Create Lasting Change.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:gap-4">
            <div className="flex flex-col sm:gap-4 gap-2">
              <h2 className="sm:font-bold font-black sm:text-5xl text-3xl">
              50%
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Make a Meaningful Impact in Your Community Today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpoweringCom