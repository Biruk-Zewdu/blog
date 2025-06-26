import Link from 'next/link';

export default function Home() {
  const featuredPosts = [
    { 
      slug: 'first-post', 
      title: 'The Inaugural Gilded Post', 
      excerpt: 'Welcome to the very first post on The Gilded Post! We are excited to share our thoughts and insights with you.',
      readTime: '3 min read',
      category: 'Editorial',
      featured: true,
      author: 'Alexandra Chen',
      publishDate: 'March 15, 2024'
    },
    { 
      slug: 'second-post', 
      title: 'A Journey into the Digital Age', 
      excerpt: 'Exploring the vast and ever-evolving landscape of technology and its impact on our lives.',
      readTime: '5 min read',
      category: 'Technology',
      author: 'Marcus Rodriguez',
      publishDate: 'March 12, 2024'
    },
    { 
      slug: 'third-post', 
      title: 'The Art of Storytelling in the Modern Era', 
      excerpt: 'How narratives continue to shape our understanding of the world, even in a digital age.',
      readTime: '4 min read',
      category: 'Culture',
      author: 'Sofia Nakamura',
      publishDate: 'March 10, 2024'
    },
  ];

  const trendingTopics = [
    { name: 'Artificial Intelligence', count: 23, trend: '+15%' },
    { name: 'Sustainable Living', count: 18, trend: '+22%' },
    { name: 'Remote Work', count: 15, trend: '+8%' },
    { name: 'Digital Privacy', count: 12, trend: '+31%' },
    { name: 'Climate Tech', count: 9, trend: '+45%' }
  ];

  const testimonials = [
    {
      quote: "The Gilded Post consistently delivers thoughtful, well-researched articles that challenge my thinking and broaden my perspective.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "👩‍💼"
    },
    {
      quote: "Quality over quantity - exactly what I want from my reading. Every article is worth the time investment.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "👨‍💻"
    },
    {
      quote: "I've learned more from The Gilded Post in the past year than from any other publication. Truly exceptional content.",
      author: "Dr. Emily Rodriguez",
      role: "Research Scientist",
      avatar: "👩‍🔬"
    }
  ];

  const stats = [
    { number: '500K+', label: 'Monthly Readers', icon: '👥' },
    { number: '1,200+', label: 'Articles Published', icon: '📚' },
    { number: '98%', label: 'Reader Satisfaction', icon: '⭐' },
    { number: '50+', label: 'Expert Contributors', icon: '✍️' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">The Gilded Post</h1>
          <p className="hero-subtitle">
            Thoughts Worth Their Weight in Gold. A curated collection of insightful articles, 
            thought-provoking ideas, and engaging stories where quality content shines.
          </p>
          <div className="hero-cta">
            <Link href="#featured" className="btn btn-primary btn-lg">
              Explore Articles
            </Link>
            <Link href="/about" className="btn btn-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'var(--surface-secondary)', padding: '3rem 0' }}>
        <div className="container">
          <div className="grid grid-4" style={{ gap: '2rem', textAlign: 'center' }}>
            {stats.map((stat, index) => (
              <div key={index}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.25rem',
                  color: 'var(--primary)'
                }}>
                  {stat.number}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="featured" className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Featured Articles</h2>
          <p className="lead">
            Discover our carefully crafted stories and insights that illuminate the world around us.
          </p>
        </div>
        
        <div className="posts-grid">
          {featuredPosts.map((post, index) => (
            <article key={post.slug} className={`card ${post.featured ? 'card-featured' : ''}`}>
              <div className="card-body">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '1rem',
                  fontSize: '0.85rem'
                }}>
                  <span className="badge badge-primary">
                    {post.category}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.excerpt}</p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1.5rem'
                }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    By {post.author} • {post.publishDate}
                  </div>
                  <Link href={`/posts/${post.slug}`} className="btn btn-primary">
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/categories" className="btn btn-secondary btn-lg">
            View All Articles
          </Link>
        </div>
      </section>

      {/* Trending Topics */}
      <section style={{ background: 'var(--surface-secondary)', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Trending Topics</h2>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                See what our readers are most interested in this month.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {trendingTopics.map((topic, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'var(--surface)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)'
                  }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1rem' }}>{topic.name}</h4>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {topic.count} articles
                      </p>
                    </div>
                    <div style={{
                      color: 'var(--success)',
                      fontWeight: '600',
                      fontSize: '0.85rem'
                    }}>
                      {topic.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
                <h3 style={{ marginBottom: '1rem' }}>Weekly Digest</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Get a curated selection of our best articles delivered to your inbox every week.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.9rem'
                    }}
                  />
                  <button className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>What Our Readers Say</h2>
          <p className="lead">Join thousands of satisfied readers worldwide</p>
        </div>
        
        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💬</div>
                <p style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  fontSize: '1.05rem',
                  lineHeight: '1.6'
                }}>
                  "{testimonial.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem' }}>{testimonial.avatar}</div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{testimonial.author}</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Join The Gilded Community</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Connect with like-minded readers, discover new perspectives, and never miss a story worth reading.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Get in Touch
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg" style={{ 
              background: 'rgba(255,255,255,0.1)', 
              color: 'white', 
              borderColor: 'rgba(255,255,255,0.3)' 
            }}>
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
