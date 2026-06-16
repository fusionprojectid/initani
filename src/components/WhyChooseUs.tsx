/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  Award, 
  HeartHandshake, 
  Truck, 
  ShieldCheck, 
  DollarSign, 
  Store,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Produk Berkualitas",
      subtitle: "Jaminan keaslian 100% didukung audit dinas pertanian teritorial.",
      description: "Kami mendistribusikan pupuk berskala Standar Nasional Indonesia (SNI), benih bersertifikat murni, dan obat pengendali gulma andalan langsung dari pabrikan resmi.",
      icon: Award,
      badge: "100% Orisinil"
    },
    {
      title: "Harga Kompetitif",
      subtitle: "Penjualan pupuk bersubsidi taat penuh pada ketetapan HET.",
      description: "Kami berkomitmen menjaga keterjangkauan modal tanam dengan menjual pupuk bersubsidi ketat sesuai Harga Eceran Tertinggi resmi kementerian tanpa manipulasi.",
      icon: DollarSign,
      badge: "HET Resmi"
    },
    {
      title: "Pelayanan Ramah",
      subtitle: "Kelompok tani dilayani secara kekeluargaan dan transparan.",
      description: "Staf kami terlatih membimbing petani dalam melengkapi administrasi penebusan e-RDKK secara sabar, santun, transparan, dan teratur.",
      icon: HeartHandshake,
      badge: "Mitra Setia"
    },
    {
      title: "Stok Terjamin",
      subtitle: "Gudang penyimpanan modern yang terjaga kelembabannya.",
      description: "Kapasitas gudang Kios Tani Makmur dirancang khusus menjaga suhu pupuk tetap kering agar bulir pupuk tidak menggumpal dan siap ditebus sepanjang musim.",
      icon: ShieldCheck,
      badge: "Ready Stock"
    },
    {
      title: "Konsultasi Pertanian",
      subtitle: "Pendampingan diagnosis penyakit tanaman secara gratis.",
      description: "Dapatkan solusi dosis berimbang pupuk makro, herbisida selektif, serta rujukan fungisida sistemik terbaik dari kurator agronomi kami tanpa biaya tambahan.",
      icon: Truck,
      badge: "Solusi Agronomi"
    },
    {
      title: "Lokasi Mudah Dijangkau",
      subtitle: "Akses jalan strategis untuk truk pengangkut & pickup sawah.",
      description: "Terletak tepat di Jl. Dharma Bhakti, Rembun, Kumpulrejo, membuat proses muat bongkar pupuk kelompok tani menjadi sangat cepat dan bebas hambatan macet.",
      icon: Store,
      badge: "Lokasi Strategis"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-[#0F172A] scroll-mt-10 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-80 h-80 bg-[#0D3B20]/3 dark:bg-[#70A83B]/2 rounded-full filter blur-3xl -z-10 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
            Keunggulan Kios Resmi
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-tight">
            Mengapa Petani Tuban Memilih Kami?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans font-semibold font-sans">
            Profesionalitas layanan penataan pupuk terstandardisasi tinggi demi kebaikan budidaya sawah pangan yang berkelanjutan di Kecamatan Parengan.
          </p>
        </div>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={idx}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="bg-[#F8FAF5] dark:bg-[#1E293B] hover:bg-white dark:hover:bg-slate-800/80 rounded-[32px] p-8 border border-neutral-150 dark:border-white/5 hover:border-[#0D3B20]/25 dark:hover:border-[#70A83B]/25 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Subtle glowing overlay background on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D3B20]/5 dark:bg-[#70A83B]/3 rounded-bl-[32px] group-hover:scale-110 transition-transform -z-10"></div>

                <div className="space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-center">
                    <div className="bg-[#0D3B20] dark:bg-[#70A83B] text-white dark:text-[#0F172A] p-3.5 rounded-2xl shadow-lg shadow-[#0D3B20]/10 dark:shadow-none group-hover:rotate-3 transition">
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    
                    <span className="text-[9px] font-black text-[#0D3B20] dark:text-[#70A83B] bg-[#0D3B20]/8 dark:bg-[#70A83B]/12 px-3 py-1.5 rounded-lg uppercase tracking-widest leading-none font-heading">
                      {c.badge}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1.5">
                    <h3 className="font-heading font-black text-sm uppercase tracking-wide text-[#263238] dark:text-[#F8FAFC]">
                      {c.title}
                    </h3>
                    
                    <p className="text-[11.5px] text-neutral-500 dark:text-[#CBD5E1] font-bold leading-relaxed font-sans">
                      {c.subtitle}
                    </p>
                    
                    <p className="text-xs text-neutral-450 dark:text-slate-400 leading-relaxed font-sans text-justify pt-1">
                      {c.description}
                    </p>
                  </div>

                </div>

                {/* Card Signature Footnote */}
                <div className="mt-8 flex items-center space-x-2.5 text-[10px] font-black text-[#0D3B20] dark:text-[#70A83B] uppercase tracking-wider border-t border-neutral-200/50 dark:border-slate-800/50 pt-4 font-heading">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kios Tani Makmur</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
