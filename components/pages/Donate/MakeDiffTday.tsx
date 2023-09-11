

const MakeDiffTday = () => {
  return (
    <div className="sm:container flex sm:flex-row flex-col sm:px-0 px-4 sm:justify-between sm:mt-48 sm:mb-48 mt-28 mb-24">

      <div className="flex flex-col gap-4">
        <h1 className="font-black sm:text-4xl text-3xl">Make a Difference Today</h1>
        <p className="sm:text-base text-sm">Donate to local campaigns and create positive change in your community</p>
      </div>

      <div className="flex flex-row gap-4 sm:place-self-center sm:mt-0 mt-4">
        <button className="w-[99px] h-[48px] bg-black">
          <a className="text-white">Donate</a>
        </button>
        <button className="w-[129px] h-[48px] border border-black">
          <a className="text-black">Learn More</a>
        </button>
      </div>

    </div>
  )
}

export default MakeDiffTday
