# Kios Pupuk Tani Makmur

Pritinjau Resmi: **Kios Pupuk Tani Makmur | Supplier Pupuk dan Sarana Pertanian Parengan Tuban**

Aplikasi web modern satu-halaman (SPA) yang dibangun menggunakan **React 19**, **Vite**, dan **Tailwind CSS 4**. Aplikasi ini dirancang khusus untuk Kios Pupuk Tani Makmur, supplier resmi pupuk dan sarana pertanian di Parengan, Tuban. Memiliki desain yang elegan dengan integrasi tema terang/gelap (Light & Dark Mode) serta kalkulator pertanian interaktif.

---

## 🎨 Fitur Utama

- **Premium Branding**: Ekstraksi dan konsistensi warna brand logo (Primary Green `#0D3B20` dan Secondary Green `#70A83B`).
- **Kalkulator Pertanian**: Kalkulator dosis pupuk (Urea, NPK, Organik) interaktif untuk mengoptimalkan penggunaan lahan petani.
- **Skema Tema Fleksibel**: Dukungan mode Terang (Light Mode), Gelap (Dark Mode), dan Sistem yang terintegrasi halus tanpa kedipan.
- **Peta Lokasi Interaktif**: Lokasi presisi kios di Parengan, Tuban dengan rute Google Maps sekali klik.
- **Daftar Produk Unggul**: Katalog interaktif pupuk bersubsidi, non-subsidi, pestisida, dan benih bersertifikat.
- **SEO & Responsif Tingkat Tinggi**: Dioptimalkan untuk perangkat mobile dan desktop, lengkap dengan tag Open Graph, skema JSON-LD, serta metadata lengkap.

---

## 📂 Struktur Proyek

```text
kios-pupuk-tani-makmur/
├── components/                  # Salinan cadangan komponen tema untuk referensi eksternal
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── public/                      # Aset Statis untuk favicon, logo, manifest, dan sitemap
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── logo.png                 # Logo identitas resmi
│   ├── site.webmanifest         # Manifest PWA
│   └── sitemap.xml
├── src/                         # Sumber Kode Utama React
│   ├── components/              # Komponen Kompartemen Website
│   │   ├── About.tsx
│   │   ├── AgriCalculator.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FAQ.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── LocationMap.tsx
│   │   ├── Products.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── theme-provider.tsx  # Konteks Provider Tema Global
│   │   └── theme-toggle.tsx    # Tombol Kontrol Tema Terang/Gelap
│   ├── data/
│   │   └── storeData.ts         # Sumber Data Toko, Jam Kerja, FAQ, dan Katalis Galeri
│   ├── App.tsx                  # Entri Layout Halaman Utama
│   ├── index.css                # Konfigurasi Tailwind CSS 4 & Custom Keyframes/Animations
│   ├── main.tsx                 # Entri Rendering React DOM
│   └── types.ts                 # Definisi Tipe Data TypeScript
├── index.html                   # Struktur HTML Utama & Skema SEO JSON-LD
├── tsconfig.json                # Konfigurasi TypeScript
├── vite.config.ts               # Integrasi Build Engine Vite & Tailwind CSS
├── package.json                 # Manajemen Dependensi Node.js
└── README.md                    # Dokumentasi Panduan Ini
```

---

## 🛠️ Langkah Instalasi Lokal

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js LTS** (versi 18 ke atas) dan paket manager **npm** di komputer Anda.

### 2. Mengunduh dan Ekstrak Proyek
Ekstrak isi berkas ZIP proyek ini ke folder lokal di komputer Anda.

### 3. Instal Dependensi
Buka terminal/command prompt di direktori proyek tersebut, lalu jalankan perintah berikut untuk menginstal seluruh pustaka yang diperlukan:
```bash
npm install
```

### 4. Menjalankan Server Pengembangan (Dev Mode)
Jalankan dev server secara lokal dengan perintah:
```bash
npm run dev
```
Setelah berhasil berjalan, buka browser Anda di alamat: `http://localhost:3000` atau `http://localhost:5173`.

---

## 🚀 Langkah Build Produksi

Untuk melakukan kompilasi proyek menjadi berkas HTML/JS/CSS statis yang siap digunakan di server hosting:

```bash
npm run build
```
Hasil build akhir akan otomatis tersimpan dalam folder `/dist` di root proyek. Berkas statis di dalam folder `/dist` ini dapat langsung diunggah ke penyedia hosting web statis apa pun.

---

## ☁️ Panduan Deployment ke Vercel

Dapat dideploy dengan sangat mudah ke **Vercel** menggunakan Github Link atau CLI:

### Opsi A: Melalui Dashboard Vercel (Rekomendasi)
1. Push kode proyek yang diekstrak ini ke repositori **GitHub**, **GitLab**, atau **Bitbucket** Anda.
2. Masuk ke akun [Vercel](https://vercel.com).
3. Klik tombol **"Add New"** > **"Project"**.
4. Impor repositori tempat Anda menyimpan proyek ini.
5. Vercel akan otomatis mengenali proyek ini sebagai proyek **Vite** dan menyesuaikan pengaturan default berikut:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **"Deploy"**. Proyek Anda akan aktif dalam kurang dari satu menit!

### Opsi B: Menggunakan Vercel CLI
Jika Anda ingin meluncurkan langsung lewat terminal komputer Anda:
1. Instal Vercel secara global:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah deploy di root folder proyek:
   ```bash
   vercel
   ```
3. Ikuti petunjuk di terminal untuk melakukan autentikasi akun & membuat proyek baru.
4. Lakukan deploy untuk produksi:
   ```bash
   vercel --prod
   ```

---

## 🎨 Spesifikasi Branding Warna & Aset

- **Primary Green**: `#0D3B20` (Hijau gelap premium, diambil dari teks "MAKMUR" pada logo)
- **Secondary Green**: `#70A83B` (Hijau muda segar, diambil dari daun utama dan teks "TANI" pada logo)
- **Latar Belakang**: `#F8FAF5` (Off-white bernuansa alami yang lembut di mata)

Aset-aset favicon dan pwa manifest dapat ditemukan lengkap di dalam folder `public/`.
Semua icon modern bersumber dari pustaka resmi `lucide-react`.

---
*Kios Pupuk Tani Makmur Parengan Tuban - Menjamin Keaslian Pupuk & Mengoptimalkan Hasil Panen Petani Nusantara.*
