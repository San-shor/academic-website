import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { navigationItems } from "@/lib/site-data";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evergreen University — Excellence in Education",
  description:
    "Evergreen University is a modern academic institution focused on research, innovation, and student success.",
};

const footerLinks = [
  {
    heading: "Academics",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Faculty", href: "/faculty" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    heading: "Campus",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Student Life", href: "#" },
      { label: "Library", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
      { label: "Alumni", href: "#" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          {/* ── Header ─────────────────────────────── */}
          <header className="glass sticky top-0 z-30 border-b border-slate-200/60 shadow-sm">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-700 to-indigo-600 text-sm font-bold text-white shadow-md">
                  EU
                </span>
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  Evergreen<span className="text-blue-700">University</span>
                </span>
              </Link>

              {/* Desktop navigation */}
              <nav
                aria-label="Primary navigation"
                className="hidden md:block"
              >
                <ul className="flex items-center gap-1 text-sm font-medium text-slate-600">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="ml-2">
                    <Link
                      href="/admissions"
                      className="rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200/50 transition hover:shadow-lg hover:shadow-blue-300/50"
                    >
                      Apply Now
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile navigation */}
              <MobileNav />
            </div>
          </header>

          {/* ── Main ───────────────────────────────── */}
          <main className="flex-1">{children}</main>

          {/* ── Footer ─────────────────────────────── */}
          <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-14">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {/* Brand column */}
                <div>
                  <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-sm font-bold text-white">
                      EU
                    </span>
                    <span className="text-lg font-bold text-white">
                      Evergreen University
                    </span>
                  </Link>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    Empowering students through world-class education, research
                    excellence, and global community.
                  </p>
                  {/* Social icons */}
                  <div className="mt-5 flex gap-3">
                    {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                      <span
                        key={s}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-400 transition hover:bg-blue-600 hover:text-white"
                      >
                        {s[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link columns */}
                {footerLinks.map((col) => (
                  <div key={col.heading}>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-100">
                      {col.heading}
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="transition hover:text-blue-400"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
                <p>
                  © {new Date().getFullYear()} Evergreen University. All rights
                  reserved.
                </p>
                <p>123 Campus Drive, Springfield · +1 (555) 010-2026</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
