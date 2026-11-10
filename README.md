# Portofolio Editor — El Syifa Thea Salsabila

Website portofolio interaktif dan profil profesional untuk **El Syifa Thea Salsabila, S.Pd.** (Editor Naskah & Spesialis Penerbitan Buku).

---

## 🎨 Fitur Utama
- **Estetika Literer & Artistik**: Dirancang menyerupai publikasi sastra modern (*warm paper background*, tipografi *Cormorant Garamond* & *Plus Jakarta Sans*).
- **100% Ringan & Cepat**: Menggunakan HTML5 murni, Tailwind CSS, dan Vanilla JavaScript tanpa dependensi *node_modules* yang berat.
- **Efek Interaktif 3D Buku**: Efek perspektif tiga dimensi pada sampul buku dengan bayangan realistis.
- **Sentuhan Editor (Sebelum & Sesudah)**: Fitur interaktif untuk membandingkan draf mentah dengan hasil suntingan editorial.
- **Katalog Karya**: Showcase judul buku komersial (*Romansa Opium*, *Cross The Line*, *5 Langkah*) lengkap dengan pop-up modal detail peran editorial.
- **Responsif**: Tampilan rapi di layar smartphone, tablet, maupun desktop.

---

## 🚀 Cara Menjalankan di Komputer Lokal

### Opsi 1: Tanpa Terminal (Paling Mudah)
Klik dua kali file `index.html` langsung dari Finder/File Explorer untuk membukanya di browser apa pun.

### Opsi 2: Menggunakan Server Lokal Python
```bash
# Jalankan di folder website:
python3 -m http.server 3000
```
Buka browser dan akses alamat: `http://localhost:3000`

---

## 📸 Cara Menyesuaikan Foto Profil & Sampul Buku

1. **Mengganti Foto Profil**:
   - Siapkan foto profil Anda (format JPG/PNG).
   - Simpan dengan nama `profile.jpg` di dalam folder `assets/images/`.
   - Buka `index.html`, cari tag `<img>` profil (sekitar baris 190) dan ubah `src` menjadi:
     ```html
     <img src="assets/images/profile.jpg" alt="Foto El Syifa Thea Salsabila" ...>
     ```

2. **Menyesuaikan Data Buku & Teks**:
   - Seluruh daftar buku dan ringkasan karya berada di file `assets/js/main.js`. Anda dapat menambah, mengubah judul, penerbit, sinopsis, atau catatan editorial kapan saja.

3. **Menambahkan Foto Karya (1 atau beberapa per buku)**:
   - Simpan foto di folder `assets/images/books/` dengan nama `judul-buku-1.jpg`, `judul-buku-2.jpg`, dst.
   - Buka `assets/js/main.js`, cari bukunya, lalu isi array `images`:
     ```js
     images: [
       "assets/images/books/romansa-opium-1.jpg",
       "assets/images/books/romansa-opium-2.jpg"
     ]
     ```
   - Satu foto akan menjadi sampul. Dua foto atau lebih otomatis menampilkan galeri
     (thumbnail, panah, counter, swipe, dan navigasi keyboard) di dalam modal.
   - Jika `images: []` dibiarkan kosong, kartu tetap memakai desain gradien yang ada.
   - Detail lengkap ada di `assets/images/books/README.md`.

---

## 🌐 Cara Publikasi / Deploy ke Internet (Gratis)

### Opsi A: Melalui Vercel / Netlify (Sangat Cepat)
1. Buka [netlify.com/drop](https://app.netlify.com/drop).
2. Tarik (*drag and drop*) seluruh folder `website` ini ke jendela browser.
3. Website akan langsung aktif dalam hitungan detik dengan tautan domain publik gratis!

### Opsi B: Melalui GitHub Pages
1. Buat repositori baru di GitHub (misal: `portofolio-elsyifa`).
2. Unggah file-file proyek ini (`index.html`, folder `assets/`).
3. Masuk ke **Settings > Pages**, pilih branch `main`, lalu simpan.
4. Website akan aktif di `https://username.github.io/portofolio-elsyifa`.

