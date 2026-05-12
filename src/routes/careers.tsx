import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about.jpg";
import { SCHOOL, waLink } from "@/lib/school";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Zion Hill School" },
      { name: "description", content: "Join a Kenyan CBC school that values teachers as much as it values kids." },
      { property: "og:title", content: "Careers at Zion Hill" },
      { property: "og:description", content: "Open roles and what it's like to teach at Zion Hill." },
    ],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Lower Primary CBC Teacher", type: "Full-time", loc: "Machakos County" },
  { title: "STEM & Robotics Coordinator", type: "Full-time", loc: "Machakos County" },
  { title: "Music Teacher", type: "Part-time", loc: "Machakos County" },
  { title: "Learning Support Specialist", type: "Full-time", loc: "Machakos County" },
];

const reasons = [
  { t: "Professional Growth", d: "Generous CPD budget and an in-house mentoring programme." },
  { t: "Caring Culture", d: "A close-knit team that works hard, laughs loud and lifts each other up." },
  { t: "Modern Resources", d: "Well-equipped classrooms, smart boards, labs and digital learning tools." },
];

function CareersPage() {
  const wa = waLink("Hello Zion Hill School! I'd like to join your team. Here are my details:");
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Teach where it truly matters."
        subtitle="Join a Kenyan school that values teachers as much as it values kids."
        image={aboutImg}
      />

      <section className="section">
        <div className="container-page max-w-3xl mx-auto text-center">
          <span className="eyebrow">Join Our Community</span>
          <h2 className="mt-4 text-3xl md:text-5xl">We'd love to hear from you.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            If you have a passion for teaching or working collaboratively, or if you believe you can contribute
            to Zion Hill School in any way, we'd love to hear from you. At WCS, we value innovation,
            collaboration and continuous growth — and we welcome individuals eager to make a difference in
            education.
          </p>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.t} className="feature-card">
              <h3 className="text-xl">{r.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Open Roles</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Current openings.</h2>
          </div>
          <div className="mt-12 space-y-4 max-w-3xl mx-auto">
            {openings.map((o) => (
              <div
                key={o.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-card rounded-2xl border border-border hover:border-brand-red transition-colors"
              >
                <div>
                  <h3 className="text-lg">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {o.type} · {o.loc}
                  </p>
                </div>
                <a
                  href={waLink(`Hello! I'd like to apply for the role: ${o.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !py-2.5 !px-5 text-sm self-start sm:self-auto"
                >
                  Apply via WhatsApp
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-xl mx-auto">
            <p className="text-muted-foreground">
              Don't see your role? Share your CV and ideas with us:
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
              <a href={`mailto:${SCHOOL.email}`} className="btn-outline-custom">{SCHOOL.email}</a>
              <Link to="/contact" className="btn-primary-custom">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
