'use client';
import { Box, BoxProps } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'top' | 'bottom' | 'right';
  threshold?: number;
}

export const FadeInSection = ({
  children,
  delay = 0,
  direction = 'bottom',
  threshold = 0.4,
  ...props
}: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger to prevent re-animation
          observer.disconnect();
        }
      },
      {
        threshold: threshold, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  // Calculate initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'top':
        return 'translateY(-30px)';
      case 'bottom':
        return 'translateY(30px)';
      case 'left':
        return 'translateX(-30px)';
      case 'right':
        return 'translateX(30px)';
      default:
        return 'translateY(30px)';
    }
  };

  const getFinalTransform = () => {
    return 'translate(0, 0)';
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? getFinalTransform() : getInitialTransform(),
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
        width: '100%',
        maxWidth: '100%',
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
