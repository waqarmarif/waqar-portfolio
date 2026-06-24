const skillGroups = [
  {
    icon: 'fas fa-globe',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Bootstrap', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'jQuery', level: 82 },
    ],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend',
    skills: [
      { name: 'PHP (OOP)', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Laravel', level: 65 },
      { name: 'REST APIs', level: 70 },
    ],
  },
  {
    icon: 'fab fa-wordpress',
    title: 'WordPress',
    skills: [
      { name: 'WordPress', level: 92 },
      { name: 'WP Customization', level: 90 },
      { name: 'Avada / Page Builder', level: 88 },
      { name: 'WP Plugins', level: 80 },
    ],
  },
]

const techBadges = [
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3-alt', name: 'CSS3' },
  { icon: 'fab fa-js-square', name: 'JavaScript' },
  { icon: 'fab fa-php', name: 'PHP' },
  { icon: 'fab fa-wordpress', name: 'WordPress' },
  { icon: 'fas fa-database', name: 'MySQL' },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
  { icon: 'fab fa-laravel', name: 'Laravel' },
  { icon: 'fas fa-code', name: 'jQuery' },
  { icon: 'fab fa-git-alt', name: 'Git' },
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Technologies</h2>
          <p>Tools and technologies I work with</p>
          <div className="title-line" />
        </div>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-icon">
                  <i className={group.icon} />
                </div>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-bars">
                {group.skills.map(s => (
                  <div className="skill-bar-item" key={s.name}>
                    <div className="skill-bar-label">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges-row">
          {techBadges.map(b => (
            <div className="tech-badge" key={b.name}>
              <i className={b.icon} />
              {b.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
