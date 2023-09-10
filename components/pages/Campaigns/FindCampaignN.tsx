 
import Image from "next/image";
import ButtonOutline from "@/components/core/buttons/ButtonOutline";

const FindCampaignN = () => {
  return (
    <div className="container my-48">
      <div className="flex flex-col gap-6">
        <p className="font-bold">Browse</p>
        <h1 className="font-bold text-5xl">Find Campaigns Near You</h1>
        <p>Discover crowdfunding campaigns in your local area.</p>
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-3">
            <div className="relative w-[632px] h-[300px] mt-[40px]">
              <Image src="/images/placeHolder_1.png" alt="Icon" fill={true} />
            </div>
            <p className="text-sm font-semibold">All</p>
            <h1 className="font-black text-2xl">
              Support Local Initiatives with Your Donations
            </h1>
            <p>
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
              <div className="flex flex-col">
                <h3 className="text-sm font-bold">John Doe</h3>
                <p>Jan 11, 2022 • 5 min read</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative w-[632px] h-[300px] mt-[40px]">
              <Image src="/images/placeHolder_1.png" alt="Icon" fill={true} />
            </div>
            <p className="text-sm font-semibold">All</p>
            <h1 className="font-black text-2xl">
              Support Local Initiatives with Your Donations
            </h1>
            <p>
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
              <div className="flex flex-col">
                <h3 className="text-sm font-bold">Jone Smith</h3>
                <p>Jan 11, 2022 • 5 min read</p>
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
