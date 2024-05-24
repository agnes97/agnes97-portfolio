import Flex from '@/app/components/flex/Flex';
import UiskDescription from './descriptions/Uisk';
import CyrklDescription from './descriptions/Cyrkl';
import { Experience } from '../hooks/use-get-cv';

export type DescriptionProps = Pick<
  Experience,
  'company_name' | 'type' | 'tech_stack'
>;

export const companyDescriptionsMap: Map<
  string,
  (props: DescriptionProps) => JSX.Element
> = new Map([
  ['Cyrkl', (props) => <CyrklDescription {...props} />],
  ['Czechitas', () => <div>Hello World</div>],
  [
    'ÚČL AV ČR',
    () => (
      <Flex flexDirection='column' gap='1rem'>
        <p>
          I've worked with machine-readable format MARC21 for bibliographic data
          in Aleph. My main tasks included managing authority records of Czech
          Academy of Science to match with the database of Czech National
          Library for VISK9, the program of development of the union catalogue
          CASLIN. I edited and created new authors based on bibliographic
          research of their name and publications.
        </p>

        <p>
          With matching approximately 20 bibliographic records per hour, I've
          connected around 2 000 records every month. For last 4 months only
          that means researching and connecting more than 1 000+ authorities.
        </p>
      </Flex>
    ),
  ],
  [
    'ÚMV',
    () => (
      <Flex flexDirection='column' gap='1rem'>
        <p>
          During this internship, I've been focusing mainly on bibliographic
          research with all data almost exclusively written in english. I've
          chosen publications/publications they reviewed for acqusition from
          nearly 20 international journals and 30 university publishers. I aimed
          at 5 research centers of the Institute of International Relations. For
          bibliographic references I've used standard ISO 690.
        </p>

        <p>
          I've been also cataloging articles using RDA, standard for descriptive
          cataloging, in Caslin, and I've worked with World of Science,
          Clarivate Analytics, citation index and research intelligence
          platform, to research specific journals and their performance
          represented by their impact factor.
        </p>
      </Flex>
    ),
  ],
  ['ÚISK FF UK', (props) => <UiskDescription {...props} />],
  [
    'FF MU',
    () => (
      <Flex flexDirection='column' gap='1rem'>
        <p>
          This internship was focused on reference desk work, including
          bibliographic research in various languages for students of Faculty of
          Arts, Masaryk University Brno. At the reference desk with Aleph,
          integrated library system, I've helped students with any questions and
          navigating in the open acces library which has floor arranged
          according to adjusted Universal Decimal Classification (UDC). Part of
          the job was also work on digitalization of documents that are
          otherwise lended only on the spot.
        </p>

        <p>
          I've been learning about teaching information education to university
          students, including correct citation or research strategies. I have a
          certificate for completing the course runned by the library for this
          purpose myself as well.
        </p>
      </Flex>
    ),
  ],
]);

export const getCompanyDescription = (props: DescriptionProps) => {
  const Description = companyDescriptionsMap.get(props.company_name);

  if (!Description) return <></>;

  return Description(props);
};
