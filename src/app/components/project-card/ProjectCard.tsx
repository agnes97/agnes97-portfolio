'use client';

import React, { CSSProperties, FC, useState } from 'react';
import Flex from '../flex/Flex';
import { Back, Card, Content, Front, Thumbnail } from './ProjectCard.styled';
import { MousePointerClick } from 'lucide-react';
import { useTheme } from '@/app/providers/styled-components-provider';
import Vimeo from '@u-wave/react-vimeo';

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
  vimeoVideoId?: string;
};

type ProjectCardProps = Project & {
  order: number;
  isCardFlippable?: boolean;
  style?: CSSProperties;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  order,
  description,
  thumbnailSrc,
  vimeoVideoId,
  isCardFlippable,
  style,
}) => {
  const { currentTheme } = useTheme();
  const [hasAnimation, setHasAnimation] = useState(false);
  const [isBeforeFirstAnimationRun, setIsBeforeFirstAnimationRun] =
    useState(true);

  const handleFlipCard = () => {
    if (isBeforeFirstAnimationRun) {
      setIsBeforeFirstAnimationRun(false);
    }

    setHasAnimation((prev) => !prev);
  };

  return (
    <Card
      hasAnimation={hasAnimation}
      isBeforeFirstAnimationRun={isBeforeFirstAnimationRun}
      {...(isCardFlippable && { onClick: handleFlipCard })}
      style={{
        ...style,
        cursor: isCardFlippable ? 'pointer' : 'default',
        zIndex: isCardFlippable ? 1 : 0,
      }}
    >
      <Content>
        <Front>
          <Flex
            justifyContent={order === 0 ? 'start' : 'end'}
            style={{ height: 'inherit' }}
          >
            <Thumbnail>
              <img src={thumbnailSrc} alt={title} />
            </Thumbnail>

            <Flex
              flexDirection='column'
              padding='2rem'
              gap='0.75rem'
              flexGrow={1}
              style={{ order }}
              alignItems={order === 0 ? 'start' : 'end'}
              justifyContent='space-between'
            >
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

              {isCardFlippable && (
                <p style={{ alignSelf: 'end' }}>
                  Click to flip!{' '}
                  <MousePointerClick color={currentTheme.color.warning} />
                </p>
              )}
            </Flex>
          </Flex>
        </Front>

        {vimeoVideoId && (
          <Back>
            <Vimeo video={vimeoVideoId} autoplay muted loop controls={false} />
          </Back>
        )}
      </Content>
    </Card>
  );
};

export default ProjectCard;
