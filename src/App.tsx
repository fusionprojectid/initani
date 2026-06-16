/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { businessInfo } from "./data/storeData";
import { 
  Sprout, 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ShieldCheck,
  ChevronUp,
  Award,
  Sun,
  Moon,
  Monitor
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./components/theme-toggle";

// Lazy load or import components directly
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import AgriCalculator from "./components/AgriCalculator";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import LocationMap from "./components/LocationMap";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollBack, setShowScrollBack] = useState(false);

  const navLinks = [
    { label: "Beranda", id: "hero" },
    { label: "Tentang Kami", id: "about" },
    { label: "Produk", id: "products" },
    { label: "Dosis Kalkulator", id: "calculator" },
    { label: "Galeri", id: "gallery" },
    { label: "Testimoni", id: "testimonials" },
    { label: "Tanya Jawab", id: "faq" },
    { label: "Hubungi", id: "contact" }
  ];

  // Track scrolled state for slick header modifications
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowScrollBack(window.scrollY > 500);

      // Simple active link calculation based on offsets
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#0D3B20]/20 selection:text-[#0D3B20] bg-[#F8FAF5] dark:bg-[#0F172A] text-[#263238] dark:text-[#F8FAFC]">
      
      {/* Premium Sticky Header Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl py-4.5 border-b border-[#0D3B20]/10 dark:border-white/5 shadow-lg shadow-neutral-100/10 dark:shadow-black/30" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand with custom micro interactions */}
          <div 
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer group"
          >
            <div className="bg-white p-1.5 md:p-2 rounded-xl border border-neutral-200/50 dark:border-slate-700 shadow-sm flex items-center justify-center overflow-hidden shrink-0 h-10 md:h-14 lg:h-16 w-auto transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow group-hover:border-neutral-300 dark:group-hover:border-slate-600">
              <img 
                src="/logo.png" 
                alt="Kios Pupuk Tani Makmur Logo" 
                className="h-full w-auto object-contain select-none" 
              />
            </div>
          </div>

          {/* Desktop Links with smooth animations */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-xs font-black uppercase tracking-wider transition-colors py-2 cursor-pointer ${
                    isActive ? "text-[#0D3B20] dark:text-[#70A83B]" : "text-neutral-500 dark:text-slate-400 hover:text-[#0D3B20] dark:hover:text-[#70A83B]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span 
                      layoutId="nav-underline" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0D3B20] dark:bg-[#70A83B] rounded-full"
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hot CTA: Direct WA call */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Elegant premium client theme cycle toggle indicator button */}
            <ThemeToggle />

            <a
              href={businessInfo.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-50 dark:bg-slate-800 border border-neutral-200 dark:border-slate-750 hover:border-[#0D3B20] dark:hover:border-[#70A83B] text-neutral-600 dark:text-slate-300 hover:text-[#0D3B20] dark:hover:text-[#70A83B] p-3 rounded-xl transition shadow-sm cursor-pointer"
              title="Hubungi Admin WA"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            
            <button
              onClick={() => scrollToSection("calculator")}
              className="bg-[#0D3B20] hover:bg-[#1B5E20] dark:bg-[#70A83B] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-md shadow-[#0D3B20]/25 dark:shadow-[#70A83B]/15 transition cursor-pointer"
            >
              Dosis Kalkulator
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#263238] dark:text-[#F8FAFC] bg-neutral-100 dark:bg-slate-800 hover:bg-neutral-200 dark:hover:bg-slate-700 p-2.5 rounded-xl transition cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Fullscreen Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-2xl border-t border-gray-100 dark:border-slate-800 mt-2 overflow-hidden shadow-2xl"
            >
              <div className="px-4 py-6 space-y-3.5 animate-fadeIn">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition ${
                      activeSection === link.id 
                        ? "bg-[#0D3B20] dark:bg-[#70A83B] text-white dark:text-[#0F172A]" 
                        : "text-neutral-600 dark:text-slate-300 hover:bg-neutral-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
                  <div className="flex gap-3">
                    <a
                      href={businessInfo.whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0D3B20] dark:bg-[#70A83B] text-white dark:text-[#0F172A] text-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-[#0D3B20]/10"
                    >
                      <Phone className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      onClick={() => scrollToSection("calculator")}
                      className="flex-1 bg-neutral-100 dark:bg-slate-800 text-[#263238] dark:text-[#F8FAFC] py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 dark:hover:bg-slate-700"
                    >
                      Kalkulator
                    </button>
                  </div>
                  <div className="flex justify-between items-center bg-neutral-50 dark:bg-slate-900/60 px-4 py-2.5 rounded-xl border border-neutral-100 dark:border-slate-800 mt-1">
                    <span className="text-xs font-bold text-neutral-500 dark:text-slate-400 uppercase tracking-wider">SKEMA WAKTU</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* Main Structural Body */}
      <main className="flex-1 pt-20">
        <Hero />
        <About />
        <Stats />
        <Products />
        <WhyChooseUs />
        <AgriCalculator />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <LocationMap />
      </main>

      {/* Corporate Footnote & Map Area */}
      <footer className="bg-[#263238] dark:bg-[#0A0F1D] text-white pt-20 pb-10 relative overflow-hidden transition-colors duration-300" id="footer-section">
        {/* Backdrop visual accents */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/3 dark:bg-emerald-500/2 rounded-full filter blur-3xl -z-1 translate-y-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
            
            {/* Identity column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-1.5 rounded-xl h-12 w-auto flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-neutral-200/20">
                  <img src="/logo.png" alt="Kios Pupuk Tani Makmur Logo" className="h-full w-auto object-contain select-none" />
                </div>
                <span className="font-heading font-black text-base uppercase tracking-widest text-[#70A83B]">
                  Tani Makmur Tuban
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-sans text-justify">
                Kami berkomitmen memperjuangkan keberhasilan panen padi, jagung, dan palawija petani Kabupaten Tuban secara berkelanjutan melalui sediaan pupuk SNI terpercaya dan bibit orisinil bergaransi resmi kementerian.
              </p>
              
              <div className="flex items-center space-x-3.5 pt-2">
                <a 
                  href="#" 
                  className="bg-white/5 hover:bg-[#70A83B]/10 hover:text-[#70A83B] dark:hover:text-[#70A83B] p-2.5 rounded-xl text-[#a4ebb1] transition"
                  title="Instagram Resmi"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/5 hover:bg-[#70A83B]/10 hover:text-[#70A83B] dark:hover:text-[#70A83B] p-2.5 rounded-xl text-[#a4ebb1] transition"
                  title="Facebook Resmi"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>
                <a 
                  href={businessInfo.whatsAppLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-[#70A83B]/10 hover:text-[#70A83B] dark:hover:text-[#70A83B] p-2.5 rounded-xl text-[#a4ebb1] transition"
                  title="WhatsApp Admin"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-5">
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-300 font-heading">Menu Pintar</h4>
              <ul className="space-y-3.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-xs text-neutral-400 hover:text-[#70A83B] dark:hover:text-[#70A83B] transition font-semibold cursor-pointer"
                    >
                      • {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verification badging and legal */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-neutral-300 font-heading">Legalitas Pengecer</h4>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-start space-x-3.5">
                  <ShieldCheck className="h-5.5 w-5.5 text-[#70A83B] dark:text-[#70A83B] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Sertifikat Resmi KPL</h5>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                      Kios Pupuk Resmi Bersertifikat Dinas Pertanian Jawa Timur dan PT Pupuk Indonesia (Persero).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Award className="h-5.5 w-5.5 text-[#FFB300] dark:text-[#FBBF24] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">HET Terintegrasi</h5>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                      Menjual pupuk bersubsidi ketat sesuai HET nasional peraturan menteri pertanian terintegrasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-neutral-500 font-medium text-[11px]">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Kios Pupuk Tani Makmur Parengan. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <div className="flex items-center space-x-1.5 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 text-neutral-400">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
              <span>Kios Resmi Penyalur Subsidi Pertanian Republik Indonesia</span>
            </div>
          </div>

        </div>
      </footer>

      {/* BREATHTAKING PERSISTENT DUAL FLOATING ACTIONS */}
      <motion.div 
        className="fixed bottom-6 right-6 z-55 flex flex-col items-end space-y-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {/* Google Maps Floating Button */}
        <a
          href="https://www.google.com/maps/place/Kios+Pupuk+Tani+Makmur,+Jl.+Dharma+Bhakti,+Rembun,+Kumpulrejo,+Parengan,+Tuban+Regency,+East+Java+62366/data=!4m2!3m1!1s0x2e7777c683d35973:0x2b733b455dfae10a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#263238] font-bold p-3.5 rounded-full shadow-2xl transition-all duration-300 relative hover:scale-105"
          id="persistent-maps-assist"
          title="Petunjuk Rute Kios"
        >
          <MapPin className="h-5.5 w-5.5 stroke-[2.2]" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 text-[11px] font-black uppercase tracking-wider block whitespace-nowrap leading-none pl-0 group-hover:pl-1.5">
            Petunjuk Rute
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={businessInfo.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 group bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 relative hover:scale-105"
          id="persistent-wa-assist"
          title="Konsultasi WA Kios"
        >
          {/* Pulse Ripple Effect behind */}
          <span className="absolute inset-0 bg-[#25D366]/30 rounded-full -z-10 animate-ping"></span>
          <Phone className="h-5.5 w-5.5 stroke-[2.2] text-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 text-[11px] font-black uppercase tracking-wider block whitespace-nowrap leading-none pl-0 group-hover:pl-1.5 text-white">
            Konsultasi Kios
          </span>
        </a>
      </motion.div>

      {/* Back to top scroll assisting indicator */}
      <AnimatePresence>
        {showScrollBack && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-22 right-7.5 bg-white dark:bg-[#1E293B] text-[#0D3B20] dark:text-[#70A83B] border border-[#0D3B20]/15 dark:border-white/5 p-2.5 rounded-full shadow-lg z-30 transition hover:bg-[#0D3B20]/10 dark:hover:bg-slate-800 cursor-pointer"
            title="Kembali ke Puncak"
          >
            <ChevronUp className="h-4.5 w-4.5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
