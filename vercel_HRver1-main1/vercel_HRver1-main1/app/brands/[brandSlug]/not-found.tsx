import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BrandNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Brand Not Found</h1>
      <p className="text-gray-600 text-lg mb-8 text-center">Sorry, we couldn't find the brand you're looking for.</p>
      <Button asChild className="rounded-full bg-black text-white hover:bg-gray-800">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
