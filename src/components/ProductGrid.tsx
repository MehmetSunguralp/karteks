'use client';
import { Container, Card, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

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
            <Card
              key={product.id}
              sx={{
                width: {
                  xs: 'calc(50% - 16px)',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(25% - 24px)',
                },
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: '300px',
                    sm: '350px',
                    lg: '500px',
                    xl: '600px',
                  },
                  aspectRatio: {
                    md: '2/3',
                  },
                  cursor: 'pointer',
                  overflow: 'hidden',
                  '&:hover': {
                    '& .product-description': {
                      maxHeight: '100px',
                      opacity: 1,
                      marginTop: '8px',
                    },
                    '& .product-overlay': {
                      background:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%)',
                    },
                    '& .product-image': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='product-image'
                  style={{ objectFit: 'cover', transition: 'transform 0.2s ease-in-out' }}
                />
                {/* Gradient overlay for better text readability */}
                <Box
                  className='product-overlay'
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
                    p: 2,
                    pt: 3,
                    transition: 'background 0.2s ease-in-out',
                  }}
                >
                  {/* Title - always visible */}
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      mb: 1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  {/* Description - appears on hover */}
                  <Typography
                    variant='body2'
                    className='product-description'
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      maxHeight: 0,
                      opacity: 0,
                      overflow: 'hidden',
                      transition:
                        'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out, margin-top 0.4s ease-in-out',
                      marginTop: 0,
                    }}
                  >
                    {product.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
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
