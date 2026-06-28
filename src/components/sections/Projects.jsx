import projects from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">

      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-subtitle">
          Some projects that showcase my technical skills.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}