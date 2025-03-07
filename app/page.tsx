import Image from "next/image"
import Link from "next/link"
import ProjectCard from "../components/ProjectCard"
import TestimonialCard from "../components/TestimonialCard"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010101] text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="text-xl font-medium">
            Juan Simmons <sup className="text-xs">TM</sup>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="#work" className="hover:text-[#d94100] transition-colors">
              Work
            </Link>
            <Link href="#service" className="hover:text-[#d94100] transition-colors">
              Service
            </Link>
            <Link href="#testimonial" className="hover:text-[#d94100] transition-colors">
              Testimonial
            </Link>
            <Link
              href="#contact"
              className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#010101] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mt-32 mb-32">
          <h1 className="text-8xl font-light leading-tight">
            <span className="text-[#5f5f5f]">Hi,</span>{" "}
            <Image
              src="/sushi.jpg?height=80&width=150"
              alt="Profile"
              width={150}
              height={80}
              className="inline-block bg-[#d94100] -mb-2 mx-4"
            />{" "}
            <span className="text-[#5f5f5f]">I'm</span> Juan
            <br />
            Website Designer
            <br />
            <span className="text-[#5f5f5f]">Based in Jakarta</span>
          </h1>

          <div className="mt-12">
            <Link
              href="#contact"
              className="inline-block bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="mb-32">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-6xl font-light">Work</h2>
            <Link
              href="#"
              className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#010101] transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard imageSrc="/placeholder.svg?height=300&width=500" title="Project" subtitle="Mobile App" />
            <ProjectCard imageSrc="/placeholder.svg?height=300&width=500" title="Project" subtitle="Mobile App" />
            <ProjectCard imageSrc="/placeholder.svg?height=300&width=500" title="Project" subtitle="Mobile App" />
            <ProjectCard imageSrc="/placeholder.svg?height=300&width=500" title="Project" subtitle="Mobile App" />
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonial" className="mb-32">
          <h2 className="text-6xl font-light text-center mb-16">Testimonial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TestimonialCard
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
              name="Jordan Smith"
              position="CEO"
              company="Google"
            />
            <TestimonialCard
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
              name="Jordan Smith"
              position="CEO"
              company="Google"
            />
            <TestimonialCard
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
              name="Jordan Smith"
              position="CEO"
              company="Google"
            />
            <TestimonialCard
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
              name="Jordan Smith"
              position="CEO"
              company="Google"
            />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

