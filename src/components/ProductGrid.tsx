'use client';
import { Container, Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Güvenlik Yelekleri',
      description: 'İnşaat ve endüstriyel çalışma için yüksek görünürlüklü güvenlik yelekleri.',
      image: 'https://images.unsplash.com/photo-1640238490074-c00b1353c67f?w=400',
    },
    {
      id: 2,
      name: 'İş Montları',
      description: 'Zorlu hava koşulları için tasarlanmış dayanıklı iş montları.',
      image: 'https://images.unsplash.com/photo-1552327359-d86398116072?w=400',
    },
    {
      id: 3,
      name: 'Koruyucu Tulumlar',
      description: 'Fabrika ve endüstriyel ortamlar için tam vücut koruması.',
      image: 'https://images.unsplash.com/photo-1517505246386-7b6def3b0ef6?w=400',
    },
    {
      id: 4,
      name: 'İş Pantolonları',
      description: 'Takviyeli dizlere sahip konforlu ve dayanıklı iş pantolonları.',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400',
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
          Ürün Yelpazemiz
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Kapsamlı profesyonel iş kıyafeti koleksiyonumuzu keşfedin
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
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
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
            Tüm Kataloğu Görüntüle
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
