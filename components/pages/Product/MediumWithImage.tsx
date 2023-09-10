import Image from "next/image";

const MediumWithImage = () => {
  return(
    <div className="flex justify-between container mt-48 mb-48">
      <div className="flex flex-col gap-6 w-[616px] h-[250px] justify-center place-self-center">
        <h1 className="font-black text-5xl ">
        Medium length heading goes here
        </h1>
        <p className="text-lg w-[616px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="flex flex-row gap-4">
        <div className="w-[394px]">
          <input id="inputField" className="w-[394px] h-[48px] appearance-none border  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-black" type="text" placeholder="Enter your email"/>
        </div>
            <button className="w-[103px] h-[48px] border text-white bg-black">
              <a className="place-self-center">Sign Up</a>
            </button>
        </div>
        <p className="text-sm">
        By clicking Sign Up you&apos;re confirming that you agree with our <span className="underline">Terms and Conditions.</span>
        </p>
      </div>
      <div className=" relative w-[616px] h-[400px]">
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