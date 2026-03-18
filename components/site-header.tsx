import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" },
  { href: "/demo", label: "Request a Demo", cta: true }
];

export function SiteHeader() {
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
            width={340}
            height={82}
            priority
            className="site-header__logo-image"
          />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.cta ? "site-nav__cta" : "site-nav__link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
