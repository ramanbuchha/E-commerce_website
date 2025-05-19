import type { BrandData } from "./types"

// Helper function to generate random products for each brand
function generateRandomProducts(brandName: string, count: number) {
  const categories = {
    Bodycare: ["Kids Innerwear", "Kids Outerwear", "Kids Sleepwear", "Kids Activewear"],
    Lyra: ["Women's Leggings", "Women's Tops", "Women's Dresses", "Women's Ethnic Wear"],
    Supersox: ["Men's Socks", "Women's Socks", "Kids Socks", "Sports Socks"],
    Zeel: ["Rainwear", "Waterproof Jackets", "Umbrellas", "Rain Boots"],
    Pinklush: ["Women's Lingerie", "Women's Sleepwear", "Women's Activewear", "Women's Loungewear"],
    Zoom: ["Men's Casual Wear", "Men's Formal Wear", "Men's Activewear", "Men's Accessories"],
    Mitushi: ["Swimwear", "Beach Accessories", "Swim Caps", "Goggles"],
    Niomoda: ["Women's Footwear", "Men's Footwear", "Kids Footwear", "Fashion Accessories"],
    Citizen: ["Watches", "Jewelry", "Sunglasses", "Accessories"],
    "Tag Hills": ["Men's Shirts", "Men's Trousers", "Men's Suits", "Men's Accessories"],
  }

  const brandCategories = categories[brandName as keyof typeof categories] || [
    "Apparel",
    "Accessories",
    "Footwear",
    "Innerwear",
  ]

  return Array.from({ length: count }, (_, i) => {
    const price = Math.floor(Math.random() * 2000) + 299
    const discount = Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0
    const originalPrice = discount > 0 ? Math.floor(price * (100 / (100 - discount))) : price
    const category = brandCategories[Math.floor(Math.random() * brandCategories.length)]

    return {
      id: `${brandName.toLowerCase()}-${i + 1}`,
      name: `${brandName} ${category} ${i + 1}`,
      description: `Premium quality ${category.toLowerCase()} from ${brandName}.`,
      price,
      originalPrice,
      discount,
      image: `/placeholder.svg?height=600&width=600&text=${encodeURIComponent(brandName)}+${i + 1}`,
      category,
      isNew: Math.random() > 0.8,
      isFeatured: Math.random() > 0.8,
      colors: ["Black", "White", "Blue", "Red"].slice(0, Math.floor(Math.random() * 4) + 1),
      sizes: ["S", "M", "L", "XL"].slice(0, Math.floor(Math.random() * 4) + 1),
    }
  })
}

const brandsData: BrandData[] = [
  {
    id: "bodycare",
    name: "Bodycare",
    slug: "bodycare",
    description: "Largest range of apparels and innerwear for kids",
    bannerImage: "/images/bodycare-banner.png",
    logoImage: "/placeholder.svg?height=100&width=100&text=Bodycare",
    productCount: 24,
    products: generateRandomProducts("Bodycare", 24),
  },
  {
    id: "lyra",
    name: "Lyra",
    slug: "lyra",
    description: "Stylish and comfortable women's clothing for anytime, anywhere",
    bannerImage: "/images/lyra-banner-new.png",
    logoImage: "/placeholder.svg?height=100&width=100&text=Lyra",
    productCount: 32,
    products: generateRandomProducts("Lyra", 32),
  },
  {
    id: "supersox",
    name: "Supersox",
    slug: "supersox",
    description: "They aren't socks, if they aren't super!",
    bannerImage: "/images/supersox-banner-new.png",
    logoImage: "/placeholder.svg?height=100&width=100&text=Supersox",
    productCount: 28,
    products: generateRandomProducts("Supersox", 28),
  },
  {
    id: "zeel",
    name: "Zeel",
    slug: "zeel",
    description: "Trusted rainwear for 25 years with 10,000mm water pressure proof",
    bannerImage: "/images/zeel-banner-new.png",
    logoImage: "/placeholder.svg?height=100&width=100&text=Zeel",
    productCount: 18,
    products: generateRandomProducts("Zeel", 18),
  },
  {
    id: "pinklush",
    name: "Pinklush",
    slug: "pinklush",
    description: "Premium women's lingerie and sleepwear",
    bannerImage: "/placeholder.svg?height=600&width=1200&text=Pinklush",
    logoImage: "/placeholder.svg?height=100&width=100&text=Pinklush",
    productCount: 22,
    products: generateRandomProducts("Pinklush", 22),
  },
  {
    id: "zoom",
    name: "Zoom",
    slug: "zoom",
    description: "Contemporary men's fashion for the modern gentleman",
    bannerImage: "/placeholder.svg?height=600&width=1200&text=Zoom",
    logoImage: "/placeholder.svg?height=100&width=100&text=Zoom",
    productCount: 26,
    products: generateRandomProducts("Zoom", 26),
  },
  {
    id: "mitushi",
    name: "Mitushi",
    slug: "mitushi",
    description: "Wear a sporty attitude with our premium swimwear collection",
    bannerImage: "/images/mitushi-banner-new.png",
    logoImage: "/placeholder.svg?height=100&width=100&text=Mitushi",
    productCount: 20,
    products: generateRandomProducts("Mitushi", 20),
  },
  {
    id: "niomoda",
    name: "Niomoda",
    slug: "niomoda",
    description: "Trendy footwear and fashion accessories",
    bannerImage: "/placeholder.svg?height=600&width=1200&text=Niomoda",
    logoImage: "/placeholder.svg?height=100&width=100&text=Niomoda",
    productCount: 30,
    products: generateRandomProducts("Niomoda", 30),
  },
  {
    id: "citizen",
    name: "Citizen",
    slug: "citizen",
    description: "Elegant watches and accessories for every occasion",
    bannerImage: "/placeholder.svg?height=600&width=1200&text=Citizen",
    logoImage: "/placeholder.svg?height=100&width=100&text=Citizen",
    productCount: 16,
    products: generateRandomProducts("Citizen", 16),
  },
  {
    id: "tag-hills",
    name: "Tag Hills",
    slug: "tag-hills",
    description: "Premium men's formal and casual wear",
    bannerImage: "/placeholder.svg?height=600&width=1200&text=Tag+Hills",
    logoImage: "/placeholder.svg?height=100&width=100&text=Tag+Hills",
    productCount: 24,
    products: generateRandomProducts("Tag Hills", 24),
  },
]

export function getBrandData(slug: string): BrandData | undefined {
  return brandsData.find((brand) => brand.slug === slug)
}

export function getAllBrands(): BrandData[] {
  return brandsData
}
