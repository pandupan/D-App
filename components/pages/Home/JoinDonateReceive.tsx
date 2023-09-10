import Image from "next/image"
const JoinDonateReceive = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-[84px]">
      <div className="lg:w-1/2 mb-[75px]">
        <h1 className="text-4xl font-bold tracking-normal">Join, Donate, and Receive Rewards on F-N-F Dapp</h1>
      </div>
        <div className="flex justify-center items-center w-full h-auto gap-4">

            <div className=" w-[450px] p-4">
              <div className="relative w-[50px] h-[50px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full my-2">
                <h2 className="text-2xl font-bold tracking-wide">Join, Donate, and Receive Rewards on F-N-F Dapp</h2>
              </div>
              <div className="w-full h-full my-8">
                <p>Join the F-N-F Dapp community and start making a difference today.</p>
              </div>
              <div className="flex items-center gap-3 my-2 ">
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

            <div className=" w-[450px] p-4">
              <div className="relative w-[50px] h-[50px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full my-2">
                <h2 className="text-2xl font-bold tracking-wide">Join, Donate, and Receive Rewards on F-N-F Dapp</h2>
              </div>
              <div className="w-full h-full my-8">
                <p>Support local initiatives and make a positive impact in your community.</p>
              </div>
              <div className="flex items-center gap-3 my-2 ">
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

            <div className=" w-[450px] p-4">
              <div className="relative w-[50px] h-[50px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full my-2">
                <h2 className="text-2xl font-bold tracking-wide">Join, Donate, and Receive Rewards on F-N-F Dapp</h2>
              </div>
              <div className="w-full h-full my-8">
                <p>Make a difference in the lives of others through micro-crowdfunding campaigns.</p>
              </div>
              <div className="flex items-center gap-3 my-2 ">
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
