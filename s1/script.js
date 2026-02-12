/* ============================================================
   PREMIUM ONE-PAGE — INTERACTIVE JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounterAnimation();
  initScrollReveal();
  initCourseCarousel();
  initSmoothScroll();
  initPaymentModal();
});

/* ---------- 1. NAVBAR — Scroll & Mobile Toggle ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Sticky navbar style on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('span');
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    }
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      const bars = hamburger.querySelectorAll('span');
      bars[0].style.transform = '';
      bars[1].style.opacity = '1';
      bars[2].style.transform = '';
    });
  });
}

/* ---------- 2. COUNTER ANIMATION — IntersectionObserver ---------- */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => animateCounter(counter));
      }
    });
  }, { threshold: 0.4 });

  const trustStrip = document.getElementById('trustStrip');
  if (trustStrip) observer.observe(trustStrip);
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out curve
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    el.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = formatNumber(target);
    }
  }

  requestAnimationFrame(update);
}

function formatNumber(num) {
  if (num >= 1000) {
    return num.toLocaleString('en-IN');
  }
  return num;
}

/* ---------- 3. SCROLL REVEAL — Fade-In-Up on Viewport ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ---------- 4. COURSE CAROUSEL — Horizontal Scroll ---------- */
function initCourseCarousel() {
  const track = document.getElementById('courseTrack');
  const leftArrow = document.getElementById('scrollLeft');
  const rightArrow = document.getElementById('scrollRight');

  if (!track || !leftArrow || !rightArrow) return;

  const scrollAmount = 320;

  rightArrow.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  leftArrow.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Drag to scroll on desktop
  let isDown = false;
  let startX;
  let scrollLeftPos;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.cursor = 'grabbing';
    startX = e.pageX - track.offsetLeft;
    scrollLeftPos = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.cursor = 'grab';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeftPos - walk;
  });

  // Set initial cursor
  track.style.cursor = 'grab';
}

/* ---------- 5. SMOOTH SCROLL — Anchor Navigation ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70; // Account for sticky nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ---------- 6. FORM HANDLING ---------- */
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const phone = document.getElementById('phoneNumber').value.trim();
  const course = document.getElementById('courseInterest').value;

  // Basic validation
  if (!name || name.length < 2) {
    showToast('Please enter a valid name.', 'error');
    return;
  }

  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    showToast('Please enter a valid 10-digit phone number.', 'error');
    return;
  }

  if (!course) {
    showToast('Please select a course.', 'error');
    return;
  }

  // Success
  showToast(`🎉 Thank you, ${name}! We'll call you shortly about ${getCourseName(course)}.`, 'success');

  // Reset form
  e.target.reset();
}

function getCourseName(value) {
  const names = {
    jee: 'JEE Main & Advanced',
    neet: 'NEET Preparation',
    foundation: 'Foundation (8-10)',
    boards: 'Board Exam Mastery',
    coding: 'Coding & DSA',
    upsc: 'UPSC / Civil Services'
  };
  return names[value] || value;
}

/* ---------- TOAST NOTIFICATION ---------- */
function showToast(message, type = 'success') {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    z-index: 9999;
    animation: fadeInUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
    max-width: 380px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
    ${type === 'success'
      ? 'background: linear-gradient(135deg, #4361ee, #7c3aed); border: 1px solid rgba(67,97,238,0.5);'
      : 'background: linear-gradient(135deg, #ee6352, #e63946); border: 1px solid rgba(238,99,82,0.5);'
    }
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ---------- 7. PAYMENT MODAL — Purchase Flow ---------- */
function initPaymentModal() {
  const modal = document.getElementById('paymentModal');
  const closeBtn = document.getElementById('modalClose');
  if (!modal || !closeBtn) return;

  const modalTitle = document.getElementById('modalCourseTitle');
  const modalInstructor = document.getElementById('modalInstructor');
  const modalOriginalPrice = document.getElementById('modalOriginalPrice');
  const modalDiscount = document.getElementById('modalDiscount');
  const modalTotalPrice = document.getElementById('modalTotalPrice');
  const payAmount = document.getElementById('payAmount');
  const payBtn = document.getElementById('payBtn');
  const couponInput = document.getElementById('couponInput');
  const couponApply = document.getElementById('couponApply');

  // Current modal state
  let currentCourse = {};

  // --- Open modal on course card click ---
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Don't open if dragging carousel
      if (card.closest('.courses__track')?.dataset.dragging === 'true') return;

      // Extract course data from the card
      const title = card.querySelector('.course-card__title')?.textContent || 'Course';
      const instructor = card.querySelector('.course-card__instructor')?.textContent || '';
      const priceCurrentEl = card.querySelector('.course-card__price-current');
      const priceOriginalEl = card.querySelector('.course-card__price-original');

      const priceCurrentText = priceCurrentEl?.textContent || '₹4,999';
      const priceOriginalText = priceOriginalEl?.textContent || '₹14,999';

      // Parse prices (remove ₹ and commas)
      const priceCurrent = parseInt(priceCurrentText.replace(/[₹,\s]/g, '')) || 4999;
      const priceOriginal = parseInt(priceOriginalText.replace(/[₹,\s]/g, '')) || 14999;
      const discount = priceOriginal - priceCurrent;

      currentCourse = { title, instructor, priceCurrent, priceOriginal, discount };

      // Populate modal
      modalTitle.textContent = title;
      modalInstructor.textContent = instructor;
      modalOriginalPrice.textContent = `₹${priceOriginal.toLocaleString('en-IN')}`;
      modalDiscount.textContent = `- ₹${discount.toLocaleString('en-IN')}`;
      modalTotalPrice.textContent = `₹${priceCurrent.toLocaleString('en-IN')}`;
      payAmount.textContent = `₹${priceCurrent.toLocaleString('en-IN')}`;

      // Reset coupon
      if (couponInput) couponInput.value = '';

      // Open modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // --- Close modal ---
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset pay button
    payBtn.classList.remove('loading');
    payBtn.disabled = false;
  }

  closeBtn.addEventListener('click', closeModal);

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // --- Payment Tabs ---
  const tabs = modal.querySelectorAll('.modal__tab');
  const tabContents = modal.querySelectorAll('.modal__tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // Switch active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Switch active content
      tabContents.forEach(tc => tc.classList.remove('active'));
      const targetContent = document.getElementById(`tab-${targetTab}`);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // --- Coupon Code ---
  if (couponApply) {
    couponApply.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();

      if (code === 'EDUPRIME50') {
        const extraDiscount = Math.round(currentCourse.priceCurrent * 0.1);
        const newTotal = currentCourse.priceCurrent - extraDiscount;
        const totalDiscount = currentCourse.discount + extraDiscount;

        modalDiscount.textContent = `- ₹${totalDiscount.toLocaleString('en-IN')}`;
        modalTotalPrice.textContent = `₹${newTotal.toLocaleString('en-IN')}`;
        payAmount.textContent = `₹${newTotal.toLocaleString('en-IN')}`;

        showToast('🎉 Coupon applied! Extra 10% off!', 'success');
        couponApply.textContent = 'Applied ✓';
        couponApply.style.pointerEvents = 'none';
        couponInput.disabled = true;
      } else if (!code) {
        showToast('Please enter a coupon code.', 'error');
      } else {
        showToast('❌ Invalid coupon code. Try EDUPRIME50', 'error');
      }
    });
  }

  // --- Pay Button ---
  if (payBtn) {
    payBtn.addEventListener('click', () => {
      // Check active tab for validation
      const activeTab = modal.querySelector('.modal__tab.active')?.getAttribute('data-tab');

      if (activeTab === 'upi') {
        const upiId = document.getElementById('upiId')?.value.trim();
        if (!upiId || !upiId.includes('@')) {
          showToast('Please enter a valid UPI ID (e.g., name@upi)', 'error');
          return;
        }
      } else if (activeTab === 'card') {
        const cardNumber = document.getElementById('cardNumber')?.value.trim();
        const cardExpiry = document.getElementById('cardExpiry')?.value.trim();
        const cardCvv = document.getElementById('cardCvv')?.value.trim();
        const cardName = document.getElementById('cardName')?.value.trim();

        if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
          showToast('Please enter a valid 16-digit card number.', 'error');
          return;
        }
        if (!cardExpiry || !/^\d{2}\/\d{2}$/.test(cardExpiry)) {
          showToast('Please enter expiry in MM/YY format.', 'error');
          return;
        }
        if (!cardCvv || cardCvv.length < 3) {
          showToast('Please enter a valid 3-digit CVV.', 'error');
          return;
        }
        if (!cardName || cardName.length < 2) {
          showToast('Please enter the cardholder name.', 'error');
          return;
        }
      } else if (activeTab === 'netbank') {
        const bank = document.getElementById('bankSelect')?.value;
        if (!bank) {
          showToast('Please select your bank.', 'error');
          return;
        }
      }

      // Simulate payment processing
      payBtn.classList.add('loading');
      payBtn.disabled = true;

      setTimeout(() => {
        payBtn.classList.remove('loading');
        payBtn.disabled = false;
        closeModal();
        showToast(`🎉 Payment successful! You're now enrolled in "${currentCourse.title}". Check your email for details.`, 'success');
      }, 2500);
    });
  }

  // --- Prevent carousel drag from triggering card click ---
  const track = document.getElementById('courseTrack');
  if (track) {
    let dragStartX = 0;
    track.addEventListener('mousedown', (e) => {
      dragStartX = e.pageX;
      track.dataset.dragging = 'false';
    });
    track.addEventListener('mousemove', (e) => {
      if (Math.abs(e.pageX - dragStartX) > 5) {
        track.dataset.dragging = 'true';
      }
    });
    track.addEventListener('mouseup', () => {
      setTimeout(() => { track.dataset.dragging = 'false'; }, 100);
    });
  }
}
