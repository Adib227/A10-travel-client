import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'animate.css';
// import './styles.css';

// import required modules

import { Navigation } from 'swiper/modules';

const Extratwo = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper my-16  mt-20  lg:mt-28 bg-gray-200"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <SwiperSlide>
        <h1 className="animate__fadeInUpBig text-center text-3xl font-semibold p-20">
          OUR CLIENT’S WORDS
        </h1>
        <p className="font-normal mx-5 lg:mx-24 animate__fadeInLeftBig">
          "I recently booked a trip with Wanderlust Adventures, and I couldn't
          be happier with the experience! From the moment I contacted them to
          inquire about tours to the last day of my trip, everything was
          flawless. The customer service team was incredibly responsive and
          helped me customize the perfect itinerary for my solo adventure. The
          tour guides were friendly, knowledgeable, and made me feel right at
          home in every destination. I particularly enjoyed the
          off-the-beaten-path excursions they organized, which allowed me to
          discover hidden gems I wouldn't have found on my own. Overall, it was
          an unforgettable journey, and I can't wait to book another trip with
          Wanderlust Adventures in the future!"
        </p>
        <p className="text-end mr-10 p-8 animate__fadeInLeftBig">
          -"Jamie Hunt"
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center text-3xl font-semibold p-20">
          OUR CLIENT’S WORDS
        </h1>
        <p className="font-normal mx-5 lg:mx-24">
          "My family and I recently took a trip to Europe with Horizon Travels,
          and it exceeded all our expectations! The entire trip was meticulously
          planned, and we were impressed by the attention to detail. Our tour
          guide was fantastic, providing insightful commentary and ensuring
          everyone had a great time. The accommodations were top-notch, and we
          appreciated the variety of activities included in the itinerary.
          Horizon Travels truly made our vacation memorable, and we highly
          recommend them to anyone looking for a stress-free travel experience!"
        </p>
        <p className="text-end mr-10 p-8">-"Perry Long"</p>
      </SwiperSlide>

      <SwiperSlide>
        <h1 className="text-center text-3xl font-semibold p-20">
          OUR CLIENT’S WORDS
        </h1>
        <p className="font-normal mx-5 lg:mx-24">
          "As a solo traveler, safety is always my top priority, and I'm happy
          to say that SafeJourney Tours exceeded my expectations. Not only did
          they provide excellent support and guidance throughout the trip, but
          they also prioritized the well-being of all their guests. I felt
          secure and well taken care of every step of the way. The itinerary was
          well-balanced, allowing for plenty of exploration while still leaving
          room for relaxation. I met some wonderful people during the tour and
          made memories that will last a lifetime. I highly recommend
          SafeJourney Tours to anyone looking for a safe and enjoyable travel
          experience!"
        </p>
        <p className="text-end mr-10 p-8">-"Alexander Doe"</p>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center text-3xl font-semibold p-20">
          OUR CLIENT’S WORDS
        </h1>
        <p className="font-normal mx-5 lg:mx-24">
          "My recent trekking expedition with Summit Adventures was an absolute
          adventure of a lifetime! From challenging trails to breathtaking
          views, every moment was filled with excitement. The guides were
          experienced and knowledgeable, providing valuable insights into the
          local culture and environment. Despite the physical demands of the
          trek, the support team made sure we were well-fed and comfortable
          throughout the journey. It was a test of endurance and resilience, but
          reaching the summit was an incredibly rewarding experience. I can't
          thank Summit Adventures enough for pushing me out of my comfort zone
          and helping me achieve my goals!"
        </p>
        <p className="text-end mr-10 p-8">-"Alexander Michale"</p>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center text-3xl font-semibold p-20">
          OUR CLIENT’S WORDS
        </h1>
        <p className="font-normal mx-5 lg:mx-24">
          "I had the pleasure of going on a safari adventure with
          WildExpeditions, and it was a dream come true! From the moment we
          arrived, we were blown away by the stunning landscapes and abundance
          of wildlife. Our guide was incredibly passionate about conservation
          and shared fascinating stories about the animals we encountered. The
          camp accommodations were comfortable, and the staff went above and
          beyond to make us feel welcome. It was an unforgettable experience
          that I'll cherish forever. Thank you, WildExpeditions, for an
          incredible journey!"
        </p>
        <p className="text-end mr-10 p-8">-"Alexander Xafier"</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Extratwo;
