import Image from 'next/image'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoBasketballOutline } from 'react-icons/io5'

const ProductAll = () => {
  return (
    <div className="container flex flex-col gap-10 mt-12 mb-44">
      <div className="flex flex-col gap-6">
        <div className="font-bold">Revolutionize</div>
        <h1 className="font-black text-5xl">Meet Our Team</h1>
        <p>
          Passionate individuals behind the F-N-F Dapp, driving innovation and
          impact.
        </p>
      </div>
      <div className="flex justify-start">
        <div className="mt-8 grid grid-cols-3 grid-rows-2 gap-20">
          <div>
            <div className=" relative w-[405px] h-[395px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">John Smith</h1>
              <h2 className="text-lg">CEO</h2>
              <p className="mt-3 w-[405px]">
                Leading the team towards a decentralized future, empowering
                communities through micro-crowdfunding.
              </p>
              <div className="flex flex-row mt-6 gap-4">
                <AiFillLinkedin size={20} />
                <AiOutlineTwitter size={20} />
                <IoBasketballOutline size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className=" relative w-[405px] h-[395px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">Jane Doe</h1>
              <h2 className="text-lg">CTO</h2>
              <p className="mt-3 w-[405px]">
              Driving the technical vision of the F-N-F Dapp, ensuring a seamless user experience.
              </p>
              <div className="flex flex-row mt-6 gap-4">
                <AiFillLinkedin size={20} />
                <AiOutlineTwitter size={20} />
                <IoBasketballOutline size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className=" relative w-[405px] h-[395px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">Michael Johnson</h1>
              <h2 className="text-lg">Marketing Director</h2>
              <p className="mt-3 w-[405px]">
              Crafting compelling narratives to spread awareness and drive adoption of the F-N-F Dapp.
              </p>
              <div className="flex flex-row mt-6 gap-4">
                <AiFillLinkedin size={20} />
                <AiOutlineTwitter size={20} />
                <IoBasketballOutline size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className=" relative w-[405px] h-[395px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">Emily Wilson</h1>
              <h2 className="text-lg">Product Manager</h2>
              <p className="mt-3 w-[405px]">
              Overseeing the development and implementation of new features to enhance user experience.
              </p>
              <div className="flex flex-row mt-6 gap-4">
                <AiFillLinkedin size={20} />
                <AiOutlineTwitter size={20} />
                <IoBasketballOutline size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className=" relative w-[405px] h-[395px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">David Thompson</h1>
              <h2 className="text-lg">Blockchain Developer</h2>
              <p className="mt-3 w-[405px]">
              Leveraging blockchain technology to create a secure and transparent micro-crowdfunding platform.
              </p>
              <div className="flex flex-row mt-6 gap-4">
                <AiFillLinkedin size={20} />
                <AiOutlineTwitter size={20} />
                <IoBasketballOutline size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className=" relative w-[405px] h-[395px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-lg">Sarah Davis</h1>
              <h2 className="text-lg">UX Designer</h2>
              <p className="mt-3 w-[405px]">
              Creating intuitive and visually appealing interfaces to enhance user engagement.
              </p>
              <div className="flex flex-row mt-6 gap-4">
                <AiFillLinkedin size={20} />
                <AiOutlineTwitter size={20} />
                <IoBasketballOutline size={20} />
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ProductAll
