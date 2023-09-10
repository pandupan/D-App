/* eslint-disable @next/next/no-img-element */
'use client'

import { useRef } from 'react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'
import 'swiper/css';
import 'swiper/css/pagination';

const imageSlider = [
  {
    id:1,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  {
    id:2,
    imageUrl:'https://i.ibb.co/Dpz1bXR/Group-1-1.png',
  },
  {
    id:3,
    imageUrl:'https://i.ibb.co/Sth0DJT/Group-1-2.png',
  },
  {
    id:4,
    imageUrl:'https://i.ibb.co/gPK2k5p/Group-1.png',
  },
  {
    id:5,
    imageUrl:'https://i.ibb.co/Dpz1bXR/Group-1-1.png',
  },
]

const DetailsCarousel = () => {

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
    <div className="w-full h-[600px]">
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
          <SwiperSlide key={item.id}> 
            <div className='hidden w-full h-full absolute md:flex justify-between items-center z-[19]'>
              <button onClick={slidePrev} className="flex justify-center items-center text-black m-4 ml-12 font-light">
                <BsArrowLeftCircle size={30}/>
              </button>
              <button onClick={slideNext} className="flex justify-center items-center text-black m-4 mr-12 font-light">
                <BsArrowRightCircle size={30}/>
              </button>
            </div>
            <div
              className='absolute inset-0 left-8'
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default DetailsCarousel
