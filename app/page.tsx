"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillsSection";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add this useEffect to your component
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="min-h-screen bg-[#010101] text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <header
          className={`flex justify-between items-center w-full px-6 py-4 transition-all duration-300 fixed top-0 right-0`}
        >
          <div className="text-xl font-medium">
            <Link href="#">
              Jason Huang <sup className="text-xs">TM</sup>
            </Link>
          </div>
          <nav className="md:flex hidden items-center gap-8">
            <div
              onClick={() => handleScrollTo("skills")}
              className="hover:text-[#d94100] transition-colors"
            >
              Skills
            </div>
            <div
              onClick={() => handleScrollTo("project")}
              className="hover:text-[#d94100] transition-colors"
            >
              Project
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
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 md:hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <div className="text-xl font-medium">
                  Jason Huang <sup className="text-xs">TM</sup>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6 text-lg">
                <div
                  onClick={() => handleScrollTo("skills")}
                  className="hover:text-[#d94100] transition-colors cursor-pointer"
                >
                  Skills
                </div>
                <div
                  onClick={() => handleScrollTo("projects")}
                  className="hover:text-[#d94100] transition-colors cursor-pointer"
                >
                  Projects
                </div>
                <div
                  onClick={() => handleScrollTo("experience")}
                  className="hover:text-[#d94100] transition-colors cursor-pointer"
                >
                  Experience
                </div>
                <div
                  onClick={() => handleScrollTo("contact")}
                  className="hover:text-[#d94100] transition-colors cursor-pointer"
                >
                  Contact
                </div>
              </nav>
            </div>
          )}
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
              className="inline-block bg-[#d94100]  -mb-2 mx-4 h-28 w-40 object-cover object-[50%_35%]"
            />{" "}
            <span className="text-[#5f5f5f]">I'm</span> Jason
            <br />
            Data Analyst
            <br />
            <span className="text-[#5f5f5f]">Based in Taipei</span>
          </h1>

          <div className="mt-12">
            <Link
              href="mailto:hqviet@gmail.com?subject=Contact%20Request"
              className="inline-block bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </section>
        <SkillsSection />

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
          <h2 className="text-6xl font-light text-center mb-8">References</h2>
          <div className="flex  items-center justify-center">
            <div className=" block mb-12 items-center justify-center">
              <Link
                href="https://drive.google.com/drive/folders/1jtesl16JN7IKVG75t7TAza_M-jU_yWoD"
                className="inline bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Certificate here
              </Link>
            </div>
          </div>

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
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
