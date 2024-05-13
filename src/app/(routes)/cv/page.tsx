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

export default function Cv() {
  const [accessCode, setAccessCode] = useState<string>();
  const { data } = useGetCV(accessCode);
  const [cv, setCv] = useState<CV | null>(null);

  useEffect(() => {
    if (data) {
      setCv(data);
    }
  }, [data]);

  const accessCv = (accessCode: string) => {
    setAccessCode(accessCode);
  };

  return (
    <>
      <CVContainer>{cv && <CVHeader cv={cv} />}</CVContainer>

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
          <AccessForm accessCv={accessCv} />
        ) : (
          <CVContainer>
            <Experiences experiences={cv?.experiences ?? []} />
          </CVContainer>
        )}
      </Flex>

      <Divider />

      <ContactMe />
    </>
  );
}
