import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="My Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Frontend Development"
            des="Use the latest technoligies to ensure presentable and responsive front end designs"
            icon={null}
          />
          <Card
            title="Backend Development"
            des="Utilize databases such as Mongo db to store data"
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimisation"
            des="Ensure your site is properly SEO optimized"
            icon={<SiProgress />}
          />
          <Card
            title="Error Handling"
            des="Dsisplay errors incase they occur effectivelt to the end user"
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="Ensure smooth user experience"
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="Effectively host your site for utilization by the users"
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
