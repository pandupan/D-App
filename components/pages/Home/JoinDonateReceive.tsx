import Image from "next/image"
const JoinDonateReceive = () => {
  return (
    <div className="w-full min-h-screen flex flex-col sm:container sm:px-8 px-4 sm:my-0 my-28">
      <div className="lg:w-1/2 sm:mb-[75px] mb-[40px]">
        <h1 className="sm:text-4xl text-3xl font-bold tracking-normal">Join, Donate, and Receive Rewards on F-N-F Dapp</h1>
      </div>
        <div className="flex sm:flex-row flex-col justify-center items-center w-full h-auto gap-4">

            <div className=" sm:w-[450px] w-full flex flex-col gap-3 sm:gap-0">
              <div className="relative sm:w-[50px] sm:h-[50px] w-[36px] h-[40px] sm:my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full sm:my-2">
                <h2 className="sm:text-2xl text-lg font-bold tracking-wide">Join, Donate, and Receive Rewards on F-N-F Dapp</h2>
              </div>
              <div className="w-full h-full sm:my-8">
                <p>Join the F-N-F Dapp community and start making a difference today.</p>
              </div>
              <div className="flex items-center gap-3 sm:my-2 ">
                <p>Get Started</p>
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/images/vectorIcon.png"
                    alt="Icon"
                    fill={true}
                  />
                </div>
              </div>
            </div>

            <div className="sm:w-[450px] w-full flex flex-col gap-3 sm:gap-0">
              <div className="relative sm:w-[50px] sm:h-[50px] w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full sm:my-2">
                <h2 className="sm:text-2xl text-lg font-bold tracking-wide">Join, Donate, and Receive Rewards on F-N-F Dapp</h2>
              </div>
              <div className="w-full h-full sm:my-8">
                <p>Support local initiatives and make a positive impact in your community.</p>
              </div>
              <div className="flex items-center gap-3 sm:my-2 ">
                <p>Get Started</p>
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/images/vectorIcon.png"
                    alt="Icon"
                    fill={true}
                  />
                </div>
              </div>
            </div>

            <div className="sm:w-[450px] w-full flex flex-col gap-3 sm:gap-0">
              <div className="relative sm:w-[50px] sm:h-[50px] w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full sm:my-2">
                <h2 className="sm:text-2xl text-lg font-bold tracking-wide">Join, Donate, and Receive Rewards on F-N-F Dapp</h2>
              </div>
              <div className="w-full h-full sm:my-8">
                <p>Make a difference in the lives of others through micro-crowdfunding campaigns.</p>
              </div>
              <div className="flex items-center gap-3 sm:my-2 ">
                <p>Get Started</p>
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/images/vectorIcon.png"
                    alt="Icon"
                    fill={true}
                  />
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default JoinDonateReceive
