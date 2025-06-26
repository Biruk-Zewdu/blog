import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      title: "General Inquiries",
      email: "hello@thegildedpost.com",
      description: "For general questions, partnerships, and collaboration opportunities.",
      icon: "📧"
    },
    {
      title: "Editorial",
      email: "editorial@thegildedpost.com", 
      description: "Story pitches, guest writing opportunities, and editorial feedback.",
      icon: "✍️"
    },
    {
      title: "Technical Support",
      email: "support@thegildedpost.com",
      description: "Website issues, subscription problems, and technical assistance.",
      icon: "🛠️"
    },
    {
      title: "Press & Media",
      email: "press@thegildedpost.com",
      description: "Media inquiries, press releases, and interview requests.",
      icon: "📺"
    }
  ];

  const socialLinks = [
    { platform: "Twitter", handle: "@thegildedpost", url: "#", icon: "🐦" },
    { platform: "LinkedIn", handle: "The Gilded Post", url: "#", icon: "💼" },
    { platform: "Instagram", handle: "@thegildedpost", url: "#", icon: "📸" },
    { platform: "YouTube", handle: "The Gilded Post", url: "#", icon: "📹" }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Whether you have a story idea, feedback, or just want to say hello, 
            we're here to connect with our amazing community.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
            <form className="card">
              <div className="card-body">
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition-base)',
                      background: 'var(--background)'
                    }}
                    placeholder="Your full name"
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Email *
                  </label>
                  <input 
                    type="email" 
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      transition: 'border-color var(--transition-base)',
                      background: 'var(--background)'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Subject
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    background: 'var(--background)'
                  }}>
                    <option>General Inquiry</option>
                    <option>Story Pitch</option>
                    <option>Partnership</option>
                    <option>Technical Issue</option>
                    <option>Press/Media</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    Message *
                  </label>
                  <textarea 
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      background: 'var(--background)'
                    }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Other Ways to Reach Us</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {contactMethods.map((method, index) => (
                <div key={index} className="card">
                  <div className="card-body" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{method.icon}</span>
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{method.title}</h3>
                    </div>
                    <p style={{ 
                      color: 'var(--primary)', 
                      fontWeight: '600', 
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem'
                    }}>
                      {method.email}
                    </p>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Follow Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.url}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-base)',
                    textDecoration: 'none'
                  }}
                  className="social-link"
                >
                  <span style={{ fontSize: '1.25rem' }}>{social.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                      {social.platform}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {social.handle}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-secondary)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Frequently Asked Questions</h2>
            <p className="lead">Quick answers to common questions</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ marginBottom: '1rem' }}>
              <div className="card-body">
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>How can I submit a guest article?</h3>
                <p style={{ margin: 0 }}>
                  Send your pitch to editorial@thegildedpost.com with a brief outline, your bio, and 2-3 
                  writing samples. We'll review and get back to you within 48 hours.
                </p>
              </div>
            </div>
            
            <div className="card" style={{ marginBottom: '1rem' }}>
              <div className="card-body">
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>Do you accept sponsored content?</h3>
                <p style={{ margin: 0 }}>
                  We're selective about partnerships and only work with brands that align with our values. 
                  Contact hello@thegildedpost.com for partnership inquiries.
                </p>
              </div>
            </div>
            
            <div className="card" style={{ marginBottom: '1rem' }}>
              <div className="card-body">
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>How often do you publish new content?</h3>
                <p style={{ margin: 0 }}>
                  We publish 2-3 high-quality articles per week. Quality over quantity is our motto—
                  every piece is carefully crafted and thoroughly researched.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.1rem' }}>Can I republish your articles?</h3>
                <p style={{ margin: 0 }}>
                  Please contact us at hello@thegildedpost.com to discuss republishing rights. 
                  We're generally open to syndication with proper attribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>We're Here to Help</h2>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          We aim to respond to all inquiries within 24 hours during business days.
        </p>
        <div className="grid grid-3" style={{ gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Quick Response</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Most emails answered within 4 hours</p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Personal Touch</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Real humans, not bots</p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Helpful Solutions</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>We go above and beyond</p>
          </div>
        </div>
      </section>
    </>
  );
} 