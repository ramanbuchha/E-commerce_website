import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:shadow-gray-100"
        >
          <div className="relative aspect-square overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-black hover:bg-gray-800 rounded-full text-white">New</Badge>
            )}

            {product.discount > 0 && (
              <Badge className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-900 rounded-full text-white">
                {product.discount}% OFF
              </Badge>
            )}
          </div>

          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900">
              <Link href={`/products/${product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                {product.originalPrice > product.price && (
                  <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
