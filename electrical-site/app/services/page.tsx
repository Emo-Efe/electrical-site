import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Supply of electrical cables, switches, breakers, transformers and lighting, with bulk orders and product guidance in Ojo, Lagos.",
};

// PLACEHOLDER WORDING: edit these to match what the client really offers.
const services = [
  {
    title: "Supply of electrical materials",
    text: "Cables, switches and sockets, breakers, distribution boards, transformers and lighting, all from one place.",
    color: "border-[#E02B2B]",
  },
  {
    title: "Bulk and project orders",
    text: "Supplies for builders, contractors and developers. Send us your list and we will quote for the full quantity.",
    color: "border-[#F5C400]",
  },
  {
    title: "Trade supply for electricians",
    text: "A dependable source for electricians who need the right materials in stock, job after job.",
    color: "border-[#1B9AD6]",
  },
  {
    title: "Help choosing the right product",
    text: "Not sure which cable size, breaker or fitting suits your job? Tell us about it and we will guide you.",
    color: "border-[#3B9C5A]",
  },
];

export default function ServicesPage() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold md:text-4xl">Our services</h1>
          <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
            {site.name} is a {site.role.toLowerCase()} of electrical products,
            serving homes, shops, electricians and building projects.
          </p>

          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className={`border-l-4 ${s.color} pl-4`}>
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 max-w-md text-[#0F1B2D]/75">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#EEF1F5] px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold">Need a quote?</h2>
          <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
            Tell us what you need and we will reply with availability and prices.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-[#F5C400] px-6 py-3 font-semibold text-[#0F1B2D] hover:bg-[#ffd633]"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </main>
  );
}