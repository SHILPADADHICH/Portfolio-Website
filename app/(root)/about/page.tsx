import Link from "next/link";
import Image from "next/image";

// icons
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

// props
import { AboutCard } from "@/props";

// components
import { Education } from "@/components/about";

// shadcn
import { Button } from "@/components/ui/button";

import { getBase64 } from "@plaiceholder/base64";
import fs from "fs";
import path from "path";

const About = async () => {
  // get path to current directory
  const __dirname = path.resolve();

  // read image file
  const image = fs.readFileSync(
    path.join(__dirname, "/public/images/me-sidelook.jpeg")
  );

  const base64String = await getBase64(image);

  return (
    <div className="flex flex-col items-center py-14 gap-10 px-10 pb-24">
      <h1 className="text-4xl font-bold">About Me</h1>

      <section className="flex flex-col gap-7 items-center md:flex-row lg:gap-16">
        <Image
          src="/images/me-sidelook.jpeg"
          alt="Shilpa Dadhich"
          width={1000}
          height={1000}
          className="h-52 w-fit rounded-xl lg:h-64 xl:h-80"
          placeholder="blur"
          blurDataURL={base64String}
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-5">
            <AboutCard
              link="/skills"
              Icon={HiOutlineBriefcase}
              title="Skills"
              duration="10+"
            />

            <AboutCard
              link="/projects"
              Icon={BsFillFileEarmarkCodeFill}
              title="Projects"
              duration="7+"
            />
          </div>

          <p className="max-w-xl text-gray-400">
            I am a full stack developer based in India. I have worked on
            multiple projects and have experience in working with different
            technologies. I am a B.Tech graduate and have been working on web
            development.I have worked with ReactJS, NextJS, NodeJS,
            ExpressJS, MongoDB, TailwindCSS and many more including AWS and
            Firebase covering leading full stack technologies and market
            requirements. I&apos;m looking up opportunities to work at industry
            level projects and contribute to the technical world.
          </p>
        </div>
      </section>

      {/* ................... education section ............ */}
      <Education />

      <div className="flex gap-5 lg:mt-10">
        <Button variant="outline" size="lg">
          <Link href="/skills" className="md:text-lg">
            Skills
          </Link>
        </Button>

        <Button variant="secondary" size="lg">
          <Link href="/contact" className="md:text-lg">
            Contact me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default About;

export const generateMetadata = () => {
  return {
    title: "About | Shilpa Dadhich",
  };
};
