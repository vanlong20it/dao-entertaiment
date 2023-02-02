import { Fragment, FunctionComponent, ReactNode } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

interface Props {
  children: ReactNode;
}
const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
