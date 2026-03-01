import { faculty } from "@/lib/site-data";

export default function FacultyPage() {
  return (
    <div>
      {/* ── Page header ──────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm">
            Our People
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Faculty &amp; Staff
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100/70">
            Learn from award-winning scholars and mentors who bring research
            and real-world expertise into the classroom.
          </p>
        </div>
      </section>

      {/* ── Faculty cards ────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((member, i) => (
            <article
              key={member.name}
              className={`animate-fade-in-up stagger-${i + 1} card-hover group rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm`}
            >
              {/* Avatar */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-xl font-bold text-white shadow-lg`}
              >
                {member.initials}
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-blue-600">
                {member.title}
              </p>
              <p className="mt-4 text-sm text-slate-500">
                {member.department}
              </p>

              {/* Research */}
              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Research Focus
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {member.researchFocus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
