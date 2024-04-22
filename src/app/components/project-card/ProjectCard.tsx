'use client';

import React, { CSSProperties, FC, useState } from 'react';
import Flex from '../flex/Flex';
import {
  Back,
  Card,
  CardDescription,
  CardInfo,
  CardTitle,
  ClickToFlip,
  Content,
  Front,
  ProjectLinkSpan,
  ThisProject,
  Thumbnail,
} from './ProjectCard.styled';
import { Code, Link, MapPin, MousePointerClick } from 'lucide-react';
import Vimeo from '@u-wave/react-vimeo';
import { useTheme } from '@/app/providers/styled-components-provider';

export type Project = {
  id: string;
  title: string;
  description: string;
  url?: string;
  githubRepoUrl: string;
  thumbnailSrc: string;
  isThumbnailTransparent?: boolean;
  vimeoVideoId?: string;
  backBackgroundColor?: string;
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
  url,
  githubRepoUrl,
  thumbnailSrc,
  isThumbnailTransparent,
  vimeoVideoId,
  backBackgroundColor,
  isCardFlippable,
  style,
}) => {
  const { currentThemeVariant } = useTheme();
  const [hasAnimation, setHasAnimation] = useState(false);
  const [isBeforeFirstAnimationRun, setIsBeforeFirstAnimationRun] =
    useState(true);

  const handleFlipCard = () => {
    if (isBeforeFirstAnimationRun) {
      setIsBeforeFirstAnimationRun(false);
    }

    setHasAnimation((prev) => !prev);
  };

  const alignBasedOnOrder = order === 0 ? 'start' : 'end';

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
            justifyContent={alignBasedOnOrder}
            style={{ height: 'inherit' }}
          >
            <Thumbnail isThumbnailTransparent={Boolean(isThumbnailTransparent)}>
              <img src={thumbnailSrc} alt={title} />
            </Thumbnail>

            <CardInfo
              flexDirection='column'
              gap='0.75rem'
              flexGrow={1}
              style={{ order }}
              alignItems='center'
              justifyContent='space-between'
              isThumbnailTransparent={Boolean(isThumbnailTransparent)}
              border={order === 0 ? 'left' : 'right'}
              mobile={{ padding: '1rem' }}
              ipad={{ padding: '1.75rem' }}
            >
              <Flex flexDirection='column' gap='0.5rem'>
                <CardTitle currentTheme={currentThemeVariant}>
                  {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </Flex>

              <Flex
                width='100%'
                justifyContent={
                  isCardFlippable ? 'space-between' : alignBasedOnOrder
                }
                alignItems='end'
                mobile={{ flexDirection: 'column', gap: '1rem' }}
                ipad={{ flexDirection: 'row', gap: '0.25rem' }}
              >
                {isCardFlippable && (
                  <ClickToFlip>
                    Click to flip! <MousePointerClick />
                  </ClickToFlip>
                )}

                <Flex gap='1rem'>
                  {url ? (
                    <a href={url} target='_blank'>
                      <Flex
                        flexDirection='column'
                        gap='0.5rem'
                        justifyContent='center'
                        alignItems='center'
                      >
                        <Link />
                        <ProjectLinkSpan currentTheme={currentThemeVariant}>
                          LINK
                        </ProjectLinkSpan>
                      </Flex>
                    </a>
                  ) : (
                    <ThisProject currentTheme={currentThemeVariant}>
                      <MapPin />
                      <span>HERE</span>
                    </ThisProject>
                  )}

                  <a href={githubRepoUrl} target='_blank'>
                    <Flex
                      flexDirection='column'
                      gap='0.5rem'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <Code />
                      <ProjectLinkSpan currentTheme={currentThemeVariant}>
                        CODE
                      </ProjectLinkSpan>
                    </Flex>
                  </a>
                </Flex>
              </Flex>
            </CardInfo>
          </Flex>
        </Front>

        {vimeoVideoId && (
          <Back backgroundColor={backBackgroundColor ?? 'transparent'}>
            <Vimeo video={vimeoVideoId} autoplay muted loop controls={false} />
          </Back>
        )}
      </Content>
    </Card>
  );
};

export default ProjectCard;
