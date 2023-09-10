import CampagainCarousel from '@/components/pages/Campaigns/CampagainCarousel'
import CampaignDetails from '@/components/pages/Campaigns/CampaignDetails'
import FindCampaignN from '@/components/pages/Campaigns/FindCampaignN'
import HightlightingTopZip from '@/components/pages/Campaigns/HightlightingTopZip'
import React from 'react'

const page = () => {
  return (
    <div>
      <CampaignDetails/>
      <CampagainCarousel/>
      <FindCampaignN/>
      <HightlightingTopZip/>
    </div>
  )
}

export default page
