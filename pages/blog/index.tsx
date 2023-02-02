import Head from "next/head";
import React, { Fragment } from "react";
import MainLayout from "../../Layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const BlogPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Blog | DAO</title>
        <meta name="description" content="This is the meta content for the blog page" />
      </Head>
      <main className="mt-20 h-screen">
        <div className="container mx-auto px-5">
          <h1 className="text-7xl font-bold">Coming soon</h1>
        </div>
      </main>
    </Fragment>
  );
};

BlogPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default BlogPage;
