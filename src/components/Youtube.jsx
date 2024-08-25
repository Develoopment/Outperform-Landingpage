import React from 'react';
import Section from "./Section"
import SectionHeading from "./SectionHeading"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// importing css file that customzises the swiperjs pagination and navigation styles
import "./customizing-swiperjs.css"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// this version of the swiper component doesn't have the arrows which crowding on mobile devices
const MobileSwiper = () => {
  return(
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[300px] relative -top-5 text-white"
      >
        <SwiperSlide className='flex flex-col justify-center'>
          <iframe 
            src="https://www.youtube.com/embed/-hJLfXG9Xw4?si=9hoctCKchvLhyrx6" 
            
            className='w-full aspect-video'/>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center'>
          <iframe 
            src="https://www.youtube.com/embed/s8BQ5Suab6Y" 
            
            className='w-full aspect-video'/>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center'>
          <iframe 
            src="https://www.youtube.com/embed/bzE62q2cb-k" 
            
            className='w-full aspect-video'/>
        </SwiperSlide>
        

      </Swiper>
  )
}

// fix this
const DesktopSwiper = () => {
  return(
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-4/5 text-white  border-purple-500"
      >
      
      <SwiperSlide className='flex flex-col justify-center'>
          <iframe 
            src="https://www.youtube.com/embed/-hJLfXG9Xw4?si=9hoctCKchvLhyrx6" 
            
            className='w-full aspect-video'/>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center'>
          <iframe 
            src="https://www.youtube.com/embed/s8BQ5Suab6Y" 
            
            className='w-full aspect-video'/>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center'>
          <iframe 
            src="https://www.youtube.com/embed/bzE62q2cb-k" 
            
            className='w-full aspect-video'/>
        </SwiperSlide>     

      </Swiper>
  )
}

const Youtube = () => {
  return (
    <div id="youtube" className='min-h-[70vh]
        mb-10 py-10  
        text-center
        space-y-6
        '>

      <SectionHeading>Popular Videos</SectionHeading>
      <p className='text-[18px] lg:text-[22px] max-w-[900px] relative mx-auto'>This is my YouTube channel where I explain productivity systems in short, simple and clear videos.</p>

      <div className='sm:hidden border pt-5'>
        <MobileSwiper/>
      </div>

      <div className='hidden sm:block'>
        <DesktopSwiper/>
      </div>
      
      
    </div>
  );
}


export default Youtube;