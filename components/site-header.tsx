import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Iknos Docket home">
          <span className="site-header__brand-mark">Iknos</span>
          <span className="site-header__brand-name">Docket</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
