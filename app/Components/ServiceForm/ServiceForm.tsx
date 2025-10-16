"use client";

import React, { useState } from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function ServiceForm({ className }: Props) {
  const [values, setValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(values: FormValues) {
    const e: FormErrors = {};
    if (!values.firstName.trim()) e.firstName = 'First name is required';
    if (!values.lastName.trim()) e.lastName = 'Last name is required';
    if (!values.company.trim()) e.company = 'Company name is required';
    if (!values.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email';
    if (!values.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[0-9()+\-\s]{7,}$/.test(values.phone)) e.phone = 'Enter a valid phone number';
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(null);
    setServerError(null);

    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      const firstKey = Object.keys(validation)[0];
      const el = document.getElementById(firstKey);
      if (el) (el as HTMLElement).focus();
      return;
    }

    setSubmitting(true);
    try {
      
      await new Promise((res) => setTimeout(res, 800));
      console.log("Form Data",values);
      setSuccess('Thanks — we sent you to plans & pricing.');
      setValues({ firstName: '', lastName: '', company: '', email: '', phone: '' });
      setErrors({});
    } catch {
      setServerError('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <section className={clsx('bg-[#16153a] text-white py-20 lg:py-28', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              24/7 coverage at a fraction of the cost of in-house receptionists.
            </h2>
            <p className="mt-6 text-lg max-w-xl text-slate-200">
              Don’t believe us? Fill out the form on the right, and we’ll take you to our pricing
              page, where you can find out just how little 24/7 legal intake will cost you.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white text-[#0b1630] rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-lg mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Tell us about yourself. We’ll show you</h3>
              <p className="text-sm text-slate-600 mb-6">all of our pricing information on the next page.</p>

              {serverError && (
                <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">{serverError}</div>
              )}
              {success && (
                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-800">{success}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Service inquiry form">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    required
                    aria-required
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    placeholder="First Name*"
                    className={clsx(
                      'mt-1 block w-full rounded-md px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.firstName ? 'border-red-500' : 'border border-slate-300'
                    )}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    required
                    aria-required
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    placeholder="Last Name*"
                    className={clsx(
                      'mt-1 block w-full rounded-md px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.lastName ? 'border-red-500' : 'border border-slate-300'
                    )}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company Name*
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    required
                    aria-required
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    placeholder="Company Name*"
                    className={clsx(
                      'mt-1 block w-full rounded-md px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.company ? 'border-red-500' : 'border border-slate-300'
                    )}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-1 text-sm text-red-600">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    aria-required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="Email*"
                    className={clsx(
                      'mt-1 block w-full rounded-md px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.email ? 'border-red-500' : 'border border-slate-300'
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Cell Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Cell Phone*"
                    required
                    aria-required
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={clsx(
                      'mt-1 block w-full rounded-md px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
                      errors.phone ? 'border-red-500' : 'border border-slate-300'
                    )}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={clsx(
                      'inline-flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold px-6 py-3 text-base shadow-md transition',
                      submitting ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg hover:bg-blue-600'
                    )}
                  >
                    {submitting ? 'Sending…' : 'See plans & pricing'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}