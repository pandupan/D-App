import Image from "next/image";
const TrustedCompanies = () => {
  return (
    <div className="flex container justify-between my-28">
      <div className="flex flex-col gap-4">
        <h2 className="font-black text-xl w-[320px]">
        Trusted by leading companies in the blockchain industry
        </h2>
      </div>

      <div className="flex flex-row gap-4 place-self-center">
        <div className="relative  w-[133px] h-[33px] place-self-center my-2 mx-2 ">
          <Image src="/images/WebflowIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative  w-[133px] h-[53px] place-self-center my-2 mx-2 ">
          <Image src="/images/RelumeIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative  w-[133px] h-[33px] place-self-center my-2 mx-2 ">
          <Image src="/images/WebflowIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative  w-[133px] h-[53px] place-self-center my-2 mx-2 ">
          <Image src="/images/RelumeIcon.png" alt="Placeholder" fill={true} />
        </div>
        <div className="relative  w-[133px] h-[33px] place-self-center my-2 mx-2 ">
          <Image src="/images/WebflowIcon.png" alt="Placeholder" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
