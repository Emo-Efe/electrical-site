import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Cables and wires", image: "/images/categories/cables.jpg", note: "House wiring, armoured, flexible and extension cable.", color: "border-[#8B5A2B]" },
  { name: "Switches and sockets", image: "/images/categories/sockets.jpg", note: "Wall switches, sockets, dimmers and plates.", color: "border-[#1F4FD8]" },
  { name: "Breakers and distribution", image: "/images/categories/breakers.jpg", note: "MCBs, changeover switches and distribution boards.", color: "border-[#F5C400]" },
  { name: "Lighting", image: "/images/categories/lighting.jpg", note: "Bulbs, tubes, floodlights and fittings.", color: "border-[#3B9C5A]" },
];

export default function Home() {
  return (
    <main className="text-[#0F1B2D]">
      <section className="bg-[#0F1B2D] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Electrical supplies you can trust, from cable to switch.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Bensheilla Concept Limited supplies quality electrical products and practical
            advice for homes, shops and building projects.
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
            <span className="flex-1 bg-[#8B5A2B]" />
            <span className="flex-1 bg-[#1F4FD8]" />
            <span className="flex-1 bg-[#3B9C5A]" />
            <span className="flex-1 bg-[#F5C400]" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold md:text-3xl">What we supply</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {categories.map((c) => (
              <li key={c.name} className={`border-l-4 ${c.color} pl-4`}>
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 max-w-md text-[#0F1B2D]/75">{c.note}</p>
                <div className="relative mt-4 aspect-[4/3] max-w-md overflow-hidden rounded bg-[#EEF1F5]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#EEF1F5] px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold">Not sure what you need?</h2>
          <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
            Tell us about your project and we will recommend the right
            products and quantities.
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