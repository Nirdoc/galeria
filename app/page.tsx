"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Palette,
  ArrowRight,
  Star,
  ChevronDown,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const stats = [
  { value: "15+", label: "Ani Experiență" },
  { value: "5K+", label: "Clienți Fericiți" },
  { value: "6", label: "Frizeri Premium" },
  { value: "12", label: "Premii Obținute" },
];

const serviceCards = [
  {
    icon: Scissors,
    title: "Tunsori Premium",
    desc: "Tuns clasic sau modern, fade, undercut – executat cu precizie de meșteri cu ani de experiență.",
    price: "de la 60 RON",
    href: "/servicii",
  },
  {
    icon: Sparkles,
    title: "Bărbierit & Barbă",
    desc: "Bărbierit cu lamă dreaptă, conturare barbă și tratamente faciale pentru un look impecabil.",
    price: "de la 40 RON",
    href: "/servicii",
  },
  {
    icon: Palette,
    title: "Colorare & Styling",
    desc: "Balayage, highlights, vopsire completă – culori vibrante și tehnici de ultimă generație.",
    price: "de la 150 RON",
    href: "/servicii",
  },
];

const team = [
  {
    name: "Alexandru Ionescu",
    role: "Master Barber",
    exp: "12 ani",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=500&fit=crop",
  },
  {
    name: "Mihai Constantin",
    role: "Hair Artist",
    exp: "8 ani",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  },
  {
    name: "Andrei Popescu",
    role: "Style Director",
    exp: "10 ani",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=500&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=500&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=500&fit=crop",
];

const testimonials = [
  {
    name: "Radu M.",
    text: "Cel mai bun barbershop din oraș. Atmosfera, atenția la detalii și rezultatul final sunt impecabile.",
    rating: 5,
    date: "Decembrie 2024",
  },
  {
    name: "Bogdan T.",
    text: "Alexandru este un adevărat artist. Fiecare vizită este o experiență de lux de la care pleci cu un zâmbet.",
    rating: 5,
    date: "Noiembrie 2024",
  },
  {
    name: "Cristian V.",
    text: "Profesionalism rar întâlnit. Programarea online e simplă, iar rezultatele vorbesc de la sine.",
    rating: 5,
    date: "Octombrie 2024",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,oklch(0.73_0.12_83/8%),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,oklch(0.73_0.12_83/5%),transparent)]" />

        {/* Corner accents */}
        <div className="absolute top-32 left-8 w-16 h-16 border-l border-t border-gold/20" />
        <div className="absolute top-32 right-8 w-16 h-16 border-r border-t border-gold/20" />
        <div className="absolute bottom-20 left-8 w-16 h-16 border-l border-b border-gold/20" />
        <div className="absolute bottom-20 right-8 w-16 h-16 border-r border-b border-gold/20" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Image
              src="/logo.jpg"
              alt="Galeria Barbershop"
              width={220}
              height={220}
              className="rounded-full object-cover ring-2 ring-gold/30 shadow-[0_0_60px_oklch(0.73_0.12_83/20%)]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="ornament w-64 mb-4"
          >
            <span className="text-xs tracking-[0.3em] text-gold uppercase">✦</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs uppercase text-muted-foreground mb-10 tracking-[0.3em]"
          >
            Hair &nbsp;·&nbsp; Art &nbsp;·&nbsp; Attitude
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-gold-gradient">Arta</span>
            <br />
            <span className="text-foreground">Frizurii</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="text-muted-foreground text-lg max-w-md mb-12 leading-relaxed"
          >
            Experiență de lux, stiluri unice, rezultate perfecte. Bine ai venit în Galeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://mero.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gold text-background font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm shadow-[0_0_30px_oklch(0.73_0.12_83/30%)] hover:shadow-[0_0_50px_oklch(0.73_0.12_83/50%)]"
            >
              Programează-te
              <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/servicii"
              className="px-8 py-4 border border-gold/50 text-gold font-medium text-sm tracking-widest uppercase hover:border-gold hover:bg-gold/8 transition-all duration-300 rounded-sm"
            >
              Descoperă Serviciile
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* ───── STATS ───── */}
      <Section className="py-20 border-y border-border bg-[oklch(0.11_0_0)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-center text-center">
                <span
                  className="font-heading text-5xl md:text-6xl font-bold text-gold-gradient mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ───── ABOUT ───── */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Povestea Noastră</p>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mai mult decât o<br />
              <span className="text-gold-gradient">simplă frizerie</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Galeria s-a născut din pasiunea pentru arta frizurii și dorința de a oferi
              clienților o experiență cu adevărat de lux. Fiecare detaliu al spațiului
              nostru a fost gândit pentru a crea o atmosferă unică — unde tradiția
              întâlnește modernul.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cu o echipă de maeștri frizeuri cu experiență internațională, utilizăm
              exclusiv produse premium și tehnici de ultimă generație pentru a transforma
              fiecare vizită într-o experiență memorabilă.
            </p>
            <Link
              href="/frizeri"
              className="group inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
            >
              Cunoaște Echipa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&h=900&fit=crop"
                alt="Galeria interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-gold/30 p-6 rounded-sm shadow-xl">
              <p className="font-heading text-3xl font-bold text-gold" style={{ fontFamily: "var(--font-playfair)" }}>
                15+
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">Ani de Excelență</p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-gold/40 rounded-tr-sm" />
          </motion.div>
        </div>
      </Section>

      {/* ───── SERVICES ───── */}
      <Section className="py-24 bg-[oklch(0.11_0_0)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Ce Oferim</p>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Serviciile Noastre
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                className="group relative bg-card border border-border hover:border-gold/50 p-8 rounded-sm transition-all duration-500 hover:shadow-[0_0_40px_oklch(0.73_0.12_83/8%)]"
              >
                <div className="mb-6 p-3 w-fit border border-gold/30 rounded-sm text-gold group-hover:bg-gold/10 transition-colors duration-300">
                  <svc.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-medium text-sm">{svc.price}</span>
                  <Link
                    href={svc.href}
                    className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors flex items-center gap-1"
                  >
                    Detalii <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-gold/20 rounded-br-sm" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/50 text-gold text-sm tracking-widest uppercase hover:border-gold hover:bg-gold/8 transition-all duration-300 rounded-sm"
            >
              Toate Serviciile <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ───── TEAM ───── */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Oamenii Noștri</p>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Maeștrii Artei
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="group">
                <div className="relative overflow-hidden rounded-sm mb-5 aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">{member.role}</p>
                    <h3
                      className="font-heading text-xl font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {member.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="https://mero.ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gold text-background text-xs font-medium tracking-widest uppercase rounded-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Programare
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs text-muted-foreground tracking-wider">{member.exp} experiență</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              href="/frizeri"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
            >
              Întreaga Echipă <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ───── GALLERY ───── */}
      <Section className="py-24 bg-[oklch(0.11_0_0)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Inspirație</p>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Galeria Noastră
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-sm"
                style={{ aspectRatio: i === 0 || i === 5 ? "3/4" : "4/3" }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase text-white border border-white/50 px-4 py-2 rounded-sm">
                    Vezi
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/50 text-gold text-sm tracking-widest uppercase hover:border-gold hover:bg-gold/8 transition-all duration-300 rounded-sm"
            >
              Galerie Completă <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ───── TESTIMONIALS ───── */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Recenzii</p>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ce Spun Clienții
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="bg-card border border-border hover:border-gold/30 p-8 rounded-sm transition-all duration-300 relative"
              >
                <div
                  className="font-heading text-6xl text-gold/20 absolute top-4 right-6 leading-none select-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  "
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ───── CTA ───── */}
      <Section className="py-24 relative overflow-hidden bg-[oklch(0.11_0_0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,oklch(0.73_0.12_83/6%),transparent)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp}>
            <div className="ornament mb-8 mx-auto w-48">
              <span className="text-xs tracking-[0.3em] text-gold uppercase">✦</span>
            </div>
            <h2
              className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Rezervă-ți Locul<br />
              <span className="text-gold-gradient">Astăzi</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Nu lăsa stilul pe mâine. Frizerii noștri te așteaptă pentru o experiență
              premium pe care nu o vei uita.
            </p>
            <a
              href="https://mero.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-background font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm shadow-[0_0_40px_oklch(0.73_0.12_83/35%)] hover:shadow-[0_0_60px_oklch(0.73_0.12_83/55%)]"
            >
              Programare Online
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
