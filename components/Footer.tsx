import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const services = [
  "Tunsori Premium",
  "Bărbierit Clasic",
  "Colorare & Highlights",
  "Tratamente Capilare",
  "Styling & Coafare",
  "Pachete Complete",
];

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/frizeri", label: "Frizeri" },
  { href: "/servicii", label: "Servicii" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
  { href: "https://mero.ro", label: "Programări Online" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.07_0_0)] border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Galeria"
                width={56}
                height={56}
                className="rounded-full object-cover ring-1 ring-gold/30"
              />
              <div>
                <p
                  className="font-heading font-bold text-2xl tracking-widest text-gold-gradient"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  GALERIA
                </p>
                <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  Hair · Art · Attitude
                </p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-6">
              Experiența unui barbershop premium în inima orașului. Unde arta
              întâlnește stilul.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 border border-border rounded-sm text-muted-foreground hover:text-gold hover:border-gold transition-all duration-200"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="#"
                className="p-2.5 border border-border rounded-sm text-muted-foreground hover:text-gold hover:border-gold transition-all duration-200"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
              Navigare
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
              Servicii
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicii"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Strada Exemplu nr. 10, București</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="tel:+40700000000"
                  className="hover:text-gold transition-colors"
                >
                  +40 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="mailto:contact@galeria.ro"
                  className="hover:text-gold transition-colors"
                >
                  contact@galeria.ro
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <p>Lun – Vin: 09:00 – 20:00</p>
                  <p>Sâm: 09:00 – 18:00</p>
                  <p>Dum: 10:00 – 16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Galeria — Hair. Art. Attitude. Toate
            drepturile rezervate.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              Politică de Confidențialitate
            </Link>
            <span className="text-border">|</span>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-gold transition-colors"
            >
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
