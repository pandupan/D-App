import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {BiSolidCube} from 'react-icons/bi'
import Image from "next/image";

const ContactSupport = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full px-[84px] my-[220px] ">
      <div className="space-y-4">
        <p className="font-bold">Conect</p>
        <h1 className="font-bold text-4xl">Contact Support</h1>
        <p className="text-xl">Have questions or need assistance? Get in touch with our support team.</p>
      </div>

      <div className="w-full flex justify-between items-center my-12 ">
        <div className="space-y-12 text-lg">
          <div className="flex flex-col justify-start space-y-2">
            <HiOutlineMail size={35}/>
            <h4 className="font-bold text-xl">Email</h4>
            <p>Send us an email</p>
            <p className="underline">hello@relume.io</p>
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <BsTelephone size={35}/>
            <h4 className="font-bold text-xl">Phone</h4>
            <p>Give us a call</p>
            <p className="underline">+1 (555) 000-0000</p>
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <IoLocationOutline size={35}/>
            <h4 className="font-bold text-xl">Office</h4>
            <p>123 Sample St, Sydney NSW 2000 AU</p>
            <div className="flex items-center gap-4">
              <p>Get Directions</p>
              <BiSolidCube size={35}/>
            </div>
          </div>
        </div>

        <div className="relative w-[800px] h-[550px]">
          <Image 
            src="/images/placeHolder_2.png"
            alt="Placeholder"
            fill={true}
          />
        </div>


      </div>

      
    </div>
  )
}

export default ContactSupport
