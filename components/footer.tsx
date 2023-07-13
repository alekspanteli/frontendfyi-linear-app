import { Container } from "@/components/container";

export const Footer = () => (
  <footer className="mt-10 border-t border-white/10 py-10">
    <Container>
      <p>
        Copyright &copy; {new Date().getFullYear()} Linear. All rights reserved.
      </p>
    </Container>
  </footer>
);
