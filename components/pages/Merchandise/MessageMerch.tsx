import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
const MessageMerch = () => {
  return (
    <div className="flex flex-col container justify-center my-28">
      <div className="flex flex-row justify-center">
        <AiFillStar size={22} />
        <AiFillStar size={22} />
        <AiFillStar size={22} />
        <AiFillStar size={22} />
        <AiFillStar size={22} />
      </div>
      <div className="flex justify-center">
        <p className="w-[768px] text-center text-2xl font-bold mt-6">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
          vitae erat.&quot;
        </p>
      </div>

      <div className="flex flex-row place-self-center mt-[40px]">
      <div className="flex flex-row w-[270px] justify-center items-center place-self-center gap-4 border-r-2 border-black">
        <div className="relative w-[40px] h-[40px]">
          <Image src="/images/Placeholder_Avatar.png" alt="Icon" fill={true} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold">Name Surname</h3>
          <p>Position, Company name</p>
        </div>
      </div>
      <div className=" w-[114px] h-[28px]">
        <div className="relative  w-[114px] h-[28px] place-self-center my-2 mx-2">
        <Image 
          src="/images/WebflowIcon.png"
          alt="Placeholder"
          fill={true}
        />
        </div>
      </div>
    </div>
      </div>
  );
};

export default MessageMerch;
