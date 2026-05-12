import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero.jpg";
import { useState } from "react";
import { SCHOOL, waLink } from "@/lib/school";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Zion Hill School" },
      { name: "description", content: "Admissions process, required documents, fees and FAQs at Zion Hill School, Machakos County, Kenya." },
      { property: "og:title", content: "Admissions — Zion Hill" },
      { property: "og:description", content: "Begin your child's journey: a simple, warm 5-step admissions process." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: 1, t: "Inquiry", d: "Tell us about your family and book a school visit." },
  { n: 2, t: "School Tour", d: "Meet our team, see the classrooms and learn about our approach." },
  { n: 3, t: "Application", d: "Submit the application form together with required documents." },
  { n: 4, t: "Assessment & Interview", d: "A friendly age-appropriate assessment and family conversation." },
  { n: 5, t: "Offer & Welcome", d: "Receive your offer, complete enrolment and join the Zion Hill family." },
];

const documents = [
  "Completed application form",
  "Birth certificate (copy)",
  "Two recent passport photos",
  "Most recent school report (if applicable)",
  "Immunization records (Pre-Primary)",
  "Parent / guardian ID copies",
];

const faqs = [
  { q: "When does the school year start?", a: "Our academic year follows the Kenyan CBC calendar with three terms beginning in January, May and September." },
  { q: "Do you offer transport?", a: "Yes — secure school buses cover the major routes around Mlolongo, Mlolongo and surrounding areas. Routes are confirmed at enrolment." },
  { q: "Are siblings prioritised?", a: "Yes. Siblings of current kids are given priority placement subject to space availability." },
  { q: "Do you offer scholarships?", a: "Yes — we are currently offering exclusive partial scholarships for new kids. Please ask the admissions team for details." },
  { q: "What is the class size?", a: "We keep classes between 16 and 20 kids, with dedicated assistant teachers in lower grades — for personalized attention and stronger bonds." },
];

function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const wa = waLink("Hello Zion Hill School! I'd like to apply / book a school visit for my child.");
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Begin your child's Zion Hill journey."
        subtitle="A simple five-step process designed to be warm, transparent and family-friendly."
        image={heroImg}
      >
        <div className="flex flex-wrap gap-4">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Admissions</a>
          <Link to="/contact" className="btn-gold">Schedule a Visit</Link>
          <a href="#process" className="btn-outline-light">See the Process</a>
        </div>
      </PageHero>

      {/* SCHOLARSHIP BANNER */}
      <section className="bg-brand-red text-white">
        <div className="container-page py-6 text-center text-sm md:text-base font-medium">
          🎓 <span className="font-bold">Enroll Today!</span> We're offering an exclusive <span className="font-bold">partial scholarship</span> for new kids — affordable, world-class CBC education with small classes and a nurturing Kenyan spirit. Spaces are limited 🚀
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" id="process">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">The Process</span>
            <h2 className="mt-4 text-3xl md:text-5xl">From inquiry to first day.</h2>
          </div>

          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative md:grid md:grid-cols-2 md:gap-12 mb-10 md:mb-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="pl-16 md:pl-0 md:text-right md:pr-12">
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-display font-bold shadow-lg">
                    {s.n}
                  </div>
                  <div className={i % 2 === 1 ? "md:text-left md:pl-12 md:pr-0" : ""}>
                    <h3 className="text-2xl">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS + FEES */}
      <section className="section bg-card">
        <div className="container-page grid lg:grid-cols-2 gap-8">
          <div className="feature-card">
            <span className="eyebrow">Required Documents</span>
            <h3 className="mt-4 text-2xl">What to prepare</h3>
            <ul className="mt-6 space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 text-brand-red">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="feature-card bg-primary text-white border-primary">
            <span className="eyebrow !text-gold">Fees & Brochure</span>
            <h3 className="mt-4 text-2xl !text-white">Transparent, family-friendly fees</h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              Speak with our admissions team for the current fee structure, scholarships, and a personalised
              conversation about your family.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Admissions</a>
              <a href={`mailto:${SCHOOL.email}`} className="btn-outline-light">Email Admissions</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Common questions, answered.</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="bg-card rounded-2xl border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-semibold text-primary">{f.q}</span>
                    <span className={`text-brand-red text-2xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl bg-primary text-white p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl !text-white">Let's meet your family.</h2>
            <p className="mt-5 text-white/85 max-w-xl mx-auto">
              The best way to know Zion Hill is to walk our halls and meet our teachers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp {SCHOOL.phonePrimary}</a>
              <Link to="/contact" className="btn-gold">Book a Tour</Link>
              <a href={`mailto:${SCHOOL.email}`} className="btn-outline-light">Email Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
