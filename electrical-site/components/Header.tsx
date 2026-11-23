"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#0F1B2D]/10 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold" onClick={() => setOpen(false)}>
          <span className="text-[#1B9AD6]">{site.shortName}</span>{" "}
          <span className="text-[#0F1B2D]">Concept Limited</span>
        </Link>

        <nav className="hidden gap-6 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium hover:text-[#1B9AD6]">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded border border-[#0F1B2D]/30 px-4 py-2 font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-[#0F1B2D]/10 px-6 pb-4 md:hidden" aria-label="Mobile">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
