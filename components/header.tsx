"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logo } from "@/icons/logo";
import { HamburgerIcon } from "@/icons/hamburger";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
// import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] =
    useState<boolean>(false);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const handleResize = () => {
      setHamburgerMenuIsOpen(false);
      document.body.classList.add("resize-animation-stopper");
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 w-full backdrop-blur-[12px]">
      <Container className="relative flex h-[--navbar-height] items-center border-b border-white-a08 ">
        <Link className="" href="/">
          <Logo className="mr-6" />
        </Link>
        <nav
          aria-label="Site Navigation"
          id="navigation-menu"
          data-state={`${hamburgerMenuIsOpen ? "open" : "closed"}`}
          className="group transition-[visibility] data-[state='open']:visible data-[state='closed']:invisible data-[state='closed']:delay-500 md:!visible"
        >
          <div
            className={twMerge(
              "fixed left-0 top-[--navbar-height] h-[calc(100vh_-_var(--navbar-height))] w-full flex-1 overflow-y-auto bg-background transition-opacity duration-500",
              "md:static md:top-auto md:block md:h-auto md:w-auto md:bg-transparent md:!opacity-100",
              "group-data-[state='closed']:opacity-0 group-data-[state='open']:opacity-100"
            )}
          >
            <ul
              role="list"
              aria-label="Main"
              className={twMerge(
                "flex h-full flex-col max-lg:px-[calc(var(--gutter)/2)] ",
                "nth-2-4:md:hidden nth-2-4:lg:flex",
                "[&_a:hover]:text-grey [&_a]:flex [&_a]:h-[--navbar-height] [&_a]:w-full [&_a]:items-center [&_a]:text-md [&_a]:transition-colors [&_li]:border-b",
                "[&_li]:border-grey-dark [&_li]:md:border-none",
                "md:flex-row md:items-center md:gap-6 md:[&_a]:text-sm"
              )}
            >
              {[
                { title: "Features", href: "#" },
                { title: "Method", href: "#" },
                { title: "Customers", href: "#" },
                { title: "Changelog", href: "#" },
                { title: "Integrations", href: "#" },
                { title: "Pricing", href: "#" },
                { title: "Company", href: "#" },
              ].map(({ title, href }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="ml-auto flex h-full items-center gap-5">
          <Link href="#" className="text-sm transition-colors hover:text-grey ">
            Login
          </Link>
          <Button href="#">Signup</Button>
        </div>

        <button
          aria-controls="navigation-menu"
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen(!hamburgerMenuIsOpen)}
          aria-label={`${
            hamburgerMenuIsOpen ? "Close" : "Open"
          } Site Navigation Menu`}
          data-state={`${hamburgerMenuIsOpen ? "open" : "closed"}`}
          aria-expanded={hamburgerMenuIsOpen}
        >
          <HamburgerIcon aria-hidden="true" />
        </button>
      </Container>
    </header>
  );
};
