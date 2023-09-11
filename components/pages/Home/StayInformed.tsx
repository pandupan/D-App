import ButtonPrimary from "@/components/core/buttons/ButtonPrimary"
import { Input } from "@/components/ui/input"

const StayInformed = () => {
  return (
    <div className="w-full flex flex-col sm:px-[84px] min-h-[50vh] mt-[70px] px-4 sm:my-28 my-28">
      <div className="sm:space-y-8 space-y-6">        
        <h1 className="sm:text-5xl text-3xl font-bold tracking-normal">Stay Informed with Our Newsletter</h1>
        <p className="sm:text-base text-sm">Subscribe to stay updated on the latest news, promotions, and campaigns.</p>
        <div className="flex sm:flex-row flex-col gap-4 items-center">
          <Input type="email" placeholder="Enter your email" className="sm:w-[400px] w-full h-[48px]"/>
          <button className="bg-black w-full sm:w-[103px] h-[48px]">
            <a className="place-self-center text-white">Sign Up</a>
          </button>
        </div>
      </div>
        <p className="sm:text-sm text-xs mt-4">By clicking Sign Up, you confirm your agreement with our Terms and Conditions.</p>
    </div>
  )
}

export default StayInformed
