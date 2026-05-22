import { useEffect, useRef } from "react";
import dentalImg from "../images/dental-clinic.png";
import buildSmartImg from "../images/build-smart.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/projects.css";

const projects = [
  {
    img: dentalImg,
    tech: ["React", "Bootstrap"],
    title: "Dental Clinic Website",
    desc: "A responsive React application for dental services and appointment booking, with a clean UI and seamless user experience.",
    live: "https://dental-clinic-mrtg.vercel.app/",
    code: "https://github.com/Akshya-krishnan/dental-clinic.git",
  },
  {
    img: buildSmartImg,
    tech: ["React", "Tailwind", "Maps API"],
    title: "Build Smart",
    desc: "A platform with Google Maps integration for location-based features, helping users find and manage construction-related services.",
    live: "https://brikzaa-build-zzre.vercel.app",
    code: "https://github.com/sajjadabdulla/build_smart.git",
  },
];

function Projects() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll(".reveal, .proj-card").forEach((el) => obs.observe(el));
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="sec-label reveal">My Work</div>
        <h2 className="sec-title reveal reveal-delay-1">Featured Projects</h2>
        <p className="sec-sub reveal reveal-delay-2">Real-world applications built with care for performance, design, and user experience.</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`proj-card reveal reveal-delay-${i}`} key={p.title}>
              <div className="proj-img-wrap">
                <img src={p.img} alt={p.title} className="proj-img" />
              </div>
              <div className="proj-body">
                <div className="proj-tech-list">
                  {p.tech.map((t) => <span className="proj-tech" key={t}>{t}</span>)}
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-live">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="proj-link proj-code">
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
