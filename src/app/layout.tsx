import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.scss';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Karteks',
  description: 'İş Elbisleri',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <Providers children={children} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
