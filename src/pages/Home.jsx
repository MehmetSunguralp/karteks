import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesPreviewSection from '../components/CategoriesPreviewSection';
import SectorsSection from '../components/SectorsSection';
import CTASection from '../components/CTASection';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <HeroSection />
      <FeaturesSection />
      <CategoriesPreviewSection />
      <SectorsSection />
      <CTASection />
    </div>
  );
};

export default Home;
