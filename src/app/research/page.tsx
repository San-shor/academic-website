import Link from "next/link";
import { researchAreas } from "@/lib/site-data";

const researchStats = [
  { label: "Active Research Projects", value: "120+" },
  { label: "Annual Funding", value: "$42M" },
  { label: "Industry Partners", value: "60+" },
  { label: "Published Papers (2025)", value: "850+" },
];

export default function ResearchPage() {
  return (
    <div>
      {/* ── Page header ──────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm">
            Innovation
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Research &amp; Discovery
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100/70">
            Evergreen University drives discovery through interdisciplinary
            collaboration, cutting-edge labs, and partnerships with industry
            and global institutions.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {/* ── Research stats ──────────────────── */}
        <section className="-mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchStats.map((stat, i) => (
              <article
                key={stat.label}
                className={`animate-fade-in-up stagger-${i + 1} card-hover rounded-2xl border border-slate-200/60 bg-white p-6 text-center shadow-lg`}
              >
                <p className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Research areas ──────────────────── */}
        <section>
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            Focus <span className="gradient-text">Areas</span>
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <article
                key={area.title}
                className={`animate-fade-in-up stagger-${i + 1} card-hover group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm`}
              >
                {/* Gradient accent */}
                <div
                  className={`h-2 bg-gradient-to-r ${area.gradient}`}
                />

                <div className="p-8">
                  <span className="text-4xl">{area.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {area.summary}
                  </p>

                  {/* Lab tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.labs.map((lab) => (
                      <span
                        key={lab}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-700"
                      >
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Interested in research collaboration?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">
            We partner with universities, governments, and industry leaders
            worldwide. Get in touch to explore opportunities.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
