'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import { products } from '@/data/productsData';

type Category =
  | 'pantolon'
  | 'mont'
  | 'tulum'
  | 'yelek'
  | 'polar'
  | 'sweatshirt'
  | 'tshirt'
  | 'kaban'
  | 'yagmurluk'
  | 'softshell'
  | 'onluk'
  | 'sapka_bere'
  | 'ayakkabi'
  | 'ozel_guvenlik'
  | 'hepsi';

const categories: { value: Category; label: string }[] = [
  { value: 'hepsi', label: 'Hepsi' },
  { value: 'pantolon', label: 'İş Pantolonları' },
  { value: 'mont', label: 'İş Montları' },
  { value: 'tulum', label: 'İş Elbiseleri' },
  { value: 'yelek', label: 'İş Yelekleri' },
  { value: 'polar', label: 'Polar' },
  { value: 'sweatshirt', label: 'Sweatshirt' },
  { value: 'tshirt', label: 'T‑Shirt' },
  { value: 'kaban', label: 'İş Kabanları' },
  { value: 'yagmurluk', label: 'İş Yağmurluğu' },
  { value: 'softshell', label: 'Softshell' },
  { value: 'onluk', label: 'İş Önlükleri' },
  { value: 'sapka_bere', label: 'Şapka ve Bere' },
  { value: 'ayakkabi', label: 'İş Ayakkabıları' },
  { value: 'ozel_guvenlik', label: 'Özel Güvenlik Kıyafetleri' },
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('hepsi');

  const filteredProducts =
    selectedCategory === 'hepsi'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const displayedProducts = [...filteredProducts].sort((a, b) =>
    a.name.localeCompare(b.name, 'tr'),
  );

  return (
    <Box component='main' sx={{ py: 6, minHeight: '80vh' }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h2'
          component='h1'
          sx={{ mb: 4, textAlign: 'center', color: 'text.primary' }}
        >
          Ürün Kataloğu
        </Typography>

        {/* Category Buttons */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category.value)}
              sx={{
                minWidth: 120,
                textTransform: 'none',
                fontWeight: selectedCategory === category.value ? 600 : 400,
              }}
            >
              {category.label}
            </Button>
          ))}
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4}>
          {displayedProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component='img'
                  height='300'
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant='h6'
                    component='h2'
                    sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 3, flexGrow: 1 }}>
                    {product.shortDescription}
                  </Typography>
                  <Button
                    variant='contained'
                    component={Link}
                    href={`/product?id=${product.id}`}
                    fullWidth
                    sx={{
                      mt: 'auto',
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Detay
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProducts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant='h6' color='text.secondary'>
              Bu kategoride ürün bulunmamaktadır.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
