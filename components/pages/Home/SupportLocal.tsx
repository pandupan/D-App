import ButtonOutline from "@/components/core/buttons/ButtonOutline"
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"


const SupportLocal = () => {
  return (
    <div className="flex lg:flex-row flex-col md:justify-between xl:container xl:px-8 px-8 md:mt-48 xl:mb-48 gap-4 mb-28">
      <div className="sm:space-y-8 space-y-4">
        <h1 className="sm:text-4xl text-3xl font-bold tracking-normal">Support Local Initiatives with Donations</h1>
        <p className="sm:text-base text-sm">Join our platform and start donating to campaigns in your area</p>
      </div>
      <div className="flex gap-4 sm:justify-center sm:items-center sm:mt-0 mt-5">
        <ButtonPrimary title="Sign Up"/>
        <ButtonOutline title="Learn More"/>

      </div>
    </div>
  )
}

export default SupportLocal