import { useState, useEffect } from "react";
import "../styles/navbar.css";

const links = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Education", to: "education" },
  { label: "Contact", to: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const scroll = window.scrollY + 100;
      document.querySelectorAll("section[id]").forEach((s) => {
        if (scroll >= s.offsetTop && scroll < s.offsetTop + s.offsetHeight)
          setActive(s.id);
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scrollTo("hero")}>
        {/* <img src="/images/profile.jpeg" alt="Akshaya P V"
          onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=A&background=111827&color=4f8ef7&size=84"; }} />
        <span>Akshaya P V</span> */}
      </div>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.to}>
            <button className={active === l.to ? "active" : ""} onClick={() => scrollTo(l.to)}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <button key={l.to} className={active === l.to ? "active" : ""} onClick={() => scrollTo(l.to)}>
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
