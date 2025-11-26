import { motion } from 'framer-motion';
import './Shop.css';

const products = [
  {
    id: 'presets-pack-2024',
    title: 'Presets Pack 2024',
    description: 'Professional Lightroom presets for stunning photo edits.',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
    type: 'Digital',
  },
  {
    id: 'mastering-lightroom-classic',
    title: 'Mastering Lightroom Classic',
    description: 'Complete video course on Lightroom Classic mastery.',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80',
    type: 'Course',
  },
  {
    id: 'mastering-lightroom-cc',
    title: 'Mastering Lightroom CC',
    description: 'Learn the cloud-based version of Lightroom from scratch.',
    price: '$69',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80',
    type: 'Course',
  },
  {
    id: 'mastering-photoshop',
    title: 'Mastering Photoshop',
    description: 'Advanced Photoshop techniques for photographers.',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
    type: 'Course',
  },
  {
    id: 'presets-pack-2023',
    title: 'Presets Pack 2023',
    description: 'Classic presets collection with timeless editing styles.',
    price: '$39',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
    type: 'Digital',
  },
  {
    id: 'presets-pack-2022',
    title: 'Presets Pack 2022',
    description: 'Essential presets for beginners and professionals.',
    price: '$29',
    image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=600&q=80',
    type: 'Digital',
  },
];

const Shop = () => {
  return (
    <motion.div
      className="shop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="shop-hero">
        <motion.div
          className="shop-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Shop</h1>
          <p>Presets, courses, and resources to elevate your photography</p>
        </motion.div>
      </section>

      <section className="shop-content">
        <div className="shop-container">
          <div className="shop-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="product-image">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="product-type">{product.type}</span>
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <motion.button
                      className="buy-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Shop;
