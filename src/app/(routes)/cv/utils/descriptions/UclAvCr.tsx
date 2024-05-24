import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';

const UclAvCr: FC = () => (
  <Flex flexDirection='column' gap='1rem'>
    <p>
      I've worked with machine-readable format MARC21 for bibliographic data in
      Aleph. My main tasks included managing authority records of Czech Academy
      of Science to match with the database of Czech National Library for VISK9,
      the program of development of the union catalogue CASLIN. I edited and
      created new authors based on bibliographic research of their name and
      publications.
    </p>

    <p>
      With matching approximately 20 bibliographic records per hour, I've
      connected around 2 000 records every month. For last 4 months only that
      means researching and connecting more than 1 000+ authorities.
    </p>
  </Flex>
);

export default UclAvCr;
