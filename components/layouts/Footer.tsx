"use client";

import { usePathname } from "next/navigation";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Footer5 from "./footer/Footer5";
import Footer6 from "./footer/Footer6";

const foot1 = ["/", "/details"]
const foot2 = ["/teams"]
const foot3 = ["/works"]
const foot4 = ["/campaigns"]
const foot5 = ["/donate"]
const foot6 = ["/merch", "product"]


const Footer = () => {
  const pathname = usePathname()

  return (
    <div>

      {foot1.includes(pathname) && ( <Footer1/> )}

      {foot2.includes(pathname) && ( <Footer2/> )}

      {foot3.includes(pathname) && ( <Footer3/> )}

      {foot4.includes(pathname) && ( <Footer4/> )} 

      {foot5.includes(pathname) && ( <Footer5/> )}

      {foot6.includes(pathname) && ( <Footer6/> )}

    </div>
  )
}

export default Footer
