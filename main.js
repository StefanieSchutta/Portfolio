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
   titleEN/DE  → decorative label only (slides are aria-hidden)
   placeholder → shown until image loads
───────────────────────────────────────────── */
const HERO_SLIDES = [
  { file: 'hero-bali.jpg',          titleEN: 'Bali',          titleDE: 'Bali',            placeholder: '#C2A98A' },
  { file: 'hero-bangkok.jpg',       titleEN: 'Thailand',       titleDE: 'Thailand',         placeholder: '#BA8C70' },
  { file: 'hero-galapagos.jpg',     titleEN: 'Galápagos',     titleDE: 'Galápagos',       placeholder: '#5F9EA6' },
  { file: 'hero-algarve.jpg',       titleEN: 'Portugal',       titleDE: 'Portugal',          placeholder: '#A2AEB8' },
  { file: 'hero-copenhagen.jpg', titleEN: 'Denmark', titleDE: 'Daenemark',   placeholder: '#C4B28C' },
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
    titleEN: 'Indonesia', titleDE: 'Indonesien',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#C2A98A'
  },
  {
    file: 'gallery-rome.jpg',
    titleEN: 'Italy', titleDE: 'Italien',
    format: 'landscape',
    categories: ['urban'],
    placeholder: '#BA8C70'
  },
  {
    file: 'gallery-nyhavn.jpg',
    titleEN: 'Copenhagen', titleDE: 'Kopenhagen',
    format: 'landscape',
    categories: ['urban'],
    placeholder: '#8DA4B4'
  },
  {
    file: 'gallery-thai-musician.jpg',
    titleEN: 'Musician', titleDE: 'Musiker',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#7A9BB4'
  },
  {
    file: 'gallery-mexican woman.jpg',
    titleEN: 'Mexican Woman', titleDE: 'Mexikanerin',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#C4B28C'
  },
  {
    file: 'gallery-volcano.jpg',
    titleEN: 'Spain', titleDE: 'Spain',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#C2A268'
  },
  {
    file: 'gallery-thai-market.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'landscape',
    categories: ['people'],
    placeholder: '#7A9E8C'
  },
  {
    file: 'gallery-thai girl.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#5F9EA6'
  },
  {
    file: 'gallery-chiang mai urban life.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'landscape',
    categories: ['people'],
    placeholder: '#9CAAB5'
  },
  {
    file: 'gallery-chiang mai temple.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'portrait',
    categories: ['urban'],
    placeholder: '#7B9E88'
  },
  {
    file: 'gallery-boy with snake.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#8EB5C2'
  },
  {
    file: 'gallery-bangkok old town.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'landscape',
    categories: ['urban', 'landscape'],
    placeholder: '#C8A07A'
  },
  {
    file: 'gallery-bangkok old town meets skyline.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'landscape',
    categories: ['urban', 'landscape'],
    placeholder: '#C8A07A'
  },
    {
    file: 'gallery-bangkok living.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'landscape',
    categories: ['urban'],
    placeholder: '#C8A07A'
  },
    {
    file: 'gallery-traditional thai.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-mallorca-coast.jpg',
    titleEN: 'Spain', titleDE: 'Spain',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#C8A07A'
  },
    {
    file: 'gallery-mallorca.jpg',
    titleEN: 'Spain', titleDE: 'Spain',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
   {
    file: 'gallery-croatia cat.jpg',
    titleEN: 'Croatia', titleDE: 'Kroatien',
    format: 'landscape',
    categories: ['animals'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-croatia island.jpg',
    titleEN: 'Croatia', titleDE: 'Kroatien',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-croatia landscape.jpg',
    titleEN: 'Croatia', titleDE: 'Kroatien',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-marrakesh blue man.jpg',
    titleEN: 'Morocco', titleDE: 'Marokko',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-marrakesh red man.jpg',
    titleEN: 'Morocco', titleDE: 'Marokko',
    format: 'portrait',
    categories: ['people'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-spanish backyard.jpg',
    titleEN: 'Spain', titleDE: 'Spanien',
    format: 'portrait',
    categories: ['urban'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-ronda spain.jpg',
    titleEN: 'Spain', titleDE: 'Spanien',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-morroco surf.jpg',
    titleEN: 'Morocco', titleDE: 'Marokko',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-superkilen1.jpg',
    titleEN: 'Denmark', titleDE: 'Dänemark',
    format: 'portrait',
    categories: ['urban'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-superkilen2.jpg',
    titleEN: 'Denmark', titleDE: 'Dänemark',
    format: 'portrait',
    categories: ['urban'],
    placeholder: '#8EB5C2'
  },
    {
    file: 'gallery-thailand beach.jpg',
    titleEN: 'Thailand', titleDE: 'Thailand',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
   {
    file: 'gallery-mexico city',
    titleEN: 'Mexico', titleDE: 'Mexiko',
    format: 'landscape',
    categories: ['landscape','people'],
    placeholder: '#8EB5C2'
  },
   {
    file: 'gallery-bali-waterfall',
    titleEN: 'Bali', titleDE: 'Bali',
    format: 'portrait',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
   {
    file: 'gallery-madeira sunrise',
    titleEN: 'Madeira', titleDE: 'Madeira',
    format: 'landscape',
    categories: ['landscape'],
    placeholder: '#8EB5C2'
  },
   {
    file: 'gallery-monkey looking up',
    titleEN: 'Bali', titleDE: 'Bali',
    format: 'portrait',
    categories: ['animals'],
    placeholder: '#8EB5C2'
  },
   {
    file: 'gallery-penguin on rock',
    titleEN: 'Galapagos', titleDE: 'Galapagos',
    format: 'portrait',
    categories: ['animals'],
    placeholder: '#8EB5C2'
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

  img.style.backgroundColor = 'transparent';
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
  if (!el) return; // subpages have no hero/lightbox
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

  // Sticky nav on scroll
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Back to top
  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Hero arrows
  document.getElementById('hero-prev')?.addEventListener('click', () => goToSlide(heroIndex - 1));
  document.getElementById('hero-next')?.addEventListener('click', () => goToSlide(heroIndex + 1));

});
