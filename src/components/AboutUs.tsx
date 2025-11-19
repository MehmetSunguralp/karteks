'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Build, Security, LocalShipping } from '@mui/icons-material';

export const AboutUs = () => {
  const features = [
    {
      icon: <Build sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: 'primary.main' }} />,
      title: 'Üstün Kalite',
      description: 'En yüksek kaliteli malzemeler ve işçilikle üretilmiştir.',
    },
    {
      icon: <Security sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: 'primary.main' }} />,
      title: 'Önce Güvenlik',
      description:
        'Tüm ürünlerimiz uluslararası güvenlik standartlarını ve sertifikalarını karşılar.',
    },
    {
      icon: <LocalShipping sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: 'primary.main' }} />,
      title: 'Hızlı Teslimat',
      description: 'Hızlı teslim süreleri ve konumunuza güvenilir teslimat.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            mb: { xs: 1, md: 2 },
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          Neden Karteks?
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            px: { xs: 2, sm: 0 },
          }}
        >
          İnşaat, fabrika ve teknik alanlar için yüksek kaliteli iş kıyafetleri üretiyoruz.
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
              <Box sx={{ textAlign: 'center' }}>
                {feature.icon}
                <Typography
                  variant='h5'
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    mb: { xs: 0.5, md: 1 },
                    fontWeight: 600,
                    fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
