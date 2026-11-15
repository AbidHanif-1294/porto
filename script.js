/* ============================================================
   WEB STUDIO — script.js
   Fitur: navbar, mobile menu, active nav, scroll reveal,
          smooth scroll, back-to-top, toast, i18n (EN/ID),
          theme switch, package selection + WhatsApp integration.
============================================================ */

(function () {
  "use strict";

  /* ---------- CONFIG ---------- */
  const CONFIG = {
    // Format internasional tanpa +, spasi, atau tanda hubung
    whatsappNumber: "628174721097"
  };

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
      nav_packages: "Packages",
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

      /* ===== Packages ===== */
      packages_eyebrow: "Packages",
      packages_title: "Choose a package that fits your needs",
      packages_desc:
        "Clear options from simple landing pages to fully custom builds. Final price and scope are always confirmed after consultation.",
      packages_note:
        "Prices are early estimates and may change based on design complexity, page count, features, and technical requirements. Paid domain, hosting, and third-party services are not included unless agreed.",

      pkg_recommended: "Recommended",
      pkg_select: "View Details & Select",

      pkg_basic_name: "Basic Package",
      pkg_basic_price: "Rp50.000 – 100.000",
      pkg_basic_tagline: "Simple, informative site for small organizations.",
      pkg_basic_f1: "Simple website or landing page",
      pkg_basic_f2: "1–3 pages",
      pkg_basic_f3: "Responsive layout",
      pkg_basic_f4: "Basic navigation",
      pkg_basic_f5: "3–5 revision rounds",
      pkg_basic_pages: "1–3 pages",
      pkg_basic_rev: "3–5 revision rounds",
      pkg_basic_note:
        "Suitable for small organizations, communities, or individuals who need a simple informational website.",

      pkg_standard_name: "Standard Package",
      pkg_standard_price: "Rp100.000 – 150.000",
      pkg_standard_tagline: "Interactive site with essential JavaScript features.",
      pkg_standard_f1: "Website with basic interactive features",
      pkg_standard_f2: "1–4 pages",
      pkg_standard_f3: "Responsive design",
      pkg_standard_f4: "Interactive navigation",
      pkg_standard_f5: "JavaScript implementation",
      pkg_standard_f6: "Simple animations & interactions",
      pkg_standard_f7: "7–8 revision rounds",
      pkg_standard_pages: "1–4 pages",
      pkg_standard_rev: "7–8 revision rounds",
      pkg_standard_note:
        "Suitable for organizations or communities that need a fuller website with some interactive features.",

      pkg_premium_name: "Premium Package",
      pkg_premium_price: "Starting from Rp200.000",
      pkg_premium_tagline: "Advanced interactive site with custom UI implementation.",
      pkg_premium_f1: "Advanced interactive features",
      pkg_premium_f2: "1–5 pages",
      pkg_premium_f3: "Custom UI implementation",
      pkg_premium_f4: "Design tailored to your needs",
      pkg_premium_f5: "Complex interactions & animations",
      pkg_premium_f6: "Up to 10 revision rounds",
      pkg_premium_pages: "1–5 pages",
      pkg_premium_rev: "Up to 10 revision rounds",
      pkg_premium_note:
        "Suitable for organizations or businesses that need a more exclusive look and a richer interactive experience.",

      pkg_custom_name: "Custom Development",
      pkg_custom_price: "Starting from Rp200.000",
      pkg_custom_tagline: "Fully tailored to your specific project needs.",
      pkg_custom_f1: "Structure tailored to your needs",
      pkg_custom_f2: "Flexible page count",
      pkg_custom_f3: "Custom features on request",
      pkg_custom_f4: "Custom design & implementation",
      pkg_custom_f5: "Scope & revisions agreed upfront",
      pkg_custom_pages: "Flexible page count",
      pkg_custom_rev: "Agreed after consultation",
      pkg_custom_note:
        "Suitable for clients with special needs or projects that cannot be covered by the standard packages. Backend features, databases, authentication, payment gateways, or external integrations are only available if agreed and technically feasible.",

      /* ===== Modal + form ===== */
      modal_eyebrow: "Package Details",
      modal_pages_label: "Pages",
      modal_rev_label: "Revisions",
      modal_features_label: "What's included",
      modal_form_title: "Project Details",
      modal_custom_title: "Custom Project Details",
      modal_order_btn: "Order This Package",
      modal_cancel: "Cancel",
      modal_hint: "You'll be redirected to WhatsApp. Review the message before sending.",
      modal_close_aria: "Close dialog",

      form_name: "Your Name *",
      form_name_ph: "e.g. Abid Hanif",
      form_org: "Organization / Business Name",
      form_org_ph: "e.g. SMAN 1 Example",
      form_webtype: "Website Type",
      form_webtype_ph: "e.g. Organization profile",
      form_desc: "Describe Your Needs *",
      form_desc_ph: "Briefly describe what you need...",
      form_ref: "Reference Website (optional)",
      form_ref_ph: "https://example.com",
      form_custom_features: "Special Features Requested",
      form_custom_features_ph: "e.g. Contact form, gallery, member list",
      form_custom_budget: "Estimated Budget",
      form_custom_budget_ph: "e.g. Rp250.000",
      form_custom_pages: "Estimated Pages",
      form_custom_pages_ph: "e.g. 5–7 pages",

      form_error_name: "Please enter your name",
      form_error_desc: "Please describe your needs",
      form_error_url: "Please enter a valid URL (starting with https://)",

      wa_intro: "Hello Abid Web Studio!",
      wa_intro2:
        "I'm interested in ordering a website and would like to consult further.",
      wa_selected_header: "SELECTED PACKAGE",
      wa_pkg_name: "Package Name",
      wa_pkg_price: "Estimated Price",
      wa_pkg_pages: "Number of Pages",
      wa_needs_header: "WEBSITE NEEDS",
      wa_form_name: "Name",
      wa_form_org: "Organization / Business",
      wa_form_webtype: "Website Type",
      wa_form_desc: "Description of Needs",
      wa_form_ref: "Reference Website",
      wa_form_features: "Special Features",
      wa_form_budget: "Estimated Budget",
      wa_form_custom_pages: "Estimated Pages",
      wa_outro: "Could you please provide more information about:",
      wa_outro_1: "1. Final estimated cost",
      wa_outro_2: "2. Estimated timeline",
      wa_outro_3: "3. Development process details",
      wa_thanks: "Thank you!",
      wa_not_filled: "(not specified)",

      /* ===== Portfolio ===== */
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

      /* ===== About ===== */
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

      /* ===== Process ===== */
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

      /* ===== Contact + footer ===== */
      contact_eyebrow: "Contact",
      contact_title: "Have a Project in Mind?",
      contact_desc: "Let's discuss how a website can help your organization or business.",
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
      nav_packages: "Paket",
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

      /* ===== Packages ===== */
      packages_eyebrow: "Paket",
      packages_title: "Pilih paket yang sesuai dengan kebutuhan Anda",
      packages_desc:
        "Pilihan jelas dari landing page sederhana hingga pengembangan sepenuhnya khusus. Harga dan ruang lingkup akhir selalu dikonfirmasi setelah konsultasi.",
      packages_note:
        "Harga merupakan estimasi awal dan dapat berubah berdasarkan kompleksitas desain, jumlah halaman, fitur, dan kebutuhan teknis. Domain, hosting berbayar, dan layanan pihak ketiga tidak termasuk kecuali disepakati.",

      pkg_recommended: "Direkomendasikan",
      pkg_select: "Lihat Detail & Pilih Paket",

      pkg_basic_name: "Paket Dasar",
      pkg_basic_price: "Rp50.000 – 100.000",
      pkg_basic_tagline: "Website sederhana dan informatif untuk organisasi kecil.",
      pkg_basic_f1: "Website sederhana atau landing page",
      pkg_basic_f2: "1–3 halaman",
      pkg_basic_f3: "Layout responsif",
      pkg_basic_f4: "Navigasi dasar",
      pkg_basic_f5: "3–5 putaran revisi",
      pkg_basic_pages: "1–3 halaman",
      pkg_basic_rev: "3–5 putaran revisi",
      pkg_basic_note:
        "Cocok untuk organisasi kecil, komunitas, atau individu yang membutuhkan website informatif sederhana.",

      pkg_standard_name: "Paket Standar",
      pkg_standard_price: "Rp100.000 – 150.000",
      pkg_standard_tagline: "Website interaktif dengan fitur JavaScript dasar.",
      pkg_standard_f1: "Website dengan fitur interaktif dasar",
      pkg_standard_f2: "1–4 halaman",
      pkg_standard_f3: "Responsive design",
      pkg_standard_f4: "Navigasi interaktif",
      pkg_standard_f5: "Implementasi JavaScript",
      pkg_standard_f6: "Animasi & interaksi sederhana",
      pkg_standard_f7: "7–8 putaran revisi",
      pkg_standard_pages: "1–4 halaman",
      pkg_standard_rev: "7–8 putaran revisi",
      pkg_standard_note:
        "Cocok untuk organisasi atau komunitas yang membutuhkan website lebih lengkap dengan beberapa fitur interaktif.",

      pkg_premium_name: "Paket Premium",
      pkg_premium_price: "Mulai dari Rp200.000",
      pkg_premium_tagline: "Website interaktif lanjutan dengan custom UI implementation.",
      pkg_premium_f1: "Fitur interaktif lanjutan",
      pkg_premium_f2: "1–5 halaman",
      pkg_premium_f3: "Custom UI implementation",
      pkg_premium_f4: "Desain disesuaikan dengan kebutuhan",
      pkg_premium_f5: "Interaksi & animasi kompleks",
      pkg_premium_f6: "Maksimal 10 putaran revisi",
      pkg_premium_pages: "1–5 halaman",
      pkg_premium_rev: "Maksimal 10 putaran revisi",
      pkg_premium_note:
        "Cocok untuk organisasi atau bisnis yang membutuhkan tampilan lebih eksklusif dan pengalaman pengguna yang lebih interaktif.",

      pkg_custom_name: "Pengembangan Khusus",
      pkg_custom_price: "Mulai dari Rp200.000",
      pkg_custom_tagline: "Sepenuhnya disesuaikan dengan kebutuhan proyek Anda.",
      pkg_custom_f1: "Struktur sesuai kebutuhan",
      pkg_custom_f2: "Jumlah halaman fleksibel",
      pkg_custom_f3: "Fitur khusus berdasarkan permintaan",
      pkg_custom_f4: "Desain & implementasi disesuaikan",
      pkg_custom_f5: "Ruang lingkup & revisi disepakati di awal",
      pkg_custom_pages: "Jumlah halaman fleksibel",
      pkg_custom_rev: "Disepakati setelah konsultasi",
      pkg_custom_note:
        "Cocok untuk klien dengan kebutuhan khusus atau proyek yang tidak dapat dipenuhi paket standar. Fitur backend, database, autentikasi, payment gateway, atau integrasi eksternal hanya tersedia jika disepakati dan memungkinkan secara teknis.",

      /* ===== Modal + form ===== */
      modal_eyebrow: "Detail Paket",
      modal_pages_label: "Halaman",
      modal_rev_label: "Revisi",
      modal_features_label: "Yang termasuk",
      modal_form_title: "Detail Proyek",
      modal_custom_title: "Detail Proyek Khusus",
      modal_order_btn: "Pesan Paket Ini",
      modal_cancel: "Batal",
      modal_hint: "Anda akan diarahkan ke WhatsApp. Periksa pesan sebelum dikirim.",
      modal_close_aria: "Tutup dialog",

      form_name: "Nama Anda *",
      form_name_ph: "contoh: Abid Hanif",
      form_org: "Nama Organisasi / Bisnis",
      form_org_ph: "contoh: SMAN 1 Contoh",
      form_webtype: "Jenis Website",
      form_webtype_ph: "contoh: Profil organisasi",
      form_desc: "Deskripsi Kebutuhan *",
      form_desc_ph: "Jelaskan secara singkat kebutuhan Anda...",
      form_ref: "Referensi Website (opsional)",
      form_ref_ph: "https://contoh.com",
      form_custom_features: "Fitur Khusus yang Diinginkan",
      form_custom_features_ph: "contoh: Form kontak, galeri, daftar anggota",
      form_custom_budget: "Estimasi Anggaran",
      form_custom_budget_ph: "contoh: Rp250.000",
      form_custom_pages: "Estimasi Jumlah Halaman",
      form_custom_pages_ph: "contoh: 5–7 halaman",

      form_error_name: "Mohon isi nama Anda",
      form_error_desc: "Mohon jelaskan kebutuhan Anda",
      form_error_url: "Mohon isi URL yang valid (diawali https://)",

      wa_intro: "Halo Abid Web Studio!",
      wa_intro2:
        "Saya tertarik untuk memesan layanan pembuatan website dan ingin berkonsultasi lebih lanjut.",
      wa_selected_header: "DETAIL PEMESANAN",
      wa_pkg_name: "Nama Paket",
      wa_pkg_price: "Estimasi Harga",
      wa_pkg_pages: "Jumlah Halaman",
      wa_needs_header: "KEBUTUHAN WEBSITE",
      wa_form_name: "Nama",
      wa_form_org: "Nama Organisasi/Bisnis",
      wa_form_webtype: "Jenis Website",
      wa_form_desc: "Deskripsi Kebutuhan",
      wa_form_ref: "Referensi Website",
      wa_form_features: "Fitur Khusus",
      wa_form_budget: "Estimasi Anggaran",
      wa_form_custom_pages: "Estimasi Jumlah Halaman",
      wa_outro: "Mohon informasi lebih lanjut mengenai:",
      wa_outro_1: "1. Estimasi biaya akhir",
      wa_outro_2: "2. Waktu pengerjaan",
      wa_outro_3: "3. Detail proses pengerjaan",
      wa_thanks: "Terima kasih!",
      wa_not_filled: "(belum diisi)",

      /* ===== Portfolio ===== */
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

      /* ===== About ===== */
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

      /* ===== Process ===== */
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

      /* ===== Contact + footer ===== */
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
    else currentLang = "id";

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") currentTheme = storedTheme;
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) currentTheme = "dark";
    else currentTheme = "light";
  } catch (e) { /* localStorage disabled */ }

  /* ---------- 4. PACKAGE META ---------- */
  const packageMeta = {
    basic: {
      nameKey: "pkg_basic_name",
      priceKey: "pkg_basic_price",
      descKey: "pkg_basic_tagline",
      pagesKey: "pkg_basic_pages",
      revKey: "pkg_basic_rev",
      features: ["pkg_basic_f1", "pkg_basic_f2", "pkg_basic_f3", "pkg_basic_f4", "pkg_basic_f5"],
      noteKey: "pkg_basic_note"
    },
    standard: {
      nameKey: "pkg_standard_name",
      priceKey: "pkg_standard_price",
      descKey: "pkg_standard_tagline",
      pagesKey: "pkg_standard_pages",
      revKey: "pkg_standard_rev",
      features: ["pkg_standard_f1", "pkg_standard_f2", "pkg_standard_f3", "pkg_standard_f4", "pkg_standard_f5", "pkg_standard_f6", "pkg_standard_f7"],
      noteKey: "pkg_standard_note"
    },
    premium: {
      nameKey: "pkg_premium_name",
      priceKey: "pkg_premium_price",
      descKey: "pkg_premium_tagline",
      pagesKey: "pkg_premium_pages",
      revKey: "pkg_premium_rev",
      features: ["pkg_premium_f1", "pkg_premium_f2", "pkg_premium_f3", "pkg_premium_f4", "pkg_premium_f5", "pkg_premium_f6"],
      noteKey: "pkg_premium_note"
    },
    custom: {
      nameKey: "pkg_custom_name",
      priceKey: "pkg_custom_price",
      descKey: "pkg_custom_tagline",
      pagesKey: "pkg_custom_pages",
      revKey: "pkg_custom_rev",
      features: ["pkg_custom_f1", "pkg_custom_f2", "pkg_custom_f3", "pkg_custom_f4", "pkg_custom_f5"],
      noteKey: "pkg_custom_note"
    }
  };

  let currentPackageId = null;
  let modalTrigger = null;

  function getEl(id) { return document.getElementById(id); }

  /* ---------- 5. THEME ---------- */
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

  /* ---------- 6. LANGUAGE ---------- */
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
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

    // Refresh open package modal
    if (currentPackageId) {
      const modalEl = getEl("packageModal");
      if (modalEl && !modalEl.hidden) renderModalDetails(currentPackageId);
    }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"), true);
    });
  });

  /* ---------- 7. NAV TOGGLE ---------- */
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

  /* ---------- 8. ACTIVE NAV ---------- */
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 9. SCROLL REVEAL ---------- */
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

  /* ---------- 10. SMOOTH SCROLL ---------- */
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

  /* ---------- 11. BACK TO TOP ---------- */
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

  /* ---------- 12. TOAST ---------- */
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
      showToast(translations[currentLang].toast_placeholder);
    });
  });

  /* ---------- 13. PACKAGE MODAL ---------- */
  function renderModalDetails(packageId) {
    const t = translations[currentLang];
    const meta = packageMeta[packageId];
    const el = getEl("modalDetails");
    if (!meta || !el) return;

    const featuresHtml = meta.features.map(function (k) {
      return "<li>" + (t[k] || "") + "</li>";
    }).join("");

    el.innerHTML =
      '<p class="modal__eyebrow">' + t.modal_eyebrow + "</p>" +
      '<h2 class="modal__title" id="modalTitle">' + t[meta.nameKey] + "</h2>" +
      '<p class="modal__price">' + t[meta.priceKey] + "</p>" +
      '<p class="modal__desc">' + t[meta.descKey] + "</p>" +
      '<dl class="modal__specs">' +
        "<div><dt>" + t.modal_pages_label + "</dt><dd>" + t[meta.pagesKey] + "</dd></div>" +
        "<div><dt>" + t.modal_rev_label + "</dt><dd>" + t[meta.revKey] + "</dd></div>" +
      "</dl>" +
      '<h3 class="modal__subtitle">' + t.modal_features_label + "</h3>" +
      '<ul class="modal__features">' + featuresHtml + "</ul>" +
      '<p class="modal__note">' + t[meta.noteKey] + "</p>";
  }

  function openPackageModal(packageId, trigger) {
    if (!packageMeta[packageId]) return;
    const modal = getEl("packageModal");
    const customFields = getEl("customFields");
    if (!modal) return;

    currentPackageId = packageId;
    modalTrigger = trigger || document.activeElement;

    renderModalDetails(packageId);
    if (customFields) customFields.hidden = (packageId !== "custom");

    modal.hidden = false;
    document.body.classList.add("modal-open");

    const firstInput = getEl("formName");
    if (firstInput) {
      window.setTimeout(function () { firstInput.focus(); }, 60);
    }
  }

  function closePackageModal() {
    const modal = getEl("packageModal");
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    currentPackageId = null;
    if (modalTrigger && typeof modalTrigger.focus === "function") {
      modalTrigger.focus();
    }
    modalTrigger = null;
  }

  function clearFormErrors() {
    document.querySelectorAll(".form-error").forEach(function (el) { el.textContent = ""; });
    document.querySelectorAll(".form-field.has-error").forEach(function (el) {
      el.classList.remove("has-error");
    });
  }

  function setFormError(fieldId, message) {
    const input = getEl(fieldId);
    const error = document.querySelector('[data-error-for="' + fieldId + '"]');
    if (error) error.textContent = message;
    if (input && input.closest(".form-field")) {
      input.closest(".form-field").classList.add("has-error");
    }
  }

  function isValidUrl(str) {
    try { new URL(str); return true; } catch (e) { return false; }
  }

  function validatePackageForm() {
    clearFormErrors();
    const t = translations[currentLang];
    let valid = true;

    const name = getEl("formName").value.trim();
    const desc = getEl("formDesc").value.trim();
    const ref = getEl("formRef").value.trim();

    if (!name) { setFormError("formName", t.form_error_name); valid = false; }
    if (!desc) { setFormError("formDesc", t.form_error_desc); valid = false; }
    if (ref && !isValidUrl(ref)) { setFormError("formRef", t.form_error_url); valid = false; }

    return valid;
  }

  function buildWhatsAppMessage(packageId, data) {
    const t = translations[currentLang];
    const meta = packageMeta[packageId];
    if (!meta) return "";

    const lines = [];
    lines.push(t.wa_intro);
    lines.push("");
    lines.push(t.wa_intro2);
    lines.push("");
    lines.push(t.wa_selected_header);
    lines.push(t.wa_pkg_name + ": " + t[meta.nameKey]);
    lines.push(t.wa_pkg_price + ": " + t[meta.priceKey]);
    lines.push(t.wa_pkg_pages + ": " + t[meta.pagesKey]);
    lines.push("");
    lines.push(t.wa_needs_header);
    lines.push(t.wa_form_name + ": " + (data.name || t.wa_not_filled));

    if (data.org) lines.push(t.wa_form_org + ": " + data.org);
    if (data.webType) lines.push(t.wa_form_webtype + ": " + data.webType);
    lines.push(t.wa_form_desc + ": " + (data.desc || t.wa_not_filled));
    if (data.ref) lines.push(t.wa_form_ref + ": " + data.ref);

    if (packageId === "custom") {
      if (data.features) lines.push(t.wa_form_features + ": " + data.features);
      if (data.budget) lines.push(t.wa_form_budget + ": " + data.budget);
      if (data.customPages) lines.push(t.wa_form_custom_pages + ": " + data.customPages);
    }

    lines.push("");
    lines.push(t.wa_outro);
    lines.push(t.wa_outro_1);
    lines.push(t.wa_outro_2);
    lines.push(t.wa_outro_3);
    lines.push("");
    lines.push(t.wa_thanks);

    return lines.join("\n");
  }

  function openWhatsApp(packageId, data) {
    const message = buildWhatsAppMessage(packageId, data);
    const url = "https://wa.me/" + CONFIG.whatsappNumber +
      "?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.querySelectorAll("[data-package-select]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openPackageModal(btn.getAttribute("data-package-select"), btn);
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(function (el) {
    el.addEventListener("click", closePackageModal);
  });

  document.addEventListener("keydown", function (e) {
    const modal = getEl("packageModal");
    if (e.key === "Escape" && modal && !modal.hidden) closePackageModal();
  });

  const packageFormEl = getEl("packageForm");
  if (packageFormEl) {
    packageFormEl.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!currentPackageId) return;
      if (!validatePackageForm()) return;

      const data = {
        name: getEl("formName").value.trim(),
        org: getEl("formOrg").value.trim(),
        webType: getEl("formWebType").value.trim(),
        desc: getEl("formDesc").value.trim(),
        ref: getEl("formRef").value.trim(),
        features: getEl("customFeatures").value.trim(),
        budget: getEl("customBudget").value.trim(),
        customPages: getEl("customPages").value.trim()
      };

      openWhatsApp(currentPackageId, data);
    });
  }

  /* ---------- 14. INIT ---------- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  applyTheme(currentTheme, false);
  applyLanguage(currentLang, false);
})();
