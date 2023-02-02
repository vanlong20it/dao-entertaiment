import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnerSection = () => {
  return (
    <section className="container px-10 mx-auto">
      <div className="py-16">
        <h3 className="text-center text-3xl">
          DAO&apos;s<span className="font-semibold">Partner</span>
        </h3>
        <div className="flex items-center justify-center max-w-xl mx-auto mt-3">
          <div className="flex-1 text-center">
            <Link href="#">
              <a className="block grayscale transition-all ease-linear duration-300 hover:grayscale-0">
                <Image
                  src="/assets/images/musixmatch.png"
                  width="217"
                  height="83"
                  alt="Musixmatch"
                  className="max-w-full h-auto"
                  objectFit="cover"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link href="#">
              <a className="block grayscale transition-all ease-linear duration-300 hover:grayscale-0">
                <Image
                  src="/assets/images/songstats.png"
                  width="217"
                  height="83"
                  alt="Musixmatch"
                  className="max-w-full h-auto"
                  objectFit="cover"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
          <div className="flex-1 text-center">
            <Link href="#">
              <a className="block grayscale transition-all ease-linear duration-300 hover:grayscale-0">
                <Image
                  src="/assets/images/vcpmclogo.png"
                  width="217"
                  height="83"
                  alt="Musixmatch"
                  className="max-w-full h-auto"
                  objectFit="cover"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
