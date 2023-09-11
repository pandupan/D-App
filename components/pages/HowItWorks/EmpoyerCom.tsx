 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";

const EmpoyerCom = () => {
  return(
    <div className="flex sm:flex-row flex-col justify-between sm:container my-28 px-4">
      <div className="flex flex-col sm:gap-10 gap-6 sm:w-[616px] sm:h-[640px] mt-32 w-full">
        <h1 className="font-black sm:text-6xl text-4xl">
        Empower Your Community with F-N-F Dapp
        </h1>
        <p className="sm:text-base text-sm">
        Discover how the F-N-F Dapp revolutionizes micro-crowdfunding to create positive change in your local community.
        </p>
        <div className="flex flex-row gap-3">
          <button className="bg-black w-[129px] h-[48px] ">
            <a className="text-white place-selft-center p-4">Get Started</a>
          </button> 
          <button className="bg-white border border-black sm:w-[129px] h-[48px] ">
            <a className="place-selft-center p-4">Learn More</a>
          </button> 
        </div>
      </div>
      <div className=" relative aspect-square sm:w-[656px] sm:h-[640px] sm:mt-0 mt-10">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default EmpoyerCom