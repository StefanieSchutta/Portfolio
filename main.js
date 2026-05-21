/* ============================================================
   Echoes of Adventures — main.js
   Language toggle · Lightbox · Mobile menu · Nav scroll
   ============================================================ */

(function () {
  'use strict';

  /* ── Language toggle ─────────────────────────────────────── */
  const STORAGE_KEY = 'eoa-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update all bilingual elements
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = lang === 'de' ? el.dataset.de : el.dataset.en;
    });

    // Update lang toggle buttons (desktop + mobile)
    document.querySelectorAll('.lang-toggle button, .mobile-lang button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
  }

  function initLangToggle() {
    document.querySelectorAll('.lang-toggle button, .mobile-lang button').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
    applyLang(currentLang);
  }

  /* ── Nav scroll ──────────────────────────────────────────── */
  function initNavScroll() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu ─────────────────────────────────────────── */
  function initMobileMenu() {
    const hamburger   = document.querySelector('.hamburger');
    const mobileMenu  = document.querySelector('.mobile-menu');
    const mobileLinks = mobileMenu?.querySelectorAll('a');

    if (!hamburger || !mobileMenu) return;

    const toggle = (open) => {
      hamburger.classList.toggle('open', open);
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggle(!mobileMenu.classList.contains('open')));

    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') toggle(false);
    });
  }

  /* ── Lightbox ─────────────────────────────────────────────── */
  function initLightbox() {
    const overlay    = document.getElementById('lightbox');
    const closeBtn   = overlay?.querySelector('.lightbox-close');
    const imgEl      = overlay?.querySelector('.lightbox-img');
    const placeholder = overlay?.querySelector('.lightbox-placeholder');

    if (!overlay) return;

    const open = (item) => {
      const src   = item.dataset.src;
      const label = item.dataset.label || '';

      if (src && imgEl) {
        imgEl.src = src;
        imgEl.alt = label;
        imgEl.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
      } else {
        if (imgEl) imgEl.style.display = 'none';
        if (placeholder) {
          placeholder.style.display = 'flex';
          placeholder.textContent = label;
        }
      }

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      if (imgEl) imgEl.src = '';
    };

    // Attach to gallery items
    document.querySelectorAll('.gallery-item[data-label]').forEach(item => {
      item.addEventListener('click', () => open(item));
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(item); }
      });
    });

    closeBtn?.addEventListener('click', close);

    overlay.addEventListener('click', e => {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });
  }

  /* ── Gallery filter tabs ─────────────────────────────────── */
  function initFilterTabs() {
    const tabs  = document.querySelectorAll('.filter-tab');
    const items = document.querySelectorAll('.gallery-item');

    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        items.forEach(item => {
          const matches = filter === 'all' || item.dataset.category === filter;
          item.style.display = matches ? '' : 'none';
        });
      });
    });
  }

  /* ── Hero subtle parallax + load ────────────────────────── */
  function initHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    // Trigger CSS scale transition
    requestAnimationFrame(() => hero.classList.add('loaded'));

    // Subtle parallax on scroll
    window.addEventListener('scroll', () => {
      const bg = hero.querySelector('.hero-bg');
      if (!bg) return;
      const offset = window.scrollY * 0.25;
      bg.style.transform = `scale(1) translateY(${offset}px)`;
    }, { passive: true });
  }

  /* ── Smooth scroll for nav links ─────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    initNavScroll();
    initMobileMenu();
    initLightbox();
    initFilterTabs();
    initHero();
    initSmoothScroll();
  });

})();
