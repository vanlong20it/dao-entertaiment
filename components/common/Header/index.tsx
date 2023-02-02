import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

const Header: FunctionComponent = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  return (
    <header id="header" className="bg-white fixed top-0 w-full left-0 z-50">
      <div className="relative">
        <div className="container px-5 mx-auto">
          <div className="flex items-center justify-between py-3">
            <div className="flex justify-start gap-x-4 items-center">
              <button
                onClick={() => setIsCollapse(!isCollapse)}
                type="button"
                className="block lg:hidden group w-10"
              >
                <span
                  className={`w-10 ml-auto h-1 bg-gray-600 block my-2 transition-all duration-300 ease-linear ${
                    isCollapse ? "w-7" : ""
                  }`}
                ></span>
                <span
                  className={`w-10 mr-auto h-1 bg-gray-600 block my-2 transition-all duration-300 ease-linear ${
                    isCollapse ? "w-7" : ""
                  }`}
                ></span>
              </button>
              <Link href="/">
                <a className="w-20 h-auto lg:w-28">
                  <Image
                    alt="Dao Entertaiment"
                    src="/assets/images/logo.svg"
                    width="122"
                    height="55"
                    loading="lazy"
                    className="max-w-full h-auto"
                  />
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <nav
                className={`absolute lg:static top-16 left-0 w-full bg-white transition-all ease-in-out duration-300 scale-y-0 lg:scale-y-100 origin-top opacity-100 py-10 lg:py-0${
                  isCollapse ? " scale-y-100" : ""
                }`}
              >
                <ul className="flex items-center flex-col lg:flex-row">
                  <li className="max-w-md w-full text-center">
                    <Link href="/about-us">
                      <a onClick={() => setIsCollapse(false)} className="block lg:inline-block text-sm px-4 py-2 whitespace-nowrap text-gray-900 transition-all duration-300 ease-linear font-semibold hover:text-primary">
                        About us
                      </a>
                    </Link>
                  </li>
                  <li className="max-w-md w-full text-center">
                    <Link href="/distribution">
                      <a onClick={() => setIsCollapse(false)} className="block lg:inline-block text-sm p-4 whitespace-nowrap text-gray-900 transition-all duration-300 ease-linear font-semibold hover:text-primary">
                        Distribution
                      </a>
                    </Link>
                  </li>
                  <li className="max-w-md w-full text-center">
                    <Link href="/services">
                      <a onClick={() => setIsCollapse(false)} className="block lg:inline-block text-sm p-4 whitespace-nowrap text-gray-900 transition-all duration-300 ease-linear font-semibold hover:text-primary">
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="max-w-md w-full text-center">
                    <Link href="/contact">
                      <a onClick={() => setIsCollapse(false)} className="block lg:inline-block text-sm p-4 whitespace-nowrap text-gray-900 transition-all duration-300 ease-linear font-semibold hover:text-primary">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className="max-w-md w-full text-center">
                    <Link href="/careers">
                      <a onClick={() => setIsCollapse(false)} className="block lg:inline-block text-sm p-4 whitespace-nowrap text-gray-900 transition-all duration-300 ease-linear font-semibold hover:text-primary">
                        Careers
                      </a>
                    </Link>
                  </li>
                  <li className="max-w-md w-full text-center">
                    <Link href="/blog">
                      <a onClick={() => setIsCollapse(false)} className="block lg:inline-block text-sm p-4 whitespace-nowrap text-gray-900 transition-all duration-300 ease-linear font-semibold hover:text-primary">
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li className="max-w-md w-full lg:hidden">
                    <Link href="/contact">
                      <a onClick={() => setIsCollapse(false)} className="btn-primary btn-block w-full" title="Login">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="/user/login">
                  <a className="btn-default" title="Login">
                    Login
                  </a>
                </Link>
                <div className="lg:block hidden">
                  <Link href="/contact">
                    <a className="btn-primary" title="Login">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
