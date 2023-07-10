"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logo } from "@/icons/logo";
import { HamburgerIcon } from "./hamburger";
import { useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [hamburgetMenuIsOpen, sethamburgetMenuIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 w-full backdrop-blur-[12px]">
      <Container className="relative flex h-[--navbar-height] items-center border-b border-white-a08">
        <Link className="" href="/">
          <Logo className="mr-6" />
        </Link>
        <nav
          className={classNames(
            "fixed  left-0 top-[--navbar-height] h-[calc(100vh_-_var(--navbar-height))] w-full flex-1 overflow-y-auto bg-red md:static md:top-auto md:block md:h-auto md:w-full md:bg-transparent",
            hamburgetMenuIsOpen ? "" : "hidden"
          )}
        >
          <ul
            role="list"
            aria-label="Navigation"
            className="flex h-full flex-col gap-6 md:flex-row md:items-center [&>li:nth-child(n+3):nth-child(-n+5)]:max-lg:hidden [&_a:hover]:text-grey [&_a]:text-sm [&_a]:transition-colors"
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
          <Link
            href="#"
            className="text-sm transition-colors  hover:text-grey "
          >
            Login
          </Link>
          <Button href="#">Signup</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => sethamburgetMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle Site Navigation Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
