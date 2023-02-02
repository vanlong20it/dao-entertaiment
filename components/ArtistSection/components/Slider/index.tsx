import Image from "next/image";
import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider: FunctionComponent = () => {
  return (
    <Swiper
      className="mt-10"
      autoplay={true}
      lazy={true}
      slidesPerView={"auto"}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
    >
      <SwiperSlide>
        <div className="block text-center group artist-overlay relative">
          <div>
            <Image
              className="rounded-3xl max-w-full object-cover h-full"
              src="/assets/images/img-slide-nhb.jpg"
              alt={"NHB"}
              height={"690"}
              width={"322"}
              layout="responsive"
              loading="lazy"
            />
          </div>
          <div className="text-white -translate-y-10 relative z-10 py-5">
            <h4 className="text-sm lg:text-2xl uppercase font-bold mb-5">
              Freak D
            </h4>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              740M+ views youtube
            </p>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              1,5M+ streams
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block text-center group artist-overlay relative">
          <div>
            <Image
              className="rounded-3xl max-w-full object-cover h-full"
              src="/assets/images/img-slide-reddy.png"
              alt={"NHB"}
              height={"690"}
              width={"322"}
              layout="responsive"
              loading="lazy"
            />
          </div>
          <div className="text-white -translate-y-10 relative z-10 py-5">
            <h4 className="text-sm lg:text-2xl uppercase font-bold mb-5">
              Freak D
            </h4>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              740M+ views youtube
            </p>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              1,5M+ streams
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block text-center group artist-overlay relative">
          <div>
            <Image
              className="rounded-3xl max-w-full object-cover h-full"
              src="/assets/images/img-slide-fread.png"
              alt={"NHB"}
              height={"690"}
              width={"322"}
              layout="responsive"
              loading="lazy"
            />
          </div>
          <div className="text-white -translate-y-10 relative z-10 py-5">
            <h4 className="text-sm lg:text-2xl uppercase font-bold mb-5">
              Freak D
            </h4>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              740M+ views youtube
            </p>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              1,5M+ streams
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block text-center group artist-overlay relative">
          <div>
            <Image
              className="rounded-3xl max-w-full object-cover h-full"
              src="/assets/images/img-slide-nhb.jpg"
              alt={"NHB"}
              height={"690"}
              width={"322"}
              layout="responsive"
              loading="lazy"
            />
          </div>
          <div className="text-white -translate-y-10 relative z-10 py-5">
            <h4 className="text-sm lg:text-2xl uppercase font-bold mb-5">
              Freak D
            </h4>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              740M+ views youtube
            </p>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              1,5M+ streams
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block text-center group artist-overlay relative">
          <div>
            <Image
              className="rounded-3xl max-w-full object-cover h-full"
              src="/assets/images/img-slide-fread.png"
              alt={"NHB"}
              height={"690"}
              width={"322"}
              layout="responsive"
              loading="lazy"
            />
          </div>
          <div className="text-white -translate-y-10 relative z-10 py-5">
            <h4 className="text-sm lg:text-2xl uppercase font-bold mb-5">
              Freak D
            </h4>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              740M+ views youtube
            </p>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              1,5M+ streams
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block text-center group artist-overlay relative">
          <div>
            <Image
              className="rounded-3xl max-w-full object-cover h-full"
              src="/assets/images/img-slide-reddy.png"
              alt={"NHB"}
              height={"690"}
              width={"322"}
              layout="responsive"
              loading="lazy"
            />
          </div>
          <div className="text-white -translate-y-10 relative z-10 py-5">
            <h4 className="text-sm lg:text-2xl uppercase font-bold mb-5">
              Freak D
            </h4>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              740M+ views youtube
            </p>
            <p className="capitalize lg:uppercase text-xs lg:text-sm">
              1,5M+ streams
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
