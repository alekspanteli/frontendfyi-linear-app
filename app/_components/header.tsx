import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header>
      <Container>
       <Link href="/"> <Logo /></Link>
      </Container>
    </header>
  );
};
