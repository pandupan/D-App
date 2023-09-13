import ButtonOutline from "@/components/core/buttons/ButtonOutline"
import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"


const MediumWithButton = () => {
  return (
    <div className="w-full flex flex-col sm:px-8 px-4 min-h-[50vh] sm:mt-[230px]">
      <div className="sm:space-y-8 space-y-4">
        <h1 className="sm:text-5xl text-3xl font-bold tracking-normal">Medium length heading goes here</h1>
        <p className="sm:text-xl text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
      <div className="flex gap-4 sm:mt-8 mt-6">
        <ButtonPrimary title="Button"/>
        <ButtonOutline title="Button"/>

      </div>
    </div>
  )
}

export default MediumWithButton