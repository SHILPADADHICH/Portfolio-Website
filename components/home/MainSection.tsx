import Image from "next/image";
import Link from "next/link";

// shadcn
import { Button } from "../ui/button";

const MainSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20 gap-10">
      <div className="flex flex-col gap-3">
        <p>Hello, I&apos;m</p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Shilpa Dadhich
        </h1>

        <p>Fullstack Developer | B.Tech CSE Undergrad</p>
      </div>

      <Image
        src="/images/me.jpeg"
        alt="Shilpa Dadhich"
        width={500}
        height={500}
        className="rounded object-fill h-52 w-fit ring-2 ring-secondary"
      />

      <div className="flex gap-5 lg:mt-10">
        <Link href="/resume.pdf">
          <Button variant="outline" size="lg">
            <p className="md:text-lg">Resume</p>
          </Button>
        </Link>

        <Link href="/about">
          <Button variant="secondary" size="lg">
            <p className="md:text-lg">About me </p>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MainSection;
