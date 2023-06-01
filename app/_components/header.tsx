import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="flex gap-6 items-center h-[--navbar-height]">
        <Link href="/">
          {" "}
          <Logo />
        </Link>
        <nav className="h-full">
          <ul className="flex gap-6 items-center h-full [&_a]:text-sm">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Method</Link></li>
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Changelog</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Company </Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
