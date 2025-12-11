import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <SectionWrapper>
        <div className="section-content">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hakkımızda
          </motion.h1>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-text">
              <h2>DMS Tekstil'e Hoş Geldiniz</h2>
              <p>
                DMS Tekstil olarak, iş kıyafetleri sektöründe yıllardır kaliteli 
                ürünler ve profesyonel hizmet sunmaktayız. Müşteri memnuniyetini 
                ön planda tutarak, geniş ürün yelpazemiz ve uygun fiyatlarımızla 
                sektörde öncü bir konumdayız.
              </p>
              <p>
                Dayanıklı kumaşlar, modern tasarımlar ve fonksiyonel özelliklerle 
                donatılmış ürünlerimiz, çalışanlarınızın konforunu ve güvenliğini 
                sağlamak için özenle seçilmiştir.
              </p>
            </div>

            <div className="about-values">
              <h2>Değerlerimiz</h2>
              <div className="values-grid">
                {[
                  {
                    title: 'Kalite',
                    description: 'En yüksek kalite standartlarında ürünler sunuyoruz.',
                    icon: '⭐',
                  },
                  {
                    title: 'Güvenilirlik',
                    description: 'Müşterilerimizle uzun vadeli güven ilişkisi kuruyoruz.',
                    icon: '🤝',
                  },
                  {
                    title: 'İnovasyon',
                    description: 'Sürekli gelişen teknoloji ve trendleri takip ediyoruz.',
                    icon: '💡',
                  },
                  {
                    title: 'Müşteri Odaklılık',
                    description: 'Müşteri ihtiyaçlarını anlamak ve karşılamak önceliğimizdir.',
                    icon: '🎯',
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="value-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;

