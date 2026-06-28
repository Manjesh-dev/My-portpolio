export default function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">

      <h3>{title}</h3>

      <div className="skill-list">

        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}