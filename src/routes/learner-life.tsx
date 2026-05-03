import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import learnerLifeImg from "@/assets/learner-life.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/learner-life")({
  head: () => ({
    meta: [
      { title: "Kids' Life — WitQuest Castle School" },
      { name: "description", content: "Arts, sports, music, STEM, clubs and leadership at WitQuest Castle School, Kenya." },
      { property: "og:title", content: "Kids' Life at WitQuest" },
      { property: "og:description", content: "A vibrant world beyond the classroom." },
    ],
  }),
  component: LearnerLifePage,
});

const pillars = [
  { t: "Arts", d: "Painting, ceramics, design — every child finds their creative voice.", img: g1 },
  { t: "Sports", d: "Football, athletics, swimming and team games on a green compound.", img: g5 },
  { t: "Music", d: "Choirs, instruments and ensembles for performers of every level.", img: g4 },
  { t: "STEM", d: "Coding, robotics and design challenges that spark curiosity.", img: g3 },
  { t: "Clubs", d: "Drama, debate, chess, eco-club, journalism and many more.", img: learnerLifeImg },
  { t: "Leadership", d: "Kid councils, prefectship and service-learning beyond school.", img: g4 },
];

function LearnerLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Kids' Life"
        title="A vibrant world beyond the classroom."
        subtitle="From the field to the stage to the lab, our kids discover passions that shape who they become."
        image={learnerLifeImg}
      />

      <section className="section">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <article
              key={p.t}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500"
            >
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl !text-white">{p.t}</h3>
                <p className="mt-2 text-white/90 leading-relaxed">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
