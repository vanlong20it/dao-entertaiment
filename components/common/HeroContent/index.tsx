import { FunctionComponent } from "react";

interface Props {
  title: string;
}

const HeroContent: FunctionComponent<Props> = ({ title }) => {
  return (
    <section className="text-white bg-primary h-80 flex flex-col items-center justify-center">
      <div className="container mx-auto px-10">
        <h1 className="text-4xl lg:text-7xl text-center font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default HeroContent;
