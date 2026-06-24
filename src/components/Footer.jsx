export default function Footer() {
  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontFamily: "Poppins, sans-serif",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--accent-purple)")
              }
              onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
            >
              {link}
            </button>
          ))}
        </div>

        <p>© {new Date().getFullYear()} Muhammad Waqar.</p>
      </div>
    </footer>
  );
}
