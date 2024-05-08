'use client';

import React, { FC } from 'react';
import { Anchor, ICON_SIZE, SocialsIcon } from './SocialsLink.styled';
import { IconType } from '@icons-pack/react-simple-icons';
import { useTheme } from '@/app/providers/styled-components-provider';

type SocialsLinkProps = {
  id: string;
  name: string;
  link: string;
  icon: IconType;
};

const SocialsLink: FC<SocialsLinkProps> = ({ id, icon, name, link }) => {
  const { currentThemeVariant } = useTheme();

  const Icon = icon;

  return (
    <Anchor
      id={id}
      href={link}
      title={name}
      target='_blank'
      referrerPolicy='no-referrer'
      currentTheme={currentThemeVariant}
    >
      {name}

      <SocialsIcon>
        <Icon size={ICON_SIZE} />
      </SocialsIcon>
    </Anchor>
  );
};

export default SocialsLink;
