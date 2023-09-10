import Image from "next/image";
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary";


const FindCampaign = () => {
  return(
    <div className="flex justify-between container mt-48 mb-28">
      <div className="flex flex-col gap-6 w-[616px] h-[250px] justify-center place-self-center">
        <h1 className="font-black text-5xl ">
        Find a Campaign Near You
        </h1>
        <p className="text-lg w-[616px]">
        Support local initiatives by donating to a micro crowdfunded campaign in your zip code.
        </p>
        <div className="flex flex-row gap-4">
        <div class="w-[394px]">
          <input id="inputField" class="w-[394px] h-[48px] appearance-none border  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-black" type="text" placeholder="Enter your email"/>
        </div>
            <button className="w-[103px] h-[48px] border text-white bg-black">
              <a className="place-self-center">Sign Up</a>
            </button>
        </div>
        <p className="text-sm">
        By clicking Donate, you agree to our Terms and Conditions.
        </p>
      </div>
      <div className=" relative w-[616px] h-[400px]">
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