import { Container } from "@/components/container";

export const Footer = () => (
  <footer className="border-t border-white/[0.10] py-10 mt-10">
    <Container>
      <p>
        Copyright &copy; {new Date().getFullYear()} Linear. All rights reserved.
      </p>
    </Container>
  </footer>
);
