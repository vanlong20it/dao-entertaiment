import Link from "next/link";
import React from "react";

const FormContact = () => {
  return (
    <section className="bg-stone-900">
      <div className="container mx-auto px-10">
        <div className="max-w-2xl mx-auto py-10">
          <h4 className="text-xl lg:text-4xl text-center mb-5 text-white">
            Send DAO requirements here
          </h4>
          <form action="#" autoComplete="off">
            <div className="relative mb-5">
              <input
                placeholder="Your fullname"
                type="text"
                name="fullname"
                id="fullname"
                className="border-2 border-solid transition-all ease-out duration-300 text-white border-gray-500 bg-transparent w-full px-5 py-3 rounded-md custom-field"
              />
            </div>
            <div className="relative mb-5">
              <input
                placeholder="Your email"
                type="text"
                name="email"
                id="email"
                className="border-2 border-solid transition-all ease-out duration-300 text-white border-gray-500 bg-transparent w-full px-5 py-3 rounded-md custom-field"
              />
            </div>
            <div className="relative mb-5">
              <textarea
                placeholder="Enter your requirement..."
                name="requirement"
                id="requirement"
                className="border-2 border-solid transition-all ease-out duration-300 text-white border-gray-500 bg-transparent w-full px-5 py-3 rounded-md custom-field"
              />
            </div>
            <div className="mb-5">
              <input type="checkbox" name="term1" id="term1" />
              <label htmlFor="term1" className="ml-2 text-gray-400 select-none">
                Keep me updated on news about the music industry
              </label>
            </div>
            <div className="mb-5">
              <input type="checkbox" name="term2" id="term2" />
              <label htmlFor="term2" className="ml-2 text-gray-400 select-none">
                I have read and agreed to all{" "}
                <Link href="#">
                  <a className="text-primary font-semibold">
                    terms and conditions
                  </a>
                </Link>{" "}
                of DAO
              </label>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold uppercase rounded-md hover:bg-stone-900 hover:text-white transition-all duration-300 ease-linear block w-full py-3 border-2 border-solid border-primary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
