import Image from "next/image";

const MediumWithImage = () => {
  return(
    <div className="flex xl:flex-row flex-col md:justify-between xl:container xl:px-8 px-4 justify-center items-center sm:mt-48 sm:mb-48 mt-24 mb-24">
      <div className="flex flex-col sm:gap-6 gap-3 sm:w-[616px] sm:h-[250px] w-full justify-center place-self-center">
        <h1 className="font-black sm:text-5xl text-3xl">
        Medium length heading goes here
        </h1>
        <p className="sm:text-lg text-sm sm:w-[616px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="flex sm:flex-row flex-col gap-4">
        <div className="sm:w-[394px]">
          <input id="inputField" className="sm:w-[394px] w-full h-[48px] appearance-none border  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-black" type="text" placeholder="Enter your email"/>
        </div>
            <button className="sm:w-[103px] w-full h-[48px] border text-white bg-black">
              <a className="place-self-center">Sign Up</a>
            </button>
        </div>
        <p className="text-sm">
        By clicking Sign Up you&apos;re confirming that you agree with our <span className="underline">Terms and Conditions.</span>
        </p>
      </div>
      <div className=" relative sm:w-[616px] sm:h-[400px] w-full h-[218px] sm:mt-10 xl:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_3.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default MediumWithImage