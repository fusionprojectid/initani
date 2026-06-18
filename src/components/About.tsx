/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { businessInfo } from "../data/storeData";
import { ShieldCheck, ArrowRight, UserCheck, Sprout, Milestone } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const points = [
    {
      title: "Penyalur Resmi Pupuk Negara",
      description: "Terdaftar resmi dengan ID SIREG nomor KPL yang valid untuk mengawal ketersediaan Urea Bersubsidi, SP-36, ZA, serta NPK Phonska.",
      icon: ShieldCheck
    },
    {
      title: "Pemberdayaan Kelompok Tani (Gapoktan)",
      description: "Bekerja sama erat dengan ketua kelompok tani serta penyuluh wilayah Parengan untuk menyelaraskan jadwal tebus kuota gabungan.",
      icon: UserCheck
    },
    {
      title: "Konsultasi Penyakit Hama Gratis",
      description: "Menyediakan layanan penyuluhan bebas biaya untuk menangani busuk pucuk jagung, penyakit patah leher padi, wereng coklat, dan sejenisnya.",
      icon: Sprout
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0F172A] scroll-mt-10 overflow-hidden relative">
      {/* Visual background lines */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#70A83B]/3 dark:bg-[#70A83B]/2 rounded-full filter blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Creative Layout of Images (Col-5) */}
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Frame */}
            <div className="relative rounded-[40px] overflow-hidden bg-neutral-150 dark:bg-slate-800 aspect-[4/5] shadow-2xl group border border-[#0D3B20]/10 dark:border-white/5">
              <img
                src="/about-store.png"
                alt="Toko pupuk Parengan Tuban - Kios Pupuk Tani Makmur"
                className="w-full h-full object-cover transform-gpu transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                style={{ willChange: "transform" }}
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glass Badge representing local address */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md p-5 rounded-3xl border border-white/20 dark:border-white/5 shadow-xl">
                <span className="text-[9px] bg-[#0D3B20] dark:bg-[#70A83B] text-white dark:text-[#0F172A] font-black px-2.5 py-1 rounded-md uppercase tracking-wider block w-fit mb-1.5">
                  LOKASI UTAMA
                </span>
                <p className="text-xs font-black text-[#263238] dark:text-[#F8FAFC] font-heading leading-tight">{businessInfo.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Editorial text copy details (Col-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block mb-4 font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
                Profil Pengecer Resmi
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-tight md:leading-[1.12]">
                Menjaga Kedaulatan Pangan & Hasil Panen Raya Tuban
              </h2>
              
              <p className="text-sm sm:text-base text-neutral-600 dark:text-[#CBD5E1] mt-4 leading-relaxed font-sans text-justify">
                <strong>Kios Pupuk Tani Makmur</strong> adalah mitra resmi bersertifikasi PT Pupuk Indonesia yang menyalurkan pupuk bersubsidi dan obat-obatan pembasmi hama di wilayah Parengan, Tuban. Didirikan berkat dedikasi mendampingi para petani lokal, kami menyediakan sarana saprotan orisinil terlengkap yang aman serta ramah lingkungan.
              </p>
            </div>

            {/* Feature Checklists list rendering */}
            <div className="space-y-6">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div 
                    key={i}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex space-x-4 items-start"
                  >
                    <div className="bg-[#0D3B20]/8 border border-[#0D3B20]/15 dark:bg-[#70A83B]/10 dark:border-[#70A83B]/15 p-3 rounded-2xl text-[#0D3B20] dark:text-[#70A83B] shrink-0">
                      <Icon className="h-5.5 w-5.5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] leading-none mb-1.5 uppercase tracking-wide">
                        {p.title}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
