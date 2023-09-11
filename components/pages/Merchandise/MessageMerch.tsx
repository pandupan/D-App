import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
const MessageMerch = () => {
  return (
    <div className="flex flex-col container justify-center sm:mt-28 sm:mb-28 mt-12 mb-28">
      <div className="flex flex-row justify-center">
        <AiFillStar size={22} />
        <AiFillStar size={22} />
        <AiFillStar size={22} />
        <AiFillStar size={22} />
        <AiFillStar size={22} />
      </div>
      <div className="flex justify-center">
        <p className="sm:w-[768px] text-center sm:text-2xl text-lg font-bold mt-6">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
          vitae erat.&quot;
        </p>
      </div>

      <div className="flex flex-col sm:flex-row place-self-center text-center sm:text-left sm:mt-[40px] mt-[20px]">
      <div className="flex flex-col sm:flex-row w-[270px] justify-center items-center place-self-center gap-4 sm:border-r-2 sm:border-black">
        <div className="relative w-[56px] h-[56px]">
          <Image src="/images/Placeholder_Avatar.png" alt="Icon" fill={true} />
        </div>
        <div className="flex flex-col sm:my-0 mb-6">
          <h3 className="text-sm font-bold">Name Surname</h3>
          <p className="">Position, Company name</p>
        </div>
      </div>
      <div className=" w-[114px] h-[28px] flex justify-center place-self-center">
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
