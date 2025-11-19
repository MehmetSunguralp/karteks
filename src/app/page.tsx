import { Box } from '@mui/material';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { ProductGrid } from '@/components/ProductGrid';
import { Industries } from '@/components/Industries';
import { CallToAction } from '@/components/CallToAction';
import { FadeInSection } from '@/components/FadeInSection';

const Home = () => {
  return (
    <Box component='main' sx={{ overflowX: 'hidden', width: '100%' }}>
      <Hero />
      <FadeInSection delay={400} direction='right' threshold={0.5}>
        <AboutUs />
      </FadeInSection>
      <FadeInSection delay={400} direction='left'>
        <ProductGrid />
      </FadeInSection>
      <FadeInSection delay={400} direction='right'>
        <Industries />
      </FadeInSection>
      <FadeInSection delay={400} direction='left'>
        <CallToAction />
      </FadeInSection>
    </Box>
  );
};

export default Home;
