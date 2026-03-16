import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__intro">
          <p className="site-footer__brand">Iknos Docket</p>
          <p className="site-footer__copy">
            Iknos Docket is a legal workflow product built for Ontario criminal defence review and organization.
            It supports legal work; it does not replace counsel&apos;s judgment.
          </p>
        </div>

        <div>
          <p className="site-footer__heading">Navigation</p>
          <div className="site-footer__links">
            <Link href="/product">Product Overview</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/demo">Request a Demo</Link>
            <Link href="/pilot">Apply for Pilot</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="site-footer__heading">Legal</p>
          <div className="site-footer__links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        © {new Date().getFullYear()} Iknos Docket. All rights reserved.
      </div>
    </footer>
  );
}
