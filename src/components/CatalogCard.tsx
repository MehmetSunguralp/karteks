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
  clickable?: boolean;
}

export const CatalogCard = ({
  id,
  name,
  description,
  image,
  href,
  variant = 'catalog',
  clickable = true,
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

  const cardSx = {
    ...cardStyles,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    ...(clickable && { textDecoration: 'none' }),
  };

  return (
    <Card {...(clickable && { component: Link, href: cardHref })} sx={cardSx}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: imageHeight,
          aspectRatio: variant === 'homepage' ? { md: '2/3' } : undefined,
          cursor: clickable ? 'pointer' : 'default',
          overflow: 'hidden',
          '&:hover': {
            '@media (hover: hover)': {
              '& .product-image': {
                transform: 'scale(1.1)',
              },
              ...(clickable && {
                '& .hover-overlay': {
                  opacity: 1,
                },
                '& .detay-text': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              }),
              ...(!clickable && {
                '& .product-description': {
                  maxHeight: '100px',
                  opacity: 1,
                  marginTop: '8px',
                },
                '& .product-overlay': {
                  background:
                    'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%)',
                },
              }),
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
        {/* Hover overlay with DETAY text - only for clickable cards */}
        {clickable && (
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
        )}
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
          {/* Description - always visible for clickable, hover for non-clickable */}
          <Typography
            variant='body2'
            className='product-description'
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mt: 1,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              ...(clickable
                ? {}
                : {
                    maxHeight: 0,
                    opacity: 0,
                    overflow: 'hidden',
                    transition:
                      'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out, margin-top 0.4s ease-in-out',
                    marginTop: 0,
                  }),
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
