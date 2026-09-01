/* ==========================================================================
   TRAVEL GUIDE PAGE JS — หน้าข้อมูลการเดินทาง (travel-info.js)
   ========================================================================== */

(function () {
  'use strict';

  var MENU_DATA = {
    cardPlanner: {
      badge: '📖 แพลนเนอร์จัดทริป',
      title: 'แพลนเนอร์ทัวร์ & ตัวช่วยวางแผนเดินทาง',
      content: `
        <div style="background: var(--bg-card); padding: 20px; border-radius: var(--radius-md); margin-bottom: 20px;">
          <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 14px;">🎯 เลือกรูปแบบทริปที่ต้องการ:</h4>
          
          <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
            <button type="button" class="planner-chip active" data-type="nature" onclick="switchPlannerTab(this, 'nature')">🌿 เน้นธรรมชาติ / ดอย</button>
            <button type="button" class="planner-chip" data-type="beach" onclick="switchPlannerTab(this, 'beach')">🏖️ เน้นทะเล / ดำน้ำ</button>
            <button type="button" class="planner-chip" data-type="culture" onclick="switchPlannerTab(this, 'culture')">🏛️ เน้นวัด / วัฒนธรรม</button>
            <button type="button" class="planner-chip" data-type="city" onclick="switchPlannerTab(this, 'city')">☕ คาเฟ่ & ไลฟ์สไตล์</button>
          </div>

          <div id="plannerOutput" style="background: var(--bg-main); padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
            <div style="font-weight: 700; color: var(--accent-bronze); margin-bottom: 8px;">🌿 แผนการเดินทางสายธรรมชาติ / ดอย (3 วัน 2 คืน):</div>
            <ul style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; list-style: disc; padding-left: 20px;">
              <li><strong>Day 1:</strong> เดินทางถึงจุดหมาย เช็คอินที่พัก เดินชมเมืองเก่า และลิ้มรสอาหารท้องถิ่นยามเย็น</li>
              <li><strong>Day 2:</strong> ออกเดินทางแต่เช้า ชมจุดไฮไลท์ธรรมชาติ หรือสักการะวัดสำคัญ ดำน้ำชมปะการัง</li>
              <li><strong>Day 3:</strong> แวะคาเฟ่บรรยากาศดี ซื้อของฝากประจำจังหวัด และเดินทางกลับอย่างปลอดภัย</li>
            </ul>
          </div>
        </div>

        <div style="background: var(--bg-secondary); padding: 16px 20px; border-radius: var(--radius-md);">
          <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 10px;">📋 เช็กลิสต์สิ่งของที่ควรเตรียม (Packing Checklist):</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; font-size: 0.85rem; color: var(--text-secondary);">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" checked> บัตรประชาชน / ตั๋วเดินทาง</label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox" checked> ยาประจำตัว & ชุดปฐมพยาบาล</label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox"> สายชาร์จ & Powerbank</label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox"> ครีมกันแดด / สเปรย์กันยุง</label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox"> ร่มพับ / หมวกกันแดด</label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;"><input type="checkbox"> กล้องถ่ายรูป & เมมโมรี่การ์ด</label>
          </div>
        </div>
      `
    },
    cardTransport: {
      badge: '✈️ คู่มือการเดินทาง',
      title: 'วิธีการเดินทางทั่วไทย (Transportation Options & Hub)',
      content: `
        <div style="display: grid; gap: 14px;">
          <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); display: flex; gap: 14px; align-items: flex-start;">
            <div style="font-size: 1.8rem; background: var(--bg-main); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">✈️</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">การเดินทางด้วยเครื่องบิน (Aviation)</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">รวดเร็วและสะดวกที่สุด เชื่อมต่อกรุงเทพฯ (สุวรรณภูมิ/ดอนเมือง) ไปยังสนามบินภูมิภาค เช่น เชียงใหม่, ภูเก็ต, กระบี่, สมุย, อุดรธานี ใช้เวลาบินเฉลียงเพียง 1 - 1.5 ชั่วโมง</p>
            </div>
          </div>

          <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); display: flex; gap: 14px; align-items: flex-start;">
            <div style="font-size: 1.8rem; background: var(--bg-main); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">🚆</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">การเดินทางด้วยรถไฟ (Rail Transport)</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">สัมผัสบรรยากาศสโลว์ไลฟ์ด้วยรถไฟด่วนพิเศษ CNR (ตู้ปรับอากาศนอน) ขบวนอุตราวิถี (เชียงใหม่), อีสานวัตนา (อุบลฯ), ทักษิณารัถย์ (หาดใหญ่) ขึ้น ณ สถานีกลางกรุงเทพอภิวัฒน์</p>
            </div>
          </div>

          <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); display: flex; gap: 14px; align-items: flex-start;">
            <div style="font-size: 1.8rem; background: var(--bg-main); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">🚌</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">รถประจำทาง & รถตู้ปรับอากาศ (Bus & Van)</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">ครอบคลุมทุกอำเภอและตัวเมือง เดินทางได้จากสถานีขนส่งหมอชิต 2 (สายเหนือ/อีสาน), สถานีขนส่งสายใต้ใหม่ (สายใต้) และสถานีขนส่งเอกมัย (สายตะวันออก)</p>
            </div>
          </div>

          <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); display: flex; gap: 14px; align-items: flex-start;">
            <div style="font-size: 1.8rem; background: var(--bg-main); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">🚗</div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px;">รถยนต์ส่วนบุคคล & มอเตอร์เวย์ (Self-Drive)</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">เดินทางด้วยความยืดหยุ่นสูง ใช้เส้นทางสายหลัก เช่น ทางหลวงหมายเลข 1 (พหลโยธิน), หมายเลข 4 (เพชรเกษม) หรือ มอเตอร์เวย์ M6 / M81 พร้อมจุดพักรถมาตรฐานตลอดทาง</p>
            </div>
          </div>
        </div>
      `
    },
    cardInfo: {
      badge: 'ℹ️ ข้อมูล & สายด่วน',
      title: 'ข้อมูลสำคัญ & เบอร์สายด่วนฉุกเฉิน (Essential Info & Hotlines)',
      content: `
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">🚨 เบอร์สายด่วนสำคัญที่ควรบันทึกไว้:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
            <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-gold);">
              <div style="font-size: 0.8rem; color: var(--text-secondary);">ตำรวจท่องเที่ยว (Tourist Police)</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--accent-bronze);">📞 1155</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">ช่วยเหลือและดูแลนักท่องเที่ยว 24 ชม.</div>
            </div>
            <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border-left: 4px solid #D9534F;">
              <div style="font-size: 0.8rem; color: var(--text-secondary);">การแพทย์ฉุกเฉิน (Ambulance)</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: #D9534F;">📞 1669</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">เจ็บป่วยฉุกเฉิน อุบัติเหตุทางถนน</div>
            </div>
            <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-olive);">
              <div style="font-size: 0.8rem; color: var(--text-secondary);">สายด่วนกรมทางหลวง (Highway)</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--accent-olive-dark);">📞 1586</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">สอบถามเส้นทาง รถเสียบนทางหลวง</div>
            </div>
            <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-sm); border-left: 4px solid #5BC0DE;">
              <div style="font-size: 0.8rem; color: var(--text-secondary);">ศูนย์บริการข่าวสาร ททท. (TAT Center)</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: #31708F;">📞 1672</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">ข้อมูลสถานที่ท่องเที่ยวและเทศกาล</div>
            </div>
          </div>
        </div>

        <div style="background: var(--bg-secondary); padding: 16px 20px; border-radius: var(--radius-md);">
          <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">💡 ข้อแนะนำและมารยาทการท่องเที่ยว:</h4>
          <ul style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.7; list-style: disc; padding-left: 20px;">
            <li><strong>แต่งกายสุภาพ:</strong> เมื่อเข้าชมวัดวาอารามหรือสถานที่ศักดิ์สิทธิ์ ควรสวมเสื้อมีแขน และกางเกง/กระโปรงยาวคลุมเข่า</li>
            <li><strong>การอนุรักษ์ธรรมชาติ:</strong> ช่วยกันรักษาความสะอาด ไม่ทิ้งขยะในแหล่งธรรมชาติ และไม่สัมผัสหรือทำลายแนวปะการัง</li>
            <li><strong>การเตรียมบัตรประจำตัว:</strong> พกบัตรประชาชนหรือหนังสือเดินทางฉบับจริง เพื่อใช้เช็คอินที่พักและยานพาหนะ</li>
          </ul>
        </div>
      `
    }
  };

  // Global functions exposed to window for inline onclick attributes
  window.openGuideMenuModal = function (cardId) {
    var modal = document.getElementById('guideMenuModal');
    var badgeEl = document.getElementById('guideModalBadge');
    var titleEl = document.getElementById('guideModalTitle');
    var contentEl = document.getElementById('guideModalContent');

    var data = MENU_DATA[cardId];
    if (!data || !modal) return;

    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (contentEl) contentEl.innerHTML = data.content;

    modal.classList.add('active');
    document.body.classList.add('drawer-open');
  };

  window.closeGuideMenuModal = function () {
    var modal = document.getElementById('guideMenuModal');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('drawer-open');
  };

  window.switchPlannerTab = function (btnEl, type) {
    var container = btnEl.closest('.modal-body-content');
    if (!container) container = document;
    var chips = container.querySelectorAll('.planner-chip');
    chips.forEach(function (c) { c.classList.remove('active'); });
    btnEl.classList.add('active');

    var output = container.querySelector('#plannerOutput');
    var PRESETS = {
      nature: `
        <div style="font-weight: 700; color: var(--accent-bronze); margin-bottom: 8px;">🌿 แผนการเดินทางสายธรรมชาติ / ดอย (3 วัน 2 คืน):</div>
        <ul style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; list-style: disc; padding-left: 20px;">
          <li><strong>Day 1:</strong> เดินทางถึงดอย ชมทิวทัศน์ทะเลหมอก และสัมผัสอากาศเย็นสบายยามเช้า</li>
          <li><strong>Day 2:</strong> เดินป่าศึกษาธรรมชาติ ชมนั่งกู่ / น้ำตกสวยงาม และกางเต็นท์นอนดูดาว</li>
          <li><strong>Day 3:</strong> ตื่นชมพระอาทิตย์ขึ้น ดื่มกาแฟดิฟสด และเดินทางกลับอย่างสดชื่น</li>
        </ul>
      `,
      beach: `
        <div style="font-weight: 700; color: var(--accent-bronze); margin-bottom: 8px;">🏖️ แผนการเดินทางสายทะเล / ดำน้ำ (3 วัน 2 คืน):</div>
        <ul style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; list-style: disc; padding-left: 20px;">
          <li><strong>Day 1:</strong> เช็คอินรีสอร์ตริมหาด เล่นน้ำทะเล พายเรือคายัค และชมพระอาทิตย์ตกดิน</li>
          <li><strong>Day 2:</strong> นั่งเรือสปีดโบ๊ทออกทัวร์เกาะ ดำน้ำตื้นชมฝูงปลาและแนวปะการัง</li>
          <li><strong>Day 3:</strong> พักผ่อนสปา รับประทานอาหารซีฟู้ดสดๆ ก่อนเดินทางกลับ</li>
        </ul>
      `,
      culture: `
        <div style="font-weight: 700; color: var(--accent-bronze); margin-bottom: 8px;">🏛️ แผนการเดินทางสายวัด / วัฒนธรรม (2 วัน 1 คืน):</div>
        <ul style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; list-style: disc; padding-left: 20px;">
          <li><strong>Day 1:</strong> กราบสักการะวัดสำคัญประจำเมือง ชมจิตรกรรมฝาผนังและสถาปัตยกรรมโบราณ</li>
          <li><strong>Day 2:</strong> ลิ้มลองอาหารพื้นเมืองดั้งเดิม ช้อปปิ้งของฝากหัตถกรรมพื้นบ้าน</li>
        </ul>
      `,
      city: `
        <div style="font-weight: 700; color: var(--accent-bronze); margin-bottom: 8px;">☕ แผนการเดินทางสายคาเฟ่ & ไลฟ์สไตล์ (2 วัน 1 คืน):</div>
        <ul style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; list-style: disc; padding-left: 20px;">
          <li><strong>Day 1:</strong> ตระเวนถ่ายรูปคาเฟ่สไตล์ชิคๆ ย่านฮิปสเตอร์ ช้อปปิ้งสินค้าแฮนด์เมด</li>
          <li><strong>Day 2:</strong> ทานบรันช์บรรยากาศดี ชมหอศิลป์ หรือจุดชมวิวเมืองมุมสูง</li>
        </ul>
      `
    };

    if (output && PRESETS[type]) {
      output.innerHTML = PRESETS[type];
    }
  };

  window.setRoutePreset = function (origin, dest) {
    var originInput = document.getElementById('routeOrigin');
    var destInput = document.getElementById('routeDestination');
    if (originInput) originInput.value = origin;
    if (destInput) destInput.value = dest;
    window.calculateRoute();
  };

  window.calculateRoute = function () {
    var originInput = document.getElementById('routeOrigin');
    var destInput = document.getElementById('routeDestination');
    var resultBox = document.getElementById('routeResultBox');

    if (!originInput || !destInput) return;

    var origin = originInput.value.trim();
    var dest = destInput.value.trim();

    if (!origin || !dest) {
      alert('กรุณาระบุทั้งจุดเริ่มต้นและจุดหมายปลายทาง');
      return;
    }

    var resDist = document.getElementById('resDistance');
    var resTime = document.getElementById('resTime');
    var resDesc = document.getElementById('resDesc');

    if (origin.includes('กรุงเทพ') && dest.includes('เชียงใหม่')) {
      if (resDist) resDist.textContent = '685 กม.';
      if (resTime) resTime.textContent = '9 ชม. 15 นาที';
      if (resDesc) resDesc.textContent = 'เส้นทางแนะนำ: ทางหลวงหมายเลข 1 (พหลโยธิน) มุ่งหน้าสู่ภาคเหนือ หรือรถไฟด่วนพิเศษ';
    } else if (origin.includes('กรุงเทพ') && dest.includes('กระบี่')) {
      if (resDist) resDist.textContent = '780 กม.';
      if (resTime) resTime.textContent = '10 ชม. 45 นาที';
      if (resDesc) resDesc.textContent = 'เส้นทางแนะนำ: ทางหลวงหมายเลข 4 (เพชรเกษม) มุ่งหน้าสู่ภาคใต้ หรือบินตรงสู่สนามบินกระบี่ (1 ชม. 20 นาที)';
    } else if (origin.includes('เชียงใหม่') && dest.includes('ภูเก็ต')) {
      if (resDist) resDist.textContent = '1,530 กม.';
      if (resTime) resTime.textContent = '2 ชม. (บินตรง)';
      if (resDesc) resDesc.textContent = 'เส้นทางแนะนำ: บินตรงจากสนามบินเชียงใหม่ (CNX) สู่สนามบินภูเก็ต (HKT) สบายและรวดเร็วที่สุด';
    } else {
      if (resDist) resDist.textContent = '240 - 550 กม.';
      if (resTime) resTime.textContent = '3 ชม. - 7 ชม.';
      if (resDesc) resDesc.textContent = 'เส้นทางสะดวกสบาย เชื่อมต่อทางหลวงหลักของประเทศไทย พร้อมจุดแวะพักปั๊มน้ำมันและร้านอาหารตลอดทาง';
    }

    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  function initTravelInfo() {
    var modal = document.getElementById('guideMenuModal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) window.closeGuideMenuModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        window.closeGuideMenuModal();
      }
    });

    initReveal();
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

  document.addEventListener('DOMContentLoaded', initTravelInfo);

})();
