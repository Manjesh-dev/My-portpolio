export default function About() {
  return (
    <section id="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <p className="section-subtitle">
          Get to know me
        </p>

        <div className="about-grid">

          <div className="card">

            <h3>Who am I?</h3>

            <p>
              I'm Manjesh Yadav, a B.Tech Computer Science
              student with a strong interest in Java,
              MERN Stack Development and AI.
            </p>

            <p>
              I enjoy building responsive websites,
              backend APIs, and intelligent applications
              that solve practical problems.
            </p>

          </div>

          <div className="card">

            <h3>Quick Info</h3>

            <ul className="about-list">

              <li>
                <strong>Name:</strong> Manjesh Yadav
              </li>

              <li>
                <strong>Degree:</strong> B.Tech CSE
              </li>

              <li>
                <strong>University:</strong> Invertis University
              </li>

              <li>
                <strong>Location:</strong> Bareilly, Uttar Pradesh, India
              </li>

              <li>
                <strong>Email:</strong> manjeshy484@gmail.com
              </li>

              <li>
                <strong>Open To:</strong> Internship & Full-Time
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}