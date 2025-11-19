'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from './FadeInSection';

const heroImage =
  'https://eu.tencatefabrics.com/hs-fs/hubfs/EU%20-%20Images%20website/EU%20-%20Headers/Tecawork%C2%AE-KG-408-Poly-cotton-and-cotton-rich-workwear-fabrics.jpg?width=1920&name=Tecawork%C2%AE-KG-408-Poly-cotton-and-cotton-rich-workwear-fabrics.jpg';

export const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Image
        src='https://www.cws.com/sites/default/files/2024-11/cws_workwear_header.png'
        alt='Endüstriyel iş kıyafeti arka planı'
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <Container
        sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: { xs: 2, sm: 3 } }}
      >
        <FadeInSection delay={200}>
          <Typography
            variant='h1'
            sx={{
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 900,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
            }}
          >
            İş Güvenliğiniz İçin Profesyonel Çözümler
          </Typography>
          <Typography
            variant='h5'
            sx={{
              color: 'white',
              mb: { xs: 3, md: 4 },
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
              px: { xs: 1, sm: 0 },
            }}
          >
            Her Sektör İçin Dayanıklı, Konforlu ve Güvenlik Odaklı İş Kıyafetleri
          </Typography>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            component={Link}
            href='/contact'
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
              fontWeight: 700,
              color: 'white',
            }}
          >
            Teklif Alın
          </Button>
        </FadeInSection>
      </Container>
    </Box>
  );
};
