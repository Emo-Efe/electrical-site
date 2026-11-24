import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0F1B2D] text-white">
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-[#E02B2B]" />
        <span className="flex-1 bg-[#F5C400]" />
        <span className="flex-1 bg-[#1B9AD6]" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-2 text-white/75">{site.role} of electrical cables, switches and related items.</p>
          <p className="mt-2 font-semibold text-[#F5C400]">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <address className="mt-3 space-y-2 not-italic text-white/80">
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phoneTel}`} className="underline hover:text-white">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="underline hover:text-white">
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Quick links</h2>
          <ul className="mt-3 space-y-2 text-white/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

            <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="mt-1">
          Website by{" "}
          <a
            href="https://emo-efe.github.io/jude-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Jude Emoefe Aminomor
          </a>
        </p>
      </div>
    </footer>
  );
}
