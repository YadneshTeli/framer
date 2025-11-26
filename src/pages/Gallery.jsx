import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoCard from '../components/PhotoCard';
import './Gallery.css';

const allPhotos = [
  { id: 'golden-hour', title: 'Golden Hour', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', category: 'Landscape' },
  { id: 'city-lights', title: 'City Lights', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', category: 'City' },
  { id: 'mount-fuji', title: 'Mount Fuji', image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80', category: 'Japan' },
  { id: 'northern-lights', title: 'Northern Lights', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80', category: 'Iceland' },
  { id: 'venice-canals', title: 'Venice Canals', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80', category: 'Italy' },
  { id: 'moraine-lake', title: 'Moraine Lake', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', category: 'Canada' },
  { id: 'tokyo-night', title: 'Tokyo Night', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', category: 'Japan' },
  { id: 'sunrise-surf', title: 'Sunrise Surf', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80', category: 'Landscape' },
  { id: 'street-portrait', title: 'Street Portrait', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', category: 'People' },
  { id: 'blue-lagoon', title: 'Blue Lagoon', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80', category: 'Iceland' },
  { id: 'amalfi-coast', title: 'Amalfi Coast', image: 'https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=600&q=80', category: 'Italy' },
  { id: 'banff-sunset', title: 'Banff Sunset', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80', category: 'Canada' },
  { id: 'new-york-skyline', title: 'New York Skyline', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80', category: 'City' },
  { id: 'desert-dunes', title: 'Desert Dunes', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', category: 'Landscape' },
  { id: 'cherry-blossoms', title: 'Cherry Blossoms', image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80', category: 'Japan' },
];

const categories = ['All', 'Landscape', 'City', 'Japan', 'Iceland', 'Italy', 'Canada', 'People'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All'
    ? allPhotos
    : allPhotos.filter(photo => photo.category === activeCategory);

  return (
    <motion.div
      className="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="gallery-hero">
        <motion.div
          className="gallery-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Gallery</h1>
          <p>Explore our complete collection of photography</p>
        </motion.div>
      </section>

      <section className="gallery-content">
        <div className="gallery-container">
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="gallery-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPhotos.map((photo, index) => (
                <PhotoCard key={photo.id} {...photo} delay={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPhotos.length === 0 && (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No photos found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
