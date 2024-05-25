import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';
import { DescriptionProps } from '../get-company-description';
import {
  DescriptionList,
  TechStackTitle,
} from '../../components/experiences/Experiences.styled';
import TechStack from '@/app/components/tech-stack/TechStack';

const Czechitas: FC<DescriptionProps> = ({ type, tech_stack }) => (
  <Flex flexDirection='column' gap='1rem'>
    <p>
      Czechitas empowers women in Czechia to learn programming and enter related
      fields through various courses and workshops. Interestingly, I didn't
      start by taking a course but opted to teach right away. Firstly as a
      coach, I was available during lessons to help participants with exercises,
      typically assisting about five people at a time. The courses range from
      beginner to advanced levels, with some lasting just one evening and
      others, known as academies, running for several months.
    </p>

    <p>
      Apart from coaching, I also participated in the mentoring program,
      assisting academy graduates with their final projects. Additionally, I
      served as a lecturer, teaching a course during a summer school organized
      for high school students in partnership with ČVUT.
    </p>

    <DescriptionList>
      <li>React 2 (including teaching TypeScript, 3 months)</li>
      <li>
        Digital Web Academy (intensive semestral course from zero to React)
      </li>
      <li>
        HTML & CSS (Summer School in collaboration with Czech Technical
        University in Prague)
      </li>
      <li>HTML & CSS 1 (intensive 1 week course) </li>
      <li>HTML & CSS 1 (3 months) HTML & CSS 2 (3 months)</li>
      <li>Version Management with Git 1 (1 day) </li>
      <li>Version Management with Git 2 (1 day) </li>
      <li>Introduction to Programming 1 - JavaScript (1 day)</li>
    </DescriptionList>

    <p>
      I've participated in some of the above mentioned courses multiple times.
    </p>

    {type === 'programming' && tech_stack && (
      <Flex alignItems='center' gap='1rem' flexWrap='wrap'>
        <TechStackTitle>tech stack & tools:</TechStackTitle>
        <TechStack techStack={tech_stack} />
      </Flex>
    )}
  </Flex>
);

export default Czechitas;
