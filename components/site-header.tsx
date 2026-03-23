"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/trust", label: "Trust" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/demo", label: "Request a Demo", cta: true }
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          href="/"
          className="site-header__brand site-header__brand--logo"
          aria-label="IKNOS Docket home"
        >
          <Image
            src="/branding/iknos-docket-lockup.svg"
            alt="IKNOS Docket"
            width={248}
            height={60}
            priority
            className="site-header__logo-image"
          />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.cta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`site-nav__cta${active ? " site-nav__cta--active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
