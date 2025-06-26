import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    {
      name: "Technology",
      slug: "technology",
      description: "Exploring the latest in tech, AI, and digital innovation",
      articleCount: 47,
      color: "#3498db",
      icon: "💻"
    },
    {
      name: "Culture",
      slug: "culture", 
      description: "Art, literature, society, and the human experience",
      articleCount: 32,
      color: "#e74c3c",
      icon: "🎭"
    },
    {
      name: "Business",
      slug: "business",
      description: "Entrepreneurship, strategy, and the future of work",
      articleCount: 28,
      color: "#2ecc71",
      icon: "📈"
    },
    {
      name: "Science",
      slug: "science",
      description: "Discoveries, research, and scientific breakthroughs",
      articleCount: 23,
      color: "#9b59b6",
      icon: "🔬"
    },
    {
      name: "Editorial",
      slug: "editorial",
      description: "Our thoughts, opinions, and perspectives on current events",
      articleCount: 18,
      color: "#f39c12",
      icon: "✍️"
    },
    {
      name: "Lifestyle",
      slug: "lifestyle",
      description: "Health, wellness, and living your best life",
      articleCount: 35,
      color: "#1abc9c",
      icon: "🌱"
    },
    {
      name: "Travel",
      slug: "travel",
      description: "Adventures, destinations, and cultural exploration",
      articleCount: 29,
      color: "#e67e22",
      icon: "✈️"
    },
    {
      name: "Food",
      slug: "food",
      description: "Culinary adventures, recipes, and food culture",
      articleCount: 21,
      color: "#ff6b6b",
      icon: "🍽️"
    }
  ];

  const featuredArticles = [
    {
      title: "The Future of Artificial Intelligence in Creative Industries",
      category: "Technology",
      excerpt: "How AI is reshaping design, writing, and artistic expression...",
      readTime: "8 min read",
      slug: "ai-creative-industries"
    },
    {
      title: "Sustainable Living in Urban Environments",
      category: "Lifestyle", 
      excerpt: "Practical tips for reducing your carbon footprint in the city...",
      readTime: "6 min read",
      slug: "sustainable-urban-living"
    },
    {
      title: "The Renaissance of Independent Bookstores",
      category: "Culture",
      excerpt: "Why local bookshops are thriving in the digital age...",
      readTime: "5 min read", 
      slug: "independent-bookstores"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Explore by Category</h1>
          <p className="hero-subtitle">
            Discover curated content organized by topics that matter to you. 
            From technology to culture, find your next great read.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Browse Categories</h2>
          <p className="lead">Find articles that match your interests</p>
        </div>
        
        <div className="grid grid-auto-fit" style={{ gap: '2rem' }}>
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={`/categories/${category.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="card" style={{ 
                height: '100%',
                transition: 'all var(--transition-base)',
                cursor: 'pointer'
              }}>
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    background: `${category.color}20`,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    {category.icon}
                  </div>
                  
                  <h3 style={{ 
                    marginBottom: '0.75rem',
                    color: category.color
                  }}>
                    {category.name}
                  </h3>
                  
                  <p style={{ 
                    marginBottom: '1rem',
                    fontSize: '0.95rem'
                  }}>
                    {category.description}
                  </p>
                  
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: `${category.color}15`,
                    color: category.color,
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {category.articleCount} articles
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles Section */}
      <section style={{ background: 'var(--surface-secondary)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Featured Articles</h2>
            <p className="lead">Hand-picked stories from across our categories</p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {featuredArticles.map((article, index) => (
              <Link 
                key={index}
                href={`/posts/${article.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article className="card card-featured">
                  <div className="card-body">
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      marginBottom: '1rem',
                      fontSize: '0.85rem'
                    }}>
                      <span className="badge badge-primary">
                        {article.category}
                      </span>
                      <span style={{ color: 'var(--text-muted)' }}>
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                      {article.title}
                    </h3>
                    
                    <p className="card-text">
                      {article.excerpt}
                    </p>
                    
                    <div className="btn btn-primary">
                      Read Article →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Our Content Library</h2>
        <p className="lead" style={{ marginBottom: '3rem' }}>
          A growing collection of thoughtfully curated content
        </p>
        
        <div className="grid grid-4" style={{ gap: '2rem' }}>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem',
              color: 'var(--primary)'
            }}>
              {categories.reduce((total, cat) => total + cat.articleCount, 0)}+
            </div>
            <p>Total Articles</p>
          </div>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem',
              color: 'var(--primary)'
            }}>
              {categories.length}
            </div>
            <p>Categories</p>
          </div>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem',
              color: 'var(--primary)'
            }}>
              12+
            </div>
            <p>Writers</p>
          </div>
          <div>
            <div style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '0.5rem',
              color: 'var(--primary)'
            }}>
              500K+
            </div>
            <p>Monthly Readers</p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay Updated</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Get the best articles from your favorite categories delivered to your inbox weekly.
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="btn btn-secondary">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
} 