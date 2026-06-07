import { useEffect, useRef } from "react";
import dentalImg from "../images/dental-clinic.png";
import ecomImg from "../images/ecom.png";
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
    code: "https://github.com/Akshya-krishnan/dental-clinic",
  },
  {
    img: ecomImg,
    tech: ["Next.js", "Bootstrap"],
    title: "Ecommerce Application",
    desc: "A responsive Ecommerce application for product sales, featuring modern UI, category management, and a seamless shopping experience.",
    live: "https://ecommerceapp-pagesrouter-bvs8qfvq2-akshaya-p-vs-projects.vercel.app/",
    code: "https://github.com/Akshya-krishnan/ecommerceapp-pagesrouter/tree/ecomm",
  },
  {
    img: buildSmartImg,
    tech: ["React", "Tailwind", "Maps API"],
    title: "Build Smart",
    desc: "A platform with Google Maps integration for location-based features, helping users find and manage construction-related services.",
    live: "https://brikzaa-build-zzre.vercel.app",
    code: "https://github.com/sajjadabdulla/build_smart",
  },
];

function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements =
      ref.current?.querySelectorAll(".reveal, .proj-card") || [];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="sec-label reveal">My Work</div>

        <h2 className="sec-title reveal reveal-delay-1">
          Featured Projects
        </h2>

        <p className="sec-sub reveal reveal-delay-2">
          Real-world applications built with care for performance, design, and
          user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`proj-card reveal reveal-delay-${index}`}
              key={project.title}
            >
              <div className="proj-img-wrap">
                <img
                  src={project.img}
                  alt={project.title}
                  className="proj-img"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Project+Image";
                  }}
                />
              </div>

              <div className="proj-body">
                <div className="proj-tech-list">
                  {project.tech.map((tech) => (
                    <span className="proj-tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="proj-title">{project.title}</h3>

                <p className="proj-desc">{project.desc}</p>

                <div className="proj-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link proj-live"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link proj-code"
                  >
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