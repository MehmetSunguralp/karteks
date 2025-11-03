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
            <Typography>Anasayfa</Typography>
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/catalog'
            endIcon={<CheckroomIcon fontSize='large' />}
            sx={{ color: 'text.primary' }}
          >
            <Typography>Katalog</Typography>
          </Button>
          <Button
            variant='text'
            component={Link}
            href='/about'
            endIcon={<BusinessIcon fontSize='large' />}
            sx={{ color: 'text.primary' }}
          >
            <Typography>Hakkımızda</Typography>
          </Button>
          <Button
            variant='outlined'
            component={Link}
            href='/contact'
            endIcon={<PhoneIcon fontSize='large' />}
          >
            <Typography>İletişim</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
