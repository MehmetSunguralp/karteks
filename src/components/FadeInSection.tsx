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
    const currentRef = ref.current;
    if (!currentRef) return;

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      const rect = currentRef.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
      // Check if element is visible in viewport (with some margin)
      const isInViewport =
        rect.top < windowHeight + 100 && // Add margin for better detection
        rect.bottom > -100 &&
        rect.left < windowWidth &&
        rect.right > 0;

      if (isInViewport) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    // Use requestAnimationFrame to ensure layout is complete
    let observer: IntersectionObserver | null = null;
    
    const rafId = requestAnimationFrame(() => {
      // Check immediately after layout
      if (checkInitialVisibility()) {
        return; // Already visible, no need for observer
      }

      // Use lower threshold for mobile devices
      const isMobile = window.innerWidth < 768;
      const effectiveThreshold = isMobile ? Math.min(threshold, 0.1) : threshold;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Disconnect after first trigger to prevent re-animation
            observer?.disconnect();
          }
        },
        {
          threshold: effectiveThreshold,
          rootMargin: isMobile ? '50px' : '0px 0px -50px 0px', // More lenient on mobile
        },
      );

      observer.observe(currentRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) {
        observer.unobserve(currentRef);
        observer.disconnect();
      }
    };
  }, [threshold]);

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
