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
            Java Developer • MERN Stack Developer • ML Enthusiast
          </h2>

          <p className="hero-description">
            B.Tech Computer Science student passionate about
            Full Stack Development, Java and Machine Learning.
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
              href="/resume.pdf"
              className="btn-outline"
              download
            >
              Download Resume
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/yourgithub"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="hero-image">

          <img
            src="/images/profile.png"
            alt="Profile"
          />

        </div>

      </div>

    </section>
  );
}