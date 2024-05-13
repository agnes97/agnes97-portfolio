import React, { FC } from 'react';
import { Experience as ExperienceType } from '../../hooks/use-get-cv';
import {
  CompanyLogo,
  Experience,
  ExperiencesContainer,
} from './Experiences.styled';
import { Building2 } from 'lucide-react';
import Flex from '@/app/components/flex/Flex';
import { useTheme } from '@/app/providers/styled-components-provider';

import cyrkl from '@/app/assets/cv/cyrkl.webp';
import czechitas from '@/app/assets/cv/czechitas.webp';

const companiesImages = [
  {
    company: 'cyrkl',
    logoSrc: cyrkl.src,
  },
  {
    company: 'czechitas',
    logoSrc: czechitas.src,
  },
];

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
      rowGap='3rem'
    >
      {experiences.map((experience, index) => {
        const { company_name, employment_start, employment_end } = experience;

        const companyLogo =
          index === 1
            ? czechitas.src
            : companiesImages.find(
                (logo) => logo.company === company_name.toLowerCase()
              )?.logoSrc;

        const descriptions = [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc. Nullam nec purus nec nunc. Nullam nec purus nec.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.',
        ];
        return (
          <Experience key={index}>
            <Flex columnGap='3rem' flexWrap='wrap'>
              {companyLogo ? (
                <CompanyLogo
                  width={130}
                  src={companyLogo}
                  alt={company_name}
                  currentTheme={currentThemeVariant}
                />
              ) : (
                <Building2 size={50} />
              )}

              <Flex flexDirection='column' rowGap='0.5rem'>
                <h3>{company_name}</h3>
                <p>
                  {employment_start} - {employment_end ?? 'current'}
                </p>
              </Flex>
            </Flex>

            <div>{descriptions[index]}</div>
          </Experience>
        );
      })}
    </ExperiencesContainer>
  );
};

export default Experiences;
