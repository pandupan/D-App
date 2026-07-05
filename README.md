# 📱 D-App — Decentralized Application Platform

Platform **Decentralized Application (D-App)** berbasis web yang mengintegrasikan berbagai layanan terdesentralisasi. Proyek ini mengeksplorasi konsep blockchain dan Web3 dalam antarmuka yang modern.

## ✨ Fitur

- **🏕️ Campaigns** (`/campaigns`) — Jelajahi dan ikuti kampanye crowdfunding terdesentralisasi
- **🤝 Donate** (`/donate`) — Donasi langsung ke campaign yang didukung
- **📋 Details** (`/details`) — Informasi detail tentang setiap campaign
- **🏪 Merch** (`/merch`) — Toko merchandise berbasis blockchain
- **📦 Product** (`/product`) — Katalog produk D-App
- **👥 Teams** (`/teams`) — Profil tim pengembang di balik D-App
- **⚙️ Works** (`/works`) — Portfolio cara kerja platform

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Library** | shadcn/ui (Radix UI) |
| **Icons** | Lucide React, React Icons |
| **Animation** | Framer Motion |

## 📁 Struktur Proyek

```
├── app/
│   ├── page.tsx              # Homepage / landing
│   ├── campaigns/            # Campaign listing
│   ├── donate/               # Donation page
│   ├── details/              # Detail campaign
│   ├── merch/                # Merch store
│   ├── product/              # Product catalog
│   ├── teams/                # Team profiles
│   └── works/                # How it works
├── components/
│   ├── layouts/
│   │   └── Footer.tsx
│   └── core/buttons/
│       ├── ButtonOutline.tsx
│       ├── ButtonOutlineFull.tsx
│       ├── ButtonPrimary.tsx
│       └── ButtonPrimaryfull.tsx
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
