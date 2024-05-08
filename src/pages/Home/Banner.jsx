import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper my-8 mt-20 lg:mt-16"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full relative"
          src="https://i.ibb.co/zXfngYb/pexels-photo.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full"
          src="https://i.ibb.co/0qf3fyY/pexels-photo-122107.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full"
          src="https://i.ibb.co/0BT1cSM/pexels-photo-11282534.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full"
          src="https://i.ibb.co/JHNYXm5/pexels-photo-2166553.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-fit lg:h-[600px] w-full"
          src="https://i.ibb.co/8gFpggB/pexels-photo-472309.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
