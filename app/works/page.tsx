import CZipCode from '@/components/pages/HowItWorks/CZipCode'
import EarnNFTcom from '@/components/pages/HowItWorks/EarnNFTcom'
import EmpoyerCom from '@/components/pages/HowItWorks/EmpoyerCom'
import JoinWaitlist from '@/components/pages/HowItWorks/JoinWaitlist'
import SignUpVer from '@/components/pages/HowItWorks/SignUpVer'
import React from 'react'

const page = () => {
  return (
    <div>
      <EmpoyerCom/>
      <SignUpVer/>
      <CZipCode/>
      <JoinWaitlist/>
      <EarnNFTcom/>
    </div>
  )
}

export default page
