import { businessInfo } from "../data/storeData";
import { Sprout, Phone, Calculator, ShieldCheck, Award, MapPin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#F8FAF5] dark:bg-[#0F172A] pt-12 overflow-hidden isolate">
      
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-[0.12] filter blur-[6px] -z-10 pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg-farmer.jpg')" }}
      ></div>

      {/* Absolute decorative background elements for high-end feel */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#11341C]/5 dark:bg-[#8FC14E]/3 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-[#FFB300]/3 dark:bg-[#FBBF24]/2 rounded-full filter blur-[80px] -z-10"></div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column: Compelling copywriting (Col-7) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Micro Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white dark:bg-[#1E293B] border border-[#11341C]/15 dark:border-white/5 px-4.5 py-2 rounded-full shadow-sm"
            >
              <span className="h-2 w-2 bg-[#11341C] dark:bg-[#8FC14E] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#11341C] dark:text-[#8FC14E]">
                Pengecer Resmi Bersertifikat Tuban
              </span>
            </motion.div>
 
            {/* Main Punchy Taglines */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-[1.08]"
              >
                Kemakmuran Bumi Tani <br className="hidden sm:inline" />
                Dimulai Dari <span className="text-[#11341C] dark:text-[#8FC14E] underline decoration-amber-500 dark:decoration-amber-400 decoration-wavy underline-offset-4">Nutrisi Unggul</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-neutral-600 dark:text-[#CBD5E1] leading-relaxed font-sans max-w-xl mx-auto lg:mx-0"
              >
                Penyedia resmi pupuk subsidi HET pemerintah Jawa Timur, pestisida orisinil berkualitas, serta bibit unggul bermutu tinggi untuk melipatgandakan hasil tonasi panen raya Anda.
              </motion.p>
            </div>
 
            {/* Direct Action Calls */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => scrollToId("products")}
                className="w-full sm:w-auto bg-[#11341C] hover:bg-[#1B5E20] dark:bg-[#8FC14E] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] px-8 py-4.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[#11341C]/25 dark:shadow-none transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Lihat Katalog Produk
              </button>
              
              <button
                onClick={() => scrollToId("calculator")}
                className="w-full sm:w-auto bg-white dark:bg-[#1E293B] hover:bg-neutral-50 dark:hover:bg-slate-800 text-[#263238] dark:text-[#F8FAFC] border border-neutral-200 dark:border-slate-800 px-8 py-4.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm transition cursor-pointer flex items-center justify-center space-x-2"
              >
                <Calculator className="h-4 w-4 text-[#11341C] dark:text-[#8FC14E]" />
                <span>Kalkulator Dosis</span>
              </button>

              <a
                href="https://www.google.com/maps/place/UD.+TANI+MAKMUR/@-7.0714666,111.8210722,21z/data=!4m14!1m7!3m6!1s0x2e7777c683d35973:0x2b733b455dfae10a!2sUD.+TANI+MAKMUR!8m2!3d-7.0715001!4d111.8210532!16s%2Fg%2F11qy6ch09c!3m5!1s0x2e7777c683d35973:0x2b733b455dfae10a!8m2!3d-7.0715001!4d111.8210532!16s%2Fg%2F11qy6ch09c?authuser=1&entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 dark:bg-amber-400 dark:hover:bg-amber-500 text-[#263238] font-black px-8 py-4.5 rounded-xl text-xs uppercase tracking-widest shadow-lg transition duration-200 text-center flex items-center justify-center space-x-2"
              >
                <MapPin className="h-4 w-4 text-[#263238]" />
                <span>Kunjungi Kios Maps</span>
              </a>
            </motion.div>
 
            {/* Supporting Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-6 border-t border-neutral-200/60 dark:border-slate-800/80 max-w-lg mx-auto lg:mx-0 grid grid-cols-3 gap-6 text-neutral-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-wider"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-[#11341C] dark:text-[#8FC14E] shrink-0" />
                <span>100% Produk Asli</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-[#11341C] dark:text-[#8FC14E] shrink-0" />
                <span>HET Resmi Penjualan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sprout className="h-5 w-5 text-[#11341C] dark:text-[#8FC14E] shrink-0" />
                <span>Solusi Agronomi</span>
              </div>
            </motion.div>
 
          </div>
 
          {/* Right Visual Card Column: Floating Illustration Grid (Col-5) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Main Visual: Glassmorphic Floating Panel Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="w-full max-w-[400px] bg-white dark:bg-[#1E293B] rounded-[40px] shadow-2xl border border-[#11341C]/10 dark:border-white/5 p-8 sm:p-9 relative overflow-hidden bg-gradient-to-br from-white to-[#F8FAF5]/40 dark:from-[#1E293B] dark:to-[#0F172A]/40"
            >
              
              {/* Circular green overlay inside the container */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#11341C]/5 dark:bg-[#8FC14E]/5 rounded-bl-[40px] -z-10"></div>
              
              <div className="space-y-6">
                
                {/* Visual Header */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-150 dark:border-slate-800">
                  <div className="flex items-center space-x-2.5">
                    <div className="bg-[#11341C]/10 dark:bg-[#8FC14E]/10 p-2 rounded-xl text-[#11341C] dark:text-[#8FC14E]">
                      <Award className="h-5.5 w-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xs text-[#263238] dark:text-[#F8FAFC] uppercase tracking-wider">KPL Sertifikasi</h3>
                      <p className="text-[10px] text-neutral-400 dark:text-slate-400 font-medium">Nomor ID Terbuka Resmi</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#11341C]/8 dark:bg-[#8FC14E]/10 text-[#11341C] dark:text-[#8FC14E] px-3 py-1.5 rounded-lg font-black uppercase tracking-widest">
                    SIREG JATIM
                  </span>
                </div>
 
                {/* Card Main Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-md">
                  <img
                    src="/hero-showcase.png"
                    alt="Kios Pupuk Tani Makmur Parengan Tuban - Sarana Pertanian Parengan"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white text-[10.5px] font-bold uppercase tracking-wider">Kios Pupuk Tani Makmur Parengan Tuban</p>
                  </div>
                </div>
 
                {/* Call-out metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 dark:bg-slate-900/40 p-4.5 rounded-2xl border border-gray-150 dark:border-slate-800 flex flex-col justify-center">
                    <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest">Jam Pelayanan</span>
                    <span className="text-xs font-black text-[#263238] dark:text-[#F8FAFC] font-heading mt-1">{businessInfo.hours.split(",")[0]}</span>
                    <span className="text-[10px] text-[#11341C] dark:text-[#8FC14E] font-semibold mt-0.5">09:00 - 17:00</span>
                  </div>
                  
                  <div className="bg-neutral-50 dark:bg-slate-900/40 p-4.5 rounded-2xl border border-gray-150 dark:border-slate-800 flex flex-col justify-center">
                    <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest">Negara HET Resmi</span>
                    <span className="text-xs font-black text-[#263238] dark:text-[#F8FAFC] font-heading mt-1">Urea Rp2.250</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold mt-0.5">Per Kilogram</span>
                  </div>
                </div>
 
                {/* Instant Action Consultation Link */}
                <a
                  href={businessInfo.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#11341C] hover:bg-[#1B5E20] dark:bg-[#8FC14E] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3.5 px-4 rounded-2xl font-black text-[10.5px] uppercase tracking-widest text-center flex justify-center items-center space-x-2 shadow-lg shadow-[#11341C]/10 dark:shadow-none transition"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>Hubungi Kami Lewat WA</span>
                </a>
 
              </div>
 
            </motion.div>
          </div>
 
        </div>
        
      </div>
    </section>
  );
}
