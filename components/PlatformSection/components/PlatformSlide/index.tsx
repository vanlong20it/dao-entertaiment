import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PLATFORMS } from "../../data";

const PlatformSlide = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        loop={true}
        freeMode={true}
        spaceBetween={20}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
      >
        {PLATFORMS.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="opacity-70 transition-all duration-300 ease-linear hover:opacity-100">
                <Link href={item.url}>
                  <a className="block text-center">
                    <Image
                      width="117"
                      height="41"
                      src={item.image}
                      alt={item.title}
                      title={item.title}
                      loading="lazy"
                      className="max-w-full h-auto"
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="mt-10 text-center">
        <Link href="#">
          <a className="btn-default">
            <i className="bi bi-plus mr-3"></i> Xem thêm
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PlatformSlide;
