import Head from "next/head";
import { Fragment } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const CareersPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Careers | DAO</title>
        <meta name="description" content="This is the meta content for the careers us page" />
      </Head>
      <main className="mt-20 h-screen">
        <div className="container mx-auto px-5">
          <h1 className="text-7xl font-bold">Coming soon</h1>
        </div>
      </main>
    </Fragment>
  );
};

CareersPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default CareersPage;
