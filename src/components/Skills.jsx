import { useEffect, useRef } from "react";
import {
  FaJs, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCss3Alt, FaBrain
} from "react-icons/fa";
import {
  SiMongodb, SiPostgresql, SiExpress, SiTailwindcss,
  SiBootstrap, SiPostman, SiVercel, SiNextdotjs, SiRedux, SiWordpress, SiHtml5
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import "../styles/skills.css";

const categories = [
  {
    icon: "fas fa-layer-group",
    label: "Frontend",
    skills: [
      { icon: <FaReact color="#61dbfb"/>, name: "React" },
      { icon: <FaJs color="#f7df1e"/>, name: "JavaScript" },
      { icon: <SiHtml5 color="#e34c26"/>, name: "HTML5" },
      { icon: <FaCss3Alt color="#264de4"/>, name: "CSS3" },
      { icon: <SiTailwindcss color="#38bdf8"/>, name: "Tailwind" },
      { icon: <SiBootstrap color="#7952b3"/>, name: "Bootstrap" },
      { icon: <SiRedux color="#764abc"/>, name: "Redux" },
      { icon: <SiNextdotjs color="#fff"/>, name: "Next.js" },
    ],
  },
  {
    icon: "fas fa-server",
    label: "Backend & Database",
    skills: [
      { icon: <FaNodeJs color="#68a063"/>, name: "Node.js" },
      { icon: <SiExpress color="#fff"/>, name: "Express.js" },
      { icon: <SiMongodb color="#47a248"/>, name: "MongoDB" },
      { icon: <SiPostgresql color="#336791"/>, name: "PostgreSQL" },
      { icon: <FaPython color="#3776ab"/>, name: "Python" },
      { icon: <SiPostman color="#ff6c37"/>, name: "Postman" },
    ],
  },
  {
    icon: "fas fa-tools",
    label: "Tools & AI",
    skills: [
      { icon: <FaGitAlt color="#f1502f"/>, name: "Git" },
      { icon: <FaGithub color="#d1d5db"/>, name: "GitHub" },
      { icon: <SiVercel color="#fff"/>, name: "Vercel" },
      { icon: <SiWordpress color="#21759b"/>, name: "WordPress" },
      { icon: <FaBrain color="#facc15"/>, name: "AI" },
      { icon: <GiArtificialIntelligence color="#22c55e"/>, name: "ML" },
    ],
  },
];

function Skills() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="sec-label reveal">What I Know</div>
        <h2 className="sec-title reveal reveal-delay-1">Technical Skills</h2>
        <p className="sec-sub reveal reveal-delay-2">
          Building responsive web apps using modern technologies — from scalable backends to interactive frontends.
        </p>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className={`skill-cat reveal reveal-delay-${i}`} key={cat.label}>
              <div className="skill-cat-title">
                <i className={cat.icon} /> {cat.label}
              </div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s.name}>
                    <span className="skill-icon">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
