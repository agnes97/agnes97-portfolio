import React, { FC } from 'react';
import { Experience as ExperienceType } from '../../hooks/use-get-cv';
import { Experience, ExperiencesContainer } from './Experiences.styled';

import { companiesImages } from '../../utils/get-company-logo';
import { useTheme } from '@/app/providers/styled-components-provider';
import CompanyInfo from './components/CompanyInfo';
import Position from './components/Position';

type ExperiencesProps = {
  experiences: ExperienceType[];
};

const Experiences: FC<ExperiencesProps> = ({ experiences }) => {
  const { currentThemeVariant } = useTheme();

  return (
    <ExperiencesContainer
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      rowGap='4rem'
    >
      {experiences.map((experience, index) => {
        const {
          type,
          company_name,
          company_name_shortcut,
          employment_start,
          employment_end,
          position,
          tech_stack,
        } = experience;

        const isLogoTooDark = companiesImages.find(({ company }) =>
          company_name_shortcut
            ? company === company_name_shortcut
            : company === company_name
        )?.isTooDark;

        return (
          <Experience
            key={index}
            isLogoTooDark={currentThemeVariant === 'dark' && isLogoTooDark}
          >
            <CompanyInfo
              company_name={company_name}
              company_name_shortcut={company_name_shortcut}
              employment_start={employment_start}
              employment_end={employment_end}
            />

            <Position
              type={type}
              position={position}
              company_name={company_name}
              company_name_shortcut={company_name_shortcut}
              tech_stack={tech_stack}
            />
          </Experience>
        );
      })}
    </ExperiencesContainer>
  );
};

export default Experiences;
