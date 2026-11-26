import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Project and bulk supply, product sourcing from material lists, quotations and delivery across Lagos and Nigeria.",
};

const services = [
  {
    title: "Project and bulk supply",
    text: "Supply support for building, commercial and industrial requirements, from a few items to full project quantities.",
    color: "border-[#E02B2B]",
  },
  {
    title: "Product sourcing",
    text: "Send a bill of quantities, material schedule or a specific enquiry, and we will source what you need.",
    color: "border-[#F5C400]",
  },
  {
    title: "Quotations and availability",
    text: "Clear quotations and guidance on what is available, so you can plan your purchase with confidence.",
    color: "border-[#1B9AD6]",
  },
  {
    title: "Order handling and delivery",
    text: "We coordinate orders and delivery in Lagos and other locations across Nigeria.",
    color: "border-[#3B9C5A]",
  },
];

const steps = [
  { title: "Understand", text: "We receive your material list, specifications, quantities and delivery location." },
  { title: "Recommend and quote", text: "We review your request and respond with product information, availability and pricing." },
  { title: "Coordinate", text: "We confirm order details and agree on fulfilment and delivery arrangements." },
  { title: "Support", text: "We stay available for communication throughout the supply process." },
];

export default function ServicesPage() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold md:text-4xl">Our services</h1>
          <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
            {site.name} serves contractors, property developers, electricians,
            facility teams, businesses and individual customers.
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
          <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="text-3xl font-bold text-[#1B9AD6]">{i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[#0F1B2D]/75">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm text-[#0F1B2D]/65">
            Product specifications, certifications, approvals and brand
            availability are confirmed against the individual item supplied.
          </p>
        </div>
      </section>

      <section className="bg-[#0F1B2D] px-6 py-14 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold">Need a quote?</h2>
          <p className="mt-3 max-w-xl text-white/80">
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