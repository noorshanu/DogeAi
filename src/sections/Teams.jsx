import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { Pagination, Autoplay, } from "swiper/modules";
import "swiper/css/pagination";

// import required modules
import { EffectCreative } from "swiper/modules";
import TeamCard from "../components/TeamCard";

function Teams() {
  return (
    <>
      <Swiper
        id="teams-slider"
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        speed={1000}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,

          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        className="mySwiper6"
      >
        <SwiperSlide>
          <TeamCard
          title=' Working with Mark8 has been a game-changer for our marketing efforts. Their targeted social media campaigns and community management services have helped us build a strong and engaged community. We saw a 50% increase in user engagement within two months.'
          name='Jonathan Doe'
          Desi='Senior Director of Marketing'
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard 
          title='Mark8 delivered outstanding results for our product launch. Their PR and content marketing strategies generated significant media coverage and drove a substantial traffic increased. We are extremely pleased with their work and the positive impact on our brand.'
         name='Will Smith'
         Desi='Lead Marketing Manager'
         />
        </SwiperSlide>
        <SwiperSlide>
          <TeamCard 
          title='Mark8 exceeded our expectations with their CMC and CG listing services! Their team demonstrated in-depth knowledge of the requirements and processes, ensuring a seamless and efficient listing experience. They handled everything professionally, from documentation to communication, making the entire process stress-free. Thanks to Mark8, our project is now gaining the visibility and credibility it deserves on CMC and CG. '
          name='Sophia'
          Desi='Consultant'
          />
        </SwiperSlide>
        <SwiperSlide>
        <TeamCard
          title=' Working with Mark8 has been a game-changer for our marketing efforts. Their targeted social media campaigns and community management services have helped us build a strong and engaged community. We saw a 50% increase in user engagement within two months.'
          name='Jonathan Doe'
          Desi='Senior Director of Marketing'
          
          />
        </SwiperSlide>
        <SwiperSlide>
        <TeamCard 
          title='I had an exceptional experience working with Mark8 for my project listing services. Their expertise in the Web3 space is unparalleled, and their strategic approach ensured our token listing was smooth and effective. The team is incredibly responsive, professional, and thorough in their work. Mark8 strong industry connections and innovative marketing strategies truly helped us gain significant visibility and traction. I highly recommend Mark8 for anyone looking to elevate their project in the blockchain ecosystem!'
          name='Elliot Alderson'
          Desi='Consultant'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Teams;
