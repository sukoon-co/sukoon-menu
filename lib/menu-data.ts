export interface Drink {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: number;
  image: string;
  tags: ("hot" | "cold" | "new")[];
  sizes?: { name: string; price: number }[];
}

export interface Category {
  id: string;
  slug: string;
  image: string;
  drinks: Drink[];
}

export const categories: Category[] = [
  {
    id: "coffee",
    slug: "coffee",
    image: "/images/categories/coffee.jpg",
    drinks: [
      {
        id: "espresso",
        name: { en: "Espresso", ar: "إسبريسو" },
        description: {
          en: "Rich and bold single shot of pure coffee essence",
          ar: "جرعة غنية وقوية من خلاصة القهوة النقية",
        },
        price: 12,
        image: "/images/drinks/espresso.jpg",
        tags: ["hot"],
      },
      {
        id: "cappuccino",
        name: { en: "Cappuccino", ar: "كابتشينو" },
        description: {
          en: "Velvety steamed milk with a perfect espresso base",
          ar: "حليب مخملي مبخر مع قاعدة إسبريسو مثالية",
        },
        price: 18,
        image: "/images/drinks/cappuccino.jpg",
        tags: ["hot"],
      },
      {
        id: "latte",
        name: { en: "Caffè Latte", ar: "كافيه لاتيه" },
        description: {
          en: "Smooth espresso with creamy steamed milk",
          ar: "إسبريسو ناعم مع حليب كريمي مبخر",
        },
        price: 20,
        image: "/images/drinks/latte.jpg",
        tags: ["hot"],
      },
      {
        id: "iced-americano",
        name: { en: "Iced Americano", ar: "أمريكانو مثلج" },
        description: {
          en: "Chilled espresso with cold water over ice",
          ar: "إسبريسو مبرد مع ماء بارد على الثلج",
        },
        price: 16,
        image: "/images/drinks/iced-americano.jpg",
        tags: ["cold"],
      },
      {
        id: "cold-brew",
        name: { en: "Cold Brew", ar: "كولد برو" },
        description: {
          en: "Slow-steeped for 24 hours, smooth and refreshing",
          ar: "منقوع ببطء لمدة 24 ساعة، ناعم ومنعش",
        },
        price: 22,
        image: "/images/drinks/cold-brew.jpg",
        tags: ["cold", "new"],
      },
      {
        id: "mocha",
        name: { en: "Mocha", ar: "موكا" },
        description: {
          en: "Espresso with rich chocolate and steamed milk",
          ar: "إسبريسو مع شوكولاتة غنية وحليب مبخر",
        },
        price: 24,
        image: "/images/drinks/mocha.jpg",
        tags: ["hot"],
      },
    ],
  },
  {
    id: "tea",
    slug: "tea",
    image: "/images/categories/tea.jpg",
    drinks: [
      {
        id: "green-tea",
        name: { en: "Premium Green Tea", ar: "شاي أخضر فاخر" },
        description: {
          en: "Delicate and refreshing traditional green tea",
          ar: "شاي أخضر تقليدي رقيق ومنعش",
        },
        price: 14,
        image: "/images/drinks/green-tea.jpg",
        tags: ["hot"],
      },
      {
        id: "chai-latte",
        name: { en: "Chai Latte", ar: "تشاي لاتيه" },
        description: {
          en: "Spiced black tea with creamy steamed milk",
          ar: "شاي أسود متبل مع حليب كريمي مبخر",
        },
        price: 18,
        image: "/images/drinks/chai-latte.jpg",
        tags: ["hot"],
      },
      {
        id: "moroccan-mint",
        name: { en: "Moroccan Mint", ar: "شاي مغربي بالنعناع" },
        description: {
          en: "Traditional mint tea with a touch of sweetness",
          ar: "شاي نعناع تقليدي مع لمسة من الحلاوة",
        },
        price: 15,
        image: "/images/drinks/moroccan-mint.jpg",
        tags: ["hot"],
      },
      {
        id: "iced-matcha",
        name: { en: "Iced Matcha Latte", ar: "ماتشا لاتيه مثلج" },
        description: {
          en: "Premium Japanese matcha with cold milk",
          ar: "ماتشا يابانية فاخرة مع حليب بارد",
        },
        price: 24,
        image: "/images/drinks/iced-matcha.jpg",
        tags: ["cold", "new"],
      },
    ],
  },
  {
    id: "fresh-juice",
    slug: "fresh-juice",
    image: "/images/categories/fresh-juice.jpg",
    drinks: [
      {
        id: "orange-juice",
        name: { en: "Fresh Orange Juice", ar: "عصير برتقال طازج" },
        description: {
          en: "Freshly squeezed oranges, pure and natural",
          ar: "برتقال معصور طازجاً، نقي وطبيعي",
        },
        price: 16,
        image: "/images/drinks/orange-juice.jpg",
        tags: ["cold"],
      },
      {
        id: "watermelon-juice",
        name: { en: "Watermelon Juice", ar: "عصير بطيخ" },
        description: {
          en: "Sweet and refreshing summer favorite",
          ar: "حلو ومنعش، المفضل في الصيف",
        },
        price: 18,
        image: "/images/drinks/watermelon-juice.jpg",
        tags: ["cold"],
      },
      {
        id: "carrot-ginger",
        name: { en: "Carrot Ginger Boost", ar: "جزر وزنجبيل منعش" },
        description: {
          en: "Energizing blend of carrot and fresh ginger",
          ar: "مزيج منشط من الجزر والزنجبيل الطازج",
        },
        price: 20,
        image: "/images/drinks/carrot-ginger.jpg",
        tags: ["cold", "new"],
      },
      {
        id: "green-detox",
        name: { en: "Green Detox", ar: "ديتوكس أخضر" },
        description: {
          en: "Cucumber, apple, celery and spinach blend",
          ar: "مزيج من الخيار والتفاح والكرفس والسبانخ",
        },
        price: 22,
        image: "/images/drinks/green-detox.jpg",
        tags: ["cold"],
      },
    ],
  },
  {
    id: "smoothies",
    slug: "smoothies",
    image: "/images/categories/smoothies.jpg",
    drinks: [
      {
        id: "berry-blast",
        name: { en: "Berry Blast", ar: "انفجار التوت" },
        description: {
          en: "Mixed berries with yogurt and honey",
          ar: "توت مشكل مع زبادي وعسل",
        },
        price: 24,
        image: "/images/drinks/berry-blast.jpg",
        tags: ["cold"],
      },
      {
        id: "tropical-paradise",
        name: { en: "Tropical Paradise", ar: "جنة استوائية" },
        description: {
          en: "Mango, pineapple and coconut cream",
          ar: "مانجو وأناناس وكريمة جوز الهند",
        },
        price: 26,
        image: "/images/drinks/tropical-paradise.jpg",
        tags: ["cold", "new"],
      },
      {
        id: "banana-peanut",
        name: { en: "Banana Peanut Butter", ar: "موز وزبدة الفول السوداني" },
        description: {
          en: "Creamy banana with rich peanut butter",
          ar: "موز كريمي مع زبدة الفول السوداني الغنية",
        },
        price: 24,
        image: "/images/drinks/banana-peanut.jpg",
        tags: ["cold"],
      },
      {
        id: "acai-bowl",
        name: { en: "Açaí Power Bowl", ar: "وعاء آساي القوي" },
        description: {
          en: "Thick açaí smoothie topped with granola and fruits",
          ar: "سموذي آساي سميك مغطى بالجرانولا والفواكه",
        },
        price: 32,
        image: "/images/drinks/acai-bowl.jpg",
        tags: ["cold", "new"],
      },
    ],
  },
  {
    id: "soft-drinks",
    slug: "soft-drinks",
    image: "/images/categories/soft-drinks.jpg",
    drinks: [
      {
        id: "sparkling-water",
        name: { en: "Sparkling Water", ar: "مياه فوارة" },
        description: {
          en: "Refreshing carbonated mineral water",
          ar: "مياه معدنية غازية منعشة",
        },
        price: 10,
        image: "/images/drinks/sparkling-water.jpg",
        tags: ["cold"],
      },
      {
        id: "lemonade",
        name: { en: "Fresh Lemonade", ar: "ليموناضة طازجة" },
        description: {
          en: "House-made lemonade with fresh mint",
          ar: "ليموناضة منزلية مع نعناع طازج",
        },
        price: 14,
        image: "/images/drinks/lemonade.jpg",
        tags: ["cold"],
      },
      {
        id: "iced-hibiscus",
        name: { en: "Iced Hibiscus", ar: "كركديه مثلج" },
        description: {
          en: "Traditional hibiscus tea served cold",
          ar: "شاي كركديه تقليدي يقدم بارداً",
        },
        price: 14,
        image: "/images/drinks/iced-hibiscus.jpg",
        tags: ["cold"],
      },
    ],
  },
  {
    id: "specialty",
    slug: "specialty",
    image: "/images/categories/specialty.jpg",
    drinks: [
      {
        id: "sukoon-signature",
        name: { en: "Sukoon Signature", ar: "سكون المميز" },
        description: {
          en: "Our secret blend of espresso, caramel and vanilla",
          ar: "مزيجنا السري من الإسبريسو والكراميل والفانيليا",
        },
        price: 28,
        image: "/images/drinks/sukoon-signature.jpg",
        tags: ["hot", "new"],
      },
      {
        id: "rose-latte",
        name: { en: "Rose Latte", ar: "لاتيه بالورد" },
        description: {
          en: "Delicate rose-infused latte with edible petals",
          ar: "لاتيه رقيق بنكهة الورد مع بتلات صالحة للأكل",
        },
        price: 26,
        image: "/images/drinks/rose-latte.jpg",
        tags: ["hot", "new"],
      },
      {
        id: "pistachio-latte",
        name: { en: "Pistachio Latte", ar: "لاتيه بالفستق" },
        description: {
          en: "Creamy pistachio flavored espresso drink",
          ar: "مشروب إسبريسو بنكهة الفستق الكريمي",
        },
        price: 26,
        image: "/images/drinks/pistachio-latte.jpg",
        tags: ["hot"],
      },
      {
        id: "lavender-honey",
        name: { en: "Lavender Honey Latte", ar: "لاتيه لافندر وعسل" },
        description: {
          en: "Soothing lavender with local honey and milk",
          ar: "لافندر مهدئ مع عسل محلي وحليب",
        },
        price: 26,
        image: "/images/drinks/lavender-honey.jpg",
        tags: ["hot", "new"],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((cat) => cat.slug);
}
