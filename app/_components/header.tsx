import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header>
      <Container className="flex">
        <Link href="/">
          {" "}
          <Logo />
        </Link>
        <nav>
          <ul>
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
