/* ==========================================================================
   TRIPS PAGE JS — หน้าทริปแนะนำ (trips.js)
   ========================================================================== */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     TRIP DATA — Full details for each trip modal
  ----------------------------------------------------------------------- */
  var TRIP_DATA = {
    chiangmai: {
      title: 'เชียงใหม่ 3 วัน 2 คืน',
      img: 'assets/images/chiang_mai_trip.jpg',
      badge: 'ธรรมชาติ',
      location: 'เชียงใหม่, ภาคเหนือ',
      duration: '3 วัน 2 คืน',
      style: 'ธรรมชาติ & วัฒนธรรม',
      budget: '฿5,900 / คน',
      desc: 'ทริปเชียงใหม่ที่ครบเครื่อง ผสมผสานธรรมชาติ วัฒนธรรม และวิถีชีวิตล้านนาในทริปเดียว เหมาะสำหรับนักเดินทางทุกสไตล์',
      days: [
        { title: 'วันที่ 1 — ถึงเชียงใหม่ & เมืองเก่า', items: 'เช้า: เดินทางถึงเชียงใหม่ • เที่ยง: อาหารกลางวัน ข้าวซอยสุดอร่อย • บ่าย: เดินเที่ยวเมืองเก่า วัดเชียงมั่น วัดพระสิงห์ • เย็น: ถนนคนเดินวัวลาย' },
        { title: 'วันที่ 2 — ดอยสุเทพ & ผาตั้ง', items: 'เช้า: ขึ้นดอยสุเทพ ชมวิวเมือง • กลางวัน: เดินทางไปผาตั้ง • บ่าย: ชมวิวทะเลหมอกบนผาตั้ง • เย็น: ตลาดนัดถนนคนเดินนิมมาน' },
        { title: 'วันที่ 3 — ดอยอินทนนท์ & กลับบ้าน', items: 'เช้า: เดินทางดอยอินทนนท์ ชมน้ำตก • กลางวัน: พิชิตยอดดอยสูงสุดไทย • บ่าย: เดินทางกลับ' }
      ]
    },
    krabi: {
      title: 'กระบี่ 2 วัน 1 คืน',
      img: 'assets/images/krabi_trip.jpg',
      badge: 'ทะเล',
      location: 'กระบี่, ภาคใต้',
      duration: '2 วัน 1 คืน',
      style: 'ทะเล & ชายหาด',
      budget: '฿4,200 / คน',
      desc: 'ทริปทะเลกระบี่ที่งดงาม เที่ยวเกาะ ดำน้ำ ชมปะการัง และสัมผัสธรรมชาติริมทะเลอันดามัน',
      days: [
        { title: 'วันที่ 1 — เกาะพีพีและอ่าวมาหยา', items: 'เช้า: เดินทางด้วยเรือจากท่าเรือ • กลางวัน: อ่าวมาหยา ดำน้ำตื้น • บ่าย: เกาะพีพีดอน เดินชมวิว • เย็น: ชมพระอาทิตย์ตกจากเกาะพีพี' },
        { title: 'วันที่ 2 — 4 เกาะ & หาดไร่เลย์', items: 'เช้า: ทริป 4 เกาะ ดำน้ำปะการัง • กลางวัน: หาดไร่เลย์ • บ่าย: Kayak สำรวจถ้ำ • เย็น: เดินทางกลับ' }
      ]
    },
    ayutthaya: {
      title: 'อยุธยา One Day Trip',
      img: 'assets/images/ayutthaya_trip.jpg',
      badge: 'วัฒนธรรม',
      location: 'พระนครศรีอยุธยา',
      duration: '1 วัน',
      style: 'ประวัติศาสตร์ & วัฒนธรรม',
      budget: '฿1,200 / คน',
      desc: 'เดย์ทริปสุดคุ้มจากกรุงเทพฯ สู่อดีตราชธานีสยามที่ยิ่งใหญ่ เรียนรู้ประวัติศาสตร์ 417 ปีในวันเดียว',
      days: [
        { title: 'วันเดียวเต็ม — อยุธยา', items: 'เช้า: เดินทางจากกรุงเทพฯ รถไฟ / รถยนต์ (80 กม.) • สาย: วิหารพระมงคลบพิตร วัดพระศรีสรรเพชญ์ • กลางวัน: อาหารพื้นถิ่น หมูปิ้ง กุ้งเผา • บ่าย: วัดมหาธาตุ พระพุทธรูปในต้นโพธิ์ วัดไชยวัฒนาราม • เย็น: นั่งเรือชมวัดริมน้ำ • ค่ำ: เดินทางกลับกรุงเทพฯ' }
      ]
    },
    pai: {
      title: 'ปาย 3 วัน 2 คืน',
      img: 'assets/images/pai_trip.jpg',
      badge: 'ธรรมชาติ',
      location: 'แม่ฮ่องสอน, ภาคเหนือ',
      duration: '3 วัน 2 คืน',
      style: 'ธรรมชาติ & พักผ่อน',
      budget: '฿4,800 / คน',
      desc: 'ทริปปายสุดชิลล์ ท่ามกลางธรรมชาติป่าเขา อากาศเย็นสบาย น้ำตก ทุ่งดอกไม้ และบรรยากาศเมืองเล็กๆ ที่เป็นเอกลักษณ์',
      days: [
        { title: 'วันที่ 1 — เดินทางสู่ปาย', items: 'เช้า: ออกจากเชียงใหม่ ผ่าน 762 โค้ง • กลางวัน: ถึงปาย เช็คอินที่พัก • บ่าย: เดินเล่นถนนเจดีย์ เช็กอินจุดถ่ายรูป • เย็น: ตลาดนัดปาย Street Food' },
        { title: 'วันที่ 2 — สำรวจธรรมชาติรอบปาย', items: 'เช้า: ดูทะเลหมอกยามเช้า • สาย: น้ำตกโมพาแง่ อุณหภูมิเย็น • กลางวัน: Coffee & โกโก้ฟาร์ม • บ่าย: สะพานประวัติศาสตร์ ถ่ายรูป • เย็น: งาน Walking Street ปาย' },
        { title: 'วันที่ 3 — พักผ่อนและเดินทางกลับ', items: 'เช้า: ชมทุ่งดอกทานตะวัน (ตามฤดูกาล) • กลางวัน: อาหารเช้าช้าๆ คาเฟ่ปาย • บ่าย: เดินทางกลับเชียงใหม่' }
      ]
    },
    kohtao: {
      title: 'เกาะเต่า 3 วัน 2 คืน',
      img: 'assets/images/koh_tao_trip.jpg',
      badge: 'ทะเล',
      location: 'สุราษฎร์ธานี, ภาคใต้',
      duration: '3 วัน 2 คืน',
      style: 'ดำน้ำ & ทะเล',
      budget: '฿6,500 / คน',
      desc: 'เกาะเต่า — สวรรค์ของนักดำน้ำ ทะเลใสสีฟ้าสวรรค์ ปะการังสวยงาม เหมาะสำหรับเรียน Scuba Diving และ Snorkeling',
      days: [
        { title: 'วันที่ 1 — เดินทางสู่เกาะเต่า', items: 'เช้า: ออกจากกรุงเทพฯ / สุราษฎร์ • กลางวัน: นั่งเรือจาก Chumphon หรือ KSP • บ่าย: เช็คอิน สำรวจหาด Mae Haad • เย็น: Sunset Bar ริมทะเล' },
        { title: 'วันที่ 2 — ดำน้ำและสำรวจเกาะ', items: 'เช้า: เรียน Open Water Day 1 หรือ Fun Dive • กลางวัน: ดำน้ำ Shark Bay ชมฉลามหูดำ • บ่าย: Snorkel รอบเกาะ • เย็น: ชมพระอาทิตย์ตก John Suwan Rock' },
        { title: 'วันที่ 3 — ดำน้ำวันสุดท้าย & กลับ', items: 'เช้า: Dive หรือ Snorkel Hin Ngam • กลางวัน: อาหารซีฟู้ดสด • บ่าย: เดินทางกลับเมืองใหญ่' }
      ]
    },
    bangkok: {
      title: 'กรุงเทพมหานคร 2 วัน 1 คืน',
      img: 'assets/images/bangkok_trip.jpg',
      badge: 'ไลฟ์สไตล์',
      location: 'กรุงเทพมหานคร',
      duration: '2 วัน 1 คืน',
      style: 'ไลฟ์สไตล์ & ช้อปปิ้ง',
      budget: '฿3,200 / คน',
      desc: 'สำรวจกรุงเทพฯ อย่างลึกซึ้ง ทั้งย่านเยาวราช เจริญกรุง Asok และ Thonglor ครบรส ทั้งกิน ช้อป ถ่ายรูป',
      days: [
        { title: 'วันที่ 1 — กรุงเทพเก่า & เยาวราช', items: 'เช้า: วัดโพธิ์ วัดอรุณ ล่องเรือแม่น้ำเจ้าพระยา • กลางวัน: อาหารกลางวันย่านท่าเตียน • บ่าย: เดินเจริญกรุง ICONSIAM • เย็น: เยาวราช Street Food กุ้งเผา ติ่มซำ' },
        { title: 'วันที่ 2 — กรุงเทพใหม่ & ช้อปปิ้ง', items: 'เช้า: คาเฟ่สวยย่าน Ari • กลางวัน: Terminal 21 ช้อปปิ้ง • บ่าย: One Bangkok Lumphini • เย็น: Thonglor Bar Hopping หรือ Rooftop' }
      ]
    }
  };

  /* -----------------------------------------------------------------------
     FILTER & SEARCH LOGIC
  ----------------------------------------------------------------------- */
  var allCards = [];
  var currentFilters = { duration: '', style: '', budget: '', search: '' };

  function init() {
    allCards = Array.from(document.querySelectorAll('.trip-card'));

    // Filter selects
    var selDuration = document.getElementById('filterDuration');
    var selStyle = document.getElementById('filterStyle');
    var selBudget = document.getElementById('filterBudget');
    var resetBtn = document.getElementById('tripsResetBtn');
    var searchInput = document.getElementById('tripSearchInput');

    if (selDuration) selDuration.addEventListener('change', function () { currentFilters.duration = this.value; applyFilters(); });
    if (selStyle) selStyle.addEventListener('change', function () { currentFilters.style = this.value; applyFilters(); });
    if (selBudget) selBudget.addEventListener('change', function () { currentFilters.budget = this.value; applyFilters(); });
    if (resetBtn) resetBtn.addEventListener('click', resetAll);

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentFilters.search = this.value.toLowerCase().trim();
        applyFilters();
      });
    }

    // View toggle
    var btnGrid = document.getElementById('viewGrid');
    var btnList = document.getElementById('viewList');
    var grid = document.getElementById('tripsGrid');

    if (btnGrid && btnList && grid) {
      btnGrid.addEventListener('click', function () {
        grid.classList.remove('list-view');
        btnGrid.classList.add('active');
        btnList.classList.remove('active');
      });
      btnList.addEventListener('click', function () {
        grid.classList.add('list-view');
        btnList.classList.add('active');
        btnGrid.classList.remove('active');
      });
    }

    // Bookmark toggle
    document.querySelectorAll('.trip-bookmark-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        btn.classList.toggle('saved');
        var svg = btn.querySelector('svg path');
        if (svg) svg.setAttribute('fill', btn.classList.contains('saved') ? 'currentColor' : 'none');
      });
    });

    // Load More (simulate)
    var loadBtn = document.getElementById('loadMoreBtn');
    if (loadBtn) {
      loadBtn.addEventListener('click', function () {
        loadBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:17px;height:17px;animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> กำลังโหลด...';
        setTimeout(function () {
          loadBtn.innerHTML = '✓ แสดงครบทุกทริปแล้ว';
          loadBtn.disabled = true;
          loadBtn.style.opacity = '0.5';
          loadBtn.style.cursor = 'default';
        }, 1500);
      });
    }

    // Modal
    initModal();

    // Scroll reveal
    initReveal();

    // Expose resetAll globally
    window.tripsPage = { resetAll: resetAll };
  }

  function applyFilters() {
    var visible = 0;
    allCards.forEach(function (card, i) {
      var dur = card.dataset.duration || '';
      var style = card.dataset.style || '';
      var budgetKey = card.dataset.budget || '';
      var name = (card.dataset.name || '').toLowerCase();
      var budgetNum = parseInt(card.dataset.budgetNum || '0', 10);

      // Duration match
      var durMatch = !currentFilters.duration || dur === currentFilters.duration;

      // Style match
      var styleMatch = !currentFilters.style || style === currentFilters.style;

      // Budget match
      var budgetMatch = true;
      if (currentFilters.budget === 'low') budgetMatch = budgetNum < 2000;
      else if (currentFilters.budget === 'mid') budgetMatch = budgetNum >= 2000 && budgetNum <= 5000;
      else if (currentFilters.budget === 'high') budgetMatch = budgetNum > 5000;

      // Search match
      var searchMatch = !currentFilters.search || name.includes(currentFilters.search);

      var show = durMatch && styleMatch && budgetMatch && searchMatch;

      if (show) {
        card.style.display = '';
        card.style.animation = 'none';
        var delay = visible * 0.07;
        card.style.animationDelay = delay + 's';
        var that = card;
        requestAnimationFrame(function () { that.style.animation = 'cardFadeIn 0.45s ease ' + delay + 's forwards'; });
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    var countEl = document.getElementById('tripResultCount');
    if (countEl) countEl.textContent = visible;

    var noResults = document.getElementById('tripsNoResults');
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';

    var loadMore = document.getElementById('tripsLoadMore');
    if (loadMore) loadMore.style.display = visible === 0 ? 'none' : 'flex';
  }

  function resetAll() {
    currentFilters = { duration: '', style: '', budget: '', search: '' };
    var selDuration = document.getElementById('filterDuration');
    var selStyle = document.getElementById('filterStyle');
    var selBudget = document.getElementById('filterBudget');
    var searchInput = document.getElementById('tripSearchInput');
    if (selDuration) selDuration.value = '';
    if (selStyle) selStyle.value = '';
    if (selBudget) selBudget.value = '';
    if (searchInput) searchInput.value = '';
    applyFilters();
  }

  /* -----------------------------------------------------------------------
     TRIP DETAIL MODAL
  ----------------------------------------------------------------------- */
  function initModal() {
    var modal = document.getElementById('tripModal');
    var closeBtn = document.getElementById('tripModalClose');

    document.querySelectorAll('.trip-detail-btn[data-trip]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.dataset.trip;
        var data = TRIP_DATA[key];
        if (!data || !modal) return;

        // Populate image
        var imgEl = document.getElementById('tripModalImg');
        if (imgEl) { imgEl.src = data.img; imgEl.alt = data.title; }

        // Badge
        var badgeEl = document.getElementById('tripModalBadge');
        if (badgeEl) badgeEl.textContent = data.badge;

        // Title & Location
        var titleEl = document.getElementById('tripModalTitle');
        if (titleEl) titleEl.textContent = data.title;

        var locEl = document.getElementById('tripModalLocation');
        if (locEl) locEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;color:#C5A059;flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ' + data.location;

        // Meta row
        var metaEl = document.getElementById('tripModalMeta');
        if (metaEl) {
          metaEl.innerHTML = [
            metaItem('📅', 'ระยะเวลา', data.duration),
            metaItem('🌿', 'สไตล์', data.style),
            metaItem('💰', 'งบประมาณ', data.budget)
          ].join('');
        }

        // Description
        var descEl = document.getElementById('tripModalDesc');
        if (descEl) descEl.textContent = data.desc;

        // Itinerary days
        var daysEl = document.getElementById('tripItineraryDays');
        if (daysEl && data.days) {
          daysEl.innerHTML = data.days.map(function (day, i) {
            return '<div class="trip-day">' +
              '<div class="trip-day-num">D' + (i + 1) + '</div>' +
              '<div class="trip-day-content">' +
              '<div class="trip-day-title">' + day.title + '</div>' +
              '<div class="trip-day-items">' + day.items + '</div>' +
              '</div></div>';
          }).join('');
        }

        modal.classList.add('active');
        document.body.classList.add('drawer-open');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
    });

    function closeModal() {
      if (modal) modal.classList.remove('active');
      document.body.classList.remove('drawer-open');
    }
  }

  function metaItem(icon, label, value) {
    return '<div class="trip-modal-meta-item">' + icon + ' ' + label + ': <strong>' + value + '</strong></div>';
  }

  /* -----------------------------------------------------------------------
     SCROLL REVEAL
  ----------------------------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* -----------------------------------------------------------------------
     BOOT
  ----------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', init);

})();
