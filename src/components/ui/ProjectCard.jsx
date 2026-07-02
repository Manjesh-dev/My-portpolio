import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  github,
  live,
}) {
  return (
    <div className="project-card">


      <div className="project-content">

        <b><h3>{title}</h3></b>

        <p>{description}</p>

        <div className="tech-stack">

          {tech.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>

        <div className="project-buttons">

          <a
            href={github}
            target="_blank"
            className="btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            className="btn-outline"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}