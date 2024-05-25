import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';
import DescriptionImages from '../../components/experiences/components/DescriptionImages';

import uisk1 from '@/app/assets/cv/uisk1.jpeg';
import uisk2 from '@/app/assets/cv/uisk2.jpeg';
import uisk3 from '@/app/assets/cv/uisk3.jpeg';
import uisk4 from '@/app/assets/cv/uisk4.jpeg';

const images = [uisk1, uisk2, uisk4, uisk3];

const Uisk: FC = () => {
  return (
    <Flex flexDirection='column' gap='1rem'>
      <p>
        I've been granted a scholarship on the grounds of helping with
        management and administration of Library and Information Science
        department under the Faculty of Arts of Charles University in Prague. I
        started just two months after the beginning of my first semester and
        continued for the whole period of my undergraduate studies. The position
        is open for only two to three students every year.
      </p>

      <p>
        Tasks I completed ranged from helping to assemble new timetable each
        semester to administrative work such as organization and overseeing of
        online and printed documents with occasional graphic work in Photoshop
        for social sites (events, promotions, even vector logos).
      </p>

      <p>
        We also organized Summer Seminar, an yearly event for librarianship
        students from America who then spend two weeks touring czech libraries
        with our students and teachers as guides. I helped with handling the
        guides, communication with exchange students and managing the
        administration.
      </p>

      <p>
        Apart from systems unique to the Charles University, I worked with
        Microsoft's Office 365 package (Word, Excel, PowerPoint) and online
        tools such as Doodle, Trello and others.
      </p>

      <DescriptionImages images={images} />
    </Flex>
  );
};

export default Uisk;
