/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { faqItems } from "../data/storeData";
import { ChevronDown, HelpCircle, ArrowRight, Search, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#0F172A] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
            Pusat Bantuan & e-RDKK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-none">
            Tanya Jawab Penebusan Pupuk
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans font-semibold">
            Temukan panduan syarat tebus kelompok tani, aturan KTP Kementerian Pertanian, dan jangkauan kirim ekspedisi pickup sawah kami.
          </p>
        </div>

        {/* 2-Column Split: Visual Side Callout + Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Callout - 5 cols) */}
          <div className="lg:col-span-5 bg-[#F8FAF5] dark:bg-[#1E293B] rounded-[32px] p-8 border border-neutral-150 dark:border-white/5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[9px] bg-[#0D3B20] dark:bg-[#70A83B] text-white dark:text-[#0F172A] px-2.5 py-1.5 rounded-lg font-black uppercase tracking-widest font-heading block w-fit">
                Layanan Tanya Cepat
              </span>
              
              <h3 className="font-heading font-black text-lg text-[#263238] dark:text-[#F8FAFC] leading-tight">
                Punya Pertanyaan Spesifik Tentang Tanaman Anda?
              </h3>
              
              <p className="text-xs text-neutral-550 dark:text-slate-300 leading-relaxed font-sans text-justify">
                Jangan sungkan untuk mendiskusikan ulat grayak jagung, busuk akar tomat, tebus pupuk subsidi NIK KTP bermasalah, ataupun negosiasi harga grosir draf pupuk non-subsidi bersama admin ahli kami.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0F172A] p-5 rounded-2xl border border-neutral-150 dark:border-slate-800 space-y-3.5 shadow-sm">
              <div className="flex items-center space-x-3 text-[#0D3B20] dark:text-[#70A83B]">
                <HelpCircle className="h-5.5 w-5.5 stroke-[2.2]" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#263238] dark:text-[#F8FAFC]">Konsultasi Online</span>
              </div>
              
              <p className="text-[11px] text-neutral-500 dark:text-slate-400 leading-normal font-sans">
                Admin spesialis agronomi kami aktif membalas tanya-jawab chat pada hari kerja operasional kios Tuban.
              </p>
              
              <a
                href="https://wa.me/6281359839918"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0D3B20] dark:bg-[#70A83B] hover:bg-[#1B5E20] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center flex justify-center items-center space-x-2 transition shadow-md shadow-[#0D3B20]/10"
              >
                <Phone className="h-4 w-4" />
                <span>Konsul Cek e-RDKK</span>
              </a>
            </div>
          </div>

          {/* Right Column (FAQ list - 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-[#1E293B] rounded-2xl border border-neutral-150 dark:border-white/5 overflow-hidden shadow-sm"
                >
                  {/* Trigger Header button */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left py-5 px-6.5 flex justify-between items-center transition cursor-pointer hover:bg-neutral-50/80 dark:hover:bg-slate-800/50"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[9px] text-[#0D3B20] dark:text-[#70A83B] font-black uppercase tracking-widest block font-heading">
                        {item.category}
                      </span>
                      <h4 className="font-heading font-black text-xs sm:text-sm text-[#263238] dark:text-[#F8FAFC]">
                        {item.question}
                      </h4>
                    </div>
                    
                    <span className={`bg-neutral-100 dark:bg-slate-850 hover:bg-neutral-200 dark:hover:bg-slate-800 p-1.5 rounded-full text-neutral-500 dark:text-slate-400 transition-transform duration-300 transform ${
                      isOpen ? "rotate-185 bg-emerald-50 dark:bg-emerald-950/40 text-[#0D3B20] dark:text-[#70A83B]" : ""
                    }`}>
                      <ChevronDown className="h-4.5 w-4.5" />
                    </span>
                  </button>

                  {/* Expand panel content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6.5 pb-6 border-t border-neutral-100 dark:border-slate-800 pt-4.5 text-xs text-neutral-600 dark:text-slate-350 leading-relaxed font-sans text-justify bg-neutral-50/30 dark:bg-slate-900/10">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
