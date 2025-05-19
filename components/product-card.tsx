"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center rounded-full bg-[#FFE566] px-2.5 py-0.5 text-xs font-medium text-black">
              {product.discount}% OFF
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            <Link href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
          {product.originalPrice > product.price && (
            <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
          )}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {/* Cart functionality removed */}
      </div>
    </div>
  )
} 