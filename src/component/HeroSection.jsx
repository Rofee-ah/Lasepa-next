'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import './styles.css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='relative bg-[#0c691f] h-screen w-full z-30'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className='mySwiper'>
        <SwiperSlide>
          <Image
            src='/image/slider-1.webp'
            alt=''
            width={480}
            height={270}
            className=' object-cover w-full h-screen'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/slider-2.webp'
            alt=''
            width={480}
            height={270}
            className='object-cover w-full h-screen'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/slider-4.webp'
            alt=''
            width={480}
            height={270}
            className='object-cover w-full h-screen'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/slider-5.webp'
            alt=''
            width={480}
            height={270}
            className='object-cover w-full h-screen'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/image/slider-6.webp'
            alt=''
            width={480}
            height={270}
            className='object-cover w-full h-screen'
          />
        </SwiperSlide>
      </Swiper>

      <div className='absolute left-[2rem] top-[27%] right-[2rem] text-center tablet:text-left tablet:left-[5rem] tablet:top-[40%] tablet:transform tablet:-translate-y-1/2 z-40'>
        <h1 className=' z-10 text-3xl tablet:text-[4.4rem] text-white font-bold font-rubik mb-[2rem] leading-none'>
          Decarbonizing the Lagos economy
        </h1>
        <div className='text-xl tablet:text-2xl, text-[#003314] bg-slate-200 p-2 rounded-xl opacity-80 font-medium w-full tablet:max-w-[58%] font-notoSans absolute'>
          <p>
            Our mission is to unlock and scale climate action by relying on
            globally recognized ISO standards.
          </p>
        </div>
      </div>

      <div className='absolute bottom-[20%] tablet:bottom-[12%] left-1/2 transform, -translate-x-1/2 z-40 text-center tablet:flex tablet:gap-5'>
          <button className='px-[69px]  tablet:px-7 py-3 rounded-xl bg-[#0c691f] text-white hover:opacity-75 flex justify-center whitespace-nowrap font-bold'>Register Now</button>
          <button className='px-[60px] tablet:px-6 py-3 rounded-xl bg-[#fff] border-2 border-[#003314] hover:opacity-70 flex justify-center text-[#000] whitespace-nowrap mt-5 tablet:mt-0 font-bold'>Explore Project</button>


      </div>
    </div>
  );
};

export default HeroSection;
