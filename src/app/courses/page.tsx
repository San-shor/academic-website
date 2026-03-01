import { courses } from "@/lib/site-data";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div>
      {/* ── Page header ──────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm">
            Academics
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Courses &amp; Programs
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100/70">
            Explore career-focused undergraduate and graduate programs designed
            around critical thinking, practical experience, and global
            relevance.
          </p>
        </div>
      </section>

      {/* ── Course cards ─────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <article
              key={course.code}
              className={`animate-fade-in-up stagger-${i + 1} card-hover group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm`}
            >
              {/* Color accent bar */}
              <div
                className={`h-2 bg-gradient-to-r ${course.color}`}
              />

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {course.code}
                </span>
                <h2 className="mt-2 text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
                  {course.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {course.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {course.level}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {course.duration}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center sm:p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            We offer 85+ programs across multiple disciplines. Contact our
            academic advisors for personalized guidance.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Contact an Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
