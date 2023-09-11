import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidCube } from "react-icons/bi";
import Image from "next/image";

const ContactSupport = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full sm:px-[84px] sm:mt-48 sm:mb-48 mt-28 mb-16  px-4">
      <div className="space-y-4">
        <p className="font-bold">Connect</p>
        <h1 className="font-bold sm:text-4xl text-3xl">Contact Support</h1>
        <p className="sm:text-xl text-sm">
          Have questions or need assistance? Get in touch with our support team.
        </p>
      </div>

      <div className="w-full flex sm:flex-row flex-col sm:justify-between sm:items-center my-12 ">
        <div className="space-y-12 text-lg">
          <div className="flex flex-col sm:justify-start space-y-2">
            <HiOutlineMail size={26} />
            <h4 className="font-bold sm:text-xl text-base">Email</h4>
            <p className="sm:text-base text-sm">Send us an email</p>
            <p className="sm:text-base text-sm underline">hello@relume.io</p>
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <BsTelephone size={26} />
            <h4 className="font-bold sm:text-xl text-base">Phone</h4>
            <p className="sm:text-base text-sm">Give us a call</p>
            <p className="sm:text-base text-sm underline">+1 (555) 000-0000</p>
          </div>
          <div className="flex flex-col justify-start space-y-2">
            <IoLocationOutline size={26} />
            <h4 className="font-bold sm:text-xl text-base">Office</h4>
            <p className="sm:text-base text-sm">
              123 Sample St, Sydney NSW 2000 AU
            </p>
            <div className="flex items-center sm:gap-4 gap-2 space-y-2">
              <p className="sm:text-base text-sm">Get Directions</p>
              <BiSolidCube size={20} />
            </div>
          </div>
        </div>
        <div className="relative sm:w-[800px] sm:h-[550px] w-full h-[188px] sm:mt-0 mt-[40px]">
          <Image
            src="/images/PlaceHolder_2.png"
            alt="Placeholder"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
