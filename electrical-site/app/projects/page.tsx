import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects and customers | ${site.name}`,
  description: `Who ${site.name} supplies: electricians, contractors, builders and shop owners across Lagos.`,
};

// PLACEHOLDER WORDING: edit to match the client's real customers.
const customers = [
  { name: "Electricians", note: "Regular materials for wiring and installation jobs." },
  { name: "Contractors and builders", note: "Supply for new buildings and renovations." },
  { name: "Shop and business owners", note: "Fittings, lighting and distribution for premises." },
  { name: "Homeowners", note: "Quality products for home wiring and repairs." },
];

export default function ProjectsPage() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold md:text-4xl">Projects and customers</h1>
          <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
            We supply the people who build and maintain electrical systems
            across Lagos.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Who we supply</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {customers.map((c) => (
              <li key={c.name} className="border-l-4 border-[#1B9AD6] pl-4">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 max-w-md text-[#0F1B2D]/75">{c.note}</p>
              </li>
            ))}
          </ul>

          {projects.length > 0 && (
            <>
              <h2 className="mt-14 text-2xl font-bold">Recent projects</h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                  <li key={p.title} className="rounded border border-[#0F1B2D]/15">
                    {p.image && (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-t">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-sm text-[#0F1B2D]/60">{p.location}</p>
                      <p className="mt-2 text-[#0F1B2D]/75">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="bg-[#EEF1F5] px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold">Have a project in mind?</h2>
          <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
            Send us your materials list and we will quote for it.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-[#0F1B2D] px-6 py-3 font-semibold text-white hover:bg-[#1c2d47]"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  );
}