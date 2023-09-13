 
import Image from "next/image";


const SuppLocalInitiatives = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 sm:mt-48 sm:mb-28 mt-24 mb-28">
      <div className="flex flex-col gap-6 sm:w-[616px] sm:h-[640px] justify-center">
        <h1 className="font-black sm:text-4xl text-3xl xl:w-full sm:w-full lg:w-[300px]">
        Supporting Local Initiatives: How Your Donations Will Make a Difference
        </h1>
        <p className="xl:w-full sm:w-full lg:w-[300px]">
        By donating to this campaign, you are directly contributing to the improvement of your local community. With your support, we can achieve our campaign goals and make a lasting impact.
        </p>
      </div>
      <div className=" relative aspect-square sm:w-[656px] sm:h-[640px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default SuppLocalInitiatives