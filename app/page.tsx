import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import BrandCarousel from "@/components/brand-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-light tracking-wider text-gray-600">Welcome to</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-700">
            The Brand Destination
          </h1>
          <div className="pt-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900">H R Apparel</h1>
          </div>
          <div className="pt-6">
            <Button className="rounded-full px-8 py-6 text-base bg-black hover:bg-gray-800 text-white">
              Explore Collections <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container">
          <BrandCarousel />
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Our Brands</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Discover our curated collection of premium fashion brands
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Bodycare", slug: "bodycare", image: "/images/bodycare-banner.png" },
              { name: "Lyra", slug: "lyra", image: "/images/lyra-banner-new.png" },
              { name: "Supersox", slug: "supersox", image: "/images/supersox-banner-new.png" },
              { name: "Zeel", slug: "zeel", image: "/images/zeel-banner-new.png" },
              { name: "Pinklush", slug: "pinklush", image: "/placeholder.svg?height=400&width=400" },
              { name: "Zoom", slug: "zoom", image: "/placeholder.svg?height=400&width=400" },
              { name: "Mitushi", slug: "mitushi", image: "/images/mitushi-banner-new.png" },
              { name: "Niomoda", slug: "niomoda", image: "/placeholder.svg?height=400&width=400" },
              { name: "Citizen", slug: "citizen", image: "/placeholder.svg?height=400&width=400" },
              { name: "Tag Hills", slug: "tag-hills", image: "/placeholder.svg?height=400&width=400" },
            ].map((brand) => (
              <Link
                key={brand.name}
                href={`/brands/${brand.slug}`}
                className="group relative overflow-hidden rounded-2xl border bg-white transition-all hover:shadow-lg hover:shadow-gray-100"
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
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Get in Touch</h2>
              <p className="text-gray-600 md:text-xl">
                We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-gray-900">Contact Information</h3>
                <p className="text-gray-600">123 Fashion Avenue, Style District</p>
                <p className="text-gray-600">contact@hrapparel.com</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="rounded-xl border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-xl border-gray-200 focus:border-gray-400"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] rounded-xl border-gray-200 focus:border-gray-400"
                  />
                </div>
                <Button className="w-full rounded-xl bg-black hover:bg-gray-800 text-white">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
