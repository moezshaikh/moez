import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-shell">
        <div className="footer-card">
          {/* Top */}
          <div className="footer-top">
            <p className="footer-tagline">
               Developer • Creator • Builder
            </p>

            <div className="footer-social" aria-label="Social links">
              <a
                className="footer-icon"
                href="https://www.linkedin.com/in/moez-shaikh/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                className="footer-icon"
                href="https://github.com/moezshaikh"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                className="footer-icon"
                href="mailto:shaikhmoez159@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-copy">© {year} Moez Shaikh</p>
            <p className="footer-note">Built with React + Vite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
