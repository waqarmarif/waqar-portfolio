export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="dot" />
              Available for Work
            </div>
            <h1>
              Hi, I&apos;m <br />
              <span className="name-highlight">Muhammad Waqar</span>
            </h1>
            <p className="role">
              <span>WordPress Developer</span> & Full-Stack Web Developer
            </p>
            <p>
              Passionate Web Developer specializing in Frontend & Backend development.
              Experienced across all stages of the development cycle for dynamic web projects,
              working with HTML5, PHP, JavaScript, MySQL, and WordPress.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-code" /> View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-envelope" /> Contact Me
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="hero-stat">
                <h3>4+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="hero-stat">
                <h3>1</h3>
                <p>Award Won</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-wrapper">
              <div className="avatar-circle">
                <i className="fas fa-user" />
              </div>
              <div className="floating-tag tag-wp">
                <i className="fab fa-wordpress" style={{ color: '#21759b' }} />
                WordPress
              </div>
              <div className="floating-tag tag-php">
                <i className="fab fa-php" style={{ color: '#8892bf' }} />
                PHP Dev
              </div>
              <div className="floating-tag tag-js">
                <i className="fab fa-js-square" style={{ color: '#f7df1e' }} />
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
