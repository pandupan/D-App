import Image from "next/image";
const TrustedCompanies = () => {
  return (
    <div className="flex flex-col sm:flex-row container justify-start sm:justify-between my-28">
      <div className="flex flex-col gap-4">
        <h2 className="font-black text-xl w-full sm:w-[320px]">
        Trusted by leading companies in the blockchain industry
        </h2>
      </div>

      <div className="flex w-full flex-row flex-wrap gap-4 place-self-center mt-4">
        <div className="relative w-1/3  sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
          <Image src="/images/WebflowIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative w-1/3  sm:w-[133px] h-[53px] place-self-center my-2 mx-2 ">
          <Image src="/images/RelumeIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative w-1/3  sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
          <Image src="/images/WebflowIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative w-1/3  sm:w-[133px] h-[53px] place-self-center my-2 mx-2 ">
          <Image src="/images/RelumeIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative w-1/3  sm:w-[133px] h-[33px] place-self-center my-2 mx-2 ">
          <Image src="/images/WebflowIcon.png" alt="Placeholder" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
