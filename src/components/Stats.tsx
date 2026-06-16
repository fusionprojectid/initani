/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Users, Leaf, Calendar, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Stats() {
  const statsList = [
    {
      id: "stat-1",
      number: "1.200+",
      label: "Pelanggan Aktif",
      desc: "Petani & Gapoktan yang mempercayakan kebutuhan sawahnya kepada kami.",
      icon: Users,
      color: "from-[#0D3B20]/10 to-[#70A83B]/5"
    },
    {
      id: "stat-2",
      number: "50+",
      label: "Produk Pilihan",
      desc: "Mulai dari pupuk subsidi resmi, non-subsidi, pestisida, hingga benih bersertifikat.",
      icon: Leaf,
      color: "from-[#FFB300]/10 to-amber-500/5"
    },
    {
      id: "stat-3",
      number: "12+",
      label: "Tahun Mengabdi",
      desc: "Konsisten mendampingi dan menyediakan sarana pertanian di Tuban sejak tahun 2014.",
      icon: Calendar,
      color: "from-[#0D3B20]/10 to-emerald-500/5"
    },
    {
      id: "stat-4",
      number: "99%",
      label: "Tingkat Kepuasan",
      desc: "Petani kembali membeli karena jaminan keaslian pupuk dan panduan dosis yang akurat.",
      icon: Heart,
      color: "from-rose-500/10 to-pink-500/5"
    }
  ];

  return (
    <section className="py-20 bg-emerald-950 dark:bg-[#0A0F1D] text-white relative overflow-hidden border-y border-transparent dark:border-slate-800/50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#70A83B]/10 dark:bg-[#70A83B]/5 rounded-full filter blur-3xl -translate-y-24 translate-x-24 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFB300]/5 dark:bg-[#FBBF24]/2 rounded-full filter blur-3xl translate-y-24 -translate-x-24 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 dark:bg-white/2 border border-white/10 dark:border-white/5 rounded-3xl p-6 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 relative group"
                id={stat.id}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#70A83B] dark:text-[#70A83B] group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white group-hover:text-[#70A83B] dark:group-hover:text-[#70A83B] transition-colors">
                    {stat.number}
                  </h3>
                  <p className="text-xs font-black uppercase tracking-widest text-[#70A83B] dark:text-[#70A83B] font-heading pt-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-neutral-300 dark:text-slate-350 leading-relaxed pt-2">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
