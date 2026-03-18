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
              width={300}
              height={74}
              className="site-footer__logo-image"
            />
          </Link>

          <p className="site-footer__copy">
            Iknos Docket is built for Ontario criminal defence review,
            clearer disclosure structure, and a more disciplined preparation process.
          </p>

          <p className="site-footer__meta">iknos@iknosdocket.com</p>
        </div>

        <div>
          <p className="site-footer__heading">Navigation</p>
          <div className="site-footer__links">
            <Link href="/">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
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
        <span>© {new Date().getFullYear()} Iknos Docket. All rights reserved.</span>
        <span className="site-footer__bottom-sep">•</span>
        <span>Serious workflow for serious defence work.</span>
      </div>
    </footer>
  );
}
