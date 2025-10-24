import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import Link from 'next/link';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';

export const Header = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 700 }}>
          KARTEKS
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant='text'
            color='inherit'
            component={Link}
            href='/'
            endIcon={<HomeFilledIcon fontSize='large' />}
          >
            Anasayfa
          </Button>
          <Button
            variant='text'
            color='inherit'
            component={Link}
            href='/catalog'
            endIcon={<CheckroomIcon fontSize='large' />}
          >
            Katalog
          </Button>
          <Button
            variant='text'
            color='inherit'
            component={Link}
            href='/about'
            endIcon={<BusinessIcon fontSize='large' />}
          >
            Hakkımızda
          </Button>
          <Button
            variant='outlined'
            color='primary'
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
