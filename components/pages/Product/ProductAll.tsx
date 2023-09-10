import Image from 'next/image'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoBasketballOutline } from 'react-icons/io5'

const ProductAll = () => {
  return (
    <div className="container flex flex-col gap-10 mt-12 mb-44">
      <div className="flex flex-col gap-6">
        <div className="font-bold">Tagline</div>
        <h1 className="font-black text-5xl">Products</h1>
        <div className='flex justify-between'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
        <button className='w-[104px] h-[48px] border border-black'>
          <a className='place-self-center'>View All</a>
        </button>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="mt-8 grid grid-cols-4 grid-rows-2 gap-20">
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
                $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative w-[304px] h-[304px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-xl">Product name</h1>
              <h2 className="text-base">Variant</h2>
              <h1 className="mt-3 text-2xl font-bold">
              $55
              </h1>
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
