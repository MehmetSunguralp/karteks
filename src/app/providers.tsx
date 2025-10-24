'use client';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import darkTheme from '../styles/theme';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
};
