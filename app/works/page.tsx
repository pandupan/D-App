import CZipCode from '@/components/pages/HowItWorks/CZipCode'
import EarnNFTcom from '@/components/pages/HowItWorks/EarnNFTcom'
import EmpoyerCom from '@/components/pages/HowItWorks/EmpoyerCom'
import JoinLocalCrowdf from '@/components/pages/HowItWorks/JoinLocalCrowdf'
import JoinWaitlist from '@/components/pages/HowItWorks/JoinWaitlist'
import KeepTrackH from '@/components/pages/HowItWorks/KeepTrackH'
import SignUpVer from '@/components/pages/HowItWorks/SignUpVer'
import SupportPlat from '@/components/pages/HowItWorks/SupportPlat'
import React from 'react'

const page = () => {
  return (
    <>
      <EmpoyerCom/>
      <SignUpVer/>
      <CZipCode/>
      <JoinWaitlist/>
      <EarnNFTcom/>
      <SupportPlat/>
      <KeepTrackH/>
      <JoinLocalCrowdf/>
    </>
  )
}

export default page
