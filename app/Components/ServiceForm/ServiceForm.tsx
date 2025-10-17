'use client';

import React from 'react';
import clsx from 'clsx';
import { useServiceForm } from './useServiceForm';
import HeroSection from './HeroSection';
import FormContainer from './FormContainer';

type Props = {
  className?: string;
};

export default function ServiceForm({ className }: Props) {
  const { values, errors, submitting, success, serverError, handleSubmit, handleChange } =
    useServiceForm();

  return (
    <section className={clsx('bg-[#16153a] text-white py-20 lg:py-28', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <HeroSection />
          <FormContainer
            values={values}
            errors={errors}
            submitting={submitting}
            success={success}
            serverError={serverError}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
}
