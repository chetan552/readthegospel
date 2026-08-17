"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="wordmark">
          <img
            className="logo-img"
            src="/readthegospel-logo.gif"
            alt={site.name}
            width={138}
            height={46}
          />
        </Link>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label="Mobile">
          {nav.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <Link
                key={item.href}
                href={item.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
