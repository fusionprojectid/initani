/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { reviews } from "../data/storeData";
import { Star, Quote, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8FAF5] dark:bg-[#0F172A] scroll-mt-10 overflow-hidden relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#11341C]/3 dark:bg-[#8FC14E]/2 rounded-full filter blur-3xl -z-10 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#11341C] bg-[#11341C]/8 border border-[#11341C]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block font-heading dark:text-[#8FC14E] dark:bg-[#8FC14E]/8 dark:border-[#8FC14E]/15">
            Amanah & Keberhasilan Sawah
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-none">
            Suara Mitra Kelompok Tani Tuban
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans font-semibold">
            Kesaksian tulus para pengurus Gapoktan dan perkebunan melon modern Tuban yang telah teratur bertransaksi tebus secara resmi.
          </p>
        </div>

        {/* 3-Column Testimonials block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1E293B] rounded-[32px] p-8 border border-neutral-150 dark:border-white/5 hover:border-[#11341C]/20 dark:hover:border-[#8FC14E]/20 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden group"
            >
              {/* Corner quote mark decorative backing */}
              <Quote className="absolute right-6 bottom-6 h-16 w-16 text-neutral-100 dark:text-slate-800 opacity-20 dark:opacity-10 -z-5 group-hover:scale-105 transition" />

              <div className="space-y-6">
                
                {/* Visual Header Rating */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-slate-800">
                  <div className="flex space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <span className="text-[9px] bg-[#11341C]/8 dark:bg-[#8FC14E]/10 text-[#11341C] dark:text-[#8FC14E] px-2.5 py-1.5 rounded-lg font-black uppercase tracking-wider font-heading leading-none">
                    {rev.cropType}
                  </span>
                </div>

                {/* Main Quote Content */}
                <p className="text-[12px] text-neutral-600 dark:text-slate-350 leading-relaxed font-sans text-justify italic">
                  "{rev.content}"
                </p>

              </div>

              {/* Farmer Profile Footer */}
              <div className="mt-8 pt-4.5 border-t border-neutral-100 dark:border-slate-800 flex items-center space-x-3.5 z-10">
                <div className="h-11 w-11 rounded-full flex items-center justify-center bg-gradient-to-br from-[#11341C]/15 to-[#11341C]/5 dark:from-[#8FC14E]/20 dark:to-[#8FC14E]/5 text-[#11341C] dark:text-[#8FC14E] border-2 border-[#11341C]/25 dark:border-[#8FC14E]/25 font-heading font-black text-xs shrink-0 select-none">
                  {rev.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-heading font-black text-xs text-[#263238] dark:text-[#F8FAFC] uppercase tracking-wide leading-none">{rev.name}</h4>
                  <p className="text-[10.5px] text-neutral-400 dark:text-slate-500 font-bold mt-1 leading-none">{rev.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
