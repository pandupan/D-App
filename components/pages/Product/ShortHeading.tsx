import ButtonOutline from '../../core/buttons/ButtonOutline'
import ButtonPrimary from '../../core/buttons/ButtonPrimary'

const ShortHeading = () => {
  return (
    <div>
      <div className="w-full min-h-[500px] flex flex-col px-[84px] space-y-8">
        <h3 className="text-xl font-bold mt-[130px] ">Tagline</h3>
        <h1 className="text-6xl font-bold">Short heading here</h1>
        <p className=" text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        <div className="flex gap-6 ">
          <ButtonPrimary title="Sign Up"/>
          <ButtonOutline title="Learn More"/>
        </div>
      </div>
    </div>
  )
}

export default ShortHeading
