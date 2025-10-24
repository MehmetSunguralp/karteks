import { Box } from '@mui/material';

// Components
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { AboutUs } from '@/components/AboutUs';
import { ProductGrid } from '@/components/ProductGrid';
import { Industries } from '@/components/Industries';
import { CallToAction } from '@/components/CallToAction';

const Home = () => {
  return (
    <Box component='main'>
      <Hero />
      {/* <AboutUs /> */}
      <ProductGrid />
      {/* <Industries /> */}
      <CallToAction />
    </Box>
  );
};

export default Home;
