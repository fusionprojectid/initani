/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { businessInfo } from "../data/storeData";
import { Phone, MapPin, Clock, Send, CheckCircle2, RefreshCw, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cropType, setCropType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phoneNumber || !message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  // Pre-fill WhatsApp message based on form
  const getWhatsAppFormLink = () => {
    const formattedCrop = cropType ? `\nTanaman: ${cropType}` : "";
    const msg = `Halo Kios Pupuk Tani Makmur, saya *${name}* (${phoneNumber}).

Saya ingin mengirimkan pesan/pertanyaan:${formattedCrop}
"${message}"

Mohon tanggapannya ya Kios Tani Makmur Parengan!`;

    return `${businessInfo.whatsAppLink}?text=${encodeURIComponent(msg)}`;
  };

  const handleReset = () => {
    setName("");
    setPhoneNumber("");
    setCropType("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAF5] dark:bg-[#0F172A] scroll-mt-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D3B20]/3 dark:bg-[#70A83B]/2 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block mb-4 font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
            Layanan Pelanggan
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-tight md:leading-[1.12]">
            Hubungi Kios Tani Makmur Sekarang
          </h2>
          <div className="h-1 w-16 bg-[#FFB300] dark:bg-[#FBBF24] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Info Panel (Col-5) */}
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#1a441c] to-[#0D3B20] text-white rounded-[36px] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Dynamic visual rings in background */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#70A83B]/10 rounded-full filter blur-2xl"></div>
            
            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider font-heading">Informasi Kontak</h3>
                <p className="text-xs text-[#a4ebb1] mt-1.5 font-bold italic">Kami siap melayani kebutuhan pupuk & konsultasi pestisida Anda.</p>
              </div>

              {/* Point Lists */}
              <div className="space-y-8">
                
                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-3.5 rounded-2xl group-hover:bg-[#70A83B]/20 transition-colors shrink-0">
                    <Phone className="h-5.5 w-5.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#a4ebb1] uppercase tracking-wider">Telepon & WhatsApp (CS)</h4>
                    <span className="text-lg sm:text-xl font-bold mt-1 block tracking-tight">{businessInfo.phoneFormatted}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-3.5 rounded-2xl group-hover:bg-[#70A83B]/20 transition-colors shrink-0">
                    <MapPin className="h-5.5 w-5.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#a4ebb1] uppercase tracking-wider">Alamat Toko Fisik</h4>
                    <p className="text-xs text-white/80 mt-1 leading-relaxed font-sans text-justify">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-3.5 rounded-2xl group-hover:bg-[#70A83B]/20 transition-colors shrink-0">
                    <Clock className="h-5.5 w-5.5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#a4ebb1] uppercase tracking-wider">Jam Operasional Pelayanan</h4>
                    <span className="text-sm font-bold mt-1 block font-sans">{businessInfo.hours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom mini disclaimer */}
            <div className="pt-8 border-t border-white/10 mt-10 relative z-10 flex justify-between items-center">
              <div>
                <span className="text-[9px] text-white/50 block font-bold uppercase tracking-widest">Kios Resmi Sireg</span>
                <span className="text-xs text-white/90 font-black mt-0.5 block">{businessInfo.legalSireg}</span>
              </div>
              <div className="bg-white/10 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider">
                Tuban, Jatim
              </div>
            </div>

          </motion.div>

          {/* Right Contact Form (Col-7) */}
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="lg:col-span-7 bg-white dark:bg-[#1E293B] rounded-[36px] p-8 sm:p-10 border border-[#0D3B20]/10 dark:border-white/5 shadow-2xl flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form-contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6" 
                  id="kios-contact-form"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#263238] dark:text-[#F8FAFC] font-heading tracking-tight">Kirim Pesan Langsung</h3>
                    <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1 leading-relaxed">Isikan keluhan wereng, blas padi, atau pertanyaan stok barang secara cepat lewat pos ini.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name field */}
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Nama Sesuai KTP *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Pak Suparjo"
                        id="form-input-name"
                        className="w-full bg-[#F8FAF5] dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 focus:border-[#0D3B20] dark:focus:border-[#70A83B] focus:ring-1 focus:ring-[#0D3B20] dark:focus:ring-[#70A83B] rounded-xl px-4 py-3.5 text-xs font-semibold focus:outline-none transition text-[#263238] dark:text-[#F8FAFC]"
                      />
                    </div>

                    {/* Phone field */}
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">No. Telepon / WA *</label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Contoh: 0813-XXXX-XXXX"
                        id="form-input-phone"
                        className="w-full bg-[#F8FAF5] dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 focus:border-[#0D3B20] dark:focus:border-[#70A83B] focus:ring-1 focus:ring-[#0D3B20] dark:focus:ring-[#70A83B] rounded-xl px-4 py-3.5 text-xs font-semibold focus:outline-none transition text-[#263238] dark:text-[#F8FAFC]"
                      />
                    </div>

                  </div>

                  {/* Crop Type (Optional) */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Komoditas / Tanaman Sawah (Opsional)</label>
                    <input
                      type="text"
                      value={cropType}
                      onChange={(e) => setCropType(e.target.value)}
                      placeholder="Contoh: Padi Sawah Inpari 32, Jagung Hibrida, Melon"
                      id="form-input-crop"
                      className="w-full bg-[#F8FAF5] dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 focus:border-[#0D3B20] dark:focus:border-[#70A83B] focus:ring-1 focus:ring-[#0D3B20] dark:focus:ring-[#70A83B] rounded-xl px-4 py-3.5 text-xs font-semibold focus:outline-none transition text-[#263238] dark:text-[#F8FAFC]"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Isi Laporan / Pesan Pokok Tani *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tulis rincian pesanan herbisida, atau sampaikan keluhan serangan hama di sawah Anda..."
                      id="form-input-message"
                      className="w-full bg-[#F8FAF5] dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 focus:border-[#0D3B20] dark:focus:border-[#70A83B] focus:ring-1 focus:ring-[#0D3B20] dark:focus:ring-[#70A83B] rounded-xl px-4 py-3.5 text-xs font-semibold focus:outline-none transition text-[#263238] dark:text-[#F8FAFC]"
                    ></textarea>
                  </div>

                  {/* Action button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    id="form-submit-button"
                    className="w-full bg-[#0D3B20] hover:bg-[#1B5E20] dark:bg-[#70A83B] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-4 rounded-xl font-black text-xs uppercase tracking-widest flex justify-center items-center space-x-2.5 transition shadow-lg shadow-[#0D3B20]/10 dark:shadow-none cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4.5 w-4.5 animate-spin" />
                        <span>Mengantar Formulir...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        <span>Kirim Pesan Ke Kios</span>
                      </>
                    )}
                  </motion.button>

                </motion.form>
              ) : (
                <motion.div 
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 text-center flex flex-col items-center justify-center space-y-6" 
                  id="form-success-view"
                >
                  <div className="bg-[#0D3B20]/8 dark:bg-[#70A83B]/8 p-5.5 rounded-full text-[#0D3B20] dark:text-[#70A83B] w-fit border border-[#0D3B20]/15 dark:border-[#70A83B]/15">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#263238] dark:text-[#F8FAFC] font-heading tracking-tight">Formulir Sukses Dikirim!</h3>
                    <p className="text-xs sm:text-[13px] text-neutral-500 dark:text-[#CBD5E1] max-w-sm mx-auto mt-2 leading-relaxed">
                      Pesan Anda tersimpan di sistem lokal Kios Tani Makmur Parengan. Kami merekomendasikan penerusan langsung di aplikasi WhatsApp Anda.
                    </p>
                  </div>

                  {/* Push to WhatsApp */}
                  <div className="p-6 bg-gradient-to-br from-[#F8FAF5] to-white dark:from-slate-900 dark:to-[#1E293B] rounded-[24px] border border-[#0D3B20]/15 dark:border-[#70A83B]/15 max-w-md w-full shadow-sm">
                    <p className="text-xs font-bold text-neutral-600 dark:text-slate-400 mb-4">Butuh balasan agronomi mendesak / instan?</p>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      href={getWhatsAppFormLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="form-success-wa-push"
                      className="w-full bg-[#0D3B20] hover:bg-[#1B5E20] dark:bg-[#70A83B] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-4 px-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex justify-center items-center space-x-2 shadow-md dark:shadow-none"
                    >
                      <Phone className="h-4.5 w-4.5" />
                      <span>Kirim Salinan pesan ke WA</span>
                    </motion.a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs text-[#0D3B20] dark:text-[#70A83B] hover:underline font-black transition uppercase tracking-wide cursor-pointer"
                  >
                    Hubungi Lagi / Kirim Pesan Baru
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
