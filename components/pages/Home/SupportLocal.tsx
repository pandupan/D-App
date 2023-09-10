import ButtonOutline from "@/components/core/buttons/ButtonOutline"
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"


const SupportLocal = () => {
  return (
    <div className="w-full flex items-center justify-between px-[84px] min-h-[50vh] lg:-mt-60">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-normal">Support Local Initiatives with Donations</h1>
        <p>Join our platform and start donating to campaigns in your area</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <ButtonPrimary title="Sign Up"/>
        <ButtonOutline title="Learn More"/>

      </div>
    </div>
  )
}

export default SupportLocal
