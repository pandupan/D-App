 

const SuppCampaign = () => {
  return (
    <div className=" xl:container xl:px-8 px-4 sm:mt-48 sm:mb-48 mt-24 mb-24">
      <div className="flex flex-col sm:gap-8 gap-5">
      <h1 className="sm:text-5xl text-3xl font-black">Support this Campaign Today!</h1>
      <p className="sm:w-[680px] sm:text-base text-sm w-[300px]">
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
