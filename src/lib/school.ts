// Central contact info for Zion Hill School Ngwata
export const SCHOOL = {
  name: "Zion Hill School",
  shortName: "Zion Hill",
  location: "Ngwata",
  motto: "For A Solid Foundation",
  tagline:
    "A nurturing CBC school in Mlolongo, Machakos — building solid foundations of character, curiosity and competence in every child.",
  phonePrimary: "0721 301938",
  phoneSecondary: "0792 915655",
  phonePrimaryTel: "+254721301938",
  phoneSecondaryTel: "+254792915655",
  // wa.me requires E.164 without the plus
  whatsappNumber: "254792915655",
  email: "info@zionhillschool.ac.ke",
  emailAdmissions: "admissions@zionhillschool.ac.ke",
  emailCareers: "careers@zionhillschool.ac.ke",
  address: {
    line1: "Mlolongo Phase 3",
    line2: "Machakos County, Kenya",
    line3: "Easy access from the SGR road",
  },
  hours: "Monday – Saturday · 7:30am – 5:30pm",
  mapsEmbed:
    "https://www.google.com/maps?q=Mlolongo+Phase+3+Machakos&output=embed",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    x: "https://x.com/",
  },
};

export function waLink(message: string, number: string = SCHOOL.whatsappNumber) {
  const trimmed = message.trim().slice(0, 1000);
  return `https://wa.me/${number}?text=${encodeURIComponent(trimmed)}`;
}
