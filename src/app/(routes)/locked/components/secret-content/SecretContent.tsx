import React, { FC } from 'react';
import { SecretContentWrapper } from './SecretContent.styled';
import Button from '@/app/components/button/Button';

const SecretContent: FC = () => {
  return (
    <SecretContentWrapper>
      <Button size='L' shape={'hexagon'}>
        Secret content
      </Button>
      <Button size='L' shape={'hexagon'}>
        Secret content
      </Button>
      <Button size='L' shape={'hexagon'}>
        Secret content
      </Button>
    </SecretContentWrapper>
  );
};

export default SecretContent;
