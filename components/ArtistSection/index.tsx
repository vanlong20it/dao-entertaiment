import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const Slider = dynamic(() => import("./components/Slider"), { ssr: true });

const ArtistsSection = () => {
  return (
    <section className="bg-black py-10 text-white">
      <div className="container px-10 mx-auto">
        <div className="max-w-xl">
          <div className="mb-5 overflow-hidden w-32">
            <Image
              title="Dark logo"
              src="/assets/images/dark-logo.svg"
              width="80"
              height="40"
              alt="Dao entertaiment"
              layout="responsive"
              loading="lazy"
              className="max-w-full h-auto w-full"
            />
          </div>
          <h2 className="text-4xl lg:text-7xl">
            Top
            <br />
            <span className="font-semibold">Artists.</span>
          </h2>
          <p className="text-xl mt-5">
            In Vietnam, we have been cooperating with artists on music marketing
            and distribution.
          </p>
        </div>
      </div>
      <div className="px-5">
        <Slider />
      </div>
      <div className="container mx-auto">
        <hr className="w-4/5 mx-auto border-gray-600" />
      </div>
      <div className="container mx-auto max-w-4xl">
        <div className="py-10 lg:grid grid-cols-3 lg:py-20 items-center">
          <div className="col-span-1 text-center mb-5 lg:m-0">
            <Link href="#">
              <a className="btn-primary">Read more</a>
            </Link>
          </div>
          <div className="col-span-2 text-center">
            <p className="text-gray-500 text-sm">
              Our company as an independent record label can envision this as
              <br />
              <span>
                &quot;hybrid management, record label, video production and
                marketing&quot;.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
