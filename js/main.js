/**
 * MAIN INTERACTIVE SCRIPT FOR VIDEOGRAPHER PORTFOLIO
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolio();
  initColorSlider();
  initCalculator();
  initModal();
  initContactForm();
  initMobileMenu();
  initFaqAccordion();
  initSoundToggle();
  initLanguageSwitcher();
});

// Current active filter
let currentFilter = 'all';

/**
 * Render portfolio cards and setup category filtering
 */
function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function render(filter) {
    grid.innerHTML = '';
    const filteredProjects = filter === 'all' 
      ? CONFIG.projects 
      : CONFIG.projects.filter(p => p.category === filter);

    filteredProjects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-2xl overflow-hidden glass-panel glass-panel-hover transition-all duration-500 cursor-pointer animate-fade-in flex flex-col';
      card.setAttribute('data-category', proj.category);

      card.innerHTML = `
        <div class="relative w-full aspect-video overflow-hidden bg-black/60">
          <img src="${proj.thumbnail}" alt="${proj.title}" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100" 
               loading="lazy" />
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 flex items-center gap-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-black/70 text-amber-400 backdrop-blur-md border border-amber-500/30">
              <i class="fa-solid fa-tag text-[10px] mr-1"></i>${proj.badge}
            </span>
          </div>

          <div class="absolute top-3 right-3">
            <span class="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-black/70 text-slate-300 backdrop-blur-md">
              <i class="fa-regular fa-clock mr-1 text-xs"></i>${proj.duration}
            </span>
          </div>

          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/15 transition-all">
            <div class="play-hover-btn w-14 h-14 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110">
              <i class="fa-solid fa-play ml-1 text-lg"></i>
            </div>
          </div>

          <!-- Views indicator -->
          <div class="absolute bottom-2 right-3 text-xs text-slate-300 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
            <i class="fa-solid fa-eye text-amber-400 mr-1 text-[11px]"></i>${proj.views}
          </div>
        </div>

        <!-- Details -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-amber-400/90 mb-1.5 font-medium">
              <span>${proj.categoryName}</span>
              <span class="text-slate-400"><i class="fa-solid fa-user-tie text-[10px] mr-1"></i>${proj.client}</span>
            </div>
            <h3 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-2">
              ${proj.title}
            </h3>
            <p class="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">
              ${proj.description}
            </p>
          </div>

          <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span class="truncate max-w-[70%]">
              <i class="fa-solid fa-camera mr-1 text-amber-500/70"></i>${proj.gearUsed.split('|')[0]}
            </span>
            <span class="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-sans font-medium">
              Ko'rish <i class="fa-solid fa-arrow-right text-[11px]"></i>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openVideoModal(proj));
      grid.appendChild(card);
    });
  }

  // Initial render
  render('all');

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-950', 'shadow-lg', 'shadow-amber-500/20');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');
      });
      btn.classList.add('bg-amber-500', 'text-slate-950', 'shadow-lg', 'shadow-amber-500/20');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700');

      currentFilter = btn.getAttribute('data-filter');
      render(currentFilter);
    });
  });
}

/**
 * Interactive Video Modal / Lightbox
 */
function initModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  if (!modal) return;

  function closeModal() {
    modal.classList.add('hidden');
    const iframe = document.getElementById('modal-video-frame');
    if (iframe) iframe.src = '';
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openVideoModal(proj) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-video-frame');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const gear = document.getElementById('modal-gear');
  const software = document.getElementById('modal-software');
  const client = document.getElementById('modal-client');
  const orderBtn = document.getElementById('modal-order-btn');

  if (!modal || !iframe) return;

  iframe.src = proj.videoUrl;
  if (title) title.textContent = proj.title;
  if (desc) desc.textContent = proj.description;
  if (gear) gear.textContent = proj.gearUsed;
  if (software) software.textContent = proj.software;
  if (client) client.textContent = proj.client;

  if (orderBtn) {
    orderBtn.onclick = () => {
      // close modal and scroll to contact form with project name
      modal.classList.add('hidden');
      iframe.src = '';
      document.body.style.overflow = '';
      const typeSelect = document.getElementById('form-type');
      if (typeSelect) {
        typeSelect.value = proj.categoryName;
      }
      const msgInput = document.getElementById('form-msg');
      if (msgInput) {
        msgInput.value = `Assalomu alaykum! Men "${proj.title}" videosi kabi shunga o'xshash loyiha buyurtma qilmoqchi edim.`;
      }
      const contactSection = document.getElementById('boglanish');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/**
 * Interactive Color Grading Before / After Split Slider
 */
function initColorSlider() {
  const container = document.getElementById('color-grading-container');
  const overlay = document.getElementById('color-grading-overlay');
  const handle = document.getElementById('color-grading-handle');

  if (!container || !overlay || !handle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let posX = clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    overlay.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  function onPointerDown(e) {
    isDragging = true;
    updateSlider(e.clientX || (e.touches && e.touches[0].clientX));
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    updateSlider(e.clientX || (e.touches && e.touches[0].clientX));
  }

  function onPointerUp() {
    isDragging = false;
  }

  container.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  container.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

/**
 * Interactive Price Calculator
 */
function initCalculator() {
  const formatSelect = document.getElementById('calc-format');
  const quantityInput = document.getElementById('calc-quantity');
  const quantityVal = document.getElementById('calc-quantity-val');
  const droneCheck = document.getElementById('calc-drone');
  const gradingCheck = document.getElementById('calc-grading');
  const expressCheck = document.getElementById('calc-express');
  const soundCheck = document.getElementById('calc-sound');
  const scriptCheck = document.getElementById('calc-script');
  
  const priceUSDDisplay = document.getElementById('calc-price-usd');
  const priceUZSDisplay = document.getElementById('calc-price-uzs');
  const calcTelegramBtn = document.getElementById('calc-telegram-btn');

  if (!formatSelect || !priceUSDDisplay) return;

  const basePrices = {
    'reels': { usd: 40, uzs: 500000, name: "Reels / TikTok (9:16)" },
    'promo': { usd: 180, uzs: 2300000, name: "Reklama & Promo rolik (1-2 daqiqa)" },
    'love-story': { usd: 280, uzs: 3600000, name: "Love Story / To'y mini-filmi" },
    'events': { usd: 220, uzs: 2800000, name: "Tadbir / Korporativ aftermovie" },
    'full-production': { usd: 450, uzs: 5800000, name: "To'liq Full Production (Klip/Kino)" }
  };

  const USD_TO_UZS = 12900;

  function calculate() {
    const selectedFormat = formatSelect.value;
    const base = basePrices[selectedFormat] || basePrices['reels'];
    const quantity = parseInt(quantityInput.value) || 1;
    if (quantityVal) quantityVal.textContent = quantity;

    let totalUSD = base.usd * quantity;

    // Apply volume discount if quantity >= 3
    if (quantity >= 3) {
      totalUSD = Math.round(totalUSD * 0.85); // 15% discount
    }

    // Additional services
    let extrasList = [];
    if (droneCheck && droneCheck.checked) {
      totalUSD += 40;
      extrasList.push("DJI Dron tasviri ($40)");
    }
    if (gradingCheck && gradingCheck.checked) {
      totalUSD += 35;
      extrasList.push("Kino rang berish (DaVinci Resolve) ($35)");
    }
    if (expressCheck && expressCheck.checked) {
      totalUSD += 45;
      extrasList.push("24 soatda tezkor montaj ($45)");
    }
    if (soundCheck && soundCheck.checked) {
      totalUSD += 25;
      extrasList.push("Maxsus saund-dizayn & ASMR ($25)");
    }
    if (scriptCheck && scriptCheck.checked) {
      totalUSD += 30;
      extrasList.push("Ssenariy va kadrlar rejasi ($30)");
    }

    const totalUZS = totalUSD * USD_TO_UZS;

    priceUSDDisplay.textContent = `$${totalUSD}`;
    if (priceUZSDisplay) {
      priceUZSDisplay.textContent = `≈ ${totalUZS.toLocaleString('uz-UZ')} so'm`;
    }

    // Update Telegram Button Pre-filled Message
    if (calcTelegramBtn) {
      const msg = `Assalomu alaykum, Kamronbek!\nMen portfoliongizdagi narx kalkulyatori orqali loyihani hisobladim:\n\n` +
        `📹 Format: ${base.name}\n` +
        `🔢 Soni: ${quantity} ta\n` +
        `✨ Qo'shimchalar: ${extrasList.length > 0 ? extrasList.join(', ') : "Standart"}\n` +
        `💰 Taxminiy narx: $${totalUSD} (~${totalUZS.toLocaleString('uz-UZ')} so'm)\n\n` +
        `Ushbu loyihani batafsil muhokama qilsak bo'ladimi?`;

      calcTelegramBtn.href = `https://t.me/${CONFIG.profile.telegram}?text=${encodeURIComponent(msg)}`;
    }
  }

  // Add event listeners
  [formatSelect, quantityInput, droneCheck, gradingCheck, expressCheck, soundCheck, scriptCheck].forEach(elem => {
    if (elem) {
      elem.addEventListener('change', calculate);
      elem.addEventListener('input', calculate);
    }
  });

  calculate();
}

/**
 * Handle Package Selection Button Clicks
 */
window.selectPackage = function(packageId) {
  const pkg = CONFIG.packages.find(p => p.id === packageId);
  if (!pkg) return;

  const typeSelect = document.getElementById('form-type');
  if (typeSelect) {
    typeSelect.value = pkg.name;
  }

  const msgInput = document.getElementById('form-msg');
  if (msgInput) {
    msgInput.value = `Assalomu alaykum! Men "${pkg.name}" tarif paketini tanlamoqchiman (${pkg.priceUZS} so'm / $${pkg.priceUSD}).`;
  }

  const contactSection = document.getElementById('boglanish');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`"${pkg.name}" tanlandi. Quyidagi formani to'ldiring!`);
};

/**
 * Contact Form validation and instant Telegram integration
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value || '';
    const phone = document.getElementById('form-phone')?.value || '';
    const type = document.getElementById('form-type')?.value || 'Videotasvir';
    const message = document.getElementById('form-msg')?.value || '';

    if (!name.trim() || !phone.trim()) {
      showToast('Iltimos, ism va telefon raqamingizni kiriting!', 'error');
      return;
    }

    const telegramText = `🎬 Yangi buyurtma (Saytdan):\n\n` +
      `👤 Mijoz: ${name}\n` +
      `📞 Telefon: ${phone}\n` +
      `📋 Loyiha turi: ${type}\n` +
      `💬 Xabar: ${message || "Ko'rsatilmagan"}`;

    const telegramUrl = `https://t.me/${CONFIG.profile.telegram}?text=${encodeURIComponent(telegramText)}`;

    // Show success modal or toast
    showToast(`Rahmat, ${name}! Xabaringiz qabul qilindi. Telegram orqali javob qaytaramiz.`);

    // Open Telegram in a new tab for instant direct conversation
    setTimeout(() => {
      window.open(telegramUrl, '_blank');
      form.reset();
    }, 1200);
  });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isHidden = answer.classList.contains('hidden');
        // close all
        faqItems.forEach(other => {
          other.querySelector('.faq-answer')?.classList.add('hidden');
          other.querySelector('.faq-icon')?.classList.remove('rotate-180');
        });

        if (isHidden) {
          answer.classList.remove('hidden');
          icon?.classList.add('rotate-180');
        }
      });
    }
  });
}

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(l => {
    l.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/**
 * Sound Visualizer & Cinema Ambient Mode
 */
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const bars = document.querySelectorAll('.equalizer-bar');
  if (!soundBtn) return;

  let isPlaying = false;
  // Synthetic cinema hum oscillator using Web Audio API (no external file needed!)
  let audioCtx = null;
  let oscillator = null;
  let gainNode = null;

  soundBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        oscillator = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        // 55Hz cinematic sub drone (A1 note)
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(55, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start();

        soundBtn.classList.add('text-amber-400', 'border-amber-500/40');
        bars.forEach(b => b.style.animationPlayState = 'running');
        showToast('🎬 Kinematik ambient audio yoqildi');
      } catch (err) {
        console.log('Audio API error:', err);
      }
    } else {
      if (oscillator) {
        try { oscillator.stop(); } catch(e) {}
      }
      if (audioCtx) {
        try { audioCtx.close(); } catch(e) {}
      }
      soundBtn.classList.remove('text-amber-400', 'border-amber-500/40');
      bars.forEach(b => b.style.animationPlayState = 'paused');
      showToast('Ovoz o\'chirildi');
    }
  });
}

/**
 * Multi-Language Switcher (UZ / RU / EN)
 */
const TRANSLATIONS = {
  uz: {
    heroBadge: "Kino darajasidagi videotasvir & Rang ustasi",
    heroTitle: "Har bir kadrda his-tuyg'u, har bir soniyada kino sehri",
    heroDesc: "Reklama roliklari, trenddagi Reels/TikTok, unutilmas Love Story va biznes tadbirlari uchun 4K 10-bit formatda professional video xizmatlari.",
    ctaShowreel: "Showreel 2026",
    ctaOrder: "Loyiha boshlash",
    portfolioTitle: "Mening Ishlarim",
    portfolioSubtitle: "So'nggi olingan eng yorqin loyihalar va kino kadrlari to'plami",
    colorTitle: "Rang Berish (Color Grading) Sehri",
    colorSubtitle: "Xom S-Log3 kadrdan to kino teatrlariga munosib to'liq rang berilgan natijagacha taqqoslang",
    calcTitle: "Interaktiv Narx Kalkulyatori",
    calcSubtitle: "Loyihangiz parametrlarini tanlang va bir necha soniyada taxminiy narxni hisoblang"
  },
  ru: {
    heroBadge: "Кинематографичная видеосъемка и колорист",
    heroTitle: "Эмоции в каждом кадре, магия кино в каждой секунде",
    heroDesc: "Профессиональная видеосъемка и монтаж в формате 4K 10-bit: рекламные ролики, вирусные Reels, Love Story и бизнес-мероприятия.",
    ctaShowreel: "Смотреть шоурил",
    ctaOrder: "Начать проект",
    portfolioTitle: "Мои Работы",
    portfolioSubtitle: "Коллекция лучших коммерческих и творческих проектов",
    colorTitle: "Магия Цветокоррекции (Color Grading)",
    colorSubtitle: "Сравните сырой исходник S-Log3 с готовым киноцветом",
    calcTitle: "Интерактивный Калькулятор Цен",
    calcSubtitle: "Выберите параметры вашего проекта и узнайте ориентировочную стоимость"
  },
  en: {
    heroBadge: "Cinematic Filmmaking & Colorist",
    heroTitle: "Emotions in Every Frame, Cinematic Magic in Every Second",
    heroDesc: "High-end 4K 10-bit video production for brands, viral Reels/TikTok, unforgettable Love Stories, and corporate events.",
    ctaShowreel: "Watch Showreel",
    ctaOrder: "Start a Project",
    portfolioTitle: "Selected Works",
    portfolioSubtitle: "A curated showcase of recent commercial and cinematic projects",
    colorTitle: "The Magic of Color Grading",
    colorSubtitle: "Drag the slider to compare raw flat S-Log3 footage with final graded look",
    calcTitle: "Interactive Project Calculator",
    calcSubtitle: "Configure your project parameters and get an instant cost estimate"
  }
};

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      langBtns.forEach(b => {
        b.classList.remove('text-amber-400', 'font-bold');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('text-amber-400', 'font-bold');
      btn.classList.remove('text-slate-400');

      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;

  const mapping = [
    { id: 't-hero-badge', text: t.heroBadge },
    { id: 't-hero-title', text: t.heroTitle },
    { id: 't-hero-desc', text: t.heroDesc },
    { id: 't-cta-showreel', text: t.ctaShowreel },
    { id: 't-cta-order', text: t.ctaOrder },
    { id: 't-portfolio-title', text: t.portfolioTitle },
    { id: 't-portfolio-subtitle', text: t.portfolioSubtitle },
    { id: 't-color-title', text: t.colorTitle },
    { id: 't-color-subtitle', text: t.colorSubtitle },
    { id: 't-calc-title', text: t.calcTitle },
    { id: 't-calc-subtitle', text: t.calcSubtitle }
  ];

  mapping.forEach(m => {
    const el = document.getElementById(m.id);
    if (el) el.textContent = m.text;
  });
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const isErr = type === 'error';
  toast.className = `px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md border text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto flex items-center gap-3 ${
    isErr 
      ? 'bg-rose-950/90 text-rose-200 border-rose-500/40' 
      : 'bg-slate-900/95 text-amber-300 border-amber-500/40 shadow-amber-500/10'
  }`;

  toast.innerHTML = `
    <i class="fa-solid ${isErr ? 'fa-circle-exclamation text-rose-400' : 'fa-circle-check text-amber-400'} text-base"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}
