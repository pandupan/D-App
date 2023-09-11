import Empowering from '@/components/pages/MeetTeam/Empowering'
import JoinCommunity from '@/components/pages/MeetTeam/JoinCommunity'
import OurTeam from '@/components/pages/MeetTeam/OurTeam'
import RecognizedIndustry from '@/components/pages/MeetTeam/RecognizedIndustry'
import RevoMicro from '@/components/pages/MeetTeam/RevoMicro'
import SubsNewsletter from '@/components/pages/MeetTeam/SubsNewsletter'
import TrustedCompanies from '@/components/pages/MeetTeam/TrustedCompanies'
import React from 'react'

const page = () => {
  return (
    <div>
      <Empowering/>
      <RevoMicro/>
      <OurTeam/>
      <RecognizedIndustry/>
      <TrustedCompanies/>
      <JoinCommunity/>
      <SubsNewsletter/>
    </div>
  )
}

export default page
