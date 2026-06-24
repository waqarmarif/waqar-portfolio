import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <button className="navbar-logo" onClick={() => scrollTo('home')} style={{ border: 'none', cursor: 'pointer' }}>MW</button>
          <ul className="navbar-links">
            {links.map(link => (
              <li key={link}>
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); scrollTo(link.toLowerCase()) }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary navbar-cta"
            onClick={() => scrollTo('contact')}
          >
            Hire Me
          </button>
          <button className="hamburger" aria-label="menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
