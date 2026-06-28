import skills from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section id="skills">

      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <p className="section-subtitle">
          Technologies I use to build applications.
        </p>

        <div className="skills-grid">

          {skills.map((category) => (
            <SkillCard
              key={category.category}
              title={category.category}
              skills={category.items}
            />
          ))}

        </div>

      </div>

    </section>
  );
}