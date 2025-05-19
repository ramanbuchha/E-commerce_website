import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const brands = [
  { id: 1, name: "Lyra", image: "/brand-logos/lyra.png" },
  { id: 2, name: "Bodycare", image: "/brand-logos/bodycare.png" },
  { id: 3, name: "Tag Hills", image: "/brand-logos/taghills.png" },
  { id: 4, name: "Mitushi", image: "/brand-logos/mitushi.png" },
  { id: 5, name: "Zoom", image: "/brand-logos/zoom.png" },
  { id: 6, name: "Citizen", image: "/brand-logos/citizen.png" },
  { id: 7, name: "Zeel", image: "/brand-logos/zeel.png" },
  { id: 8, name: "Pinklush", image: "/brand-logos/pinklush.png" },
  { id: 9, name: "Niomoda", image: "/brand-logos/niomoda.png" },
]

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="group relative overflow-hidden rounded-2xl border bg-white transition-all hover:shadow-md hover:shadow-gray-100"
        >
          <div className="aspect-square relative overflow-hidden rounded-t-2xl">
            <Image
              src={brand.image || "/placeholder.svg"}
              alt={brand.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">{brand.name}</h3>
            <div className="mt-2 flex items-center text-sm text-gray-600 group-hover:text-gray-800">
              <span>View Collection</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
