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

      <img
        src={image}
        alt={title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{title}</h3>

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