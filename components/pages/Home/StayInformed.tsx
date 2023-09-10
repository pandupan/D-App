import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"
import { Input } from "@/components/ui/input"

const StayInformed = () => {
  return (
    <div className="w-full flex flex-col px-[84px] min-h-[50vh] mt-[70px]">
      <div className="space-y-8">        
        <h1 className="text-5xl font-bold tracking-normal">Stay Informed with Our Newsletter</h1>
        <p>Subscribe to stay updated on the latest news, promotions, and campaigns.</p>
        <div className="flex gap-4 items-center">
          <Input type="email" placeholder="Email" className="w-[400px]"/>
          <ButtonPrimary title="Sign Up"/>
        </div>
      </div>
        <p className="text-sm mt-4">By clicking Sign Up, you confirm your agreement with our Terms and Conditions.</p>
    </div>
  )
}

export default StayInformed
