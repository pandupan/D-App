import React from 'react'
import { BiSolidCube } from 'react-icons/bi'

const LongHeading = () => {
  return (
    <div className="w-full justify-between flex lg:flex-row flex-col px-[84px] min-h-[50vh]">
      <h1 className="w-[40%] font-black text-4xl p-4">
        Long heading is what you see here in this feature section
      </h1>
      <div className="w-[45%] h-auto flex flex-col my-2 gap-4 text-lg space-y-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className="flex flex-row">
            <div className="space-y-4 w-[50%]">
              <BiSolidCube size={40}/>
              <h3 className="font-bold">Subheading One</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            <div className="space-y-4 w-[50%] ">
              <BiSolidCube size={40}/>
              <h3 className="font-bold">Subheading Two</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LongHeading
