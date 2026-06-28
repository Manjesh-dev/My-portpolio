import experience from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        <p className="section-subtitle">
          Academic Projects & Practical Experience
        </p>

        <div className="timeline">

          {experience.map((item) => (

            <div
              key={item.id}
              className="timeline-card"
            >
              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <span>{item.duration}</span>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}