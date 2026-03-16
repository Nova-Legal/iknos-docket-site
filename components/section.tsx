import { ReactNode } from "react";

type SectionProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ title, intro, children }: SectionProps) {
  return (
    <section className="section border-b border-[var(--border)] last:border-b-0">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">{title}</h2>
          {intro ? <p className="mt-4 max-w-md text-base leading-7 text-[var(--muted)]">{intro}</p> : null}
        </div>
        <div className="space-y-6 text-base leading-8 text-[var(--text)]">{children}</div>
      </div>
    </section>
  );
}
