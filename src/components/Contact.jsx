import { useEffect, useRef } from "react";
import {
  FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram,
} from "react-icons/fa";
import "../styles/contact.css";

const contacts = [
  { Icon: FaPhone,    cls: "cc-phone",    href: "tel:+918943883864",      label: "Phone",     val: "+91 89438 83864" },
  { Icon: FaEnvelope, cls: "cc-email",    href: "mailto:akshayakrishnan4147@gmail.com", label: "Email", val: "akshayakrishnan4147@gmail.com" },
  { Icon: FaWhatsapp, cls: "cc-whatsapp", href: "https://wa.me/918943883864", label: "WhatsApp", val: "Message Me" },
  { Icon: FaGithub,   cls: "cc-github",   href: "https://github.com/Akshya-krishnan", label: "GitHub", val: "Akshya-krishnan" },
  { Icon: FaLinkedin, cls: "cc-linkedin", href: "https://www.linkedin.com/in/akshaya-p-v-156172276/", label: "LinkedIn", val: "akshaya-p-v" },
  { Icon: FaInstagram,cls: "cc-instagram",href: "https://www.instagram.com/akshyah.krishnan/", label: "Instagram", val: "@akshyah.krishnan" },
];

function Contact() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll(".reveal, .cc").forEach((el) => obs.observe(el));
  }, []);

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          <div className="sec-label reveal" style={{ justifyContent: "center" }}>Let's Connect</div>
          <h2 className="sec-title reveal reveal-delay-1">Get in Touch</h2>
          <p className="contact-sub reveal reveal-delay-2">
            Open to full-time roles, freelance work, and collaborative projects. Feel free to reach out through any channel below.
          </p>
          <div className="contact-cards">
            {contacts.map((c, i) => (
              <a
                href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer" key={c.label}
                className={`cc ${c.cls} reveal reveal-delay-${i % 3}`}
              >
                <c.Icon className="cc-icon" />
                <span className="cc-label">{c.label}</span>
                <span className="cc-val">{c.val}</span>
              </a>
            ))}
          </div>
          <p className="contact-note reveal">Thank you for visiting my portfolio 🙏</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
