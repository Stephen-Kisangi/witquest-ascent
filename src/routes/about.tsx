import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about.jpg";
import learnerLifeImg from "@/assets/learner-life.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WitQuest Castle School" },
      { name: "description", content: "Our story, mission, vision, values and leadership at WitQuest Castle School in Muranga County, Kenya." },
      { property: "og:title", content: "About WitQuest Castle School" },
      { property: "og:description", content: "Kenyan Heart, Global Mind — discover the story, values and people shaping a new generation of kids." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Curiosity", d: "We celebrate questions and the joy of discovery." },
  { t: "Compassion", d: "We treat every child with dignity, empathy and warmth." },
  { t: "Integrity", d: "We do what is right, even when no one is watching." },
  { t: "Excellence", d: "We pursue our personal best with humility and grit." },
  { t: "Community", d: "We grow stronger together — kids, families and teachers." },
  { t: "Civic Duty", d: "We care for our country and serve those around us." },
];

const leaders = [
  { name: "Dr. Mary Wanjiku", role: "Head of School" },
  { name: "Mr. Samuel Otieno", role: "Director of Academics" },
  { name: "Mrs. Faith Kimani", role: "Head of Pastoral Care" },
  { name: "Mr. Brian Mwangi", role: "Head of Co-Curricular" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Our School"
        title="A community where every child is known, challenged and championed."
        subtitle="Kenyan Heart, Global Mind — WitQuest Castle School blends CBC excellence with creative, character-rich learning."
        image={aboutImg}
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={aboutImg}
            alt="Teacher and kids reading together"
            loading="lazy"
            width={1280}
            height={1280}
            className="rounded-3xl object-cover w-full aspect-[4/5] shadow-[var(--shadow-elegant)]"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A rigorous education rooted in Kenyan values.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At WitQuest Castle School (WCS), we offer a rigorous education that promotes lifelong learning
              and social responsibility. Our curriculum challenges kids intellectually while fostering civic
              duty, community engagement and Kenyan cultural values.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We nurture well-rounded individuals through problem-solving, critical thinking and collaborative
              learning, equipping them with the skills and values to thrive in a changing world. At WCS,
              education goes beyond grades — it builds resilience, empathy and a commitment to making a
              positive impact in society.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page grid md:grid-cols-3 gap-8">
          <div className="feature-card">
            <span className="eyebrow">Small Classes</span>
            <h3 className="mt-4 text-xl">16–20 kids per class</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Personalized attention, stronger teacher-child bonds and active participation — a supportive
              environment where every child thrives academically and socially.
            </p>
          </div>
          <div className="feature-card">
            <span className="eyebrow">Specialist Teachers</span>
            <h3 className="mt-4 text-xl">Subject-specialist teachers</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Passionate experts who provide high-quality, focused instruction tailored to individual learning
              needs — fostering academic growth, confidence and a love for learning.
            </p>
          </div>
          <div className="feature-card">
            <span className="eyebrow">Modern Facilities</span>
            <h3 className="mt-4 text-xl">State-of-the-art resources</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Smart boards, digital tools, labs and creative spaces deliver a modern, technology-driven
              education that promotes critical thinking, collaboration and creativity.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid md:grid-cols-2 gap-8">
          <div className="feature-card">
            <span className="eyebrow">Our Mission</span>
            <h3 className="mt-4 text-2xl">Why we exist</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To raise curious, confident and compassionate kids equipped to thrive in a changing world —
              academically, creatively and ethically.
            </p>
          </div>
          <div className="feature-card">
            <span className="eyebrow">Our Vision</span>
            <h3 className="mt-4 text-2xl">Where we are going</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be Kenya's most loved learner-centred school: a place where character, creativity and
              competence shape leaders for tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container-page text-center">
          <span className="eyebrow !text-gold">Our Motto</span>
          <h2 className="mt-4 text-4xl md:text-6xl !text-white">Kenyan Heart. Global Mind.</h2>
          <p className="mt-6 text-white/85 max-w-2xl mx-auto leading-relaxed">
            Rooted in Kenyan values. Equipped for the world. We fuse innovation, critical thinking and
            global awareness with the warmth and pride of being Kenyan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Core Values</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Six values, lived every day.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="feature-card">
                <h3 className="text-xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Meet our leadership team.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((p) => (
              <div key={p.name} className="text-center">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-sage flex items-center justify-center text-5xl font-display text-primary shadow-[var(--shadow-elegant)]">
                  {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="mt-5 text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">Learning Environment</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A school designed for childhood.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Bright, airy classrooms. A green compound with safe play spaces, science labs, creative studios
              and a library that kids love. Every corner is shaped by one question: does this help kids thrive?
            </p>
          </div>
          <img
            src={learnerLifeImg}
            alt="Children playing on the school field"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-3xl object-cover w-full aspect-[4/3] shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>
    </>
  );
}
