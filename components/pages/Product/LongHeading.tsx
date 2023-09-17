import Image from 'next/image'
import { BiSolidCube } from 'react-icons/bi'

const LongHeading = () => {
  return (
    <div className='flex flex-col sm:mt-48 container sm:px-0 px-4'>
    <div className="sm:w-full  sm:justify-between flex lg:flex-row flex-col sm:gap-32  px-0 sm:min-h-[50vh]">
      <h1 className="sm:w-[600px] font-black sm:text-4xl text-3xl sm:p-4">
        Long heading is what you see here in this feature section
      </h1>
      <div className="sm:w-[616px] h-auto flex flex-col my-2 gap-4 sm:text-lg text-sm space-y-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className="flex sm:flex-row flex-col gap-4">
            <div className="space-y-4 sm:w-[50%]">
              <BiSolidCube size={40}/>
              <h3 className="font-bold">Subheading one</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className="space-y-4 sm:w-[50%] ">
              <BiSolidCube size={40}/>
              <h3 className="font-bold">Subheading two</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
          </div>
        </div>
    </div>
      <div className=" relative sm:hidden flex aspect-square sm:w-[650px] sm:h-[650px] sm:mt-0 mt-10">
        <Image 
          src="/images/PlaceHolder_2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
  </div>
  )
}

export default LongHeading
