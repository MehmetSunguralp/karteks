import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Kaliteli Kumaşlar',
      description: 'Yüksek kaliteli, dayanıklı ve nefes alabilir kumaşlar kullanıyoruz.',
      icon: '✨',
    },
    {
      title: 'Geniş Ürün Yelpazesi',
      description: 'Tüm iş kıyafeti ihtiyaçlarınız için çeşitli ürün seçenekleri sunuyoruz.',
      icon: '👔',
    },
    {
      title: 'Uygun Fiyatlar',
      description: 'Kaliteli ürünleri uygun fiyatlarla müşterilerimize sunuyoruz.',
      icon: '💰',
    },
    {
      title: 'Hızlı Teslimat',
      description: 'Siparişlerinizi en kısa sürede güvenle teslim ediyoruz.',
      icon: '🚚',
    },
  ];

  return (
    <SectionWrapper>
      <div className="section-content">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Neden DMS Tekstil?
        </motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;

