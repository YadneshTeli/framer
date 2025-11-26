import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 'aperture',
    title: 'Understanding Aperture',
    excerpt: 'Learn how aperture affects your photographs and how to use it creatively.',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80',
    date: 'Dec 15, 2024',
    category: 'Photography Tips',
  },
  {
    id: 'astrophotography',
    title: 'Astrophotography Basics',
    excerpt: 'A complete guide to capturing the night sky and celestial objects.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80',
    date: 'Dec 10, 2024',
    category: 'Tutorials',
  },
  {
    id: 'mastering-composition',
    title: 'Mastering Composition',
    excerpt: 'Discover the rules of composition and when to break them.',
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&q=80',
    date: 'Dec 5, 2024',
    category: 'Photography Tips',
  },
  {
    id: 'shutter-speed',
    title: 'Shutter Speed Explained',
    excerpt: 'Master the art of freezing motion and creating stunning long exposures.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80',
    date: 'Nov 28, 2024',
    category: 'Tutorials',
  },
];

const Blog = () => {
  return (
    <motion.div
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="blog-hero">
        <motion.div
          className="blog-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Blog</h1>
          <p>Photography tips, tutorials, and behind-the-scenes stories</p>
        </motion.div>
      </section>

      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/blog/${post.id}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="category-badge">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-date">{post.date}</span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
