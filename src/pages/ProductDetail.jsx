import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/productsData';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="product-not-found">
          <h2>Ürün bulunamadı</h2>
          <Link to="/urunler" className="back-button">
            Ürünlere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <motion.button
          className="back-button"
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ← Geri Dön
        </motion.button>

        <div className="product-detail-content">
          <motion.div
            className="product-image-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="product-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>

            <div className="product-price-section">
              <span className="product-detail-category">{product.category}</span>
            </div>

            {product.details && (
              <div className="product-details">
                <h2 className="details-title">Ürün Detayları</h2>

                {product.details.material && (
                  <div className="detail-item">
                    <span className="detail-label">Kumaş:</span>
                    <span className="detail-value">{product.details.material}</span>
                  </div>
                )}

                {product.details.sizes && (
                  <div className="detail-item">
                    <span className="detail-label">Bedenler:</span>
                    <div className="sizes-list">
                      {product.details.sizes.map((size) => (
                        <span key={size} className="size-badge">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.details.colors && (
                  <div className="detail-item">
                    <span className="detail-label">Renkler:</span>
                    <div className="colors-list">
                      {product.details.colors.map((color) => (
                        <span key={color} className="color-badge">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.details.features && (
                  <div className="detail-item">
                    <span className="detail-label">Özellikler:</span>
                    <ul className="features-list">
                      {product.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="product-actions">
              <button className="contact-button">İletişime Geçin</button>
              <Link to="/urunler" className="view-all-button">
                Tüm Ürünleri Gör
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

