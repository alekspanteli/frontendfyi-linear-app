import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import Image from "next/image";
import heroImg from "@/public/hero.webp";

export const metadata = {
  title: "Linear App",
  description: "Generated by create next app",
};

export default function Homepage() {
  return (
    <>
      <Container>
        <Hero>
          <HeroTitle>Linear is a better way to build products</HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development. Streamline
            issues, sprints, and product roadmaps.
          </HeroSubtitle>
          <Image src={heroImg} alt="Picture of the author" priority />
        </Hero>
      </Container>
    </>
  );
}
