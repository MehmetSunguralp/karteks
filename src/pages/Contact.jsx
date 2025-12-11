import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-page'>
      <SectionWrapper>
        <div className='section-content'>
          <motion.h1
            className='page-title'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            İletişim
          </motion.h1>

          <div className='contact-content'>
            <motion.div
              className='contact-info'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Bize Ulaşın</h2>
              <p>
                Sorularınız, önerileriniz veya sipariş talepleriniz için bizimle iletişime
                geçebilirsiniz.
              </p>

              <div className='contact-details'>
                <div className='contact-item'>
                  <span className='contact-icon'>📧</span>
                  <div>
                    <h3>Email</h3>
                    <a href='emailto:pazarlama@dmstekstil.com'>pazarlama@dmstekstil.com</a>
                  </div>
                </div>

                <div className='contact-item'>
                  <span className='contact-icon'>📞</span>
                  <div>
                    <h3>Telefon</h3>
                    <p>+90 542 780 79 23</p>
                  </div>
                </div>

                <div className='contact-item'>
                  <span className='contact-icon'>📍</span>
                  <div>
                    <h3>Adres</h3>
                    <p>Adres: Yenişehir Mh. Abdullah Sabri Ülgen Cd. No: 2/7 Merkez/Karaman</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
