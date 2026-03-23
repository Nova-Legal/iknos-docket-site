import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__intro">
          <Link href="/" className="site-footer__brand-lockup" aria-label="IKNOS Docket home">
            <Image
              src="/branding/iknos-docket-lockup.svg"
              alt="IKNOS Docket"
              width={236}
              height={58}
              className="site-footer__logo-image"
            />
          </Link>

          <p className="site-footer__copy">
            Iknos Docket is built for Ontario criminal defence workflow: mixed-format disclosure, clearer review continuity, and stronger control inside a live file.
          </p>

          <div className="site-footer__meta-stack">
            <p className="site-footer__meta">IKNOS — Built for the hard part.</p>
            <p className="site-footer__meta">iknos@iknosdocket.com</p>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Navigation</p>
          <div className="site-footer__links">
            <Link href="/">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Engage</p>
          <div className="site-footer__links">
            <Link href="/demo">Request a Demo</Link>
            <Link href="/pilot">Apply for Pilot</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Iknos Docket</span>
        <span className="site-footer__bottom-dot">•</span>
        <span>Ontario criminal defence workflow</span>
      </div>
    </footer>
  );
}
