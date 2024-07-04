import { CompanyLogo } from '../components/experiences/Experiences.styled';
import { Building2 } from 'lucide-react';
import { useTheme } from '@/app/providers/styled-components-provider';

import make from '@/app/assets/cv/make/make.webp';
import cyrkl from '@/app/assets/cv/cyrkl/cyrkl.webp';
import czechitas from '@/app/assets/cv/czechitas.webp';
import tchibo from '@/app/assets/cv/tchibo.webp';
import uclAvCr from '@/app/assets/cv/ucl-av-cr.webp';
import umv from '@/app/assets/cv/umv.webp';
import uisk from '@/app/assets/cv/uisk/uisk.webp';
import muni from '@/app/assets/cv/muni.webp';

export type CompanyImage = {
  company: string;
  logoSrc: string;
  isTooDark?: boolean;
};

export const companiesImages: CompanyImage[] = [
  {
    company: 'Make',
    logoSrc: make.src,
  },
  {
    company: 'Cyrkl',
    logoSrc: cyrkl.src,
  },
  {
    company: 'Czechitas',
    logoSrc: czechitas.src,
    isTooDark: true,
  },
  {
    company: 'ÚČL AV ČR',
    logoSrc: uclAvCr.src,
  },
  {
    company: 'Tchibo',
    logoSrc: tchibo.src,
  },
  {
    company: 'ÚMV',
    logoSrc: umv.src,
    isTooDark: true,
  },
  {
    company: 'ÚISK FF UK',
    logoSrc: uisk.src,
  },
  {
    company: 'FF MU',
    logoSrc: muni.src,
  },
];

export const getCompanyLogo = (companyName: string) => {
  const { currentThemeVariant } = useTheme();

  const companyLogo = companiesImages.find(
    (logo) => logo.company === companyName
  );

  return companyLogo ? (
    <CompanyLogo
      width={100}
      src={companyLogo.logoSrc}
      alt={companyName}
      currentTheme={currentThemeVariant}
    />
  ) : (
    <Building2 size={50} strokeWidth={1} />
  );
};
