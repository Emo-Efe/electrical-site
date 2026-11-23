// PLACEHOLDER CONTENT: replace with the client's real products.
// To add a photo, put the file in public/images/products/ and set
// image: "/images/products/your-file.jpg" on that product.

export type Product = {
  name: string;
  description: string;
  image?: string;
};

export type Category = {
  slug: string;
  name: string;
  intro: string;
  color: string; // Tailwind border color class
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "cables",
    name: "Cables and wires",
    intro: "Cable for homes, shops and building projects.",
    color: "border-[#E02B2B]",
    products: [
      { name: "House wiring cable", description: "Single and multi-core cable for general wiring. Ask for available sizes." },
      { name: "Armoured cable", description: "Protected cable for outdoor and heavy-duty installations." },
      { name: "Flexible cable", description: "Flexible cable for appliances and portable equipment." },
      { name: "Extension cable", description: "Ready-to-use extension leads and cable by the length." },
    ],
  },
  {
    slug: "switches",
    name: "Switches and sockets",
    intro: "Everyday wall fittings in a range of styles.",
    color: "border-[#1B9AD6]",
    products: [
      { name: "Wall switches", description: "One-gang to multi-gang switches." },
      { name: "Sockets", description: "Single and double sockets, with or without switch." },
      { name: "Dimmers", description: "Dimmer switches for lighting control." },
      { name: "Cover plates", description: "Plates and accessories to finish the installation." },
    ],
  },
  {
    slug: "power",
    name: "Power and distribution",
    intro: "Protection, control and power equipment for your supply.",
    color: "border-[#F5C400]",
    products: [
      { name: "Hisense power transformer", description: "Power transformer for electrical distribution. Ask for ratings and availability." },
      { name: "Circuit breakers (MCBs)", description: "Protect circuits against overload and faults." },
      { name: "Changeover switches", description: "Switch between mains and generator supply." },
      { name: "Distribution boards", description: "Boards for homes, shops and small buildings." },
    ],
  },
  {
    slug: "lighting",
    name: "Lighting",
    intro: "Bulbs and fittings for indoors and outdoors.",
    color: "border-[#3B9C5A]",
    products: [
      { name: "LED bulbs", description: "Energy-saving bulbs in several fittings." },
      { name: "Tube lights", description: "Tube lights and fittings for offices and shops." },
      { name: "Floodlights", description: "Outdoor lighting for compounds and security." },
    ],
  },
];
