'use client';

import React, { useEffect, useState } from 'react';
import Flex from '@/app/components/flex/Flex';
import { CardWithAnchor } from '@/app/components/card/Card';

import defaultImage from '../../assets/spiral.jpg';
import { AnimatedHeading } from '@/app/components/pet-projects/PetProjects.styled';
import { Heart } from 'lucide-react';

type WishlistItem = {
  emoji: string;
  title: string;
  link: string;
  price: string;
  imageSrc?: string;
};

const wishlistItems: WishlistItem[] = [
  {
    emoji: '🛠️',
    title: 'SIXTOL Sada nářadí HOME PINK 128',
    price: '1 359',
    imageSrc: 'https://image.alza.cz/products/SIXT1024/SIXT1024.jpg',
    link: 'https://www.alza.cz/hobby/sixtol-sada-naradi-home-pink-128-d6691530.htm',
  },
];

export default function Wishlist() {
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

  return (
    <Flex
      flexDirection='column'
      gap='2rem'
      padding={'4rem 0'}
      alignItems='center'
    >
      <AnimatedHeading isAnimationBW hasAnimation={hasAnimation}>
        <Heart size={48} />
        <Heart size={48} />
        <h2>Wishlist 2024</h2>
        <Heart size={48} />
        <Heart size={48} />
      </AnimatedHeading>

      {wishlistItems.map((item, index) => (
        <CardWithAnchor
          url={item.link}
          key={index}
          index={index}
          title={`${item.emoji} ${item.title}`}
          thumbnailSrc={item.imageSrc ?? defaultImage.src}
          tagText={`${item.price},-`}
        />
      ))}
    </Flex>
  );
}
