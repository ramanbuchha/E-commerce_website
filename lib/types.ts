export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  image: string
  category: string
  isNew: boolean
  isFeatured: boolean
  colors: string[]
  sizes: string[]
}

export interface BrandData {
  id: string
  name: string
  slug: string
  description: string
  bannerImage: string
  logoImage: string
  productCount: number
  products: Product[]
}
