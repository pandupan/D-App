 
import Image from "next/image";


const SignUpVer = () => {
  return(
    <div className="flex sm:flex-row flex-col sm:justify-between sm:container sm:px-0 px-4 sm:mb-48">
      <div className="flex flex-col gap-6 sm:w-[616px] sm:h-[640px] w-[300px] justify-center">
        <h1 className="font-black sm:text-4xl text-3xl sm:w-full w-[300px]">
        Sign Up and Verify Your Zip Code for a Seamless Experience
        </h1>
        <p className="">
        To get started, simply sign up and grant Meta Mask access for registration and login. You&apos;ll also need to allow geolocation access to verify your zip code.
        </p>
      </div>
      <div className=" relative aspect-square sm:w-[656px] sm:h-[640px] sm:mt-0 mt-[40px]">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default SignUpVer