/* ==========================================================================
   DESTINATIONS PAGE JS - หน้าสถานที่ท่องเที่ยว (destinations.js)
   ========================================================================== */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     1. CARD INLINE IMAGE SLIDERS
     Each destination card has its own image slider with prev/next buttons
     and dot indicators. Sliders are independent.
  ----------------------------------------------------------------------- */
  function initCardSliders() {
    const sliders = document.querySelectorAll('.dest-card-slider');

    sliders.forEach(function (sliderEl) {
      const slides = sliderEl.querySelectorAll('.dest-card-slide');
      const dots = sliderEl.querySelectorAll('.dest-slide-dot');
      const prevBtn = sliderEl.querySelector('.dest-slide-prev');
      const nextBtn = sliderEl.querySelector('.dest-slide-next');
      let current = 0;
      let autoTimer = null;

      if (slides.length === 0) return;

      function goTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides[current].classList.remove('active');
        if (dots[current]) dots[current].classList.remove('active');

        current = index;

        slides[current].classList.add('active');
        if (dots[current]) dots[current].classList.add('active');
      }

      function startAuto() {
        stopAuto();
        if (slides.length > 1) {
          autoTimer = setInterval(function () {
            goTo(current + 1);
          }, 4000);
        }
      }

      function stopAuto() {
        if (autoTimer) {
          clearInterval(autoTimer);
          autoTimer = null;
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          goTo(current - 1);
          stopAuto();
          startAuto();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          goTo(current + 1);
          stopAuto();
          startAuto();
        });
      }

      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function (e) {
          e.stopPropagation();
          goTo(i);
          stopAuto();
          startAuto();
        });
      });

      sliderEl.addEventListener('mouseenter', stopAuto);
      sliderEl.addEventListener('mouseleave', startAuto);

      let touchStartX = 0;
      sliderEl.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });

      sliderEl.addEventListener('touchend', function (e) {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 40) {
          diff < 0 ? goTo(current + 1) : goTo(current - 1);
          stopAuto();
          startAuto();
        }
      }, { passive: true });

      startAuto();
    });
  }

  /* -----------------------------------------------------------------------
     2. SEARCH FILTERING
  ----------------------------------------------------------------------- */
  function initSearch() {
    const searchInput = document.getElementById('destinationSearch');
    const searchBtn = document.getElementById('searchBtn');

    function doSearch() {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
      applyFilters(query, getActiveCategory());
    }

    if (searchInput) {
      searchInput.addEventListener('input', doSearch);
      searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') doSearch();
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', doSearch);
    }
  }

  /* -----------------------------------------------------------------------
     3. CATEGORY FILTER PILLS
  ----------------------------------------------------------------------- */
  function getActiveCategory() {
    const active = document.querySelector('.dest-category-pill.active');
    return active ? active.dataset.category : 'all';
  }

  function initCategoryFilters() {
    const pills = document.querySelectorAll('.dest-category-pill');

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        const category = pill.dataset.category;
        const query = document.getElementById('destinationSearch')
          ? document.getElementById('destinationSearch').value.toLowerCase().trim()
          : '';
        applyFilters(query, category);
      });
    });
  }

  function applyFilters(query, category) {
    const cards = document.querySelectorAll('.dest-card');
    let visibleCount = 0;

    cards.forEach(function (card, i) {
      const cardCategory = card.dataset.category || '';
      const cardName = (card.dataset.name || '').toLowerCase();

      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesQuery = query === '' || cardName.includes(query);
      const shouldShow = matchesCategory && matchesQuery;

      if (shouldShow) {
        card.style.display = '';
        card.style.animationDelay = (i * 0.06) + 's';
        card.style.animation = 'none';
        requestAnimationFrame(function () {
          card.style.animation = 'cardFadeIn 0.4s ease forwards';
        });
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = visibleCount;

    const noResults = document.getElementById('noResults');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'flex' : 'none';
      noResults.style.flexDirection = 'column';
      noResults.style.alignItems = 'center';
    }
  }

  /* -----------------------------------------------------------------------
     4. DESTINATION DETAIL MODAL
  ----------------------------------------------------------------------- */
  const DEST_DATA = {
    'grand-palace': {
      title: 'พระบรมมหาราชวัง — กรุงเทพมหานคร',
      img: 'assets/images/grand_palace.jpg',
      badge: 'วัดวาอาราม • มรดกโลก',
      desc: 'พระบรมมหาราชวัง เป็นสถานที่ศักดิ์สิทธิ์และเป็นศูนย์รวมจิตใจของคนไทยทั้งชาติ ตั้งอยู่ริมฝั่งแม่น้ำเจ้าพระยา กรุงเทพมหานคร สร้างขึ้นในรัชสมัยพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก รัชกาลที่ 1 ภายในประกอบด้วยวัดพระแก้ว (วัดพระศรีรัตนศาสดาราม) อันเลื่องชื่อ และพระราชมณเฑียรอันวิจิตรพิสดาร',
      highlights: ['🏛️ วัดพระแก้ว ที่ประดิษฐานพระแก้วมรกต', '🎨 จิตรกรรมฝาผนังรามเกียรติ์ยาวกว่า 1 กม.', '🕐 เปิดให้เข้าชมทุกวัน 08:30-15:30 น.', '👔 ต้องแต่งกายสุภาพ ไม่อนุญาตสวมกางเกงขาสั้น']
    },
    'maya-bay': {
      title: 'อ่าวมาหยา — จังหวัดกระบี่',
      img: 'assets/images/maya_bay.jpg',
      badge: 'ทะเล & ชายหาด • World Class',
      desc: 'อ่าวมาหยา (Maya Bay) ตั้งอยู่บนเกาะพีพีเล จ.กระบี่ ได้รับการยกย่องให้เป็นหนึ่งในชายหาดที่สวยที่สุดในโลก ล้อมรอบด้วยหน้าผาหินปูนสูงชัน น้ำทะเลสีเขียวมรกตใสราวกระจก เคยเป็นฉากหลักของภาพยนตร์ฮอลลีวูด The Beach (2000) ปัจจุบันมีการจำกัดนักท่องเที่ยวเพื่อการอนุรักษ์',
      highlights: ['🐠 แนวปะการังใต้น้ำที่สมบูรณ์', '🎬 ฉากหลังภาพยนตร์ The Beach ปี 2000', '⏰ เปิดให้เข้าชมตอนเช้าเท่านั้น (ปิด 16:00)', '🚤 เดินทางโดยเรือจากท่าเรือพีพีดอน']
    },
    'wat-arun': {
      title: 'วัดอรุณราชวราราม — กรุงเทพมหานคร',
      img: 'assets/images/wat_arun.jpg',
      badge: 'วัดวาอาราม • Landmark',
      desc: 'วัดอรุณราชวรารามหรือที่รู้จักในชื่อ "วัดแจ้ง" เป็นวัดสำคัญและเป็น Landmark คู่กรุงเทพมหานครอันโด่งดัง ตั้งอยู่ริมแม่น้ำเจ้าพระยาฝั่งธนบุรี จุดเด่นคือพระปรางค์สูงตระหง่านที่ตกแต่งด้วยเครื่องถ้วยจีนหลากสีสัน งดงามที่สุดยามอาทิตย์ตกดินส่องแสงจับประกายทอง',
      highlights: ['✨ พระปรางค์สูง 67 เมตร ประดับเครื่องถ้วยจีน', '🌅 วิวยามพระอาทิตย์ตกสวยงามที่สุด', '🚤 นั่งเรือข้ามฟากจากท่าน้ำ 5 บาท', '📸 จุดถ่ายรูปยอดนิยมระดับโลก']
    },
    'railay-beach': {
      title: 'หาดไร่เลย์ — จังหวัดกระบี่',
      img: 'assets/images/railay_beach.jpg',
      badge: 'ทะเล & ชายหาด • Unseen',
      desc: 'หาดไร่เลย์หรือ Railay Beach เป็นคาบสมุทรที่โดดเด่นด้วยหน้าผาหินปูนสูงตระหง่านโอบล้อมอยู่สามด้าน ทำให้เข้าถึงได้ทางเรือเท่านั้น มีหาดสวยหลายหาด เหมาะสำหรับปีนผาหินปูน (Rock Climbing) พายเรือคายัค และดำน้ำตื้น',
      highlights: ['🧗 สวรรค์ของนักปีนผา Rock Climbing ชั้นนำระดับโลก', '🚤 เข้าถึงได้ทางเรือจากอ่าวนางเท่านั้น', '🏖️ มีทั้งหาดไร่เลย์ตะวันออก-ตะวันตก และหาดพระนาง', '🌊 น้ำทะเลใสสะอาด เหมาะสำหรับ Kayak']
    }
  };

  function initDestModal() {
    const modal = document.getElementById('destModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const readBtns = document.querySelectorAll('.dest-read-btn[data-id]');

    readBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = btn.dataset.id;
        const data = DEST_DATA[id];
        if (!data || !modal) return;

        const imgEl = document.getElementById('modalImg');
        const titleEl = document.getElementById('modalTitle');
        const badgeEl = document.getElementById('modalBadge');
        const descEl = document.getElementById('modalDesc');
        const listEl = document.getElementById('modalHighlightsList');

        if (imgEl) { imgEl.src = data.img; imgEl.alt = data.title; }
        if (titleEl) titleEl.textContent = data.title;
        if (badgeEl) badgeEl.textContent = data.badge;
        if (descEl) descEl.textContent = data.desc;
        if (listEl) {
          listEl.innerHTML = data.highlights.map(function (h) {
            return '<div style="padding: 6px 0; border-bottom: 1px solid var(--border-light); font-size: 0.87rem; color: var(--text-secondary);">' + h + '</div>';
          }).join('');
        }

        modal.classList.add('active');
        document.body.classList.add('drawer-open');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('active');
        document.body.classList.remove('drawer-open');
      });
    }

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.classList.remove('drawer-open');
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.classList.remove('drawer-open');
      }
    });
  }

  /* -----------------------------------------------------------------------
     5. SCROLL REVEAL ANIMATIONS
  ----------------------------------------------------------------------- */
  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* -----------------------------------------------------------------------
     6. GLOBAL RESET FILTER
  ----------------------------------------------------------------------- */
  window.resetFilters = function () {
    const pills = document.querySelectorAll('.dest-category-pill');
    pills.forEach(function (p) { p.classList.remove('active'); });
    const allPill = document.querySelector('[data-category="all"]');
    if (allPill) allPill.classList.add('active');

    const searchInput = document.getElementById('destinationSearch');
    if (searchInput) searchInput.value = '';

    applyFilters('', 'all');
  };

  /* -----------------------------------------------------------------------
     INIT
  ----------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initCardSliders();
    initSearch();
    initCategoryFilters();
    initDestModal();
    initReveal();
  });

})();
