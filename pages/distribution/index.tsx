import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import HeroContent from "../../components/common/HeroContent";
import MainLayout from "../../Layouts/MainLayout";
import { NextPageWithLayout } from "../_app";
type StoryType = 1 | 2 | 3;
const DistributionPage: NextPageWithLayout = () => {
  const [type, setType] = useState<StoryType>(1);
  return (
    <Fragment>
      <Head>
        <title>Distribution | DAO</title>
        <meta name="description" content="This is the meta content for the distribution page" />
      </Head>
      <main className="mt-20">
        <HeroContent title="Distribution" />
        <div className="container mx-auto px-10 py-20">
          <div className="max-w-5xl text-center pb-20 mx-auto">
            <h2 className="text-2xl md:text-5xl">
              Release your music on
              <br />
              <span className="font-semibold">global music platforms</span>
            </h2>
            <p className="text-gray-600 mt-10 text-sm md:text-lg">
              Your music is on Spotify, Apple music, Zing MP3, Facebook, TikTok,
              Instagram,... Approach to audiences and fans on the biggest global
              plaforms. Below are the stores which we have connected, where your
              audience can stream and download your music after you release it
              through the DAO.
            </p>
          </div>
          <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
            <div className="flex-1 text-center">
              <form>
                <div className="relative">
                  <input
                    type="search"
                    name="keyword"
                    id="keyword"
                    placeholder="SEARCH"
                    className="w-full border-b border-b-black pr-10 h-10 outline-none focus:outline-none"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 right-3 -translate-y-1/2"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-5xl font-bold">Stories</h2>
            </div>
            <div className="flex-1 text-center">
              <div className="flex items-center gap-5 py-5">
                <button
                  type="button"
                  onClick={() => setType(1)}
                  className={`text-3xl text-center rounded-md w-10 border border-solid border-white ${
                    type === 1 ? "border-primary text-primary" : ""
                  }`}
                >
                  <i className="bi bi-badge-hd"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setType(2)}
                  className={`text-3xl text-center rounded-md w-10 border border-solid border-white ${
                    type === 2 ? "border-primary text-primary" : ""
                  }`}
                >
                  <i className="bi bi-sort-alpha-down"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setType(3)}
                  className={`text-3xl text-center rounded-md w-10 border border-solid border-white ${
                    type === 3 ? "border-primary text-primary" : ""
                  }`}
                >
                  <i className="bi bi-camera-video"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-20 justify-center">
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-amazon.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-apply-music.png"
                    alt="Apple music"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-deezer.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-facebook.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-shazam.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    loading="lazy"
                    width={120}
                    height={60}
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-spotify.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-tiktok.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="col-span-1 relative flex items-center h-40 border border-gray-600 border-solid hover:shadow-xl shadow-black bg-gray-200 rounded-md transition-all ease-out duration-300">
              <Link href={"/"}>
                <a className="block relative max-w-full w-28 text-center mx-auto">
                  <Image
                    src="/assets/images/icon-Itunes.png"
                    alt="Amazon"
                    layout="responsive"
                    objectFit="contain"
                    width={120}
                    loading="lazy"
                    height={60}
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/">
              <a className="px-5 py-3 border-gray-500 border-solid border-2 rounded-md inline-flex items-center justify-center gap-2 hover:border-primary hover:text-white hover:bg-primary font-semibold transition-all ease-out duration-300">
                <i className="bi bi-plus-lg"></i>
                <span>Xem thêm</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 py-20 gap-10">
              <div className="col-span-1">
                <div className="text-7xl font-semibold mb-10 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  1
                </div>
                <div className="relative h-60">
                  <Image
                    src="/assets/images/img-pushlish-1.png"
                    alt="Publish"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mt-5">
                  WORLDWIDE <br />
                  DISTRIBUTION
                </h3>
                <p className="font-thin text-gray-100 mt-5 text-center">
                  DAO can send your music to all over the world. No matter where
                  audiences are, they will be able to enjoy your music.
                </p>
              </div>
              <div className="col-span-1">
                <div className="text-7xl font-semibold mb-10 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  2
                </div>
                <div className="relative h-60">
                  <Image
                    src="/assets/images/img-pushlish-2.png"
                    alt="Publish"
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    className="max-w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mt-5">
                  WORLDWIDE <br />
                  DISTRIBUTION
                </h3>
                <p className="font-thin text-gray-100 mt-5 text-center">
                  Our market-leading reporting system makes us become a fully
                  transparent company. Our financial dashboard provides our
                  partners with clear analytics for their full catalogs.
                </p>
              </div>
              <div className="col-span-1">
                <div className="text-7xl font-semibold mb-10 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mx-auto">
                  3
                </div>
                <div className="relative h-60">
                  <Image
                    src="/assets/images/img-pushlish-3.png"
                    alt="Publish"
                    layout="fill"
                    objectFit="cover"
                    className="max-w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mt-5">
                  WORLDWIDE <br />
                  DISTRIBUTION
                </h3>
                <p className="font-thin text-gray-100 mt-5 text-center">
                  Services for artists include marketing, distribution,
                  publishing for music and DAO&apos;s music solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

DistributionPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default DistributionPage;
