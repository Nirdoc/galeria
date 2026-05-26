"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const hours = [
  { day: "Luni – Vineri", time: "09:00 – 20:00" },
  { day: "Sâmbătă", time: "09:00 – 18:00" },
  { day: "Duminică", time: "10:00 – 16:00" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

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
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Suntem Aici</p>
          <h1
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-gold-gradient">Contact</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Ai o întrebare, o sugestie sau vrei să afli mai multe? Ne poți contacta
            oricând.
          </p>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-heading text-3xl font-bold mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Găsești-ne la
            </h2>

            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: MapPin,
                  title: "Adresă",
                  lines: ["Strada Exemplu nr. 10", "Sector 1, București"],
                },
                {
                  icon: Phone,
                  title: "Telefon",
                  lines: ["+40 700 000 000"],
                  link: "tel:+40700000000",
                },
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["contact@galeria.ro"],
                  link: "mailto:contact@galeria.ro",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 p-5 bg-card border border-border hover:border-gold/30 rounded-sm transition-colors duration-300"
                >
                  <div className="p-2.5 border border-gold/30 rounded-sm text-gold shrink-0">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-gold mb-1">{item.title}</p>
                    {item.lines.map((line) =>
                      item.link ? (
                        <a
                          key={line}
                          href={item.link}
                          className="block text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm text-muted-foreground">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 border border-gold/30 rounded-sm text-gold">
                  <Clock className="h-4 w-4" />
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-gold">Program</p>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm text-muted-foreground">{h.day}</span>
                    <span className="text-sm text-foreground font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-card border border-gold/30 rounded-sm p-12"
              >
                <CheckCircle className="h-16 w-16 text-gold mb-6" />
                <h3
                  className="font-heading text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Mesaj Trimis!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Îți mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp posibil.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs tracking-widest uppercase text-gold hover:underline"
                >
                  Trimite alt mesaj
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p
                    className="font-heading text-3xl font-bold mb-8"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Trimite-ne un Mesaj
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Nume *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors"
                      placeholder="+40 700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors resize-none"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold text-background font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm shadow-[0_0_30px_oklch(0.73_0.12_83/20%)]"
                >
                  <Send className="h-4 w-4" />
                  Trimite Mesajul
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 bg-card border-t border-border relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91421.49971680476!2d26.0325998!3d44.4267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58125f8689d4f892!2sBucharest!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Galeria Location"
        />
        {/* Pin overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="bg-card border border-gold/50 px-6 py-3 rounded-sm shadow-xl">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium">Galeria Barbershop</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Strada Exemplu nr. 10, București</p>
          </div>
        </div>
      </div>
    </div>
  );
}
