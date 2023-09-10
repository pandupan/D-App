import DonateLocal from '@/components/pages/Donate/DonateLocal'
import FindCampaign from '@/components/pages/Donate/FindCampaign'
import HeroDonate from '@/components/pages/Donate/HeroDonate'
import MakeDiffTday from '@/components/pages/Donate/MakeDiffTday'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroDonate/>
      <DonateLocal/>
      <FindCampaign/>
      <MakeDiffTday/>
    </div>
  )
}

export default page
