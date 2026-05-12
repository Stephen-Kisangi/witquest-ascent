import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import academicsImg from "@/assets/academics.jpg";
import learnerLifeImg from "@/assets/learner-life.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Zion Hill School" },
      { name: "description", content: "Moments of learning, play and community at Zion Hill School, Kenya." },
      { property: "og:title", content: "Zion Hill Gallery" },
      { property: "og:description", content: "A glimpse into life at Zion Hill." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Classroom" | "STEM" | "Arts" | "Sports" | "Community";

const items: { src: string; alt: string; cat: Cat }[] = [
  { src: g1, alt: "Painting at the easel", cat: "Arts" },
  { src: g2, alt: "Library reading time", cat: "Classroom" },
  { src: g3, alt: "Tablets and laptops in computer lab", cat: "STEM" },
  { src: academicsImg, alt: "Hands-on science lesson", cat: "STEM" },
  { src: g4, alt: "Music ensemble on stage", cat: "Arts" },
  { src: g5, alt: "Football on the school field", cat: "Sports" },
  { src: learnerLifeImg, alt: "Children playing together", cat: "Sports" },
  { src: g6, alt: "School assembly", cat: "Community" },
];

const cats: Cat[] = ["All", "Classroom", "STEM", "Arts", "Sports", "Community"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const visible = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse into life at Zion Hill."
        subtitle="Curiosity, joy and everyday moments that make our community sing."
        image={g6}
      />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === c
                    ? "bg-brand-red text-white"
                    : "bg-card text-foreground/70 hover:text-primary border border-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {visible.map((it) => (
              <div
                key={it.src + it.alt}
                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 group"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
