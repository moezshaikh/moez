import React from "react";
import { Link } from "react-router-dom";
import noorImg from "../assets/noor.png";
import sukoonImg from "../assets/sukoon.png";
import markImg from "../assets/mark.png";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import bitVideo from "../assets/bit2.mp4";
import meImage from "../assets/me.jpeg";

const internships = [
  {
  role: "Independent MERN / Full-Stack Developer (Projects)",
  company: "Self-Driven Projects",
  duration: "2023 – Present",
  type: "Personal Projects",
  highlights: [
    "Built full-stack web apps using React/Next.js, Node.js, MongoDB, and REST APIs.",
    "Implemented auth-ready UI flows, form validation, dashboards, and error handling.",
    "Deployed apps on Vercel and worked in Linux-based development environments.",
  ],
  tech: ["React.js", "Next.js", "Node.js", "MongoDB", "REST API", "Git", "Vercel", "Linux"],
},
    {
      role: "Web Development Intern",
      company: "Agrownet",
       type: "On-site Internship",
      duration: "Jun 2024 – July 2024",
      highlights: [
        "Built responsive UI, integrated REST APIs, optimized performance (25%).",
        "Assisted backend testing + validation, fixed UI bugs, improved compatibility.",
      ],
      tech: ["Python", "Tkinter", "OOP", "GUI Development"]
    },
    {
      role: "Web Development Intern",
      company: "InternPe",
      type: "Remote Internship",
      highlights: [
  "Built 4 responsive web projects using HTML, CSS, and JavaScript.",
  "Improved DOM manipulation, UI structure, and responsiveness.",
],

      tech: ["HTML", "CSS", "JavaScript", "DOM", "Responsive UI"],
    },

  ];

  const achievements = [
  {
    title: "Hackverse Hackathon : Finalist (Shortlisted from 840 Teams)",
    org: "Hackathon Final Round",
    year: "2025",
    desc: "Our team was shortlisted for the final round among 840 participating teams.",
  },
  {
    title: "Built Multiple Real-World Projects",
    org: "Personal Projects",
    year: "2024–2026",
    desc: "Created full-stack and frontend projects like Lafz, PrivyCheck, MarkAI, and Noor portfolio.",
  },
  {
    title: "Smart India Hackathon (SIH) Project Work",
    org: "SIH",
    year: "2024",
    desc: "Worked on an SIH-based project with research, development, and real problem-solving approach.",
  },
  {
    title: "Presented on Generative AI",
    org: "College Presentation",
    year: "2025",
    desc: "Delivered a presentation explaining GenAI concepts, use-cases, and impact with examples.",
  },
  {
    title: "Anchored Department Events (Science Day)",
    org: "IT Department",
    year: "2025",
    desc: "Anchored two formal events including guest felicitation and stage coordination.",
  },
  {
    title: "Built a Personal Portfolio Website",
    org: "Self Project",
    year: "2026",
    desc: "Designed and developed a modern responsive portfolio with smooth scrolling and dark mode.",
  },
  {
    title: "Exploring Cybersecurity & Applied Concepts",
    org: "Academic + Self Learning",
    year: "2025",
    desc: "Studied encryption, network attacks, block cipher modes, and Diffie-Hellman key exchange.",
  },
  
];

const items = [
    {
      num: "01",
      title: "Frontend & UI",
      body: "I create responsive and modern interfaces using React and clean CSS. I care about spacing, typography, layout, and usability.",
    },
    {
      num: "02",
      title: "Python & Problem Solving",
      body: "Python for logic-heavy projects, automation, and building tools. I enjoy writing clean and structured code.",
    },
    {
      num: "03",
      title: "Product Mindset",
      body: "I don't just code. I think about users, clarity, and how the project will work in real life.",
    },
  ];
  
export default function Home() {
  return (
    
    <main className="home ">
      {/* HERO */}
 <section className="hero" id="home">

  {/* LEFT */}
  <div className="hero-left hero-animate-left">
    <h1 className="hero-title">
      Hi, I’m <span className="highlight">Moez Shaikh</span>.
      <br />
      I build clean, fast, real-world web apps.
    </h1>
  </div>
  {/* RIGHT */}
  <div className="hero-right hero-animate-right">
    <video
      className="hero-video"
      src={bitVideo}
      autoPlay
      loop
      muted
      playsInline
    />
   </div>
</section>

      {/* ABOUT PREVIEW */}
   <section id="about" className="section about">
  <div className="section head">
            <h2>About me </h2>
            </div>
        <div className="about-wrapper">
           
          {/* LEFT SIDE */}
          <div className="about-left">

  <div className="about-float-img hero-media hero-media-animate">
    <div className="hero-media-circle">
      <img src={meImage} alt="Moez Shaikh" className="hero-media-img" />
    </div>
  </div>

<p className="about-para about-para-wrap">
  Final-year IT engineering student building clean, modern web applications
  with strong UI systems, solid logic, and real-world usability, always with
  deployment-ready execution.
</p>



            {/* Social Links */}
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/moez-shaikh/" 
                className="social-btn linkedin-btn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/moezshaikh" 
                className="social-btn github-btn"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a 
                href="mailto:shaikhmoez159@gmail.com" 
                className="social-btn email-btn"
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Email</span>
              </a>

              <a
  href="/Moez_Shaikh_Resume.pdf"
  className="social-btn resume-btn"
  aria-label="Download Resume"
  download
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 20h14v-2H5v2zm7-18l-5.5 5.5 1.42 1.42L11 6.84V16h2V6.84l3.08 3.08 1.42-1.42L12 2z"/>
  </svg>
  <span>Resume</span>
</a>

            </div>
          </div>

          {/* RIGHT SIDE */}
           <div className="about-right">
      {items.map((item, i) => (
        <div className="skill-row" key={i}>
          <div className="skill-row-top">
            <span className="skill-num">{item.num}</span>
            <span className="skill-emoji">{item.emoji}</span>
            <h3 className="skill-title">{item.title}</h3>
          </div>
          <p className="skill-body">{item.body}</p>
        </div>
      ))}
    </div>
        </div>
    </section>


   <section id="skills" className="section skills">
  <div className="skills-section">
    <h2 className="skills-title">Skills</h2>

  <div className="skills-train-wrapper">
  {/* ===== Train 1: Frontend ===== */}
  <div className="skills-train">
  {/* Track 1 */}
  <div className="skills-track">
    <span className="skill">React</span>
    <span className="skill">JavaScript</span>
    <span className="skill">HTML</span>
    <span className="skill">CSS</span>
    <span className="skill">Responsive UI</span>

    <span className="skill">Node.js</span>
    <span className="skill">Express.js</span>
    <span className="skill">REST APIs</span>
    <span className="skill">Authentication (JWT)</span>

    <span className="skill">MongoDB</span>
    <span className="skill">SQL</span>

    <span className="skill">Git</span>
    <span className="skill">GitHub</span>
    <span className="skill">Postman</span>
    <span className="skill">Vercel Deployment</span>
  </div>

  {/* Track 2 (duplicate for seamless loop) */}
  <div className="skills-track" aria-hidden="true">
    <span className="skill">React</span>
    <span className="skill">JavaScript</span>
    <span className="skill">HTML</span>
    <span className="skill">CSS</span>
    <span className="skill">Responsive UI</span>

    <span className="skill">Node.js</span>
    <span className="skill">Express.js</span>
    <span className="skill">REST APIs</span>
    <span className="skill">Authentication (JWT)</span>

    <span className="skill">MongoDB</span>
    <span className="skill">SQL</span>

    <span className="skill">Git</span>
    <span className="skill">GitHub</span>
    <span className="skill">Postman</span>
    <span className="skill">Vercel Deployment</span>
  </div>
</div>

</div>
  
</div>
    </section>

      {/* FEATURED PROJECTS */}
    <section id="projects">
      <section className="section ">
        <div className="section-head">
          <h2> Projects</h2>
          <p className="project-subtitle">
  Built from scratch using my own concepts, focused on real use-cases, not tutorials.
</p>

        </div>


      <div className="grid-2">
        {/* Noor */}
        <div className="project">
          <img className="project-img" src={noorImg} alt="Noor Project Preview" />
          <div className="project-body">
            <div className="project-top">
              <h3>Noor</h3>

            </div>

            <p className="project-desc">
              An Islamic calligraphy-inspired art portfolio website with an elegant
              emerald, cream, and gold theme.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Responsive UI</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/moezshaikh/Noor" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/moez-shaikh/details/projects/" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>

              <a className="demo" href="https://noor-jtay.vercel.app/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live 
              </a>
            </div>
          </div>
        </div>

        {/* Sukoon */}
        <div className="project">
          <img className="project-img" src={sukoonImg} alt="Sukoon Project Preview" />

          <div className="project-body">
            <div className="project-top">
              <h3>Sukoon</h3>
            </div>

            <p className="project-desc">
              An early mental health checker app that analyzes text and mood patterns
              to detect stress, anxiety, or emotional issues.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>AI</span>
              <span>UI/UX</span>
            </div>

           <div className="project-links">
              <a href="https://github.com/moezshaikh/sukoon-frontend" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/moez-shaikh/details/projects/" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>

              <a className="demo" href="https://sukoon-frontend.vercel.app/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live 
              </a>
            </div>
          </div>
        </div>

        {/* MarkAI */}
        <div className="project">
          <img className="project-img" src={markImg} alt="MarkAI Project Preview" />

          <div className="project-body">
            <div className="project-top">
              <h3>Mark</h3>
            </div>

            <p className="project-desc">
              A project focused on automation + AI workflows, designed as a real-world
              productivity tool for students and developers.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>AI</span>
              <span>Automation</span>
            </div>

            <div className="project-links">
              <a href="https://github.com/moezshaikh/Mark" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>

              <a href="https://www.linkedin.com/in/moez-shaikh/details/projects/" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>

              <a className="demo" href="https://mark-uu4s.vercel.app/" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>

    <section className="internship-section" id="internship">
      <div className="internship-wrapper">
        <div className="internship-heading">
          <h2 className="internship-title">Internships</h2>
          <p className="internship-subtitle">
            Real-world learning through structured tasks, deadlines, and project
            delivery.
          </p>
        </div>

        <div className="internship-grid">
          {internships.map((item, index) => (
            <div className="internship-card" key={index}>
              <div className="internship-card-top">
                <div className="internship-badge">{item.type}</div>
                <div className="internship-duration">{item.duration}</div>
              </div>

              <h3 className="internship-role">{item.role}</h3>
              <p className="internship-company">{item.company}</p>

              <ul className="internship-points">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="internship-tech">
                {item.tech.map((t, i) => (
                  <span className="internship-chip" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* EDUCATION & CERTIFICATIONS */}
    <section id="education">
<section className="section edu">
  <div className="section-head">
    <h2>Education</h2>
    
  </div>

  <div className="edu-grid">
    {/* Education */}
    <div className="edu-card">

  <div className="edu-timeline">
    {/* X */}
    <div className="edu-step">
      <div className="edu-dot"></div>
      <div className="edu-content">
        <p className="edu-title">SSC (Class X)</p>
        <p className="edu-meta">St. Xavier's School, Shrirampur.</p>
        <p className="edu-meta">81% • Top 20 in batch</p>
        <p className="edu-desc">
          Built strong fundamentals in math, science, and logical thinking.
        </p>
      </div>
    </div>

    {/* XII */}
    <div className="edu-step">
      <div className="edu-dot"></div>
      <div className="edu-content">
        <p className="edu-title">HSC (Class XII)</p>
        <p className="edu-meta">R.B. Narayanrao Borawake College, Shrirampur</p>
        <p className="edu-desc">
          Developed problem-solving skills and interest in technology and computing.
        </p>
      </div>
    </div>

    {/* BE */}
    <div className="edu-step">
      <div className="edu-dot"></div>
      <div className="edu-content">
        <p className="edu-title">BE – Information Technology</p>
        <p className="edu-meta">Sandip Institute of Technology and Research Centre, Nasik</p>
<p className="edu-meta">2022 – 2026 • Latest SGPA: 8.35 (Sem 7)</p>

        <p className="edu-desc">
          Focused on Frontend Development, React, Python, cybersecurity basics,
          and building real-world projects.
        </p>
      </div>
    </div>
  </div>
</div>


    {/* Certifications */}
  <div className="section-head">
    
      </div>
      </div>
    </section>
    </section>


    <section className="achievements-section" id="achievements">
      <div className="achievements-wrapper">
        <div className="section-head">
          <h2>Achievements</h2>
          <p className="achievements-subtitle">
  Milestones that reflect consistency, competitive exposure, and real progress.
</p>

        </div>

        <div className="achievements-grid">
          {achievements.map((a, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-top">
                <span className="achievement-year">{a.year}</span>
                <span className="achievement-org">{a.org}</span>
              </div>

              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <div className="section-head ">
        <h2>Let's Connect </h2>
        </div>
  <div className="cta-inner">
    <span className="cta-badge">Open to Opportunities</span>

    <h2 className="cta-title">Building something real.</h2>

    <p className="cta-text">
      I’m open to internships, freelance work, and collaboration.
    </p>

    <div className="cta-actions">
      <a className="btn primary" href="#about">
  Contact Me
</a>


      <a className="btn ghost" href="mailto:shaikhmoez159@gmail.com">
        Email
      </a>
    </div>

    <p className="cta-note">
   With code, consistency, and purpose.
</p>

  </div>
      </section>

    </main>
  );
}
