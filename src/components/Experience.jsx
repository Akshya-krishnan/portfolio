import { useEffect, useRef } from "react";
import upcodeLogo from "../images/upcode-logo.jpeg";
import comLogo from "../images/com-logo.jpeg";
import vectoruxLogo from "../images/vectorux-logo.jpeg";
import { FaGlobe, FaInstagram, FaCertificate } from "react-icons/fa";
import "../styles/experience.css";

const experiences = [
  {
    logo: comLogo,
    company: "Comstream Technologies PVT LTD",
    role: "Web Developer Trainee",
    duration: "May 2026 – Present",
    points: [],
    web: "https://comstreamtech.com/",
  },
  {
    logo: upcodeLogo,
    company: "Upcode Software Labs",
    role: "Full-Stack Developer Intern",
    duration: "Aug 2025 – Mar 2026",
    points: [
      "Built full-stack applications using MERN stack",
      "Developed RESTful APIs and backend services",
      "Created responsive UI using React.js",
    ],
    cert: "https://www.linkedin.com/posts/akshaya-p-v-156172276_webdevelopment-mernstack-javascript-activity-7416118091878772736-B3ru",
    web: "https://upcode.in/",
    insta: "https://www.instagram.com/_upcode/",
  },
  {
    logo: vectoruxLogo,
    company: "VECTORUX Technolabs",
    role: "MERN Stack Developer Intern",
    duration: "Dec 2024 – Jun 2025",
    points: [
      "Developed frontend components using React.js",
      "Assisted in backend API development",
      "Worked with MongoDB for database operations",
    ],
    cert: "https://www.linkedin.com/posts/akshaya-p-v-156172276_internship-mernstack-webdevelopment-activity-7355168854022508544-wbAi",
    web: "https://vectorux.in",
    insta: "https://www.instagram.com/vectorux.in/",
  },
];

function Experience() {
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    ref.current
      ?.querySelectorAll(".tl-item, .reveal")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <div className="sec-label reveal">Career</div>

        <h2 className="sec-title reveal reveal-delay-1">
          Work Experience
        </h2>

        <p className="sec-sub reveal reveal-delay-2">
          Professional roles where I've built real-world products and grown as a
          developer.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div
              className={`tl-item reveal-delay-${i}`}
              key={exp.company}
            >
              <div
                className="tl-dot"
                style={i === 1 ? { background: "var(--accent2)" } : {}}
              />

              <div className="tl-header">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="tl-logo"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${exp.company[0]}&background=1a2336&color=4f8ef7&size=48`;
                  }}
                />

                <div>
                  <div className="tl-company">{exp.company}</div>
                  <div className="tl-role">{exp.role}</div>
                </div>

                <span className="tl-duration">{exp.duration}</span>
              </div>

              {exp.points.length > 0 && (
                <ul>
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}

              <div className="tl-links">
                {exp.cert && (
                  <a
                    href={exp.cert}
                    target="_blank"
                    rel="noreferrer"
                    className="tl-link tl-cert"
                  >
                    <FaCertificate /> Certificate
                  </a>
                )}

                <a
                  href={exp.web}
                  target="_blank"
                  rel="noreferrer"
                  className="tl-link tl-ref"
                >
                  <FaGlobe /> Website
                </a>

                {exp.insta && (
                  <a
                    href={exp.insta}
                    target="_blank"
                    rel="noreferrer"
                    className="tl-link tl-ref"
                  >
                    <FaInstagram /> Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;