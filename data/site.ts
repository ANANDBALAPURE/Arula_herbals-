export const site = {
  name: "Arula Herbals",
  tagline: "Rooted in nature, backed by purity.",
  description:
    "Arula Herbals crafts 100% organic, shade-dried superfood powders — Moringa, Ashwagandha, Beetroot, Amla, Wheatgrass and Raw Banana — grown and processed with farm-to-bottle transparency.",
  url: "https://arulaherbals.com",
  whatsappNumbers: ["919067777196", "919067777197"],
  whatsappDisplay: "90677 77196 / 90677 77197",
  email: "hello@arulaherbals.com",
  address: "Nashik, Maharashtra, India",
  amazonUrl: "https://www.amazon.in/s?k=arula+herbals",
  flipkartUrl: "https://www.flipkart.com/search?q=arula%20herbals",
  keywords: [
    "Pure Moringa Powder India",
    "Organic Herbal Moringa",
    "Best Natural Moringa Powder",
    "Arula Herbals Moringa",
    "Organic Ashwagandha Powder",
    "Organic Beetroot Powder",
  ],
  socials: {
    instagram: "https://instagram.com/arulaherbals",
    facebook: "https://facebook.com/arulaherbals",
  },
  promotion: {
    discountPercent: 30,
    active: true,
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality & Origin" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(
  productName: string,
  phone: string = site.whatsappNumbers[0],
  variantLabel?: string
) {
  const item = variantLabel ? `${productName} (${variantLabel})` : productName;
  const message = `Hello Arula Herbals! I would like to order Arula ${item}. Please share details regarding pricing, current offers, and delivery.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
