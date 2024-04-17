import React, { FC } from 'react';
import Button from '@/app/components/button/Button';
import Flex from '@/app/components/flex/Flex';

const SecretContent: FC = () => {
  return (
    <Flex justifyContent='center' alignItems='center'>
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
