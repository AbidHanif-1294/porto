/* ============================================================
   ABID WEB STUDIO — script.js (v2)
   Fitur: navbar, mobile menu, active nav, reveal, smooth scroll,
          back-to-top, toast, i18n (EN/ID), theme switch.
============================================================ */

(function () {
  "use strict";

  /* ---------- 1. TRANSLATIONS ---------- */
  const translations = {
    en: {
      page_title: "Web Studio — Websites for Organizations & Small Businesses",
      page_description:
        "Web Studio builds clean, responsive, and functional websites for school organizations, extracurriculars, student communities, event committees, and small businesses.",

      skip: "Skip to content",
      brand_aria: "Web Studio — back to top",

      nav_home: "Home",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_about: "About",
      nav_contact: "Contact",
      nav_cta: "Let's Talk",

      menu_open: "Open menu",
      menu_close: "Close menu",

      lang_group_label: "Language",
      theme_toggle_label: "Toggle theme",
      theme_to_dark: "Switch to dark mode",
      theme_to_light: "Switch to light mode",
      back_to_top: "Back to top",

      hero_eyebrow: "Web Development Studio",
      hero_title_1: "Building Digital Experiences for",
      hero_title_accent: "Organizations",
      hero_title_2: "and Businesses.",
      hero_lead:
        "I help organizations, communities, and small businesses establish their digital presence through clean, responsive, and functional websites.",
      hero_btn_explore: "Explore My Work",
      hero_btn_work: "Let's Work Together",
      hero_meta_1: "Responsive by default",
      hero_meta_2: "Built with HTML, CSS & JS",
      hero_meta_3: "Student-friendly pricing",
      hero_visual_aria:
        "Illustration of a website interface being built with clean, responsive code",

      float_code_title: "Clean Code",
      float_code_sub: "HTML · CSS · JS",
      float_resp_title: "Responsive",
      float_resp_sub: "Mobile first",

      services_eyebrow: "Services",
      services_title: "Websites built around your goals",
      services_desc:
        "Practical, easy-to-maintain websites for organizations and small businesses. Every project is scoped together with you before development starts.",

      s1_title: "Organization Profile Website",
      s1_desc:
        "A complete profile website for an organization or extracurricular unit — easy to read and easy to update.",
      s1_li1: "Organization info, vision & mission",
      s1_li2: "Committee structure & work programs",
      s1_li3: "Documentation gallery",
      s1_li4: "Contact & social links",

      s2_title: "Event Landing Page",
      s2_desc:
        "A focused one-page site for your event, committee, or competition — built to inform and convert visitors into participants.",
      s2_li1: "Schedule & event description",
      s2_li2: "Poster & sponsor section",
      s2_li3: "Location & map embed",
      s2_li4: "Registration call-to-action",

      s3_title: "Portfolio & Achievement Website",
      s3_desc:
        "A documentation site for activities, projects, and achievements — suitable for organizations, communities, or individuals.",
      s3_li1: "Project & activity gallery",
      s3_li2: "Achievement timeline",
      s3_li3: "Team or member section",
      s3_li4: "Lightweight and fast to load",

      price_from: "Starting from",
      discuss_service: "Discuss this service",
      services_note:
        "Prices above are early estimates and may change depending on complexity, features, and client requirements. Paid domain and hosting fees are not included unless agreed separately.",

      portfolio_eyebrow: "Portfolio",
      portfolio_title: "Concept work & demo builds",
      portfolio_desc:
        "Everything below is a self-initiated demo or concept design, created to show layout, structure, and code quality. No client work is claimed here.",

      p1_badge: "Demo Project",
      p1_cat: "Organization Profile",
      p1_title: "School Organization Profile",
      p1_desc:
        "A profile website concept for a student organization: vision and mission, committee structure, work programs, and a documentation gallery.",

      p2_badge: "Concept Design",
      p2_cat: "Event Landing Page",
      p2_title: "Annual Event Landing Page",
      p2_desc:
        "A single-page concept for a school event: schedule, poster, sponsors, location, and a clear registration call-to-action.",

      p3_badge: "Demo Project",
      p3_cat: "Portfolio & Achievement",
      p3_title: "Student Community Showcase",
      p3_desc:
        "A documentation site concept for a student community: project gallery, achievement timeline, and member highlights.",

      btn_preview: "Live Preview",
      btn_details: "View Details",

      about_eyebrow: "About",
      about_title: "Turning Ideas Into Functional Websites.",
      about_text1:
        "I'm an aspiring web developer interested in building practical digital solutions. I focus on creating websites that are not only visually appealing but also useful, accessible, and easy to navigate.",
      about_text2:
        "I work with core web technologies — no heavy frameworks — so the result stays fast, lightweight, and simple to maintain. Every project starts with a conversation about what you actually need, not what looks trendy.",
      about_subtitle: "Capabilities",

      skill_1: "HTML5",
      skill_2: "CSS3",
      skill_3: "JavaScript",
      skill_4: "Responsive Web Design",
      skill_5: "Basic Python",
      skill_6: "UI Implementation",

      profile_role: "Web Developer & UI Implementer",
      profile_focus_label: "Focus",
      profile_focus_value: "Responsive websites",
      profile_stack_label: "Stack",
      profile_based_label: "Based in",
      profile_based_value: "Indonesia",
      profile_status_label: "Status",
      profile_status_value: "Open for projects",
      profile_cta: "Start a Project",

      process_eyebrow: "Work Process",
      process_title: "A simple, transparent workflow",
      process_desc:
        "Four clear stages — so you always know what's happening and what comes next.",
      proc1_title: "Discussion",
      proc1_desc:
        "Understanding your needs, goals, and the audience your website is built for.",
      proc2_title: "Planning",
      proc2_desc:
        "Defining the structure, content, and features before any code is written.",
      proc3_title: "Development",
      proc3_desc:
        "Designing and implementing the website with clean, responsive, semantic code.",
      proc4_title: "Delivery",
      proc4_desc:
        "Testing, revisions as agreed, and handing over the finished website to you.",

      contact_eyebrow: "Contact",
      contact_title: "Have a Project in Mind?",
      contact_desc:
        "Let's discuss how a website can help your organization or business.",
      contact_note:
        "Replies are usually within 1–2 business days. Please include a short description of your project and a rough deadline.",

      footer_copy: "Web Studio. Built with HTML, CSS, and vanilla JavaScript.",
      toast_placeholder: "Demo link — replace with your real project URL."
    },

    id: {
      page_title: "Web Studio — Website untuk Organisasi & Usaha Kecil",
      page_description:
        "Web Studio membuat website yang rapi, responsif, dan fungsional untuk organisasi sekolah, ekstrakurikuler, komunitas pelajar, panitia acara, dan usaha kecil.",

      skip: "Lewati ke konten",
      brand_aria: "Web Studio — kembali ke atas",

      nav_home: "Beranda",
      nav_services: "Layanan",
      nav_portfolio: "Portofolio",
      nav_about: "Tentang",
      nav_contact: "Kontak",
      nav_cta: "Ayo Bicara",

      menu_open: "Buka menu",
      menu_close: "Tutup menu",

      lang_group_label: "Bahasa",
      theme_toggle_label: "Ganti tema",
      theme_to_dark: "Aktifkan mode gelap",
      theme_to_light: "Aktifkan mode terang",
      back_to_top: "Kembali ke atas",

      hero_eyebrow: "Studio Pengembangan Web",
      hero_title_1: "Membangun Pengalaman Digital untuk",
      hero_title_accent: "Organisasi",
      hero_title_2: "dan Bisnis.",
      hero_lead:
        "Saya membantu organisasi, komunitas, dan usaha kecil membangun kehadiran digital melalui website yang rapi, responsif, dan fungsional.",
      hero_btn_explore: "Jelajahi Karya Saya",
      hero_btn_work: "Mari Bekerja Sama",
      hero_meta_1: "Responsif secara bawaan",
      hero_meta_2: "Dibangun dengan HTML, CSS & JS",
      hero_meta_3: "Harga ramah pelajar",
      hero_visual_aria:
        "Ilustrasi antarmuka website yang dibangun dengan kode rapi dan responsif",

      float_code_title: "Kode Rapi",
      float_code_sub: "HTML · CSS · JS",
      float_resp_title: "Responsif",
      float_resp_sub: "Mobile first",

      services_eyebrow: "Layanan",
      services_title: "Website yang dibangun sesuai tujuan Anda",
      services_desc:
        "Website praktis dan mudah dirawat untuk organisasi dan usaha kecil. Setiap proyek dirancang bersama Anda sebelum pengembangan dimulai.",

      s1_title: "Website Profil Organisasi",
      s1_desc:
        "Website profil lengkap untuk organisasi atau ekstrakurikuler — mudah dibaca dan mudah diperbarui.",
      s1_li1: "Info organisasi, visi & misi",
      s1_li2: "Struktur kepengurusan & program kerja",
      s1_li3: "Galeri dokumentasi",
      s1_li4: "Kontak & tautan sosial",

      s2_title: "Landing Page Acara",
      s2_desc:
        "Halaman satu-halaman yang fokus untuk acara, kepanitiaan, atau kompetisi Anda — dibuat untuk menginformasikan dan mengubah pengunjung menjadi peserta.",
      s2_li1: "Jadwal & deskripsi acara",
      s2_li2: "Poster & bagian sponsor",
      s2_li3: "Lokasi & peta tertanam",
      s2_li4: "Ajakan mendaftar",

      s3_title: "Website Portofolio & Prestasi",
      s3_desc:
        "Website dokumentasi untuk kegiatan, proyek, dan prestasi — cocok untuk organisasi, komunitas, maupun individu.",
      s3_li1: "Galeri proyek & kegiatan",
      s3_li2: "Lini masa prestasi",
      s3_li3: "Bagian tim atau anggota",
      s3_li4: "Ringan dan cepat dimuat",

      price_from: "Mulai dari",
      discuss_service: "Diskusikan layanan ini",
      services_note:
        "Harga di atas adalah estimasi awal dan dapat berubah tergantung kompleksitas, fitur, dan kebutuhan klien. Biaya domain dan hosting berbayar tidak termasuk kecuali disepakati terpisah.",

      portfolio_eyebrow: "Portofolio",
      portfolio_title: "Karya konsep & demo",
      portfolio_desc:
        "Semua di bawah ini adalah demo atau desain konsep buatan sendiri, dibuat untuk menunjukkan tata letak, struktur, dan kualitas kode. Tidak ada klien yang diklaim di sini.",

      p1_badge: "Proyek Demo",
      p1_cat: "Profil Organisasi",
      p1_title: "Profil Organisasi Sekolah",
      p1_desc:
        "Konsep website profil untuk organisasi pelajar: visi dan misi, struktur kepengurusan, program kerja, dan galeri dokumentasi.",

      p2_badge: "Desain Konsep",
      p2_cat: "Landing Page Acara",
      p2_title: "Landing Page Acara Tahunan",
      p2_desc:
        "Konsep satu halaman untuk acara sekolah: jadwal, poster, sponsor, lokasi, dan ajakan mendaftar yang jelas.",

      p3_badge: "Proyek Demo",
      p3_cat: "Portofolio & Prestasi",
      p3_title: "Showcase Komunitas Pelajar",
      p3_desc:
        "Konsep website dokumentasi untuk komunitas pelajar: galeri proyek, lini masa prestasi, dan sorotan anggota.",

      btn_preview: "Pratinjau Langsung",
      btn_details: "Lihat Detail",

      about_eyebrow: "Tentang",
      about_title: "Mengubah Ide Menjadi Website Fungsional.",
      about_text1:
        "Saya seorang calon pengembang web yang tertarik membangun solusi digital praktis. Saya fokus membuat website yang tidak hanya menarik secara visual tetapi juga berguna, mudah diakses, dan mudah dinavigasi.",
      about_text2:
        "Saya bekerja dengan teknologi web inti — tanpa framework berat — sehingga hasilnya tetap cepat, ringan, dan mudah dirawat. Setiap proyek dimulai dengan percakapan tentang apa yang sebenarnya Anda butuhkan, bukan sekadar yang sedang tren.",
      about_subtitle: "Kemampuan",

      skill_1: "HTML5",
      skill_2: "CSS3",
      skill_3: "JavaScript",
      skill_4: "Desain Web Responsif",
      skill_5: "Python Dasar",
      skill_6: "Implementasi UI",

      profile_role: "Pengembang Web & Implementator UI",
      profile_focus_label: "Fokus",
      profile_focus_value: "Website responsif",
      profile_stack_label: "Teknologi",
      profile_based_label: "Berbasis di",
      profile_based_value: "Indonesia",
      profile_status_label: "Status",
      profile_status_value: "Terbuka untuk proyek",
      profile_cta: "Mulai Proyek",

      process_eyebrow: "Proses Kerja",
      process_title: "Alur kerja yang sederhana dan transparan",
      process_desc:
        "Empat tahap yang jelas — sehingga Anda selalu tahu apa yang sedang terjadi dan apa yang akan datang.",
      proc1_title: "Diskusi",
      proc1_desc:
        "Memahami kebutuhan, tujuan, dan audiens yang menjadi target website Anda.",
      proc2_title: "Perencanaan",
      proc2_desc:
        "Menentukan struktur, konten, dan fitur sebelum menulis kode.",
      proc3_title: "Pengembangan",
      proc3_desc:
        "Merancang dan mengimplementasikan website dengan kode yang rapi, responsif, dan semantik.",
      proc4_title: "Pengiriman",
      proc4_desc:
        "Pengujian, revisi sesuai kesepakatan, dan penyerahan website jadi kepada Anda.",

      contact_eyebrow: "Kontak",
      contact_title: "Punya Proyek di Pikiran?",
      contact_desc:
        "Mari berdiskusi bagaimana website dapat membantu organisasi atau bisnis Anda.",
      contact_note:
        "Balasan biasanya dalam 1–2 hari kerja. Mohon sertakan deskripsi singkat proyek Anda dan perkiraan tenggat.",

      footer_copy: "Web Studio. Dibangun dengan HTML, CSS, dan JavaScript murni.",
      toast_placeholder: "Tautan demo — ganti dengan URL proyek asli Anda."
    }
  };

  /* ---------- 2. ELEMENT REFS ---------- */
  const header = document.getElementById("navbar");
  const nav = document.getElementById("primary-nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = Array.from(document.querySelectorAll(".nav__link"));
  const backToTop = document.getElementById("backToTop");
  const yearEl = document.getElementById("year");
  const toast = document.getElementById("toast");
  const themeToggle = document.getElementById("themeToggle");
  const langButtons = Array.from(document.querySelectorAll(".lang-switch__btn"));

  const MOBILE_BREAKPOINT = 900;

  /* ---------- 3. STATE ---------- */
  let currentLang = "en";
  let currentTheme = "light";

  try {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "id") currentLang = storedLang;
    else currentLang = "id"; // default per spec

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") currentTheme = storedTheme;
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) currentTheme = "dark";
    else currentTheme = "light";
  } catch (e) { /* localStorage disabled */ }

  /* ---------- 4. THEME ---------- */
  function applyTheme(theme, persist) {
    currentTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (persist) {
      try { localStorage.setItem("theme", currentTheme); } catch (e) {}
    }

    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false");
      const key = currentTheme === "dark" ? "theme_to_light" : "theme_to_dark";
      const label = translations[currentLang][key] || "Toggle theme";
      themeToggle.setAttribute("aria-label", label);
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", currentTheme === "dark" ? "#0b1220" : "#0B1B3A");
  }

  function toggleTheme() {
    const next = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-transition");
    applyTheme(next, true);
    window.setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
    }, 350);
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  /* ---------- 5. LANGUAGE ---------- */
  function applyLanguage(lang, persist) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    if (persist) {
      try { localStorage.setItem("lang", lang); } catch (e) {}
    }

    const t = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
    });

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-meta");
      if (t[key] !== undefined) el.setAttribute("content", t[key]);
    });

    langButtons.forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    updateNavToggleLabel();

    if (themeToggle) {
      const key = currentTheme === "dark" ? "theme_to_light" : "theme_to_dark";
      themeToggle.setAttribute("aria-label", t[key] || "Toggle theme");
    }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"), true);
    });
  });

  /* ---------- 6. NAV TOGGLE (dynamic label) ---------- */
  function updateNavToggleLabel() {
    if (!navToggle || !nav) return;
    const isOpen = nav.classList.contains("is-open");
    const key = isOpen ? "menu_close" : "menu_open";
    const label = translations[currentLang] && translations[currentLang][key];
    if (label) navToggle.setAttribute("aria-label", label);
  }

  function openMenu() {
    if (!nav || !navToggle) return;
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    updateNavToggleLabel();
  }

  function closeMenu() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    updateNavToggleLabel();
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) closeMenu();
      else openMenu();
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
    });
  }

  /* ---------- 7. ACTIVE NAV LINK ---------- */
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  function setActiveLink(id) {
    let matched = false;
    navLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", isActive);
      if (isActive) matched = true;
    });
    return matched;
  }

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 8. SCROLL REVEAL ---------- */
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 9. SMOOTH SCROLL ---------- */
  function headerOffset() { return header ? header.offsetHeight : 0; }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#" || hash.length < 2) return;

      let target = null;
      try { target = document.querySelector(hash); } catch (e) { return; }
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top +
        (window.scrollY || window.pageYOffset) - headerOffset() - 8;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    });
  });

  /* ---------- 10. BACK TO TOP ---------- */
  function handleScrollState() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (backToTop) backToTop.classList.toggle("is-visible", y > 500);
  }
  window.addEventListener("scroll", handleScrollState, { passive: true });
  handleScrollState();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 11. TOAST ---------- */
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2600);
  }

  document.querySelectorAll("[data-placeholder-link]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const msg = translations[currentLang].toast_placeholder;
      showToast(msg);
    });
  });

  /* ---------- 12. INIT ---------- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  applyTheme(currentTheme, false);
  applyLanguage(currentLang, false);
})();
