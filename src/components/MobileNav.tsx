"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/lib/site-data";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition md:hidden"
        aria-label="Toggle navigation"
      >
        <span
          className={`block h-0.5 w-6 rounded bg-slate-800 transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded bg-slate-800 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 rounded bg-slate-800 transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in menu */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col gap-2 bg-white px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-auto">
          <Link
            href="/admissions"
            onClick={() => setOpen(false)}
            className="block w-full rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:shadow-blue-300/50"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
