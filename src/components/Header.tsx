import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';

export const Header = () => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, fontWeight: 700, color: 'text.secondary' }}
        >
          KARTEKS
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant='text'
            component={Link}
            href='/'
            endIcon={<HomeFilledIcon fontSize='large' />}
            sx={{ color: 'text.primary' }}
          >
            Anasayfa
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/catalog'
            endIcon={<CheckroomIcon fontSize='large' />}
            sx={{ color: 'text.primary' }}
          >
            Katalog
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/about'
            endIcon={<BusinessIcon fontSize='large' />}
            sx={{ color: 'text.primary' }}
          >
            Hakkımızda
          </Button>
          <Button
            variant='outlined'
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
