import ButtonOutline from "@/components/core/buttons/ButtonOutline"
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"


const SupportLocal = () => {
  return (
    <div className="w-full flex sm:flex-row flex-col sm:items-center sm:justify-between sm:px-[84px] px-4 min-h-[50vh] lg:-mt-[140px]">
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