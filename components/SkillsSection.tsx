// components/SkillsSection.jsx
"use client";
import { useState } from "react";

type SkillCardProps = {
  title: string;
  icon: string;
  level: number;
  color: string;
  description: string;
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
  const skills = [
    {
      title: "Python",
      icon: "🐍",
      level: 95,
      color: "#3776AB",
      description:
        "Advanced Python programming with expertise in data analysis (Pandas, NumPy, SciPy), machine learning (Scikit-learn, TensorFlow), and automation. Experience creating production-ready code and packages.",
    },
    {
      title: "SQL",
      icon: "🗃️",
      level: 90,
      color: "#4479A1",
      description:
        "Expert in complex SQL queries, database optimization, and data modeling across PostgreSQL, MySQL, and SQLite. Experience with data warehousing concepts and ETL processes.",
    },
    {
      title: "Linux",
      icon: "🐧",
      level: 88,
      color: "#FCC624",
      description:
        "Proficient in Linux system administration, shell scripting (Bash), and automation. Experience with server management, package installation, and system optimization.",
    },
    {
      title: "Data Science",
      icon: "📊",
      level: 92,
      color: "#FF6384",
      description:
        "End-to-end data analysis workflow from data cleaning to visualization and insights. Experience with statistical analysis, predictive modeling, and communicating findings to stakeholders.",
    },
    {
      title: "Research",
      icon: "🔍",
      level: 85,
      color: "#9C27B0",
      description:
        "Research methodology expertise including literature reviews, experimental design, and analysis. Experience converting research questions into testable hypotheses and actionable insights.",
    },
    {
      title: "Technical Editing",
      icon: "✏️",
      level: 88,
      color: "#00BFA5",
      description:
        "Technical documentation and editing for clarity, accuracy, and accessibility. Experience with technical writing, proofreading, and creating documentation for technical products.",
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
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My expertise spans programming, data science, and technical
            research, with strong foundations in Python, SQL, and Linux
            environments. I specialize in transforming complex data into
            actionable insights through rigorous analysis and clear
            communication.
          </p>
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
        <div className="bg-black rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Additional Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
