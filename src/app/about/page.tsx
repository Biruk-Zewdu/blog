import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: "Alexandra Chen",
      role: "Editor-in-Chief",
      bio: "With over a decade of experience in digital journalism, Alexandra brings a passion for storytelling and a keen eye for quality content.",
      image: "👩‍💼",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Writer",
      bio: "Marcus specializes in technology and culture, weaving complex topics into engaging narratives that resonate with modern readers.",
      image: "👨‍💻",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Sofia Nakamura",
      role: "Creative Director",
      bio: "Sofia combines visual storytelling with editorial excellence, ensuring every piece on The Gilded Post is both beautiful and meaningful.",
      image: "👩‍🎨",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "Every article is meticulously crafted and thoroughly researched to provide genuine value to our readers.",
      icon: "✨"
    },
    {
      title: "Authenticity",
      description: "We believe in honest, transparent storytelling that reflects real experiences and genuine insights.",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and fresh perspectives, constantly evolving how we tell stories in the digital age.",
      icon: "🚀"
    },
    {
      title: "Community",
      description: "Our readers are at the heart of everything we do. We create content that sparks meaningful conversations.",
      icon: "🤝"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">About The Gilded Post</h1>
          <p className="hero-subtitle">
            Where exceptional stories meet exceptional readers. We&apos;re more than a blog—we&apos;re a 
            community dedicated to exploring ideas that matter.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container" style={{ padding: '4rem 0' }}>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              In an age of information overload, we curate content that truly matters. Our mission is to 
              create a space where thoughtful writing meets curious minds, where complex ideas are made 
              accessible, and where every story has the power to inspire, educate, or transform.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              We believe that great content should be like gold—rare, valuable, and enduring. That&apos;s why 
              every piece we publish undergoes rigorous editorial review and reflects our commitment to 
              excellence in digital storytelling.
            </p>
          </div>
          <div style={{ 
            background: 'var(--gradient-primary)', 
            borderRadius: 'var(--radius-2xl)',
            padding: '3rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📖</div>
            <h3 style={{ color: 'white', marginBottom: '1rem' }}>1M+</h3>
            <p style={{ opacity: '0.9', fontSize: '1.1rem' }}>Stories that have sparked conversations worldwide</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ background: 'var(--surface-secondary)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>What We Stand For</h2>
            <p className="lead">The principles that guide everything we create</p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {values.map((value, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div className="card-body">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                  <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Meet Our Team</h2>
          <p className="lead">The passionate minds behind The Gilded Post</p>
        </div>
        
        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {team.map((member, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <div className="card-body">
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1rem',
                  background: 'var(--surface-secondary)',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  {member.image}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ 
                  color: 'var(--primary)', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {member.role}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>{member.bio}</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <Link href={member.social.twitter} className="btn btn-sm btn-outline">
                    Twitter
                  </Link>
                  <Link href={member.social.linkedin} className="btn btn-sm btn-outline">
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        background: 'var(--gradient-primary)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '3rem' }}>Our Impact</h2>
          <div className="grid grid-4" style={{ gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>500K+</div>
              <p style={{ opacity: '0.9' }}>Monthly Readers</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1,200+</div>
              <p style={{ opacity: '0.9' }}>Published Articles</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>50+</div>
              <p style={{ opacity: '0.9' }}>Contributing Writers</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>98%</div>
              <p style={{ opacity: '0.9' }}>Reader Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Join Our Community?</h2>
        <p className="lead" style={{ marginBottom: '2rem' }}>
          Discover stories that matter, insights that inspire, and ideas that transform.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary btn-lg">
            Explore Articles
          </Link>
          <Link href="/contact" className="btn btn-secondary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
} 