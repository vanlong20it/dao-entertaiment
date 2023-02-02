import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, ReactElement } from "react";
import HeroContent from "../../components/common/HeroContent";
import { ISinger, SINGERS } from "../../helper/services";
import MainLayout from "../../Layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const ServicesPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Services | DAO</title>
        <meta name="description" content="This is the meta content for the services page" />
      </Head>
      <main className="mt-20 pb-20">
        <HeroContent title="Services" />
        <div className="container mx-auto px-4 lg:px-10 py-20">
          <h2 className="text-3xl lg:text-5xl text-center">
            Our<span className="font-semibold">combination </span>of music
          </h2>
        </div>
        <div className="container px-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1 px-5">
              <div className="w-full h-60 relative border-8 border-solid border-gray-200 rounded-xl max-w-xs mx-auto">
                <Image
                  width="324"
                  height="249"
                  src="/assets/images/img-register.png"
                  layout="fill"
                  alt="Register"
                  className="max-w-full h-auto"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-600 text-lg uppercase font-bold text-center mt-4">
                MARKETING SOLUTIONS
              </h3>
              <p className="text-gray-600 text-sm text-center mt-4">
                In Vietnam, we own a large system including: Facebook Fanpage,
                Youtube channel, TikTok channel about music focusing mainly on
                music listeners.
              </p>
              <div className="text-center">
                <Link href="/">
                  <a className=" text-gray-600 font-semibold uppercase text-sm inline-block hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ease-linear py-1 px-5 border-2 border-solid border-gray-600 rounded-md mt-5">
                    <i className="bi bi-plus-lg"></i> More info
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-1 px-5">
              <div className="w-full h-60 relative border-8 border-solid border-gray-200 rounded-xl max-w-xs mx-auto">
                <Image
                  width="324"
                  height="249"
                  src="/assets/images/img-notification.png"
                  layout="fill"
                  alt="Register"
                  className="max-w-full h-auto"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-600 text-lg uppercase font-bold text-center mt-4">
                DISTRIBUTION SOLUTIONS
              </h3>
              <p className="text-gray-600 text-sm text-center mt-4">
                Distribute music to digital service providers (DSPs) around the
                world. Reach millions of audiences and provide a variety of
                delivery support solutions.
              </p>
              <div className="text-center">
                <Link href="/">
                  <a className=" text-gray-600 font-semibold uppercase text-sm inline-block hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ease-linear py-1 px-5 border-2 border-solid border-gray-600 rounded-md mt-5">
                    <i className="bi bi-plus-lg"></i> More info
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-span-1 px-5">
              <div className="w-full h-60 relative border-8 border-solid border-gray-200 rounded-xl max-w-xs mx-auto">
                <Image
                  width="324"
                  height="249"
                  src="/assets/images/img-table.png"
                  layout="fill"
                  alt="Register"
                  className="max-w-full h-auto"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-gray-600 text-lg uppercase font-bold text-center mt-4">
                PRODUCTION SOLUTIONS
              </h3>
              <p className="text-gray-600 text-sm text-center mt-4">
                Production solutions include music and video production studios,
                equipped with modern equipment, a team of many years of
                experience in Vietnam.
              </p>
              <div className="text-center">
                <Link href="/">
                  <a className=" text-gray-600 font-semibold uppercase text-sm inline-block hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 ease-linear py-1 px-5 border-2 border-solid border-gray-600 rounded-md mt-5">
                    <i className="bi bi-plus-lg"></i> More info
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-10 rounded-3xl pb-10 pt-20">
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 relative rounded-2xl overflow-hidden">
              {SINGERS &&
                SINGERS.map((item: ISinger) => {
                  return (
                    <div className="col-span-1 relative" key={item.id}>
                      <Link href={item.url}>
                        <a className="block h-36 overflow-hidden group">
                          <Image
                            src={item.image}
                            alt={item.description}
                            layout="fill"
                            width={233}
                            height={133}
                            objectFit="cover"
                            className="group-hover:scale-110 transition-all ease-out duration-200 brightness-50 hover:brightness-100 object-center"
                            loading="lazy"
                          />
                        </a>
                      </Link>
                    </div>
                  );
                })}
            </div>
            <div className="absolute flex items-center justify-center text-center text-white top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <h3 className="text-md md:text-5xl">
                Music products in collaboration with <br />
                <span className="font-bold uppercase">Dao Entertainment</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="container px-10 mx-auto">
          <div className="lg:grid grid-cols-3 gap-5">
            <div className="col-span-1 pr-10 py-10">
              <div className="text-3xl md:text-5xl lg:text-7xl">
                <i className="bi bi-link"></i>
              </div>
              <h2 className="text-4xl lg:text-7xl mt-5">
                My bio{" "}
                <span className="font-bold tracking-tighter">Smartlink.</span>
              </h2>
              <p className="mt-5 text-lg text-gray-600">
                My Bio Smartlink is a website that helps create links for all
                your links. You can also write about yourself or share new songs
                instead of just placing a link to the song on your fanpage.
              </p>
              <a
                href="#"
                className="mt-10 uppercase bg-stone-900 inline-flex items-center justify-center px-8 py-4 rounded-lg text-white gap-3 border-2 border-solid border-stone-900 hover:bg-white hover:text-stone-900 transition-all ease-out duration-300 font-semibold"
              >
                <span className="text-primary">
                  <i className="bi bi-list-check"></i>
                </span>
                <span>More info</span>
              </a>
            </div>
            <div className="col-span-2">
              <div className="bg-banner-app bg-no-repeat relative h-full overflow-hidden rounded-3xl bg-contain bg-center max-w-3xl ml-auto">
                <div className="text-center static lg:absolute w-full h-full top-0 left-1/2 lg:-translate-x-1/2">
                  <Image
                    src="/assets/images/iphone-app-pink.png"
                    alt="App Pink"
                    layout="intrinsic"
                    className="max-w-full h-auto"
                    objectFit="contain"
                    width={313}
                    height={686}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto py-20">
            <div className="col-span-1 aspect-square bg-blue-100/50 rounded-lg flex flex-col items-center justify-center px-10">
              <i className="text-3xl lg:text-6xl bi bi-music-note"></i>
              <p className="text-base lg:text-2xl mt-5 text-center font-medium uppercase">
                Music production
              </p>
            </div>
            <div className="col-span-1 aspect-square bg-red-100/50 rounded-lg flex flex-col items-center justify-center px-10">
              <i className="text-3xl lg:text-6xl bi bi-camera"></i>
              <p className="text-base lg:text-2xl mt-5 text-center font-medium uppercase">
                Video production
              </p>
            </div>
            <div className="col-span-1 aspect-square bg-yellow-100/50 rounded-lg flex flex-col items-center justify-center px-10">
              <i className="text-3xl lg:text-6xl bi bi-pin-map"></i>
              <p className="text-base lg:text-2xl mt-5 text-center font-medium uppercase">
                Consulting solution and orientation
              </p>
            </div>
          </div>
          <div className="block lg:grid grid-cols-5 gap-x-10 gap-y-20">
            <div className="col-span-2">
              <div className="text-primary text-5xl">
                <i className="bi bi-mic"></i>
              </div>
              <h2 className="text-6xl font-medium mt-10">
                Music production at <br />
                <span className="font-bold">DAO Studio.</span>
              </h2>
              <p className="text-justify text-lg text-secondary mt-5">
                DAO Studio is the place to record and produce DAO&apos;s music
                products. Professional music producer team and modern
                facilities, we are looking forward to producing top-quality
                products on the music market.
              </p>
              <div className="mb-5 lg:mb-0">
                <a
                  href="#"
                  className="mt-10 uppercase bg-stone-900 inline-flex items-center justify-center px-8 py-4 rounded-lg text-white gap-3 border-2 border-solid border-stone-900 hover:bg-white hover:text-stone-900 transition-all ease-out duration-300 font-semibold"
                >
                  <span className="text-primary">
                    <i className="bi bi-list-check"></i>
                  </span>
                  <span>More info</span>
                </a>
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src="/assets/images/img-yourmusic.png"
                alt="Your music"
                width={761}
                height={576}
                className="max-w-full h-auto"
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <div className="col-span-3">
              <Image
                src="/assets/images/img-yourmusic.png"
                alt="Your music"
                width={761}
                height={576}
                className="max-w-full h-auto"
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
            <div className="col-span-2">
              <div className="text-primary text-3xl lg:text-5xl">
                <i className="bi bi-camera-reels"></i>
              </div>
              <h2 className="text-3xl lg:text-6xl font-medium mt-4 lg:mt-10">
                Video production at <br />
                <span className="font-bold">DAO Studio.</span>
              </h2>
              <p className="text-justify text-lg text-secondary mt-5">
                DAO Production will produce MVs, take photos of artists, make MV
                scripts… With a professional team and modern equipment, DAO
                hopes to bring the best quality products for your music.
              </p>
              <div>
                <a
                  href="#"
                  className="mt-10 uppercase bg-stone-900 inline-flex items-center justify-center px-8 py-4 rounded-lg text-white gap-3 border-2 border-solid border-stone-900 hover:bg-white hover:text-stone-900 transition-all ease-out duration-300 font-semibold"
                >
                  <span className="text-primary">
                    <i className="bi bi-list-check"></i>
                  </span>
                  <span>More info</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

ServicesPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ServicesPage;
