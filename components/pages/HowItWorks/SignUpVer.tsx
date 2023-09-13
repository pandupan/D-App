 
import Image from "next/image";


const SignUpVer = () => {
  return(
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 mb-28">
      <div className="flex flex-col gap-6 sm:w-[616px] sm:h-[640px] w-[300px] justify-center">
        <h1 className="font-black sm:text-4xl text-3xl sm:w-full w-[300px]">
        Sign Up and Verify Your Zip Code for a Seamless Experience
        </h1>
        <p className="">
        To get started, simply sign up and grant Meta Mask access for registration and login. You&apos;ll also need to allow geolocation access to verify your zip code.
        </p>
      </div>
      <div className="relative aspect-square md:w-[616px] md:h-[640px] lg:mt-[20px] mt-[40px]">
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