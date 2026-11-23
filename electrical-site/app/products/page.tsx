import Image from "next/image";
import type { Metadata } from "next";
import { categories } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Products | ${site.name}`,
  description:
    "Electrical cables, switches and sockets, breakers and distribution boards, and lighting. Ask for prices and availability.",
};

function enquiryLink(productName: string) {
  const text = `Hello ${site.shortName}, I would like to ask about: ${productName}`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export default function ProductsPage() {
  return (
    <main className="px-6 py-14 text-[#0F1B2D]">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold md:text-4xl">Our products</h1>
        <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
          Browse what we supply and message us for prices, sizes and
          availability.
        </p>

        <nav className="mt-8 flex flex-wrap gap-3" aria-label="Product categories">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-[#0F1B2D]/25 px-4 py-2 text-sm font-medium hover:bg-[#EEF1F5]"
            >
              {c.name}
            </a>
          ))}
        </nav>

        {categories.map((c) => (
          <section key={c.slug} id={c.slug} className="mt-14 scroll-mt-24">
            <div className={`border-l-4 ${c.color} pl-4`}>
              <h2 className="text-2xl font-bold">{c.name}</h2>
              <p className="mt-1 text-[#0F1B2D]/75">{c.intro}</p>
            </div>

            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.products.map((p) => (
                <li key={p.name} className="flex flex-col rounded border border-[#0F1B2D]/15 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t bg-[#EEF1F5]">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-[#0F1B2D]/50">
                        Photo coming soon
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 flex-1 text-[#0F1B2D]/75">{p.description}</p>
                    <a
                      href={enquiryLink(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded bg-[#0F1B2D] px-4 py-2 text-center font-semibold text-white hover:bg-[#1c2d47]"
                    >
                      Ask about this
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}