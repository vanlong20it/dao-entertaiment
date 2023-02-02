import Image from "next/image";
import Link from "next/link";
import React from "react";

const BenefitSection = () => {
  return (
    <section className="py-20">
      <div className="container px-10 mx-auto">
        <div className="lg:grid grid-cols-3 items-center">
          <div className="text-center lg:text-left col-span-1">
            <div className="text-primary text-5xl">
              <i className="bi bi-link"></i>
            </div>
            <h4 className="text-4xl lg:text-7xl mb-10">
              DAO{" "}
              <span className="font-semibold block lg:inline-block">
                Smartlink.
              </span>
            </h4>
            <p className="text-center lg:text-justify text-gray-600 mb-5 max-w-xs lg:max-w-none mx-auto">
              You will be able to create a smartlink when you release your music
              through DAO. This smartlink allows you to share your products on
              social platforms and others by a link.
            </p>
            <div>
              <Link href="#">
                <a className="inline-block uppercase text-white bg-stone-900 border-solid border-2 transition-all duration-300 ease-linear border-stone-900 rounded-md font-semibold hover:border-primary hover:bg-white px-5 py-3 hover:text-primary">
                  <i className="bi bi-text-paragraph text-primary"></i> More
                  info
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-2 mt-10 lg:mt-0">
            <div className="relative lg:p-20">
              <div className="bg-primary relative overflow-hidden rounded-2xl mx-auto">
                <Image
                  src="/assets/images/banner-app-dao.png"
                  alt="Banner DAO"
                  width="777"
                  height="586"
                  className="w-full h-full max-w-full"
                  layout="responsive"
                  objectFit="contain"
                  loading="lazy"
                />
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full max-w-md w-full">
                  <div className="">
                    <Image
                      src="/assets/images/iphone-app-dao.png"
                      alt="Phone"
                      objectFit="contain"
                      layout="fill"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:grid grid-cols-9 items-center">
          <div className="col-span-5 text-stone-900 p-0 lg:p-10">
            <div className="relative">
                <Image
                  src="/assets/images/img-paid.png"
                  width="777"
                  height="586"
                  alt="Paid"
                  objectFit="contain"
                  className="max-w-full w-full h-auto"
                  loading="lazy"
                />
              <div className="absolute top-10 left-1/2 w-11/12 -translate-x-1/2 bg-white rounded-md p-4">
                <span className="inline-block border-2 border-solid border-primary uppercase p-2 rounded-md text-xs font-semibold text-primary">
                  new
                </span>
                <div className="flex justify-between flex-col lg:flex-row">
                  <p className="mt-3">
                    Your track was just used as background music on <br />
                    <span className="font-bold text-gray-400">
                      Spooky Stories
                    </span>
                  </p>
                  <div>
                    <p className="font-bold uppercase text-sm text-left lg:text-right text-gray-400">
                      Earned
                    </p>
                    <p className="font-bold text-4xl text-red-400">$968</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center lg:text-left p-10 max-w-md">
            <div className="text-4xl text-primary">
              <i className="bi bi-bar-chart-line"></i>
            </div>
            <h4 className="text-5xl mt-5 lg:text-7xl lg:mt-10">
              DAO <br />
              <span className="font-semibold">Dashboard.</span>
            </h4>
            <p className="mt-5 lg:mt-10">
              Category management system, daily trends, monthly updated revenue,
              exclusively for DAO partners. Solution to manage and monitor the
              distribution of your products on music platforms.
            </p>
            <Link href="#">
              <a className="mt-5 inline-block uppercase text-white bg-stone-900 border-solid border-2 transition-all duration-300 ease-linear border-stone-900 rounded-md font-semibold hover:border-primary hover:bg-white px-5 py-3 hover:text-primary">
                <i className="bi bi-text-paragraph text-primary"></i> More info
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
