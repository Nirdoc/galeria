"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedDiv({
  children,
  className = "",
  variants: v = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={v}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const barbers = [
  {
    name: "Alexandru Ionescu",
    role: "Master Barber & Fondator",
    exp: "12 ani",
    specialties: ["Fade Classic", "Skin Fade", "Bărbierit Tradiţional"],
    bio: "Alexandru a transformat pasiunea pentru tuns într-o artă. Cu o formare la Milano și Londra, aduce tehnici europene premium în fiecare stil.",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&h=750&fit=crop",
  },
  {
    name: "Mihai Constantin",
    role: "Hair Artist",
    exp: "8 ani",
    specialties: ["Textured Cuts", "Pompadour", "Styling Avansat"],
    bio: "Mihai este specialist în coafuri moderne și texturate. Fiecare tuns este o poveste spusă prin foarfece și pieptene.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop",
  },
  {
    name: "Andrei Popescu",
    role: "Style Director",
    exp: "10 ani",
    specialties: ["Colorare", "Highlights", "Balayage Masculin"],
    bio: "Andrei duce coloristica la un alt nivel. Tehnicile sale de colorare sunt recunoscute la concursuri naționale de hair styling.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop",
  },
  {
    name: "Cristian Dumitrescu",
    role: "Senior Barber",
    exp: "7 ani",
    specialties: ["Undercut", "Quiff", "Tratamente Capilare"],
    bio: "Cristian combină tehnicile clasice cu abordări moderne pentru rezultate care durează. Specializat în tratamente de îngrijire profundă.",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=750&fit=crop",
  },
  {
    name: "Victor Manea",
    role: "Barber & Stilist",
    exp: "5 ani",
    specialties: ["Buzz Cut", "Crew Cut", "Barbă Sculptată"],
    bio: "Victor este cel mai tânăr membru al echipei noastre, dar cu o abilitate rară de a citi tendințele și de a le transpune în realitate.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop",
  },
  {
    name: "Radu Gheorghe",
    role: "Color Specialist",
    exp: "9 ani",
    specialties: ["Gray Blending", "Ombre", "Keratin"],
    bio: "Radu este expertul echipei în tratamente de îngrijire și colorare. Lucrează exclusiv cu produse organice premium.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop",
  },
];

export default function FrizeriPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="relative py-24 md:py-32 overflow-hidden bg-[oklch(0.11_0_0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,oklch(0.73_0.12_83/5%),transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Echipa Noastră
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Maeştrii <span className="text-gold-gradient">Artei</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Fiecare frizer din echipa Galeria a parcurs un drum lung pentru a
            ajunge la excelență. Cunoaște-i mai bine.
          </p>
        </motion.div>
      </div>

      {/* Barbers grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {barbers.map((barber, i) => (
              <motion.div
                key={barber.name}
                variants={fadeUp}
                className="group"
              >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-6">
                  <img
                    src={barber.img}
                    alt={barber.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 border border-gold/40 flex items-center justify-center">
                    <span
                      className="font-heading text-gold text-sm"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
                      {barber.role}
                    </p>
                    <h2
                      className="font-heading text-2xl font-bold text-foreground"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {barber.name}
                    </h2>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20">
                    <Link
                      href="/programari"
                      className="px-6 py-3 bg-gold text-background text-xs font-medium tracking-widest uppercase rounded-sm translate-y-6 group-hover:translate-y-0 transition-transform duration-400"
                    >
                      Programare
                    </Link>
                  </div>
                </div>

                {/* Details */}
                <div className="px-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground tracking-wider">
                      {barber.exp} experiență
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {barber.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {barber.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] tracking-wider uppercase px-3 py-1 border border-gold/30 text-gold/80 rounded-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href="/programari"
                      className="group/btn inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all duration-200 tracking-wider"
                    >
                      Programează-te
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href="#"
                      className="p-2 border border-border text-muted-foreground hover:text-gold hover:border-gold/50 rounded-sm transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <IconInstagram />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.11_0_0)] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <AnimatedDiv className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Alege-ți <span className="text-gold-gradient">Maestrul</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Fiecare frizer are stilul și abordarea sa unică. Alege-l pe cel care
            se potrivește cel mai bine viziunii tale.
          </p>
          <Link
            href="/programari"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-background font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm shadow-[0_0_40px_oklch(0.73_0.12_83/30%)]"
          >
            Programare Online <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedDiv>
      </section>
    </div>
  );
}
