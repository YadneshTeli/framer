import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhotoCard from '../components/PhotoCard';
import './Home.css';

// Sample photo data - in a real app, this would come from an API or CMS
const featuredPhotos = [
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    category: 'Landscape',
  },
  {
    id: 'city-lights',
    title: 'City Lights',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    category: 'City',
  },
  {
    id: 'mount-fuji',
    title: 'Mount Fuji',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    category: 'Japan',
  },
  {
    id: 'northern-lights',
    title: 'Northern Lights',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80',
    category: 'Iceland',
  },
  {
    id: 'venice-canals',
    title: 'Venice Canals',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80',
    category: 'Italy',
  },
  {
    id: 'moraine-lake',
    title: 'Moraine Lake',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80',
    category: 'Canada',
  },
];

const locations = [
  { name: 'Japan', count: 12, image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
  { name: 'Iceland', count: 8, image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=400&q=80' },
  { name: 'Italy', count: 10, image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80' },
  { name: 'Canada', count: 15, image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&q=80' },
];

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <motion.img
            src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1920&q=80"
            alt="Hero background"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-cards"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="hero-card card-1"
              animate={{ rotate: -26 }}
              initial={{ y: 100 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80"
                alt="Featured 1"
              />
            </motion.div>
            <motion.div
              className="hero-card card-2"
              animate={{ rotate: -16 }}
              initial={{ y: 100 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80"
                alt="Featured 2"
              />
            </motion.div>
            <motion.div
              className="hero-card card-3"
              animate={{ rotate: -5 }}
              initial={{ y: 100 }}
              transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80"
                alt="Featured 3"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h1>Lighthouse</h1>
            <p>A dynamic photography portfolio showcasing stunning visual content from around the world.</p>
            <Link to="/gallery" className="hero-cta">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Gallery
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Photos Section */}
      <section className="featured-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Featured Photos</h2>
            <p>A curated selection of our best work</p>
          </motion.div>

          <div className="photo-grid">
            {featuredPhotos.map((photo, index) => (
              <PhotoCard key={photo.id} {...photo} delay={index} />
            ))}
          </div>

          <motion.div
            className="section-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/gallery" className="view-all-link">
              View All Photos →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Explore by Location</h2>
            <p>Discover photography from around the world</p>
          </motion.div>

          <div className="locations-grid">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="location-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <Link to={`/gallery?location=${location.name.toLowerCase()}`}>
                  <img src={location.image} alt={location.name} />
                  <div className="location-info">
                    <h3>{location.name}</h3>
                    <span>{location.count} Photos</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
