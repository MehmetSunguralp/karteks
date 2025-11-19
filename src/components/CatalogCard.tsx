'use client';
import { Card, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
interface CatalogCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  href?: string;
  variant?: 'homepage' | 'catalog';
}

export const CatalogCard = ({
  id,
  name,
  description,
  image,
  href,
  variant = 'catalog',
}: CatalogCardProps) => {
  const cardHref = href || `/product?id=${id}`;

  // Different sizing based on variant
  const cardStyles =
    variant === 'homepage'
      ? {
          width: {
            xs: '100%', // Single column on 320px
            sm: 'calc(50% - 12px)', // 2 columns on sm
            md: 'calc(25% - 24px)', // 4 columns on md+
          },
        }
      : {
          width: '100%',
          height: '100%',
        };

  const imageHeight =
    variant === 'homepage'
      ? {
          xs: '300px',
          sm: '350px',
          lg: '500px',
          xl: '600px',
        }
      : {
          xs: '300px',
          sm: '400px',
          md: '450px',
        };

  return (
    <Card
      component={Link}
      href={cardHref}
      sx={{
        ...cardStyles,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        textDecoration: 'none',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: imageHeight,
          aspectRatio: variant === 'homepage' ? { md: '2/3' } : undefined,
          cursor: 'pointer',
          overflow: 'hidden',
          '&:hover': {
            '@media (hover: hover)': {
              '& .product-image': {
                transform: 'scale(1.1)',
              },
              '& .hover-overlay': {
                opacity: 1,
              },
              '& .detay-text': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          },
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className='product-image'
          style={{ objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }}
        />
        {/* Hover overlay with DETAY text */}
        <Box
          className='hover-overlay'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 2,
          }}
        >
          <Typography
            className='detay-text'
            variant='h4'
            sx={{
              color: 'white',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
              opacity: 0,
              transform: 'translateY(10px)',
              transition: 'opacity 0.3s ease-in-out 0.1s, transform 0.3s ease-in-out 0.1s',
            }}
          >
            DETAY
          </Typography>
        </Box>
        {/* Gradient overlay for better text readability */}
        <Box
          className='product-overlay'
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
            p: 2,
            pt: 3,
            transition: 'background 0.3s ease-in-out',
            zIndex: 1,
          }}
        >
          {/* Title - always visible */}
          <Typography
            variant='h5'
            component='div'
            sx={{
              fontWeight: 600,
              color: 'white',
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.5rem' },
            }}
          >
            {name}
          </Typography>
          {/* Description - always visible */}
          <Typography
            variant='body2'
            className='product-description'
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mt: 1,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
