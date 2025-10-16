import React from "react";
import clsx from "clsx";
import FormInput from "./FormInput";
import { FormValues, FormErrors } from "./useServiceForm";

type FormContainerProps = {
  values: FormValues;
  errors: FormErrors;
  submitting: boolean;
  success: string | null;
  serverError: string | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormContainer({
  values,
  errors,
  submitting,
  success,
  serverError,
  onSubmit,
  onChange,
}: FormContainerProps) {
  return (
    <div className="lg:col-span-6">
      <div className="bg-white text-[#0b1630] rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-lg mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          Tell us about yourself. We&#39;ll show you all of our pricing information on the next page.
        </h3>

        {serverError && (
          <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
            {serverError}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-800">
            {success}
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="space-y-4"
          aria-label="Service inquiry form"
        >
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name*"
            value={values.firstName}
            onChange={onChange}
            error={errors.firstName}
            placeholder="First Name*"
            required
          />

          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name*"
            value={values.lastName}
            onChange={onChange}
            error={errors.lastName}
            placeholder="Last Name*"
            required
          />

          <FormInput
            id="company"
            name="company"
            label="Company Name*"
            value={values.company}
            onChange={onChange}
            error={errors.company}
            placeholder="Company Name*"
            required
          />

          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email*"
            value={values.email}
            onChange={onChange}
            error={errors.email}
            placeholder="Email*"
            required
          />

          <FormInput
            id="phone"
            name="phone"
            label="Cell Phone*"
            value={values.phone}
            onChange={onChange}
            error={errors.phone}
            placeholder="Cell Phone*"
            required
          />

          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={submitting}
              className={clsx(
                "inline-flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold px-6 py-3 text-base shadow-md transition",
                submitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:shadow-lg hover:bg-blue-600"
              )}
            >
              {submitting ? "Sending…" : "See plans & pricing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
