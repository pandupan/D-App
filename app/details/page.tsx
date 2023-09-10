import DetailsCarousel from '@/components/pages/CampaignsDetails/DetailsCarousel'
import EmpoweringCom from '@/components/pages/CampaignsDetails/EmpoweringCom'
import HeroDetails from '@/components/pages/CampaignsDetails/HeroDetails'
import SuppCampaign from '@/components/pages/CampaignsDetails/SuppCampaign'
import SuppLocalInitiatives from '@/components/pages/CampaignsDetails/SuppLocalInitiatives'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroDetails/>
      <EmpoweringCom/>
      <SuppLocalInitiatives/>
      <DetailsCarousel/>
      <SuppCampaign/>
    </div>
  )
}

export default page
