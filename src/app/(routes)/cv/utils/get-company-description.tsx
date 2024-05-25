import { Experience } from '../hooks/use-get-cv';

// Descriptions
import Uisk from './descriptions/Uisk';
import Cyrkl from './descriptions/Cyrkl';
import UclAvCr from './descriptions/UclAvCr';
import Umv from './descriptions/Umv';
import FfMu from './descriptions/FfMu';
import Czechitas from './descriptions/Czechitas';

export type DescriptionProps = Pick<
  Experience,
  'company_name' | 'type' | 'tech_stack'
>;

type DescriptionMap = Map<string, (props: DescriptionProps) => JSX.Element>;

export const companyDescriptionsMap: DescriptionMap = new Map([
  ['Cyrkl', (props) => <Cyrkl {...props} />],
  ['Czechitas', (props) => <Czechitas {...props} />],
  ['ÚČL AV ČR', () => <UclAvCr />],
  ['ÚMV', () => <Umv />],
  ['ÚISK FF UK', () => <Uisk />],
  ['FF MU', () => <FfMu />],
]);

export const getCompanyDescription = (props: DescriptionProps) => {
  const Description = companyDescriptionsMap.get(props.company_name);

  if (!Description) return <></>;

  return Description(props);
};
