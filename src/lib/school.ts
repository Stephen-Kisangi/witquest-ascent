// Central contact info for WitQuest Castle School
export const SCHOOL = {
  name: "WitQuest Castle School",
  motto: "Kenyan Heart, Global Mind",
  tagline: "Empowering kids for impactful contributions to society.",
  phonePrimary: "+254118362272",
  phoneSecondary: "+254724548908",
  // E.164 for tel: links and wa.me (no spaces, no plus)
  phonePrimaryTel: "+254118362272",
  phoneSecondaryTel: "+254724548908",
  whatsappNumber: "254724548908",
  email: "info@witquestcastlesch.org",
  emailAdmissions: "info@witquestcastlesch.org",
  emailCareers: "info@witquestcastlesch.org",
  address: {
    line1: "Tara, Thuthua, Ithanga / Kakuzi",
    line2: "Muranga County, Opposite Garissa Road",
    line3: "Landless / Happy Valley, Thika, Kenya",
  },
  hours: "Monday – Saturday · 7:30am – 5:30pm",
  mapsEmbed:
    "https://www.google.com/maps?q=Landless+Happy+Valley+Thika+Muranga&output=embed",
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
