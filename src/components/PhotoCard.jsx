import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PhotoCard.css';

const PhotoCard = ({ id, title, image, category, delay = 0 }) => {
  return (
    <motion.div
      className="photo-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link to={`/gallery/${id}`} className="photo-card-link">
        <div className="photo-card-image">
          <motion.img
            src={image}
            alt={title}
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="photo-card-overlay">
            <motion.div
              className="overlay-content"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="category-tag">{category}</span>
              <h3>{title}</h3>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PhotoCard;
