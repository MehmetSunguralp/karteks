'use client';
import { Box, Container, Typography, useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.paper;
  return (
    <Box component='footer' sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: backgroundColor }}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>Contact us at: info@workwearmanufacturer.com</Typography>
        <Typography variant='body2' color='text.secondary'>
          Follow us on social media: [Icons Placeholder]
        </Typography>
      </Container>
    </Box>
  );
};
