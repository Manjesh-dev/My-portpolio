import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>Manjesh Yadav</h2>

        <p>
          Java Developer | MERN Stack Developer |
          Machine Learning Enthusiast
        </p>

        <div className="social-links">

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

          <a href="mailto:youremail@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Manjesh Yadav.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}