# Yuta Store - Catalog Pricelist Aplikasi Premium

Website catalog dan pricelist interaktif untuk penjualan akun/aplikasi premium murah, legal, cepat, dan bergaransi penuh. Didesain dengan antarmuka gelap (*dark mode*) premium, efek *glassmorphism*, pencarian instan, dan integrasi checkout langsung ke WhatsApp Admin.

---

## ⚡ Fitur Utama

- **Pencarian Instan**: Cari aplikasi premium favorit secara cepat melalui bilah pencarian *real-time*.
- **Filter Kategori**: Pengelompokan kategori yang dinamis (Semua, Streaming, Editing, AI & Produktivitas, VPN & Utilitas).
- **Glassmorphic Neon Brand Glow**: Kartu produk interaktif dengan efek bayangan glow neon yang otomatis menyesuaikan warna khas brand aplikasi saat di-hover.
- **Pills Selection**: Pilihan varian dan durasi paket berbentuk pil (*pills selector*) yang modern dan nyaman digunakan.
- **Integrated WA Checkout**: Redirect langsung ke WhatsApp Admin lengkap dengan isi chat yang terformat rapi sesuai paket yang dipilih secara otomatis.
- **Visual Order Steps**: Panduan alur pemesanan berbasis grid timeline bernomor (01 s.d. 04) dengan efek hover premium.
- **High-Fidelity Payment Bar**: Floating footer yang menampilkan informasi kontak WhatsApp dan visual lencana pembayaran digital populer (ShopeePay, GoPay, OVO, DANA, QRIS).

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, Vite
- **Styling**: TailwindCSS v4
- **Icons**: Lucide React

---

## 🚀 Memulai (Local Development)

Ikuti langkah-langkah di bawah ini untuk menjalankan project secara lokal di komputer Anda:

### 1. Prasyarat
Pastikan komputer Anda sudah terinstall **Node.js** (rekomendasi versi 18 ke atas).

### 2. Instalasi
Clone repository ini, lalu masuk ke folder project dan install dependensi:
```bash
npm install
```

### 3. Jalankan Development Server
Jalankan perintah berikut untuk mengaktifkan local dev server:
```bash
npm run dev
```
Setelah berjalan, buka browser dan akses alamat `http://localhost:3000` (atau port default yang tertera di terminal).

### 4. Build untuk Produksi
Untuk melakukan build versi produksi yang teroptimasi, jalankan:
```bash
npm run build
```
Hasil build akan berada di dalam folder `dist/` dan siap dideploy ke layanan hosting seperti Vercel, Netlify, atau GitHub Pages.

---

## 📁 Struktur Folder Utama

```text
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Hero Header, tagline, dan trust badges
│   │   ├── ProductCard.tsx  # Kartu produk, varian harga, & checkout WA
│   │   └── FooterCTA.tsx    # Floating sticky footer & lencana pembayaran
│   ├── App.tsx              # Logic pencarian, filter kategori, dan layout grid
│   ├── data.ts              # Database katalog produk aplikasi premium
│   ├── types.ts             # Interface data TypeScript
│   ├── index.css            # Custom utility class dan keyframe animasi
│   └── main.tsx             # Entrypoint React
├── index.html               # Entry HTML dengan optimasi SEO meta-tags
├── vite.config.ts           # Konfigurasi plugin Vite & Tailwind v4
└── package.json             # Manajer dependensi npm
```

