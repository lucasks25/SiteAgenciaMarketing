// Particles Canvas Animation
const canvas = document.getElementById("particles-canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particles = []
const particleCount = 50

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 2 + 1
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > canvas.width) this.x = 0
    if (this.x < 0) this.x = canvas.width
    if (this.y > canvas.height) this.y = 0
    if (this.y < 0) this.y = canvas.height
  }

  draw() {
    ctx.fillStyle = `rgba(132, 204, 22, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles.forEach((particle) => {
    particle.update()
    particle.draw()
  })

  requestAnimationFrame(animateParticles)
}

initParticles()
animateParticles()

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

// Scroll Progress for Steps
const progressLine = document.getElementById("progress-line")
const stepItems = document.querySelectorAll(".step-item")

function updateStepsProgress() {
  const stepsSection = document.getElementById("como-funciona")
  const rect = stepsSection.getBoundingClientRect()
  const sectionHeight = rect.height
  const sectionTop = rect.top
  const windowHeight = window.innerHeight

  if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
    const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / sectionHeight))
    progressLine.style.height = `${progress * 100}%`

    stepItems.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect()
      if (itemRect.top < windowHeight * 0.8) {
        item.classList.add("visible")
      }
    })
  }
}

window.addEventListener("scroll", updateStepsProgress)
updateStepsProgress()

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active")

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active")
    })

    if (!isActive) {
      item.classList.add("active")
    }
  })
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// CTA Buttons - WhatsApp Integration
const ctaButtons = document.querySelectorAll(".cta-button, .cta-button-large, .cta-button-full, .cta-button-hero")
const whatsappNumber = "5511917092509" // Replace with actual number
const whatsappMessage = "Olá! Gostaria de contratar os serviços da agência."

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  })
})





document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#depoimentos');
  if (!root) return;

  const wrapper   = root.querySelector('.deck-wrapper');
  const deck      = wrapper?.querySelector('.deck');
  const cards     = deck ? [...deck.querySelectorAll('.t-card')] : [];
  const prev      = wrapper?.querySelector('.deck-nav.prev');
  const next      = wrapper?.querySelector('.deck-nav.next');
  const progress  = wrapper?.querySelector('.deck-progress > span');
  const dotsBox   = wrapper?.querySelector('.deck-dots');
  const modeBtns  = root.querySelectorAll('.mode-btn');

  if (!wrapper || !deck || cards.length === 0 || !dotsBox) return;

  // ===== Estado
  let active = 0;
  let autoplayMs = 5500;
  let autoplayId = null;
  let isGrid = false;

  // Animação original ON
  const ENABLE_TILT = true;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTOPLAY_ENABLED = !prefersReducedMotion;

  const mod = (x, n) => ((x % n) + n) % n;

  // Dots
  const dots = cards.map((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.addEventListener('click', () => go(i, true), { passive: true });
    dotsBox.appendChild(b);
    return b;
  });

  const setDots = () => {
    dots.forEach((b, i) => {
      const is = i === active;
      b.classList.toggle('is-active', is);
      b.setAttribute('aria-selected', is ? 'true' : 'false');
    });
  };

  function layout() {
    cards.forEach((el, i) => {
      const diff = i - active;          // -3..3
      el.dataset.pos = diff;
      el.classList.toggle('tilt', ENABLE_TILT && diff === 0);
    });
    cacheActiveRect();
    setDots();
  }

  function go(i, manual = false) {
    active = mod(i, cards.length);
    layout();
    if (manual) restartAutoplay();
  }

  const nextCard = (manual = false) => go(active + 1, manual);
  const prevCard = (manual = false) => go(active - 1, manual);

  // Autoplay
  function startAutoplay() {
    if (!AUTOPLAY_ENABLED || wrapper.dataset.autoplay === 'false' || !progress) return;
    stopAutoplay();
    progress.style.transition = 'none';
    progress.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = `width ${autoplayMs}ms linear`;
        progress.style.width = '100%';
      });
    });
    autoplayId = setTimeout(() => { nextCard(false); startAutoplay(); }, autoplayMs);
  }
  function stopAutoplay() {
    if (autoplayId) clearTimeout(autoplayId);
    autoplayId = null;
    if (progress) {
      progress.style.transition = 'none';
      progress.style.width = '0%';
    }
  }
  const restartAutoplay = () => { stopAutoplay(); startAutoplay(); };

  // Navegação
  if (next) next.addEventListener('click', () => nextCard(true));
  if (prev) prev.addEventListener('click', () => prevCard(true));

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (isGrid) return;
    if (e.key === 'ArrowRight') nextCard(true);
    if (e.key === 'ArrowLeft')  prevCard(true);
  });

  // Drag / Swipe
  let dragging = false, startX = 0, deltaX = 0, ptrId = null;
  deck.addEventListener('pointerdown', (e) => {
    if (isGrid) return;
    dragging = true; startX = e.clientX; deltaX = 0;
    ptrId = e.pointerId; deck.setPointerCapture(ptrId);
    stopAutoplay();
  }, { passive: true });

  deck.addEventListener('pointermove', (e) => {
    if (!dragging || isGrid) return;
    deltaX = e.clientX - startX;
  }, { passive: true });

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    const threshold = 60;
    if (deltaX < -threshold) nextCard(true);
    else if (deltaX > threshold) prevCard(true);
    restartAutoplay();
    if (ptrId !== null) { try { deck.releasePointerCapture(ptrId); } catch {} ptrId = null; }
  };
  deck.addEventListener('pointerup', endDrag, { passive: true });
  deck.addEventListener('pointercancel', endDrag, { passive: true });
  deck.addEventListener('pointerleave', endDrag, { passive: true });

  // Tilt suave no card ativo (como antes)
  const maxTilt = 8; // graus
  let tiltRAF = null, lastX = 0, lastY = 0, activeRect = null;

  function cacheActiveRect() {
    const cur = cards[active];
    activeRect = cur ? cur.getBoundingClientRect() : null;
  }

  deck.addEventListener('mousemove', (e) => {
    if (isGrid || !ENABLE_TILT) return;
    const cur = cards[active];
    if (!cur || !cur.classList.contains('tilt')) return;

    lastX = e.clientX; lastY = e.clientY;
    if (tiltRAF) return;
    tiltRAF = requestAnimationFrame(() => {
      const r = activeRect || cur.getBoundingClientRect();
      const px = (lastX - r.left) / r.width - 0.5;
      const py = (lastY - r.top) / r.height - 0.5;
      cur.style.setProperty('--rx', `${-py * maxTilt}deg`);
      cur.style.setProperty('--ry', `${px  * maxTilt}deg`);
      tiltRAF = null;
    });
  }, { passive: true });

  deck.addEventListener('mouseleave', () => {
    if (!ENABLE_TILT) return;
    const cur = cards[active];
    if (cur) { cur.style.setProperty('--rx', `0deg`); cur.style.setProperty('--ry', `0deg`); }
  }, { passive: true });

  // Toggle Deck/Grid
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      isGrid = btn.dataset.mode === 'grid';
      wrapper.classList.toggle('grid-mode', isGrid);
      btn.setAttribute('aria-pressed', 'true');
      modeBtns.forEach(b => { if (b !== btn) b.setAttribute('aria-pressed', 'false'); });
      if (isGrid) stopAutoplay(); else restartAutoplay();
    });
  });

  // Autoplay pausa/retoma com visibilidade e viewport
  const io = new IntersectionObserver(([entry]) => {
    if (!AUTOPLAY_ENABLED) return;
    if (entry.isIntersecting && entry.intersectionRatio >= 0.25) restartAutoplay();
    else stopAutoplay();
  }, { threshold: [0, 0.25, 1] });
  io.observe(root);

  layout();
  setDots();
  startAutoplay();

  document.addEventListener('visibilitychange', () => {
    if (!AUTOPLAY_ENABLED) return;
    if (document.hidden) stopAutoplay(); else restartAutoplay();
  });

  window.addEventListener('resize', cacheActiveRect);
});
