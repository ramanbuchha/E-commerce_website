import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { getAllBrands } from "@/lib/brands"
import type { Product } from "@/lib/types"

export default function ProductPage({ params }: { params: { productId: string } }) {
  // Find the product across all brands
  const allBrands = getAllBrands()
  let product: Product | undefined
  let brandName = ""

  for (const brand of allBrands) {
    const foundProduct = brand.products.find((p) => p.id === params.productId)
    if (foundProduct) {
      product = foundProduct
      brandName = brand.name
      break
    }
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-black hover:bg-gray-800 rounded-full text-white">New</Badge>
              )}

              {product.discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-900 rounded-full text-white">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600">
                {product.category} by {brandName}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-gray-400 text-gray-400" />
                ))}
              </div>
              <span className="text-gray-600">(24 reviews)</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Color Options */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-gray-200 focus:ring-gray-500 focus:outline-none"
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start rounded-full mb-6 bg-gray-900">
              <TabsTrigger value="description" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-white">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-white">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-white">
                Reviews (24)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Description</h3>
              <p className="text-gray-600">
                {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Premium quality materials</li>
                <li>Comfortable fit</li>
                <li>Durable and long-lasting</li>
                <li>Easy to care for</li>
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Material</span>
                  <span className="text-gray-600">Cotton Blend</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Style</span>
                  <span className="text-gray-600">Casual</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Pattern</span>
                  <span className="text-gray-600">Solid</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Fit</span>
                  <span className="text-gray-600">Regular</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Care</span>
                  <span className="text-gray-600">Machine Wash</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Country of Origin</span>
                  <span className="text-gray-600">India</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-100 pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium text-gray-700">Customer {review}</h4>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-gray-400 text-gray-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Great product! Very comfortable and stylish. Would definitely recommend.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
