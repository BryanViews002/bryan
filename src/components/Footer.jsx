// Footer.js
import React from "react";
import "../styles/Footer.css"; // Add this CSS file to style your footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="https://www.instagram.com/brynviews001/profilecard/?igsh=MWd2a3oieWZyY3FibQ=="
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
