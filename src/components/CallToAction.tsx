'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #ff8c00 0%, #ff6f00 100%)',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            fontWeight: 700,
            mb: 2,
          }}
        >
          Ready to Equip Your Team?
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            mb: 4,
          }}
        >
          Contact us today for custom orders and bulk pricing
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            size='large'
            component={Link}
            href='/contact'
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Contact Us
          </Button>
          <Button
            variant='outlined'
            size='large'
            component={Link}
            href='/catalog'
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 700,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            View Catalog
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
