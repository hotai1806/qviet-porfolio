import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#010101] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          <Link href="https://instagram.com" className="hover:text-[#d94100] transition-colors">
            Instagram
          </Link>
          <Link href="https://behance.net" className="hover:text-[#d94100] transition-colors">
            Behance
          </Link>
          <Link href="https://twitter.com" className="hover:text-[#d94100] transition-colors">
            Twitter
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-[#232323] my-4"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="mb-4 md:mb-0">
            <p>Juan Simmons. Web Designer</p>
          </div>
          <div className="flex gap-6">
            <Link href="/style-guide" className="text-sm hover:text-[#d94100] transition-colors">
              Style Guide
            </Link>
            <Link href="/licences" className="text-sm hover:text-[#d94100] transition-colors">
              Licences
            </Link>
            <Link href="/changelog" className="text-sm hover:text-[#d94100] transition-colors">
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

