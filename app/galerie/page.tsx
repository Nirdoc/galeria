"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide" | "normal";
};

const items: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=1000&fit=crop", alt: "Barbershop interior", category: "spatiu", span: "tall" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop", alt: "Fade haircut", category: "tunsori" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop", alt: "Classic barber", category: "barbierit" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=1000&fit=crop", alt: "Modern style", category: "tunsori", span: "tall" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop", alt: "Styled hair", category: "tunsori" },
  { src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=600&fit=crop", alt: "Barber chair", category: "spatiu" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=1000&fit=crop", alt: "Scissors and tools", category: "barbierit", span: "tall" },
  { src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=600&fit=crop", alt: "Hair color", category: "colorare" },
  { src: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=800&h=600&fit=crop", alt: "Beard trim", category: "barbierit" },
  { src: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=800&h=600&fit=crop", alt: "Barber products", category: "spatiu" },
  { src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=800&h=1000&fit=crop", alt: "Man with style", category: "tunsori", span: "tall" },
  { src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&h=600&fit=crop", alt: "Barber at work", category: "barbierit" },
];

const filters = [
  { id: "toate", label: "Toate" },
  { id: "tunsori", label: "Tunsori" },
  { id: "barbierit", label: "Bărbierit" },
  { id: "colorare", label: "Colorare" },
  { id: "spatiu", label: "Spațiu" },
];

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState("toate");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const filtered =
    activeFilter === "toate"
      ? items
      : items.filter((item) => item.category === activeFilter);

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
            Inspirație Vizuală
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-gold-gradient">Galeria</span> Noastră
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Fiecare fotografie spune o poveste. Lasă-te inspirat de lucrările
            echipei Galeria.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 rounded-sm border ${
                activeFilter === filter.id
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-sm break-inside-avoid mb-3 cursor-pointer"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{
                    aspectRatio: item.span === "tall" ? "3/4" : "4/3",
                  }}
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Category tag */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-wider uppercase px-2.5 py-1 bg-background/80 text-gold rounded-sm">
                    {filters.find((f) => f.id === item.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 border border-border text-muted-foreground hover:text-gold hover:border-gold/50 rounded-sm transition-all duration-200"
              onClick={() => setLightbox(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src.replace(/w=\d+&h=\d+/, "w=1200&h=900")}
                alt={lightbox.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-sm"
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
