import Image from "next/image";



const FindCampaign = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container sm:px-0 px-4 sm:mt-48 mt:mb-48 mt-28 mb-24">
      <div className="flex flex-col gap-6 sm:w-[616px] sm:h-[250px] w-full justify-center place-self-center">
        <h1 className="font-black sm:text-5xl text-3xl">
        Find a Campaign Near You
        </h1>
        <p className="sm:text-lg text-sm sm:w-[616px]">
        Support local initiatives by donating to a micro crowdfunded campaign in your zip code.
        </p>
        <div className="flex sm:flex-row flex-col gap-4">
        <div className="sm:w-[394px] w-full">
          <input id="inputField" className="sm:w-[394px] w-full h-[48px] appearance-none border  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-black" type="text" placeholder="Enter your email"/>
        </div>
            <button className="sm:w-[103px] w-full h-[48px] border text-white bg-black">
              <a className="place-self-center">Sign Up</a>
            </button>
        </div>
        <p className="text-xs sm:text-sm">
        By clicking Donate, you agree to our Terms and Conditions.
        </p>
      </div>
      <div className=" relative sm:w-[616px] sm:h-[400px] w-full h-[190px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_3.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default FindCampaign