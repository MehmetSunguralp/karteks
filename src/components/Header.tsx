'use client';
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';

export const Header = () => {
  const theme = useTheme();
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 700 }}>
          KARTEKS
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            sx={{ display: 'flex', alignItems: 'center' }}
            color='inherit'
            component={Link}
            href='/'
            endIcon={<HomeFilledIcon fontSize='large' />}
          >
            Anasayfa
          </Button>
          <Button
            color='inherit'
            component={Link}
            href='/catalog'
            endIcon={<CheckroomIcon fontSize='large' />}
          >
            Katalog
          </Button>
          <Button
            color='inherit'
            component={Link}
            href='/about'
            endIcon={<BusinessIcon fontSize='large' />}
          >
            Hakkımızda
          </Button>
          <Button
            color='inherit'
            component={Link}
            href='/contact'
            endIcon={<PhoneIcon fontSize='large' />}
          >
            İletişim
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
