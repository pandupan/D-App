import { BiSolidCube } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
const PricingPlan = () => {
  return (
    <div className="flex flex-col container">
      <div className="flex flex-col gap-8">
        <div className="font-bold">Tagline</div>
        <h1 className="text-5xl font-black">Pricing plan</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="flex flex-row justify-between mt-20">
        <div className="flex flex-col justify-center items-center place-self-center gap-10">
          <div className="flex flex-row gap-8">
            <div className="mt-[5px]">
              <BiSolidCube size={32} />
            </div>
            <div className="flex flex-col my-auto gap-4">
              <h1 className="font-bold text-xl">Key feature heading</h1>
              <p className="w-[560px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div className="mt-[5px]">
              <BiSolidCube size={32} />
            </div>
            <div className="flex flex-col my-auto gap-4">
              <h1 className="font-bold text-xl">Key feature heading</h1>
              <p className="w-[560px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div className="mt-[5px]">
              <BiSolidCube size={32} />
            </div>
            <div className="flex flex-col my-auto gap-4">
              <h1 className="font-bold text-xl">Key feature heading</h1>
              <p className="w-[560px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-2 border-black w-[616px] h-[547px] p-8">
          <div className="flex justify-between border-b-2 border-black">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-2xl font-black">Basic plan</h1>
              <p>Lorem Ipsum dolor sit amet</p>
            </div>
            <h1 className="text-6xl font-black">$19</h1>
          </div>
          <div className="flex flex-col">
            <div className="mt-8">Includes:</div>
            <div className="flex flex-row gap-32 border-black border-b-2">

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
              <button className="bg-black w-[552px] h-[48px] mt-8">
                <a className="text-white">Get Started </a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
