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
          Java + DSA | MERN Stack Developer |
          AI Enthusiast
        </p>

        <div className="social-links">

          <a
            href="https://github.com/manjesh-dev"
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

        <p className="copyright">
          © {new Date().getFullYear()} Manjesh Yadav.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}