import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="section not-found-page">
      <div className="container not-found-page__wrap">
        <p className="eyebrow">Page not found</p>

        <h1 className="not-found-page__title">
          This page is not available.
        </h1>

        <p className="not-found-page__lead">
          The address may be incorrect, the page may have moved, or the route
          may no longer be active.
        </p>

        <div className="not-found-page__panel">
          <p className="not-found-page__panel-label">Useful next steps</p>

          <div className="not-found-page__links">
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/product" className="btn btn-secondary">
              Product Overview
            </Link>
            <Link href="/trust" className="btn btn-secondary">
              Trust Page
            </Link>
            <Link href="/demo" className="btn btn-secondary">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
