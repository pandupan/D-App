import EarnUnique from '@/components/pages/Home/EarnUnique'
import GetExclusive from '@/components/pages/Home/GetExclusive'
import HeroSection from '@/components/pages/Home/HeroSection'
import ImagePlaceholder from '@/components/pages/Home/ImagePlaceholder'
import JoinDonateReceive from '@/components/pages/Home/JoinDonateReceive'
import LocalCom from '@/components/pages/Home/LocalCom'
import StayInformed from '@/components/pages/Home/StayInformed'
import MicroCrowdfunding from '@/components/pages/Home/MicroCrowdfunding'
import SupportLocal from '@/components/pages/Home/SupportLocal'
import FAQ from '@/components/pages/Home/FAQ'
import ContactSupport from '@/components/pages/Home/ContactSupport'

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ImagePlaceholder/>
      <MicroCrowdfunding/>
      <EarnUnique/>
      <GetExclusive/>
      <LocalCom/>
      <JoinDonateReceive/>
      <SupportLocal/>
      <StayInformed/>
      <FAQ/>
      <ContactSupport/>
    </>
  )
}

