import EarnUnique from '@/components/pages/Home/EarnUnique'
import HeroSection from '@/components/pages/Home/HeroSection'
import ImagePlaceholder from '@/components/pages/Home/ImagePlaceholder'
import JoinDonateReceive from '@/components/pages/Home/JoinDonateReceive'
import MicroCrowdfunding from '@/components/pages/Home/MicroCrowdfunding'
import SupportLocal from '@/components/pages/Home/SupportLocal'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ImagePlaceholder/>
      <MicroCrowdfunding/>
      <EarnUnique/>
      <JoinDonateReceive/>
      <SupportLocal/>
    </>
  )
}
