import { type FormEvent, useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { contactConfig } from "../../../data/contact";
import { profile } from "../../../data/profile";
import { Section } from "../../ui/Section";
import { SocialLinks } from "../../ui/SocialLinks";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}
type SubmissionStatus =
  | "idle"
  | "submitting"
  | "success"
  | "activation"
  | "error";
const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website) return;
    setStatus("submitting");
    setErrorMessage("");
    try {
      const response = await fetch(contactConfig.endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `Portfolio enquiry from ${form.name}`,
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };
      const succeeded = result.success === true || result.success === "true";
      if (result.message?.toLowerCase().includes("activation")) {
        setStatus("activation");
        return;
      }
      if (!response.ok || !succeeded)
        throw new Error(result.message || "Message could not be sent.");
      setForm(initialForm);
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Message could not be sent.",
      );
      setStatus("error");
    }
  };

  const inputClass =
    "mt-2 min-h-12 w-full border-b border-ink-950/20 bg-transparent px-0 text-base text-ink-950 outline-none transition placeholder:text-ink-800/35 focus:border-accent-500";
  const update = (field: keyof ContactFormData, value: string) => {
    setForm({ ...form, [field]: value });
    setStatus("idle");
  };

  return (
    <Section id="contact" className="bg-accent-500 text-white">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.22em] text-white/75">
            06 / Contact
          </p>
          <h2 className="mt-5 max-w-xl font-display text-5xl leading-[1.02] tracking-[-.035em] sm:text-6xl">
            Let’s discuss what you’re building.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-white/90">
            I’m open to software development opportunities and conversations
            about practical digital products.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex min-h-11 items-center gap-3 break-all text-sm font-semibold text-white hover:text-paper-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail size={18} />
            {profile.email}
          </a>
          <div className="mt-5 [&_a]:border-white/30 [&_a]:bg-transparent [&_a]:text-white [&_a:hover]:border-white/70 [&_a:hover]:text-white">
            <SocialLinks showLabels />
          </div>
        </div>
        <div className="rounded-2xl bg-paper-50 p-6 text-ink-950 shadow-glow sm:p-9">
          <h3 className="font-display text-3xl">Send a message</h3>
          <p className="mt-2 text-sm leading-6 text-ink-800/60">
            Share a few details and I’ll reply by email.
          </p>
          <form className="mt-7 grid gap-6" onSubmit={handleSubmit}>
            <label className="absolute -left-[9999px]" aria-hidden="true">
              Website
              <input
                name="website"
                value={form.website}
                onChange={(event) =>
                  setForm({ ...form, website: event.target.value })
                }
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="text-sm font-semibold text-ink-800">
                Your name
                <input
                  className={inputClass}
                  name="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="text-sm font-semibold text-ink-800">
                Your email
                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="text-sm font-semibold text-ink-800">
              Subject
              <input
                className={inputClass}
                name="subject"
                value={form.subject}
                onChange={(event) => update("subject", event.target.value)}
                placeholder="Project or opportunity"
              />
            </label>
            <label className="text-sm font-semibold text-ink-800">
              Message
              <textarea
                className={`${inputClass} min-h-28 resize-y py-3`}
                name="message"
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Tell me what you have in mind..."
                required
              />
            </label>
            <div aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-accent-600">
                  <CheckCircle2 size={17} />
                  Your message was sent successfully.
                </p>
              )}
              {status === "activation" && (
                <p className="text-sm text-amber-700">
                  Activation email sent to {profile.email}. Activate the form,
                  then submit again.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-700">
                  {errorMessage} Please email me directly if the problem
                  continues.
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink-950 px-6 text-sm font-semibold text-white transition hover:bg-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-4 disabled:cursor-wait disabled:opacity-60 sm:justify-self-start"
            >
              {status === "submitting" ? "Sending…" : "Send message"}{" "}
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
