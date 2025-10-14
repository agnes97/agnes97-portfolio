'use client';

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

import Flex from '@/app/components/flex/Flex';
import { CardWithAnchor } from '@/app/components/card/Card';
import { useTheme } from '@/app/providers/styled-components-provider';
import { AnimatedHeading } from '@/app/components/pet-projects/PetProjects.styled';
import { useAuth } from '@/app/providers/auth-provider';

import defaultImage from '../../assets/spiral.jpg';

import OverlayIcon from './components/OverlayIcon';
import { Wishlist as WishlisType } from './types';
import { Gallery, WishlistTitle } from './page.styled';

import { wishlist2019Christmas } from './data/wishlist-2019-christmas';
import { wishlist2021Birthday } from './data/wishlist-2021-birthday';
import { wishlist2021Christmas } from './data/wishlist-2021-christmas';
// import { wishlist2022Birthday } from './data/wishlist-2022-birthday';
import { wishlist2022Christmas } from './data/wishlist-2022-christmas';
import { wishlist2023Birthday } from './data/wishlist-2023-birthday';
import { wishlist2023Christmas } from './data/wishlist-2023-christmas';
import { wishlist2024Birthday } from './data/wishlist-2024-birthday';
import { wishlist2025Birthday } from './data/wishlist-2025-birthday';
import { wishlist2025ChristmasSlevomat } from './data/wishlist-2025-christmas-slevomat';
import { wishlist2025ChristmasVinted } from './data/wishlist-2025-christmas-vinted';
import { wishlist2025Christmas } from './data/wishlist-2025-christmas';

const CARD_WIDTH = 270;
const CARD_HEIGHT = 340;

const wishlists: WishlisType[] = [
  {
    year: 2025,
    type: 'christmas',
    wishlistedItems: wishlist2025Christmas,
  },
  {
    year: 2025,
    type: 'christmas_vinted',
    wishlistedItems: wishlist2025ChristmasVinted,
  },
  {
    year: 2025,
    type: 'christmas_slevomat',
    wishlistedItems: wishlist2025ChristmasSlevomat,
  },
  {
    year: 2025,
    type: 'birthday',
    wishlistedItems: wishlist2025Birthday,
  },
  {
    year: 2024,
    type: 'christmas',
    wishlistedItems: [],
  },
  {
    year: 2024,
    type: 'birthday',
    wishlistedItems: wishlist2024Birthday,
  },
  {
    year: 2023,
    type: 'christmas',
    wishlistedItems: wishlist2023Christmas,
  },
  {
    year: 2023,
    type: 'birthday',
    wishlistedItems: wishlist2023Birthday,
  },
  {
    year: 2022,
    type: 'christmas',
    wishlistedItems: wishlist2022Christmas,
  },
  {
    year: 2022,
    type: 'birthday',
    wishlistedItems: [],
  },
  {
    year: 2021,
    type: 'christmas',
    wishlistedItems: wishlist2021Christmas,
  },
  {
    year: 2021,
    type: 'birthday',
    wishlistedItems: wishlist2021Birthday,
  },
  {
    year: 2020,
    type: 'christmas',
    wishlistedItems: [],
  },
  {
    year: 2020,
    type: 'birthday',
    wishlistedItems: [],
  },
  {
    year: 2019,
    type: 'christmas',
    wishlistedItems: wishlist2019Christmas,
  },
];

export default function Wishlist() {
  const { isLoggedIn } = useAuth();
  const { updateCustomPageLayout } = useTheme();

  useEffect(() => {
    updateCustomPageLayout({
      padding: 0,
      ipad: { width: '90%', padding: '0 1rem' },
    });
  }, []);

  const [hasAnimation, setHasAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setHasAnimation((prev) => !prev);
      },
      hasAnimation ? 4000 : 1000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [hasAnimation]);

  const getWishlistTitle = (
    wishlistType: string,
    wishlistYear: number
  ): string => {
    if (wishlistType.includes('_')) {
      const newTitle = wishlistType.split('_').join(' ');
      return `${newTitle} SPECIAL ${wishlistYear}`;
    }

    return `${wishlistType} ${wishlistYear}`;
  };

  return (
    <Flex
      flexDirection='column'
      gap='2rem'
      padding={'4rem 0'}
      alignItems='center'
      ipad={{ padding: '10rem 0' }}
    >
      <AnimatedHeading isAnimationBW hasAnimation={hasAnimation}>
        <Heart size={48} />
        <Heart size={48} />
        <h2>Wishlists</h2>
        <Heart size={48} />
        <Heart size={48} />
      </AnimatedHeading>

      {!isLoggedIn ? (
        <span>This content is only available for logged users.</span>
      ) : (
        <>
          {wishlists.map((wishlist, index) => (
            <Flex flexDirection='column' gap='1rem' key={index}>
              <WishlistTitle>
                {getWishlistTitle(wishlist.type, wishlist.year)}
              </WishlistTitle>

              <Gallery>
                {wishlist.wishlistedItems.length === 0 ? (
                  <span>No items. :&#41;</span>
                ) : (
                  <>
                    {wishlist.wishlistedItems.map((item, index) => {
                      const isOverlayDisplayed =
                        item.received || item.isNoLongerWanted || item.isFav;

                      return (
                        <div
                          key={index}
                          style={{
                            height: `${CARD_HEIGHT}px`,
                            width: item.isDoubleCard
                              ? `${CARD_WIDTH * 2 + 16}px`
                              : `${CARD_WIDTH}px`,
                            position: 'relative',
                          }}
                        >
                          <CardWithAnchor
                            url={item.link}
                            index={index}
                            title={`${item.emoji} ${item.title}`}
                            thumbnailSrc={item.imageSrc ?? defaultImage.src}
                            tagText={
                              item.isHandmade ? 'DIY' : `${item.price},-`
                            }
                            objectFit={item.hasCoverPhoto ? 'cover' : 'contain'}
                            customCardHeight={`${CARD_HEIGHT}px`}
                          />

                          {isOverlayDisplayed && (
                            <OverlayIcon
                              itemReceived={item.received}
                              isNoLongerWanted={item.isNoLongerWanted}
                              isFav={item.isFav}
                              itemLink={item.link}
                            />
                          )}
                        </div>
                      );
                    })}
                  </>
                )}
              </Gallery>
            </Flex>
          ))}
        </>
      )}
    </Flex>
  );
}
