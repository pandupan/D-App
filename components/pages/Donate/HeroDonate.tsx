import Image from 'next/image'


const HeroDonate = () => {
  return (
    <div className="flex justify-start w-full sm:h-[900px] h-[812px]">
              <div className="relative w-full sm:h-[900px] h-[812px]">
                <Image
                  src="/images/PlaceHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' my-[300px] sm:container px-8 absolute flex flex-col text-white gap-8'>
                <h1 className='sm:text-6xl text-4xl font-black sm:w-[560px]'>Donate to Local Zip Code Campaigns</h1>
                <p className='sm:w-[560px] sm:text-base text-sm'>Make a difference in your community by donating to micro-crowdfunded campaigns in your local zip code.</p>
                <div className='flex flex-row gap-4'>
                  <button className='text-white bg-black flex justify-center place-items-center w-[99px] h-[48px]'>
                  Donate
                  </button>
                  <button className='text-white border-white border flex justify-center place-items-center w-[129px] h-[48px]'>
                  Learn More
                  </button>
                </div>
              </div>
    </div>
  )
}

export default HeroDonate
