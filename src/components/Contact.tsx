"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SectionTitle from "@/components/SectionTitle";
import SectionDoodle from "@/components/SectionDoodle";

const INPUT_CLASSES =
  "w-full rounded-xl px-4 py-3 text-sm bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]/60 focus:ring-2 focus:ring-[var(--accent)]/10 transition-all";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = String(data.get("user_name") ?? "").trim();
    const email = String(data.get("user_email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) errs.name = "Name is required.";
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address.";
    if (!message || message.length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      // Replace these with your real EmailJS credentials
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_id",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "public_key"
      );
      setStatus("success");
      form.reset();
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 bg-[var(--card)]/40 overflow-hidden">
      <SectionDoodle variant="contact" />
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Get in Touch"
          title="Let's build something together"
          subtitle="Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always open."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-4">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  label: "Open to",
                  value: "Full-time & contract opportunities",
                },
                { label: "Response time", value: "Usually within 24 hours" },
                { label: "Timezone", value: "EAT (UTC+3), Nairobi, Kenya" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {label}
                  </span>
                  <span className="text-sm text-[var(--foreground)] font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("hello@melody.dev");
                  toast.success("Email copied to clipboard!");
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline underline-offset-4 cursor-pointer"
              >
                Copy email address →
              </button>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  autoComplete="name"
                  placeholder="Alex Johnson"
                  className={INPUT_CLASSES}
                  onChange={() =>
                    errors.name && setErrors((e) => ({ ...e, name: "" }))
                  }
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  placeholder="alex@example.com"
                  className={INPUT_CLASSES}
                  onChange={() =>
                    errors.email && setErrors((e) => ({ ...e, email: "" }))
                  }
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, idea, or opportunity…"
                  className={INPUT_CLASSES + " resize-none"}
                  onChange={() =>
                    errors.message && setErrors((e) => ({ ...e, message: "" }))
                  }
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={15} /> Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
