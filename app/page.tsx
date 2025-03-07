"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="min-h-screen bg-[#010101] text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="text-xl font-medium">
            Jason Huang <sup className="text-xs">TM</sup>
          </div>
          <nav className="flex items-center gap-8">
            <div
              onClick={() => handleScrollTo("project")}
              className="hover:text-[#d94100] transition-colors"
            >
              Project
            </div>
            <div
              onClick={() => handleScrollTo("showcase")}
              className="hover:text-[#d94100] transition-colors"
            >
              Showcase
            </div>
            <div
              onClick={() => handleScrollTo("references")}
              className="hover:text-[#d94100] transition-colors"
            >
              References
            </div>
            <div
              onClick={() => handleScrollTo("contact")}
              className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#010101] transition-colors"
            >
              Contact
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mt-32 mb-32">
          <h1 className="text-8xl font-light leading-tight">
            <span className="text-[#5f5f5f]">Hi,</span>{" "}
            <Image
              src="/qvietportrait.jpeg"
              alt="Profile"
              width={150}
              height={80}
              className="inline-block bg-[#d94100]  -mb-2 mx-4 h-24 w-36 object-cover object-[50%_35%]"
            />{" "}
            <span className="text-[#5f5f5f]">I'm</span> Jason
            <br />
            Data Analyst
            <br />
            <span className="text-[#5f5f5f]">Based in Taipei</span>
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

        {/* Project Section */}
        <section id="project" className="mb-32">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-6xl font-light">Project</h2>
            <Link
              href="#"
              className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#010101] transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              imageSrc="/placeholder.svg?height=300&width=500"
              title="Project"
              subtitle="Mobile App"
            />
            <ProjectCard
              imageSrc="/placeholder.svg?height=300&width=500"
              title="Project"
              subtitle="Mobile App"
            />
            <ProjectCard
              imageSrc="/placeholder.svg?height=300&width=500"
              title="Project"
              subtitle="Mobile App"
            />
            <ProjectCard
              imageSrc="/placeholder.svg?height=300&width=500"
              title="Project"
              subtitle="Mobile App"
            />
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="mb-32">
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
  );
}
