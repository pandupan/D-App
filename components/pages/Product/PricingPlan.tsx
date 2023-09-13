import { BiSolidCube } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
const PricingPlan = () => {
  return (
    <div className="flex flex-col sm:container sm:px-8 px-4">
      <div className="flex flex-col sm:gap-8 gap-4">
        <div className="font-bold sm:text-base text-sm">Tagline</div>
        <h1 className="sm:text-5xl text-3xl font-black">Pricing plan</h1>
        <p className="sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="flex lg:flex-row flex-col md:justify-between xl:mt-20 sm:mt-4 mt-8 sm:justify-center sm:items-center lg:justify-start lg:items-start">
        <div className="flex flex-col sm:place-self-center gap-10">
          <div className="flex flex-row sm:gap-8 gap-5">
            <div className="mt-[5px]">
              <BiSolidCube size={24} />
            </div>
            <div className="flex flex-col my-auto gap-4">
              <h1 className="font-bold sm:text-xl">Key feature heading</h1>
              <p className="xl:w-[560px] sm:w-full lg:w-[295px] sm:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:gap-8 gap-5">
            <div className="mt-[5px]">
              <BiSolidCube size={24} />
            </div>
            <div className="flex flex-col my-auto gap-4">
              <h1 className="font-bold sm:text-xl">Key feature heading</h1>
              <p className="xl:w-[560px] sm:w-full lg:w-[295px] sm:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:gap-8 gap-5">
            <div className="mt-[5px]">
              <BiSolidCube size={24} />
            </div>
            <div className="flex flex-col my-auto gap-4">
              <h1 className="font-bold sm:text-xl">Key feature heading</h1>
              <p className="xl:w-[560px] sm:w-full lg:w-[295px] sm:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-2 border-black sm:w-[616px] sm:h-[547px] h-[720px] p-8 xl:mt-0 mt-12">
          <div className="flex justify-between border-b-2 border-black">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="sm:text-2xl text-base font-black">Basic plan</h1>
              <p className="sm:text-base text-xs">Lorem Ipsum dolor sit amet</p>
            </div>
            <h1 className="sm:text-6xl text-3xl font-black">$19</h1>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">Includes:</div>
            <div className="flex sm:flex-row flex-col sm:gap-32 border-black border-b-2">

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row gap-4">
                  <FiCheck size={24} />
                  <p>Feature text goes here</p>
                </div>
                <div className="flex flex-row gap-4">
                  <FiCheck size={24} />
                  <p>Feature text goes here</p>
                </div>
                <div className="flex flex-row gap-4">
                  <FiCheck size={24} />
                  <p>Feature text goes here</p>
                </div>
                <div className="flex flex-row gap-4">
                  <FiCheck size={24} />
                  <p>Feature text goes here</p>
                </div>
                <div className="flex flex-row gap-4">
                  <FiCheck size={24} />
                  <p>Feature text goes here</p>
                </div>
              </div>
              
              <div className="flex flex-col mb-8">
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-row gap-4">
                    <FiCheck size={24} />
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <FiCheck size={24} />
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <FiCheck size={24} />
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <FiCheck size={24} />
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <FiCheck size={24} />
                    <p>Feature text goes here</p>
                  </div>
                </div>
              </div>
            </div>
              <button className="bg-black sm:w-[552px] h-[48px] mt-8">
                <a className="text-white">Get Started </a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
