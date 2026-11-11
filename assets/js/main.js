// Data Portofolio & Proyek Buku yang Ditangani oleh El Syifa Thea Salsabila
const bookData = [
  {
    id: 1,
    title: "Romansa Opium",
    publisher: "Akad Media Cakrawala",
    year: "2025",
    role: "Editor, Layouter, & Project Coordinator",
    badge: "🔥 ~2.000 Pre-Orders Hit",
    category: "Historical Fiction",
    categoryLabel: "Historical Fiction",
    coverBg: "from-rose-950 via-stone-900 to-amber-950",
    coverAccent: "text-rose-300",
    coverPattern: "🥀",
    // Foto sampul/dokumentasi. Bisa 1 atau beberapa:
    // images: ["assets/images/books/romansa-opium-1.jpg", "assets/images/books/romansa-opium-2.jpg"]
    images: ["assets/images/books/romansa-opium-1.jpg"],
    synopsis: "Novel romansa populer yang sukses menarik antusiasme pembaca setia sejak hari pertama pra-pesan, menjadi salah satu judul komersial terlaris penerbit.",
    highlights: [
      "Mengawal naskah dari tahap proposal hingga terbit fisik.",
      "Menajamkan struktur konflik dan alur dinamika hubungan tokoh utama.",
      "Menyusun creative brief ilustrasi sampul, ilustrasi karakter interior, dan merchandise pre-order.",
      "Mengawasi proses layout, proofreading, dan pencetakan."
    ]
  },
  {
    id: 2,
    title: "Cross The Line",
    publisher: "Akad Media Cakrawala",
    year: "2026",
    role: "Development Editor, Layouter, Project Coordinator, & Visual Direction",
    badge: "⭐ Best Seller Pre-Order",
    category: "Metropop",
    categoryLabel: "Metropop",
    coverBg: "from-slate-900 via-indigo-950 to-stone-900",
    coverAccent: "text-cyan-300",
    coverPattern: "⚡",
    images: ["assets/images/books/cross-the-line-1.jpg"],
    synopsis: "Eksplorasi batas tipis antara ambisi masa muda, persahabatan, dan konsekuensi pilihan hidup dengan gaya penceritaan yang intens dan modern.",
    highlights: [
      "Menyusun ulang ritme (pacing) narasi babak tengah agar tensi cerita tetap terjaga.",
      "Menyelaraskan dialog khas anak muda agar terdengar alami dan tidak kaku.",
      "Mengarahkan visualisasi karakter bersama tim ilustrator.",
      "Koordinasi quality control akhir sebelum berkas masuk ke percetakan."
    ]
  },
  {
    id: 3,
    title: "5 Langkah",
    publisher: "Akad Media Cakrawala",
    year: "2026",
    role: "Editor, Project Coordinator, & Layouter",
    badge: "✨ Ribuan Pembaca",
    category: "Friendship & Family",
    categoryLabel: "Friendship & Family",
    coverBg: "from-amber-900 via-stone-900 to-amber-950",
    coverAccent: "text-amber-200",
    coverPattern: "👣",
    images: [
      "assets/images/books/5-langkah-3.jpg"
    ],
    synopsis: "Kisah menyentuh tentang proses penyembuhan diri, memaafkan luka masa lalu, dan langkah-langkah krusial menuju pendewasaan.",
    highlights: [
      "Penyuntingan mendalam pada perkembangan psikologis dan kedalaman emosi karakter.",
      "Membangun jadwal editorial dan memantau deadline kerja antar tim lintas fungsi.",
      "Mendukung kegiatan promosi naskah dan rangkaian book tour ke 4 kota.",
      "Penyelarasan standar kebahasaan EYD dan gaya selingkung penerbit."
    ]
  },
  {
    id: 7,
    title: "Silver Lining",
    publisher: "Akad Media Cakrawala",
    year: "2026",
    role: "Layouter",
    badge: "Novel Komik • Vol. 1",
    category: "Novel Komik",
    categoryLabel: "Novel Komik",
    wideGallery: true,
    coverBg: "from-sky-950 via-slate-900 to-teal-950",
    coverAccent: "text-sky-200",
    coverPattern: "☂️",
    images: [
      "assets/images/books/silver-lining-1.jpg",
      "assets/images/books/silver-lining-2.jpg"
    ],
    manuscript: {
      sampleUrl: "https://drive.google.com/file/d/17sXg9zONh934nxNRc_hZ3LGhib8GRVyj/view?usp=sharing",
      sampleLabel: "Baca Sampel",
      // fullUrl: "https://drive.google.com/file/d/17sXg9zONh934nxNRc_hZ3LGhib8GRVyj/view?usp=sharing",
      // fullLabel: "Minta Akses Naskah",
      accessNote: "Sampel publik • naskah penuh view-only dan akses terbatas."
    },
    synopsis: "Novel komik Vol. 1 karya KIKUATAMA tentang Gaby Athalia Chandramaya, gadis 16 tahun yang terpaksa menjadi \"pembantu\" di rumah mantan sahabatnya yang kini justru menjadi perundungnya. Saat ia hampir menyerah, pertemuannya dengan Vicky Giovano Narawikara perlahan mengubah hidupnya—tentang keberanian bersuara, harga diri, dan cinta.",
    highlights: [
      "Menulis naskah komik (ghostwriting) berdasarkan konsep cerita dan arahan kreatif penerbit.",
      "Menata layout halaman, alur panel, balon dialog, dan tipografi agar nyaman dibaca.",
      "Menjaga konsistensi alur, karakter, dan gaya bahasa sepanjang volume.",
      "Menyiapkan berkas layout final dan memastikan hasilnya siap masuk percetakan."
    ]
  },
  {
    id: 8,
    title: "Through The Flower Shop Window",
    publisher: "Akad Media Cakrawala",
    year: "2026",
    role: "Proofreader, Layouter, & Project Coordinator",
    badge: "🔥 ~2.000 Pre-Orders Hit",
    category: "Slice of Life",
    categoryLabel: "Slice of Life",
    wideGallery: true,
    coverBg: "from-sky-950 via-slate-900 to-teal-950",
    coverAccent: "text-sky-200",
    coverPattern: "☂️",
    images: [
      "assets/images/books/Lotus.jpeg"
    ],
    manuscript: {
      sampleUrl: "",
      sampleLabel: "Baca Sampel",
      fullUrl: "",
      fullLabel: "Minta Akses Naskah",
      accessNote: "Sampel publik • naskah penuh view-only dan akses terbatas."
    },
    synopsis: "ini nanti isi synopsisnya, tapi belum ada karena ini proyek baru. nanti akan diisi setelah naskahnya selesai dan siap untuk dipublikasikan.",
    highlights: [
      "Menulis naskah komik (ghostwriting) berdasarkan konsep cerita dan arahan kreatif penerbit.",
      "Menata layout halaman, alur panel, balon dialog, dan tipografi agar nyaman dibaca.",
      "Menjaga konsistensi alur, karakter, dan gaya bahasa sepanjang volume.",
      "Menyiapkan berkas layout final dan memastikan hasilnya siap masuk percetakan."
    ]
  }
  // ,
  // {
  //   id: 4,
  //   title: "Proyek Naskah Fiksi Kontemporer",
  //   publisher: "Butterflies Books",
  //   year: "2024",
  //   role: "Freelance Manuscript Editor",
  //   badge: "Proyek Kurasi",
  //   category: "freelance",
  //   categoryLabel: "Penyuntingan Naskah Lepas",
  //   coverBg: "from-emerald-950 via-stone-900 to-teal-950",
  //   coverAccent: "text-emerald-300",
  //   coverPattern: "📖",
  //   images: [],
  //   synopsis: "Penyuntingan manuskrip novel fiksi dengan fokus pada keterbacaan, keharmonisan struktur kalimat, dan standar kualitas publikasi independen.",
  //   highlights: [
  //     "Menyunting naskah untuk tata bahasa, keluwesan kalimat, dan konsistensi naskah.",
  //     "Menuntaskan naskah dengan ritme produksi rata-rata 1 buku per bulan.",
  //     "Bekerja sama erat dengan tim penerbit untuk memastikan standar editorial terpenuhi."
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "Liputan Profil UMagazine",
  //   publisher: "LP2M UM × Jawa Pos",
  //   year: "2023",
  //   role: "Journalism Intern & Feature Writer",
  //   badge: "Karya Jurnalistik",
  //   category: "jurnalistik",
  //   categoryLabel: "Jurnalistik & Penulisan Feature",
  //   coverBg: "from-stone-800 via-neutral-900 to-amber-950",
  //   coverAccent: "text-amber-300",
  //   coverPattern: "📰",
  //   images: [],
  //   synopsis: "Seri penulisan profil tokoh dan artikel feature institusional yang mengangkat kiprah tokoh akademisi dan pengabdian riset universitas.",
  //   highlights: [
  //     "Mewawancarai tokoh pimpinan universitas termasuk Rektor dan jajaran pejabat tinggi.",
  //     "Mengolah materi riset dan wawancara menjadi artikel feature yang komunikatif bagi publik.",
  //     "Memproduksi sekitar 1 artikel profil komprehensif per minggu untuk UMagazine."
  //   ]
  // },
  // {
  //   id: 6,
  //   title: "Warta & Berita Sastra",
  //   publisher: "Fakultas Sastra Universitas Negeri Malang",
  //   year: "2023",
  //   role: "Journalism Intern & News Writer",
  //   badge: "Publikasi Kampus",
  //   category: "jurnalistik",
  //   categoryLabel: "Jurnalistik Budaya & Sastra",
  //   coverBg: "from-teal-950 via-stone-900 to-slate-900",
  //   coverAccent: "text-teal-200",
  //   coverPattern: "🖋️",
  //   images: [],
  //   synopsis: "Liputan kegiatan akademik, perhelatan kebudayaan, dan ulasan sastra untuk portal berita resmi Fakultas Sastra.",
  //   highlights: [
  //     "Meliput perhelatan sastra, seminar bahasa, dan kunjungan delegasi budaya.",
  //     "Menulis dan menyunting naskah berita dengan kepatuhan tinggi pada kaidah jurnalistik dan PUEBI.",
  //     "Menjaga konsistensi rilis berita institusi secara berkala (1 artikel per minggu)."
  //   ]
  // },
  

];

// Inisialisasi Utama
function startApp() {
  renderPortfolio("all");
  setupEventListeners();
  initPhotoSlider();
  setupScrollSpy();

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (window.lucide) {
    lucide.createIcons();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}

// Render Portofolio Buku & Proyek
function renderPortfolio(filterCategory = "all") {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  const filtered = filterCategory === "all"
    ? bookData
    : bookData.filter(b => b.category === filterCategory);

  container.innerHTML = filtered.map(book => {
    const images = Array.isArray(book.images) ? book.images : [];
    const cover = images[0] || null;
    const photoCount = images.length;

    return `
    <div class="book-card cursor-pointer group" onclick="openBookModal(${book.id})">
      <div class="book-card-inner aspect-[2/3] w-full rounded-r-xl rounded-l-sm bg-gradient-to-br ${book.coverBg} p-6 flex flex-col justify-between text-white relative overflow-hidden border border-white/10 shadow-xl">
        ${cover ? `<img src="${cover}" alt="Sampul ${book.title}" loading="lazy" decoding="async"
          class="absolute inset-0 h-full w-full object-cover" onerror="this.remove()">` : ""}

        <!-- Overlay agar teks tetap terbaca di atas foto -->
        <div class="absolute inset-0 pointer-events-none ${cover ? "bg-gradient-to-t from-black/85 via-black/10 to-black/50" : "bg-black/15 mix-blend-overlay"}"></div>
        ${cover ? "" : `<div class="absolute -right-8 -bottom-8 text-8xl opacity-15 select-none">${book.coverPattern}</div>`}

        <!-- Top Badge -->
        <div class="relative z-10 flex items-start justify-between gap-1">
          <span class="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded bg-white/15 backdrop-blur-sm border border-white/20 text-white">
            ${book.categoryLabel}
          </span>
          <span class="text-[10px] font-medium text-amber-200 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-400/40">
            ${book.badge}
          </span>
        </div>

        ${cover ? "" : `
        <!-- Middle Title & Visual (tampil saat foto belum tersedia) -->
        <div class="relative z-10 my-auto text-center px-1">
          <div class="text-3xl mb-2 opacity-85">${book.coverPattern}</div>
          <p class="font-serif text-2xl font-bold tracking-wide leading-tight mb-2 group-hover:text-amber-200 transition-colors drop-shadow-sm">
            ${book.title}
          </p>
          <p class="text-[11px] uppercase tracking-widest text-stone-300 font-medium">
            ${book.publisher}
          </p>
        </div>`}

        <!-- Bottom Meta -->
        <div class="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between gap-2 text-[11px] text-stone-300">
          <span class="truncate max-w-[140px] font-medium text-amber-200/90">${book.role}</span>
          <span class="flex items-center gap-2 shrink-0">
            ${photoCount > 1 ? `<span class="inline-flex items-center gap-1 rounded bg-black/45 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm border border-white/20"><i data-lucide="images" class="w-3 h-3"></i>${photoCount}</span>` : ""}
            <span class="font-serif italic text-amber-100 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Detail <i data-lucide="arrow-right" class="w-3 h-3 inline"></i>
            </span>
          </span>
        </div>
      </div>

      <div class="mt-3 px-1">
        <h3 class="font-serif text-lg font-bold text-stone-900 group-hover:text-[#A34E2E] transition-colors leading-snug">
          ${book.title}
        </h3>
        <p class="text-xs text-stone-600 mt-0.5 flex items-center gap-1.5">
          <span>${book.publisher}</span> • <span>${book.year}</span>
        </p>
        <p class="text-xs text-[#A34E2E] font-medium mt-1">
          Peran: ${book.role}
        </p>
      </div>
    </div>
  `;
  }).join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Event Listeners
function setupEventListeners() {
  // Filter Buttons
  const FILTER_ACTIVE = ["bg-terracotta", "text-white", "shadow-sm"];
  const FILTER_INACTIVE = ["bg-stone-200", "text-stone-700", "hover:bg-stone-300"];

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.classList.contains("bg-terracotta")));
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove(...FILTER_ACTIVE);
        b.classList.add(...FILTER_INACTIVE);
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.remove(...FILTER_INACTIVE);
      btn.classList.add(...FILTER_ACTIVE);
      btn.setAttribute("aria-pressed", "true");

      const category = btn.getAttribute("data-category");
      renderPortfolio(category);
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    const setMenuOpen = (open) => {
      mobileMenu.classList.toggle("hidden", !open);
      mobileMenuBtn.setAttribute("aria-expanded", String(open));
      mobileMenuBtn.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    };

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setMenuOpen(mobileMenu.classList.contains("hidden"));
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    // Tutup saat klik di luar menu
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("hidden")) return;
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        setMenuOpen(false);
      }
    });

    // Tutup dengan tombol Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        setMenuOpen(false);
        mobileMenuBtn.focus();
      }
    });
  }

  // Modal Detail Buku: tutup via backdrop, Escape, dan trap fokus
  const bookModal = document.getElementById("book-modal");
  if (bookModal) {
    bookModal.addEventListener("click", (e) => {
      if (e.target === bookModal) closeBookModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !bookModal.classList.contains("hidden")) {
        closeBookModal();
      }
    });

    bookModal.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const book = bookData.find(b => b.id === activeGalleryBookId);
        if (book && Array.isArray(book.images) && book.images.length > 1) {
          e.preventDefault();
          stepGallery(e.key === "ArrowRight" ? 1 : -1);
        }
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = bookModal.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // Before & After Interactive Snippet Toggle (mobile)
  const viewToggleBtns = document.querySelectorAll(".preview-toggle-btn");
  const rawDraftView = document.getElementById("snippet-raw");
  const editedDraftView = document.getElementById("snippet-edited");

  if (viewToggleBtns.length && rawDraftView && editedDraftView) {
    const applyView = (target) => {
      const isRaw = target === "raw";
      rawDraftView.classList.toggle("hidden", !isRaw);
      editedDraftView.classList.toggle("hidden", isRaw);

      viewToggleBtns.forEach(b => {
        const active = b.getAttribute("data-target") === target;
        b.classList.toggle("bg-stone-900", active);
        b.classList.toggle("text-white", active);
        b.classList.toggle("shadow", active);
        b.classList.toggle("text-stone-400", !active);
        b.classList.toggle("hover:text-white", !active);
        b.setAttribute("aria-pressed", String(active));
      });
    };

    viewToggleBtns.forEach(btn => {
      btn.addEventListener("click", () => applyView(btn.getAttribute("data-target")));
    });

    applyView("edited");
  }
}

// Escape teks sebelum masuk ke markup modal.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Hanya izinkan tautan https dan mailto agar aman dipakai di atribut href.
function normalizeManuscriptUrl(value) {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) return "";
  if (/^https:\/\/[^\s]+$/i.test(raw)) return raw;
  if (/^mailto:[^\s]+$/i.test(raw)) return raw;
  return "";
}

// Blok akses naskah: hanya tampil jika minimal satu tautan valid tersedia.
function buildManuscriptBlock(book) {
  const manuscript = book.manuscript;
  if (!manuscript || typeof manuscript !== "object") return "";

  const sampleUrl = normalizeManuscriptUrl(manuscript.sampleUrl);
  const fullUrl = normalizeManuscriptUrl(manuscript.fullUrl);
  if (!sampleUrl && !fullUrl) return "";

  const linkAttributes = (url) =>
    /^mailto:/i.test(url) ? "" : 'target="_blank" rel="noopener noreferrer"';

  const sampleButton = sampleUrl ? `
    <a href="${escapeHtml(sampleUrl)}" ${linkAttributes(sampleUrl)}
      class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-terracotta px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#964223]">
      <i data-lucide="book-open" class="h-3.5 w-3.5"></i>
      <span>${escapeHtml(manuscript.sampleLabel || "Baca Sampel")}</span>
      <i data-lucide="external-link" class="h-3 w-3"></i>
    </a>` : "";

  const fullButton = fullUrl ? `
    <a href="${escapeHtml(fullUrl)}" ${linkAttributes(fullUrl)}
      class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-stone-700 transition-colors hover:border-terracotta hover:text-terracotta">
      <i data-lucide="lock" class="h-3.5 w-3.5"></i>
      <span>${escapeHtml(manuscript.fullLabel || "Minta Akses Naskah")}</span>
    </a>` : "";

  const accessNote = typeof manuscript.accessNote === "string" && manuscript.accessNote.trim() ? `
    <p class="flex items-start gap-2 text-[11px] leading-snug text-stone-600">
      <i data-lucide="shield-check" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A34E2E]"></i>
      <span>${escapeHtml(manuscript.accessNote)}</span>
    </p>` : "";

  return `
    <div class="rounded-xl border border-stone-200 bg-amber-50 p-3.5">
      ${accessNote}
      <div class="mt-2.5 flex flex-col gap-2 sm:flex-row">${sampleButton}${fullButton}</div>
    </div>`;
}

// Modal Detail Proyek
let lastFocusedElement = null;
let activeGalleryBookId = null;
let activeGalleryIndex = 0;

function openBookModal(id) {
  const book = bookData.find(b => b.id === id);
  if (!book) return;

  const images = Array.isArray(book.images) ? book.images : [];
  const hasGallery = images.length > 0;
  const hasMultiple = images.length > 1;
  const manuscriptBlock = buildManuscriptBlock(book);

  activeGalleryBookId = id;
  activeGalleryIndex = 0;

  const modal = document.getElementById("book-modal");
  const modalContent = document.getElementById("modal-content");

  const dialogEl = document.getElementById("book-modal-dialog");
  if (dialogEl) {
    dialogEl.classList.toggle("is-wide", book.wideGallery === true);
    dialogEl.style.maxWidth = book.wideGallery ? "56rem" : "";
  }

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <!-- Book Visual Left -->
      <div class="md:col-span-5 book-media">
        ${hasGallery ? `
        <div class="space-y-3">
          <div id="book-gallery-frame" class="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-stone-900 border border-stone-200 shadow-2xl">
            <img id="book-gallery-main" src="${images[0]}" alt="Sampul ${book.title} (1 dari ${images.length})"
              class="h-full w-full object-contain" onload="updateGalleryFrame()">
            ${hasMultiple ? `
            <button type="button" onclick="stepGallery(-1)" aria-label="Foto sebelumnya"
              class="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-stone-950/70 hover:bg-terracotta text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors">
              <i data-lucide="chevron-left" class="w-5 h-5"></i>
            </button>
            <button type="button" onclick="stepGallery(1)" aria-label="Foto selanjutnya"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-stone-950/70 hover:bg-terracotta text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors">
              <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </button>
            <span id="book-gallery-counter" aria-live="polite"
              class="absolute bottom-2 right-2 rounded-full bg-stone-950/75 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-200 border border-white/20">
              1 / ${images.length}
            </span>` : ""}
          </div>
          ${hasMultiple ? `
          <div class="grid grid-cols-4 gap-2">
            ${images.map((src, i) => `
              <button type="button" data-gallery-thumb="${i}" aria-label="Lihat foto ${i + 1}" aria-current="${i === 0 ? "true" : "false"}"
                onclick="setGalleryImage(${i})"
                class="aspect-[2/3] overflow-hidden rounded-md border border-stone-200 bg-stone-100 transition-all ${i === 0 ? "ring-2 ring-terracotta opacity-100" : "opacity-60 hover:opacity-100"}">
                <img src="${src}" alt="" loading="lazy" decoding="async" class="h-full w-full object-contain">
              </button>`).join("")}
          </div>` : ""}
        </div>` : `
        <div class="aspect-[2/3] w-full rounded-lg bg-gradient-to-br ${book.coverBg} p-6 flex flex-col justify-between text-white relative shadow-2xl border border-white/20">
          <div class="flex justify-between items-center text-xs">
            <span class="bg-white/20 px-2.5 py-0.5 rounded font-medium">${book.categoryLabel}</span>
            <span class="text-amber-300 font-semibold">${book.year}</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-4xl mb-3">${book.coverPattern}</div>
            <p class="font-serif text-2xl md:text-3xl font-bold tracking-wide leading-tight">${book.title}</p>
            <p class="text-xs uppercase tracking-widest text-stone-300 mt-2 font-medium">${book.publisher}</p>
          </div>
          <div class="text-xs text-stone-300 border-t border-white/20 pt-3 flex justify-between">
            <span class="font-medium text-white">${book.role}</span>
            <span class="text-amber-300">${book.badge}</span>
          </div>
        </div>`}
      </div>

      <!-- Book Info Right -->
      <div class="md:col-span-7 book-info flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-amber-100 text-[#A34E2E] text-xs font-semibold px-2.5 py-0.5 rounded-full border border-amber-300 whitespace-nowrap">
              ${book.badge}
            </span>
            <span class="text-xs text-stone-500">• ${book.publisher} (${book.year})</span>
          </div>

          <h2 id="book-modal-title" class="font-serif text-3xl font-bold text-stone-900 leading-tight">
            ${book.title}
          </h2>
          <p class="text-sm font-semibold text-[#A34E2E] mt-0.5">
            Peran: ${book.role}
          </p>

          <div class="space-y-3.5 mt-4">
            <div>
              <h3 class="text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-1">Ikhtisar Naskah:</h3>
              <p class="text-sm text-stone-700 leading-relaxed italic bg-[#FAF7F2] p-3 rounded-lg border-l-4 border-[#A34E2E]">
                "${book.synopsis}"
              </p>
            </div>

            <div>
              <h3 class="text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-1.5">Kontribusi & Tanggung Jawab El Syifa:</h3>
              <ul class="text-xs sm:text-sm text-stone-700 space-y-1.5 bg-stone-50 p-3.5 rounded-lg border border-stone-200">
                ${book.highlights.map(h => `<li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i><span>${h}</span></li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        ${manuscriptBlock}

        <div class="pt-4 border-t border-stone-200 flex items-center justify-between">
          <span class="text-xs text-stone-500">Proyek Resmi Penerbitan</span>
          <button onclick="closeBookModal()" class="px-5 py-2 bg-stone-900 hover:bg-[#A34E2E] text-white text-xs font-medium rounded-lg transition-colors">
            Tutup
          </button>
        </div>
      </div>
    </div>
  `;

  lastFocusedElement = document.activeElement;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  if (window.lucide) {
    lucide.createIcons();
  }

  if (hasMultiple) {
    initGallerySwipe();
  }

  const dialog = document.getElementById("book-modal-dialog");
  if (dialog) dialog.focus();
}

function closeBookModal() {
  const modal = document.getElementById("book-modal");
  if (!modal || modal.classList.contains("hidden")) return;

  modal.classList.add("hidden");
  document.body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// Galeri foto di dalam modal (mendukung 1 atau beberapa foto)
function setGalleryImage(index) {
  const book = bookData.find(b => b.id === activeGalleryBookId);
  const images = book && Array.isArray(book.images) ? book.images : [];
  if (!images.length) return;

  const total = images.length;
  const nextIndex = ((index % total) + total) % total;
  activeGalleryIndex = nextIndex;

  const mainImage = document.getElementById("book-gallery-main");
  if (mainImage) {
    mainImage.src = images[nextIndex];
    mainImage.alt = `Sampul ${book.title} (${nextIndex + 1} dari ${total})`;
    if (mainImage.complete) updateGalleryFrame();
  }

  const counter = document.getElementById("book-gallery-counter");
  if (counter) counter.textContent = `${nextIndex + 1} / ${total}`;

  document.querySelectorAll("[data-gallery-thumb]").forEach((thumb, i) => {
    const active = i === nextIndex;
    thumb.classList.toggle("ring-2", active);
    thumb.classList.toggle("ring-terracotta", active);
    thumb.classList.toggle("opacity-100", active);
    thumb.classList.toggle("opacity-60", !active);
    thumb.setAttribute("aria-current", String(active));
  });
}

// Sesuaikan rasio bingkai galeri dengan rasio asli gambar agar tidak ada bilah kosong.
function updateGalleryFrame() {
  const mainImage = document.getElementById("book-gallery-main");
  const frame = document.getElementById("book-gallery-frame");
  if (!mainImage || !frame || !mainImage.naturalWidth || !mainImage.naturalHeight) return;

  frame.style.aspectRatio = `${mainImage.naturalWidth} / ${mainImage.naturalHeight}`;
}
function stepGallery(direction) {
  setGalleryImage(activeGalleryIndex + direction);
}

function initGallerySwipe() {
  const mainImage = document.getElementById("book-gallery-main");
  if (!mainImage) return;

  let startX = null;
  mainImage.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  mainImage.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 40) stepGallery(diff < 0 ? 1 : -1);
    startX = null;
  });
}

// Slider Foto Profil Interaktif (Horizontal Slide & Drag)
function initPhotoSlider() {
  const slider = document.getElementById("photo-slider");
  const track = document.getElementById("slider-track");
  if (!slider || !track) return;

  // Slide children: semua div langsung di dalam track
  const slides = Array.from(track.children);
  if (!slides.length) return;

  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");
  const dotsContainer = document.getElementById("slider-dots");
  const counterCurrent = document.getElementById("slider-counter-current");
  const counterTotal = document.getElementById("slider-counter-total");

  let currentIdx = 0;
  let autoSlideTimer = null;
  const TOTAL = slides.length;
  const AUTO_DELAY = 30000;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Update dots dari HTML yang sudah ada (data-dot attribute)
  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll("button[data-dot]");
    dots.forEach((dot, i) => {
      const active = i === currentIdx;
      const visual = dot.querySelector(".slider-dot-visual");
      if (visual) {
        if (active) {
          visual.style.width = "1.25rem";
          visual.style.background = "#fcd34d";
        } else {
          visual.style.width = "0.5rem";
          visual.style.background = "rgba(255,255,255,0.4)";
        }
      }
      if (active) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }

  function goToSlide(idx) {
    currentIdx = ((idx % TOTAL) + TOTAL) % TOTAL;
    track.style.transition = prefersReducedMotion.matches
      ? "none"
      : "transform 0.45s cubic-bezier(0.25,1,0.5,1)";
    track.style.transform = `translateX(-${currentIdx * 100}%)`;
    if (counterCurrent) counterCurrent.textContent = currentIdx + 1;
    updateDots();
  }

  function nextSlide() { goToSlide(currentIdx + 1); }
  function prevSlide() { goToSlide(currentIdx - 1); }

  function startAutoSlide() {
    clearInterval(autoSlideTimer);
    if (prefersReducedMotion.matches || slider.matches(":hover, :focus-within")) return;
    autoSlideTimer = setInterval(nextSlide, AUTO_DELAY);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }

  // Expose ke window – dipakai oleh data-dot buttons
  window.sliderNext = function (e) { if (e) e.stopPropagation(); nextSlide(); startAutoSlide(); };
  window.sliderPrev = function (e) { if (e) e.stopPropagation(); prevSlide(); startAutoSlide(); };
  window.goToSlide = function (i) { goToSlide(i); startAutoSlide(); };

  // Attach dot button clicks
  if (dotsContainer) {
    dotsContainer.querySelectorAll("button[data-dot]").forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(parseInt(dot.dataset.dot));
        startAutoSlide();
      });
    });
  }

  // Prev / Next button clicks
  if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); prevSlide(); startAutoSlide(); });
  if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); nextSlide(); startAutoSlide(); });

  // Update counter total
  if (counterTotal) counterTotal.textContent = TOTAL;

  // ── Touch / Drag (Swipe) ──────────────────────────────────
  let dragStartX = 0;
  let dragStartOffset = 0;
  let dragging = false;

  function sliderWidth() { return slider.offsetWidth; }

  // Touch
  slider.addEventListener("touchstart", (e) => {
    dragging = true;
    dragStartX = e.touches[0].clientX;
    dragStartOffset = -currentIdx * sliderWidth();
    track.style.transition = "none";
    stopAutoSlide();
  }, { passive: true });

  slider.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    track.style.transform = `translateX(${dragStartOffset + diff}px)`;
  }, { passive: true });

  slider.addEventListener("touchend", (e) => {
    if (!dragging) return;
    dragging = false;
    const diff = e.changedTouches[0].clientX - dragStartX;
    if (diff < -50) nextSlide();
    else if (diff > 50) prevSlide();
    else goToSlide(currentIdx);
    startAutoSlide();
  });

  // Mouse drag
  slider.addEventListener("mousedown", (e) => {
    if (e.target.closest("button")) return;
    dragging = true;
    dragStartX = e.clientX;
    dragStartOffset = -currentIdx * sliderWidth();
    track.style.transition = "none";
    slider.style.cursor = "grabbing";
    stopAutoSlide();
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const diff = e.clientX - dragStartX;
    track.style.transform = `translateX(${dragStartOffset + diff}px)`;
  });

  window.addEventListener("mouseup", (e) => {
    if (!dragging) return;
    dragging = false;
    slider.style.cursor = "grab";
    const diff = e.clientX - dragStartX;
    if (diff < -50) nextSlide();
    else if (diff > 50) prevSlide();
    else goToSlide(currentIdx);
    startAutoSlide();
  });

  // Jeda auto-slide saat kursor atau fokus berada di slider
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
  slider.addEventListener("focusin", stopAutoSlide);
  slider.addEventListener("focusout", startAutoSlide);

  // Bereaksi jika preferensi reduced-motion berubah
  if (typeof prefersReducedMotion.addEventListener === "function") {
    prefersReducedMotion.addEventListener("change", startAutoSlide);
  }

  // Init
  track.style.transition = "none";
  track.style.transform = "translateX(0)";
  updateDots();
  startAutoSlide();
}

// Active Scrollspy untuk Navbar & Tombol Kembali ke Atas
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header nav a[href^='#']");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 120;

    // Scrollspy active highlight
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-terracotta", "font-bold");
            link.classList.remove("text-stone-600");
          } else {
            link.classList.remove("text-terracotta", "font-bold");
            link.classList.add("text-stone-600");
          }
        });
      }
    });

    // Floating Back to Top Button visibility
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
        backToTopBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
        backToTopBtn.classList.remove("opacity-100", "translate-y-0");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
