import DonateLocal from '@/components/pages/Donate/DonateLocal'
import FindCampaign from '@/components/pages/Donate/FindCampaign'
import HeroDonate from '@/components/pages/Donate/HeroDonate'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroDonate/>
      <DonateLocal/>
      <FindCampaign/>
    </div>
  )
}

export default page
