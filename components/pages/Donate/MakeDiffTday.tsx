

const MakeDiffTday = () => {
  return (
    <div className="container flex justify-between my-48">

      <div className="flex flex-col gap-4">
        <h1 className="font-black text-4xl">Make a Difference Today</h1>
        <p>Donate to local campaigns and create positive change in your community</p>
      </div>

      <div className="flex flex-row gap-4 place-self-center">
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
