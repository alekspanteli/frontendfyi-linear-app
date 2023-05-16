import { Container } from "@/components/container";

export const metadata = {
  title: "Test",
  description: "Generated by create next app",
};

export default function Homepage() {
  return (
    <Container data-test="test">
      <div className="text-white">
        <header>header</header>
        <main>main content</main>
        <footer>footer</footer>
      </div>
    </Container>
  );
}
