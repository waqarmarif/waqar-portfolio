const projects = [
  {
    icon: 'fas fa-newspaper',
    title: 'Forbes Middle East Events',
    period: 'Jun 2021 – Present',
    description:
      'Official events website for Forbes Middle East. Built with WordPress Avada theme and Avada Page Builder. Implemented custom PHP components, HTML/CSS layouts, and jQuery interactions.',
    tech: ['WordPress', 'PHP', 'HTML', 'CSS', 'jQuery', 'Avada'],
    link: 'https://forbesmiddleeastevents.com/',
  },
  {
    icon: 'fas fa-blog',
    title: 'News Blog Posting Website',
    period: 'Dec 2020 – Jan 2021',
    description:
      'A full-featured news blog platform built in core PHP. Features two modules — Admin and User. Admin can manage categories, users, and posts. Users can create, edit, and delete their own posts.',
    tech: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    link: null,
  },
  {
    icon: 'fas fa-hospital',
    title: 'Hospital Management System',
    period: 'Oct 2017 – Jan 2018',
    description:
      'Final year web application with three modules — Admin, Doctor, and Patient. Fully responsive design. Patients can book appointments and print previous reports. Built with PHP and Bootstrap.',
    tech: ['PHP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: null,
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Tic Tac Toe',
    period: '2017',
    description:
      'A semester project implementing the classic Tic Tac Toe game using C++ with Object-Oriented Programming concepts, demonstrating understanding of OOP principles and game logic.',
    tech: ['C++', 'OOP'],
    link: null,
  },
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Some of the work I have built</p>
          <div className="title-line" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-top">
                <div className="project-icon">
                  <i className={p.icon} />
                </div>
                <div className="project-links">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Site">
                      <i className="fas fa-external-link-alt" />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card-body">
                <p className="project-period">
                  <i className="fas fa-calendar-alt" /> {p.period}
                </p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tech-tags">
                  {p.tech.map(t => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
