import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SCHOOL, waLink } from "@/lib/school";

export function Footer() {
  const wa = waLink("Hello Zion Hill! I'd like to know more about admissions.");
  return (
    <footer className="bg-primary text-white/90 mt-0">
      <div className="container-page pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo className="h-14 w-14" />
              <div>
                <div className="font-display font-bold text-lg text-white">Zion Hill School</div>
                <div className="text-xs tracking-widest uppercase text-gold">Ngwata · {SCHOOL.motto}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80 max-w-sm">
              {SCHOOL.tagline}
            </p>
            <p className="mt-4 text-sm font-semibold text-gold tracking-wide">
              Motto: {SCHOOL.motto}
            </p>
          </div>

          <div>
            <h4 className="text-white font-display text-base mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/academics", "Academics"],
                ["/admissions", "Admissions"],
                ["/learner-life", "Kids' Life"],
                ["/gallery", "Gallery"],
                ["/careers", "Careers"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/75 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base mb-5">Reach Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{SCHOOL.address.line1}</li>
              <li>{SCHOOL.address.line2}</li>
              <li>{SCHOOL.address.line3}</li>
              <li>
                <a href={`tel:${SCHOOL.phonePrimaryTel}`} className="hover:text-gold transition-colors">
                  {SCHOOL.phonePrimary}
                </a>
              </li>
              <li>
                <a href={`tel:${SCHOOL.phoneSecondaryTel}`} className="hover:text-gold transition-colors">
                  {SCHOOL.phoneSecondary}
                </a>
              </li>
              <li>
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-gold transition-colors break-all">
                  {SCHOOL.email}
                </a>
              </li>
              <li className="text-white/60 text-xs pt-1">{SCHOOL.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base mb-5">Get in Touch Fast</h4>
            <p className="text-sm text-white/80 mb-4">
              Chat with our admissions team on WhatsApp — we typically reply within minutes during school hours.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
              <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M19.11 17.27c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.21 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <Link to="/admissions" className="btn-gold w-full mt-3">Apply Now</Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
          <p className="text-gold">{SCHOOL.motto}</p>
        </div>
      </div>
    </footer>
  );
}
