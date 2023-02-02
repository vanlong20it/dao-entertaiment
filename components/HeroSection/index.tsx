import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroSection: FunctionComponent = () => {
  return (
    <section className="overflow-hidden" id="hero">
      <Swiper spaceBetween={0} slidesPerView={1} loop={true} freeMode={true}>
        <SwiperSlide>
          <div className="relative">
            <div className="slide-overlay h-screen bg-red-600">
              <Image
                alt="Hero 1"
                src="/assets/images/hero-1.jpg"
                className="max-w-full w-full h-full"
                objectFit="cover"
                layout="fill"
                loading="lazy"
                width={1920}
                height={1280}
              />
            </div>
            <div className="absolute w-full px-5 lg:max-w-2xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-7xl text-white capitalize">
                Release your music
                <br />
                <span className="font-semibold">Everywhere.</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="slide-overlay h-screen">
              <Image
                alt="Hero 2"
                src="/assets/images/hero-2.jpg"
                className="max-w-full w-full h-full"
                objectFit="cover"
                layout="fill"
                loading="lazy"
              />
            </div>
            <div className="absolute w-full px-5 lg:max-w-2xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-7xl text-white capitalize">
                Music
                <br />
                <span className="font-semibold">Services.</span>
              </h2>
              <p className="text-xl text-white">
                DAO&apos;s music services create
                <br />
                <span className="font-bold">
                  a combination of marketing,<br/>
                  distribution and technology.
                </span>
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <a className="btn-primary">Contact us</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="slide-overlay h-screen">
              <Image
                alt="Hero 4"
                src="/assets/images/hero-4.jpg"
                className="max-w-full w-full h-full"
                objectFit="cover"
                layout="fill"
                loading="lazy"
              />
            </div>
            <div className="absolute w-full px-5 lg:max-w-2xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl md:text-5xl lg:text-7xl text-white capitalize">
                Release
                <br />
                <span className="font-semibold">your music</span>
              </h2>
              <p className="mt-2 text-white text-2xl">
                Reach millions of audiences
                <br />
                <span className="font-semibold">around the world.</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
