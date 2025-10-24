'use client';
import { Fab, Tooltip } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '905427807923';
    const message = encodeURIComponent('Merhaba, ürünleriniz hakkında bilgi almak istiyorum.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Tooltip title='WhatsApp ile iletişime geç' placement='right'>
      <Fab
        color='success'
        aria-label='whatsapp'
        onClick={handleWhatsAppClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          backgroundColor: '#25D366',
          color: 'white',
          width: 60,
          height: 60,
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        }}
      >
        <WhatsApp sx={{ fontSize: 32 }} />
      </Fab>
    </Tooltip>
  );
};
