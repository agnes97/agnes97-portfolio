import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';

import { DescriptionProps } from '../get-company-description';
import { TechStackTitle } from '../../components/experiences/Experiences.styled';
import TechStack from '@/app/components/tech-stack/TechStack';
import DescriptionImages from '../../components/experiences/components/DescriptionImages';

import cyrkl1 from '@/app/assets/cv/cyrkl1.jpeg';
import cyrkl2 from '@/app/assets/cv/cyrkl2.jpeg';
import cyrkl3 from '@/app/assets/cv/cyrkl3.jpeg';
import cyrkl4 from '@/app/assets/cv/cyrkl4.jpeg';

const images = [cyrkl1, cyrkl2, cyrkl3, cyrkl4];

const Cyrkl: FC<DescriptionProps> = ({ company_name, type, tech_stack }) => (
  <Flex flexDirection='column' gap='1rem'>
    <p>Hello World</p>

    {type === 'programming' && tech_stack && (
      <Flex alignItems='center' gap='1rem' flexWrap='wrap'>
        <TechStackTitle>tech stack & tools:</TechStackTitle>
        <TechStack techStack={tech_stack} />
      </Flex>
    )}

    <DescriptionImages companyName={company_name} images={images} />
  </Flex>
);

export default Cyrkl;
