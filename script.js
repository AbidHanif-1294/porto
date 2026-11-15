/* ============================================================
   ABID WEB STUDIO — script.js
   Vanilla JavaScript, tanpa dependency.
   Fitur:
   - Sticky navbar state
   - Mobile menu toggle (termasuk Esc & resize)
   - Active nav link saat scroll
   - Scroll reveal animation
   - Smooth scroll dengan offset header
   - Back to top
   - Toast untuk link placeholder
   - Auto-update tahun di footer
============================================================ */

(function () {
  "use strict";

  /* ---------- Element references ---------- */
  const header = document.getElementById("navbar");
  const nav = document.getElementById("primary-nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = Array.from(document.querySelectorAll(".nav__link"));
  const backToTop = document.getElementById("backToTop");
  const yearEl = document.getElementById("year");
  const toast = document.getElementById("toast");

  const MOBILE_BREAKPOINT = 900;

  /* ---------- 1. Tahun footer ---------- */
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- 2. Navbar & back-to-top state ---------- */
  function handleScrollState() {
    const y = window.scrollY || window.pageYOffset;

    if (header) {
      header.classList.toggle("is-scrolled", y > 8);
    }

    if (backToTop) {
      backToTop.classList.toggle("is-visible", y > 500);
    }
  }

  window.addEventListener("scroll", handleScrollState, { passive: true });
  handleScrollState();

  /* ---------- 3. Mobile navigation ---------- */
  function openMenu() {
    if (!nav || !navToggle) return;
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("nav-open");
  }

  function closeMenu() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("nav-open");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Tutup menu saat salah satu link di dalam nav diklik
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Tutup dengan tombol Escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Tutup saat layar diperbesar ke desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu();
      }
    });
  }

  /* ---------- 4. Active nav link saat scroll ---------- */
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  function setActiveLink(id) {
    const matching = navLinks.filter(function (link) {
      return link.getAttribute("href") === "#" + id;
    });

    if (matching.length === 0) return; // section tanpa link nav (mis. #process)

    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      spyObserver.observe(section);
    });
  }

  /* ---------- 5. Scroll reveal ---------- */
  const revealEls = Array.from(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: tampilkan semua tanpa animasi
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- 6. Smooth scroll dengan offset header ---------- */
  function headerOffset() {
    return header ? header.offsetHeight : 0;
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const hash = link.getAttribute("href");

      // Abaikan link kosong atau placeholder
      if (!hash || hash === "#" || hash.length < 2) return;

      let target = null;
      try {
        target = document.querySelector(hash);
      } catch (err) {
        return; // selector tidak valid
      }

      if (!target) return;

      event.preventDefault();

      const top =
        target.getBoundingClientRect().top +
        (window.scrollY || window.pageYOffset) -
        headerOffset() -
        8;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "smooth",
      });
    });
  });

  /* ---------- 7. Back to top ---------- */
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ---------- 8. Toast untuk link placeholder ---------- */
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
      showToast("Demo link — replace with your real project URL.");
    });
  });
})();