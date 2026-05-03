import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import academicsImg from "@/assets/academics.jpg";
import { waLink } from "@/lib/school";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — WitQuest Castle School" },
      { name: "description", content: "Our CBC-aligned curriculum, learning levels, technology integration and assessment philosophy at WitQuest Castle School, Kenya." },
      { property: "og:title", content: "Academics at WitQuest Castle" },
      { property: "og:description", content: "How CBC, creativity and care shape our learning experience." },
    ],
  }),
  component: AcademicsPage,
});

const pillars = [
  { t: "Inquiry-Led", d: "Lessons begin with questions, not answers — curiosity drives the day." },
  { t: "Competency-Based", d: "We assess what kids can do, not just what they remember." },
  { t: "Values-Rich", d: "Character formation is woven through every subject and every routine." },
  { t: "Differentiated", d: "Teachers design for each child — strengths, pace and growth edges." },
];

const levels = [
  { name: "Pre-Primary", years: "PP1 – PP2", focus: ["Play-based learning", "Foundational literacy", "Social-emotional skills"] },
  { name: "Lower Primary", years: "Grade 1 – 3", focus: ["Reading & numeracy", "Creative expression", "Discovery science"] },
  { name: "Upper Primary", years: "Grade 4 – 6", focus: ["Subject mastery", "Project-based learning", "Leadership pathways"] },
  { name: "Junior School", years: "Grade 7 – 9", focus: ["Specialised subjects", "Research skills", "Career exposure"] },
];

function AcademicsPage() {
  const wa = waLink("Hello! I'd like more information about your CBC academic programme.");
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A CBC education that grows with your child."
        subtitle="Rigorous, creative and learner-centred — designed to prepare kids for what's next."
        image={academicsImg}
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">Our CBC Approach</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Competency, character and creativity.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We bring Kenya's Competency-Based Curriculum to life through hands-on inquiry, meaningful
              projects and rich values education. Kids don't just memorise — they investigate, create and apply.
            </p>
          </div>
          <img
            src={academicsImg}
            alt="Kids in a hands-on science lesson"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-3xl object-cover w-full aspect-[4/3] shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Four Pillars</span>
            <h2 className="mt-4 text-3xl md:text-5xl">How we teach.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.t} className="feature-card">
                <h3 className="text-lg">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Learning Levels</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A pathway through the years.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {levels.map((lv) => (
              <div key={lv.name} className="feature-card">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="text-2xl">{lv.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-brand-red font-semibold">{lv.years}</span>
                </div>
                <ul className="mt-5 space-y-2">
                  {lv.focus.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-red flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow !text-gold">Technology Integration</span>
            <h2 className="mt-4 text-3xl md:text-4xl !text-white">Tools that amplify learning.</h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              Smart boards, tablets, coding clubs, design thinking workshops and a STEM lab — used purposefully,
              never as a substitute for great teaching.
            </p>
          </div>
          <div>
            <span className="eyebrow !text-gold">Assessment Philosophy</span>
            <h2 className="mt-4 text-3xl md:text-4xl !text-white">Assessment that fuels growth.</h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              We use formative feedback, portfolios, projects and CBC assessments to give every child a clear,
              encouraging picture of their progress.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl">Ready to learn more?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Speak with our academics team or begin your application today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-red">Apply Now</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
            <Link to="/contact" className="btn-outline-custom">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
