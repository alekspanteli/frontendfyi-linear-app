import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import Image from "next/image";
import heroImg from '@/public/hero.webp';

export const metadata = {
  title: "Test",
  description: "Generated by create next app",
};

export default function Homepage() {
  return (
    <>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Linear is a better way to build products</HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development. Streamline
              issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <Image
              src={heroImg}
              alt="Picture of the author"
            />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </>
  );
}
