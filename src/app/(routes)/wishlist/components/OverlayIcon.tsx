import { useTheme } from '@/app/providers/styled-components-provider';
import { Check, Heart, X } from 'lucide-react';
import { FC, useState } from 'react';

type Props = {
  itemReceived?: boolean;
  isNoLongerWanted?: boolean;
  isFav?: boolean;
  itemLink?: string;
};

const OverlayIcon: FC<Props> = ({
  isFav,
  itemReceived,
  isNoLongerWanted,
  itemLink,
}) => {
  const { currentThemeVariant, currentTheme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const Icon = itemReceived ? Check : X;

  return (
    <a
      href={itemLink}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(isFav && { border: '3px solid pink' }),
        ...(!isFav &&
          !isHovered && {
            backgroundColor:
              currentThemeVariant === 'light'
                ? 'rgba(255, 255, 255, 0.8)'
                : 'rgba(0, 0, 0, 0.5)',
          }),
        transition: 'background-color 500ms easeinout',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isFav && (
        <>
          <Heart
            size={30}
            fill={currentTheme.color.error}
            color='pink'
            style={{
              position: 'absolute',
              top: '4rem',
              left: '-1.1rem',
              zIndex: 1,
            }}
          />

          <Heart
            size={30}
            fill={currentTheme.color.error}
            color='pink'
            style={{
              position: 'absolute',
              bottom: '4rem',
              right: '-1.1rem',
              zIndex: 1,
            }}
          />
        </>
      )}

      {(isNoLongerWanted || itemReceived) && !isHovered && (
        <>
          <Icon
            size={100}
            strokeWidth={1}
            color={
              isNoLongerWanted
                ? currentTheme.color.error
                : currentThemeVariant === 'light'
                  ? currentTheme.color.background_primary
                  : currentTheme.color.text_link
            }
            style={{
              position: 'absolute',
              zIndex: '2',
            }}
          />
          <Icon
            size={100}
            strokeWidth={5}
            color={
              currentThemeVariant === 'light'
                ? currentTheme.color.text_primary
                : '#3d3b3b'
            }
            style={{
              position: 'absolute',
              zIndex: '1',
            }}
          />
        </>
      )}
    </a>
  );
};

export default OverlayIcon;
