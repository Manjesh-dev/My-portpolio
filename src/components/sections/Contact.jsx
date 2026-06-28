import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">

      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <p className="section-subtitle">
          Let's build something amazing together.
        </p>

        <div className="contact-container">

          {/* Left Side */}

          <div className="contact-info">

            <div className="contact-card">

              <FaEnvelope className="contact-icon" />

              <div>
                <h3>Email</h3>
                <p>yourmail@gmail.com</p>
              </div>

            </div>

            <div className="contact-card">

              <FaPhone className="contact-icon" />

              <div>
                <h3>Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>

            </div>

            <div className="contact-card">

              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h3>Location</h3>
                <p>Uttar Pradesh, India</p>
              </div>

            </div>

            <div className="contact-social">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button className="btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}