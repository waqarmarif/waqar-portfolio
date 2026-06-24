const experiences = [
  {
    icon: 'fas fa-briefcase',
    role: 'Web Developer',
    company: 'Forbes Middle East',
    date: 'Jun 2021 – Present',
    description:
      'Working as a Web Developer at Forbes Middle East, building and maintaining the Forbes Middle East Events website. Utilizing WordPress with Avada theme and Avada Page Builder, implementing custom PHP, HTML, CSS, and jQuery components.',
  },
  {
    icon: 'fas fa-laptop-code',
    role: 'PHP Web Developer',
    company: 'Muqit.com',
    date: 'Jan 2020 – Jan 2021',
    description:
      'Worked as a PHP Web Developer at Muqit.com, contributing to ITClAS.COM and Malik.com. Developed and maintained web applications using PHP, HTML, CSS, Bootstrap, and MySQL. Awarded Employee of the Month for outstanding performance.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
          <p>My professional journey so far</p>
          <div className="title-line" />
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot">
                <i className={exp.icon} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-company">
                  <i className="fas fa-building" style={{ marginRight: '6px' }} />
                  {exp.company}
                </p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
