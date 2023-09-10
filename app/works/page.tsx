import CZipCode from '@/components/pages/HowItWorks/CZipCode'
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
    </div>
  )
}

export default page
