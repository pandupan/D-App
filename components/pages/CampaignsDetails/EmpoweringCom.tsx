 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const EmpoweringCom = () => {
  return(
    <div className="flex justify-between container my-28">
      <div className=" relative w-[616px] h-[640px]">
        <Image 
          src="/images/placeHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-7 w-[616px] h-[640px] justify-center">
        <h1 className="font-black text-4xl w-[520px]">
        Empowering Communities Through Micro-Crowdfunding
        </h1>
        <p className="w-[520px]">
        Discover the impact of our micro-crowdfunding campaign and join us in making a difference..
        </p>
        <div className="flex flex-row gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-5xl">
              50%
              </h2>
              <p className="w-[296px]">
              Support Local Initiatives and Create Lasting Change
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-5xl">
              50%
              </h2>
              <p className="w-[296px]">
              Make a Meaningful Impact in Your Community Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpoweringCom