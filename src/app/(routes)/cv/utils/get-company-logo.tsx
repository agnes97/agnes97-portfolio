import cyrkl from '@/app/assets/cv/cyrkl/cyrkl.webp';
import czechitas from '@/app/assets/cv/czechitas.png';
import tchibo from '@/app/assets/cv/tchibo.png';
import uclAvCr from '@/app/assets/cv/ucl-av-cr.png';
import umv from '@/app/assets/cv/umv.png';
import uisk from '@/app/assets/cv/uisk.png';
import muni from '@/app/assets/cv/muni.png';
import { CompanyLogo } from '../components/experiences/Experiences.styled';
import { Building2 } from 'lucide-react';
import { useTheme } from '@/app/providers/styled-components-provider';

export type CompanyImage = {
  company: string;
  logoSrc: string;
  isTooDark?: boolean;
};

export const companiesImages: CompanyImage[] = [
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
