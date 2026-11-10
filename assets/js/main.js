// Data Portofolio & Proyek Buku yang Ditangani oleh El Syifa Thea Salsabila
const bookData = [
  {
    id: 1,
    title: "Romansa Opium",
    publisher: "Akad Media Cakrawala",
    year: "2025",
    role: "Editor & Creative Direction",
    badge: "🔥 ~2.000 Pre-Orders Hit",
    category: "fiksi-komersial",
    categoryLabel: "Fiksi Komersial & Romansa",
    coverBg: "from-rose-950 via-stone-900 to-amber-950",
    coverAccent: "text-rose-300",
    coverPattern: "🥀",
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
    year: "2025",
    role: "Developmental & Copy Editor",
    badge: "⭐ Best Seller Pre-Order",
    category: "fiksi-komersial",
    categoryLabel: "Young Adult / Pop Fiction",
    coverBg: "from-slate-900 via-indigo-950 to-stone-900",
    coverAccent: "text-cyan-300",
    coverPattern: "⚡",
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
    year: "2025",
    role: "Substantive Editor & Project Coordinator",
    badge: "✨ Ribuan Pembaca",
    category: "fiksi-komersial",
    categoryLabel: "Romance & Drama",
    coverBg: "from-amber-900 via-stone-900 to-amber-950",
    coverAccent: "text-amber-200",
    coverPattern: "👣",
    synopsis: "Kisah menyentuh tentang proses penyembuhan diri, memaafkan luka masa lalu, dan langkah-langkah krusial menuju pendewasaan.",
    highlights: [
      "Penyuntingan mendalam pada perkembangan psikologis dan kedalaman emosi karakter.",
      "Membangun jadwal editorial dan memantau deadline kerja antar tim lintas fungsi.",
      "Mendukung kegiatan promosi naskah dan rangkaian book tour ke 4 kota.",
      "Penyelarasan standar kebahasaan EYD dan gaya selingkung penerbit."
    ]
  },
  {
    id: 4,
    title: "Proyek Naskah Fiksi Kontemporer",
    publisher: "Butterflies Books",
    year: "2024",
    role: "Freelance Manuscript Editor",
    badge: "Proyek Kurasi",
    category: "freelance",
    categoryLabel: "Penyuntingan Naskah Lepas",
    coverBg: "from-emerald-950 via-stone-900 to-teal-950",
    coverAccent: "text-emerald-300",
    coverPattern: "📖",
    synopsis: "Penyuntingan manuskrip novel fiksi dengan fokus pada keterbacaan, keharmonisan struktur kalimat, dan standar kualitas publikasi independen.",
    highlights: [
      "Menyunting naskah untuk tata bahasa, keluwesan kalimat, dan konsistensi naskah.",
      "Menuntaskan naskah dengan ritme produksi rata-rata 1 buku per bulan.",
      "Bekerja sama erat dengan tim penerbit untuk memastikan standar editorial terpenuhi."
    ]
  },
  {
    id: 5,
    title: "Liputan Profil UMagazine",
    publisher: "LP2M UM × Jawa Pos",
    year: "2023",
    role: "Journalism Intern & Feature Writer",
    badge: "Karya Jurnalistik",
    category: "jurnalistik",
    categoryLabel: "Jurnalistik & Penulisan Feature",
    coverBg: "from-stone-800 via-neutral-900 to-amber-950",
    coverAccent: "text-amber-300",
    coverPattern: "📰",
    synopsis: "Seri penulisan profil tokoh dan artikel feature institusional yang mengangkat kiprah tokoh akademisi dan pengabdian riset universitas.",
    highlights: [
      "Mewawancarai tokoh pimpinan universitas termasuk Rektor dan jajaran pejabat tinggi.",
      "Mengolah materi riset dan wawancara menjadi artikel feature yang komunikatif bagi publik.",
      "Memproduksi sekitar 1 artikel profil komprehensif per minggu untuk UMagazine."
    ]
  },
  {
    id: 6,
    title: "Warta & Berita Sastra",
    publisher: "Fakultas Sastra Universitas Negeri Malang",
    year: "2023",
    role: "Journalism Intern & News Writer",
    badge: "Publikasi Kampus",
    category: "jurnalistik",
    categoryLabel: "Jurnalistik Budaya & Sastra",
    coverBg: "from-teal-950 via-stone-900 to-slate-900",
    coverAccent: "text-teal-200",
    coverPattern: "🖋️",
    synopsis: "Liputan kegiatan akademik, perhelatan kebudayaan, dan ulasan sastra untuk portal berita resmi Fakultas Sastra.",
    highlights: [
      "Meliput perhelatan sastra, seminar bahasa, dan kunjungan delegasi budaya.",
      "Menulis dan menyunting naskah berita dengan kepatuhan tinggi pada kaidah jurnalistik dan PUEBI.",
      "Menjaga konsistensi rilis berita institusi secara berkala (1 artikel per minggu)."
    ]
  }
];

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio("all");
  setupEventListeners();
  initPhotoSlider();
  setupScrollSpy();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Render Portofolio Buku & Proyek
function renderPortfolio(filterCategory = "all") {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? bookData 
    : bookData.filter(b => b.category === filterCategory);

  container.innerHTML = filtered.map(book => `
    <div class="book-card cursor-pointer group" onclick="openBookModal(${book.id})">
      <div class="book-card-inner aspect-[2/3] w-full rounded-r-xl rounded-l-sm bg-gradient-to-br ${book.coverBg} p-6 flex flex-col justify-between text-white relative overflow-hidden border border-white/10 shadow-xl">
        <!-- Texture overlay -->
        <div class="absolute inset-0 bg-black/15 mix-blend-overlay pointer-events-none"></div>
        <div class="absolute -right-8 -bottom-8 text-8xl opacity-15 select-none">${book.coverPattern}</div>

        <!-- Top Badge -->
        <div class="relative z-10 flex items-start justify-between gap-1">
          <span class="text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded bg-white/15 backdrop-blur-sm border border-white/20 text-white">
            ${book.categoryLabel}
          </span>
          <span class="text-[10px] font-medium text-amber-200 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-400/40">
            ${book.badge}
          </span>
        </div>

        <!-- Middle Title & Visual -->
        <div class="relative z-10 my-auto text-center px-1">
          <div class="text-3xl mb-2 opacity-85">${book.coverPattern}</div>
          <h3 class="font-serif text-2xl font-bold tracking-wide leading-tight mb-2 group-hover:text-amber-200 transition-colors drop-shadow-sm">
            ${book.title}
          </h3>
          <p class="text-[11px] uppercase tracking-widest text-stone-300 font-medium">
            ${book.publisher}
          </p>
        </div>

        <!-- Bottom Meta -->
        <div class="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-stone-300">
          <span class="truncate max-w-[140px] font-medium text-amber-200/90">${book.role}</span>
          <span class="font-serif italic text-amber-100 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Detail <i data-lucide="arrow-right" class="w-3 h-3 inline"></i>
          </span>
        </div>
      </div>

      <div class="mt-3 px-1">
        <h4 class="font-serif text-lg font-bold text-stone-900 group-hover:text-[#B85D3B] transition-colors leading-snug">
          ${book.title}
        </h4>
        <p class="text-xs text-stone-500 mt-0.5 flex items-center gap-1.5">
          <span>${book.publisher}</span> • <span>${book.year}</span>
        </p>
        <p class="text-xs text-[#B85D3B] font-medium mt-1">
          Peran: ${book.role}
        </p>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Event Listeners
function setupEventListeners() {
  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-[#B85D3B]", "text-white", "shadow-sm");
        b.classList.add("bg-stone-100", "text-stone-700", "hover:bg-stone-200");
      });
      btn.classList.add("bg-[#B85D3B]", "text-white", "shadow-sm");
      btn.classList.remove("bg-stone-100", "text-stone-700", "hover:bg-stone-200");
      
      const category = btn.getAttribute("data-category");
      renderPortfolio(category);
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Before & After Interactive Snippet Toggle
  const viewToggleBtns = document.querySelectorAll(".preview-toggle-btn");
  const rawDraftView = document.getElementById("snippet-raw");
  const editedDraftView = document.getElementById("snippet-edited");

  if (viewToggleBtns.length && rawDraftView && editedDraftView) {
    viewToggleBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        viewToggleBtns.forEach(b => {
          b.classList.remove("bg-stone-900", "text-white");
          b.classList.add("bg-stone-200", "text-stone-700");
        });
        btn.classList.add("bg-stone-900", "text-white");
        btn.classList.remove("bg-stone-200", "text-stone-700");

        const target = btn.getAttribute("data-target");
        if (target === "raw") {
          rawDraftView.classList.remove("hidden");
          editedDraftView.classList.add("hidden");
        } else {
          rawDraftView.classList.add("hidden");
          editedDraftView.classList.remove("hidden");
        }
      });
    });
  }
}

// Modal Detail Proyek
function openBookModal(id) {
  const book = bookData.find(b => b.id === id);
  if (!book) return;

  const modal = document.getElementById("book-modal");
  const modalContent = document.getElementById("modal-content");
  
  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <!-- Book Visual Left -->
      <div class="md:col-span-5">
        <div class="aspect-[2/3] w-full rounded-lg bg-gradient-to-br ${book.coverBg} p-6 flex flex-col justify-between text-white relative shadow-2xl border border-white/20">
          <div class="flex justify-between items-center text-xs">
            <span class="bg-white/20 px-2.5 py-0.5 rounded font-medium">${book.categoryLabel}</span>
            <span class="text-amber-300 font-semibold">${book.year}</span>
          </div>
          <div class="text-center my-auto">
            <div class="text-4xl mb-3">${book.coverPattern}</div>
            <h3 class="font-serif text-2xl md:text-3xl font-bold tracking-wide leading-tight">${book.title}</h3>
            <p class="text-xs uppercase tracking-widest text-stone-300 mt-2 font-medium">${book.publisher}</p>
          </div>
          <div class="text-xs text-stone-300 border-t border-white/20 pt-3 flex justify-between">
            <span class="font-medium text-white">${book.role}</span>
            <span class="text-amber-300">${book.badge}</span>
          </div>
        </div>
      </div>

      <!-- Book Info Right -->
      <div class="md:col-span-7 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-amber-100 text-[#B85D3B] text-xs font-semibold px-2.5 py-0.5 rounded-full border border-amber-300">
              ${book.badge}
            </span>
            <span class="text-xs text-stone-500">• ${book.publisher} (${book.year})</span>
          </div>

          <h2 class="font-serif text-3xl font-bold text-stone-900 leading-tight">
            ${book.title}
          </h2>
          <p class="text-sm font-semibold text-[#B85D3B] mt-0.5">
            Peran: ${book.role}
          </p>

          <div class="space-y-3.5 mt-4">
            <div>
              <h4 class="text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-1">Ikhtisar Naskah:</h4>
              <p class="text-sm text-stone-700 leading-relaxed italic bg-[#FAF7F2] p-3 rounded-lg border-l-4 border-[#B85D3B]">
                "${book.synopsis}"
              </p>
            </div>

            <div>
              <h4 class="text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-1.5">Kontribusi & Tanggung Jawab El Syifa:</h4>
              <ul class="text-xs sm:text-sm text-stone-700 space-y-1.5 bg-stone-50 p-3.5 rounded-lg border border-stone-200">
                ${book.highlights.map(h => `<li class="flex items-start gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i><span>${h}</span></li>`).join("")}
              </ul>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-stone-200 flex items-center justify-between">
          <span class="text-xs text-stone-500">Proyek Resmi Penerbitan</span>
          <button onclick="closeBookModal()" class="px-5 py-2 bg-stone-900 hover:bg-[#B85D3B] text-white text-xs font-medium rounded-lg transition-colors">
            Tutup
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeBookModal() {
  const modal = document.getElementById("book-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Slider Foto Profil Interaktif (Horizontal Slide & Drag)
function initPhotoSlider() {
  const slider = document.getElementById("photo-slider");
  const track = document.getElementById("slider-track");
  if (!slider || !track) return;

  const slides = track.querySelectorAll(".photo-slide");
  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");
  const dotsContainer = document.getElementById("slider-dots");
  const counterCurrent = document.getElementById("slider-counter-current");
  const counterTotal = document.getElementById("slider-counter-total");

  if (!slides.length) return;

  let currentIdx = 0;
  let autoSlideTimer = null;
  const AUTO_SLIDE_DELAY = 30000; // 30 detik sesuai permintaan

  // Setup Indikator Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.setAttribute("type", "button");
      dot.setAttribute("aria-label", `Pindah ke foto ${idx + 1}`);
      dot.className = `h-2 rounded-full transition-all duration-300 ${
        idx === 0 ? "bg-amber-300 w-5" : "bg-white/40 hover:bg-white/70 w-2"
      }`;
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(idx);
        restartAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });
  }

  if (counterTotal) {
    counterTotal.textContent = slides.length;
  }

  function updateSlider(animate = true) {
    if (animate) {
      track.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    } else {
      track.style.transition = "none";
    }

    track.style.transform = `translateX(-${currentIdx * 100}%)`;

    // Update Dots & Counter
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll("button");
      dots.forEach((dot, idx) => {
        if (idx === currentIdx) {
          dot.className = "w-5 h-2 rounded-full bg-amber-300 transition-all duration-300 shadow-sm";
        } else {
          dot.className = "w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300";
        }
      });
    }

    if (counterCurrent) {
      counterCurrent.textContent = currentIdx + 1;
    }
  }

  function goToSlide(idx) {
    currentIdx = (idx + slides.length) % slides.length;
    updateSlider(true);
  }

  function nextSlide() {
    goToSlide(currentIdx + 1);
  }

  function prevSlide() {
    goToSlide(currentIdx - 1);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextSlide();
      restartAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevSlide();
      restartAutoSlide();
    });
  }

  // Drag / Swipe Interaktif (Mendukung Mouse & Layar Sentuh HP)
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = null;

  // Touch Events
  slider.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    prevTranslate = -currentIdx * slider.offsetWidth;
    track.style.transition = "none";
    clearInterval(autoSlideTimer);
  }, { passive: true });

  slider.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    track.style.transform = `translateX(${prevTranslate + diff}px)`;
  }, { passive: true });

  slider.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff < -50) {
      nextSlide();
    } else if (diff > 50) {
      prevSlide();
    } else {
      updateSlider(true);
    }
    restartAutoSlide();
  });

  // Mouse Drag Events (Desktop)
  slider.addEventListener("mousedown", (e) => {
    // Jangan drag jika tombol panah atau dots yang diklik
    if (e.target.closest("button")) return;
    isDragging = true;
    startX = e.clientX;
    prevTranslate = -currentIdx * slider.offsetWidth;
    track.style.transition = "none";
    slider.classList.add("cursor-grabbing");
    clearInterval(autoSlideTimer);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    track.style.transform = `translateX(${prevTranslate + diff}px)`;
  });

  window.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    slider.classList.remove("cursor-grabbing");
    const diff = e.clientX - startX;

    if (diff < -50) {
      nextSlide();
    } else if (diff > 50) {
      prevSlide();
    } else {
      updateSlider(true);
    }
    restartAutoSlide();
  });

  // Auto-slide setiap 30 detik
  function startAutoSlide() {
    clearInterval(autoSlideTimer);
    if (slides.length > 1) {
      autoSlideTimer = setInterval(() => {
        nextSlide();
      }, AUTO_SLIDE_DELAY);
    }
  }

  function restartAutoSlide() {
    startAutoSlide();
  }

  updateSlider(false);
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
