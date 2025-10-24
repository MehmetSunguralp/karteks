'use client';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Build, Security, LocalShipping } from '@mui/icons-material';

export const AboutUs = () => {
  const features = [
    {
      icon: <Build sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Premium Quality',
      description: 'Manufactured with the highest quality materials and craftsmanship.',
    },
    {
      icon: <Security sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Safety First',
      description: 'All our products meet international safety standards and certifications.',
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times and reliable delivery to your location.',
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
          Why Choose Karteks?
        </Typography>
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          We manufacture high-quality workwear for construction, factory, and technical fields.
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
