"use client";
import { gql, useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";

const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    allProject {
      _id
      title
      description
      image {
        asset {
          url
        }
      }
      githubLink
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
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
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.allProject.map((project: any) => (
        <div key={project._id}>
          <ProjectCard
            imageSrc={project.image.asset.url}
            title={project.title}
            subtitle={project.description}
            linkGithub={project.githubLink}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
