'use client';

import React, { CSSProperties, FC } from 'react';
import Flex from '../flex/Flex';
import { Back, Card, Content, Front, Thumbnail } from './ProjectCard.styled';

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
};

type ProjectCardProps = Project & {
  order: number;
  style?: CSSProperties;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  order,
  description,
  thumbnailSrc,
  style,
}) => {
  return (
    <Card style={{ ...style }}>
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
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </Flex>
          </Flex>
        </Front>

        <Back>Back</Back>
      </Content>
    </Card>
  );
};

export default ProjectCard;
