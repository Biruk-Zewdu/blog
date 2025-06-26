import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTop from "./components/ScrollToTop";
import ReadingProgress from "./components/ReadingProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Gilded Post - Thoughts Worth Their Weight in Gold",
  description: "A world-class digital publication featuring curated articles, thought-provoking ideas, and engaging stories. Where quality content shines and minds meet.",
  keywords: ["blog", "articles", "stories", "insights", "thoughts", "culture", "technology", "lifestyle", "editorial", "premium content"],
  authors: [{ name: "The Gilded Post Editorial Team" }],
  creator: "The Gilded Post",
  publisher: "The Gilded Post",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thegildedpost.com'),
  openGraph: {
    title: "The Gilded Post - Thoughts Worth Their Weight in Gold",
    description: "A world-class digital publication featuring curated articles and thought-provoking content.",
    type: "website",
    locale: "en_US",
    siteName: "The Gilded Post",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gilded Post",
    description: "Thoughts Worth Their Weight in Gold",
    creator: "@thegildedpost",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            The Gilded Post
          </Link>
          <nav>
            <ul className="nav-links">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="nav-link">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>The Gilded Post</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Thoughts worth their weight in gold. A curated collection of insightful articles 
              and engaging stories where quality content shines.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#" style={{ fontSize: '1.25rem' }} title="Twitter">🐦</Link>
              <Link href="#" style={{ fontSize: '1.25rem' }} title="LinkedIn">💼</Link>
              <Link href="#" style={{ fontSize: '1.25rem' }} title="Instagram">📸</Link>
              <Link href="#" style={{ fontSize: '1.25rem' }} title="YouTube">📹</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Content</h3>
            <ul className="footer-links">
              <li><Link href="/">Latest Articles</Link></li>
              <li><Link href="/categories">Browse Categories</Link></li>
              <li><Link href="/categories/technology">Technology</Link></li>
              <li><Link href="/categories/culture">Culture</Link></li>
              <li><Link href="/categories/lifestyle">Lifestyle</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/advertise">Advertise</Link></li>
              <li><Link href="/press">Press Kit</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
              <li><Link href="/dmca">DMCA</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Get our best articles delivered to your inbox weekly.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Enter email"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  background: 'var(--background)'
                }}
              />
              <button className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2024 The Gilded Post. All rights reserved. Made with ❤️ for readers who appreciate quality.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thegildedpost.com" />
        <link rel="alternate" type="application/rss+xml" title="The Gilded Post RSS Feed" href="/rss.xml" />
        <meta name="theme-color" content="#c9a96e" />
        <meta name="msapplication-TileColor" content="#c9a96e" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReadingProgress />
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}