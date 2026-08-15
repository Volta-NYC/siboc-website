"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/siteData";

interface InquiryFormProps {
  program?: string;
  title?: string;
  buttonLabel?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "phone" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InquiryForm({
  program,
  title = "Quick Message",
  buttonLabel = "Send Message",
}: InquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const company = String(data.get("company_website") || "").trim();
    const nextFieldErrors: FieldErrors = {};

    if (company) {
      setStatus("success");
      return;
    }

    if (!name) {
      nextFieldErrors.name = "Please enter your name.";
    }

    if (!email) {
      nextFieldErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(email)) {
      nextFieldErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      nextFieldErrors.message = "Please enter a message.";
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setStatus("error");
      setError("Please correct the highlighted fields.");
      setFieldErrors(nextFieldErrors);
      return;
    }

    setStatus("submitting");
    setError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_website: company,
          email,
          message,
          name,
          phone,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "We could not send your message right now. Please try again.");
        setFieldErrors(result.fieldErrors || {});
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("We could not send your message right now. Please check your connection and try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="program" value={program ?? "General inquiry"} />
      <div className="hidden-field" aria-hidden="true">
        <label htmlFor={`${program ?? "general"}-company-website`}>Company website</label>
        <input id={`${program ?? "general"}-company-website`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <h3>{title}</h3>
      {program ? (
        <p>
          Tell us what you need for <strong>{program}</strong>. SIBOC will follow up with next steps.
        </p>
      ) : null}

      <div className="form-grid">
        <label htmlFor={`${program ?? "general"}-name`}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${program ?? "general"}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={fieldErrors.name ? "true" : undefined}
          aria-describedby={fieldErrors.name ? `${program ?? "general"}-name-error` : undefined}
        />
        {fieldErrors.name ? (
          <p className="field-error" id={`${program ?? "general"}-name-error`}>
            {fieldErrors.name}
          </p>
        ) : null}

        <label htmlFor={`${program ?? "general"}-email`}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${program ?? "general"}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={fieldErrors.email ? "true" : undefined}
          aria-describedby={fieldErrors.email ? `${program ?? "general"}-email-error` : undefined}
        />
        {fieldErrors.email ? (
          <p className="field-error" id={`${program ?? "general"}-email-error`}>
            {fieldErrors.email}
          </p>
        ) : null}

        <label htmlFor={`${program ?? "general"}-phone`}>Phone</label>
        <input
          id={`${program ?? "general"}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={fieldErrors.phone ? "true" : undefined}
          aria-describedby={fieldErrors.phone ? `${program ?? "general"}-phone-error` : undefined}
        />
        {fieldErrors.phone ? (
          <p className="field-error" id={`${program ?? "general"}-phone-error`}>
            {fieldErrors.phone}
          </p>
        ) : null}

        <label htmlFor={`${program ?? "general"}-message`}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${program ?? "general"}-message`}
          name="message"
          rows={5}
          required
          defaultValue={program ? `I'm interested in ${program}. Please contact me with next steps.` : ""}
          aria-invalid={fieldErrors.message ? "true" : undefined}
          aria-describedby={fieldErrors.message ? `${program ?? "general"}-message-error` : undefined}
        />
        {fieldErrors.message ? (
          <p className="field-error" id={`${program ?? "general"}-message-error`}>
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="form-message error" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="form-message success" role="status">
          Thank you. Your message was sent to the SIBOC team. You can also call {CONTACT.phone}.
        </p>
      ) : null}

      <button type="submit" className="button primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
}
