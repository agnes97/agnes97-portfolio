'use client';

import React, { FC, useEffect, useState } from 'react';
import Flex from '../flex/Flex';
import SocialsLink from '../socials-link/SocialsLink';

import {
  SiInstagram,
  SiLinkedin,
  SiGithub,
} from '@icons-pack/react-simple-icons';
import { AnimatedHeading } from '../pet-projects/PetProjects.styled';
import {
  MessageCircle,
  MessageCircleCodeIcon,
  MessageCircleDashed,
  MessageCircleHeart,
} from 'lucide-react';

const ContactMe: FC = () => {
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
      justifyContent='start'
      alignItems='center'
      padding='5rem 0'
      mobile={{
        gap: '0.25rem',
      }}
      ipad={{
        gap: '2rem',
      }}
    >
      <AnimatedHeading isAnimationBW hasAnimation={hasAnimation}>
        <MessageCircle size={48} />
        <MessageCircleCodeIcon size={48} />
        <h2>Contact Me</h2>
        <MessageCircleDashed size={48} />
        <MessageCircleHeart size={48} />
      </AnimatedHeading>

      <Flex
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        flexWrap='wrap'
        mobile={{
          columnGap: '2rem',
        }}
        ipad={{
          columnGap: '5rem',
        }}
      >
        <SocialsLink
          id='instagram'
          name='Instagram'
          link='https://www.instagram.com/agnes.and.life/'
          icon={SiInstagram}
        />

        <SocialsLink
          id='github'
          name='Github'
          link='https://github.com/agnes97/'
          icon={SiGithub}
        />

        <SocialsLink
          id='linkedin'
          name='LinkedIn'
          link='https://www.linkedin.com/in/agnes97/'
          icon={SiLinkedin}
        />
      </Flex>
    </Flex>
  );
};

export default ContactMe;
