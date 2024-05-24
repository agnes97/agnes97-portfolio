import Flex from '@/app/components/flex/Flex';
import { InfinityIcon } from 'lucide-react';
import React, { FC } from 'react';
import { AccentedUppercase } from '../Experiences.styled';
import { Experience } from '../../../hooks/use-get-cv';

type EmploymentProps = Pick<Experience, 'employment_start' | 'employment_end'>;

const Employment: FC<EmploymentProps> = ({
  employment_start,
  employment_end,
}) => {
  return (
    <Flex flexWrap='wrap' style={{ fontVariantNumeric: 'tabular-nums' }}>
      {employment_end ? (
        <>
          <AccentedUppercase>{employment_start}</AccentedUppercase>
          <AccentedUppercase>&nbsp;~&nbsp;{employment_end}</AccentedUppercase>
        </>
      ) : (
        <AccentedUppercase>
          <Flex alignItems='center'>
            <span>{employment_start}&nbsp;~&nbsp;</span>
            <span style={{ width: '3.5rem' }}>
              <InfinityIcon width={20} style={{ marginTop: '5px' }} />
            </span>
          </Flex>
        </AccentedUppercase>
      )}
    </Flex>
  );
};

export default Employment;
