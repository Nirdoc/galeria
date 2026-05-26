"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Check, ChevronRight, Calendar, Clock, User, Scissors, CheckCircle } from "lucide-react";
import Link from "next/link";

type Barber = { id: string; name: string; role: string; img: string };
type Service = { id: string; name: string; duration: string; price: string; category: string };
type Slot = { time: string; available: boolean };

const barbers: Barber[] = [
  { id: "alex", name: "Alexandru Ionescu", role: "Master Barber", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop" },
  { id: "mihai", name: "Mihai Constantin", role: "Hair Artist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" },
  { id: "andrei", name: "Andrei Popescu", role: "Style Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { id: "cristian", name: "Cristian Dumitrescu", role: "Senior Barber", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop" },
  { id: "orice", name: "Orice Frizer Disponibil", role: "Prima oră liberă", img: "" },
];

const services: Service[] = [
  { id: "tuns-classic", name: "Tuns Clasic", duration: "45 min", price: "60 RON", category: "Tunsori" },
  { id: "tuns-styling", name: "Tuns + Styling", duration: "60 min", price: "80 RON", category: "Tunsori" },
  { id: "fade", name: "Fade / Skin Fade", duration: "50 min", price: "70 RON", category: "Tunsori" },
  { id: "barbierit", name: "Bărbierit Clasic cu Lamă", duration: "40 min", price: "60 RON", category: "Bărbierit" },
  { id: "conturare", name: "Conturare Barbă", duration: "25 min", price: "40 RON", category: "Bărbierit" },
  { id: "gentleman", name: "Pachet The Gentleman", duration: "90 min", price: "130 RON", category: "Pachete" },
  { id: "vip", name: "Pachet VIP Gold", duration: "120 min", price: "180 RON", category: "Pachete" },
  { id: "colorare", name: "Vopsire Completă", duration: "90 min", price: "150+ RON", category: "Colorare" },
];

const timeSlots: Slot[] = [
  { time: "09:00", available: true },
  { time: "09:45", available: false },
  { time: "10:30", available: true },
  { time: "11:15", available: true },
  { time: "12:00", available: false },
  { time: "13:00", available: true },
  { time: "14:00", available: true },
  { time: "14:45", available: false },
  { time: "15:30", available: true },
  { time: "16:15", available: true },
  { time: "17:00", available: true },
  { time: "17:45", available: false },
  { time: "18:30", available: true },
  { time: "19:15", available: true },
];

function getDaysInMonth(year: number, month: number) {
  const days: Date[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

const STEP_LABELS = ["Frizer", "Serviciu", "Data & Ora", "Date Personale", "Confirmare"];

export default function ProgramariPage() {
  const [step, setStep] = useState(0);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const days = getDaysInMonth(calYear, calMonth);

  const MONTHS_RO = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
  const DAYS_RO = ["L", "M", "M", "J", "V", "S", "D"];

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(true);
  }

  const servicesByCategory = services.reduce<Record<string, Service[]>>((acc, svc) => {
    if (!acc[svc.category]) acc[svc.category] = [];
    acc[svc.category].push(svc);
    return acc;
  }, {});

  if (confirmed) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-6 text-center"
        >
          <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_oklch(0.73_0.12_83/30%)]">
            <CheckCircle className="h-10 w-10 text-gold" />
          </div>
          <h1
            className="font-heading text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Programare <span className="text-gold-gradient">Confirmată!</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Programarea ta a fost înregistrată cu succes. Vei primi o confirmare pe
            email la{" "}
            <span className="text-gold">{form.email}</span>.
          </p>

          <div className="bg-card border border-gold/30 rounded-sm p-6 text-left space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Frizer</span>
              <span className="text-foreground font-medium">{selectedBarber?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Serviciu</span>
              <span className="text-foreground font-medium">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Data</span>
              <span className="text-foreground font-medium">
                {selectedDate?.toLocaleDateString("ro-RO", { weekday: "long", day: "numeric", month: "long" })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Ora</span>
              <span className="text-foreground font-medium">{selectedTime}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="text-gold font-semibold">{selectedService?.price}</span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-background text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300"
          >
            Înapoi Acasă
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 md:py-28 overflow-hidden bg-[oklch(0.11_0_0)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,oklch(0.73_0.12_83/5%),transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Rezervă-ți Locul</p>
          <h1
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Programare <span className="text-gold-gradient">Online</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Simplu, rapid și fără așteptare. Alege frizerul, serviciul și ora care ți se potrivește.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Step indicator */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-border" />
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2 relative z-10">
              <button
                onClick={() => i < step && setStep(i)}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  i < step
                    ? "bg-gold border-gold text-background cursor-pointer"
                    : i === step
                    ? "bg-card border-gold text-gold shadow-[0_0_20px_oklch(0.73_0.12_83/30%)]"
                    : "bg-card border-border text-muted-foreground cursor-default"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </button>
              <span className={`text-[10px] tracking-wider uppercase hidden md:block ${i === step ? "text-gold" : "text-muted-foreground"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          {/* STEP 0: Choose barber */}
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Alege Frizerul
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    onClick={() => { setSelectedBarber(barber); setStep(1); }}
                    className={`group flex flex-col items-center text-center p-6 rounded-sm border transition-all duration-300 ${
                      selectedBarber?.id === barber.id
                        ? "border-gold bg-gold/10"
                        : "border-border bg-card hover:border-gold/50"
                    }`}
                  >
                    {barber.img ? (
                      <img
                        src={barber.img}
                        alt={barber.name}
                        className="w-16 h-16 rounded-full object-cover mb-3 ring-2 ring-gold/20 group-hover:ring-gold/50 transition-all"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-3">
                        <Scissors className="h-6 w-6 text-gold" />
                      </div>
                    )}
                    <p className="font-medium text-sm text-foreground mb-1">{barber.name}</p>
                    <p className="text-xs text-gold">{barber.role}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 1: Choose service */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Alege Serviciul
              </h2>
              <div className="space-y-6">
                {Object.entries(servicesByCategory).map(([category, svcs]) => (
                  <div key={category}>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{category}</p>
                    <div className="space-y-2">
                      {svcs.map((svc) => (
                        <button
                          key={svc.id}
                          onClick={() => { setSelectedService(svc); setStep(2); }}
                          className={`w-full flex items-center justify-between px-5 py-4 rounded-sm border transition-all duration-200 text-left ${
                            selectedService?.id === svc.id
                              ? "border-gold bg-gold/10"
                              : "border-border bg-card hover:border-gold/40"
                          }`}
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">{svc.name}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {svc.duration}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-gold font-semibold text-sm">{svc.price}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStep(0)}
                className="mt-8 text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                ← Înapoi
              </button>
            </motion.div>
          )}

          {/* STEP 2: Date & time */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Alege Data & Ora
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <div className="bg-card border border-border rounded-sm p-5">
                    <div className="flex items-center justify-between mb-5">
                      <button
                        onClick={() => {
                          if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1); }
                          else setCalMonth(m => m - 1);
                        }}
                        className="text-muted-foreground hover:text-gold transition-colors px-2 py-1"
                      >
                        ‹
                      </button>
                      <span className="text-sm font-medium">{MONTHS_RO[calMonth]} {calYear}</span>
                      <button
                        onClick={() => {
                          if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1); }
                          else setCalMonth(m => m + 1);
                        }}
                        className="text-muted-foreground hover:text-gold transition-colors px-2 py-1"
                      >
                        ›
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {DAYS_RO.map((d, i) => (
                        <div key={i} className="text-center text-[10px] text-muted-foreground py-1">{d}</div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {/* Empty cells for start of month */}
                      {Array.from({ length: (days[0].getDay() + 6) % 7 }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {days.map((day) => {
                        const isPast = day < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        const isSelected = selectedDate?.toDateString() === day.toDateString();
                        const isSunday = day.getDay() === 0;
                        return (
                          <button
                            key={day.getDate()}
                            disabled={isPast}
                            onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                            className={`aspect-square text-xs rounded-sm transition-all duration-200 ${
                              isSelected
                                ? "bg-gold text-background font-semibold"
                                : isPast
                                ? "text-muted-foreground/30 cursor-not-allowed"
                                : isSunday
                                ? "text-muted-foreground hover:text-gold hover:bg-gold/10"
                                : "text-foreground hover:bg-gold/10 hover:text-gold"
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  {selectedDate ? (
                    <>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ore disponibile pe{" "}
                        <span className="text-foreground">
                          {selectedDate.toLocaleDateString("ro-RO", { weekday: "long", day: "numeric", month: "long" })}
                        </span>
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`py-2.5 text-xs font-medium rounded-sm border transition-all duration-200 ${
                              selectedTime === slot.time
                                ? "border-gold bg-gold/10 text-gold"
                                : slot.available
                                ? "border-border text-foreground hover:border-gold/50 hover:text-gold"
                                : "border-border/30 text-muted-foreground/40 cursor-not-allowed line-through"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-muted-foreground">
                        <Calendar className="h-12 w-12 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">Selectează o dată pentru a vedea orele disponibile</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                >
                  ← Înapoi
                </button>
                <button
                  onClick={() => selectedDate && selectedTime && setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="px-6 py-3 bg-gold text-background text-xs font-medium tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continuă →
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Personal info */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-heading text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
                Date Personale
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <form id="booking-form" onSubmit={handleConfirm} className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Nume Complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors"
                      placeholder="Numele tău complet"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors"
                      placeholder="+40 700 000 000"
                    />
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
                      Observații (opțional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full bg-card border border-border focus:border-gold/60 outline-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground rounded-sm transition-colors resize-none"
                      placeholder="Preferințe sau detalii suplimentare..."
                    />
                  </div>
                </form>

                {/* Summary */}
                <div className="bg-card border border-gold/20 rounded-sm p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold mb-5">Sumar Programare</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <User className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Frizer</p>
                        <p className="text-sm font-medium">{selectedBarber?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Scissors className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Serviciu</p>
                        <p className="text-sm font-medium">{selectedService?.name}</p>
                        <p className="text-xs text-muted-foreground">{selectedService?.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Data</p>
                        <p className="text-sm font-medium">
                          {selectedDate?.toLocaleDateString("ro-RO", { weekday: "long", day: "numeric", month: "long" })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Ora</p>
                        <p className="text-sm font-medium">{selectedTime}</p>
                      </div>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total estimat</span>
                      <span className="text-gold font-semibold text-lg">{selectedService?.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                >
                  ← Înapoi
                </button>
                <button
                  type="submit"
                  form="booking-form"
                  className="px-8 py-4 bg-gold text-background text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-gold-light transition-all duration-300 shadow-[0_0_30px_oklch(0.73_0.12_83/25%)]"
                >
                  Confirmă Programarea
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
