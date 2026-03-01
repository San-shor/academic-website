const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "admissions@evergreen.edu",
    href: "mailto:admissions@evergreen.edu",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (555) 010-2026",
    href: "tel:+15550102026",
  },
  {
    icon: "📍",
    label: "Address",
    value: "123 Campus Drive, Springfield",
    href: "#",
  },
  {
    icon: "🕐",
    label: "Office Hours",
    value: "Mon – Fri, 9 AM – 5 PM",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* ── Page header ──────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-sm">
            Get in Touch
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-blue-100/70">
            Have questions about programs, admissions, or campus life? Reach
            out and our team will help you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* ── Contact info ─────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Admissions <span className="gradient-text">Office</span>
            </h2>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`animate-fade-in-up stagger-${i + 1} card-hover flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-sm">
              <div className="flex h-48 items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl">🗺️</span>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    123 Campus Drive, Springfield
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact form ─────────────────── */}
          <div className="lg:col-span-3">
            <div className="animate-fade-in-up rounded-2xl border border-slate-200/60 bg-white p-8 shadow-lg md:p-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Send us a <span className="gradient-text">Message</span>
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and we&apos;ll get back to you within
                24 hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                      First Name
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      placeholder="John"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Last Name
                    </span>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      placeholder="Doe"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email Address
                  </span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Subject
                  </span>
                  <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Financial Aid</option>
                    <option>Research Collaboration</option>
                    <option>Campus Visit</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="How can we help you?"
                  />
                </label>

                <button
                  type="button"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/50 transition hover:shadow-xl hover:shadow-blue-300/50 sm:w-auto"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
