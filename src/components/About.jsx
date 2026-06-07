import { useEffect, useRef } from "react";
import "../styles/about.css";

function About() {
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
      { threshold: 0.12 }
    );

    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid no-image">

          <div className="about-right full-width">
            <div className="sec-label reveal">About Me</div>

            <h2 className="sec-title reveal reveal-delay-1">
              Crafting digital
              <br />
              experiences
            </h2>

            <div className="about-body reveal reveal-delay-2">
              <p>
                I'm Akshaya P V, a passionate Full Stack
                Developer specialising in the MERN stack with a strong
                foundation in Artificial Intelligence.
              </p>

              <p>
                I build scalable web applications, REST APIs, and intelligent
                systems using modern technologies like React, Node.js, and
                Python.
              </p>

              <p>
                I love solving real-world problems and continuously improving my
                skills to deliver impactful solutions.
              </p>

              <a
                href="https://drive.google.com/file/d/1ZbaOk2XZ6NxlFgrxV7FI716ALufIenkN/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary about-resume-btn"
              >
                <i className="fas fa-download" /> Download Resume
              </a>
            </div>

            <div className="about-stats reveal reveal-delay-3">
              {[
                { num: "2+", label: "Years Experience" },
                { num: "3", label: "Companies Worked" },
                { num: "80%", label: "M.Sc Grade" },
                { num: "20+", label: "Tech Skills" },
              ].map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;