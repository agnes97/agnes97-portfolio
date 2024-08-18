import { useTheme } from '@/app/providers/styled-components-provider';
import { ShieldQuestionIcon } from 'lucide-react';
import React from 'react';

const QuestionMark = () => {
  const { currentTheme } = useTheme();

  return (
    <ShieldQuestionIcon
      size={48}
      fill={currentTheme.color.background_secondary}
      color={currentTheme.color.accent_dark}
    />
  );
};

export default QuestionMark;
