// components/SkillsSection.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

type SkillCardProps = {
  title: string;
  icon?: string;
  level: number;
  color: string;
  description?: string;
};

const SkillCard = ({
  title,
  icon,
  level,
  color,
  description,
}: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg p-6 transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-2" : "shadow"
      }`}
      style={{ backgroundColor: `${color}15` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-3xl" style={{ color }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Proficiency</span>
          <span className="text-sm font-medium">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${level}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>

      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  const language = [
    {
      title: "English",
      level: 90,
      color: "#9C27B0",
    },

    {
      title: "Chinese",
      level: 70,
      color: "#FF9800",
    },
    {
      title: "Vietnamese",
      level: 100,
      color: "#2196F3",
    },
  ];
  const skills = [
    {
      title: "Programming",
      icon: "💻",
      level: 95,
      color: "#2196F3",
      description:
        "Expertise in Data Science, App Development, and Web Designing. Proficient in Python (Pandas, Seaborn, Sklearn, NLTK), SQL, and Linux.",
    },
    {
      title: "Research",
      icon: "🔬",
      level: 90,
      color: "#9C27B0",
      description:
        "Strong research skills in information gathering and interpretation, focusing on Climate Change and Sustainable Development.",
    },
    {
      title: "Marketing",
      icon: "📢",
      level: 85,
      color: "#FF9800",
      description:
        "Experience in digital and social media marketing, including designing engaging posts for online platforms.",
    },
    {
      title: "Editing",
      icon: "🎬",
      level: 80,
      color: "#4CAF50",
      description:
        "Skilled in photo and video editing, as well as copywriting for various media formats.",
    },
    {
      title: "Statistics",
      icon: "📊",
      level: 88,
      color: "#F44336",
      description:
        "Proficient in statistical thinking, modeling, and data analysis for research and business applications.",
    },
    {
      title: "MS Office",
      icon: "📂",
      level: 85,
      color: "#3F51B5",
      description:
        "Advanced skills in PowerPoint, Word, and Excel for professional documentation and data analysis.",
    },
  ];

  const technicalSkills = [
    { name: "Data Visualization (Matplotlib, Seaborn)", level: 90 },
    { name: "Jupyter Notebooks", level: 95 },
    { name: "Git & Version Control", level: 85 },
    { name: "Data Cleaning & Preprocessing", level: 92 },
    { name: "Shell Scripting", level: 82 },
    { name: "Docker", level: 78 },
    { name: "Apache Spark", level: 75 },
    { name: "API Development", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4"> Expertise</h2>
        </div>

        {/* Main skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              level={skill.level}
              color={skill.color}
              description={skill.description}
            />
          ))}
        </div>

        {/* Additional technical skills */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4"> Language</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {language.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              // icon={skill.icon}
              level={skill.level}
              color={skill.color}
              // description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
