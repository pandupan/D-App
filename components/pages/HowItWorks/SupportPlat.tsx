 
import Image from "next/image";

const SupportPlat = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">
      <div className="relative aspect-square md:w-[616px] md:h-[640px] lg:mt-[20px] mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-7 sm:w-[616px] sm:h-[640px] justify-center">
        <h1 className="font-black sm:text-4xl text-3xl sm:w-full w-[300px]">
        Support the Platform with F-N-F Stablecoin and Get F-N-F Merchandise
        </h1>
        <p className="sm:text-lg text-sm">
        Purchase F-N-F merchandise using F-N-F stablecoin and show your support for the platform.
        </p>
        <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
              Shop Now
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Explore our collection of F-N-F merchandise and make a difference.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
              Support Us
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Join the movement and show your support for the F-N-F Dapp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPlat