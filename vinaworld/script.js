/* ============================================================
   VEENA WORLD — INTERACTIVE LOGIC
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // ---- DATA ----
  const tours = [
    { img:'images/dest-rajasthan.png', title:'Highlights of Rajasthan', duration:'6 Days / 5 Nights', price:'₹39,000', badge:'Trending', from:'per person' },
    { img:'images/dest-kerala.png', title:'Highlights of Kerala', duration:'6 Days / 5 Nights', price:'₹38,000', badge:'', from:'per person' },
    { img:'images/dest-switzerland.png', title:'Swiss Paris Italy', duration:'9 Days / 8 Nights', price:'₹3,05,000', badge:'Best Seller', from:'Ex-Mumbai' },
    { img:'images/dest-thailand.png', title:'Best of Thailand', duration:'6 Days / 5 Nights', price:'₹79,000', badge:'', from:'per person' },
    { img:'images/dest-dubai.png', title:'Dubai Abu Dhabi', duration:'5 Days / 4 Nights', price:'₹99,000', badge:'Sale', from:'Ex-Mumbai' },
    { img:'images/dest-andaman.png', title:'Highlights of Andaman', duration:'5 Days / 4 Nights', price:'₹55,000', badge:'', from:'per person' },
    { img:'images/dest-shimla.png', title:'Shimla Manali', duration:'6 Days / 5 Nights', price:'₹36,000', badge:'Trending', from:'per person' },
    { img:'images/dest-singapore.png', title:'Highlights of Singapore', duration:'4 Days / 3 Nights', price:'₹99,000', badge:'', from:'Ex-Mumbai' },
  ];

  const specialties = [
    { icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>', title:"Women's Special", sub:'53 Departures' },
    { icon:'<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>', title:'Honeymoon Special', sub:'17 Departures' },
    { icon:'<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>', title:"Seniors' Special", sub:'35 Departures' },
    { icon:'<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>', title:'Family Tours', sub:'1379 Departures' },
    { icon:'<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>', title:'Corporate Travel', sub:'MICE & Events' },
    { icon:'<path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>', title:'Road Trips', sub:'31 Departures' },
  ];

  const usps = [
    { icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>', title:'All-Inclusive Pricing', desc:'Accommodation, meals, transport & sightseeing — everything included in one price.' },
    { icon:'<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>', title:'Expert Tour Managers', desc:'350+ dedicated tour managers specializing in India and World tours for seamless experiences.' },
    { icon:'<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>', title:'Best Value Itinerary', desc:'Our dedicated research team curates the best value-for-money itineraries to every corner of the world.' },
    { icon:'<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>', title:'To & Fro Airfare', desc:'Tours are inclusive of airfare from many hubs within India unless you pick joining-leaving option.' },
  ];

  const reviews = [
    { quote:'It was an awesome experience! Perfect time management, excellent food, nice hotels, and good coordination. All credit goes to our Tour Manager.', author:'Sameer K.', tour:'Jaipur Udaipur Tour', stars:5 },
    { quote:'The entire tour was thoughtfully planned and excellently executed. Amazing experience!! The food, logistics, and attention to detail were outstanding.', author:'Kanika M.', tour:'Best of Vietnam', stars:5 },
    { quote:'This was our first international trip with Veena World and it was absolutely fantastic. Everything was so well organized. Will definitely travel again!', author:'Rutuja P.', tour:'Best of Thailand', stars:5 },
    { quote:'Very nice experience. All sightseeing was too good. The celebration and the traditional lunch arrangements were exceptional. Highly recommended!', author:'Maithili S.', tour:'Coorg Mysore Bengaluru', stars:5 },
    { quote:'Excellent tour arranged by Veena World. The tour was smooth and memorable. Tour Manager was too good. Thanks for a lovely trip across Kerala!', author:'Ashok T.', tour:'Highlights of Kerala', stars:5 },
  ];

  // ---- HERO CAROUSEL ----
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroDots');
  let currentSlide = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dotsContainer.children[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    dotsContainer.children[currentSlide].classList.add('active');
  }

  setInterval(() => goToSlide((currentSlide + 1) % slides.length), 5000);

  // ---- STICKY HEADER ----
  const header = document.getElementById('mainHeader');
  const heroEl = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > heroEl.offsetHeight - 80);
  });

  // ---- MOBILE MENU ----
  document.getElementById('mobileToggle').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });

  // ---- BOOKING TABS ----
  document.querySelectorAll('.booking-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.booking-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ---- RENDER TOUR CARDS ----
  const tourGrid = document.getElementById('tourGrid');
  tours.forEach(t => {
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.innerHTML = `
      <div class="tour-card__image">
        <img class="lazy-img" data-src="${t.img}" alt="${t.title}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23eee' width='400' height='200'/%3E%3C/svg%3E">
        ${t.badge ? `<span class="tour-card__badge">${t.badge}</span>` : ''}
      </div>
      <div class="tour-card__body">
        <div class="tour-card__title">${t.title}</div>
        <div class="tour-card__duration">
          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          ${t.duration}
        </div>
        <div class="tour-card__footer">
          <div class="tour-card__price">${t.price}<small>${t.from}</small></div>
          <a href="#" class="btn-details">View Details</a>
        </div>
      </div>`;
    tourGrid.appendChild(card);
  });

  // ---- RENDER SPECIALTY ----
  const specialtyGrid = document.getElementById('specialtyGrid');
  specialties.forEach(s => {
    const card = document.createElement('div');
    card.className = 'specialty-card';
    card.innerHTML = `<div class="specialty-card__icon"><svg viewBox="0 0 24 24">${s.icon}</svg></div><h4>${s.title}</h4><p>${s.sub}</p>`;
    specialtyGrid.appendChild(card);
  });

  // ---- RENDER USPs ----
  const uspGrid = document.getElementById('uspGrid');
  usps.forEach(u => {
    const card = document.createElement('div');
    card.className = 'usp-card';
    card.innerHTML = `<div class="usp-card__icon"><svg viewBox="0 0 24 24">${u.icon}</svg></div><h4>${u.title}</h4><p>${u.desc}</p>`;
    uspGrid.appendChild(card);
  });

  // ---- RENDER REVIEWS ----
  const reviewsCarousel = document.getElementById('reviewsCarousel');
  const reviewsDots = document.getElementById('reviewsDots');
  let currentReview = 0;

  reviews.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    const stars = Array(r.stars).fill('<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>').join('');
    card.innerHTML = `<div class="review-card__stars">${stars}</div><div class="review-card__quote">${r.quote}</div><div class="review-card__author">${r.author}</div><div class="review-card__tour">${r.tour}</div>`;
    reviewsCarousel.appendChild(card);

    const dot = document.createElement('span');
    dot.className = i === 0 ? 'active' : '';
    dot.addEventListener('click', () => goToReview(i));
    reviewsDots.appendChild(dot);
  });

  function goToReview(n) {
    reviewsDots.children[currentReview].classList.remove('active');
    currentReview = n;
    reviewsCarousel.style.transform = `translateX(-${currentReview * 100}%)`;
    reviewsDots.children[currentReview].classList.add('active');
  }

  document.getElementById('reviewPrev').addEventListener('click', () => goToReview((currentReview - 1 + reviews.length) % reviews.length));
  document.getElementById('reviewNext').addEventListener('click', () => goToReview((currentReview + 1) % reviews.length));
  setInterval(() => goToReview((currentReview + 1) % reviews.length), 6000);

  // ---- LAZY LOAD IMAGES ----
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.addEventListener('load', () => img.classList.add('loaded'));
        lazyObserver.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  document.querySelectorAll('.lazy-img').forEach(img => lazyObserver.observe(img));

  // ---- STATS COUNTER ANIMATION ----
  const counters = document.querySelectorAll('.stat-item__number');
  let counted = false;

  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current).toLocaleString('en-IN') + (target === 325 ? '+' : target === 2500 ? '+' : '');
        }, 16);
      });
    }
  }, { threshold: 0.3 });

  counterObserver.observe(document.getElementById('statsStrip'));

  // ---- BOOKING FORM (prevent default) ----
  document.getElementById('bookingForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Search feature coming soon! Explore our trending destinations below.');
  });

  // ---- SCROLL REVEAL ANIMATIONS ----
  // Add 'reveal' class to all section headers, grids, and major elements
  const revealTargets = [
    ...document.querySelectorAll('.section-header'),
    ...document.querySelectorAll('.tour-card'),
    ...document.querySelectorAll('.specialty-card'),
    ...document.querySelectorAll('.usp-card'),
    ...document.querySelectorAll('.cta-banner__content'),
  ];

  revealTargets.forEach(el => el.classList.add('reveal'));

  // Add stagger delays to grid items
  document.querySelectorAll('.tour-card').forEach((card, i) => {
    card.classList.add(`reveal-delay-${(i % 4) + 1}`);
  });
  document.querySelectorAll('.specialty-card').forEach((card, i) => {
    card.classList.add(`reveal-delay-${(i % 6) + 1}`);
  });
  document.querySelectorAll('.usp-card').forEach((card, i) => {
    card.classList.add(`reveal-delay-${(i % 4) + 1}`);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---- BACK TO TOP BUTTON ----
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- PARALLAX EFFECT ON HERO TEXT ----
  const heroText = document.querySelector('.hero-slide__text');
  window.addEventListener('scroll', () => {
    if (window.scrollY < 700) {
      const offset = window.scrollY * 0.3;
      document.querySelectorAll('.hero-slide__text').forEach(t => {
        t.style.transform = `translateY(${offset}px)`;
        t.style.opacity = 1 - (window.scrollY / 700);
      });
    }
  });

  // ---- SMOOTH HOVER SOUND EFFECT ON CARDS (visual ripple) ----
  document.querySelectorAll('.tour-card, .specialty-card, .usp-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      this.style.transition = 'all .35s cubic-bezier(.25,.46,.45,.94)';
    });
    card.addEventListener('mouseleave', function(e) {
      this.style.transition = 'all .3s ease';
    });
  });

});
