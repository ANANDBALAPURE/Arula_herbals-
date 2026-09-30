export type PriceVariant = {
  quantity: string;
  mrp: number;
  discountPercent: number;
  price: number;
};

export type NutrientRow = { label: string; value: string };
export type TimelineEntry = { period: string; effect: string };
export type Recipe = { name: string; steps: string };

export type Product = {
  slug: string;
  shortName: string;
  title: string;
  subtitle: string;
  overview: string;
  accent: "sage" | "clay" | "forest";
  advantages: { title: string; body: string }[];
  nutrients: NutrientRow[];
  timeline: TimelineEntry[];
  dailyIntake: string;
  recipes: Recipe[];
  keywordFocus: string;
  /** Optional — only populated once real product photography is supplied. */
  heroImage?: string;
  compareImage?: string;
  qualityImage?: string;
  galleryImages?: {
    src: string;
    alt: string;
    label: string;
  }[];
  /** Placeholder until the client confirms real pricing. */
  price?: string;
  priceUnit?: string;
  /** Quantity-wise pricing (MRP, discount %, final selling price) for the dropdown selector. */
  variants?: PriceVariant[];
};

export const products: Product[] = [
  {
    slug: "moringa-powder",
    shortName: "Moringa",
    title: "100% Pure Shade-Dried Organic Moringa Powder",
    subtitle: "The miracle green superfood for daily energy, immunity & gut vitality",
    overview:
      "Harvested from pristine, organic Moringa Oleifera trees, our moringa leaves are gently shade-dried at low temperatures. This traditional method preserves delicate green chlorophyll, plant protein, and over 46 antioxidants that industrial heat processing usually destroys.",
    accent: "sage",
    advantages: [
      {
        title: "Sustained natural energy",
        body: "Clean, caffeine-free stamina by replenishing essential iron and B-vitamins.",
      },
      {
        title: "Immune system defense",
        body: "Loaded with natural Vitamin C and flavonoids to fight seasonal fatigue and daily oxidative stress.",
      },
      {
        title: "Gut balance & detoxification",
        body: "High dietary fibre content promotes healthy digestion and supports natural liver detox.",
      },
      {
        title: "Radiant skin & hair health",
        body: "Abundant in Vitamin A, Vitamin E and essential amino acids that nourish skin cells from within.",
      },
    ],
    nutrients: [
      { label: "Energy", value: "320 kcal" },
      { label: "Protein", value: "27.1 g" },
      { label: "Dietary Fibre", value: "19.2 g" },
      { label: "Iron", value: "28.2 mg (200%+ DV)" },
      { label: "Calcium", value: "2000 mg" },
      { label: "Vitamin C", value: "17.3 mg" },
      { label: "Vitamin A", value: "16.3 mg" },
    ],
    timeline: [
      { period: "Week 1 (Days 1–7)", effect: "Improved digestion, smoother bowel movements, subtle reduction in morning lethargy." },
      { period: "Week 2–3 (Days 8–21)", effect: "Noticeable boost in mid-day stamina, fewer sugar cravings, better nutrient absorption." },
      { period: "Week 4 onwards", effect: "Enhanced skin clarity, stronger immune resilience, sustained natural vitality." },
    ],
    dailyIntake: "1 teaspoon (approx. 3g–5g) daily.",
    recipes: [
      {
        name: "Morning Power Tonic",
        steps:
          "Stir 1 tsp Moringa Powder into a glass of warm water with half a squeezed lemon and 1 tsp raw honey. Drink first thing on an empty stomach.",
      },
      {
        name: "Green Immunity Smoothie",
        steps:
          "Blend 1 tsp Moringa Powder, 1 ripe banana, 1/2 cup spinach and 1 cup chilled coconut or almond milk until smooth.",
      },
      {
        name: "Herbal Dal & Soup Booster",
        steps:
          "Whisk 1 tsp into cooked dal, sambar or vegetable soup just before serving — avoid boiling directly to preserve raw nutrients.",
      },
    ],
    keywordFocus: "Pure Moringa Powder India, Organic Herbal Moringa, Best Natural Moringa Powder, Arula Herbals Moringa",
    heroImage: "/images/moringa/hero.jpg",
    compareImage: "/images/moringa/compare.jpg",
    qualityImage: "/images/moringa/quality.jpg",
    galleryImages: [
      {
        src: "/images/moringa/gallery/01-product-hero.png",
        alt: "Arula Herbals Moringa Powder pouch on a white background",
        label: "Product hero",
      },
      {
        src: "/images/moringa/gallery/02-why-arula.png",
        alt: "Arula Herbals moringa powder compared with regular moringa powder",
        label: "Why Arula",
      },
      {
        src: "/images/moringa/gallery/03-farm-to-pouch.png",
        alt: "Farm to pouch moringa processing sequence",
        label: "Farm to pouch",
      },
      {
        src: "/images/moringa/gallery/04-why-moringa.png",
        alt: "Why choose Arula Herbals moringa quality story",
        label: "Why moringa",
      },
      {
        src: "/images/moringa/gallery/05-how-to-use.png",
        alt: "How to use Arula Herbals Moringa Powder",
        label: "How to use",
      },
      {
        src: "/images/moringa/gallery/06-quality-trust.png",
        alt: "Arula Herbals Moringa Powder quality and trust information",
        label: "Quality",
      },
      {
        src: "/images/moringa/gallery/07-back-panel.png",
        alt: "Arula Herbals Moringa Powder back panel transparency information",
        label: "Back panel",
      },
    ],    variants: [
      { quantity: "100g", mrp: 260, discountPercent: 20, price: 208 },
      { quantity: "200g", mrp: 520, discountPercent: 22, price: 405 },
      { quantity: "500g", mrp: 1300, discountPercent: 26, price: 962 },
    ],
  },
  {
    slug: "beetroot-powder",
    shortName: "Beetroot",
    title: "Pure Organic Beetroot Powder",
    subtitle: "Daily circulation, athletic endurance & natural skin glow",
    overview:
      "Made from vibrant, farm-fresh organic beetroots, our powder locks in dietary nitrates, betalains and potent antioxidants. It carries a naturally sweet, earthy flavour with no added sugars, synthetic colours or preservatives.",
    accent: "clay",
    advantages: [
      {
        title: "Enhanced blood flow & nitric oxide",
        body: "Natural dietary nitrates convert to nitric oxide in the body, supporting healthy blood pressure and vascular wellness.",
      },
      {
        title: "Pre-workout stamina",
        body: "Boosts oxygen delivery to muscles, reducing workout fatigue and enhancing physical endurance.",
      },
      {
        title: "Cardiovascular & liver detox",
        body: "Contains betaine, which supports healthy liver enzyme activity and cardiovascular function.",
      },
      {
        title: "Natural skin radiance",
        body: "Rich in Vitamin C and antioxidants that help clear skin impurities from the inside out.",
      },
    ],
    nutrients: [
      { label: "Energy", value: "340 kcal" },
      { label: "Carbohydrates", value: "70.0 g" },
      { label: "Dietary Fibre", value: "12.5 g" },
      { label: "Potassium", value: "1480 mg" },
      { label: "Folate (B9)", value: "109 mcg" },
      { label: "Iron", value: "2.5 mg" },
      { label: "Betalains", value: "High concentration" },
    ],
    timeline: [
      { period: "Immediate (30–60 min)", effect: "Mild boost in stamina and athletic performance before workouts." },
      { period: "Week 2", effect: "Better blood circulation, reduced muscle soreness post-exercise, improved daily energy." },
      { period: "Week 4 onwards", effect: "Consistent cardiovascular support, healthier-looking skin tone, better physical endurance." },
    ],
    dailyIntake: "1 to 2 teaspoons (approx. 5g) daily.",
    recipes: [
      {
        name: "Pre-Workout Nitric Oxide Shot",
        steps: "Mix 1 tsp Beetroot Powder into a glass of cool water or pomegranate juice 30 minutes before your workout or morning walk.",
      },
      {
        name: "Ruby Pink Smoothie Bowl",
        steps: "Blend 1 tsp Beetroot Powder with 1/2 cup frozen berries, 1/2 banana and 1/2 cup curd/yogurt. Top with chia seeds and sliced almonds.",
      },
      {
        name: "Nutritious Pink Rotis",
        steps: "Knead 1–2 tbsp Beetroot Powder directly into your whole wheat flour dough for vibrant, healthy rotis or tortillas.",
      },
    ],
    keywordFocus: "Organic Beetroot Powder India, Natural Beetroot Powder, Arula Herbals Beetroot",
    heroImage: "/images/beetroot/b7.png",
    galleryImages: [
      {
        src: "/images/beetroot/b7.png",
        alt: "Arula Herbals Beetroot Powder pouch with beetroot and powder",
        label: "Product hero",
      },
      {
        src: "/images/beetroot/b3.png",
        alt: "Creative ways to use Arula Herbals Beetroot Powder",
        label: "How to use",
      },
      {
        src: "/images/beetroot/b2.png",
        alt: "Arula Herbals Beetroot Powder benefits and product story",
        label: "Why beetroot",
      },
      {
        src: "/images/beetroot/b6.png",
        alt: "Arula Herbals Beetroot Powder farm to pouch process",
        label: "Farm to pouch",
      },
      {
        src: "/images/beetroot/b8.png",
        alt: "Arula Herbals Beetroot Powder quality and testing information",
        label: "Quality",
      },
      {
        src: "/images/beetroot/b1.png",
        alt: "Arula Herbals Beetroot Powder transparency and back panel information",
        label: "Transparency",
      },
      {
        src: "/images/beetroot/b4.png",
        alt: "Arula Herbals Beetroot Powder comparison with regular beetroot powder",
        label: "Why Arula",
      },
      {
        src: "/images/beetroot/b5.png",
        alt: "Arula Herbals Beetroot Powder front pouch",
        label: "Pouch detail",
      },
    ],
    variants: [{ quantity: "100g", mrp: 260, discountPercent: 20, price: 208 }],
  },
  {
    slug: "ashwagandha-powder",
    shortName: "Ashwagandha",
    title: "Premium Organic Ashwagandha Root Powder",
    subtitle: "Ancient adaptogen for stress relief, deep sleep & muscle vitality",
    overview:
      "Sourced from top-grade organic Withania somnifera roots, our shade-dried Ashwagandha provides a rich concentration of natural withanolides. Rooted in traditional Ayurvedic medicine, it acts as a daily anchor to help your mind and body adapt to physical and emotional stress.",
    accent: "forest",
    advantages: [
      {
        title: "Cortisol & stress balance",
        body: "Calms the central nervous system, helping lower stress hormones and daily anxiety.",
      },
      {
        title: "Restorative night sleep",
        body: "Promotes a calm mind and natural sleep cycles without daytime grogginess.",
      },
      {
        title: "Physical strength & recovery",
        body: "Supports muscle strength, endurance and faster post-exercise recovery.",
      },
      {
        title: "Mental focus & clarity",
        body: "Enhances cognitive function, memory and sustained concentration through work hours.",
      },
    ],
    nutrients: [
      { label: "Energy", value: "277 kcal" },
      { label: "Carbohydrates", value: "47.0 g" },
      { label: "Dietary Fibre", value: "32.3 g" },
      { label: "Protein", value: "3.7 g" },
      { label: "Iron", value: "3.3 mg" },
      { label: "Calcium", value: "23 mg" },
      { label: "Active Withanolides", value: "Natural organic spectrum" },
    ],
    timeline: [
      { period: "Week 1", effect: "A noticeable sense of calm during stressful situations and easier muscle relaxation in the evenings." },
      { period: "Week 2–3", effect: "Deeper, more uninterrupted night sleep and lower mental fatigue during peak workday hours." },
      { period: "Week 4 onwards", effect: "Balanced mood levels, higher physical stamina and overall metabolic harmony." },
    ],
    dailyIntake: "1/2 to 1 teaspoon (approx. 3g) daily, preferably in the evening or before bed.",
    recipes: [
      {
        name: "Golden Night Moon Milk",
        steps:
          "Warm 1 cup milk (or almond milk), whisk in 1/2 tsp Ashwagandha Powder, a pinch of turmeric, a dash of cinnamon and 1 tsp honey. Sip 30 minutes before sleep.",
      },
      {
        name: "Adaptogenic Energy Bites",
        steps:
          "Mix 2 tbsp Ashwagandha Powder with 1 cup rolled oats, 1/2 cup nut butter, 2 tbsp honey and 1 tbsp chia seeds. Roll into bite-sized balls and refrigerate.",
      },
    ],
    keywordFocus: "Organic Ashwagandha Powder India, Ayurvedic Ashwagandha, Arula Herbals Ashwagandha",
    heroImage: "/images/ashwagandha/A1.png",
    galleryImages: [
      {
        src: "/images/ashwagandha/A1.png",
        alt: "How to use Arula Herbals Ashwagandha Powder",
        label: "How to use",
      },
      {
        src: "/images/ashwagandha/A3.png",
        alt: "Arula Herbals Ashwagandha Powder benefits and product story",
        label: "Why ashwagandha",
      },
      {
        src: "/images/ashwagandha/A5.png",
        alt: "Arula Herbals Ashwagandha Powder farm to pouch process",
        label: "Farm to pouch",
      },
      {
        src: "/images/ashwagandha/A4.png",
        alt: "Arula Herbals Ashwagandha Powder quality and trust information",
        label: "Quality",
      },
      {
        src: "/images/ashwagandha/A6.png",
        alt: "Arula Herbals Ashwagandha Powder transparency and back panel information",
        label: "Transparency",
      },
      {
        src: "/images/ashwagandha/A2.png",
        alt: "Arula Herbals Ashwagandha Powder comparison with regular Ashwagandha powder",
        label: "Why Arula",
      },
    ],
    variants: [{ quantity: "100g", mrp: 260, discountPercent: 20, price: 208 }],
  },
  {
    slug: "amla-powder",
    shortName: "Amla",
    title: "Pure Organic Amla (Indian Gooseberry) Powder",
    subtitle: "Natural Vitamin C powerhouse for immunity, hair strength & digestion",
    overview:
      "Crafted from organic Indian gooseberries, our Amla powder is a concentrated source of natural Vitamin C and bioflavonoids. Unlike synthetic Vitamin C supplements, this whole-fruit powder delivers full bio-availability for maximum cellular absorption.",
    accent: "clay",
    advantages: [
      {
        title: "High-potency immunity",
        body: "One single teaspoon fulfils your daily requirement for natural Vitamin C.",
      },
      {
        title: "Hair & scalp health",
        body: "Promotes collagen production, helping reduce hair fall, strengthen roots and maintain natural shine.",
      },
      {
        title: "Digestive cleansing",
        body: "Supports healthy stomach acid levels, reduces hyperacidity and aids smooth digestion.",
      },
      {
        title: "Anti-aging & collagen support",
        body: "Combats free radicals to support firm skin texture and youthful cellular health.",
      },
    ],
    nutrients: [
      { label: "Energy", value: "288 kcal" },
      { label: "Vitamin C", value: "600–800 mg (10x oranges)" },
      { label: "Dietary Fibre", value: "26.5 g" },
      { label: "Calcium", value: "50 mg" },
      { label: "Iron", value: "1.2 mg" },
      { label: "Polyphenols", value: "Rich concentration" },
    ],
    timeline: [
      { period: "Week 1", effect: "Reduced acidity and lighter, better-regulated digestion after heavy meals." },
      { period: "Week 2–3", effect: "Stronger immune resilience with fewer seasonal sniffles and increased daily alertness." },
      { period: "Week 4 onwards", effect: "Visible reduction in hair shedding, healthier scalp condition and a radiant complexion." },
    ],
    dailyIntake: "1 teaspoon (approx. 3g–5g) daily.",
    recipes: [
      {
        name: "Amla Immunity Elixir",
        steps: "Mix 1 tsp Amla Powder into warm water with 1 tsp honey and a small pinch of black pepper to enhance absorption.",
      },
      {
        name: "Amla-Cumin Digestive Drink",
        steps: "Mix 1/2 tsp Amla Powder and 1/2 tsp roasted cumin (jeera) powder into a glass of fresh buttermilk (chaas) after lunch.",
      },
    ],
    keywordFocus: "Organic Amla Powder India, Indian Gooseberry Powder, Arula Herbals Amla",
  },
  {
    slug: "wheatgrass-powder",
    shortName: "Wheatgrass",
    title: "100% Organic Raw Wheatgrass Powder",
    subtitle: "The green blood detoxifier for alkalizing & metabolism support",
    overview:
      "Grown organically and harvested at peak young leaf stage, our Wheatgrass Powder is packed with raw chlorophyll, living enzymes and essential trace minerals — a powerful internal cleanser for people living in high-stress urban environments.",
    accent: "sage",
    advantages: [
      {
        title: "Alkalizes the body",
        body: "Helps balance internal pH levels and neutralizes excess acidity caused by processed foods.",
      },
      {
        title: "Hemoglobin & blood health",
        body: "Chlorophyll's molecular structure closely resembles hemoglobin, supporting healthy red blood cell production.",
      },
      {
        title: "Deep detoxification",
        body: "Assists the liver and kidneys in flushing out heavy metals and environmental toxins.",
      },
      {
        title: "Metabolic acceleration",
        body: "Active enzymes assist the breakdown of foods, boosting a slow metabolism.",
      },
    ],
    nutrients: [
      { label: "Energy", value: "310 kcal" },
      { label: "Chlorophyll", value: "550 mg" },
      { label: "Protein", value: "21.5 g" },
      { label: "Dietary Fibre", value: "28.0 g" },
      { label: "Vitamin K", value: "880 mcg" },
      { label: "Iron", value: "32.0 mg" },
      { label: "Zinc", value: "4.2 mg" },
    ],
    timeline: [
      { period: "Week 1", effect: "Mild internal detox; reduced bloat and a lighter feeling throughout the day." },
      { period: "Week 2–3", effect: "Reduced body odour and bad breath from natural chlorophyll detox, plus consistent morning energy." },
      { period: "Week 4 onwards", effect: "Balanced digestion, clearer skin and steady blood purity markers." },
    ],
    dailyIntake: "1 teaspoon (approx. 3g) in the morning.",
    recipes: [
      {
        name: "Morning Alkalizing Green Shot",
        steps: "Mix 1 tsp Wheatgrass Powder into 150ml of plain water or fresh coconut water. Stir thoroughly and drink immediately on an empty stomach.",
      },
      {
        name: "Detox Green Juice",
        steps: "Blend 1 tsp Wheatgrass Powder, 1 cucumber, a small piece of ginger and half a green apple. Strain and drink chilled.",
      },
    ],
    keywordFocus: "Organic Wheatgrass Powder India, Raw Wheatgrass Powder, Arula Herbals Wheatgrass",
  },
  {
    slug: "raw-banana-powder",
    shortName: "Raw Banana",
    title: "Raw Organic Green Banana Powder",
    subtitle: "Gentle gut nutrition, prebiotic fibre & natural energy booster",
    overview:
      "Made from raw green bananas harvested before their starches turn into sugars, our raw banana powder is a natural source of resistant starch and prebiotics — gentle, non-acidic and safe for everyone from growing infants to elderly family members.",
    accent: "forest",
    advantages: [
      {
        title: "Feeds good gut bacteria",
        body: "High in resistant starch that fuels beneficial gut microbes, strengthening gut barrier health.",
      },
      {
        title: "Zero sugar spikes",
        body: "Low glycemic index nourishment that provides steady fuel without raising blood sugar levels.",
      },
      {
        title: "Eases acid reflux & bloating",
        body: "Naturally coats the stomach lining, soothing gastritis, acid reflux and loose stools.",
      },
      {
        title: "Versatile family nutrition",
        body: "Neutral tasting and easily digestible — perfect for weaning porridge, family baking or daily shakes.",
      },
    ],
    nutrients: [
      { label: "Energy", value: "350 kcal" },
      { label: "Resistant Starch", value: "45.0 g" },
      { label: "Dietary Fibre", value: "14.5 g" },
      { label: "Potassium", value: "950 mg" },
      { label: "Magnesium", value: "105 mg" },
      { label: "Vitamin B6", value: "0.5 mg" },
    ],
    timeline: [
      { period: "Week 1", effect: "Immediate soothing of acid reflux or indigestion; smoother, regular bowel routines." },
      { period: "Week 2–3", effect: "Better gut comfort, decreased sugar cravings and improved nutrient absorption from daily meals." },
      { period: "Week 4 onwards", effect: "Long-term gut microbiome diversity and overall digestive stability." },
    ],
    dailyIntake: "1 to 2 tablespoons daily.",
    recipes: [
      {
        name: "Wholesome Baby & Family Porridge",
        steps:
          "Mix 2 tbsp Raw Banana Powder into 1 cup of milk or water. Cook on low heat for 3–5 minutes, stirring continuously until smooth. Add jaggery, cardamom or nuts as desired.",
      },
      {
        name: "Gut-Healing Prebiotic Smoothie",
        steps: "Add 1 tbsp Raw Banana Powder to your morning oats, banana smoothie or buttermilk shake for an instant prebiotic boost.",
      },
    ],
    keywordFocus: "Raw Banana Powder India, Organic Green Banana Flour, Arula Herbals Banana Powder",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
