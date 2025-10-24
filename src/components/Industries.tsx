'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Construction, Factory, Engineering, LocalHospital, Restaurant, CleaningServices } from '@mui/icons-material';

export const Industries = () => {
  const industries = [
    {
      icon: <Construction sx={{ fontSize: 50 }} />,
      title: 'Construction',
      description: 'Durable workwear for construction sites',
    },
    {
      icon: <Factory sx={{ fontSize: 50 }} />,
      title: 'Manufacturing',
      description: 'Safety-first clothing for factory workers',
    },
    {
      icon: <Engineering sx={{ fontSize: 50 }} />,
      title: 'Engineering',
      description: 'Technical workwear for engineers',
    },
    {
      icon: <LocalHospital sx={{ fontSize: 50 }} />,
      title: 'Healthcare',
      description: 'Medical uniforms and protective wear',
    },
    {
      icon: <Restaurant sx={{ fontSize: 50 }} />,
      title: 'Hospitality',
      description: 'Professional uniforms for hospitality',
    },
    {
      icon: <CleaningServices sx={{ fontSize: 50 }} />,
      title: 'Cleaning',
      description: 'Practical workwear for cleaning services',
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
          Industries We Serve
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Providing specialized workwear solutions across multiple sectors
        </Typography>
        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
