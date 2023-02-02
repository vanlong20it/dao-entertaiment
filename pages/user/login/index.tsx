import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const LoginPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>DAO entertainment</title>
        <meta name="description" content="This is the meta content for the login page" />
      </Head>
      <header className="fixed top-0 left-0 w-full bg-transparent">
        <div className="container mx-auto px-10">
          <div className="flex h-20 items-center">
            <Link href="/">
              <a className="w-32 h-14 inline-block relative">
                <Image
                  className="max-w-full"
                  src="/assets/images/logo.svg"
                  alt="DAO"
                  width="126"
                  height="55"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main className="bg-gradient-to-bl via-white from-red-800 to-white">
        <div className="container mx-auto px-10">
          <div className="max-w-2xl mx-auto h-screen flex flex-col items-center justify-center">
            <div className="w-full">
              <h1 className="text-7xl">Hello there</h1>
              <h2 className="text-3xl mt-5">Login | DAO</h2>
              <form className="mt-8" autoComplete="off">
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="py-2 px-4 border border-gray-700 border-solid block w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="py-2 px-4 border border-gray-700 border-solid block w-full"
                  />
                </div>
                <div className="mb-4 text-right">
                  <Link href="/user/forgot-password">
                    <a className="hover:underline hover:text-red-600">
                      Forgot password?
                    </a>
                  </Link>
                </div>
                <div className="flex justify-between items-center">
                  <button className="btn-primary" type="submit">
                    Login
                  </button>
                  <Link href="/user/register">
                    <a className="inline-block hover:text-red-600 hover:underline">
                      I don&apos;t have an account?
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default LoginPage;
