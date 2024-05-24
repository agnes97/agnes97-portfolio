import { BookOpenText, Code2 } from 'lucide-react';
import { Experience } from '../hooks/use-get-cv';
import { useTheme } from '@/app/providers/styled-components-provider';

export const getPositionIcon = (type: Experience['type']) => {
  const { currentTheme } = useTheme();

  switch (type) {
    case 'programming':
      return <Code2 color={currentTheme.color.text_primary} size={20} />;
    case 'librarianship':
      return <BookOpenText color={currentTheme.color.text_primary} size={20} />;
    default:
      return null;
  }
};
