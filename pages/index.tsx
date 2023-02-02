import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import ArtistsSection from "../components/ArtistSection";
import BenefitSection from "../components/BenefitSection";
import FormContact from "../components/FormContact";
import HeroSection from "../components/HeroSection";
import OurVision from "../components/OurVision";
import PartnerSection from "../components/PartnerSection";
import PlatformSection from "../components/PlatformSection";
import MainLayout from "../Layouts/MainLayout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <Head>
        <title>Dao entertaiment</title>
        <meta name="description" content="Make you better" />
      </Head>
      <HeroSection />
      <PlatformSection />
      <ArtistsSection />
      <BenefitSection />
      <hr className="border-gray-400" />
      <PartnerSection />
      <OurVision />
      <FormContact />
    </main>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
