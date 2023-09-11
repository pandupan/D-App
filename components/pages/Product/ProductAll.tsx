import Image from 'next/image'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { IoBasketballOutline } from 'react-icons/io5'

const ProductAll = () => {
  return (
    <div className="sm:container flex flex-col sm:gap-10 sm:px-0 px-4 sm:mt-48 sm:mb-44 mt-28 mb-28">
      <div className="flex flex-col sm:gap-6 gap-3">
        <div className="font-bold">Tagline</div>
        <h1 className="font-black sm:text-5xl text-3xl">Products</h1>
        <div className='flex justify-between'>
        <p className='sm:text-base text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
        <button className='sm:flex hidden w-[104px] h-[48px] justify-center items-center border border-black'>
          <a className='place-self-center'>View All</a>
        </button>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="mt-8 grid sm:grid-cols-4 grid-cols-2 grid-rows-2 sm:gap-20 gap-4">
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
                $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
              $55
              </h1>
            </div>
          </div>
          <div>
            <div className=" relative sm:w-[304px] w-[137px] sm:h-[304px] h-[170px]">
              <Image
                src="/images/PlaceHolder_2.png"
                alt="Placeholder"
                fill={true}
              />
            </div>
            <div className="sm:mt-6 mt-3 mb-6">
              <h1 className="font-bold sm:text-xl text-sm">Product name</h1>
              <h2 className="sm:text-base text-xs">Variant</h2>
              <h1 className="mt-3 sm:text-2xl text-sm font-bold">
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
