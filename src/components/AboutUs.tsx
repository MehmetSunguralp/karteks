'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Build, Security, LocalShipping } from '@mui/icons-material';

export const AboutUs = () => {
  const features = [
    {
      icon: <Build sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Üstün Kalite',
      description: 'En yüksek kaliteli malzemeler ve işçilikle üretilmiştir.',
    },
    {
      icon: <Security sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Önce Güvenlik',
      description: 'Tüm ürünlerimiz uluslararası güvenlik standartlarını ve sertifikalarını karşılar.',
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Hızlı Teslimat',
      description: 'Hızlı teslim süreleri ve konumunuza güvenilir teslimat.',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          Neden Karteks?
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          İnşaat, fabrika ve teknik alanlar için yüksek kaliteli iş kıyafetleri üretiyoruz.
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {feature.icon}
                <Typography variant='h5' sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
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
