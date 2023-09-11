/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image'
const imageSlider = [
  {
    id:1,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  {
    id:2,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  {
    id:3,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  {
    id:4,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  {
    id:5,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  
]

const DetailCarousel = () => {

  const swiperRef = useRef(null);

  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };


  return (
    <div className="relative flex justify-center items-center w-full h-[450px] sm:h-[650px] z-[1]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        ref={swiperRef}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {imageSlider.map((item,id)=>(
          <SwiperSlide className="relative" key={item.id}> 
            <div className='aspect-square sm:w-full sm:h-full absolute inset-0 flex justify-between items-center z-[19]'>
              <button onClick={slidePrev} className="flex justify-center items-center text-black mt-52 sm:mt-0 m-4 ml-8 sm:ml-12 font-light">
                <BsArrowLeftCircle size={30}/>
              </button>
              <button onClick={slideNext} className="flex justify-center items-center text-black mt-52 sm:mt-0 m-4 mr-8 sm:mr-12 font-light">
                <BsArrowRightCircle size={30}/>
              </button>
            </div>
            <Image
            className="hidden sm:block"
              src={item.imageUrl}
              alt="carousel"
              fill={true}
            />
            <Image
            className="sm:hidden block mx-auto mt-16"
              src="/images/slidersmall.png"
              alt="carousel"
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default DetailCarousel
