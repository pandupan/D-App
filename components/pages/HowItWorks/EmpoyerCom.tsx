 
import Image from "next/image";


const EmpoyerCom = () => {
  return(
    <div className="flex lg:flex-row flex-col justify-between lg:container my-28 px-8">
      <div className="flex flex-col lg:gap-10 gap-6 lg:w-[616px] lg:h-[640px] mt-32 w-full">
        <h1 className="font-black lg:text-6xl text-4xl">
        Empower Your Community with F-N-F Dapp
        </h1>
        <p className="lg:text-base text-sm">
        Discover how the F-N-F Dapp revolutionizes micro-crowdfunding to create positive change in your local community.
        </p>
        <div className="flex flex-row gap-3">
          <button className="bg-black w-[129px] h-[48px] ">
            <a className="text-white place-selft-center p-4">Get Started</a>
          </button> 
          <button className="bg-white border border-black lg:w-[129px] h-[48px] ">
            <a className="place-selft-center p-4">Learn More</a>
          </button> 
        </div>
      </div>
      <div className=" relative aspect-square lg:w-[656px] lg:h-[640px] lg:mt-0 mt-10">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default EmpoyerCom