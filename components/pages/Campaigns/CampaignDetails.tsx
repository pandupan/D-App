import Image from "next/image"
import {BiSolidCube} from 'react-icons/bi'
import ButtonOutline from "@/components/core/buttons/ButtonOutline"
const CampaignDetails = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:container lg:px-8 px-4 mt-28">
      <div className="mb-[50px]">
        <div className="flex lg:flex-row flex-col sm:justify-between">
        <h1 className="sm:text-4xl text-3xl font-black tracking-normal sm:w-[768px]">
          Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
        </h1>
          <div className="flex justify-end place-items-end sm:mt-0 mt-12 mb-12">
            <ButtonOutline title={"View All"}/>
          </div>

        </div>
        <div className="flex sm:flex-row flex-col sm:justify-center items-center w-full h-auto gap-4">

            <div className=" w-full sm:w-[450px] py-4 sm:p-4">
              <div className="relative w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full sm:my-2">
                <h2 className="sm:text-2xl sm:w-full w-[300px] text-lg font-bold tracking-wide">
                Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
                </h2>
              </div>
              <div className="w-full h-full sm:my-8 my-4">
                <p className="sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center gap-3 sm:my-2 ">
                <p className="sm:text-base text-sm">Learn More</p>
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/images/vectorIcon.png"
                    alt="Icon"
                    fill={true}
                  />
                </div>
              </div>
            </div>

            <div className=" w-full sm:w-[450px] py-4 sm:p-4">
            <div className="relative w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full sm:my-2">
                <h2 className="sm:text-2xl sm:w-full w-[300px] text-lg font-bold tracking-wide">
                Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
                </h2>
              </div>
              <div className="w-full h-full sm:my-8 my-4">
                <p className="sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center gap-3 sm:my-2 ">
                <p className="sm:text-base text-sm">Learn More</p>
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/images/vectorIcon.png"
                    alt="Icon"
                    fill={true}
                  />
                </div>
              </div>
            </div>

            <div className=" w-full sm:w-[450px] py-4 sm:p-4">
            <div className="relative w-[36px] h-[40px] my-6">
                <Image
                  src="/images/vectorIcon.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className="w-full h-full sm:my-2">
                <h2 className="sm:text-2xl sm:w-full w-[300px] text-lg font-bold tracking-wide">
                Campaign Details: Information on each campaign, including goal amount, current funding, and time remaining.
                </h2>
              </div>
              <div className="w-full h-full sm:my-8 my-4">
                <p className="sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex items-center gap-3 sm:my-2 ">
                <p className="sm:text-base text-sm">Learn More</p>
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
    </div>
  )
}

export default CampaignDetails
