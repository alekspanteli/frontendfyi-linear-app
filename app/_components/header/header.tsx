import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../icons/logo";
import styles from "./header.module.css";
import classNames from "classnames";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full">
      <Container
        className={classNames(
          "relative flex h-[--navbar-height] items-center gap-6",
          styles.header
        )}
      >
        <Link href="/">
          <Logo />
        </Link>
        <nav className="h-full">
          <ul
            role="list"
            aria-label="Navigation"
            className="flex h-full items-center gap-6 [&_a]:text-sm"
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
      </Container>
    </header>
  );
};
