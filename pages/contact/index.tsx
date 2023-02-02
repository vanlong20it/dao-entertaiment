import Head from "next/head";
import FormContact from "../../components/FormContact";
import MainLayout from "../../Layouts/MainLayout";
import { NextPageWithLayout } from "../_app";

const ContactPage: NextPageWithLayout = () => {
  return (
    <div className="bg-stone-900 mt-20 py-16">
      <Head>
        <title>Contact us - DAO</title>
        <meta
          name="description"
          content="This is the meta content for the about us page"
        />
      </Head>
      <FormContact />
    </div>
  );
};

ContactPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactPage;
