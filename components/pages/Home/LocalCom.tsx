 
import Image from "next/image";
import { BiSolidCube } from "react-icons/bi";
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const LocalCom = () => {
  return (
    <div className="flex justify-between container my-48">
      <div className="flex flex-col gap-7 w-[600px] mt-12">
        <div className="font-bold">Empower</div>
        <h1 className="font-black text-5xl ">
          Support Local Communities with F-N-F Dapp
        </h1>
        <p className="w-[580px] text-lg">
          Experience the power of anonymity and decentralization while making a
          positive impact in your local community.
        </p>
        <div className="flex flex-row gap-10">
          <div>
            <h2 className="font-bold text-lg my-2">Anonymity</h2>
            <p className="w-[250px]">
              Donate and receive funds anonymously, empowering local communities
              across the USA.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg my-2">Decentralization</h2>
            <p className="w-[250px]">
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
      <div className=" relative w-[650px] h-[650px]">
        <Image src="/images/PlaceHolder_2.png" alt="Placeholder" fill={true} />
      </div>
    </div>
  );
};

export default LocalCom;
