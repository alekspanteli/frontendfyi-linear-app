'use client';

import { Container } from "@/components/container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-white/10 py-10">
      <Container>
        <p>Copyright &copy; {currentYear} Linear. All rights reserved.</p>
      </Container>
    </footer>
  );
};
