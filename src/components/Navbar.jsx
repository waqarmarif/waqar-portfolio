import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">MW</a>
          <ul className="navbar-links">
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary navbar-cta">Hire Me</a>
          <button className="hamburger" aria-label="menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
