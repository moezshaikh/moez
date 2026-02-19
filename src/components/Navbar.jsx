import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  // ✅ Active section
  const [activeSection, setActiveSection] = useState("home");

  const links = useMemo(
    () => [
      { type: "section", id: "home", label: "Home" },
      { type: "section", id: "about", label: "About" },
      { type: "section", id: "skills", label: "Skills" },
      { type: "section", id: "projects", label: "Projects" },
      { type: "section", id: "internship", label: "Internship" },
      { type: "section", id: "education", label: "Education" },
      { type: "section", id: "achievements", label: "Achievements" },
      { type: "section", id: "cta", label: "Contact" },
    ],
    []
  );

  // close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // ✅ click handler
  const handleNavClick = (link) => {
    if (link.type === "route") return;

    setActiveSection(link.id); // instantly highlight

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(link.id), 250);
    } else {
      scrollToSection(link.id);
    }
  };

  // ✅ Scroll Spy (auto highlight on scroll)
  useEffect(() => {
    if (location.pathname !== "/") return;

   const sectionIds = [
  "home",
  "about",       // ← ADD THIS
  "skills",
  "projects",
  "internship",
  "education",
  "achievements",
  "cta",
];

 const observer = new IntersectionObserver(
  (entries) => {
    // Among all currently intersecting sections, pick the one
    // closest to the top of the viewport
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (visible.length > 0) {
      setActiveSection(visible[0].target.id);
    }
  },
  {
    root: null,
    rootMargin: "-80px 0px -40% 0px", // top offset = navbar height, bottom cuts off lower half
    threshold: 0,
  }
);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar2 ${shrink ? "shrink" : ""}`}>
        <div className="navbar2-inner">
          <nav className="navbar2-links" aria-label="Primary navigation">
            {links.map((l) =>
              l.type === "route" ? (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `navbar2-link ${isActive ? "active" : ""}`.trim()
                  }
                >
                  {l.label}
                </NavLink>
              ) : (
                <button
                  key={l.id}
                  className={`navbar2-link navbar2-link-btn ${
                    activeSection === l.id ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(l)}
                  type="button"
                >
                  {l.label}
                </button>
              )
            )}
          </nav>

          <div className="navbar2-actions">
            <button
              className="navbar2-btn mobile-only"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="navbar2-mobile" role="dialog" aria-label="Mobile menu">
          <div className="navbar2-mobile-inner">
            {links.map((l) =>
              l.type === "route" ? (
                <NavLink key={l.to} to={l.to} className="navbar2-mobile-link">
                  {l.label}
                </NavLink>
              ) : (
                <button
                  key={l.id}
                  className={`navbar2-mobile-link navbar2-mobile-btn ${
                    activeSection === l.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setMobileOpen(false);
                    handleNavClick(l);
                  }}
                  type="button"
                >
                  {l.label}
                </button>
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
