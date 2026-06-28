import certifications from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certificates">

      <div className="container">

        <h2 className="section-title">
          Certifications
        </h2>

        <p className="section-subtitle">
          Courses & Achievements
        </p>

        <div className="certificate-grid">

          {certifications.map((item) => (

            <div
              key={item.id}
              className="certificate-card"
            >

              <h3>{item.title}</h3>

              <p>{item.provider}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}