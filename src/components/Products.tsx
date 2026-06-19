/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { products, categories, businessInfo } from "../data/storeData";
import { Product, CartItem } from "../types";
import { 
  ShoppingBag, 
  Search, 
  Check, 
  PhoneCall, 
  Eye, 
  X, 
  AlertTriangle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePreviewProduct, setActivePreviewProduct] = useState<Product | null>(null);
  
  // Shopping cart compiler local state representation
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter combined lists
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Repeat the array so we have at least 8 elements, then double it for the seamless marquee
  const repeatedProducts = useMemo(() => {
    if (filteredProducts.length === 0) return [];
    let list = [...filteredProducts];
    while (list.length < 8) {
      list = [...list, ...filteredProducts];
    }
    return list;
  }, [filteredProducts]);

  // Cart helper actions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.product.id === productId) {
          const targetQty = item.quantity + delta;
          return { ...item, quantity: targetQty < 1 ? 1 : targetQty };
        }
        return item;
      }).filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  // Compile WhatsApp checkout anchor text
  const getWhatsAppCartLink = () => {
    if (cart.length === 0) return "#";
    
    let text = `Halo Kios Pupuk Tani Makmur Parengan,\nSaya berminat memesan produk berikut:\n\n`;
    
    let totalSubsidyCount = 0;
    cart.forEach((item, index) => {
      const sub = item.product.isSubsidy ? " (Subsidi e-RDKK)" : "";
      text += `${index + 1}. *${item.product.name}* x${item.quantity} - (${item.product.price})${sub}\n`;
      if (item.product.isSubsidy) totalSubsidyCount++;
    });

    text += `\n*Metode pengambilan:* Ambil di Kios / Kirim kurir Tuban\n`;
    text += `Nama Pembeli: ______________\n`;
    text += `Desa Kelurahan: ______________\n`;
    
    if (totalSubsidyCount > 0) {
      text += `\n🚨 *Catatan Subsidi:* Saya membawa KTP asli terdaftar di e-RDKK saat menebus.`;
    }

    text += `\nMohon dicek ketersediaan stoknya ya Admin Kios. Matur suwun!`;
    return `${businessInfo.whatsAppLink}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-24 bg-[#F8FAF5] dark:bg-[#0F172A] scroll-mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Static Banner) */}
        <div className="flex flex-col gap-6 mb-12">
          
          {/* Static Styled Banner */}
          <div className="relative w-full py-5 bg-neutral-50/50 dark:bg-slate-900/30 backdrop-blur-sm rounded-2xl px-6 sm:px-8">
            <div className="flex flex-col gap-3">
              <span className="self-start text-[#11341C] bg-[#11341C]/8 border border-[#11341C]/15 px-5 py-2 rounded-full text-[10.5px] font-black uppercase tracking-widest font-heading dark:text-[#8FC14E] dark:bg-[#8FC14E]/8 dark:border-[#8FC14E]/15 shrink-0">
                Gudang Sarana Produksi Tani
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#263238] dark:text-[#F8FAFC] tracking-tight font-heading leading-tight">
                Eceran Resmi Pupuk & Benih
              </h2>
            </div>
          </div>

          {/* Subtext and Search Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-xs sm:text-sm text-neutral-550 dark:text-[#CBD5E1] font-semibold max-w-xl">
              Harga padi sawah, pupuk bersubsidi, pembasmi ulat palawija tertera jujur sesuai Surat Keputusan Bupati dan kementerian pertanian RI.
            </p>
            
            {/* Combined Search bar */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                <Search className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                placeholder="Cari bibit, urea, fungsida..."
                className="w-full bg-white dark:bg-[#1E293B] border border-neutral-200 dark:border-slate-800 focus:border-[#11341C] dark:focus:border-[#8FC14E] focus:ring-1 focus:ring-[#11341C] dark:focus:ring-[#8FC14E] rounded-2xl py-3.5 pl-11 pr-5 text-xs font-semibold focus:outline-none shadow-sm placeholder:text-neutral-400 dark:placeholder:text-slate-500 text-[#263238] dark:text-[#F8FAFC]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

        </div>

        {/* Category sliding badges selectors */}
        <div className="flex items-center space-x-3.5 overflow-x-auto pb-4 scrollbar-hide mb-10 border-b border-neutral-100 dark:border-slate-800">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5.5 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider block shrink-0 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#11341C] dark:bg-[#8FC14E] text-white dark:text-[#0F172A] shadow-md shadow-[#11341C]/10"
                : "bg-white dark:bg-[#1E293B] border border-neutral-200 dark:border-slate-800 text-[#263238] dark:text-[#F8FAFC] hover:bg-neutral-50 dark:hover:bg-slate-800"
            }`}
          >
            Semua Produk ({products.length})
          </button>
          
          {categories.map((cat) => {
            const count = products.filter(p => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5.5 py-3 rounded-xl text-[10.5px] font-black uppercase tracking-wider block shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#11341C] dark:bg-[#8FC14E] text-white dark:text-[#0F172A] shadow-md shadow-[#11341C]/10"
                    : "bg-white dark:bg-[#1E293B] border border-neutral-200 dark:border-slate-800 text-[#263238] dark:text-[#F8FAFC] hover:bg-neutral-50 dark:hover:bg-slate-800"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Slideshow walking/running layout */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white dark:bg-[#1E293B] border border-neutral-150 dark:border-slate-800 py-16 px-6 rounded-3xl text-center space-y-4">
            <div className="inline-flex bg-amber-50 dark:bg-amber-955 rounded-2xl p-4 text-amber-500 dark:text-amber-400">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-wide text-[#263238] dark:text-[#F8FAFC]">Barang Tidak Ditemukan</h3>
            <p className="text-xs text-neutral-500 dark:text-slate-400 max-w-sm mx-auto">
              Silakan coba perkecil kata pencarian Anda, ganti tab kategori, atau hubungi langsung CS WhatsApp untuk konfirmasi stok gudang manual.
            </p>
          </div>
        ) : (
          <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            {/* Left and Right Fade Overlays for Premium Look */}
            <div className="absolute top-0 left-0 h-full w-8 sm:w-20 bg-gradient-to-r from-[#F8FAF5] to-transparent dark:from-[#0F172A] z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-8 sm:w-20 bg-gradient-to-l from-[#F8FAF5] to-transparent dark:from-[#0F172A] z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
              {/* Group 1 */}
              <div className="flex pr-6 gap-6 shrink-0">
                {repeatedProducts.map((p, idx) => (
                  <motion.div
                    key={`${p.id}-g1-${idx}`}
                    layout
                    className="w-[280px] sm:w-[325px] shrink-0 bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden border border-neutral-200/60 dark:border-white/5 shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Visual Image area */}
                    <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-slate-900 border-b border-neutral-100 dark:border-slate-800">
                      <img
                        src={p.image}
                        alt={
                          p.name.includes("Urea") 
                            ? `${p.name} - Pupuk Urea Tuban, Kios Pupuk Tani Makmur Parengan Tuban`
                            : p.name.includes("NPK") || p.name.includes("Phonska")
                            ? `${p.name} - Pupuk NPK Parengan, Toko pupuk Parengan Tuban`
                            : `${p.name} - Supplier pupuk Tuban, Sarana pertanian Parengan`
                        }
                        className="w-full h-full object-cover transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                        style={{ willChange: "transform" }}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Subsidi Over Badge overlay */}
                      <span className={`absolute top-4.5 left-4.5 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm ${
                        p.isSubsidy 
                          ? "bg-amber-500 text-white" 
                          : "bg-[#11341C] dark:bg-[#8FC14E] text-white dark:text-[#0F172A]"
                      }`}>
                        {p.isSubsidy ? "SUBSIDI NEGARA" : "PREMIUM BEBAS"}
                      </span>
                    </div>

                    {/* Content description wrapper */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-neutral-400 dark:text-slate-400 font-bold uppercase tracking-wider block">
                          {p.category.toUpperCase()} • {p.unit}
                        </span>
                        <h3 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] group-hover:text-[#11341C] dark:group-hover:text-[#8FC14E] transition leading-none">
                          {p.name}
                        </h3>
                        <p className="text-[11.5px] text-neutral-500 dark:text-[#CBD5E1] font-medium leading-relaxed font-sans line-clamp-2">
                          {p.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-slate-800">
                        {/* Price tag block */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-neutral-405 dark:text-slate-400 uppercase tracking-wider">HET/Harga</span>
                          <span className="font-heading font-black text-sm text-[#11341C] dark:text-[#8FC14E]">{p.price}</span>
                        </div>

                        {/* Quick interactive buttons */}
                        <div className="grid grid-cols-5 gap-2.5">
                          <button
                            onClick={() => setActivePreviewProduct(p)}
                            className="col-span-2 bg-neutral-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 py-3 rounded-xl transition flex justify-center items-center text-neutral-500 dark:text-slate-450 hover:text-neutral-750 cursor-pointer"
                            title="Detail Manfaat & Penggunaan"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          
                          <button
                            onClick={() => addToCart(p)}
                            className="col-span-3 bg-[#11341C] hover:bg-[#1B5E20] dark:bg-[#8FC14E] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition flex items-center justify-center space-x-1 shadow-md shadow-[#11341C]/10 dark:shadow-none cursor-pointer"
                          >
                            <ShoppingBag className="h-3.5 w-3.5" />
                            <span>Pesan</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Group 2 */}
              <div className="flex pr-6 gap-6 shrink-0">
                {repeatedProducts.map((p, idx) => (
                  <motion.div
                    key={`${p.id}-g2-${idx}`}
                    layout
                    className="w-[280px] sm:w-[325px] shrink-0 bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden border border-neutral-200/60 dark:border-white/5 shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Visual Image area */}
                    <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-slate-900 border-b border-neutral-100 dark:border-slate-800">
                      <img
                        src={p.image}
                        alt={
                          p.name.includes("Urea") 
                            ? `${p.name} - Pupuk Urea Tuban, Kios Pupuk Tani Makmur Parengan Tuban`
                            : p.name.includes("NPK") || p.name.includes("Phonska")
                            ? `${p.name} - Pupuk NPK Parengan, Toko pupuk Parengan Tuban`
                            : `${p.name} - Supplier pupuk Tuban, Sarana pertanian Parengan`
                        }
                        className="w-full h-full object-cover transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-108"
                        style={{ willChange: "transform" }}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Subsidi Over Badge overlay */}
                      <span className={`absolute top-4.5 left-4.5 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm ${
                        p.isSubsidy 
                          ? "bg-amber-500 text-white" 
                          : "bg-[#11341C] dark:bg-[#8FC14E] text-white dark:text-[#0F172A]"
                      }`}>
                        {p.isSubsidy ? "SUBSIDI NEGARA" : "PREMIUM BEBAS"}
                      </span>
                    </div>

                    {/* Content description wrapper */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-neutral-400 dark:text-slate-400 font-bold uppercase tracking-wider block">
                          {p.category.toUpperCase()} • {p.unit}
                        </span>
                        <h3 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] group-hover:text-[#11341C] dark:group-hover:text-[#8FC14E] transition leading-none">
                          {p.name}
                        </h3>
                        <p className="text-[11.5px] text-neutral-500 dark:text-[#CBD5E1] font-medium leading-relaxed font-sans line-clamp-2">
                          {p.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-slate-800">
                        {/* Price tag block */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-neutral-405 dark:text-slate-400 uppercase tracking-wider">HET/Harga</span>
                          <span className="font-heading font-black text-sm text-[#11341C] dark:text-[#8FC14E]">{p.price}</span>
                        </div>

                        {/* Quick interactive buttons */}
                        <div className="grid grid-cols-5 gap-2.5">
                          <button
                            onClick={() => setActivePreviewProduct(p)}
                            className="col-span-2 bg-neutral-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 py-3 rounded-xl transition flex justify-center items-center text-neutral-500 dark:text-slate-450 hover:text-neutral-750 cursor-pointer"
                            title="Detail Manfaat & Penggunaan"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          
                          <button
                            onClick={() => addToCart(p)}
                            className="col-span-3 bg-[#11341C] hover:bg-[#1B5E20] dark:bg-[#8FC14E] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition flex items-center justify-center space-x-1 shadow-md shadow-[#11341C]/10 dark:shadow-none cursor-pointer"
                          >
                            <ShoppingBag className="h-3.5 w-3.5" />
                            <span>Pesan</span>
                          </button>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* DETAILED DRAWERS MODAL PREVIEW SCREEN */}
      <AnimatePresence>
        {activePreviewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop cover overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePreviewProduct(null)}
              className="absolute inset-0 bg-[#263238]/60 backdrop-blur-sm"
            />

            {/* Modal Body Card Wrapper */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#1E293B] rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/5 py-6 px-7.5 max-h-[85vh] overflow-y-auto"
            >
              
              {/* Corner close indicator */}
              <button 
                onClick={() => setActivePreviewProduct(null)}
                className="absolute top-5 right-5 bg-neutral-100 dark:bg-slate-800 hover:bg-neutral-150 dark:hover:bg-slate-700 p-2 rounded-full transition text-[#263238] dark:text-[#F8FAFC] cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="space-y-6 pt-3">
                <div className="flex gap-4.5">
                  <div className="h-20 w-20 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-slate-900 shrink-0">
                    <img 
                      src={activePreviewProduct.image} 
                      alt="" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#11341C] dark:text-[#8FC14E] bg-[#11341C]/8 dark:bg-[#8FC14E]/10 px-2.5 py-1 rounded-md font-black uppercase tracking-widest font-heading mb-1 block">
                      {activePreviewProduct.category}
                    </span>
                    <h3 className="font-heading font-black text-base text-[#263238] dark:text-[#F8FAFC] block">{activePreviewProduct.name}</h3>
                    <p className="text-xs text-neutral-400 dark:text-slate-400 font-bold">{activePreviewProduct.unit} • {activePreviewProduct.price}</p>
                  </div>
                </div>

                {/* Descriptions info */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black text-neutral-400 dark:text-slate-450 uppercase tracking-wider">Ringkasan Produk</h4>
                  <p className="text-xs text-neutral-600 dark:text-[#CBD5E1] leading-relaxed font-sans">{activePreviewProduct.description}</p>
                </div>

                {/* Bullet benefits list */}
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-black text-neutral-400 dark:text-slate-450 uppercase tracking-wider">Manfaat Utama Tanaman</h4>
                  <ul className="space-y-2">
                    {activePreviewProduct.benefits.map((b, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-neutral-750 dark:text-[#CBD5E1] font-medium">
                        <Check className="h-4 w-4 text-[#11341C] dark:text-[#8FC14E] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical guide application dosage */}
                <div className="space-y-2 bg-[#11341C]/5 dark:bg-[#8FC14E]/8 p-4.5 rounded-2xl border border-[#11341C]/10 dark:border-[#8FC14E]/15">
                  <h4 className="text-[10.5px] font-black text-[#11341C] dark:text-[#8FC14E] uppercase tracking-wider">Saran Dosis Pengaplikasian</h4>
                  <p className="text-[11.5px] text-neutral-650 dark:text-[#CBD5E1] font-medium leading-relaxed font-sans">{activePreviewProduct.usage}</p>
                </div>

                {/* Bottom Order Link */}
                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      addToCart(activePreviewProduct);
                      setActivePreviewProduct(null);
                    }}
                    className="flex-1 bg-[#11341C] hover:bg-[#1B5E20] dark:bg-[#8FC14E] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3.5 rounded-xl text-xs font-black uppercase tracking-widest text-center shadow-lg dark:shadow-none transition cursor-pointer"
                  >
                    Tambahkan ke Pesanan
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FLYING CART COMPILER WRAPPER SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && cart.length > 0 && (
          <div className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-white dark:bg-[#1E293B] border-l border-neutral-150 dark:border-slate-800 shadow-2xl flex flex-col justify-between py-6 px-7.5 animate-fadeIn">
            
            {/* Drawer Area Header */}
            <div>
              <div className="flex justify-between items-center pb-4.5 border-b border-neutral-100 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5 text-[#11341C] dark:text-[#8FC14E]" />
                  <h3 className="font-heading font-black text-sm text-[#263238] dark:text-[#F8FAFC] uppercase tracking-wider">Daftar Minat Belanja</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-neutral-100 dark:bg-slate-800 hover:bg-neutral-150 dark:hover:bg-slate-700 p-2 rounded-full text-[#263238] dark:text-[#F8FAFC]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Items scroll */}
              <div className="mt-6 space-y-4.5 overflow-y-auto max-h-[50vh] pr-1.5 scrollbar-thin">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center bg-neutral-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-neutral-100 dark:border-slate-800">
                    <div className="flex gap-3">
                      <div className="h-12 w-12 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shrink-0">
                        <img src={item.product.image} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xs text-[#263238] dark:text-[#F8FAFC] leading-none mb-1 line-clamp-1">{item.product.name}</h4>
                        <span className="text-[10px] text-neutral-400 dark:text-slate-400 font-bold block">{item.product.price}</span>
                      </div>
                    </div>

                    {/* Quantity Selector buttons */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateCartQty(item.product.id, -1)}
                        className="bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 text-[#263238] dark:text-[#F8FAFC] h-7 w-7 rounded-lg flex items-center justify-center font-bold text-xs transition hover:bg-neutral-100 dark:hover:bg-slate-700"
                      >
                        -
                      </button>
                      <span className="text-xs font-black text-[#263238] dark:text-[#F8FAFC] min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQty(item.product.id, 1)}
                        className="bg-white dark:bg-slate-800 border border-neutral-200 dark:border-slate-700 text-[#263238] dark:text-[#F8FAFC] h-7 w-7 rounded-lg flex items-center justify-center font-bold text-xs transition hover:bg-neutral-100 dark:hover:bg-slate-700"
                      >
                        +
                      </button>
                      
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 p-1.5 rounded-lg transition ml-2"
                        title="Batal pesan"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total checkout details bottom */}
            <div className="pt-6 border-t border-neutral-100 dark:border-slate-800 space-y-4">
              <div className="bg-neutral-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-neutral-100 dark:border-slate-800">
                <span className="text-[9px] font-black text-neutral-400 dark:text-slate-400 uppercase tracking-widest block mb-1">Informasi Pengiriman</span>
                <p className="text-[11px] text-neutral-500 dark:text-slate-400 leading-relaxed font-sans">
                  Total barang: <strong className="text-[#263238] dark:text-[#8FC14E] font-black">{cart.reduce((acu, i) => acu + i.quantity, 0)} Pcs</strong>.<br />
                  Data belanja akan otomatis dieksfiliasi ke dalam draf pesan WhatsApp admin kios untuk pengecekan fisik di gudang.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="bg-neutral-50 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/20 text-neutral-500 dark:text-slate-450 hover:text-red-655 border border-neutral-200 dark:border-slate-750 py-3.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-wider transition cursor-pointer"
                >
                  Bersihkan
                </button>
                
                <a
                  href={getWhatsAppCartLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#11341C]/95 hover:bg-[#205e24] dark:bg-[#8FC14E] dark:hover:bg-[#22C55E] text-white dark:text-[#0F172A] py-3.5 px-4 rounded-xl text-[10px] font-black uppercase tracking-wider text-center flex items-center justify-center space-x-2 shadow-lg dark:shadow-none transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Kirim Pesan Ke Kios</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
