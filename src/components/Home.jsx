import { useEffect } from "react";
import "../styles/home.css";

function Home() {
  useEffect(() => {
    const el = document.querySelector(".hero-content");
    if (el) setTimeout(() => el.classList.add("loaded"), 100);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="tag-dot" />
              Available for opportunities
            </div>

            <h1>
              AKSHAYA{" "}
              
              <span className="name-stroke">P V</span>
            </h1>

            <p className="hero-role">Full Stack Developer</p>

            <p className="hero-desc">
              Full Stack Developer building modern, scalable, and user-friendly
              web applications with React and Node.js. Passionate about clean
              code, performance, and impactful digital experiences.
            </p>

            <div className="hero-btns">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("contact")}
              >
                <i className="fas fa-paper-plane" /> Get in Touch
              </button>

              <a
                href="https://drive.google.com/file/d/1ZbaOk2XZ6NxlFgrxV7FI716ALufIenkN/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <i className="fas fa-file-alt" /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;