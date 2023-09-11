 
import Image from "next/image";
import {BiSolidCube} from 'react-icons/bi'


const CZipCode = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container px-4 sm:px-0 sm:mt-48 sm:mb-48 mt-28 mb-48">
      <div className="flex flex-col gap-6 sm:w-[616px] sm:h-[640px] w-full justify-center">
        <h1 className="font-black sm:text-4xl text-2xl w-[270px] sm:w-full">
        Choose a Zip Code and Discover Micro-Crowdfunding Campaigns
        </h1>
        <p className="sm:text-base text-xs sm:w-[550px] w-[250px]">
        Explore a variety of micro-crowdfunding campaigns available in your chosen zip code, with donation amounts of $1, $5, and $10 in USDC stablecoin.
        </p>
        <div className="flex sm:flex-row flex-col gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {36}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
                Step 1:
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Select a Zip Code and Browse Micro-Crowdfunding Campaigns
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <BiSolidCube size = {36}/>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold sm:text-lg text-md">
                Step 2:
              </h2>
              <p className="w-[296px] sm:text-base text-sm">
              Choose a Campaign and Make a Micro-Donation
              </p>
            </div>
          </div>
        </div>
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

export default CZipCode