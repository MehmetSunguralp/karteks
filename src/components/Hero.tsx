'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const heroImage =
  'https://eu.tencatefabrics.com/hs-fs/hubfs/EU%20-%20Images%20website/EU%20-%20Headers/Tecawork%C2%AE-KG-408-Poly-cotton-and-cotton-rich-workwear-fabrics.jpg?width=1920&name=Tecawork%C2%AE-KG-408-Poly-cotton-and-cotton-rich-workwear-fabrics.jpg';

export const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '70vh',
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
        src='https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920'
        alt='Endüstriyel iş kıyafeti arka planı'
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography
          variant='h1'
          sx={{
            color: 'white',
            fontWeight: 900,
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            mb: 2,
          }}
        >
          Profesyonel İş Kıyafeti Çözümleri
        </Typography>
        <Typography
          variant='h5'
          sx={{
            color: 'white',
            mb: 4,
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          }}
        >
          Her Sektör İçin Dayanıklı, Konforlu ve Güvenlik Odaklı İş Kıyafetleri
        </Typography>
        <Button
          variant='contained'
          color='primary'
          size='large'
          component={Link}
          href='/contact'
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 700,
          }}
        >
          Teklif Alın
        </Button>
      </Container>
    </Box>
  );
};
