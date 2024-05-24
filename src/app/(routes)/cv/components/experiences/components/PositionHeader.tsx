import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';
import { getPositionIcon } from '../../../utils/get-position-icon';
import { AccentedUppercase } from '../Experiences.styled';
import { Experience } from '../../../hooks/use-get-cv';

type PositionHeaderProps = Pick<
  Experience,
  'type' | 'position' | 'company_name'
>;

const PositionHeader: FC<PositionHeaderProps> = ({
  type,
  position,
  company_name,
}) => {
  return (
    <Flex flexDirection='column' gap='0.25rem'>
      <AccentedUppercase isBold isUppercase>
        <Flex alignItems='center' gap='0.25rem'>
          {getPositionIcon(type)}
          {position}
        </Flex>
      </AccentedUppercase>

      <Flex alignItems='center' gap='0.25rem'>
        <span>at</span>
        <AccentedUppercase>{company_name}</AccentedUppercase>
      </Flex>
    </Flex>
  );
};

export default PositionHeader;
