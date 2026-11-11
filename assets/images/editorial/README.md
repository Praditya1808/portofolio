# Foto Preview Naskah (Sentuhan Editorial)

Folder ini menyimpan foto preview untuk bagian **Sentuhan Editorial: Sebelum vs. Sesudah**.

## File yang dipakai

| File | Kotak |
| --- | --- |
| `draf-mentah.jpg` | Draf Mentah Penulis (sebelum disunting) |
| `hasil-suntingan.jpg` | Sentuhan Editorial El Syifa (hasil suntingan) |

Ganti dua file di atas dengan foto halaman naskah asli. Nama file harus tetap sama,
atau sesuaikan `src` pada `index.html` (cari `data-editorial-preview`).

## Spesifikasi foto

- Orientasi **portrait** (halaman naskah A4/A5).
- Lebar minimal **1000 px**, sisi terpanjang sekitar **1400–1800 px**.
- Format **JPG** atau **WebP**, ukuran file ideal **di bawah 300 KB** per foto.
- Foto tegak, tidak miring, dan pastikan teks masih terbaca saat diperbesar.

## Cara tampil

- Di dalam kotak, foto dipotong dari bagian atas dengan rasio **5:4** agar section
  tetap ringkas.
- Klik foto untuk membuka **lightbox** dan melihat gambar utuh.
- Kalau file belum ada, kotak otomatis menampilkan placeholder
  “Preview naskah belum tersedia” tanpa ikon gambar rusak.

## Mengganti nama file

Jika ingin memakai nama lain, ubah bagian ini di `index.html`:

```html
<img src="assets/images/editorial/draf-mentah.jpg" ...>
<img src="assets/images/editorial/hasil-suntingan.jpg" ...>
```
