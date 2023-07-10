"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logo } from "@/icons/logo";
import { HamburgerIcon } from "@/icons/hamburger";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
// import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, sethamburgerMenuIsOpen] =
    useState<boolean>(false);

  return (
    <header className="fixed left-0 top-0 w-full backdrop-blur-[12px]">
      <Container className="relative flex h-[--navbar-height] items-center border-b border-white-a08">
        <Link className="" href="/">
          <Logo className="mr-6" />
        </Link>
        <div className={twMerge("transition-[visibility] md:visible", hamburgerMenuIsOpen
                ? "visible"
                : "invisible delay-500")}>
          <nav
            className={twMerge(
              "fixed left-0 top-[--navbar-height] h-[calc(100vh_-_var(--navbar-height))] w-full flex-1 overflow-y-auto bg-background transition-opacity duration-500",
              "md:static md:top-auto md:block md:h-auto md:w-auto md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "opacity-100"
                : "opacity-0"
            )}
          >
            <ul
              role="list"
              aria-label="Main"
              className={twMerge(
                "flex h-full flex-col max-lg:px-[calc(var(--gutter)/2)] ",
                "[&>li:nth-child(n+3):nth-child(-n+5)]:md:hidden [&>li:nth-child(n+3):nth-child(-n+5)]:lg:flex",
                "[&_a:hover]:text-grey [&_a]:flex [&_a]:h-[--navbar-height] [&_a]:w-full [&_a]:items-center [&_a]:text-md [&_a]:transition-colors [&_li]:border-b",
                "[&_li]:border-grey-dark [&_li]:md:border-none",
                "md:flex-row md:items-center md:gap-6 md:[&_a]:text-sm"
              )}
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
        </div>
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
          onClick={() => sethamburgerMenuIsOpen(!hamburgerMenuIsOpen)}
        >
          <span className="sr-only">Toggle Site Navigation Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
