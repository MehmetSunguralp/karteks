'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import {
  Construction,
  Factory,
  Engineering,
  LocalHospital,
  Restaurant,
  CleaningServices,
} from '@mui/icons-material';

export const Industries = () => {
  const industries = [
    {
      icon: <Construction sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />,
      title: 'İnşaat',
      description: 'İnşaat sahaları için dayanıklı iş kıyafetleri',
    },
    {
      icon: <Factory sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />,
      title: 'İmalat',
      description: 'Fabrika çalışanları için güvenlik öncelikli giysiler',
    },
    {
      icon: <Engineering sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />,
      title: 'Mühendislik',
      description: 'Mühendisler için teknik iş kıyafetleri',
    },
    {
      icon: <LocalHospital sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />,
      title: 'Sağlık',
      description: 'Tıbbi üniformalar ve koruyucu giysiler',
    },
    {
      icon: <Restaurant sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />,
      title: 'Konaklama',
      description: 'Konaklama sektörü için profesyonel üniformalar',
    },
    {
      icon: <CleaningServices sx={{ fontSize: { xs: 60, sm: 80, md: 100 } }} />,
      title: 'Temizlik',
      description: 'Temizlik hizmetleri için pratik iş kıyafetleri',
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 8 }, backgroundColor: 'background.default' }}>
      <Container>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            mb: { xs: 1, md: 2 },
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          }}
        >
          Hizmet Verdiğimiz Sektörler
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
          Birçok sektörde özel iş kıyafeti çözümleri sunuyoruz
        </Typography>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
          {industries.map((industry, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={industry.title}>
              <Paper
                elevation={3}
                sx={{
                  userSelect: 'none',
                  p: { xs: 2, sm: 2.5, md: 3 },
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.1s ease-in-out',
                  '&:hover': {
                    '@media (hover: hover)': {
                      transform: 'translateY(5px)',
                      backgroundColor: 'background.paper',
                    },
                  },
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <Box sx={{ color: 'primary.main' }}>{industry.icon}</Box>
                <Typography
                  variant='h6'
                  sx={{
                    mb: { xs: 0.5, md: 1 },
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                  }}
                >
                  {industry.title}
                </Typography>
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                >
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
