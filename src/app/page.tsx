import { Box } from '@mui/material';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { ProductGrid } from '@/components/ProductGrid';
import { Industries } from '@/components/Industries';
import { CallToAction } from '@/components/CallToAction';

const Home = () => {
  return (
    <Box component='main'>
      <Hero />
      <AboutUs />
      <ProductGrid />
      <Industries />
      <CallToAction />
    </Box>
  );
};

export default Home;
