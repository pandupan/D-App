 
import Image from "next/image";
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const FindCampaignN = () => {
  return (
    <div className="sm:container sm:mt-48 sm:mb-48 mt-32 mb-28 sm:px-0 px-4">
      <div className="flex flex-col sm:gap-6 gap-4">
        <p className="font-medium sm:text-base text-sm">Browse</p>
        <h1 className="font-bold sm:text-5xl text-3xl">Find Campaigns Near You</h1>
        <p className="sm:text-base text-sm">Discover crowdfunding campaigns in your local area.</p>
        <div className="flex sm:flex-row flex-col sm:gap-20 gap-4">

          <div className="flex flex-col gap-4">
            <div className="relative sm:w-[632px] sm:h-[300px] w-full h-[221px] sm:mt-[40px] mt-[20px]">
              <Image src="/images/placeHolder_1.png" alt="Icon" fill={true} />
            </div>
            <p className="sm:text-sm text-xs font-medium">All</p>
            <h1 className="font-black sm:text-2xl text-lg">
              Support Local Initiatives with Your Donations
            </h1>
            <p className="sm:text-base text-sm">
              Explore campaigns that are making a difference in your community.
            </p>

            <div className="flex flex-row gap-4">
              <div className="relative w-[40px] h-[40px]">
                <Image
                  src="/images/Placeholder_Avatar.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="flex flex-col place-self-center gap-1">
                <h3 className="sm:text-sm text-xs font-bold">John Doe</h3>
                <p className="sm:text-base text-xs">Jan 11, 2022 • 5 min read</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            <div className="relative sm:w-[632px] sm:h-[300px] w-full h-[221px] mt-[40px]">
              <Image src="/images/placeHolder_1.png" alt="Icon" fill={true} />
            </div>
            <p className="sm:text-sm text-xs font-medium">All</p>
            <h1 className="font-black sm:text-2xl text-lg">
              Support Local Initiatives with Your Donations
            </h1>
            <p className="sm:text-base text-sm">
              Explore campaigns that are making a difference in your community.
            </p>

            <div className="flex flex-row gap-4">
              <div className="relative w-[40px] h-[40px]">
                <Image
                  src="/images/Placeholder_Avatar.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="flex flex-col place-self-center gap-1">
                <h3 className="sm:text-sm text-xs font-bold">Jone Smith</h3>
                <p className="sm:text-base text-xs">Jan 11, 2022 • 5 min read</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-end mt-12">
            <ButtonOutline title={"View All"}/>
      </div>
    </div>
  );
};

export default FindCampaignN;
