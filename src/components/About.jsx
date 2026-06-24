export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
          <div className="title-line" />
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-card-img">
              <i className="fas fa-user-tie" />
            </div>
            <div className="about-badge-card">
              <div className="badge-number">2+</div>
              <p>Years of<br />Experience</p>
            </div>
          </div>

          <div className="about-text">
            <h3>
              Web Developer at <span>Forbes Middle East</span>
            </h3>
            <p>
              I am a passionate Web Developer specializing in both frontend and backend development.
              With hands-on experience across all stages of the development lifecycle, I build
              dynamic, responsive, and high-quality web solutions.
            </p>
            <p>
              Currently working at Forbes Middle East, I have contributed to building the
              Forbes Middle East Events website using WordPress, Avada theme, custom PHP,
              HTML, CSS, and jQuery. I enjoy problem solving and turning complex requirements
              into clean, efficient code.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <i className="fas fa-user" />
                <div>
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Muhammad Waqar</span>
                </div>
              </div>
              <div className="about-info-item">
                <i className="fas fa-envelope" />
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">waqarmarif@gmail.com</span>
                </div>
              </div>
              <div className="about-info-item">
                <i className="fas fa-phone" />
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">03472390012</span>
                </div>
              </div>
              <div className="about-info-item">
                <i className="fas fa-map-marker-alt" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Narowal, Pakistan</span>
                </div>
              </div>
              <div className="about-info-item">
                <i className="fas fa-graduation-cap" />
                <div>
                  <span className="info-label">Degree</span>
                  <span className="info-value">BSIT — Univ. of Gujrat</span>
                </div>
              </div>
              <div className="about-info-item">
                <i className="fas fa-trophy" />
                <div>
                  <span className="info-label">Award</span>
                  <span className="info-value">Employee of the Month</span>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane" /> Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
