import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Architecture } from "@/components/Architecture";
import { Experience } from "@/components/Experience";
import { Credentials } from "@/components/Credentials";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Credentials />
      <Contact />
    </>
  );
}
