import Image from "next/image"
import {BiSolidCube} from 'react-icons/bi'
const CampaignDetails = () => {
  return (
    <div className="w-full min-h-screen flex flex-col container mt-28">
      <div className="mb-[50px]">
        <h1 className="text-4xl font-black tracking-normal w-[768px]">
          Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
        </h1>
      </div>
        <div className="flex justify-center items-center w-full h-auto gap-4">

            <div className=" w-[450px] p-4">
              <div className="relative w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full my-2">
                <h2 className="text-2xl font-bold tracking-wide">
                Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
                </h2>
              </div>
              <div className="w-full h-full my-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center gap-3 my-2 ">
                <p>Learn More</p>
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
            <div className="relative w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full my-2">
                <h2 className="text-2xl font-bold tracking-wide">
                Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
                </h2>
              </div>
              <div className="w-full h-full my-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center gap-3 my-2 ">
                <p>Learn More</p>
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
            <div className="relative w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full my-2">
                <h2 className="text-2xl font-bold tracking-wide">
                Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
                </h2>
              </div>
              <div className="w-full h-full my-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center gap-3 my-2 ">
                <p>Learn More</p>
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

export default CampaignDetails
