import CampagainCarousel from '@/components/pages/Campaigns/CampagainCarousel'
import CampaignDetails from '@/components/pages/Campaigns/CampaignDetails'
import FindCampaignN from '@/components/pages/Campaigns/FindCampaignN'
import HeroCampaigns from '@/components/pages/Campaigns/HeroCampaigns'
import HightlightingTopZip from '@/components/pages/Campaigns/HightlightingTopZip'
import SupportFnFPlat from '@/components/pages/Campaigns/SupportFnFPlat'
import SupportLocalZipC from '@/components/pages/Campaigns/SupportLocalZipC'
import React from 'react'
import { useRef } from 'react'

const page = () => {
  return (
    <div>
      <HeroCampaigns/>
      <CampaignDetails/>
      <CampagainCarousel/>
      <FindCampaignN/>
      <HightlightingTopZip/>
      <SupportLocalZipC/>
      <SupportFnFPlat/>
    </div>
  )
}

export default page
