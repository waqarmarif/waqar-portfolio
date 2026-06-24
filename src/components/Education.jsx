const education = [
  {
    icon: 'fas fa-university',
    degree: 'Bachelor of Science in IT (BSIT)',
    institute: 'University of Gujrat, Lahore',
    score: '2.4 CGPA',
    year: '2017',
  },
  {
    icon: 'fas fa-school',
    degree: 'FSc (Pre-Engineering)',
    institute: 'Govt Degree College, Narowal',
    score: '60%',
    year: '2012',
  },
  {
    icon: 'fas fa-book',
    degree: 'Matriculation',
    institute: 'Govt C-D Islamia High School, Talwandi Bhindran, Narowal',
    score: '69%',
    year: '2010',
  },
]

const awards = [
  {
    icon: '🏆',
    title: 'Employee of the Month',
    org: 'Muqit.com',
    year: '2021',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic background</p>
          <div className="title-line" />
        </div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">
                <i className={edu.icon} />
              </div>
              <div className="edu-info">
                <h3>{edu.degree}</h3>
                <p className="edu-institute">{edu.institute}</p>
                <div className="edu-meta">
                  <span><i className="fas fa-star" /> {edu.score}</span>
                  <span><i className="fas fa-calendar" /> {edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-title" style={{ marginTop: '80px', marginBottom: '0' }}>
          <h2>Awards</h2>
          <p>Recognition for excellence</p>
          <div className="title-line" />
        </div>

        <div className="awards-row">
          {awards.map((award, i) => (
            <div className="award-card" key={i}>
              <span className="award-icon">{award.icon}</span>
              <h3>{award.title}</h3>
              <p>{award.org}</p>
              <p className="award-year">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
