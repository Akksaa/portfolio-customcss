import Image from 'next/image'
import React from 'react'

export default function Projects() {
    const projects = [
      {
        title: "Project 1",
        description: "A brief description of project 1",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "/p1.png"
      },
      {
        title: "Project 2",
        description: "A brief description of project 2",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        image: "/p2.png"
      }
    ]
  
    return (
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={300}
                  height={200}
                  layout="responsive"
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
