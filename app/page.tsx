import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <section className="section home-hero home-hero--premium">
        <div className="container">
          <div className="home-hero__grid home-hero__grid--premium">
            <div className="home-hero__main">
              <p className="eyebrow">IKNOS • Docket • Ontario criminal defence workflow</p>

              <h1 className="home-hero__title home-hero__title--premium">
                Criminal disclosure should support defence work, not obscure it.
              </h1>

              <p className="home-hero__text home-hero__text--premium">
                Docket helps criminal defence counsel turn difficult disclosure
                into a clearer working file: stronger structure, better review
                continuity, and more dependable movement toward preparation.
              </p>

              <div className="hero-actions hero-actions--premium">
                <Link href="/demo" className="btn btn-primary">
                  Request a Demo
                </Link>
                <Link href="/pilot" className="btn btn-secondary">
                  Apply for Pilot
                </Link>
              </div>

              <p className="home-hero__subnote home-hero__subnote--premium">
                Confidentiality-sensitive posture. Structured review. Clearer
                working-file continuity.
              </p>
            </div>

            <aside className="home-hero__panel home-hero__panel--premium">
              <p className="home-hero__panel-label">Why firms look for this</p>

              <div className="home-hero__panel-list">
                <div className="home-hero__panel-item">
                  <h3>Large disclosure sets</h3>
                  <p>
                    Review slows when material volume grows faster than file
                    structure.
                  </p>
                </div>

                <div className="home-hero__panel-item">
                  <h3>Fragmented working files</h3>
                  <p>
                    Important material gets reviewed, noted, and then lost
                    across disconnected passes.
                  </p>
                </div>

                <div className="home-hero__panel-item">
                  <h3>Issue visibility</h3>
                  <p>
                    Preparation improves when tensions, priorities, and weak
                    points remain visible.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-section-grid home-section-grid--premium">
          <div>
            <p className="eyebrow">Product posture</p>
            <h2 className="section-title">Built for real criminal defence work</h2>
            <p className="section-intro">
              Docket is part of IKNOS. It is built around disclosure volume,
              fragmented material, issue development, and preparation pressure.
            </p>
          </div>

          <div className="feature-list feature-list--premium">
            <div className="feature-item">
              <h3>Clearer working-file structure</h3>
              <p>
                Keep facts, issues, and preparation material organized in a way
                counsel can actually work through.
              </p>
            </div>

            <div className="feature-item">
              <h3>Better review continuity</h3>
              <p>
                Reduce the drift that happens when disclosure is handled in
                disconnected passes over time.
              </p>
            </div>

            <div className="feature-item">
              <h3>More durable issue visibility</h3>
              <p>
                Help important conflicts, weaknesses, and priorities remain visible
                as the matter develops.
              </p>
            </div>

            <div className="feature-item">
              <h3>Serious operating posture</h3>
              <p>
                Designed to feel lawyer-readable, restrained, and confidentiality-aware.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container home-proof home-proof--premium">
          <div>
            <p className="eyebrow">Operating principles</p>
            <h2 className="section-title">Serious work needs serious handling</h2>
          </div>

          <div className="stat-row">
            <div className="stat-card">
              <p className="stat-card__label">Readable</p>
              <p className="stat-card__value">Lawyer-first review</p>
              <p className="stat-card__text">
                Built for legal working files, not novelty workflow or inflated product language.
              </p>
            </div>

            <div className="stat-card">
              <p className="stat-card__label">Restrained</p>
              <p className="stat-card__value">Confidentiality-sensitive posture</p>
              <p className="stat-card__text">
                Privacy, discretion, and handling standards matter because the work itself matters.
              </p>
            </div>

            <div className="stat-card">
              <p className="stat-card__label">Supportive</p>
              <p className="stat-card__value">Built to support counsel judgment</p>
              <p className="stat-card__text">
                Designed to strengthen review and control, not replace legal analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
