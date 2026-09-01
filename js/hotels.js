/* ==========================================================================
   HOTELS & RESTAURANTS PAGE JS — หน้าที่พักและร้านอาหาร (hotels.js)
   ========================================================================== */

(function () {
  'use strict';

  var cards = [];

  function initHotelsPage() {
    cards = Array.from(document.querySelectorAll('.hotel-card'));

    // View toggle (Grid vs List)
    var btnGrid = document.getElementById('btnGridView');
    var btnList = document.getElementById('btnListView');
    var gridContainer = document.getElementById('hotelsGrid');

    if (btnGrid && btnList && gridContainer) {
      btnGrid.addEventListener('click', function () {
        gridContainer.classList.remove('list-view');
        btnGrid.classList.add('active');
        btnList.classList.remove('active');
      });

      btnList.addEventListener('click', function () {
        gridContainer.classList.add('list-view');
        btnList.classList.add('active');
        btnGrid.classList.remove('active');
      });
    }

    // Form search
    var submitBtn = document.getElementById('hotelsFormSubmit');
    if (submitBtn) {
      submitBtn.addEventListener('click', applyHotelsFilter);
    }

    // Hero Search
    var heroSearchBtn = document.getElementById('hotelsSearchBtn');
    var heroSearchInput = document.getElementById('hotelsHeroSearch');

    if (heroSearchInput) {
      heroSearchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') applyHotelsFilter();
      });
    }
    if (heroSearchBtn) {
      heroSearchBtn.addEventListener('click', applyHotelsFilter);
    }

    // Map Pin Clicks
    var mapPins = document.querySelectorAll('.map-pin');
    mapPins.forEach(function (pin) {
      pin.addEventListener('click', function () {
        var loc = pin.dataset.loc;
        var selLocation = document.getElementById('selectLocation');
        if (selLocation && loc) {
          selLocation.value = loc;
          applyHotelsFilter();
        }
      });
    });

    // Favorite heart toggle
    document.querySelectorAll('.hotel-fav-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        btn.classList.toggle('saved');
        var svg = btn.querySelector('svg path');
        if (svg) {
          svg.setAttribute('fill', btn.classList.contains('saved') ? 'currentColor' : 'none');
        }
      });
    });

    // Scroll reveal observer
    initReveal();
  }

  function applyHotelsFilter() {
    var selLoc = document.getElementById('selectLocation');
    var selType = document.getElementById('selectHotelType');
    var heroQueryInput = document.getElementById('hotelsHeroSearch');

    var targetLoc = selLoc ? selLoc.value.trim().toLowerCase() : '';
    var targetType = selType ? selType.value.trim().toLowerCase() : '';
    var query = heroQueryInput ? heroQueryInput.value.trim().toLowerCase() : '';

    var visibleCount = 0;

    cards.forEach(function (card, index) {
      var loc = (card.dataset.location || '').toLowerCase();
      var type = (card.dataset.type || '').toLowerCase();
      var name = (card.dataset.name || '').toLowerCase();

      var matchLoc = !targetLoc || loc.includes(targetLoc);
      var matchType = !targetType || type.includes(targetType);
      var matchQuery = !query || name.includes(query) || loc.includes(query) || type.includes(query);

      if (matchLoc && matchType && matchQuery) {
        card.style.display = '';
        card.style.animation = 'none';
        var delay = visibleCount * 0.06;
        requestAnimationFrame(function () {
          card.style.animation = 'cardFadeIn 0.4s ease ' + delay + 's forwards';
        });
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  }

  function initReveal() {
    var revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', initHotelsPage);

})();
