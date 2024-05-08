'use client';

import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import AccessForm from './components/access-form/AccessForm';
import CVHeader from './components/cv-header/CVHeader';
import ContactMe from '@/app/components/contact-me/ContactMe';

export default function Cv() {
  return (
    <>
      <CVHeader />

      <Divider />

      <AccessForm />

      <Divider />

      <ContactMe />
    </>
  );
}
