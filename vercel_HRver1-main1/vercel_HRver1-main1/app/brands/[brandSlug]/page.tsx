import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductGrid from "@/components/product-grid"
import { getBrandData } from "@/lib/brands"

export async function generateStaticParams() {
  const brandSlugs = [
    "bodycare",
    "lyra",
    "supersox",
    "zeel",
    "pinklush",
    "zoom",
    "mitushi",
    "niomoda",
    "citizen",
    "tag-hills",
  ]

  return brandSlugs.map((slug) => ({
    brandSlug: slug,
  }))
}

export default function BrandPage({ params }: { params: { brandSlug: string } }) {
  const brandData = getBrandData(params.brandSlug)

  if (!brandData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Brand Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image
          src={brandData.bannerImage || "/placeholder.svg"}
          alt={brandData.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{brandData.name}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 text-white">{brandData.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Filters and View Options */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{brandData.name} Products</h2>
            <p className="text-gray-600">{brandData.productCount} products available</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="rounded-full flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>

            <Tabs defaultValue="grid" className="w-[200px]">
              <TabsList className="rounded-full">
                <TabsTrigger value="grid" className="rounded-full data-[state=active]:bg-gray-200">
                  <Grid3X3 className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="list" className="rounded-full data-[state=active]:bg-gray-200">
                  <List className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={brandData.products} />
      </div>
    </div>
  )
}
