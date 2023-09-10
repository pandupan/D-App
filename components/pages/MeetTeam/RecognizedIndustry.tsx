import Image from "next/image";

const RecognizedIndustry = () => {
  return (
    <div className="container flex flex-col justify-center items-center mb-28">
      <h3 className="font-bold mb-[40px]">
        Recognized by industry leaders for its innovative approach.
      </h3>
      <div className="flex flex-col gap-2">

        <div className="flex flex-row justify-center place-self-center items-center gap-2">
          <div className="w-[434px] h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative  w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-[434px] h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative  w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-[434px] h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative  w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center place-self-center items-center gap-2">
          <div className="w-[434px] h-[84px] bg-[#f4f4f4] flex justify-center">
          <div className="relative  w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-[434px] h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative  w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-[434px] h-[84px] bg-[#f4f4f4] flex justify-center">
          <div className="relative  w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecognizedIndustry;
