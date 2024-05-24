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

const Cyrkl: FC<DescriptionProps> = ({ type, tech_stack }) => (
  <Flex flexDirection='column' gap='1rem'>
    <p>
      At this start-up, the work moved at the speed of light, and my growth from
      a very green junior to a confident frontend developer was just as swift. I
      was able to enhance both my soft and hard skills, from refactoring old
      code to introducing new technologies to the codebase, such as switching to
      App Router. I worked as a bug validator to catch the most elusive bugs,
      served as a scrum master leading meetings for my team, and much more. I've
      even briefly sticked my head to the (Google) cloud. I had the freedom to
      innovate, balanced by full responsibility for my features, from writing
      the issue to deployment.
    </p>

    <p>
      During my time here, I was proud of the playful titles my colleagues gave
      me. Some were official, others inside jokes—I'll let you decipher which is
      which. Things might not be as they seem!
    </p>

    <ul
      style={{
        paddingInlineStart: '1.5rem',
        marginBlock: 0,
        listStyle: 'none',
      }}
    >
      <li>~ a rescue ranger</li>
      <li>~ chief quality officer</li>
      <li>~ component comittee member</li>
      <li>~ front-end guidlines owner</li>
      <li>~ dev conf organiser</li>
    </ul>

    <p>
      While searching for a product market fit, ever-changing requirements and
      having an accomplished in-house designer made for a good challenge. How to
      do the best work in the fastes way and how to write code that's as
      future-proof as possible? Despite the rapid pace, I've took time to make
      the developer experience better by refactoring types, writing
      documentation or creating a PR template. We've fondly termed any such
      activity as an "AWF" ("after work feature"). I also organised Cyrkl's
      first internal dev conference "Dev Conf 0".
    </p>

    {type === 'programming' && tech_stack && (
      <Flex alignItems='center' gap='1rem' flexWrap='wrap'>
        <TechStackTitle>tech stack & tools:</TechStackTitle>
        <TechStack techStack={tech_stack} />
      </Flex>
    )}

    <DescriptionImages images={images} />
  </Flex>
);

export default Cyrkl;
