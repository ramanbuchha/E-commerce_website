"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const brands = [
  { name: "Bodycare", href: "/brands/bodycare" },
  { name: "Lyra", href: "/brands/lyra" },
  { name: "Supersox", href: "/brands/supersox" },
  { name: "Zeel", href: "/brands/zeel" },
  { name: "Pinklush", href: "/brands/pinklush" },
  { name: "Zoom", href: "/brands/zoom" },
  { name: "Mitushi", href: "/brands/mitushi" },
  { name: "Niomoda", href: "/brands/niomoda" },
  { name: "Citizen", href: "/brands/citizen" },
  { name: "Tag Hills", href: "/brands/tag-hills" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="H R Apparel Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gray-900">H R Apparel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {brands.map((brand) => (
                      <li key={brand.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={brand.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900"
                          >
                            <div className="text-sm font-medium leading-none">{brand.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-medium text-gray-600">Brands</div>
              <div className="grid grid-cols-2 gap-2">
                {brands.map((brand) => (
                  <Link
                    key={brand.name}
                    href={brand.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/"
              className="block text-sm font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
