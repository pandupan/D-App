import Image from "next/image";

const RecognizedIndustry = () => {
  return (
    <div className="container flex flex-col justify-center items-center mb-28">
      <h3 className="font-bold mb-[40px]">
        Recognized by industry leaders for its innovative approach.
      </h3>
      <div className="w-full flex flex-col gap-2">

        <div className="flex w-full flex-col sm:flex-row justify-center place-self-center items-center gap-2">
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative w-1/3 sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative w-1/3 sm:w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative w-1/3 sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative w-1/3 sm:w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative w-1/3 sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex w-full flex-row justify-center place-self-center items-center gap-2">
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
          <div className="relative w-1/3 sm:w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
            <div className="relative w-1/3 sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/WebflowIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
          <div className="w-full sm:w-[434px] sm:h-[84px] bg-[#f4f4f4] flex justify-center">
          <div className="relative w-1/3 sm:w-[133px] h-[53px] place-self-center my-2 mx-2 ">
              <Image
                src="/images/RelumeIcon.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default RecognizedIndustry;
