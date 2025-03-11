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
  if (error) return <p>Error: {error.message}</p>;

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
