import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let&apos;s work together on your next project</p>
          <div className="title-line" />
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let&apos;s <span>Talk</span></h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-items">
              <a href="tel:03472390012" className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-phone" />
                </div>
                <div className="contact-item-text">
                  <span className="label">Phone</span>
                  <span className="value">03472390012</span>
                </div>
              </a>
              <a href="mailto:waqarmarif@gmail.com" className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="contact-item-text">
                  <span className="label">Email</span>
                  <span className="value">waqarmarif@gmail.com</span>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="contact-item-text">
                  <span className="label">Location</span>
                  <span className="value">Narowal, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Muhammad Ali"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ali@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <i className="fas fa-paper-plane" /> Send Message
              </button>
              {sent && (
                <div className="form-success">
                  <i className="fas fa-check-circle" />
                  Message sent! I will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
