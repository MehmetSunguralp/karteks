import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import './SectorsSection.css';

const SectorsSection = () => {
  const sectors = [
    { name: 'İnşaat', icon: '🏗️' },
    { name: 'Otomotiv', icon: '🚗' },
    { name: 'Gıda', icon: '🍽️' },
    { name: 'Sağlık', icon: '⚕️' },
    { name: 'Güvenlik', icon: '🛡️' },
    { name: 'Lojistik', icon: '📦' },
  ];

  return (
    <SectionWrapper className='sectors-section'>
      <div className='section-content'>
        <motion.h2
          className='section-title'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hizmet Verdiğimiz Sektörler
        </motion.h2>
        <div className='sectors-grid'>
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              className='sector-card'
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className='sector-icon'>{sector.icon}</div>
              <h3 className='sector-name'>{sector.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectorsSection;
