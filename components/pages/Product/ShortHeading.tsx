import ButtonOutline from '../../core/buttons/ButtonOutline'
import ButtonPrimary from '../../core/buttons/ButtonPrimary'

const ShortHeading = () => {
  return (
    <div>
      <div className="w-full   flex flex-col sm:px-[84px] px-4 sm:space-y-8 space-y-6">
        <h3 className="sm:text-xl text-sm font-bold mt-[130px] ">Tagline</h3>
        <h1 className="sm:text-6xl text-4xl font-bold">Short heading here</h1>
        <p className=" sm:text-xl text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        <div className="flex gap-6 ">
          <ButtonPrimary title="Button"/>
          <ButtonOutline title="Button"/>
        </div>
      </div>
    </div>
  )
}

export default ShortHeading
