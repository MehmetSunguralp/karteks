'use client';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position='sticky' sx={{ bgcolor: 'background.default' }}>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            color: 'text.secondary',
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          KARTEKS
        </Typography>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: { md: 1, lg: 2 },
          }}
        >
          <Button
            variant='text'
            component={Link}
            href='/'
            endIcon={<HomeFilledIcon sx={{ fontSize: { md: 'medium', lg: 'large' } }} />}
            sx={{
              color: 'text.primary',
              fontSize: { md: '0.875rem', lg: '1rem' },
              px: { md: 1, lg: 2 },
            }}
          >
            <Typography sx={{ fontSize: { md: '0.875rem', lg: '1rem' } }}>Anasayfa</Typography>
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/catalog'
            endIcon={<CheckroomIcon sx={{ fontSize: { md: 'medium', lg: 'large' } }} />}
            sx={{
              color: 'text.primary',
              fontSize: { md: '0.875rem', lg: '1rem' },
              px: { md: 1, lg: 2 },
            }}
          >
            <Typography sx={{ fontSize: { md: '0.875rem', lg: '1rem' } }}>Katalog</Typography>
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/about'
            endIcon={<BusinessIcon sx={{ fontSize: { md: 'medium', lg: 'large' } }} />}
            sx={{
              color: 'text.primary',
              fontSize: { md: '0.875rem', lg: '1rem' },
              px: { md: 1, lg: 2 },
            }}
          >
            <Typography sx={{ fontSize: { md: '0.875rem', lg: '1rem' } }}>Hakkımızda</Typography>
          </Button>
          <Button
            variant='outlined'
            component={Link}
            href='/contact'
            endIcon={<PhoneIcon sx={{ fontSize: { md: 'medium', lg: 'large' } }} />}
            sx={{
              fontSize: { md: '0.875rem', lg: '1rem' },
              px: { md: 1.5, lg: 2 },
            }}
          >
            <Typography sx={{ fontSize: { md: '0.875rem', lg: '1rem' } }}>İletişim</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            gap: 1,
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            bgcolor: 'background.default',
            p: 2,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
            visibility: mobileOpen ? 'visible' : 'hidden',
            zIndex: 1000,
          }}
        >
          <Button
            variant='text'
            component={Link}
            href='/'
            fullWidth
            startIcon={<HomeFilledIcon />}
            sx={{ color: 'text.primary', justifyContent: 'flex-start' }}
            onClick={() => setMobileOpen(false)}
          >
            Anasayfa
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/catalog'
            fullWidth
            startIcon={<CheckroomIcon />}
            sx={{ color: 'text.primary', justifyContent: 'flex-start' }}
            onClick={() => setMobileOpen(false)}
          >
            Katalog
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/about'
            fullWidth
            startIcon={<BusinessIcon />}
            sx={{ color: 'text.primary', justifyContent: 'flex-start' }}
            onClick={() => setMobileOpen(false)}
          >
            Hakkımızda
          </Button>
          <Button
            variant='outlined'
            component={Link}
            href='/contact'
            fullWidth
            startIcon={<PhoneIcon />}
            onClick={() => setMobileOpen(false)}
          >
            İletişim
          </Button>
        </Box>
        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
