import Link from "next/link";

const admissionSteps = [
  {
    step: "01",
    title: "Online Application",
    description:
      "Complete the online application form with your personal and academic details.",
  },
  {
    step: "02",
    title: "Upload Documents",
    description:
      "Upload academic transcripts, recommendation letters, and supporting documents.",
  },
  {
    step: "03",
    title: "Language Proficiency",
    description:
      "Submit TOEFL/IELTS scores if English is not your first language.",
  },
  {
    step: "04",
    title: "Admissions Interview",
    description:
      "Attend a virtual or in-person interview with our admissions panel.",
  },
  {
    step: "05",
    title: "Confirm Enrollment",
    description:
      "Receive your decision letter and confirm your enrollment to secure your spot.",
  },
];

const keyDates = [
  { event: "Application Opens", date: "Sep 15, 2025", status: "completed" },
  { event: "Priority Deadline", date: "Dec 20, 2025", status: "completed" },
  { event: "Final Deadline", date: "Mar 30, 2026", status: "upcoming" },
  { event: "Classes Begin", date: "May 18, 2026", status: "upcoming" },
];

const scholarships = [
  {
    name: "Merit Excellence Award",
    amount: "Up to $15,000",
    description: "For students with outstanding academic records and leadership.",
  },
  {
    name: "Global Diversity Grant",
    amount: "Up to $10,000",
    description:
      "Supporting international students who contribute to campus diversity.",
  },
  {
    name: "Research Innovation Fellowship",
    amount: "Full Tuition",
    description: "For graduate students pursuing cutting-edge research projects.",
  },
];

export default function AdmissionsPage() {
  return (
    <div>
      {/* ── Page header ──────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm">
            Join Us
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Admissions
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100/70">
            Join a diverse community of ambitious students. Our admissions team
            is here to guide you through every step of the process.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {/* ── How to Apply (Timeline) ────────── */}
        <section>
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            How to <span className="gradient-text">Apply</span>
          </h2>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-400 md:block" />

            <div className="space-y-8">
              {admissionSteps.map((s, i) => (
                <div
                  key={s.step}
                  className={`animate-fade-in-up stagger-${i + 1} flex gap-6`}
                >
                  {/* Number badge */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-indigo-600 text-sm font-bold text-white shadow-lg">
                    {s.step}
                  </div>
                  {/* Content */}
                  <div className="card-hover rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Important Dates ────────────────── */}
        <section>
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            Important <span className="gradient-text">Dates</span>
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyDates.map((item, i) => (
              <article
                key={item.event}
                className={`animate-fade-in-up stagger-${i + 1} card-hover relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 text-center shadow-sm`}
              >
                {item.status === "completed" && (
                  <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-600">
                    ✓
                  </span>
                )}
                <p className="text-2xl font-extrabold text-slate-900">
                  {item.date.split(",")[0].split(" ")[1]}
                </p>
                <p className="text-sm font-medium text-blue-600">
                  {item.date.split(",")[0].split(" ")[0]}{" "}
                  {item.date.split(",")[1]}
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {item.event}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Scholarships ───────────────────── */}
        <section>
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            Scholarships &amp;{" "}
            <span className="gradient-text">Financial Aid</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {scholarships.map((s, i) => (
              <article
                key={s.name}
                className={`animate-fade-in-up stagger-${i + 1} card-hover rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm`}
              >
                <p className="text-2xl font-extrabold text-blue-700">
                  {s.amount}
                </p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 animate-gradient-x p-12 text-center text-white">
          <h2 className="text-3xl font-extrabold">
            Your journey starts here
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100/80">
            Have questions about the application process? Our admissions team
            is happy to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-blue-800 shadow-lg transition hover:shadow-xl"
            >
              Contact Admissions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
