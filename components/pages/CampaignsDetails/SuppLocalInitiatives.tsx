 
import Image from "next/image";


const SuppLocalInitiatives = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:px-[84px] px-4 sm:mt-48 sm:mb-28 mt-24 mb-28">
      <div className="flex flex-col gap-6 sm:w-[616px] sm:h-[640px] justify-center">
        <h1 className="font-black sm:text-4xl text-3xl">
        Supporting Local Initiatives: How Your Donations Will Make a Difference
        </h1>
        <p>
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