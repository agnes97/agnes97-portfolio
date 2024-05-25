'use client';

import { Divider } from '@/app/styles/global.styled';
import React, { useEffect, useState } from 'react';
import AccessForm from './components/access-form/AccessForm';
import CVHeader from './components/cv-header/CVHeader';
import ContactMe from '@/app/components/contact-me/ContactMe';
import { CV, useGetCV } from './hooks/use-get-cv';
import { isCVLocked } from './utils/update-starred-options';
import Experiences from './components/experiences/Experiences';
import Flex from '@/app/components/flex/Flex';
import { CVContainer } from './page.styled';
import Loading from '@/app/loading';

export default function Cv() {
  const [accessCode, setAccessCode] = useState<string>();
  const { data } = useGetCV(accessCode);

  const [cv, setCv] = useState<CV | null>(null);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    if (data) {
      setCv(data);
    }
  }, [data]);

  const accessCv = (accessCode: string) => {
    setAccessCode(accessCode);

    if (accessCode.length > 1 && isCVLocked(cv)) {
      setError('Invalid access code :(');
      return;
    }
  };

  return (
    <>
      {!cv ? (
        <Loading />
      ) : (
        <>
          <CVContainer>
            <CVHeader cv={cv} />
          </CVContainer>

          <Divider />

          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            minHeight='10rem'
            flexGrow={1}
            gap='1rem'
          >
            <h2>Experiences</h2>

            {isCVLocked(cv) ? (
              <AccessForm accessCv={accessCv} error={error} />
            ) : (
              <CVContainer>
                <Experiences experiences={cv.experiences} />
              </CVContainer>
            )}
          </Flex>

          <Divider />
        </>
      )}

      <ContactMe />
    </>
  );
}
