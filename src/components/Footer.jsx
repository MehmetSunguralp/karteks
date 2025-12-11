import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo_No_Desc.svg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hizmetler: [
      { label: 'Ürünlerimiz', path: '/urunler' },
      { label: 'Hakkımızda', path: '/hakkimizda' },
      { label: 'İletişim', path: '/iletisim' },
    ],
    kategoriler: [
      { label: 'T-Shirt', path: '/urunler?kategori=tshirt' },
      { label: 'Pantolon', path: '/urunler?kategori=pantolon' },
      { label: 'Tulum', path: '/urunler?kategori=tulum' },
      { label: 'Yelek', path: '/urunler?kategori=yelek' },
      { label: 'Mont', path: '/urunler?kategori=mont' },
    ],
  };

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <motion.div
          className='footer-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src={Logo} alt='DMS Tekstil Logo' className='footer-logo' />
          <p className='footer-description'>
            Kaliteli iş kıyafetleri ve profesyonel çözümler sunan DMS Tekstil, sektördeki
            deneyimiyle hizmetinizdedir.
          </p>
        </motion.div>

        <motion.div
          className='footer-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className='footer-title'>Hızlı Linkler</h3>
          <ul className='footer-links'>
            {footerLinks.hizmetler.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className='footer-link'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className='footer-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='footer-title'>Kategoriler</h3>
          <ul className='footer-links'>
            {footerLinks.kategoriler.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className='footer-link'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className='footer-section'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className='footer-title'>İletişim</h3>
          <div className='footer-contact'>
            <a href='emailto:pazarlama@dmstekstil.com'>Email: pazarlama@dmstekstil.com</a>
            <p>Telefon: +90 542 780 79 23</p>
            <p>Adres: Yenişehir Mh. Abdullah Sabri Ülgen Cd. No: 2/7 Merkez/Karaman</p>
          </div>
        </motion.div>
      </div>

      <div className='footer-bottom'>
        <p>
          &copy; {currentYear} DMS Tekstil bir KARTEKS İNŞAAT TEKSTİL SANAYİ TİCARET LİMİTED ŞİRKETİ
          markasıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
