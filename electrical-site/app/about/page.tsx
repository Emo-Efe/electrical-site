import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About us | ${site.name}`,
  description: `${site.name} is a ${site.role.toLowerCase()} of electrical products based at Geda Ojo Alaba International Market, Ojo, Lagos.`,
};

// PLACEHOLDER WORDING: edit the story and values with the client.
// Add facts such as the year founded or certifications only once he confirms them.
const values = [
  { title: "Quality products", text: "We stock electrical materials that electricians and customers can rely on." },
  { title: "Honest advice", text: "We help you choose what fits your job instead of selling you what you don't need." },
  { title: "Reliable supply", text: "We aim to have the right items available when you need them." },
];

export default function AboutPage() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold md:text-4xl">About {site.shortName}</h1>
            <p className="mt-5 text-lg text-[#0F1B2D]/80">
              {site.name} is a {site.role.toLowerCase()} of electrical cables,
              switches and related items, based at Geda Ojo Alaba International
              Market in Ojo, Lagos.
            </p>
            <p className="mt-4 max-w-xl text-[#0F1B2D]/75">
              We supply electricians, contractors, shop owners and homeowners
              with the materials they need for safe, lasting installations.
              Our aim is simple: to be the electrician&apos;s first choice.
            </p>

            <h2 className="mt-12 text-2xl font-bold">What we stand for</h2>
            <ul className="mt-6 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="border-l-4 border-[#F5C400] pl-4">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1 max-w-md text-[#0F1B2D]/75">{v.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded bg-[#0F1B2D] p-6 text-white">
            <h2 className="text-lg font-semibold">Find us</h2>
            <p className="mt-3 text-white/80">{site.address}</p>
            <p className="mt-4">
              <a href={`tel:${site.phoneTel}`} className="underline">
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-5 font-semibold text-[#F5C400]">{site.tagline}</p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded bg-[#F5C400] px-5 py-2 font-semibold text-[#0F1B2D] hover:bg-[#ffd633]"
            >
              Contact us
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}