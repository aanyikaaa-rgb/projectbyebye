/* ==========================================================================
   CONTACT PAGE JS — หน้าติดต่อสอบถาม (contact.js)
   ========================================================================== */

(function () {
  'use strict';

  function initContactPage() {
    var modal = document.getElementById('contactInfoModal');
    var closeBtn = document.getElementById('contactModalClose');
    var actionWeather = document.getElementById('actionWeather');
    var actionDoc = document.getElementById('actionDoc');

    if (actionWeather && modal) {
      actionWeather.addEventListener('click', function () {
        showModal(
          'ข้อมูลสภาพอากาศ',
          'รายงานสภาพอากาศประจำภูมิภาคประเทศไทย',
          '<div style="display:flex;flex-direction:column;gap:10px;">' +
            '<div>☀️ <strong>ภาคเหนือ:</strong> อุณหภูมิ 22-30°C อากาศเย็นสบายยามเช้า ทะเลหมอกตามยอดดอย</div>' +
            '<div>🌊 <strong>ภาคใต้ (ฝั่งอันดามัน & อ่าวไทย):</strong> อุณหภูมิ 27-33°C ท้องฟ้าแจ่มใส เหมาะกับการทำกิจกรรมทางน้ำ</div>' +
            '<div>🏛️ <strong>ภาคกลาง & กรุงเทพฯ:</strong> อุณหภูมิ 26-34°C อากาศดี มีเมฆบางส่วน</div>' +
          '</div>'
        );
      });
    }

    if (actionDoc && modal) {
      actionDoc.addEventListener('click', function () {
        showModal(
          'คู่มือการเดินทาง & เอกสาร',
          'คำแนะนำการเดินทางและเอกสารสำคัญสำหรับนักท่องเที่ยว',
          '<div style="display:flex;flex-direction:column;gap:10px;">' +
            '<div>📄 <strong>นักท่องเที่ยวชาวไทย:</strong> บัตรประจำตัวประชาชนสำหรับการเช็คอินโรงแรมและเที่ยวบิน</div>' +
            '<div>🛂 <strong>นักท่องเที่ยวต่างชาติ:</strong> Passport (อายุเหลือไม่น้อยกว่า 6 เดือน) / Visa ตามข้อกำหนด</div>' +
            '<div>🚗 <strong>การขับขี่รถยนต์:</strong> ใบอนุญาตขับขี่รถยนต์ส่วนบุคคล หรือใบขับขี่สากล (International Driving Permit)</div>' +
          '</div>'
        );
      });
    }

    if (closeBtn && modal) {
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

    // Scroll reveal
    initReveal();
  }

  function showModal(badge, title, htmlContent) {
    var modal = document.getElementById('contactInfoModal');
    var badgeEl = document.getElementById('cModalBadge');
    var titleEl = document.getElementById('cModalTitle');
    var bodyEl = document.getElementById('cModalBodyText');

    if (!modal) return;
    if (badgeEl) badgeEl.textContent = badge;
    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = htmlContent;

    modal.classList.add('active');
    document.body.classList.add('drawer-open');
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

  document.addEventListener('DOMContentLoaded', initContactPage);

})();
