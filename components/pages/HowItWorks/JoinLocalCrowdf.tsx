

const JoinLocalCrowdf = () => {
  return (
    <div className="sm:container flex sm:flex-row flex-col sm:justify-between sm:px-0 px-4 sm:mt-48 sm:mb-48 mb-48">

      <div className="flex flex-col gap-4">
        <h1 className="font-black sm:text-4xl text-3xl">Join the Local Crowdfunding Movement</h1>
        <p className="sm:text-base text-sm">Support local campaigns and make a difference in your community</p>
      </div>

      <div className="flex flex-row gap-4 sm:place-self-center sm:mt-0 mt-[20px]">
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
