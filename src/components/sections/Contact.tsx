import { type FormEvent, useState } from 'react';
import { CheckCircle2, Mail, Send } from 'lucide-react';
import { contactConfig } from '../../data/contact';
import { profile } from '../../data/profile';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { SocialLinks } from '../ui/SocialLinks';

interface ContactFormData { name: string; email: string; subject: string; message: string; website: string; }
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
const initialForm: ContactFormData = { name: '', email: '', subject: '', message: '', website: '' };

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website) return;
    setStatus('submitting');
    setErrorMessage('');
    try {
      const response = await fetch(contactConfig.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `Portfolio enquiry from ${form.name}`,
          message: form.message,
          _template: 'table',
          _captcha: 'false'
        })
      });
      const result = await response.json() as { success?: boolean | string; message?: string };
      const succeeded = result.success === true || result.success === 'true';
      if (!response.ok || !succeeded) throw new Error(result.message || 'Message could not be sent.');
      setForm(initialForm);
      setStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Message could not be sent.');
      setStatus('error');
    }
  };

  const inputClass = 'mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-accent-400/60 focus:ring-2 focus:ring-accent-400/20';

  return <Section id="contact"><div className="grid gap-5 lg:grid-cols-[.82fr_1.18fr]"><Card className="relative overflow-hidden p-7 sm:p-10"><div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent-400/10 blur-3xl" /><div className="relative"><p className="text-xs font-bold uppercase tracking-[.24em] text-accent-300">Let’s build something useful</p><h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">Have an opportunity or an idea worth exploring?</h2><p className="mt-6 text-base leading-7 text-slate-400">I’m open to software development opportunities and conversations about thoughtful digital products.</p><a href={`mailto:${profile.email}`} className="mt-8 inline-flex min-h-11 items-center gap-3 break-all text-sm font-medium text-accent-300 hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"><Mail size={18} className="shrink-0" />{profile.email}</a><div className="mt-5"><SocialLinks /></div></div></Card><Card className="p-7 sm:p-10"><h3 className="text-2xl font-semibold text-white">Send a message</h3><p className="mt-2 text-sm leading-6 text-slate-400">Send your message directly from this page. I’ll reply to the email address you provide.</p><form className="mt-7 grid gap-5" onSubmit={handleSubmit}><label className="absolute -left-[9999px]" aria-hidden="true">Website<input name="website" value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} tabIndex={-1} autoComplete="off" /></label><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium text-slate-300">Your name<input className={inputClass} name="name" value={form.name} onChange={(event) => { setForm({ ...form, name: event.target.value }); setStatus('idle'); }} autoComplete="name" placeholder="Your name" required /></label><label className="text-sm font-medium text-slate-300">Your email<input className={inputClass} type="email" name="email" value={form.email} onChange={(event) => { setForm({ ...form, email: event.target.value }); setStatus('idle'); }} autoComplete="email" placeholder="you@example.com" required /></label></div><label className="text-sm font-medium text-slate-300">Subject<input className={inputClass} name="subject" value={form.subject} onChange={(event) => { setForm({ ...form, subject: event.target.value }); setStatus('idle'); }} placeholder="Project or opportunity" /></label><label className="text-sm font-medium text-slate-300">Message<textarea className={`${inputClass} min-h-36 resize-y py-3`} name="message" value={form.message} onChange={(event) => { setForm({ ...form, message: event.target.value }); setStatus('idle'); }} placeholder="Tell me a little about what you have in mind..." required /></label><div aria-live="polite">{status === 'success' && <p className="flex items-center gap-2 text-sm text-accent-300"><CheckCircle2 size={17} />Your message was sent successfully.</p>}{status === 'error' && <p className="text-sm text-rose-300">{errorMessage} Please email me directly if the problem continues.</p>}</div><button type="submit" disabled={status === 'submitting'} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent-400 px-6 text-sm font-bold text-ink-950 transition hover:bg-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950 disabled:cursor-wait disabled:opacity-60 sm:justify-self-start">{status === 'submitting' ? 'Sending…' : 'Send message'} <Send size={17} /></button></form></Card></div></Section>;
}
