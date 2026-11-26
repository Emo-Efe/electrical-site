import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About us | ${site.name}`,
  description: `${site.name} is a Nigerian supplier of electrical products and building materials, serving contractors, developers, electricians and individual customers.`,
};

const values = [
  "Integrity",
  "Quality consciousness",
  "Customer commitment",
  "Reliability",
  "Professional service",
  "Continuous improvement",
];

export default function AboutPage() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold md:text-4xl">About {site.shortName}</h1>
            <p className="mt-5 text-lg text-[#0F1B2D]/80">
              {site.name} is a Nigerian supplier of electrical products and
              building-related materials.
            </p>
            <p className="mt-4 max-w-xl text-[#0F1B2D]/75">
              We serve contractors, property developers, electricians,
              facility teams, businesses and individual customers with the
              products they need for residential, commercial and industrial
              projects.
            </p>
            <p className="mt-4 max-w-xl text-[#0F1B2D]/75">
              Our commitment is simple: make it easier for customers to source
              essential materials through quality-conscious product selection,
              responsive service, competitive quotations and dependable supply
              coordination.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="border-l-4 border-[#1B9AD6] pl-4">
                <h2 className="text-xl font-bold">Our vision</h2>
                <p className="mt-2 text-[#0F1B2D]/75">
                  To become a trusted and recognised supply partner for
                  electrical and building materials in Nigeria and the wider
                  West African market.
                </p>
              </div>
              <div className="border-l-4 border-[#F5C400] pl-4">
                <h2 className="text-xl font-bold">Our mission</h2>
                <p className="mt-2 text-[#0F1B2D]/75">
                  To connect customers and project teams with dependable
                  products and responsive supply support that helps projects
                  progress safely, efficiently and confidently.
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Our values</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {values.map((v) => (
                <li key={v} className="rounded-full border border-[#0F1B2D]/25 px-4 py-2 text-sm font-medium">
                  {v}
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
            <p className="mt-4 text-white/80">Serving customers across Nigeria.</p>
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
