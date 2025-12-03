"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/network", label: "Network" },
  { href: "/product", label: "Product" },
  { href: "/technology", label: "Technology" },
  { href: "/our-story", label: "Our Story" },
  { href: "/knowledge-center", label: "Knowledge Center" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/60 backdrop-blur-xl shadow-sm"
          : "bg-transparent backdrop-blur-0"
      )}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* LEFT: logo + nav links */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <div className="relative h-10 w-10 md:h-16 md:w-16">
            <Image
              src="/assets/logo.png"
              alt="Lilypads logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex items-center gap-6 text-[15px] font-body text-dark">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col items-center"
                >
                  <span
                    className={clsx(
                      "transition-colors",
                      isActive
                        ? "text-primary font-medium"
                        : "hover:text-primary"
                    )}
                  >
                    {item.label}
                  </span>

                  {/* Dot */}
                  <span
                    className={clsx(
                      "mt-1 h-[6px] w-[6px] rounded-full bg-primary transition-all",
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1"
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT: buttons + burger */}
        <div className="flex items-center gap-2 md:gap-4 pr-2 md:pr-0">
          {/* Contact Us (desktop only) */}
          <button
            className={clsx(
              "hidden md:inline-flex items-center justify-center rounded-[20px] px-7 py-4 text-sm font-body font-semibold bg-transparent transition-colors duration-300 cursor-pointer hover:bg-light/10",
              scrolled
                ? "text-primary border-primary border" // when navbar background appears
                : "text-white border border-white" // default
            )}
          >
            Contact Us
          </button>

          {/* Log In */}
          <button
            className="
              rounded-[20px]
              bg-light
              px-6 md:px-8 py-4
              text-sm font-body font-semibold
              text-primary
              shadow-sm cursor-pointer hover:bg-light/90
            "
          >
            Log In
          </button>

          {/* Burger menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E0E0E0] bg-white/80 hover:bg-white cursor-pointer md:hidden"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-[4px]">
              <span
                className={clsx(
                  "block h-[2px] w-5 rounded-full bg-[#2F3130] transition-transform duration-200",
                  menuOpen && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "block h-[2px] w-5 rounded-full bg-[#2F3130] transition-opacity duration-200",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "block h-[2px] w-5 rounded-full bg-[#2F3130] transition-transform duration-200",
                  menuOpen && "-translate-y-[6px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={clsx(
            "absolute left-0 top-full w-full origin-top bg-white/95 backdrop-blur-xl shadow-md md:hidden transition-all duration-200",
            menuOpen
              ? "scale-y-100 opacity-100 pointer-events-auto"
              : "scale-y-95 opacity-0 pointer-events-none -translate-y-1"
          )}
        >
          <div className="flex flex-col gap-2 px-4 py-3">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "py-2 text-sm font-body",
                    isActive ? "text-primary font-semibold" : "text-[#2F3130]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
