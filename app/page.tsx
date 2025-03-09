"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillsSection";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { FadeInSection } from "../components/FadeIn";

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

          <nav className="hidden md:flex items-center gap-8">
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

          <div
            className={`block fixed inset-0 bg-black z-50 md:hidden transform transition-transform duration-500 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-3 border-b">
              <div className="text-xl font-medium m-2">
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
        </header>

        {/* Hero Section */}
        <section className="mt-32 mb-40">
          <h1 className="text-8xl font-light leading-tight">
            <span className="text-[#5f5f5f]">Hi,</span>{" "}
            <Image
              src="/qvietportrait.jpeg"
              alt="Profile"
              width={150}
              height={80}
              className="inline-block bg-[#d94100]  -mb-2 mx-4 h-28 w-40 object-cover object-[50%_35%]"
            />{" "}
            <span className="text-[#5f5f5f]">I'm</span>{" "}
            <span className="text-[#d94100]">Jason </span>
            <br />
            Data Analyst
            <br />
            <span className="text-[#5f5f5f]">Based in Taipei</span>
          </h1>

          <div className="mt-12">
            <button
              onClick={() => handleScrollTo("skills")}
              // href="mailto:hqviet@gmail.com?subject=Contact%20Request"
              // href="#skills"

              className="inline-block bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              More
            </button>
          </div>
        </section>

        <SkillsSection />

        {/* Project Section */}
        <FadeInSection>
          <section id="project" className="mb-32">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-6xl font-light">Project</h2>
              {/* <Link
                href="#"
                className="border border-white rounded-md px-6 py-2 hover:bg-white hover:text-[#010101] transition-colors"
              >
                View All
              </Link> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                imageSrc="/shipbuilding_output.png"
                title="Project: Shipbreaking statistics compilation 1967-2023"
                subtitle="This repository contains a Jupyter Notebook analyzing shipbreaking trends from 1967 to 2013. The analysis focuses on Gross Tonnage across different countries, including Taiwan, Japan, USA, South Korea, China, India, Bangladesh, and Pakistan. The notebook leverages Python libraries such as pandas and matplotlib to visualize trends over time."
                linkGithub="https://github.com/qvieth/shipbreaking-complilation"
              />
              <ProjectCard
                imageSrc="/thesis.png"
                title="Project: Stock Data Downloader"
                subtitle="This project analyzes Vietnamese stock market data, with a focus on the fintech sector. It calculates and tracks market capitalization changes over time for selected stocks, enabling sector-specific analysis and comparison.
"
                linkGithub="https://github.com/qvieth/thesis-stock-processing"
              />
            </div>
            <div className="mt-12 mb-12 flex items-center justify-center">
              <div className=" ">
                <Link
                  // href="mailto:hqviet@gmail.com?subject=Contact%20Request"
                  href="https://drive.google.com/drive/folders/1gCJSJb8O-kqC7x2XGlomX4tq2Ehf-NS8?usp=sharing"
                  className="inline-block bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  More
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>
        {/* References Section */}
        <FadeInSection>
          <section id="references" className="mb-32">
            <h2 className="text-6xl font-light text-center mb-8">
              Certifications and Reference Letters
            </h2>
            <div className="flex  items-center justify-center">
              <div className=" block mb-12 items-center justify-center">
                <Link
                  href="https://drive.google.com/drive/folders/1jtesl16JN7IKVG75t7TAza_M-jU_yWoD"
                  className="inline bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Proof
                </Link>
              </div>
            </div>
            {/* 
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
            </div> */}
          </section>
        </FadeInSection>
        {/* References Section */}
        <FadeInSection>
          <section id="contact" className="mb-32 ">
            <h2 className="text-6xl font-light text-center mb-8">
              Let’s create
            </h2>
            <h2 className="text-8xl font-light text-center mb-10">
              something together
            </h2>

            <div className="flex  items-center justify-center p-10">
              <div className=" block mb-12 items-center justify-center">
                <Link
                  href="mailto:hhq.viet@gmail.com?subject=Contact%20Request"
                  className="inline bg-[#d94100] text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
