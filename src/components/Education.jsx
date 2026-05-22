import { useEffect, useRef } from "react";
import { FaGraduationCap, FaSchool, FaBook, FaStar } from "react-icons/fa";
import "../styles/education.css";

const edu = [
  {
    icon: <FaGraduationCap />,
    degree: "M.Sc Computer Science — Specialisation in AI",
    institutions: [
      { img: "/images/knr.jpeg", name: "Kannur University" },
      { img: "/images/kbm.avif", name: "KBM Govt. College Thalassery" },
    ],
    year: "2023 – 2025",
    grade: "80.08% — First Class with Distinction",
  },
  {
    icon: <FaGraduationCap />,
    degree: "B.Sc Computer Science",
    institutions: [
      { img: "/images/knr.jpeg", name: "Kannur University" },
      { img: "/images/IHRD_Logo.jpg", name: "EMS Memorial College Iritty" },
    ],
    year: "2020 – 2023",
    grade: "79.33% — First Class",
  },
  {
    icon: <FaSchool />,
    degree: "Higher Secondary",
    institutions: [
      { img: "/images/mtr.jpeg", name: "Mattanur Higher Secondary School, Kannur" },
    ],
    year: "2018 – 2020",
    grade: "70%",
  },
  {
    icon: <FaBook />,
    degree: "SSLC",
    institutions: [
      { img: "/images/mtr.jpeg", name: "Mattanur Higher Secondary School, Kannur" },
    ],
    year: "2018",
    grade: "94%",
  },
];

function Education() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll(".reveal, .edu-card").forEach((el) => obs.observe(el));
  }, []);

  return (
    <section className="education" id="education" ref={ref}>
      <div className="container">
        <div className="sec-label reveal">Academic</div>
        <h2 className="sec-title reveal reveal-delay-1">Education</h2>
        <p className="sec-sub reveal reveal-delay-2">My academic foundation across computer science and artificial intelligence.</p>
        <div className="edu-list">
          {edu.map((e, i) => (
            <div className={`edu-card reveal reveal-delay-${i % 3}`} key={e.degree}>
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-body">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-insts">
                  {e.institutions.map((inst) => (
                    <span className="edu-inst" key={inst.name}>
                      <img src={inst.img} alt={inst.name}
                        onError={(ev) => { ev.target.style.display = "none"; }} />
                      {inst.name}
                    </span>
                  ))}
                </div>
                <div className="edu-footer">
                  <span className="edu-grade"><FaStar /> {e.grade}</span>
                  <span className="edu-year">{e.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
