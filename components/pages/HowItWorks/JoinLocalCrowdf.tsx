

const JoinLocalCrowdf = () => {
  return (
    <div className="flex lg:flex-row flex-col text-center  sm:text-start md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">

      <div className="flex flex-col gap-4">
        <h1 className="font-black sm:text-4xl text-3xl">Join the Local Crowdfunding Movement</h1>
        <p className="sm:text-base text-sm">Support local campaigns and make a difference in your community</p>
      </div>

      <div className="flex flex-row gap-4 sm:place-self-center sm:mt-4 mt-[20px]">
        <button className="w-[99px] h-[48px] bg-black">
          <a className="text-white">Sign Up</a>
        </button>
        <button className="w-[129px] h-[48px] border border-black">
          <a className="text-black">Learn More</a>
        </button>
      </div>

    </div>
  )
}

export default JoinLocalCrowdf
