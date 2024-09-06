import React, { FC } from 'react';
import { Participant } from '../../hooks/use-get-ratings';

import defaultImage from '../../../../assets/spiral.jpg';
import { Container, InnerContainer } from './Participants.styled';

type Props = {
  participants: Participant[];
};

const Participants: FC<Props> = ({ participants }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part.slice(0, 1))
      .join('');
  };
  return (
    <Container>
      {participants.map((participant) => (
        <InnerContainer
          key={participant.id}
          initials={getInitials(participant.name)}
        >
          <img
            src={participant.avatar ?? defaultImage.src}
            tabIndex={-1}
            title={participant.name}
            alt={participant.name}
          />
        </InnerContainer>
      ))}
    </Container>
  );
};

export default Participants;
