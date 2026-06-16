/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  isSubsidy: boolean;
  category: "pupuk" | "pestisida" | "benih" | "alat";
  benefits: string[];
  usage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "produk" | "kegiatan" | "mitra";
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  cropType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CropFormula {
  id: string;
  name: string;
  ureaPerHa: number;
  npkPerHa: number;
  organikPerHa: number;
  sp36PerHa: number;
  tips: string;
}
