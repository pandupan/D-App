 
import Image from "next/image";
import { BiSolidCube } from "react-icons/bi";
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const LocalCom = () => {
  return (
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 gap-4 mb-28">
      <div className="flex flex-col sm:gap-7 gap-4 sm:w-[600px] w-full mt-12">
        <div className="font-medium">Empower</div>
        <h1 className="font-black sm:text-5xl text-3xl sm:w-full w-[250px] xl:w-full lg:w-[300px]">
          Support Local Communities with F-N-F Dapp
        </h1>
        <p className="xl:w-[580px] sm:w-full lg:w-[300px] w-full sm:text-lg text-sm">
          Experience the power of anonymity and decentralization while making a
          positive impact in your local community.
        </p>
        <div className="flex lg:flex-col xl:flex-row sm:flex-row flex-col gap-4">
          <div>
            <h2 className="font-bold sm:text-lg text-base my-2">Anonymity</h2>
            <p className="sm:w-[250px] sm:text-base text-sm">
              Donate and receive funds anonymously, empowering local communities
              across the USA.
            </p>
          </div>
          <div>
            <h2 className="font-bold sm:text-lg text-base my-2">Decentralization</h2>
            <p className="sm:w-[250px] w-[280px] sm:text-base text-sm">
              Join a decentralized micro-crowdfunding platform to support
              initiatives in your zip code.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-6">
          <ButtonOutline title={"Learn More"} />
          <div className="flex my-auto">Sign Up</div>
          <div className="flex mt-[10px]">
            <BiSolidCube size={22} />
          </div>
        </div>
      </div>
      <div className=" relative aspect-square sm:w-[650px] sm:h-[650px] w-full h-[300px] sm:mt-8 mt-[40px]">
        <Image src="/images/PlaceHolder_2.png" alt="Placeholder" fill={true} />
      </div>
    </div>
  );
};

export default LocalCom;
