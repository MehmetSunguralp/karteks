'use client';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Safety Vests',
      description: 'High-visibility safety vests for construction and industrial work.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400',
    },
    {
      id: 2,
      name: 'Work Jackets',
      description: 'Durable work jackets designed for harsh weather conditions.',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
    },
    {
      id: 3,
      name: 'Protective Overalls',
      description: 'Full-body protection for factory and industrial environments.',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400',
    },
    {
      id: 4,
      name: 'Work Pants',
      description: 'Comfortable and durable work pants with reinforced knees.',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
          }}
        >
          Our Product Range
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Explore our comprehensive collection of professional workwear
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 240 }}>
                  <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 600 }}>
                    {product.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            component={Link}
            href='/catalog'
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            View Full Catalog
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
