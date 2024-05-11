'use client';

import { Divider } from '@/app/styles/global.styled';
import React, { useEffect, useState } from 'react';
import AccessForm from './components/access-form/AccessForm';
import CVHeader from './components/cv-header/CVHeader';
import ContactMe from '@/app/components/contact-me/ContactMe';
import { CV, useGetCV } from './hooks/use-get-cv';

export default function Cv() {
  const [accessCode, setAccessCode] = useState<string>();
  const { data } = useGetCV(accessCode);
  const [cv, setCv] = useState<CV | undefined>(data);

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
      <CVHeader cv={cv} />

      <Divider />

      <AccessForm accessCv={accessCv} />

      <Divider />

      <ContactMe />
    </>
  );
}
