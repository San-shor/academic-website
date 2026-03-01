import Link from "next/link";
import {
  announcements,
  featuredStats,
  researchAreas,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-28 text-white md:py-36">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl animate-pulse-slow" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl animate-pulse-slow" />

        <div className="relative mx-auto max-w-7xl">
          <p className="animate-fade-in-up mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm">
            Excellence in Education
          </p>
          <h1 className="animate-fade-in-up stagger-1 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Build your future at{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              Evergreen University
            </span>
          </h1>
          <p className="animate-fade-in-up stagger-2 mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80 md:text-xl">
            A globally connected academic community where curiosity, research,
            and leadership come together to shape the leaders of tomorrow.
          </p>
          <div className="animate-fade-in-up stagger-3 mt-10 flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-900 shadow-lg shadow-blue-900/30 transition hover:shadow-xl hover:shadow-blue-800/40"
            >
              Apply Now →
            </Link>
            <Link
              href="/courses"
              className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────── */}
      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStats.map((stat, i) => (
            <article
              key={stat.label}
              className={`animate-fade-in-up stagger-${i + 1} card-hover rounded-2xl border border-slate-200/60 bg-white p-6 shadow-lg shadow-slate-200/50`}
            >
              <span className="text-3xl">{stat.icon}</span>
              <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Announcements + Research ──────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Announcements */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
              Latest{" "}
              <span className="gradient-text">Announcements</span>
            </h2>
            <div className="space-y-4">
              {announcements.map((item, i) => (
                <article
                  key={item.title}
                  className={`animate-fade-in-up stagger-${i + 1} card-hover group rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm`}
                >
                  <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                        {item.tag}
                      </span>
                      <h3 className="mt-3 text-base font-semibold text-slate-900 transition group-hover:text-blue-700 sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-medium text-slate-400">
                      {item.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Research spotlight */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
              Research{" "}
              <span className="gradient-text">Spotlight</span>
            </h2>
            <div className="space-y-4">
              {researchAreas.slice(0, 2).map((area, i) => (
                <article
                  key={area.title}
                  className={`animate-fade-in-up stagger-${i + 1} card-hover group rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl shadow-md ${area.gradient}">
                      {area.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-blue-700">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {area.summary}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Link
              href="/research"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Explore all research areas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────── */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 animate-gradient-x px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            Ready to start your academic journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100/80">
            Join over 14,500 students discovering their potential at Evergreen
            University. Applications for Spring 2026 are now open.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-blue-800 shadow-lg transition hover:shadow-xl"
            >
              Start Your Application
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
