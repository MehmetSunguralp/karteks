'use client';
import { Box, Container, Typography, Grid, IconButton, Divider, Stack } from '@mui/material';
import { Instagram, Facebook, LinkedIn, Phone, Email, LocationOn } from '@mui/icons-material';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'background.paper',
        pt: 6,
        pb: 3,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 700,
                mb: 2,
                color: 'primary.main',
              }}
            >
              KARTEKS
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
              Profesyonel iş kıyafetleri üretiminde güvenilir çözüm ortağınız.
            </Typography>
            <Stack direction='row' spacing={1}>
              <IconButton
                component='a'
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#E4405F',
                    backgroundColor: 'rgba(228, 64, 95, 0.1)',
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component='a'
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#1877F2',
                    backgroundColor: 'rgba(24, 119, 242, 0.1)',
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component='a'
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: '#0A66C2',
                    backgroundColor: 'rgba(10, 102, 194, 0.1)',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
              Hızlı Erişim
            </Typography>
            <Stack spacing={1}>
              <Link href='/' style={{ textDecoration: 'none' }}>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    cursor: 'pointer',
                  }}
                >
                  Anasayfa
                </Typography>
              </Link>
              <Link href='/catalog' style={{ textDecoration: 'none' }}>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    cursor: 'pointer',
                  }}
                >
                  Katalog
                </Typography>
              </Link>
              <Link href='/about' style={{ textDecoration: 'none' }}>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    cursor: 'pointer',
                  }}
                >
                  Hakkımızda
                </Typography>
              </Link>
              <Link href='/contact' style={{ textDecoration: 'none' }}>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                    cursor: 'pointer',
                  }}
                >
                  İletişim
                </Typography>
              </Link>
            </Stack>
          </Grid>

          {/* Products */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
              Ürünlerimiz
            </Typography>
            <Stack spacing={1}>
              <Typography variant='body2' color='text.secondary'>
                Güvenlik Yelekleri
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                İş Montları
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Koruyucu Tulumlar
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                İş Pantolonları
              </Typography>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>
              İletişim
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 18, color: 'primary.main' }} />
                <Typography variant='body2' color='text.secondary'>
                  +90 542 780 79 23
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 18, color: 'primary.main' }} />
                <Typography variant='body2' color='text.secondary'>
                  info@karteks.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn sx={{ fontSize: 18, color: 'primary.main' }} />
                <Typography variant='body2' color='text.secondary'>
                  Yenişehir Mh. Abdullah Sabri Ülgen Cd. No: 2/7 Merkez/Karaman
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant='body2' color='text.secondary' sx={{ textAlign: 'center' }}>
            © {currentYear} Karteks. Tüm hakları saklıdır.
          </Typography>
          <Stack direction='row' spacing={2}>
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
                cursor: 'pointer',
              }}
            >
              Gizlilik Politikası
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
                cursor: 'pointer',
              }}
            >
              Kullanım Koşulları
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
