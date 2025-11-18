'use client';
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import { CatalogCard } from './CatalogCard';

export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Güvenlik Yelekleri',
      description: 'İnşaat ve endüstriyel çalışma için yüksek görünürlüklü güvenlik yelekleri.',
      image: 'https://cdn.ecommercedns.uk/files/6/263846/6/42899866/rg469-ls00-2024.jpg',
    },
    {
      id: 2,
      name: 'İş Montları',
      description: 'Zorlu hava koşulları için tasarlanmış dayanıklı iş montları.',
      image:
        'https://formatek.com.tr/wp-content/uploads/2025/09/formatek-katalog-20254-1-10-600x600.jpg',
    },
    {
      id: 3,
      name: 'Koruyucu Tulumlar',
      description: 'Fabrika ve endüstriyel ortamlar için tam vücut koruması.',
      image: 'https://cobra-workwear.co.uk/cdn/shop/collections/dv002.jpg?v=1700128618&width=1296',
    },
    {
      id: 4,
      name: 'İş Pantolonları',
      description: 'Takviyeli dizlere sahip konforlu ve dayanıklı iş pantolonları.',
      image:
        'https://insulationmerchant.com/cdn/shop/files/TIMCO_Workman_Trousers_Grey_Black_-_Multiple_Sizes_Insulation_Merchant_3.jpg?v=1738316252&width=750',
    },
  ];

  return (
    <Box sx={{ pt: 8, pb: 0 }}>
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {products.map((product) => (
            <CatalogCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              variant="homepage"
            />
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            component={Link}
            href='/catalog'
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              color: 'white',
            }}
          >
            Tüm Kataloğu Görüntüle
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
