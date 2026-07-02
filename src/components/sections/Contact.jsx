"use client";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const sendEmail = async (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    try {

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess("Message sent successfully.");

      form.current.reset();

    } catch (err) {

      setSuccess("Something went wrong.");

      console.log(err);

    }

    setLoading(false);

  };

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

          <div className="contact-info">

            <div className="contact-card">

              <FaEnvelope className="contact-icon"/>

              <div>

                <h3>Email</h3>

                <p>yourmail@gmail.com</p>

              </div>

            </div>

            <div className="contact-card">

              <FaPhone className="contact-icon"/>

              <div>

                <h3>Phone</h3>

                <p>+91 XXXXX XXXXX</p>

              </div>

            </div>

            <div className="contact-card">

              <FaMapMarkerAlt className="contact-icon"/>

              <div>

                <h3>Location</h3>

                <p>Bareilly, Uttar Pradesh</p>

              </div>

            </div>

            <div className="contact-social">

              <a href="https://github.com/yourusername">
                <FaGithub/>
              </a>

              <a href="https://linkedin.com/in/yourusername">
                <FaLinkedin/>
              </a>

            </div>

          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            />

            <button
              className="btn"
              disabled={loading}
            >

              {loading ? "Sending..." : "Send Message"}

            </button>

            {success && (
              <p
                style={{
                  marginTop:"20px",
                  color:"#22c55e"
                }}
              >
                {success}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}