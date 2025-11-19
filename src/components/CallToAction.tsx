'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: 'primary.main',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: { xs: 1.5, md: 2 },
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            px: { xs: 2, sm: 0 },
          }}
        >
          Ekibinizi Donatmaya Hazır mısınız?
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            mb: { xs: 3, md: 4 },
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            px: { xs: 2, sm: 0 },
          }}
        >
          Özel siparişler ve toplu fiyatlandırma için bugün bize ulaşın
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1.5, sm: 2 },
            justifyContent: 'center',
            flexWrap: 'wrap',
            px: { xs: 2, sm: 0 },
          }}
        >
          <Button
            variant='contained'
            size='medium'
            component={Link}
            href='/contact'
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 700,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            İletişim
          </Button>
          <Button
            variant='outlined'
            size='medium'
            component={Link}
            href='/catalog'
            sx={{
              borderColor: 'white',
              color: 'white',
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 700,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Katalog Görüntüle
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
