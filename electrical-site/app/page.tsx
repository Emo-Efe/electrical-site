import Image from "next/image";
import Link from "next/link";

type Category = { name: string; note: string; color: string; image?: string };

const categories: Category[] = [
  {
    name: "Cables and wires",
    note: "Building wires, single-core and multi-core, flexible, control, armoured and non-armoured cables, and more.",
    color: "border-[#E02B2B]",
    image: "/images/categories/cables.jpg",
  },
  {
    name: "Power distribution",
    note: "MCBs, MCCBs, changeover switches, contactors, distribution boards and protection equipment.",
    color: "border-[#F5C400]",
    image: "/images/categories/breakers.jpg",
  },
  {
    name: "Switches and accessories",
    note: "Switches, sockets, plugs, conduits, fittings and cable-management products.",
    color: "border-[#1B9AD6]",
    image: "/images/categories/switches.jpg",
  },
  {
    name: "Lighting",
    note: "LED lighting, indoor and outdoor fittings, decorative and selected smart lighting.",
    color: "border-[#3B9C5A]",
    image: "/images/categories/lighting.jpg",
  },
  {
    name: "Power and solar accessories",
    note: "Solar and inverter accessories and supporting electrical materials.",
    color: "border-[#0F1B2D]",
    image: "/images/categories/solar.jpg",
  },
  {
    name: "Building and waterproofing",
    note: "Selected waterproofing products and related building materials.",
    color: "border-[#8B5A2B]",
    image: "/images/categories/building.jpg",
  },
];

const reasons = [
  "A broad range of electrical and building-material categories.",
  "Quality-conscious sourcing from recognized manufacturers and suppliers.",
  "Responsive communication and customer-focused service.",
  "Support for individual purchases, bulk orders and project requirements.",
  "Delivery coordination for customers across Nigeria.",
];

export default function Home() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="bg-[#0F1B2D] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Your trusted electrical partner, from foundation to finish.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Bensheilla Concept Limited supplies electrical materials, power
            distribution equipment, lighting and building materials to
            contractors, developers, electricians and individual customers
            across Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded bg-[#F5C400] px-6 py-3 font-semibold text-[#0F1B2D] hover:bg-[#ffd633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a quote
            </Link>
            <Link
              href="/products"
              className="rounded border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse products
            </Link>
          </div>
          <div className="mt-14 flex h-3 max-w-md overflow-hidden rounded-full" aria-hidden="true">
            <span className="flex-1 bg-[#E02B2B]" />
            <span className="flex-1 bg-[#F5C400]" />
            <span className="flex-1 bg-[#1B9AD6]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold md:text-3xl">What we supply</h2>
          <ul className="mt-8 grid gap-10 md:grid-cols-2">
            {categories.map((c) => (
              <li key={c.name} className={`border-l-4 ${c.color} pl-4`}>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 max-w-md text-[#0F1B2D]/75">{c.note}</p>
                {c.image && (
                  <div className="relative mt-4 aspect-[4/3] max-w-md overflow-hidden rounded bg-[#EEF1F5]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#EEF1F5] px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <h2 className="text-2xl font-bold md:text-3xl">Why work with us</h2>
          <ul className="space-y-4 md:col-span-2">
            {reasons.map((r) => (
              <li key={r} className="border-l-4 border-[#F5C400] pl-4 text-[#0F1B2D]/85">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0F1B2D] px-6 py-14 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold">Not sure what you need?</h2>
          <p className="mt-3 max-w-xl text-white/80">
            Send us your material list or tell us about your project, and we
            will respond with product information, availability and pricing.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-[#F5C400] px-6 py-3 font-semibold text-[#0F1B2D] hover:bg-[#ffd633]"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  );
}
