import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-10">
      <div className="container px-10 mx-auto">
        <Link href="#">
          <a className="w-24 inline-block">
            <Image
              src="/assets/images/logo-footer.svg"
              width="99"
              height="48"
              alt="Logo"
              layout="responsive"
              objectFit="contain"
              loading="lazy"
            />
          </a>
        </Link>
        <p className="text-gray-500 text-sm mt-1">
          &copy; Copyright 2022. All rights Reserved
        </p>
        <hr className="border-gray-500 my-2 lg:my-10" />
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between flex-wrap">
          <ul className="flex flex-col lg:flex-row">
            <li>
              <Link href="#">
                <a className="block text-gray-300 mr-10 hover:text-primary transition-all duration-300 ease-linear py-1 lg:py-3 font-semibold">
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block text-gray-300 mr-10 hover:text-primary transition-all duration-300 ease-linear py-1 lg:py-3 font-semibold">
                  Distribution
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block text-gray-300 mr-10 hover:text-primary transition-all duration-300 ease-linear py-1 lg:py-3 font-semibold">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block text-gray-300 mr-10 hover:text-primary transition-all duration-300 ease-linear py-1 lg:py-3 font-semibold">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block text-gray-300 mr-10 hover:text-primary transition-all duration-300 ease-linear py-1 lg:py-3 font-semibold">
                  Carees
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block text-gray-300 mr-10 hover:text-primary transition-all duration-300 ease-linear py-1 lg:py-3 font-semibold">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center mt-5 lg:mt-0">
            <li>
              <Link href="#">
                <a className="block w-5 mr-5 lg:mx-5">
                  <Image
                    src="/assets/images/icon-fb.png"
                    alt="Icon"
                    width="24"
                    height="24"
                    layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                    className="max-w-full h-auto brightness-50 hover:brightness-100 transition-all ease-linear duration-300"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block w-5 mr-5 lg:mx-5">
                  <Image
                    src="/assets/images/icon-insta-f.png"
                    alt="Icon"
                    width="24"
                    height="24"
                    layout="responsive"
                    loading="lazy"
                    objectFit="cover"
                    className="max-w-full h-auto brightness-50 hover:brightness-100 transition-all ease-linear duration-300"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block w-5 mr-5 lg:mx-5">
                  <Image
                    src="/assets/images/icon-twiter.png"
                    alt="Icon"
                    width="24"
                    height="24"
                    layout="responsive"
                    objectFit="cover"
                    loading="lazy"
                    className="max-w-full h-auto brightness-50 hover:brightness-100 transition-all ease-linear duration-300"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block w-5 mr-5 lg:mx-5">
                  <Image
                    src="/assets/images/icon-link.png"
                    alt="Icon"
                    width="24"
                    height="24"
                    layout="responsive"
                    loading="lazy"
                    objectFit="cover"
                    className="max-w-full h-auto brightness-50 hover:brightness-100 transition-all ease-linear duration-300"
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
