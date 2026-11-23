"use client";

import { useState } from "react";
import { site } from "@/data/site";

const inputClass =
  "mt-1 w-full rounded border border-[#0F1B2D]/30 bg-white px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1B9AD6]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `Hello ${site.shortName}, I would like a quote.`,
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : "",
      `I need: ${need}`,
    ].filter(Boolean);
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="font-medium">Your name</label>
        <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className="font-medium">Phone number (optional)</label>
        <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
      </div>
      <div>
        <label htmlFor="need" className="font-medium">What do you need?</label>
        <textarea
          id="need"
          required
          rows={5}
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          placeholder="Products, sizes and quantities"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="rounded bg-[#F5C400] px-6 py-3 font-semibold text-[#0F1B2D] hover:bg-[#ffd633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F1B2D]"
      >
        Send on WhatsApp
      </button>
      <p className="text-sm text-[#0F1B2D]/65">
        This opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}