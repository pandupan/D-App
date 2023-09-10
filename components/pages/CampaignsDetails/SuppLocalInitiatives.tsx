 
import Image from "next/image";


const SuppLocalInitiatives = () => {
  return(
    <div className="flex justify-between container mt-48 mb-28">
      <div className="flex flex-col gap-6 w-[616px] h-[640px] justify-center">
        <h1 className="font-black text-4xl ">
        Supporting Local Initiatives: How Your Donations Will Make a Difference
        </h1>
        <p>
        By donating to this campaign, you are directly contributing to the improvement of your local community. With your support, we can achieve our campaign goals and make a lasting impact.
        </p>
      </div>
      <div className=" relative w-[656px] h-[640px]">
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