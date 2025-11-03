'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Grid,
  Button,
  Paper,
  Divider,
  Chip,
} from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { products, Product } from '@/data/productsData';

export default function ProductPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((p) => p.id === parseInt(productId, 10));
      setProduct(foundProduct || null);
    }
  }, [productId]);

  if (!product) {
    return (
      <Box component='main' sx={{ py: 8, minHeight: '80vh' }}>
        <Container maxWidth='lg'>
          <Typography variant='h4' sx={{ textAlign: 'center', mb: 4 }}>
            Ürün bulunamadı
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href='/catalog'
              variant='contained'
              startIcon={<ArrowBackIcon />}
            >
              Kataloga Dön
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box component='main' sx={{ py: 6, minHeight: '80vh' }}>
      <Container maxWidth='lg'>
        <Button
          component={Link}
          href='/catalog'
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
          variant='outlined'
        >
          Geri Dön
        </Button>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardMedia
                component='img'
                height='600'
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Chip
                  label={product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  color='primary'
                  sx={{ mb: 2 }}
                />
                <Typography variant='h3' component='h1' sx={{ mb: 2, fontWeight: 700 }}>
                  {product.name}
                </Typography>
                {product.price && (
                  <Typography variant='h5' color='primary.main' sx={{ mb: 2, fontWeight: 600 }}>
                    {product.price} ₺
                  </Typography>
                )}
              </Box>

              <Divider />

              <Box>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                  Açıklama
                </Typography>
                <Typography variant='body1' color='text.secondary' paragraph>
                  {product.description}
                </Typography>
              </Box>

              {product.details && (
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                    Ürün Detayları
                  </Typography>

                  {product.details.material && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 0.5 }}>
                        Malzeme:
                      </Typography>
                      <Typography variant='body1'>{product.details.material}</Typography>
                    </Box>
                  )}

                  {product.details.sizes && (
                    <Box sx={{ mb: 2 }}>
                      <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 1 }}>
                        Bedenler:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {product.details.sizes.map((size) => (
                          <Chip key={size} label={size} variant='outlined' />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {product.details.colors && (
                    <Box>
                      <Typography variant='subtitle2' color='text.secondary' sx={{ mb: 1 }}>
                        Renkler:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {product.details.colors.map((color) => (
                          <Chip key={color} label={color} variant='outlined' />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Paper>
              )}

              <Box sx={{ mt: 2 }}>
                <Button
                  component={Link}
                  href='/contact'
                  variant='contained'
                  size='large'
                  fullWidth
                  sx={{ py: 1.5, textTransform: 'none', fontWeight: 600 }}
                >
                  İletişime Geç
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

