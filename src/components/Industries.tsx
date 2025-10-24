'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Construction, Factory, Engineering, LocalHospital, Restaurant, CleaningServices } from '@mui/icons-material';

export const Industries = () => {
  const industries = [
    {
      icon: <Construction sx={{ fontSize: 50 }} />,
      title: 'İnşaat',
      description: 'İnşaat sahaları için dayanıklı iş kıyafetleri',
    },
    {
      icon: <Factory sx={{ fontSize: 50 }} />,
      title: 'İmalat',
      description: 'Fabrika çalışanları için güvenlik öncelikli giysiler',
    },
    {
      icon: <Engineering sx={{ fontSize: 50 }} />,
      title: 'Mühendislik',
      description: 'Mühendisler için teknik iş kıyafetleri',
    },
    {
      icon: <LocalHospital sx={{ fontSize: 50 }} />,
      title: 'Sağlık',
      description: 'Tıbbi üniformalar ve koruyucu giysiler',
    },
    {
      icon: <Restaurant sx={{ fontSize: 50 }} />,
      title: 'Konaklama',
      description: 'Konaklama sektörü için profesyonel üniformalar',
    },
    {
      icon: <CleaningServices sx={{ fontSize: 50 }} />,
      title: 'Temizlik',
      description: 'Temizlik hizmetleri için pratik iş kıyafetleri',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
          }}
        >
          Hizmet Verdiğimiz Sektörler
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Birçok sektörde özel iş kıyafeti çözümleri sunuyoruz
        </Typography>
        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{industry.icon}</Box>
                <Typography variant='h6' sx={{ mb: 1, fontWeight: 600 }}>
                  {industry.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {industry.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
