import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logo } from "@/icons/logo";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full backdrop-blur-[12px]">
      <Container className="relative flex h-[--navbar-height] items-center gap-6 border-b border-white-a08">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="h-full flex-1">
          <ul
            role="list"
            aria-label="Navigation"
            className="flex h-full items-center gap-6 [&_a:where(:hover)]:text-grey [&_a]:text-sm [&_a]:transition-colors"
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="hidden md:block">
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li className="bg-sky-700 hover:bg-sky-800 px-4 py-2 text-white sm:px-8 sm:py-3">
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company </Link>
            </li>
            <li className="ml-auto">
              <Link href="#">Login</Link>
            </li>
            <li>
              <Button href="#">Signup</Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
