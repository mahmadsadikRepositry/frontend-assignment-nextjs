import { useState } from "react";

export type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function useServiceForm() {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(values: FormValues) {
    const e: FormErrors = {};
    if (!values.firstName.trim()) e.firstName = "First name is required";
    if (!values.lastName.trim()) e.lastName = "Last name is required";
    if (!values.company.trim()) e.company = "Company name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Enter a valid email";
    if (!values.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9()+\-\s]{7,}$/.test(values.phone))
      e.phone = "Enter a valid phone number";
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
      console.log("Form Data", values);
      setSuccess("Thanks — we sent you to plans & pricing.");
      setValues({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
      });
      setErrors({});
    } catch {
      setServerError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    console.log("errors", errors);
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return {
    values,
    errors,
    submitting,
    success,
    serverError,
    handleSubmit,
    handleChange,
  };
}