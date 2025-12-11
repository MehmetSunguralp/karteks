import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './CTASection.css';

const CTASection = () => {
  return (
    <SectionWrapper className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cta-title">İş Kıyafetleriniz İçin Hazır mısınız?</h2>
        <p className="cta-text">
          Kaliteli ürünlerimiz ve profesyonel hizmetimizle yanınızdayız.
        </p>
        <div className="cta-buttons">
          <Link to="/urunler" className="cta-primary-button">
            Ürünleri İncele
          </Link>
          <Link to="/iletisim" className="cta-secondary-button">
            İletişime Geçin
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default CTASection;

