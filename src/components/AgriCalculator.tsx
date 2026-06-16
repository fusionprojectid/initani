/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { cropFormulas, businessInfo } from "../data/storeData";
import { CropFormula } from "../types";
import { 
  Calculator, 
  HelpCircle, 
  RefreshCw, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AgriCalculator() {
  const [selectedCropId, setSelectedCropId] = useState<string>("f1");
  const [landArea, setLandArea] = useState<number>(1);
  const [areaUnit, setAreaUnit] = useState<"ha" | "ru">("ha"); // Javanese traditional Ru (1 Ha = 700 ru)

  // Retrieve current active formula
  const activeFormula = useMemo(() => {
    return cropFormulas.find((f) => f.id === selectedCropId) || cropFormulas[0];
  }, [selectedCropId]);

  // Convert land area based on unit selected
  const areaInHa = useMemo(() => {
    if (areaUnit === "ru") {
      return landArea / 700; // Traditional conversion factor
    }
    return landArea;
  }, [landArea, areaUnit]);

  // Calculate required nutrient mass and bag counts (50kg sacks)
  const calculations = useMemo(() => {
    const area = areaInHa < 0 ? 0 : areaInHa;
    
    const ureaKg = Math.round(activeFormula.ureaPerHa * area);
    const npkKg = Math.round(activeFormula.npkPerHa * area);
    const organikKg = Math.round(activeFormula.organikPerHa * area);
    const sp36Kg = Math.round(activeFormula.sp36PerHa * area);

    return {
      urea: { kg: ureaKg, sacks: Math.ceil(ureaKg / 50) },
      npk: { kg: npkKg, sacks: Math.ceil(npkKg / 50) },
      organik: { kg: organikKg, sacks: Math.ceil(organikKg / 50) },
      sp36: { kg: sp36Kg, sacks: Math.ceil(sp36Kg / 50) },
    };
  }, [areaInHa, activeFormula]);

  const resetCalculator = () => {
    setLandArea(1);
    setAreaUnit("ha");
    setSelectedCropId("f1");
  };

  // WhatsApp compiler for calculated results
  const getWhatsAppCalcLink = () => {
    const text = `Halo Kios Pupuk Tani Makmur Parengan,\nSaya mencoba *Kalkulator Dosis Sawah* di website Anda.\n\n` +
      `🌾 *Tanaman:* ${activeFormula.name}\n` +
      `📐 *Luas Lahan:* ${landArea} ${areaUnit.toUpperCase()} (${areaInHa.toFixed(3)} Ha)\n\n` +
      `*Rekomendasi Kebutuhan Pupuk (SNI):*\n` +
      `• *Urea:* ${calculations.urea.kg} Kg (~${calculations.urea.sacks} Sak @50kg)\n` +
      `• *NPK Phonska:* ${calculations.npk.kg} Kg (~${calculations.npk.sacks} Sak @50kg)\n` +
      `• *Pupuk Organik:* ${calculations.organik.kg} Kg (~${calculations.organik.sacks} Sak @50kg)\n` +
      `• *SP-36:* ${calculations.sp36.kg} Kg (~${calculations.sp36.sacks} Sak @50kg)\n\n` +
      `💡 *Tips Kios:* ${activeFormula.tips.substring(0, 150)}...\n\n` +
      `Apakah stok semua pupuk ini tersedia di gudang Kios dan bisa ditebus? Matur suwun, kulo entosi nggih!`;
    return `${businessInfo.whatsAppLink}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-[#F8FAF5] dark:bg-[#0F172A] scroll-mt-10 overflow-hidden relative">
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#0D3B20]/3 dark:bg-[#70A83B]/2 rounded-full filter blur-3xl -z-10 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
            Dosis Kalkulator Cerdas SNI
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-tight">
            Hitung Kebutuhan Pupuk Anda
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans font-semibold font-sans">
            Masukkan luas areal sawah dalam hektar atau Ru (Satuan Lokal Tradisional Tuban) untuk mendapatkan rincian karung pupuk makro berimbang nasional.
          </p>
        </div>

        {/* Calculator Main Panel: Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Input Form - 5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1E293B] rounded-[32px] border border-neutral-150 dark:border-white/5 p-7 sm:p-8.5 space-y-7 shadow-sm">
            
            <div className="flex justify-between items-center pb-4.5 border-b border-neutral-100 dark:border-slate-800">
              <div className="flex items-center space-x-2 text-[#0D3B20] dark:text-[#70A83B]">
                <Calculator className="h-5.5 w-5.5" />
                <h3 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] uppercase tracking-wider">Formula Input</h3>
              </div>
              
              <button
                onClick={resetCalculator}
                className="text-neutral-400 hover:text-neutral-600 dark:text-slate-500 dark:hover:text-slate-300 transition p-1.5 hover:bg-neutral-50 dark:hover:bg-slate-800 rounded-xl"
                title="Reset kalkulasi"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            {/* Choose Crop Type */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block">
                Jenis tanaman utama
              </label>
              
              <div className="space-y-2.5">
                {cropFormulas.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedCropId(f.id)}
                    className={`w-full text-left p-4.5 rounded-2xl border text-xs transition cursor-pointer flex justify-between items-center ${
                      selectedCropId === f.id
                        ? "bg-[#0D3B20]/5 dark:bg-[#70A83B]/10 border-[#0D3B20] dark:border-[#70A83B] text-[#0D3B20] dark:text-[#70A83B] font-black"
                        : "bg-white dark:bg-[#1E293B] border-neutral-200 dark:border-slate-800 text-[#263238] dark:text-[#F8FAFC] hover:bg-neutral-50 dark:hover:bg-slate-800 font-semibold"
                    }`}
                  >
                    <span>{f.name}</span>
                    <CheckCircle2 className={`h-4.5 w-4.5 transition-opacity duration-200 ${
                      selectedCropId === f.id ? "opacity-100 text-[#0D3B20] dark:text-[#70A83B]" : "opacity-0"
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Input Land Area Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block">
                  Luas area sawah
                </label>
                
                {/* Traditional Unit toggler (Ru vs Ha) */}
                <div className="flex bg-neutral-100 dark:bg-slate-900 p-1 rounded-xl">
                  <button
                    onClick={() => {
                      if (areaUnit === "ru") {
                        setAreaUnit("ha");
                        setLandArea(Math.round((landArea / 700) * 10) / 10 || 1);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider block transition ${
                      areaUnit === "ha" ? "bg-white dark:bg-[#1E293B] text-[#0D3B20] dark:text-[#70A83B] shadow-sm" : "text-neutral-400 dark:text-slate-500"
                    }`}
                  >
                    Hektar (Ha)
                  </button>
                  <button
                    onClick={() => {
                      if (areaUnit === "ha") {
                        setAreaUnit("ru");
                        setLandArea(Math.round(landArea * 700) || 1);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider block transition ${
                      areaUnit === "ru" ? "bg-white dark:bg-[#1E293B] text-[#0D3B20] dark:text-[#70A83B] shadow-sm" : "text-neutral-400 dark:text-slate-500"
                    }`}
                  >
                    Ruw / Ru (Lokal)
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step={areaUnit === "ha" ? "0.1" : "10"}
                  className="w-full bg-neutral-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 focus:border-[#0D3B20] dark:focus:border-[#70A83B] focus:ring-1 focus:ring-[#0D3B20] dark:focus:ring-[#70A83B] rounded-2xl py-4 px-5 text-sm font-black focus:outline-none text-[#263238] dark:text-[#F8FAFC]"
                  value={landArea}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setLandArea(isNaN(val) ? 0 : val);
                  }}
                />
                
                <span className="absolute right-5 inset-y-0 flex items-center text-xs font-black text-neutral-400 dark:text-slate-500 uppercase tracking-widest">
                  {areaUnit === "ha" ? "Ha" : "Ru"}
                </span>
              </div>

              {/* Javanese traditional metric info assist banner */}
              {areaUnit === "ru" && (
                <div className="bg-amber-50/70 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-900/30 p-3.5 rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="h-4.5 w-4.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-amber-700 dark:text-amber-300 leading-normal font-sans">
                    <strong>Informasi Ru (Ruwet):</strong> Satuan bata tradisional Jawa Timur. 1 Ru setara dengan ± 14.18 meter persegi. 1 Hektar (Ha) setara secara konvensi dengan <strong>700 Ru</strong>. Luas Anda setara dengan <strong>{areaInHa.toFixed(3)} Ha</strong>.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column (Calculated Output gauges - 7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1E293B] rounded-[32px] border border-neutral-150 dark:border-white/5 p-7 sm:p-8.5 space-y-8 shadow-sm">
            
            <div>
              <span className="text-[10px] font-black text-[#0D3B20] dark:text-[#70A83B] uppercase tracking-widest block leading-none mb-1 font-heading">
                Estimasi Hasil Analisa
              </span>
              <h3 className="text-xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading">
                Rekomendasi Kebutuhan Pupuk SNI
              </h3>
              <p className="text-[11px] text-neutral-400 dark:text-slate-400 block mt-1 leading-normal font-sans">
                Berikut adalah resep takaran dosis optimal kelayakan sawah perimbangan hara berdasarkan formulasi resmi dinas pertanian nasional.
              </p>
            </div>

            {/* Output Progress Gauge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Urea Display Card */}
              <div className="bg-neutral-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-neutral-100 dark:border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block">Pupuk Urea dasar</span>
                    <h4 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] mt-1">Urea Bersubsidi</h4>
                  </div>
                  <span className="text-[10px] bg-[#0D3B20]/8 dark:bg-[#70A83B]/8 text-[#0D3B20] dark:text-[#70A83B] px-2.5 py-1.5 rounded-lg font-black leading-none uppercase font-heading">
                    Kadar N 46%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between font-heading">
                    <span className="text-base sm:text-lg font-black text-[#0D3B20] dark:text-[#70A83B]">
                      {calculations.urea.kg} <span className="text-xs text-neutral-400 dark:text-slate-500 uppercase">Kg</span>
                    </span>
                    <span className="text-[11px] text-[#263238] dark:text-[#F8FAFC] font-black">
                      ~ {calculations.urea.sacks} <span className="text-[9px] text-neutral-400 dark:text-slate-500 uppercase">Sak</span>
                    </span>
                  </div>
                  
                  {/* Subtle graphical display gauge */}
                  <div className="h-2 w-full bg-gray-150 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0D3B20] dark:bg-[#70A83B] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(calculations.urea.kg / 5, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* NPK Display Card */}
              <div className="bg-neutral-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-neutral-100 dark:border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block">NPK Seimbang</span>
                    <h4 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] mt-1">NPK Phonska</h4>
                  </div>
                  <span className="text-[10px] bg-[#0D3B20]/8 dark:bg-[#70A83B]/8 text-[#0D3B20] dark:text-[#70A83B] px-2.5 py-1.5 rounded-lg font-black leading-none uppercase font-heading">
                    NPK 15-10-12
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between font-heading">
                    <span className="text-base sm:text-lg font-black text-[#0D3B20] dark:text-[#70A83B]">
                      {calculations.npk.kg} <span className="text-xs text-neutral-400 dark:text-slate-500 uppercase">Kg</span>
                    </span>
                    <span className="text-[11px] text-[#263238] dark:text-[#F8FAFC] font-black">
                      ~ {calculations.npk.sacks} <span className="text-[9px] text-neutral-400 dark:text-slate-500 uppercase">Sak</span>
                    </span>
                  </div>
                  
                  {/* Gauge bar */}
                  <div className="h-2 w-full bg-gray-150 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0D3B20]/80 dark:bg-[#70A83B]/80 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(calculations.npk.kg / 5, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Organik Display Card */}
              <div className="bg-neutral-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-neutral-100 dark:border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block">Penyubur Organik</span>
                    <h4 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] mt-1">Pupuk Organik Petro</h4>
                  </div>
                  <span className="text-[10px] bg-[#0D3B20]/8 dark:bg-[#70A83B]/8 text-[#0D3B20] dark:text-[#70A83B] px-2.5 py-1.5 rounded-lg font-black leading-none uppercase font-heading">
                    Kompos SNI
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between font-heading">
                    <span className="text-base sm:text-lg font-black text-[#0D3B20] dark:text-[#70A83B]">
                      {calculations.organik.kg} <span className="text-xs text-neutral-400 dark:text-slate-500 uppercase">Kg</span>
                    </span>
                    <span className="text-[11px] text-[#263238] dark:text-[#F8FAFC] font-black">
                      ~ {calculations.organik.sacks} <span className="text-[9px] text-neutral-400 dark:text-slate-500 uppercase">Sak</span>
                    </span>
                  </div>
                  
                  {/* Gauge */}
                  <div className="h-2 w-full bg-gray-150 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-600/70 dark:bg-amber-500/80 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(calculations.organik.kg / 10, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* SP-36 Display Card */}
              <div className="bg-neutral-50 dark:bg-slate-900/40 p-5 rounded-2xl border border-neutral-100 dark:border-slate-800/80 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block">Fosfor Tunggal</span>
                    <h4 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] mt-1">Pupuk SP-36 Super</h4>
                  </div>
                  <span className="text-[10px] bg-[#0D3B20]/8 dark:bg-[#70A83B]/8 text-[#0D3B20] dark:text-[#70A83B] px-2.5 py-1.5 rounded-lg font-black leading-none uppercase font-heading">
                    Kadar P2O5 36%
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between font-heading">
                    <span className="text-base sm:text-lg font-black text-[#0D3B20] dark:text-[#70A83B]">
                      {calculations.sp36.kg} <span className="text-xs text-neutral-400 dark:text-slate-500 uppercase">Kg</span>
                    </span>
                    <span className="text-[11px] text-[#263238] dark:text-[#F8FAFC] font-black">
                      ~ {calculations.sp36.sacks} <span className="text-[9px] text-neutral-400 dark:text-slate-500 uppercase">Sak</span>
                    </span>
                  </div>
                  
                  {/* Gauge */}
                  <div className="h-2 w-full bg-gray-150 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#1B5E20] dark:bg-emerald-600/85 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(calculations.sp36.kg / 3, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Practical Agronomic Tips from Database */}
            <div className="bg-[#0D3B20]/5 dark:bg-[#70A83B]/8 p-5 sm:p-6 rounded-[24px] border border-[#0D3B20]/10 dark:border-[#70A83B]/15 space-y-2.5">
              <h4 className="text-[11px] font-black text-[#0D3B20] dark:text-[#70A83B] uppercase tracking-widest font-heading flex items-center space-x-2">
                <HelpCircle className="h-4.5 w-4.5 stroke-[2.2]" />
                <span>Petunjuk Penyebaran Makro</span>
              </h4>
              <p className="text-xs text-neutral-650 dark:text-[#CBD5E1] leading-relaxed font-sans text-justify">
                {activeFormula.tips}
              </p>
            </div>

            {/* Action Checkout WhatsApp compilation */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <span className="text-[11px] text-neutral-400 dark:text-slate-400 font-bold block text-center sm:text-left">
                *Tebus aman langsung ke gudang parengan dengan membawa draf konsultasi ini.
              </span>
              
              <a
                href={getWhatsAppCalcLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0D3B20] hover:bg-[#1B5E20] dark:bg-[#70A83B] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-4 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest text-center flex items-center justify-center space-x-2 shadow-lg shadow-[#0D3B20]/15 dark:shadow-none shrink-0"
              >
                <ArrowRight className="h-4 w-4" />
                <span>Kirim Konsul WA</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
