import Image from 'next/image'


const HeroDonate = () => {
  return (
    <div className="flex justify-start w-full h-[900px]">
              <div className="relative w-full h-[900px]">
                <Image
                  src="/images/PlaceHolder_3.png"
                  alt="Icon"
                  fill={true}
                />
              </div>
              <div className=' my-[300px] container absolute flex flex-col text-white gap-8'>
                <h1 className='text-6xl font-black w-[560px]'>Donate to Local Zip Code Campaigns</h1>
                <p className='w-[560px]'>Make a difference in your community by donating to micro-crowdfunded campaigns in your local zip code.</p>
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
