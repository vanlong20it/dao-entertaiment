import dynamic from "next/dynamic";
import Image from "next/image";
const PlatformSlide = dynamic(() => import("./components/PlatformSlide"), {
  ssr: false,
});

const PlatformSection = () => {
  return (
    <section id="platform-section" className="container mx-auto px-5 py-10">
      <h3 className="uppercase text-sm text-center text-gray-600 mb-5">
        Your music is now on the biggest platforms.
      </h3>
      <PlatformSlide />
      <div className="relative">
        <div className="block text-center lg:grid grid-cols-2 gap-5 mt-20 items-center">
          <div className="px-5">
            <Image
              src="/assets/images/img-own.png"
              alt="Music distribution"
              width="600"
              height="600"
              loading="lazy"
              objectFit="cover"
              className="max-w-xl h-auto rounded-3xl"
            />
          </div>
          <div className="px-5 max-w-xl mx-auto">
            <div className="text-primary text-5xl mt-10 mb-2 lg:mb-10">
              <i className="bi bi-music-note-beamed"></i>
            </div>
            <h3 className="font-semibold text-4xl lg:text-6xl mb-5">
              Music <br />
              <span className="font-normal">Distriution.</span>
            </h3>
            <p className="text-lg text-gray-600 text-justify">
              Your music is distributed on all the most popular streaming and
              download stores worldwide including: Spotify, Apple Music, Itunes,
              Amazon Music, Pandora, SoundCloud... A single platform to connect
              with your Fans around the world.
            </p>
          </div>
        </div>
        <div className="block text-center lg:grid grid-cols-2 gap-5 mt-20 items-center">
          <div className="px-5">
            <Image
              src="/assets/images/img-social-global.png"
              alt="Music monetization"
              width="600"
              height="600"
              loading="lazy"
              objectFit="cover"
              className="max-w-xl h-auto rounded-3xl"
            />
          </div>
          <div className="px-5 max-w-xl mx-auto">
            <div className="text-sky-500 text-5xl mt-10 mb-2">
              <i className="bi bi-graph-up"></i>
            </div>
            <h3 className="font-semibold text-4xl lg:text-6xl mb-5">
              Music <br />
              <span className="font-normal">Monetization.</span>
            </h3>
            <p className="text-lg text-gray-600 text-justify">
              Stay independent, keep the royalties and control your music.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              For artists in Vietnam, we also advance revenue for each music
              project. Support music production and music marketing.
            </p>
          </div>
        </div>
        <div className="text-center block lg:grid grid-cols-2 gap-5 mt-20 items-center">
          <div className="px-5">
            <Image
              src="/assets/images/img-social-insight.png"
              alt="Music distribution"
              width="600"
              height="600"
              loading="lazy"
              objectFit="cover"
              className="max-w-xl h-auto rounded-3xl"
            />
          </div>
          <div className="px-5 max-w-xl mx-auto">
            <div className="text-gray-500 text-5xl mb-2 mt-10">
              <i className="bi bi-balloon-heart"></i>
            </div>
            <h3 className="font-semibold text-4xl lg:text-6xl mb-5">
              Copyright <br />
              <span className="font-normal">Protection.</span>
            </h3>
            <p className="text-lg text-gray-600 text-justify">
              We protect your video and audio rights on the top UGC platforms
              including YouTube, Facebook, Instagram. Earn the royalties that
              you don&apos;t even know. You will be surprised to earn royalties
              for your music products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
