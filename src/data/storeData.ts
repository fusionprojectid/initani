/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, CropFormula, Review, FAQItem, GalleryItem } from "../types";

export const businessInfo = {
  name: "Kios Pupuk Tani Makmur",
  location: "Jl. Dharma Bhakti, Rembun, Kumpulrejo, Parengan, Tuban, East Java, Indonesia",
  phoneRaw: "+6281359839918",
  phoneFormatted: "+62 813-5983-9918",
  whatsAppLink: "https://wa.me/6281359839918",
  hours: "Senin - Sabtu, 09:00 - 17:00 WIB",
  legalSireg: "No. 502/KPL/TP/2024 (ID Pengecer Resmi Subsidi)",
  address: "Jl. Dharma Bhakti, RT.04/RW.01, Dusun Rembun, Desa Kumpulrejo, Kec. Parengan, Kabupaten Tuban, Jawa Timur 62326",
};

export const categories = [
  { id: "pupuk", name: "Pupuk Sawah & Kebun" },
  { id: "pestisida", name: "Proteksi Tanaman (Obat)" },
  { id: "benih", name: "Benih Unggulan" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Pupuk Urea Subsidi (Orisinil)",
    description: "Pupuk nitrogen murni kadar N 46% produksi resmi PT Pupuk Indonesia. Bekerja sangat cepat mempercepat fotosintesis dan membuat daun padi menjadi rimbun hijau.",
    price: "Rp 2.250 / Kg (HET Resmi)",
    unit: "Sak 50 Kg",
    image: "/pupuk-placeholder.png",
    isSubsidy: true,
    category: "pupuk",
    benefits: [
      "Mendorong pertumbuhan vegetatif akar, batang, dan tunas padi",
      "Kandungan Nitrogen tinggi 46% larut air instan tanpa ampas",
      "Memperbanyak jumlah anakan produktif per rumpun tanaman"
    ],
    usage: "Ditaburkan merata pada pagi hari saat kondisi parit sawah macak-macak pada usia 7-10 HST (Hari Setelah Tanam) dan susulan kedua usia 21-25 HST."
  },
  {
    id: "p2",
    name: "Pupuk NPK Phonska Subsidi 15-10-12",
    description: "Pupuk majemuk seimbang penugasan resmi subsidi mengandung Nitrogen, Fosfat, dan Kalium untuk memicu kerapatan malai padi dan mencegah bulir hampa.",
    price: "Rp 2.300 / Kg (HET Resmi)",
    unit: "Sak 50 Kg",
    image: "/pupuk-placeholder.png",
    isSubsidy: true,
    category: "pupuk",
    benefits: [
      "Menguatkan perakaran agar tanaman padi sawah tidak mudah rebah tertiup angin",
      "Meningkatkan rendemen gabah serta kualitas beras Tuban agar pulen bercahaya",
      "Kombinasi Sulfur (S) tinggi memperkuat kekebalan tanaman dari serangan penyakit daun"
    ],
    usage: "Diberikan secara ditabur dengan dosis 150-200 Kg per hektar sawah sebagai campuran pupuk Urea susulan fase anakan aktif."
  },
  {
    id: "p3",
    name: "Pupuk Organik Petroganik (Subsidi)",
    description: "Pupuk organik berbentuk granul produksi Petrokimia Gresik berdaya guna tinggi dalam memperbaiki struktur fisik, kimia, dan biologi tanah sawah yang jenuh.",
    price: "Rp 800 / Kg (HET Resmi)",
    unit: "Sak 40 Kg",
    image: "/pupuk-placeholder.png",
    isSubsidy: true,
    category: "pupuk",
    benefits: [
      "Meningkatkan kadar karbon organik (C-Organik) tanah hingga di atas 15%",
      "Meningkatkan daya ikat air tanah sawah selama kemarau panjang Tuban",
      "Memaksimalkan penyerapan pupuk kimia utama oleh sistem akar tanaman"
    ],
    usage: "Disebarkan secara merata di seluruh lahan sawah sebagai pupuk dasar saat pembajakan tanah sebelum penanaman bibit dimulai."
  },
  {
    id: "p4",
    name: "Amonium Sulfat ZA (Spesial Tanaman)",
    description: "Pupuk ZA non-subsidi andalan penyedia unsur hara Nitrogen 21% dan Sulfur (Belerang) 24% sangat jernih untuk meningkatkan kualitas rasa pada jagung dan melon.",
    price: "Rp 180.000 / Sak",
    unit: "Sak 50 Kg",
    image: "/pupuk-placeholder.png",
    isSubsidy: false,
    category: "pupuk",
    benefits: [
      "Meningkatkan aroma buah manis menyengat pada melon & semangka Parengan",
      "Mencegah kekuningan dini pada pucuk daun jagung hibrida akibat defisiensi belerang",
      "Membuat batang jagung berdiri kokoh dan berdiameter tebal berisi"
    ],
    usage: "Diberikan secara tabur melingkar berjarak 5 cm dari batang jagung pada fase pertumbuhan aktif umur 15-20 Hari Setelah Tanam."
  },
  {
    id: "p5",
    name: "Super Fosfat SP-36 (Fosfor Tunggal)",
    description: "Pupuk SP-36 non-subsidi padat berbentuk granul abu-abu kaya akan hara Fosfor (P2O5) larut air 36% yang berguna memicu percabangan akar baru.",
    price: "Rp 310.000 / Sak",
    unit: "Sak 50 Kg",
    image: "/pupuk-placeholder.png",
    isSubsidy: false,
    category: "pupuk",
    benefits: [
      "Mempercepat pembentukan bunga padi dan merangsang pematangan malai lebih dini",
      "Sangat krusial untuk mencegah kelayuan ujung daun akibat tanah sawah masam",
      "Mendorong pertumbuhan sistem perakaran tunggang yang dalam dan kuat"
    ],
    usage: "Diaplikasikan dengan ditaburkan secara kasar di atas permukaan tanah sawah saat persiapan penataan bedengan sebelum penggenangan air."
  },
  {
    id: "p6",
    name: "Kalium Klorida KCL Mahkota (Kanada)",
    description: "Pupuk KCL merah kristal impor berkualitas nomor satu bersumber dari Kanada dengan kadar Kalium (K2O) 60% guna memaksimalkan hasil bobot gabah.",
    price: "Rp 435.000 / Sak",
    unit: "Sak 50 Kg",
    image: "/pupuk-placeholder.png",
    isSubsidy: false,
    category: "pupuk",
    benefits: [
      "Mencegah kerontokan bunga padi sawah diterpa hembusan angin kencang Tuban",
      "Membuat bobot gabah per karung terasa padat berisi dan memperkecil persentase beras patah",
      "Meningkatkan kadar kemanisan buah melon tumpang sari secara instan"
    ],
    usage: "Ditaburkan pada awal pembungaan padi (fase generatif umur 40-45 HST) dicampur dengan sedikit pupuk Urea agar malai mekar serempak."
  },
  {
    id: "p7",
    name: "Insektisida Prevathon 50 SC (Pembasmi Ulat)",
    description: "Insektisida sistemik spektrum luas andalan untuk melumpuhkan ulat grayak (Spodoptera frugiperda), pengerek batang padi (sundep), dan lalat daun secara tuntas.",
    price: "Rp 125.000 / Botol",
    unit: "Botol 250 ML",
    image: "/pestisida-placeholder.png",
    isSubsidy: false,
    category: "pestisida",
    benefits: [
      "Memiliki daya rekat sistemik tinggi yang tahan luntur oleh terpaan air hujan deras",
      "Bekerja menghentikan nafsu makan ulat secara seketika dalam hitungan jam setelah aplikasi",
      "Sangat aman bagi serangga penyerbuk buah yang menguntungkan"
    ],
    usage: "Larutkan 15 ml Prevathon per tangki air 16 liter, semprotkan melingkar merata ke daun bendera atau sela pelepah tanaman yang terserang hama."
  },
  {
    id: "p8",
    name: "Herbisida Lindomin 865 SL (Hormonal)",
    description: "Herbisida sistemik purna tumbuh bersifat selektif penuntasan gulma berdaun lebar and teki-tekian di sela baris tanaman padi sawah.",
    price: "Rp 90.000 / Botol",
    unit: "Botol 400 ML",
    image: "/pestisida-placeholder.png",
    isSubsidy: false,
    category: "pestisida",
    benefits: [
      "Secara selektif hanya membasmi gulma pengganggu tanpa meracuni bibit padi sawah",
      "Gulma berkayu dan rumput teki membusuk hingga akarnya dalam 3-4 hari pasca aplikasi",
      "Dosis konsentrasi tinggi sehingga sangat irit penggunaan bahan baku"
    ],
    usage: "Gunakan takaran 1.5 - 2 tutup botol Lindomin untuk satu tangki sprayer penuh ukuran 16 liter, semprot embun saat pagi hari tanpa hembusan angin."
  },
  {
    id: "p9",
    name: "Fungisida Antracol 70 WP (Pelindung Jamur)",
    description: "Fungisida kontak multiguna berbentuk tepung kuning yang dapat disuspensikan untuk melindungi tanaman hortikultura dari penyakit bercak daun jamur.",
    price: "Rp 75.000 / Pack",
    unit: "Pack 500 Gram",
    image: "/pestisida-placeholder.png",
    isSubsidy: false,
    category: "pestisida",
    benefits: [
      "Disertai kandungan unsur hara Seng (Zinc) aktif penambah kesegaran sel daun",
      "Membentuk lapisan filter tipis yang menghambat spora jamur masuk menjangkau jaringan",
      "Sangat cocok dicampurkan langsung dengan pestisida jenis lain saat penyemprotan rutin"
    ],
    usage: "Campurkan 2-3 sendok makan Antracol ke dalam wadah air kecil hingga larut sempurna, lalu tuangkan ke tangki sprayer 16 liter berisi air bersih."
  },
  {
    id: "p10",
    name: "Benih Jagung Hibrida Pioneer P35 Banteng",
    description: "Benih jagung hibrida berskala komersial tinggi lulus sertifikasi ketat kementerian pertanian. Tahan kemarau keras, kebal karat daun, dan bonggol merah berbobot berat.",
    price: "Rp 145.000 / Kg",
    unit: "Kantong 1 Kg",
    image: "/benih-placeholder.png",
    isSubsidy: false,
    category: "benih",
    benefits: [
      "Menghasilkan tongkol ganda berukuran seragam dengan bulir merah padat penuh",
      "Memiliki daya tumbuh (germination rate) yang sangat tinggi melampaui batas 96%",
      "Karakter batang lentur anti roboh diterpa sapuan angin kencang wilayah perbukitan Tuban"
    ],
    usage: "Dibuat lubang tugal sedalaman 3-4 cm, masukkan 1 butir benih per lubang koli, lalu tutup tipis menggunakan kompos kering atau abu sekam giling."
  }
];

export const cropFormulas: CropFormula[] = [
  {
    id: "f1",
    name: "Padi Sawah (Pemupukan Berimbang SNI)",
    ureaPerHa: 200,
    npkPerHa: 300,
    organikPerHa: 500,
    sp36PerHa: 100,
    tips: "Terapkan metode 3 tahap pemupukan demi hasil optimal. Tahap I (7 HST) tebar Petroganik + SP-36 + sebagian kecil Urea. Tahap II (21 HST) tabur NPK Phonska + sebagian Urea. Tahap III (40 HST) tebarkan sisa Urea secara tipis merata demi memicu pertumbuhan malai padi membunting."
  },
  {
    id: "f2",
    name: "Jagung Hibrida (Performa Tongkol Ganda)",
    ureaPerHa: 250,
    npkPerHa: 200,
    organikPerHa: 400,
    sp36PerHa: 100,
    tips: "Tebarkan pupuk campuran NPK dan Urea di alur parit samping tanaman jagung berjarak 5 cm dari posisi batang pada kedalaman tanah 3-5 cm. Segera tutup kembali alur menggunakan tanah agar nitrogen pupuk tidak menguap terkena sengatan matahari Tuban."
  },
  {
    id: "f3",
    name: "Melon / Hortikultura Semangka (Tumpang Sari)",
    ureaPerHa: 120,
    npkPerHa: 450,
    organikPerHa: 1200,
    sp36PerHa: 200,
    tips: "Gunakan pengocoran larutan air hangat secara berkala melingkar di bawah mulsa hitam perak. Tingkatkan suplai Fosfor di awal pembungaan dan dominasikan kalium (KCL) di masa pembentukan jaring luar buah agar melon berasa manis renyah murni."
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Pak Supardi",
    role: "Ketua Kelompok Tani (Gapoktan) Rembun",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    content: "Sejak beralih memesan benih bersertifikat murni dan menebus pupuk bersubsidi secara teratur di Kios Tani Makmur Parengan, hasil penyerapan tonasi gabah sawah kami melonjak pesat dari semula 5.5 Ton menjadi 7.2 Ton per hektar. Transparansi data e-RDKK kias ini sangat jujur.",
    cropType: "Padi Sawah Inpari"
  },
  {
    id: "r2",
    name: "Ibu Siti Aminah",
    role: "Petani Jagung Desa Kumpulrejo",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    content: "Saya sangat tertolong oleh layanan program konsultasi herbisida gratis di kios ini. Staf mengajari saya dosis menyemprot rumput belulang membandel menggunakan Lindomin dicampur Antracol sehingga parit sawah jagung hibrida saya bersih mengkilap.",
    cropType: "Jagung Hibrida Pioneer"
  },
  {
    id: "r3",
    name: "Mas Joko Prasetyo",
    role: "Pekebun Melon Modern Tuban",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    content: "Meskipun menanam melon modern butuh ketelitian tinggi, stok pupuk kelas premium kalium KCL Mahkota dan NPK Mutiara non-subsidi di kios ini selalu kering bebas basah gumpal. Penyimpanan gudang Kios Tani Makmur jempolan nian!",
    cropType: "Hortikultura Melon"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "q1",
    question: "Bagaimana alur penebusan pupuk subsidi di Kios Tani Makmur?",
    answer: "Sesuai keputusan Kementerian Pertanian RI, penebusan pupuk bersubsidi (Urea dan NPK Phonska) hanya diberikan kepada para petani yang telah terdaftar aktif dalam sistem e-RDKK. Silakan datang langsung ke kios kami dengan menyerahkan KTP asli Anda untuk dicocokkan NIK-nya dengan data transaksi kementerian menggunakan sistem SIREG.",
    category: "Prosedur Subsidi"
  },
  {
    id: "q2",
    question: "Apakah bisa mengajukan pengiriman pupuk dalam jumlah besar langsung ke lokasi sawah?",
    answer: "Tentu bisa! Untuk pesanan pupuk non-subsidi, benih partai besar, maupun pestisida koli milik Gabungan Kelompok Tani (Gapoktan), kami menyediakan jasa pengiriman langsung menggunakan armada pikap sawah kami ke batas parit persawahan di wilayah Kecamatan Parengan, Singgahan, Soko, dan Rengel Tuban.",
    category: "Logistik Pengiriman"
  },
  {
    id: "q3",
    question: "Apakah Kios Tani Makmur terdaftar sebagai penyalur pupuk resmi?",
    answer: "Ya, Kios Tani Makmur adalah pengecer resmi pupuk bersubsidi yang terdaftar dengan Nomor Sertifikasi KPL: No. 502/KPL/TP/2024 di bawah naungan PT Pupuk Indonesia (Persero) dan Dinas Ketahanan Pangan, Pertanian, dan Perikanan Kabupaten Tuban.",
    category: "Legalitas Kios"
  },
  {
    id: "q4",
    question: "Bagaimana cara mengatasi hama sundep dan ulat grayak yang merata di daun benih jagung?",
    answer: "Kami menyarankan penggunaan obat pembasmi selektif bersistemik tinggi seperti Prevathon 50 SC atau pencampuran fungisida Antracol agar sel epitel tanaman pulih tegak berdiri. Anda dapat membawa sampel daun padi/jagung yang rusak ke kios fisik kami atau mengirimkan gambarnya via WhatsApp chat untuk didiagnosis gratis.",
    category: "Konsultasi Hama"
  },
  {
    id: "q5",
    question: "Apakah melayani transaksi pembelian bagi petani di luar wilayah Parengan?",
    answer: "Untuk produk non-subsidi (seperti NPK Mutiara, ZA, KCL, Benih hibrida Pioneer, Fungisida, dan herbisida), kami terbuka melayani dan mengirimkannya ke wilayah seluruh Indonesia. Namun, khusus untuk pupuk bersubsidi pemerintah, kami terikat regulasi wilayah kementerian yang membatasi hanya untuk NIK KTP kecamatan setempat.",
    category: "Cakupan Layanan"
  },
  {
    id: "q6",
    question: "Apa perbedaan pupuk urea bersubsidi dan non-subsidi dari segi kegunaan?",
    answer: "Secara fungsional dan kandungan hara nitrogennya, keduanya sama-sama bermutu tinggi yaitu 46%. Perbedaan utamanya terletak pada kuota tebus terbatas per musim tanam yang diawasi e-RDKK serta harga belinya. Pupuk non-subsidi dapat dibeli bebas tanpa batasan jumlah berapapun tergantung keperluan sediaan sawah Anda.",
    category: "Informasi Produk"
  },
  {
    id: "q7",
    question: "Saya adalah pemula di budidaya melon. Bagaimana cara memesan pupuk yang pas?",
    answer: "Anda dapat menggunakan alat Kalkulator Dosis Sawah di atas, atau datang ke kios kami untuk berkonsultasi. Kami siap meracik rekomendasi perimbangan pupuk makro (NPK) dan pupuk mikro penunjang buah melon agar terhindar dari penyakit busuk akar batang basah.",
    category: "Konsultasi Sawah"
  },
  {
    id: "q8",
    question: "Apakah tersedia harga grosir diskon untuk pemesanan Gapoktan?",
    answer: "Tentu saja! Kami memberikan penawaran harga grosir terbaik dengan persentase potongan harga menarik untuk pembelian herbisida, fungisida, dan pupuk non-subsidi ritel dalam ukuran karton/koli besar langsung dari Kios Tani Makmur Parengan Tuban.",
    category: "Harga & Diskon"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Gudang Utama Kios Tani Makmur",
    description: "Kondisi kebersihan dan keteraturan tumpukan karung Urea Subsidi dan NPK Phonska terjaga rapi di palet kayu kering anti lembab.",
    image: "/pupuk-placeholder.png",
    category: "produk"
  },
  {
    id: "g2",
    title: "Tampak Depan Kios Fisik Parengan",
    description: "Lokasi fisik Kios Pupuk Tani Makmur di Parengan Tuban, dilengkapi papan nama resmi dan kesiapan armada logistik.",
    image: "/hero-showcase.png",
    category: "kegiatan"
  },
  {
    id: "g3",
    title: "Area Pelayanan & Etalase Kios",
    description: "Ruang konsultasi agronomi langsung dan sediaan pestisida, obat, dan pupuk non-subsidi di counter kaca.",
    image: "/pestisida-placeholder.png",
    category: "produk"
  },
  {
    id: "g4",
    title: "Logo Identitas Resmi Tani Makmur",
    description: "Brand mark resmi Kios Pupuk Tani Makmur Parengan Kabupaten Tuban - Jawa Timur.",
    image: "/logo.png",
    category: "mitra"
  }
];
