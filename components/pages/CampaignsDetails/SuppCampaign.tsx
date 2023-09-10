import React from "react";

const SuppCampaign = () => {
  return (
    <div className="container my-48">
      <div className="flex flex-col gap-8">
      <h1 className="text-5xl font-black ">Support this Campaign Today!</h1>
      <p className="w-[680px]">
      Choose from the available USDC amounts ($1, $5, or $10) and join the corresponding waitlist.
      </p>
      <div className="flex flex-row gap-4">
        <button className="text-white bg-black flex justify-center place-items-center w-[99px] h-[48px]">
          Donate
        </button>
        <button className="text-black border-black border flex justify-center place-items-center w-[79px] h-[48px]">
          Join
        </button>
      </div>
      </div>
    </div>
  );
};
export default SuppCampaign;
