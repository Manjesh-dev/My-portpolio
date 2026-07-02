import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        {/* Left */}

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Manjesh <span>Yadav</span>
          </h1>

          <h2>
             MERN Stack Developer • AI Enthusiast
          </h2>

          <p className="hero-description">
            B.Tech Computer Science student passionate about
            Full Stack Development, Java + DSA and AI.
            I enjoy building scalable web applications and
            solving real-world problems.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn"
            >
              View Projects
            </a>

            <a
              href="/manjesh_resume.pdf"
              className="btn-outline"
              download
            >
              Download Resume
            </a>

          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Manjesh-dev"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/manjesh-yadav-1074b3322/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:manjeshy484@gmail.com">
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Right */}

        <div className="hero-image">

          <img
            src="/images/profile.jpeg"
            alt="Profile"
          />

        </div>

      </div>

    </section>
  );
}