import Image from "next/image";
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import {BiSolidCube} from "react-icons/bi"

const DonateLocal = () => {
  return (
    <div className="flex flex-col justify-center sm:container sm:px-0 px-4  sm:mt-28 sm:mb-28 mt-14 mb-14">
      <div className="flex flex-col gap-6 items-center text-center">
        <div className="font-semibold sm:text-base text-sm">Empower</div>
        <h1 className="sm:text-4xl text-3xl font-bold sm:w-[650px]">
          Donate to Local Crowdfunding Campaigns Today
        </h1>
        <p className="sm:w-[680px] sm:text-base text-sm">
          Search for active campaigns in your zip code and choose to donate $1,
          $5, or $10 in USDC to make a difference in your community.
        </p>
      </div>

      <div className="flex sm:flex-row flex-col mt-[50px] gap-12">

        <div className="flex flex-col sm:w-[405px] gap-6">
          <div className="relative sm:w-[405px] sm:h-[240px] w-full h-[170px]">
            <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
          </div>
          <h1 className="sm:px-2 text-center font-black sm:text-3xl text-xl">
            Find Local Campaigns in Your Zip Code
          </h1>
          <p className="text-center sm:text-base text-sm">
            Discover and support crowdfunding initiatives near you.
          </p>
        </div>

        <div className="flex flex-col sm:w-[405px] gap-6">
          <div className="relative sm:w-[405px] sm:h-[240px] w-full h-[170px]">
            <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
          </div>
          <h1 className="sm:px-2 text-center font-black sm:text-3xl text-xl">
            Donate with Ease and Security
          </h1>
          <p className="text-center sm:text-base text-sm">
            Contribute to campaigns using MetaMask or your in-house ERC 1155
            F-N-F blockchain account.
          </p>
        </div>

        <div className="flex flex-col sm:w-[405px] gap-6">
          <div className="relative sm:w-[405px] sm:h-[240px] w-full h-[170px]">
            <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
          </div>
          <h1 className="px-2 text-center font-black sm:text-3xl text-xl">
            Join Waitlists for Future Opportunities
          </h1>
          <p className="text-center sm:text-base text-sm">
            If a campaign is fully funded, join the waitlist for a chance to
            contribute later.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 sm:mt-14 mt-8">
        <ButtonOutline title={"Search"} />
        <div className="flex flex-row gap-2 place-self-center">
          Donate
          <div className="flex place-self-center">
            <BiSolidCube size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateLocal;
