import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import academicsImg from "@/assets/academics.jpg";
import learnerLifeImg from "@/assets/learner-life.jpg";
import { SCHOOL, waLink } from "@/lib/school";
import {
  GraduationCap,
  FlaskConical,
  Palette,
  HeartHandshake,
  Compass,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zion Hill School Ngwata — For A Solid Foundation" },
      {
        name: "description",
        content:
          "A nurturing CBC school in Mlolongo, Machakos County — building solid foundations of character, curiosity and competence in every child.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "16-20", l: "Kids per class" },
  { v: "1:12", l: "Teacher to kid ratio" },
  { v: "30+", l: "Co-curricular pathways" },
  { v: "98%", l: "Parent satisfaction" },
];

const features = [
  { Icon: GraduationCap, color: "text-navy", bg: "bg-sky-tint", title: "CBC-Aligned Curriculum", desc: "Kenya's Competency-Based Curriculum brought to life through inquiry, projects and real-world skills." },
  { Icon: FlaskConical, color: "text-sky", bg: "bg-sky-tint", title: "STEM & Innovation", desc: "Smart boards, digital tools, labs and creative spaces from pre-primary upward." },
  { Icon: Palette, color: "text-gold-deep", bg: "bg-gold-soft", title: "Creative Arts", desc: "Music, visual arts and drama to grow expressive, confident kids." },
  { Icon: HeartHandshake, color: "text-gold-deep", bg: "bg-gold-soft", title: "Pastoral Care", desc: "Small classes (16–20 kids) and dedicated mentors who truly know every child." },
  { Icon: Compass, color: "text-navy", bg: "bg-sky-tint", title: "Solid Foundations", desc: "Rooted in Kenyan values; preparing kids to thrive at the next level and beyond." },
  { Icon: ShieldCheck, color: "text-sky", bg: "bg-sky-tint", title: "Strong Values", desc: "Integrity, respect, civic duty and service rooted in everyday school life." },
];

const levels = [
  { img: aboutImg, title: "Pre-Primary", years: "PP1 – PP2", desc: "Play-based discovery, foundational literacy and numeracy in a warm environment." },
  { img: academicsImg, title: "Lower Primary", years: "Grade 1 – 3", desc: "Building strong fundamentals through guided inquiry and creative exploration." },
  { img: learnerLifeImg, title: "Upper Primary", years: "Grade 4 – 6", desc: "Deeper subject mastery, leadership and pathways into junior school." },
];

const testimonials = [
  { quote: "Zion Hill gave our daughter wings. Her confidence and curiosity have soared.", name: "Achieng O.", role: "Parent, Grade 4" },
  { quote: "The teachers genuinely know every child. It's a community, not just a school.", name: "David K.", role: "Parent, Grade 2" },
  { quote: "A beautiful balance of academics, arts and character. We feel deeply supported.", name: "Wanjiru M.", role: "Parent, Pre-Primary" },
];

function Home() {
  const wa = waLink("Hello Zion Hill School! I'd like to apply / inquire about admissions for my child.");
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-page relative text-white py-32">
          <div className="max-w-3xl">
            <span className="eyebrow !text-gold fade-up">CBC · Machakos County, Kenya</span>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl !text-white leading-[1.05] fade-up fade-up-delay-1">
              Solid Foundation, <span className="text-gold">Global Mind.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed fade-up fade-up-delay-2">
              Zion Hill School offers a rigorous CBC education that combines cutting-edge learning
              with lifelong values — empowering kids to make a meaningful impact in society.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 fade-up fade-up-delay-3">
              <Link to="/admissions" className="btn-red">Apply Now</Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.27c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.21 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
                </svg>
                WhatsApp Us
              </a>
              <Link to="/contact" className="btn-outline-light">Schedule a Visit</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="A teacher guiding kids through a story"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-3xl shadow-[var(--shadow-elegant)] w-full object-cover aspect-[4/5]"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-brand-red text-white p-6 rounded-2xl shadow-[var(--shadow-lift)] max-w-[240px]">
              <div className="font-display text-2xl text-white">Kenyan Heart</div>
              <div className="text-sm text-white/90">Global Mind. Confident kids, ready for the world.</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Our School</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A rigorous education rooted in Kenyan values.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              At Zion Hill School (WCS), we offer a rigorous education that promotes lifelong learning
              and social responsibility. Our CBC curriculum challenges kids intellectually while fostering
              civic duty, community engagement and Kenyan cultural values.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We nurture well-rounded individuals through problem-solving, critical thinking and collaborative
              learning, equipping them with the skills and values to thrive in a changing world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary-custom">Our Story</Link>
              <Link to="/academics" className="btn-outline-custom">Explore Academics</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Why Choose Zion Hill</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Built around the whole child.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Six commitments that shape how we teach, care and grow kids every day.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-5 text-xl">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC LEVELS */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Learning Levels</span>
              <h2 className="mt-4 text-3xl md:text-5xl">A learning journey that grows with your child.</h2>
            </div>
            <Link to="/academics" className="btn-outline-custom self-start md:self-end">View Curriculum</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {levels.map((lv) => (
              <article
                key={lv.title}
                className="group bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={lv.img}
                    alt={lv.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xs uppercase tracking-widest text-brand-red font-semibold">{lv.years}</div>
                  <h3 className="mt-2 text-2xl">{lv.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{lv.desc}</p>
                  <Link to="/academics" className="mt-5 inline-flex items-center gap-2 text-primary font-semibold hover:text-brand-red transition-colors">
                    Learn more <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-primary text-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !text-gold">Family Voices</span>
            <h2 className="mt-4 text-3xl md:text-5xl !text-white">What parents say about us.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-gold text-3xl font-display leading-none">"</div>
                <blockquote className="mt-3 text-white/90 leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60 uppercase tracking-widest">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl bg-card p-10 md:p-16 text-center shadow-[var(--shadow-elegant)] border border-border">
            <span className="eyebrow">Admissions Open · Limited Spaces</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Begin your child's Zion Hill journey.</h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're offering an exclusive partial scholarship for new kids — combining affordable, world-class
              education with small classes, modern facilities, and a nurturing Kenyan spirit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/admissions" className="btn-red">Start Application</Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp {SCHOOL.phonePrimary}</a>
              <Link to="/contact" className="btn-outline-custom">Book a Tour</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
