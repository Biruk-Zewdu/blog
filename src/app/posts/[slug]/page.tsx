import Link from 'next/link';

// Mock data for posts
const postsData = {
  'first-post': {
    title: 'The Inaugural Gilded Post',
    content: 'This is the full content of the first post. Welcome to The Gilded Post! We are thrilled to embark on this journey of sharing insightful articles, thought-provoking ideas, and engaging stories with you. Our aim is to provide a platform where quality content shines, offering a fresh perspective on various topics. Stay tuned for more!',
    category: 'Editorial',
    readTime: '3 min read',
    publishDate: 'March 15, 2024',
  },
  'second-post': {
    title: 'A Journey into the Digital Age',
    content: 'In this post, we delve into the profound transformations brought about by the digital age. From the advent of the internet to the rise of artificial intelligence, technology has reshaped our lives in unprecedented ways. We explore the opportunities and challenges that lie ahead in this ever-evolving landscape.',
    category: 'Technology',
    readTime: '5 min read',
    publishDate: 'March 12, 2024',
  },
  'third-post': {
    title: 'The Art of Storytelling in the Modern Era',
    content: 'Storytelling is an ancient art form that continues to captivate audiences across generations. In the modern era, with the proliferation of digital media, the ways in which stories are told have diversified. This post examines the enduring power of narrative and its relevance in today&apos;s fast-paced world.',
    category: 'Culture',
    readTime: '4 min read',
    publishDate: 'March 10, 2024',
  },
};

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsData[slug as keyof typeof postsData];

  if (!post) {
    return (
      <div className="container">
        <div className="article">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h1 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              Post Not Found
            </h1>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              The article you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link href="/" className="btn btn-primary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link href="/" className="back-link">
        ← Back to all articles
      </Link>
      
      <article className="article">
        <header className="article-header">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center', 
            gap: '1rem',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            flexWrap: 'wrap'
          }}>
            <span style={{ 
              background: 'var(--primary-light)', 
              color: 'var(--text-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontWeight: '500'
            }}>
              {post.category}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.publishDate}</span>
          </div>
          
          <h1 className="article-title">{post.title}</h1>
        </header>
        
        <div className="article-content">
          <p>{post.content}</p>
          
          <div style={{ 
            marginTop: '3rem',
            padding: '2rem',
            background: 'var(--surface)',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Enjoyed this article?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Explore more thought-provoking content on The Gilded Post.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-primary">
                More Articles
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Stay Updated
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({
    slug: slug,
  }));
}