import { site } from "@/data/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${site.shortName}, I would like to make an enquiry.`
  );

  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#0E7C3F] px-5 py-3 font-semibold text-white shadow-lg hover:bg-[#0b6633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C3F]"
    >
      WhatsApp us
    </a>
  );
}
