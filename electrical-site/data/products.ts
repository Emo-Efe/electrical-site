// Product list based on the client's company profile and WhatsApp catalogue.
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
    intro: "Cable for residential, commercial and industrial projects.",
    color: "border-[#E02B2B]",
    products: [
      { name: "Building wires", description: "Wires for general building and installation work." },
      { name: "Single-core and multi-core cables", description: "Ask for available sizes and core counts." },
      { name: "Flexible cables", description: "Flexible cable for appliances and portable equipment." },
      { name: "Control cables", description: "Control cables. Ask for available types." },
      { name: "Armoured and non-armoured cables", description: "Protected and standard cable for different installations." },
      { name: "XLPE and FRZHLS cables", description: "Specialist cable types. Ask for availability." },
      { name: "Bare conductors", description: "Bare conductors. Ask for available sizes." },
    ],
  },
  {
    slug: "power",
    name: "Power distribution",
    intro: "Protection, control and power equipment for your supply.",
    color: "border-[#F5C400]",
    products: [
      { name: "MCBs", description: "Miniature circuit breakers for overload and fault protection." },
      { name: "MCCBs", description: "Moulded case circuit breakers for larger loads." },
      { name: "Changeover switches", description: "Switch between mains and generator supply." },
      { name: "Contactors and fuse bases", description: "Control and protection components." },
      { name: "Distribution boards and panels", description: "Boards and panels for homes, businesses and sites." },
      { name: "Hisense power transformer", description: "Power transformer for electrical distribution. Ask for ratings and availability." },
    ],
  },
  {
    slug: "switches",
    name: "Switches and accessories",
    intro: "Wiring accessories and fittings for every installation.",
    color: "border-[#1B9AD6]",
    products: [
      { name: "Switches and sockets", description: "Wall switches and sockets in a range of styles." },
      { name: "Plugs", description: "Plugs and related wiring accessories." },
      { name: "Conduits and fittings", description: "Conduits and fittings. Ask for available sizes." },
      { name: "Cable-management products", description: "Cable-management products. Ask for what you need." },
    ],
  },
  {
    slug: "lighting",
    name: "Lighting",
    intro: "Lighting for indoor and outdoor use.",
    color: "border-[#3B9C5A]",
    products: [
      { name: "LED lighting", description: "Energy-saving LED lights in several fittings." },
      { name: "Indoor and outdoor fittings", description: "Fittings for homes, shops, offices and compounds." },
      { name: "Decorative lighting", description: "Lighting to finish a space." },
      { name: "Smart lighting", description: "Selected smart-lighting products. Ask for availability." },
    ],
  },
  {
    slug: "solar",
    name: "Power and solar accessories",
    intro: "Supporting materials for power systems.",
    color: "border-[#0F1B2D]",
    products: [
      { name: "Solar and inverter accessories", description: "Accessories for solar and inverter installations." },
      { name: "Power-system components", description: "Selected components and supporting electrical materials." },
    ],
  },
  {
    slug: "building",
    name: "Building and waterproofing",
    intro: "Selected waterproofing products and related building materials.",
    color: "border-[#8B5A2B]",
    products: [
      { name: "Purechem Top Shield", description: "Waterproofing product. Ask for details and availability." },
      { name: "Topgit PVC gum", description: "PVC gum. Ask for details and availability." },
      { name: "Related building materials", description: "Ask us about other building materials you need." },
    ],
  },
];