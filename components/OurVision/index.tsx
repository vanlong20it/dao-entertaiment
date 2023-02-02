import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurVision = () => {
return (
    <section className="bg-black">
      <div className="container px-10 mx-auto">
        <div className="block lg:grid py-10 grid-cols-2 gap-10 items-center">
          <div className="col-span-1 max-w-md">
            <div className="text-white">
              <h4 className="text-5xl lg:text-7xl font-bold">Our vision.</h4>
              <p className="mt-5 lg:mt-10 text-justify">
                DAO Entertainment is a 100% independent company providing
                digital music and video distribution, royalty collection,
                marketing, and more. for independent artists.
              </p>
              <p className="mt-3 text-justify">
                We are like coral reefs that represent the ability to fill
                ourselves with light and life, expand without ego, to trust our
                community, to embrace togetherness and oneness to build
                something beautiful and bigger than ourselves. DAO will make
                one&apos;s music bigger and reach more people
              </p>
              <Link href="#">
                <a className="inline-block transition-all ease-linear duration-300 px-5 py-3 bg-white text-primary font-semibold hover:bg-stone-900 hover:text-white mt-10 rounded-md no-underline">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-1 max-w-2xl mt-5 lg:mt-0">
            <Image
              src="/assets/images/banner_partners.jpg"
              width="805"
              height="900"
              alt="Partners"
              layout="responsive"
              objectFit="cover"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
