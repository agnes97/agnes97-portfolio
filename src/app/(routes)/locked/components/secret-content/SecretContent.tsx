import React, { FC } from 'react';
import Button from '@/app/components/button/Button';
import Flex from '@/app/components/flex/Flex';

const SecretContent: FC = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      ipad={{ gap: '0' }}
      mobile={{ flexWrap: 'wrap', columnGap: '2rem', rowGap: '1rem' }}
    >
      <Button size='L' shape={'hexagon'}>
        Secret content
      </Button>
      <Button size='L' shape={'hexagon'}>
        Secret content
      </Button>
      <Button size='L' shape={'hexagon'}>
        Secret content
      </Button>
    </Flex>
  );
};

export default SecretContent;
