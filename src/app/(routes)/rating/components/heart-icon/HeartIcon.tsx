import { useTheme } from '@/app/providers/styled-components-provider';
import { Heart } from 'lucide-react';
import React from 'react';

const HeartIcon = () => {
  const { currentTheme } = useTheme();

  return (
    <Heart
      size={48}
      fill={currentTheme.color.accent_dark}
      color={currentTheme.color.accent_dark}
    />
  );
};

export default HeartIcon;
