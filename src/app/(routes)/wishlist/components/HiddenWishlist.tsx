import React, { useState } from 'react';
import { Gallery, WishlistTitle } from '../page.styled';
import Flex from '@/app/components/flex/Flex';
import { useTheme } from '@/app/providers/styled-components-provider';
import { hiddenWishlist2026 } from '../data/hidden-wishlist-2026';
import GalleryItem from './GalleryItem';
import Button from '@/app/components/button/Button';
import { ArrowUp, ArrowDown } from 'lucide-react';

const HiddenWishlist = () => {
  const { currentThemeVariant } = useTheme();
  const [isHiddenWishlistVisible, setIsHiddenWishlistVisible] = useState(false);

  const dimmedColor =
    currentThemeVariant === 'light'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.2)';

  const handleHiddenWishlistVisibility = () => {
    setIsHiddenWishlistVisible((prev) => !prev);
  };

  return (
    <Flex
      flexDirection='column'
      gap='1rem'
      padding='1rem'
      style={{
        position: 'relative',
        minWidth: '100%',
        border: `3px solid ${dimmedColor}`,
        paddingBottom: isHiddenWishlistVisible ? 0 : '2rem',
      }}
    >
      <div style={{ position: 'relative' }}>
        <WishlistTitle>Super Secret Hidden Wishlist</WishlistTitle>
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            opacity: isHiddenWishlistVisible ? 0 : 1,
            height: isHiddenWishlistVisible ? 0 : 'auto',
            transition: 'opacity 250ms linear',
          }}
        >
          ...
        </span>

        <Button
          type='button'
          size={'S'}
          shape={'rectangle'}
          onClick={handleHiddenWishlistVisibility}
          style={{
            position: 'absolute',
            right: '0.25rem',
            top: '0.25rem',
          }}
        >
          {isHiddenWishlistVisible ? (
            <>
              HIDE <ArrowUp />
            </>
          ) : (
            <>
              SHOW <ArrowDown />
            </>
          )}
        </Button>
      </div>

      <Gallery
        style={{
          alignSelf: 'center',
          opacity: isHiddenWishlistVisible ? 1 : 0,
          paddingBottom: isHiddenWishlistVisible ? '2rem' : 0,
          transform: isHiddenWishlistVisible ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          position: isHiddenWishlistVisible ? 'relative' : 'absolute',
          transition: 'transform 250ms 250ms ease',
        }}
      >
        {hiddenWishlist2026.length === 0 ? (
          <span>No items. :&#41;</span>
        ) : (
          <>
            {hiddenWishlist2026.map((item, index) => (
              <GalleryItem key={index} index={index} item={item} />
            ))}
          </>
        )}
      </Gallery>
    </Flex>
  );
};

export default HiddenWishlist;
