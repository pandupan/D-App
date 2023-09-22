"use client";

import { usePathname } from "next/navigation";
import Nav1 from "./navigation/Nav1";
import Nav2 from "./navigation/Nav2";
import Nav3 from "./navigation/Nav3";
import Nav4 from "./navigation/Nav4";
import Nav5 from "./navigation/Nav5";
import Nav6 from "./navigation/Nav6";
import Nav7 from "./navigation/Nav7";

const navbar1 = ["/", "/product","/teams", "/works", "/campaigns", "/details", "/donate", "/merch"]
const navbar2 = ["/teams"]
const navbar3 = ["/works"]
const navbar4 = ["/campaigns"]
const navbar5 = ["/details"]
const navbar6 = ["/donate"]
const navbar7 = ["/merch"]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div>

      {navbar1.includes(pathname) && ( <Nav1/> )}

      {/* {navbar2.includes(pathname) && ( <Nav2/> )}

      {navbar3.includes(pathname) && ( <Nav3/> )}

      {navbar4.includes(pathname) && ( <Nav4/> )} 

      {navbar5.includes(pathname) && ( <Nav5/> )}

      {navbar6.includes(pathname) && ( <Nav6/> )}

      {navbar7.includes(pathname) && ( <Nav7/> )} */}

    </div>
  )
}

export default Navbar
