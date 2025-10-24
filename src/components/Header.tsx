'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 700 }}>
          KARTEKS
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color='inherit' component={Link} href='/'>
            Home
          </Button>
          <Button color='inherit' component={Link} href='/catalog'>
            Catalog
          </Button>
          <Button color='inherit' component={Link} href='/about'>
            About
          </Button>
          <Button color='inherit' component={Link} href='/contact'>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
