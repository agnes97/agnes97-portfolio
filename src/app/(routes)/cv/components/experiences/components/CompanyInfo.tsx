import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';
import { getCompanyLogo } from '../../../utils/get-company-logo';
import Employment from './Employment';
import { Experience } from '../../../hooks/use-get-cv';
import { PositionInfoWrapper } from '../Experiences.styled';

type CompanyInfoProps = Pick<
  Experience,
  | 'company_name'
  | 'company_name_shortcut'
  | 'employment_start'
  | 'employment_end'
>;

const CompanyInfo: FC<CompanyInfoProps> = ({
  company_name,
  company_name_shortcut,
  employment_start,
  employment_end,
}) => {
  return (
    <PositionInfoWrapper>
      <Flex justifyContent='center' alignItems='center' width='100px'>
        {getCompanyLogo(company_name_shortcut ?? company_name)}
      </Flex>

      <Employment
        employment_start={employment_start}
        employment_end={employment_end}
      />
    </PositionInfoWrapper>
  );
};

export default CompanyInfo;
