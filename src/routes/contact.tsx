import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero.jpg";
import { useState } from "react";
import { z } from "zod";
import { SCHOOL, waLink } from "@/lib/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WitQuest Castle School" },
      { name: "description", content: "Visit, call, email or WhatsApp WitQuest Castle School in Muranga County, Kenya." },
      { property: "og:title", content: "Contact WitQuest Castle" },
      { property: "og:description", content: "We'd love to hear from your family." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30).optional().or(z.literal("")),
  subject: z.string().min(1, "Choose a subject").max(120),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      subject: String(fd.get("subject") || ""),
      message: String(fd.get("message") || ""),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, phone, subject, message } = parsed.data;
    const text = [
      `Hello WitQuest Castle School,`,
      ``,
      `My name is ${name}.`,
      phone ? `Phone: ${phone}` : null,
      `Subject: ${subject}`,
      ``,
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from your family."
        subtitle="Visit our school, call us, or chat on WhatsApp — we typically reply within minutes during school hours."
        image={heroImg}
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Send us a message on WhatsApp</h2>
            <p className="mt-4 text-muted-foreground">
              Fill in the form — when you click send, we'll open WhatsApp with your message ready to deliver
              to our admissions team. Fast, easy, and reaches us directly.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-semibold text-primary">Full name *</label>
                <input
                  name="name"
                  type="text"
                  maxLength={100}
                  className="mt-2 w-full rounded-full px-5 py-3 bg-card border border-border focus:border-brand-red focus:outline-none transition-colors"
                />
                {errors.name && <p className="mt-1 text-xs text-brand-red">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-primary">Phone (optional)</label>
                <input
                  name="phone"
                  type="tel"
                  maxLength={30}
                  className="mt-2 w-full rounded-full px-5 py-3 bg-card border border-border focus:border-brand-red focus:outline-none transition-colors"
                />
                {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-primary">Subject *</label>
                <select
                  name="subject"
                  defaultValue=""
                  className="mt-2 w-full rounded-full px-5 py-3 bg-card border border-border focus:border-brand-red focus:outline-none transition-colors"
                >
                  <option value="" disabled>Choose a topic</option>
                  <option>Admissions inquiry</option>
                  <option>Schedule a school visit</option>
                  <option>Fees & scholarships</option>
                  <option>Careers</option>
                  <option>General question</option>
                </select>
                {errors.subject && <p className="mt-1 text-xs text-brand-red">{errors.subject}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-primary">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  className="mt-2 w-full rounded-3xl px-5 py-3 bg-card border border-border focus:border-brand-red focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-brand-red">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-whatsapp">
                <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.27c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.21 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
                </svg>
                Send via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground">
                Prefer email? Write to{" "}
                <a className="text-primary font-semibold underline" href={`mailto:${SCHOOL.email}`}>
                  {SCHOOL.email}
                </a>
                .
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="feature-card">
              <h3 className="text-xl">Visit Us</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {SCHOOL.address.line1}<br />
                {SCHOOL.address.line2}<br />
                {SCHOOL.address.line3}
              </p>
              <p className="mt-3 text-sm text-brand-red font-semibold">{SCHOOL.hours}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <a href={`tel:${SCHOOL.phonePrimaryTel}`} className="feature-card hover:border-brand-red">
                <h3 className="text-lg">Call</h3>
                <p className="mt-3 block text-primary font-semibold">{SCHOOL.phonePrimary}</p>
                <p className="block text-primary font-semibold">{SCHOOL.phoneSecondary}</p>
              </a>
              <a href={`mailto:${SCHOOL.email}`} className="feature-card hover:border-brand-red">
                <h3 className="text-lg">Email</h3>
                <p className="mt-3 block text-primary font-semibold break-all">{SCHOOL.email}</p>
              </a>
            </div>
            <a
              href={waLink("Hello WitQuest Castle School! I'd like to make an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-card flex items-center gap-4 hover:border-brand-red transition-colors"
            >
              <span className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.27c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.21 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-primary">Chat on WhatsApp</span>
                <span className="block text-sm text-muted-foreground">Fastest way to reach our team</span>
              </span>
            </a>

            <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3]">
              <iframe
                title="WitQuest Castle School location"
                src={SCHOOL.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
