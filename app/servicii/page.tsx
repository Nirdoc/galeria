"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight, Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type Service = {
  name: string;
  desc: string;
  duration: string;
  price: string;
  popular?: boolean;
};

type Category = {
  id: string;
  label: string;
  desc: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "tunsori",
    label: "Tunsori",
    desc: "Tuns clasic sau modern, fade, undercut și orice stil dorești.",
    services: [
      { name: "Tuns Clasic", desc: "Tuns complet cu foarfece și mașinuță, inclusiv styling final.", duration: "45 min", price: "60 RON" },
      { name: "Tuns + Styling", desc: "Tuns complet + coafare cu produse premium pentru fixare durabilă.", duration: "60 min", price: "80 RON", popular: true },
      { name: "Fade / Skin Fade", desc: "Degradeu fin executat cu mașinuță, de la skin până la mediu.", duration: "50 min", price: "70 RON" },
      { name: "Tuns Copii (sub 12 ani)", desc: "Tuns adaptat pentru cei mai mici clienți ai noștri.", duration: "30 min", price: "40 RON" },
      { name: "Tuns + Spălat + Styling", desc: "Serviciu complet: spălat, tuns, coafare cu produse premium.", duration: "75 min", price: "100 RON", popular: true },
      { name: "Undercut / Pompadour", desc: "Stiluri moderne cu detalii și conturare de precizie.", duration: "60 min", price: "85 RON" },
    ],
  },
  {
    id: "barbierit",
    label: "Bărbierit",
    desc: "Bărbierit tradiţional cu lamă dreaptă și tratamente faciale premium.",
    services: [
      { name: "Bărbierit Clasic cu Lamă", desc: "Bărbierit tradiţional cu lamă dreaptă, prosop cald și balsam hidratant.", duration: "40 min", price: "60 RON", popular: true },
      { name: "Conturare Barbă", desc: "Definire și conturare precisă a bărbii pentru un look impecabil.", duration: "25 min", price: "40 RON" },
      { name: "Tratament Facial Premium", desc: "Curățare, mască hidratantă și masaj facial incluse.", duration: "50 min", price: "90 RON" },
      { name: "Bărbierit + Conturare Barbă", desc: "Pachet combinat: bărbierit complet și conturare profesională.", duration: "55 min", price: "85 RON" },
      { name: "Vopsit Barbă", desc: "Acoperire fire albe și uniformizare tonalitate pentru barbă.", duration: "30 min", price: "50 RON" },
    ],
  },
  {
    id: "colorare",
    label: "Colorare",
    desc: "Colorare modernă, highlights, balayage și tehnici avansate.",
    services: [
      { name: "Vopsire Completă", desc: "Vopsire uniformă de la rădăcini la vârfuri cu produse profesionale.", duration: "90 min", price: "150+ RON" },
      { name: "Highlights / Mèche", desc: "Șuvițe fine pentru un efect natural și luminos.", duration: "120 min", price: "180+ RON", popular: true },
      { name: "Balayage", desc: "Tehnica French balayage pentru gradient natural de culoare.", duration: "150 min", price: "220+ RON" },
      { name: "Gray Blending", desc: "Tehnica de amestecare a firelor albe pentru un look modern.", duration: "80 min", price: "130+ RON" },
      { name: "Ombre / Sombre", desc: "Trecere graduală de culoare de la rădăcini spre vârfuri.", duration: "120 min", price: "190+ RON" },
    ],
  },
  {
    id: "tratamente",
    label: "Tratamente",
    desc: "Îngrijire profundă pentru păr sănătos și lucios.",
    services: [
      { name: "Tratament cu Keratină", desc: "Keratinizare profundă pentru păr neted, anti-frizz, durabilitate 3-4 luni.", duration: "120 min", price: "280+ RON", popular: true },
      { name: "Tratament Hidratant", desc: "Mască intensivă de hidratare pentru păr uscat sau deteriorat.", duration: "45 min", price: "80 RON" },
      { name: "Tratament Anti-Mătreață", desc: "Tratament cu ser activ și masaj capilar profund.", duration: "40 min", price: "70 RON" },
      { name: "Scalp Treatment", desc: "Tratament dedicat pielii capului pentru stimularea creșterii.", duration: "50 min", price: "90 RON" },
    ],
  },
  {
    id: "pachete",
    label: "Pachete",
    desc: "Combinații complete pentru o experiență totală de îngrijire.",
    services: [
      { name: "Pachet The Gentleman", desc: "Tuns + bărbierit clasic + styling. Experiența completă pentru bărbatul modern.", duration: "90 min", price: "130 RON", popular: true },
      { name: "Pachet VIP Gold", desc: "Tuns premium + bărbierit cu lamă + tratament facial + styling.", duration: "120 min", price: "180 RON", popular: true },
      { name: "Pachet Hair & Color", desc: "Tuns + vopsire completă + tratament hidratant.", duration: "150 min", price: "220+ RON" },
      { name: "Pachet Full Experience", desc: "Toate serviciile: tuns, bărbierit, colorare, tratament, styling.", duration: "180 min", price: "350+ RON" },
    ],
  },
];

function ServiceItem({ service }: { service: Service }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex items-start justify-between gap-6 py-5 border-b border-border/50 hover:border-gold/30 transition-colors duration-300 last:border-0"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-foreground text-sm">{service.name}</h3>
          {service.popular && (
            <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 bg-gold/15 text-gold border border-gold/30 rounded-sm">
              Popular
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
          {service.desc}
        </p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{service.duration}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3 shrink-0">
        <span
          className="font-heading font-semibold text-gold text-lg"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {service.price}
        </span>
        <Link
          href="/programari"
          className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
        >
          Rezervă
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServiciiPage() {
  const [active, setActive] = useState("tunsori");
  const currentCategory = categories.find((c) => c.id === active)!;

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
            Meniu & Prețuri
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Serviciile <span className="text-gold-gradient">Noastre</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Descoperă gama noastră completă de servicii premium, realizate cu
            pasiune și profesionalism.
          </p>
        </motion.div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative px-6 py-5 text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap transition-colors duration-200 ${
                  active === cat.id
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
                {active === cat.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: category info */}
          <div className="lg:col-span-1">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:sticky lg:top-40"
            >
              <h2
                className="font-heading text-3xl font-bold mb-4 text-gold-gradient"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {currentCategory.label}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {currentCategory.desc}
              </p>

              {/* Includes */}
              <div className="bg-card border border-gold/20 rounded-sm p-6">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
                  Fiecare Serviciu Include
                </p>
                <ul className="space-y-3">
                  {[
                    "Consultație gratuită",
                    "Produse premium Keune",
                    "Băutură la alegere",
                    "Experiență relaxantă",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/programari"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold text-background text-sm font-medium tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm"
                >
                  Programare Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: services */}
          <div className="lg:col-span-2">
            <motion.div
              key={active + "-list"}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {currentCategory.services.map((service) => (
                <ServiceItem key={service.name} service={service} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="border-t border-border py-8 bg-[oklch(0.11_0_0)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            * Prețurile pot varia în funcție de lungimea și densitatea părului.
            Contactați-ne pentru o ofertă personalizată.
          </p>
        </div>
      </div>
    </div>
  );
}
