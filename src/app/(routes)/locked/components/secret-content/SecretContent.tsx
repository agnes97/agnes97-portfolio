import React, { FC } from 'react';
import Button from '@/app/components/button/Button';
import Flex from '@/app/components/flex/Flex';
import Link from 'next/link';

const SecretContent: FC = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      ipad={{ gap: '0' }}
      mobile={{ flexWrap: 'wrap', columnGap: '2rem', rowGap: '1rem' }}
    >
      <Link href='/rating' passHref>
        <Button size='L' shape={'hexagon'}>
          Rating
        </Button>
      </Link>

      <Link href='/shopping-mall' passHref>
        <Button size='L' shape={'hexagon'}>
          Shopping Mall
        </Button>
      </Link>

      <Link href='/wishlist' passHref>
        <Button size='L' shape={'hexagon'}>
          Wishlist
        </Button>
      </Link>
    </Flex>
  );
};

export default SecretContent;
