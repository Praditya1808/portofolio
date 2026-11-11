# Foto Karya (Sampul & Dokumentasi)

Letakkan foto sampul buku atau foto dokumentasi proyek di folder ini.

## Aturan penamaan

- Huruf kecil, tanpa spasi, gunakan tanda hubung.
- Tambahkan nomor urut di akhir: `-1.jpg`, `-2.jpg`, `-3.jpg`, dst.
- Format JPG/PNG/WebP.
- Rasio ideal **2:3 (portrait)**, sisi terpanjang maksimal ±1600 px agar ringan.

Contoh:

```
assets/images/books/
├── romansa-opium-1.jpg
├── romansa-opium-2.jpg
├── romansa-opium-3.jpg
├── cross-the-line-1.jpg
├── cross-the-line-2.jpg
└── lima-langkah-1.jpg
```

## Cara menghubungkan ke website

Buka `assets/js/main.js`, cari judul bukunya, lalu isi array `images`:

```js
{
  id: 1,
  title: "Romansa Opium",
  // ...
  images: [
    "assets/images/books/romansa-opium-1.jpg",
    "assets/images/books/romansa-opium-2.jpg",
    "assets/images/books/romansa-opium-3.jpg"
  ]
}
```

- **1 foto** → tampil sebagai sampul, tanpa tombol galeri.
- **2–3 foto** → foto pertama jadi sampul kartu, dan di dalam modal muncul
  panah, thumbnail, counter, serta dukungan geser (swipe) dan tombol panah keyboard.
- **Foto landscape / spread** → bingkai galeri otomatis menyesuaikan rasio gambar,
  jadi spread tidak terpotong dan tidak menyisakan ruang kosong.
- **Kosong (`images: []`)** → kartu memakai desain gradien + emoji yang sekarang,
  jadi website tetap rapi selama foto belum tersedia.

> Tips: jadikan foto **pertama** sebagai sampul portrait 2:3 agar kartu terlihat rapi.
> Foto kedua/ketiga boleh berupa dokumentasi (landscape); di dalam modal gambar
> ditampilkan utuh tanpa terpotong (`object-contain`).

Jika satu buku punya spread landscape dan ingin modalnya lebih lebar, tambahkan
`wideGallery: true` pada data buku di `assets/js/main.js`:

```js
{
  id: 7,
  title: "Silver Lining",
  // ...
  wideGallery: true,
  images: [
    "assets/images/books/silver-lining-1.jpg",
    "assets/images/books/silver-lining-2.jpg"
  ]
}
```
