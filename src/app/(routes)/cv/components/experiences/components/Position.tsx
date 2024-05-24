import React, { FC } from 'react';
import PositionHeader from './PositionHeader';
import { Experience } from '../../../hooks/use-get-cv';
import { getCompanyDescription } from '../../../utils/get-company-description';
import Flex from '@/app/components/flex/Flex';

type PositionProps = Pick<
  Experience,
  'type' | 'position' | 'company_name' | 'company_name_shortcut' | 'tech_stack'
>;

const Position: FC<PositionProps> = ({
  type,
  position,
  company_name,
  company_name_shortcut,
  tech_stack,
}) => (
  <Flex flexDirection='column' gap='0.75rem'>
    <PositionHeader
      type={type}
      position={position}
      company_name={company_name}
    />

    {getCompanyDescription({
      company_name: company_name_shortcut
        ? company_name_shortcut
        : company_name,
      type,
      tech_stack,
    })}
  </Flex>
);

export default Position;
