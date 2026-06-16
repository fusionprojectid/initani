/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { galleryItems } from "../data/storeData";
import { GalleryItem } from "../types";
import { Eye, Image, X, Calendar, Focus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: "all", name: "Semua Foto" },
    { id: "produk", name: "Gudang & Produk" },
    { id: "kegiatan", name: "Kegiatan Sawah" },
    { id: "mitra", name: "Mitra Tani Jatim" }
  ];

  const filteredItems = useMemo(() => {
    if (selectedCat === "all") return galleryItems;
    return galleryItems.filter((g) => g.category === selectedCat);
  }, [selectedCat]);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#0F172A] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
            Dokumentasi Kios Tani
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-none">
            Galeri Kegiatan & Gudang Kami
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans font-semibold font-sans">
            Tinjau keteraturan stok logistik pupuk serta keseruan panen raya padi di persawahan mitra binaan Kecamatan Parengan Kabupaten Tuban.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex items-center justify-center space-x-3 overflow-x-auto pb-4 scrollbar-hide mb-10 border-b border-neutral-100 dark:border-slate-800">
          {tabs.map((t) => {
            const isActive = selectedCat === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedCat(t.id)}
                className={`px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider block shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#0D3B20] dark:bg-[#70A83B] text-white dark:text-[#0F172A] shadow-md shadow-[#0D3B20]/10 dark:shadow-none"
                    : "bg-[#F8FAF5] dark:bg-[#1E293B] border border-neutral-150 dark:border-white/5 text-[#263238] dark:text-[#F8FAFC] hover:bg-neutral-50 dark:hover:bg-slate-800"
                }`}
              >
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Photo Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-neutral-50 dark:bg-[#1E293B] rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/5 shadow-sm group hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Image panel */}
                <div className="relative aspect-video overflow-hidden bg-neutral-150 dark:bg-slate-800 cursor-pointer" onClick={() => setActivePhoto(item)}>
                  <img
                    src={item.image}
                    alt={
                      item.category === "produk"
                        ? `${item.title} - Toko pupuk Parengan Tuban, Supplier pupuk Tuban`
                        : item.category === "kegiatan"
                        ? `${item.title} - Sarana pertanian Parengan, Kios Pupuk Tani Makmur Parengan Tuban`
                        : `${item.title} - Kios Pupuk Tani Makmur Parengan Tuban, Toko pupuk Parengan Tuban`
                    }
                    className="w-full h-full object-cover aspect-video transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-106"
                    style={{ willChange: "transform" }}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                  {/* Hover visual scale up lens */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white space-x-2">
                    <Focus className="h-5 w-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Perbesar Foto</span>
                  </div>
                </div>

                {/* Desc summary details */}
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center space-x-2 text-[9px] font-black text-[#0D3B20] dark:text-[#70A83B] uppercase tracking-widest font-heading">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Kegiatan Teritorial 2026</span>
                  </div>
                  
                  <h3 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] block truncate">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] text-neutral-500 dark:text-slate-400 leading-relaxed font-sans line-clamp-2">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* PHOTO LIGHTBOX MODAL TRIGGER */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop dark cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="absolute inset-0 bg-[#263238]/90 backdrop-blur-md"
            />

            {/* Picture block */}
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#263238] rounded-3xl overflow-hidden shadow-2xl border border-white/5 py-3 px-4 flex flex-col justify-between max-h-[90vh]"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-white cursor-pointer z-10 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-video bg-neutral-900 border border-white/5 max-h-[70vh]">
                  <img
                    src={activePhoto.image}
                    alt={`${activePhoto.title} - Kios Pupuk Tani Makmur Parengan Tuban`}
                    className="w-full h-full object-contain aspect-video"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                </div>
                
                <div className="px-3 pb-3 text-white space-y-1.5">
                  <span className="text-[9px] bg-emerald-500/10 text-[#70A83B] px-2.5 py-1 rounded-md font-black uppercase tracking-widest font-heading mb-1 display-block">
                    {activePhoto.category}
                  </span>
                  <h4 className="font-heading font-black text-sm text-neutral-100">{activePhoto.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-2xl">{activePhoto.description}</p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
