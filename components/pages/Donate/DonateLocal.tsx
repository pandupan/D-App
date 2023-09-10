import Image from "next/image";
import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import {BiSolidCube} from "react-icons/bi"

const DonateLocal = () => {
  return (
    <div className="flex flex-col justify-center container items-center my-28">
      <div className="flex flex-col gap-6 text-center">
        <div className="font-semibold">Empower</div>
        <h1 className="text-4xl font-bold w-[650px]">
          Donate to Local Crowdfunding Campaigns Today
        </h1>
        <p className="w-[680px]">
          Search for active campaigns in your zip code and choose to donate $1,
          $5, or $10 in USDC to make a difference in your community.
        </p>
      </div>

      <div className="flex flex-row mt-[50px] gap-12">
        <div className="flex flex-col w-[405px] gap-6">
          <div className="relative w-[405px] h-[240px]">
            <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
          </div>
          <h1 className="px-2 text-center font-black text-3xl">
            Find Local Campaigns in Your Zip Code
          </h1>
          <p className="text-center">
            Discover and support crowdfunding initiatives near you.
          </p>
        </div>

        <div className="flex flex-col w-[405px] gap-6">
          <div className="relative w-[405px] h-[240px]">
            <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
          </div>
          <h1 className="px-2 text-center font-black text-3xl">
            Donate with Ease and Security
          </h1>
          <p className="text-center">
            Contribute to campaigns using MetaMask or your in-house ERC 1155
            F-N-F blockchain account.
          </p>
        </div>

        <div className="flex flex-col w-[405px] gap-6">
          <div className="relative w-[405px] h-[240px]">
            <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
          </div>
          <h1 className="px-2 text-center font-black text-3xl">
            Join Waitlists for Future Opportunities
          </h1>
          <p className="text-center">
            If a campaign is fully funded, join the waitlist for a chance to
            contribute later.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 mt-14">
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
