import Image from "next/image";

const SubsNewsletter = () => {
  return (
    <div className="container flex justify-start items-center w-full h-full sm:h-[351px] my-48">
      <div className="relative py-8 sm:py-0 w-full sm:w-[1313px] h-[400px] sm:h-[351px] border border-black">
        <Image src="/images/PlaceHolder_3.png" alt="Icon" fill={true} />
      </div>
      <div className="w-full my-[122px] container absolute flex flex-col text-white gap-4">
        <h1 className="text-3xl sm:text-5xl font-black p-1 ">
        Stay Informed with Our Newsletter
        </h1>
        <p className="text-sm sm:text-md p-1">
        Subscribe to our newsletter to receive the latest news, promotions, and campaign updates.
        </p>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-[394px]">
              <input
                id="inputField"
                className="w-full sm:w-[394px] h-[35px] sm:h-[48px] appearance-none border  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-black"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <button className="sm:w-[103px] h-[35px] sm:h-[48px] border text-white bg-black">
              <a className="place-self-center">Sign Up</a>
            </button>
          </div>
        </div>
          <p className="text-sm w-[90%]">
          Sign Up to Stay Updated on the Latest News, Promotions, and Campaigns
          </p>
      </div>
    </div>
  );
};

export default SubsNewsletter;
