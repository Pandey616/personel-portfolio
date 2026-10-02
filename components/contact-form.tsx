"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { profile } from "@/content/resume";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z
    .string()
    .min(20, "Please share a little more context (20 characters minimum)."),
  website: z.string().max(0).optional(),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });
  function onSubmit(values: FormValues) {
    if (values.website) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\nReply to: ${values.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
  }
  return (
    <div className="panel p-6 md:p-8">
      {sent && (
        <div className="mb-5 rounded-xl border border-signal/30 bg-signal/10 p-4 text-sm leading-6 text-signal">
          Your email client should now be open with a prepared message. If it
          did not open, email {profile.email} directly.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
        <div>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input id="name" className="form-input" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <label className="form-label" htmlFor="message">
            What would you like to discuss?
          </label>
          <textarea
            id="message"
            rows={6}
            className="form-input resize-y"
            {...register("message")}
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-primary w-full sm:w-fit"
        >
          {isSubmitting ? "Preparing…" : "Prepare email"}
        </button>
      </form>
    </div>
  );
}
