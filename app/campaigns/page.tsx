import CampagainCarousel from '@/components/pages/Campaigns/CampagainCarousel'
import CampaignDetails from '@/components/pages/Campaigns/CampaignDetails'
import FindCampaignN from '@/components/pages/Campaigns/FindCampaignN'
import React from 'react'

const page = () => {
  return (
    <div>
      <CampaignDetails/>
      <CampagainCarousel/>
      <FindCampaignN/>
    </div>
  )
}

export default page
