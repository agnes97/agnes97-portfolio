import { CVHeaderProperty, HeaderCV } from '../components/cv-header/CVHeader';
import { CV } from '../hooks/use-get-cv';

export const options: CVHeaderProperty[] = [
  'name',
  'phone_number',
  'email',
  'address_zip',
  'address_city',
  'date_of_birth',
  'address_street',
] as const;

export const isCVLocked = (cv: CV | null) => {
  if (!cv) return false;

  return options.some((key) => cv[key].includes('✶'));
};

export const updateStarOptions = (currentCvState: HeaderCV) =>
  options.filter((key) => currentCvState[key].includes('✶'));
