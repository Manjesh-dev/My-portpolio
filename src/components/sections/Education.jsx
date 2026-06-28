import education from "@/data/education";

export default function Education() {
  return (
    <section id="education">

      <div className="container">

        <h2 className="section-title">
          Education
        </h2>

        <p className="section-subtitle">
          Academic Background
        </p>

        <div className="timeline">

          {education.map((item) => (

            <div
              key={item.id}
              className="timeline-card"
            >

              <h3>{item.degree}</h3>

              <h4>{item.institute}</h4>

              <span>{item.duration}</span>

              <p>{item.result}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}