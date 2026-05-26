"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/frizeri", label: "Frizeri" },
  { href: "/servicii", label: "Servicii" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_4px_30px_oklch(0.73_0.12_83/8%)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpg"
            alt="Galeria"
            width={48}
            height={48}
            className="rounded-full object-cover ring-1 ring-gold/30 group-hover:ring-gold/70 transition-all duration-300"
          />
          <div className="hidden sm:block">
            <span
              className="font-heading font-bold text-xl tracking-widest text-gold-gradient"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              GALERIA
            </span>
            <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Hair · Art · Attitude
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-widest uppercase font-medium transition-colors duration-200 relative group",
                pathname === link.href
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://mero.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-sm tracking-widest uppercase font-medium border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm"
          >
            <Calendar className="h-4 w-4" />
            Programare
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-muted-foreground hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-widest uppercase font-medium py-2 border-b border-border/50 transition-colors",
                  pathname === link.href
                    ? "text-gold"
                    : "text-muted-foreground hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://mero.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm tracking-widest uppercase font-medium border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 rounded-sm"
            >
              <Calendar className="h-4 w-4" />
              Programare Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
