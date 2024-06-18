import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';

import { DescriptionProps } from '../get-company-description';
import {
  DescriptionList,
  TechStackTitle,
} from '../../components/experiences/Experiences.styled';
import TechStack from '@/app/components/tech-stack/TechStack';
import DescriptionImages from '../../components/experiences/components/DescriptionImages';

import cyrkl1 from '@/app/assets/cv/cyrkl/cyrkl1.webp';
import cyrkl2 from '@/app/assets/cv/cyrkl/cyrkl2.webp';
import cyrkl3 from '@/app/assets/cv/cyrkl/cyrkl3.webp';
import cyrkl4 from '@/app/assets/cv/cyrkl/cyrkl4.webp';
import cyrkl5 from '@/app/assets/cv/cyrkl/cyrkl5.webp';
import cyrkl6 from '@/app/assets/cv/cyrkl/cyrkl6.webp';
import cyrkl7 from '@/app/assets/cv/cyrkl/cyrkl7.webp';
import cyrkl8 from '@/app/assets/cv/cyrkl/cyrkl8.webp';
import cyrkl9 from '@/app/assets/cv/cyrkl/cyrkl9.webp';
import cyrkl10 from '@/app/assets/cv/cyrkl/cyrkl10.webp';
import cyrkl11 from '@/app/assets/cv/cyrkl/cyrkl11.webp';
import cyrkl12 from '@/app/assets/cv/cyrkl/cyrkl12.webp';
import cyrkl13 from '@/app/assets/cv/cyrkl/cyrkl13.webp';
import cyrkl14 from '@/app/assets/cv/cyrkl/cyrkl14.webp';
import cyrkl15 from '@/app/assets/cv/cyrkl/cyrkl15.webp';
import cyrkl16 from '@/app/assets/cv/cyrkl/cyrkl16.webp';
import cyrkl17 from '@/app/assets/cv/cyrkl/cyrkl17.webp';
import cyrkl18 from '@/app/assets/cv/cyrkl/cyrkl18.webp';
import cyrkl19 from '@/app/assets/cv/cyrkl/cyrkl19.webp';
import cyrkl20 from '@/app/assets/cv/cyrkl/cyrkl20.webp';
import cyrkl21 from '@/app/assets/cv/cyrkl/cyrkl21.webp';
import cyrkl22 from '@/app/assets/cv/cyrkl/cyrkl22.webp';
import cyrkl23 from '@/app/assets/cv/cyrkl/cyrkl23.webp';

const imagesFirstPart = [cyrkl1, cyrkl2, cyrkl3, cyrkl4];

const images = [
  cyrkl5,
  cyrkl6,
  cyrkl7,
  cyrkl8,
  cyrkl9,
  cyrkl10,
  cyrkl11,
  cyrkl12,
  cyrkl13,
  cyrkl14,
  cyrkl15,
  cyrkl16,
  cyrkl17,
  cyrkl18,
  cyrkl19,
  cyrkl20,
  cyrkl21,
  cyrkl22,
  cyrkl23,
];

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

    <DescriptionList>
      <li>a rescue ranger</li>
      <li>chief quality officer</li>
      <li>component comittee member</li>
      <li>front-end guidelines owner</li>
      <li>dev conf organiser</li>
    </DescriptionList>

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

    <div>
      <DescriptionImages previewImages={imagesFirstPart} images={images} />
    </div>
  </Flex>
);

export default Cyrkl;
