/* =============================================
   ECHOES OF ADVENTURES — Portfolio JS
   =============================================
   HOW TO CUSTOMISE YOUR IMAGES
   ─────────────────────────────────────────────
   1. Drop your images into /images/
   2. Edit HERO_SLIDES and GALLERY below —
      change `file`, `titleEN`, `titleDE`,
      `format`, `categories`, and `placeholder`
   3. No other code changes needed.
   ============================================= */

/* ─────────────────────────────────────────────
   HERO SLIDES
   file        → filename inside /images/
   titleEN/DE  → slide label (for screen readers)
   placeholder → shown until image loads
───────────────────────────────────────────── */
const HERO_SLIDES = [
  { file: 'hero-bali.jpg',          titleEN: 'Bali',          titleDE: 'Bali',            placeholder: '#C2A98A' },
  { file: 'hero-morocco.jpg',       titleEN: 'Morocco',       titleDE: 'Marokko',         placeholder: '#BA8C70' },
  { file: 'hero-galapagos.jpg',     titleEN: 'Galápagos',     titleDE: 'Galápagos',       placeholder: '#5F9EA6' },
  { file: 'hero-iceland.jpg',       titleEN: 'Iceland',       titleDE: 'Island',          placeholder: '#A2AEB8' },
  { file: 'hero-fuerteventura.jpg', titleEN: 'Fuerteventura', titleDE: 'Fuerteventura',   placeholder: '#C4B28C' },
];

/* ─────────────────────────────────────────────
   GALLERY
   file        → filename inside /images/
   titleEN/DE  → label shown on hover + lightbox
   format      → 'landscape' | 'portrait' | 'square'
   categories  → any combo of:
                 'landscape' | 'people' | 'urban' | 'animals'
   placeholder → shown until image loads
───────────────────────────────────────────── */
const GALLERY = [
  {
    file: 'gallery-bali.jpg',
    titleEN: 'Bali', titleDE: 'Bali',
    format: 'portrait',
    categories: ['landscape', 'people'],
    placeholder: '#C2A98A'
  },
  {
    file: 'gallery-morocco.jpg',
    titleEN: 'Morocco', titleDE: 'Marokko',
    format: 'portrait',
    categories: ['urban', 'people'],
    placeholder: '#BA8C70'
  },
  {
    file: 'gallery-copenhagen.jpg',
    titleEN: 'Copenhagen', titleDE: 'Kopenhagen',
    format: 'square',
    categories: ['urban', 'landscape'],
    placeholder: '#8DA4B4'
  },
  {
    file: 'gallery-croatia.jpg',
    titleEN: 'Croatia', titleDE: 'Kroatien',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#7A9BB4'
  },
  {
    file: 'gallery-fuerteventura.jpg',
    titleEN: 'Fuerteventura', titleDE: 'Fuerteventura',
    format: 'portrait',
    categories: ['landscape'],
    placeholder: '#C4B28C'
  },
  {
    file: 'gallery-portugal.jpg',
    titleEN: 'Portugal', titleDE: 'Portugal',
    format: 'landscape',
    categories: ['landscape', 'urban'],
    placeholder: '#C2A268'
  },
  {
    file: 'gallery-thailand.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'square',
    categories: ['landscape', 'animals'],
    placeholder: '#7A9E8C'
  },
  {
    file: 'gallery-galapagos.jpg',
    titleEN: 'Galápagos', titleDE: 'Galápagos',
    format: 'portrait',
    categories: ['animals', 'landscape'],
    placeholder: '#5F9EA6'
  },
  {
    file: 'gallery-denmark.jpg',
    titleEN: 'Denmark', titleDE: 'Dänemark',
    format: 'landscape',
    categories: ['landscape', 'urban'],
    placeholder: '#9CAAB5'
  },
  {
    file: 'gallery-newzealand.jpg',
    titleEN: 'New Zealand', titleDE: 'Neuseeland',
    format: 'square',
    categories: ['animals', 'landscape'],
    placeholder: '#7B9E88'
  },
  {
    file: 'gallery-iceland.jpg',
    titleEN: 'Iceland', titleDE: 'Island',
    format: 'portrait',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
  {
    file: 'gallery-spain.jpg',
    titleEN: 'Spain', titleDE: 'Spanien',
    format: 'landscape',
    categories: ['urban', 'people', 'landscape'],
    placeholder: '#C8A07A'
  },
];

/* =============================================
   STATE
   ============================================= */
let currentLang  = localStorage.getItem('eoa-lang') || 'en';
let activeFilter = 'all';
let lbItems      = [...GALLERY];
let lbIndex      = 0;
let heroIndex    = 0;
let heroPaused   = false;
let heroTimer    = null;

/* =============================================
   LANGUAGE
   ============================================= */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('eoa-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'de' ? (el.dataset.de || el.dataset.en) : el.dataset.en;
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';

  renderGallery(); // re-render labels
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'de' : 'en');
}

/* =============================================
   HERO SLIDER
   ============================================= */
function buildHeroSlides() {
  const container = document.getElementById('hero-slides');
  if (!container) return;

  HERO_SLIDES.forEach((slide, i) => {
    const el = document.createElement('div');
    el.className = 'hero-slide' + (i === 0 ? ' is-active' : '');
    el.style.backgroundColor = slide.placeholder;
    el.style.backgroundImage  = `url('images/${slide.file}')`;
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', currentLang === 'de' ? slide.titleDE : slide.titleEN);
    container.appendChild(el);
  });

  buildHeroDots();
  startHeroTimer();
  startProgress();
}

function buildHeroDots() {
  const wrap = document.getElementById('hero-dots');
  if (!wrap) return;
  wrap.innerHTML = '';
  HERO_SLIDES.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero-dot' + (i === 0 ? ' is-active' : '');
    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
    btn.addEventListener('click', () => goToSlide(i));
    wrap.appendChild(btn);
  });
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');

  slides[heroIndex]?.classList.remove('is-active');
  dots[heroIndex]?.classList.remove('is-active');

  heroIndex = ((idx % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;

  slides[heroIndex]?.classList.add('is-active');
  dots[heroIndex]?.classList.add('is-active');

  startProgress();
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    if (!heroPaused) goToSlide(heroIndex + 1);
  }, 5000);
}

function startProgress() {
  const bar = document.getElementById('hero-progress');
  if (!bar) return;
  bar.style.transition = 'none';
  bar.style.width = '0%';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    bar.style.transition = 'width 5s linear';
    bar.style.width = '100%';
  }));
}

/* =============================================
   GALLERY
   ============================================= */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const visible = activeFilter === 'all'
    ? GALLERY
    : GALLERY.filter(item => item.categories.includes(activeFilter));

  lbItems = visible; // keep lightbox in sync with filtered view

  grid.innerHTML = '';

  visible.forEach((item, i) => {
    const label = currentLang === 'de' ? item.titleDE : item.titleEN;

    const div = document.createElement('div');
    div.className = `gallery-item gallery-item--${item.format}`;
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', `Open: ${label}`);

    div.innerHTML = `
      <div class="gallery-thumb"
           style="background-color:${item.placeholder};background-image:url('images/${item.file}')"
           role="img"
           aria-label="${label}"></div>
      <div class="gallery-hover" aria-hidden="true">
        <span class="gallery-plus" aria-hidden="true">+</span>
      </div>
      <span class="gallery-dest" aria-hidden="true">${label}</span>
    `;

    const open = () => openLightbox(i);
    div.addEventListener('click', open);
    div.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });

    grid.appendChild(div);
  });

  // No-results state
  if (visible.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'gallery-empty';
    empty.setAttribute('data-en', 'No photos in this category yet.');
    empty.setAttribute('data-de', 'Noch keine Fotos in dieser Kategorie.');
    empty.textContent = currentLang === 'de'
      ? 'Noch keine Fotos in dieser Kategorie.'
      : 'No photos in this category yet.';
    grid.appendChild(empty);
  }
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const active = btn.dataset.filter === filter;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active);
  });
  renderGallery();
}

/* =============================================
   LIGHTBOX
   ============================================= */
function openLightbox(index) {
  lbIndex = index;
  updateLightbox();
  const lb = document.getElementById('lightbox');
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('lb-close').focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function lbNext() {
  lbIndex = (lbIndex + 1) % lbItems.length;
  updateLightbox();
}

function lbPrev() {
  lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length;
  updateLightbox();
}

function updateLightbox() {
  const item    = lbItems[lbIndex];
  const img     = document.getElementById('lb-img');
  const counter = document.getElementById('lb-counter');
  const caption = document.getElementById('lb-caption');
  const label   = currentLang === 'de' ? item.titleDE : item.titleEN;

  img.style.backgroundColor = item.placeholder;
  img.style.backgroundImage = `url('images/${item.file}')`;
  img.className = `lb-img lb-img--${item.format}`;
  img.setAttribute('aria-label', label);

  if (caption) caption.textContent = label;
  if (counter) counter.textContent = `${lbIndex + 1} / ${lbItems.length}`;
}

/* =============================================
   TOUCH SWIPE
   ============================================= */
function addSwipe(el, onLeft, onRight) {
  let startX = null;
  el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) dx < 0 ? onLeft() : onRight();
    startX = null;
  }, { passive: true });
}

/* =============================================
   MOBILE NAV
   ============================================= */
function openMobileNav() {
  document.getElementById('mobile-nav').classList.add('is-open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('is-open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {

  // Build hero
  buildHeroSlides();

  // Gallery
  renderGallery();

  // Language (applies after gallery is rendered)
  applyLanguage(currentLang);

  // Lang toggle
  document.getElementById('lang-toggle')?.addEventListener('click', toggleLanguage);

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  // Lightbox buttons
  document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lb-prev')?.addEventListener('click', lbPrev);
  document.getElementById('lb-next')?.addEventListener('click', lbNext);

  // Close on backdrop
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  // Keyboard nav
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft')  lbPrev();
  });

  // Swipe on hero + lightbox
  addSwipe(
    document.getElementById('hero'),
    () => goToSlide(heroIndex + 1),
    () => goToSlide(heroIndex - 1)
  );
  addSwipe(
    document.getElementById('lightbox'),
    lbNext,
    lbPrev
  );

  // Hero pause on hover
  const hero = document.getElementById('hero');
  hero?.addEventListener('mouseenter', () => { heroPaused = true; });
  hero?.addEventListener('mouseleave', () => { heroPaused = false; });

  // Mobile nav
  document.getElementById('hamburger')?.addEventListener('click', openMobileNav);
  document.getElementById('mobile-nav-close')?.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.mobile-nav-link').forEach(a => {
    a.addEventListener('click', closeMobileNav);
  });

  // Smooth scroll (offset for fixed nav)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
