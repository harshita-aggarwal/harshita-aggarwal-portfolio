import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWordpress } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero container py-28 max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col mb-4 items-center">
          <Image
            src="/profile2.jpeg"
            alt="profile image"
            width={100}
            height={100}
            className="object-cover rounded-full w-32 h-32 mb-4 ring-2 ring-primary"
          />
        </div>

        <h1 className="hero-greeting">
          Hi, I&apos;m{" "}
          <span className="hero-name-accent">Harshita Aggarwal</span>
        </h1>

        <p className="hero-title">
          Software Developer | DevOps Engineer | Cloud/AI Enthusiast
        </p>

        <div className="hero-social-group">
          <Link
            href="https://github.com/harshita-aggarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/harshita-aggarwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://iambookdragon.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <FaWordpress />
          </Link>
        </div>
        <div className="hero-cta-group">
            <Link href="/projects" className="btn-primary inline-block w-full md:w-auto px-8 py-3 rounded-lg ">View Projects</Link>
            <Link href="/contact" className="btn-muted inline-block w-full md:w-auto px-8 py-3 rounded-lg ">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
