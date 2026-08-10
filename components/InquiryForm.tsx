"use client";

import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/siteData";

interface InquiryFormProps {
  program?: string;
  title?: string;
  buttonLabel?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({
  program,
  title = "Quick Message",
  buttonLabel = "Send Message",
}: InquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const company = String(data.get("company_website") || "").trim();

    if (company) {
      setStatus("success");
      return;
    }

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please complete the required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setError("");

    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 450);
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
        <input id={`${program ?? "general"}-name`} name="name" type="text" autoComplete="name" required />

        <label htmlFor={`${program ?? "general"}-email`}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input id={`${program ?? "general"}-email`} name="email" type="email" autoComplete="email" required />

        <label htmlFor={`${program ?? "general"}-phone`}>Phone</label>
        <input id={`${program ?? "general"}-phone`} name="phone" type="tel" autoComplete="tel" />

        <label htmlFor={`${program ?? "general"}-message`}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${program ?? "general"}-message`}
          name="message"
          rows={5}
          required
          defaultValue={program ? `I'm interested in ${program}. Please contact me with next steps.` : ""}
        />
      </div>

      {status === "error" ? (
        <p className="form-message error" role="alert">
          {error}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="form-message success" role="status">
          Thank you. Your message is ready for the SIBOC team. You can also call {CONTACT.phone}.
        </p>
      ) : null}

      <button type="submit" className="button primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : buttonLabel}
      </button>
    </form>
  );
}
