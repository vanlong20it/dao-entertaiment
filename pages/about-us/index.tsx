import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, ReactElement } from "react";
import HeroContent from "../../components/common/HeroContent";
import MainLayout from "../../Layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const AboutPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>About us | DAO</title>
        <meta name="description" content="This is the meta content for the about us page" />
      </Head>
      <main className="mt-20">
        <HeroContent title="About us" />
        <div className="container mx-auto px-14">
          <div className="py-10 max-w-3xl mx-auto text-center">
            <h2 className="text-center text-4xl lg:text-7xl">
              <span className="font-bold ">&quot;No distance&quot; </span>Music
            </h2>
            <p className="text-gray-500 mt-5">
              We are developing a company that combines music distribution and
              technology to allow independent artists to have direct control
              over their music including distribution, marketing,
              optimization,.. . to connect with millions of fans worldwide.
            </p>
          </div>
          <div>
            <Image
              width={1200}
              height={600}
              alt="Managed"
              src="/assets/images/img-managed-right.png"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20">
            <div className="col-span-1 text-center">
              <div className="text-3xl text-teal-500">
                <i className="bi bi-headphones"></i>
              </div>
              <h3 className="text-gray-900 text-lg font-semibold mt-5">
                Supporting team
              </h3>
              <p className="text-gray-500 mt-2">
                The team works directly with you on music distribution. And will
                support, advice release and copyright.
              </p>
            </div>
            <div className="col-span-1 text-center">
              <div className="text-3xl text-primary">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h3 className="text-gray-900 text-lg font-semibold mt-5">
                Developing team
              </h3>
              <p className="text-gray-500 mt-2">
                Creating and developing tools to optimize the most stable
                distribution, marketing and catalog management.
              </p>
            </div>
            <div className="col-span-1 text-center">
              <div className="text-3xl text-yellow-500">
                <i className="bi bi-tools"></i>
              </div>
              <h3 className="text-gray-900 text-lg font-semibold mt-5">
                Optimazing team
              </h3>
              <p className="text-gray-500 mt-2">
                Creating and developing tools to optimize the most stable
                distribution, marketing and catalog management.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 py-20 text-gray-100">
          <div className="container mx-auto px-10">
            <div className="max-w-xl">
              <h3 className="text-4xl lg:text-7xl">
                <span className="font-bold">DAO&apos;s </span> service
              </h3>
              <p className="text-xs md:text-xl mt-5 font-extralight">
                Our company as an independent record label can envision this as:
                &quot;hybrid management, record label, video production and
                marketing&quot;
              </p>
            </div>
            <hr className="border-gray-600 mt-14" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
              <div className="col-span-1">
                <div className="block lg:flex gap-5">
                  <div className="relative inline-block">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/assets/images/img-dulce.png"
                        layout="fill"
                        alt="Dulce"
                        width={160}
                        height={160}
                        objectFit="cover"
                        className="max-w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl capitalize">Digital Marketing</h4>
                    <p className="font-extralight mt-3 text-justify sm:text-left text-sm text-gray-300">
                      We have quickly developed the leading music media system
                      in Vietnam, reaching more than 37 million followers on
                      popular social networking platforms such as Facebook,
                      YouTube and TikTok.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="block lg:flex gap-5">
                  <div className="relative inline-block">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/assets/images/img-maren.png"
                        layout="fill"
                        alt="Dulce"
                        width={160}
                        height={160}
                        objectFit="cover"
                        className="max-w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl capitalize">Music Production</h4>
                    <p className="font-extralight mt-3 text-justify sm:text-left text-sm text-gray-300">
                      Support music production, MV production for your music.
                      Modern equipment, professional team products will reach
                      high quality. In Vietnam, we support artists with
                      production costs at DAO.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="block lg:flex gap-5">
                  <div className="relative inline-block">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/assets/images/img-emerson.png"
                        layout="fill"
                        alt="Dulce"
                        width={160}
                        height={160}
                        objectFit="cover"
                        className="max-w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl capitalize">Technology Solution</h4>
                    <p className="font-extralight mt-3 text-justify sm:text-left text-sm text-gray-300">
                      We always update, build and develop solutions for the
                      music industry such as: Dashboard, Smartlink, Product
                      analytics, music-specific marketing tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="block lg:flex gap-5">
                  <div className="relative inline-block">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/assets/images/img-lincoln.png"
                        layout="fill"
                        alt="Dulce"
                        width={160}
                        height={160}
                        objectFit="cover"
                        className="max-w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl capitalize">Music distribution</h4>
                    <p className="font-extralight mt-3 text-justify sm:text-left text-sm text-gray-300">
                      We distribute music and video to worldwide digital stores,
                      provide artists the ultimate solution to meet all
                      requirements about digital music distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link href="/">
                <a className="mt-10 inline-flex items-center px-5 py-2 bg-transparent border-2 border-solid border-white rounded-md gap-3 hover:bg-primary hover:border-primary transition-all ease-linear duration-300">
                  <i className="bi bi-plus-lg"></i>
                  <span>Read more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10 px-10">
          <div className="block lg:grid grid-cols-2 gap-28 items-center">
            <div className="col-span-1">
              <div className="relative">
                <Image
                  src="/assets/images/img-publish.png"
                  layout="responsive"
                  alt="Publish"
                  width={777}
                  height={1040}
                  className="max-w-full h-auto rounded-lg"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-span-1 mt-10 lg:mt-0">
              <div className="text-3xl lg:text-5xl text-teal-400">
                <i className="bi bi-building"></i>
              </div>
              <h4 className="text-4xl lg:text-7xl mt-5">
                We are <span className="font-bold"> DAO.</span>
              </h4>
              <p className="mt-5 lg:mt-10 text-gray-600 text-sm md:text-xl">
                Originally a music production team, we founded DAO Entertainment
                with the main orientation of becoming an independent record
                label specializing in distribution, production, media and artist
                management.
              </p>
              <p className="mt-5 text-gray-600 text-sm md:text-xl">
                We&apos;re having more than 3 years of experience in music
                distribution as well as more than 6 years of YouTube , Facebook
                experience in order to expand your reach and increase your
                revenue.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

AboutPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
export default AboutPage;
