'use client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import lightTheme from '../styles/theme';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
};
