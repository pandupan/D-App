

const JoinCommunity = () => {
  return (
    <div className="container w-full flex flex-col sm:flex-row justify-between my-48">

      <div className="flex flex-col gap-4">
        <h1 className="font-black text-4xl">Join the F-N-F Community</h1>
        <p>Make a difference in your local community today!</p>
      </div>

      <div className="flex flex-row gap-4 sm:place-self-center mt-8 sm:mt-0">
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

export default JoinCommunity
