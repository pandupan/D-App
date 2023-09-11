 import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const RevoMicro = () => {
  return(
    <div className="flex flex-col lg:flex-row justify-between container my-48">
      <div className="flex flex-col gap-4 sm:gap-10 w-full sm:w-[600px] mt-32">
        <BiSolidCube size={70}/>
        <h1 className="font-black text-3xl lg:text-5xl lg:6xl lg:leading-[55px]"> Revolutionizing Micro-Crowdfunding with Stablecoins and NFTs</h1>
        <p>Welcome to the F-N-F Dapp, a decentralized micro-crowdfunding platform that aims to transform the way we give and receive through the use of stablecoins and NFTs.</p>
        <div className="flex flex-row gap-3">
            <ButtonOutline title = {"Learn More"}/>        
            <div className="flex my-auto">
              Sign Up
            </div>
            <div className="flex mt-[10px]">
            <BiSolidCube size = {22}/>
            </div>
        </div>
      </div>
      <div className="m-auto relative mt-8 lg:mt-0 aspect-square sm:w-[456px] sm:h-[440px] lg:w-[656px] lg:h-[640px] ">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default RevoMicro