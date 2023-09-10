import ButtonOutline from "@/components/core/buttons/ButtonOutline"
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"


const MediumWithButton = () => {
  return (
    <div className="w-full flex flex-col px-[84px] min-h-[50vh] mt-[230px]">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold tracking-normal">Medium length heading goes here</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <div className="flex gap-4 mt-8">
        <ButtonPrimary title="Sign Up"/>
        <ButtonOutline title="Learn More"/>

      </div>
    </div>
  )
}

export default MediumWithButton