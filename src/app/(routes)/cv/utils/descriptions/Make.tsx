import { FC } from 'react';
import { DescriptionProps } from '../get-company-description';
import Flex from '@/app/components/flex/Flex';
import { TechStackTitle } from '../../components/experiences/Experiences.styled';
import TechStack from '@/app/components/tech-stack/TechStack';

const Make: FC<DescriptionProps> = ({ type, tech_stack }) => {
  return (
    <Flex flexDirection='column' gap='1rem'>
      <p style={{ fontStyle: 'italic' }}>
        I am currently delighted to be joining core frontend team at Make &
        diving deep into canvas and Angular.
      </p>

      {type === 'programming' && tech_stack && (
        <Flex alignItems='center' gap='1rem' flexWrap='wrap'>
          <TechStackTitle>tech stack & tools:</TechStackTitle>
          <TechStack techStack={tech_stack} />
        </Flex>
      )}
    </Flex>
  );
};

export default Make;
