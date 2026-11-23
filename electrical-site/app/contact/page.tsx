import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: `Request a quote or ask about electrical products. Visit us at ${site.address}.`,
};

const mapQuery = encodeURIComponent("Geda Ojo Alaba International Market, Ojo, Lagos, Nigeria");

export default function ContactPage() {
  return (
    <main className="px-6 py-14 text-[#0F1B2D]">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold md:text-4xl">Contact us</h1>
        <p className="mt-3 max-w-xl text-[#0F1B2D]/75">
          Tell us what you need and we will reply with availability and prices.
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <address className="mt-4 space-y-4 not-italic">
              <p>
                <span className="block font-medium">Phone and WhatsApp</span>
                <a href={`tel:${site.phoneTel}`} className="underline hover:text-[#1B9AD6]">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block font-medium">Email</span>
                <a href={`mailto:${site.email}`} className="underline hover:text-[#1B9AD6]">
                  {site.email}
                </a>
              </p>
              <p>
                <span className="block font-medium">Visit us</span>
                {site.address}
              </p>
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-semibold underline hover:text-[#1B9AD6]"
            >
              Open in Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Request a quote</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded border border-[#0F1B2D]/15">
          <iframe
            title="Map showing our location at Geda Ojo Alaba International Market"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}