export default function Footer() {
  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">Muhammad Waqar</div>

        <div className="footer-social">
          <a
            href="mailto:waqarmarif@gmail.com"
            className="social-link"
            title="Email"
          >
            <i className="fas fa-envelope" />
          </a>
          <a href="tel:03472390012" className="social-link" title="Phone">
            <i className="fas fa-phone" />
          </a>
          <a
            href="https://forbesmiddleeastevents.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="Live Project"
          >
            <i className="fas fa-globe" />
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--accent-purple)")
              }
              onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
            >
              {link}
            </a>
          ))}
        </div>

        <p>© 2024 Muhammad Waqar</p>
      </div>
    </footer>
  );
}
