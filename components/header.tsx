import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logo } from "@/icons/logo";
import { HamburgerIcon } from "./hamburger";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full ">
      <Container className="relative flex h-[--navbar-height] items-center gap-6 border-b border-white-a08">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="h-full flex-1 max-md:hidden">
          <ul
            role="list"
            aria-label="Navigation"
            className="flex h-full items-center gap-6 [&>li:nth-child(n+3):nth-child(-n+5)]:max-lg:hidden [&_a:hover]:text-grey [&_a]:text-sm [&_a]:transition-colors"
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex h-full items-center gap-5">
          <Link href="#" className="text-sm transition-colors hover:text-grey">
            Login
          </Link>
          <Button href="#">Signup</Button>
        </div>

        <button className="text-white">
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
