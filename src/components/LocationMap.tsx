/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Navigation, Car, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { businessInfo } from "../data/storeData";

export default function LocationMap() {
  // Coordinates location search keyword ready for Google Maps Search query iframe embed
  const mapSearchQuery = encodeURIComponent(
    "Jl. Dharma Bhakti, Rembun, Kumpulrejo, Parengan, Kabupaten Tuban, Jawa Timur 62326"
  );
  
  // High quality Google Maps Embed api iframe
  const mapIframeUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0838128362615!2d111.8797306!3d-7.116521599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77864dd1e2df89%3A0xe4d3fa3acccdbcb6!2sParengan%2C%20Kabupaten%20Tuban%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1718428500000!5m2!1sid!2sid`;

  return (
    <section id="location-map" className="py-24 bg-white dark:bg-[#0F172A] scroll-mt-10 overflow-hidden relative">
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#0D3B20]/3 dark:bg-[#70A83B]/2 rounded-full filter blur-3xl -z-10 translate-y-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#0D3B20] bg-[#0D3B20]/8 border border-[#0D3B20]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest inline-block font-heading dark:text-[#70A83B] dark:bg-[#70A83B]/8 dark:border-[#70A83B]/15">
            Lokasi Fisik Gudang
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-tight">
            Kunjungi Kios Sawah Kami
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#CBD5E1] leading-relaxed font-sans font-semibold">
            Gudang utama Kios Tani Makmur berlokasi strategis di pusat pertanian Parengan, memudahkan truk angkutan pupuk memuat kargo secara aman.
          </p>
        </div>

        {/* 2-Column Map Layout: Info Details Card + Map Iframe Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Location details and guidelines (Col-4) */}
          <div className="lg:col-span-4 bg-[#F8FAF5] dark:bg-[#1E293B] border border-neutral-150 dark:border-white/5 rounded-[32px] p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5 text-[#0D3B20] dark:text-[#70A83B]">
                <MapPin className="h-6 w-6 stroke-[2.2]" />
                <h3 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] uppercase tracking-wider">Desa Kumpulrejo</h3>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-[#263238] dark:text-[#F8FAFC] font-black leading-relaxed">
                  Jl. Dharma Bhakti, RT.04/RW.01, Dusun Rembun, Desa Kumpulrejo, Kec. Parengan, Kabupaten Tuban, Jawa Timur 62326
                </p>
                <div className="h-px bg-neutral-200 dark:bg-slate-800"></div>
                
                <p className="text-[11.5px] text-neutral-500 dark:text-slate-300 leading-relaxed font-sans text-justify">
                  Letak kios persis berada di tepi jalan aspal desa yang lebar, sangat bersahabat bagi akses truk colt diesel dobel, mobil pickup draf, dan kendaraan traktor pertanian draf lurus.
                </p>
              </div>

              {/* Driving assistant guidance info cards */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3.5 bg-white dark:bg-[#0F172A] p-4.5 rounded-2xl border border-neutral-100 dark:border-slate-800">
                  <Navigation className="h-5 w-5 text-[#0D3B20] dark:text-[#70A83B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-[#263238] dark:text-[#F8FAFC] uppercase tracking-widest">Rute Terdekat</h4>
                    <p className="text-[11px] text-neutral-400 dark:text-slate-400 mt-1 leading-normal font-sans">
                      Dari wilayah Bojonegoro Kota hanya berjarak ± 20 menit berkendara lurus menyeberangi jembatan Kali Kethek Parengan ke arah utara.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 bg-white dark:bg-[#0F172A] p-4.5 rounded-2xl border border-neutral-100 dark:border-slate-800">
                  <Car className="h-5 w-5 text-[#FFB300] dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[10px] font-bold text-[#263238] dark:text-[#F8FAFC] uppercase tracking-widest">Tempat Bongkar Muat</h4>
                    <p className="text-[11px] text-neutral-400 dark:text-slate-400 mt-1 leading-normal font-sans">
                      Halaman parkir depan teras kios draf luas muat draf hingga 2 truk bongkar pupuk secara bersamaan tanpa mengganggu lalu lintas jalan desa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps External Navigation button */}
            <div className="pt-6 border-t border-neutral-200/60 dark:border-slate-800 mt-8">
              <a
                href="https://www.google.com/maps/place/Kios+Pupuk+Tani+Makmur,+Jl.+Dharma+Bhakti,+Rembun,+Kumpulrejo,+Parengan,+Tuban+Regency,+East+Java+62366/data=!4m2!3m1!1s0x2e7777c683d35973:0x2b733b455dfae10a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0D3B20] hover:bg-[#1B5E20] dark:bg-[#70A83B] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-center flex justify-center items-center space-x-2 transition shadow-md shadow-[#0D3B20]/10 dark:shadow-none"
              >
                <Navigation className="h-4.5 w-4.5 fill-current" />
                <span>Buka di Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame (Col-8) */}
          <div className="lg:col-span-8 bg-neutral-100 dark:bg-slate-900 rounded-[32px] overflow-hidden border border-neutral-250 dark:border-white/5 min-h-[400px] shadow-sm relative group">
            
            {/* Interactive maps frame load with direct parameters */}
            <iframe
              src={mapIframeUrl}
              className="w-full h-full border-0 min-h-[400px]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kios Pupuk Tani Makmur Google Maps"
            ></iframe>

            {/* Quick alert bar overlays inside maps container */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#263238]/90 text-white px-4.5 py-3 rounded-2xl border border-white/5 backdrop-blur-md flex items-center justify-between text-[11px]">
              <div className="flex items-center space-x-2.5">
                <AlertCircle className="h-4.5 w-4.5 text-[#FFB300] shrink-0" />
                <span>Alamat valid terverifikasi oleh layanan Google Maps Lokasi Tuban.</span>
              </div>
              <span className="hidden sm:inline text-neutral-400 font-bold">Rembun, Parengan</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
