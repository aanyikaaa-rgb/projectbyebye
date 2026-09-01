/**
 * MAIN JAVASCRIPT - เที่ยวเมืองไทย (Travel Thailand)
 * Cinematic Smooth Sliding Hero Banner, Auto-Play, Interactive Modals, Mobile Drawer, and Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initStickyHeader();
  initScrollAnimations();
  initCinematicHeroSlider();
  initAllModalsAndButtons();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. MOBILE DRAWER CONTROLLER
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');

  if (!hamburgerBtn || !mobileDrawer || !drawerOverlay) return;

  function openDrawer() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.classList.remove('drawer-open');
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer.classList.contains('active');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   2. STICKY HEADER WITH SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. SMOOTH SCROLL WITH OFFSET FOR HEADER
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update active class on nav links
        document.querySelectorAll('.header-nav-link').forEach(item => item.classList.remove('active'));
        if (this.classList.contains('header-nav-link')) {
          this.classList.add('active');
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. SCROLL REVEAL (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. CINEMATIC HERO SLIDER (ภาพค่อยๆ เคลื่อนและเปลี่ยนสไลด์อย่างนุ่มนวล)
   -------------------------------------------------------------------------- */
function initCinematicHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.banner-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const heroSection = document.getElementById('heroSection');

  if (!slides.length || !dots.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let autoPlayTimer = null;
  const autoPlayInterval = 5500; // 5.5 seconds per slide

  function goToSlide(index) {
    // Wrap index safely
    currentSlide = (index + totalSlides) % totalSlides;

    // Update slides
    slides.forEach((slide, idx) => {
      if (idx === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update dots
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, autoPlayInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Dot clicks
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx);
      startAutoPlay();
    });
  });

  // Next / Prev buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentSlide - 1);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentSlide + 1);
      startAutoPlay();
    });
  }

  // Pause auto play on mouse hover, resume on leave
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoPlay);
    heroSection.addEventListener('mouseleave', startAutoPlay);
    heroSection.addEventListener('touchstart', stopAutoPlay, { passive: true });
    heroSection.addEventListener('touchend', startAutoPlay, { passive: true });
  }

  // Start auto play initially
  startAutoPlay();
}

/* --------------------------------------------------------------------------
   6. MODAL & INTERACTIVE BUTTON SYSTEM
   -------------------------------------------------------------------------- */
const allContentData = {
  // Destinations
  'grand-palace': {
    title: 'พระบรมมหาราชวัง และวัดพระศรีรัตนศาสดาราม',
    badge: 'กรุงเทพมหานคร • มรดกทางวัฒนธรรม',
    image: 'assets/images/grand_palace.jpg',
    desc: 'พระบรมมหาราชวังและวัดพระแก้วเป็นศูนย์รวมจิตใจของชาวไทยและเป็นหนึ่งในสถานที่ท่องเที่ยวที่งดงามที่สุดในโลก โดดเด่นด้วยสถาปัตยกรรมไทยประเพณี ปราสาทราชมณเฑียร พระปรางค์ และภาพจิตรกรรมฝาผนังเรื่องรามเกียรติ์ที่ยาวที่สุดในโลก',
    highlights: [
      'กราบสักการะพระพุทธมหามณีรัตนปฏิมากร (พระแก้วมรกต)',
      'ชมพระที่นั่งจักรีมหาปราสาท ผสมผสานสถาปัตยกรรมไทย-ยุโรป',
      'เปิดให้เข้าชมทุกวัน เวลา 08:30 - 15:30 น.'
    ]
  },
  'phi-phi': {
    title: 'หมู่เกาะพีพี จังหวัดกระบี่',
    badge: 'กระบี่ • มุกงามแห่งทะเลอันดามัน',
    image: 'assets/images/phi_phi.jpg',
    desc: 'หมู่เกาะพีพี ประกอบด้วยเกาะพีพีดอนและเกาะพีพีเล ขึ้นชื่อเรื่องหน้าผาหินปูนสูงตระหง่าน น้ำทะเลสีมรกตใส หาดทรายขาวเนียน และจุดดำน้ำดูปะการังที่อุดมสมบูรณ์ รวมถึงอ่าวมาหยาและปิเละลากูนอันเลื่องชื่อ',
    highlights: [
      'ล่องเรือหางยาวสัมผัสความงามของอ่าวมาหยาและปิเละลากูน',
      'จุดชมวิวพีพีดอน (Phi Phi Viewpoint) แบบ 360 องศา',
      'ดำน้ำชมปะการังและฝูงปลาทะเลสีสันสดใสใต้ทะเลอันดามัน'
    ]
  },
  'wat-arun': {
    title: 'วัดอรุณราชวราราม',
    badge: 'กรุงเทพฯ • วัดวาอาราม ริมแม่น้ำ',
    image: 'assets/images/wat_arun.jpg',
    desc: 'วัดอรุณราชวราราม โดดเด่นด้วยพระปรางค์ริมแม่น้ำเจ้าพระยา ประดับด้วยเครื่องถ้วยชามกระเบื้องเคลือบสีสันสวยงาม ยามอาทิตย์อัสดงงดงามตระการตา',
    highlights: [
      'พระปรางค์สูง 67 เมตร ริมแม่น้ำเจ้าพระยา',
      'วิวยามพระอาทิตย์ตกดินอันงดงาม',
      'เดินทางสะดวกด้วยเรือข้ามฟากท่าน้ำ'
    ]
  },

  // Articles
  'maya-bay': {
    title: 'เที่ยวอ่าวมาหยา สวรรค์แห่งทะเลอันดามัน',
    badge: 'บทความทริป • เกาะพีพีเล จังหวัดกระบี่',
    image: 'assets/images/maya_bay.jpg',
    desc: 'อ่าวมาหยาเป็นเวิ้งอ่าวขนาดเล็กรูปพระจันทร์เสี้ยวที่โอบล้อมด้วยเขาหินปูนสูงชัน หาดทรายขาวละเอียดราวแป้ง และน้ำทะเลใสจนมองเห็นฝูงปลาฉลามหูดำว่ายเวียน ได้รับการฟื้นฟูธรรมชาติจนมีความสมบูรณ์งดงามระดับโลก',
    highlights: [
      'ชายหาดทรายขาวนุ่มและน้ำทะเลสีฟ้าเทอร์ควอยซ์ใสสะท้อนประกายแดด',
      'ชมระบบนิเวศปะการังและฉลามครีบดำในธรรมชาติอย่างยั่งยืน',
      'การเดินทางโดยเรือสปีดโบ๊ทหรือเรือหางยาวจากภูเก็ตหรืออ่าวนาง'
    ]
  },
  'railay-beach': {
    title: 'หาดไร่เลย์ สวรรค์ของคนรักทะเล',
    badge: 'ทริป • กระบี่',
    image: 'assets/images/railay_beach.jpg',
    desc: 'สัมผัสชายหาดน้ำใสโอบล้อมด้วยหน้าผาหินปูนสูงตระหง่าน เข้าถึงได้ด้วยเรือเท่านั้น เหมาะสำหรับเล่นน้ำ พายเรือคายัค และปีนผา',
    highlights: [
      'หน้าผาหินปูนสูงชันล้อมรอบหาด',
      'เข้าถึงได้เฉพาะทางเรือจากอ่าวนาง',
      'กิจกรรมปีนผา Rock Climbing ชั้นนำระดับโลก'
    ]
  },

  // 5 Feature Circles
  'feature-culture': {
    title: 'วัฒนธรรม และประเพณีไทยอันทรงคุณค่า',
    badge: 'หมวดหมู่ • วัฒนธรรมและประเพณี',
    image: 'assets/images/grand_palace.jpg',
    desc: 'ประเทศไทยอุดมไปด้วยมรดกทางวัฒนธรรมที่สืบทอดมายาวนานนับพันปี ทั้งสถาปัตยกรรมวัดวาอาราม เทศกาลสงกรานต์ ลอยกระทง ประเพณีผีตาโขน และศิลปะการแสดงโขนที่ได้รับการยกย่องจาก UNESCO',
    highlights: [
      'สัมผัสเทศกาลประเพณีระดับโลกตลอดทั้งปี',
      'เรียนรู้งานหัตถกรรมไทยและภูมิปัญญาท้องถิ่น',
      'เยือนเมืองมรดกโลกอยุธยา สุโขทัย และศรีเทพ'
    ]
  },
  'feature-nature': {
    title: 'ธรรมชาติเขียวขจี และป่าเขาอุดมสมบูรณ์',
    badge: 'หมวดหมู่ • ธรรมชาติเขียวขจี',
    image: 'assets/images/maya_bay.jpg',
    desc: 'สัมผัสความมหัศจรรย์ของธรรมชาติที่หลากหลาย ตั้งแต่เทือกเขาสูงสลับซับซ้อนและทะเลหมอกทางภาคเหนือ ผืนป่าดงดิบมรดกโลก ไปจนถึงท้องทะเลสีครามและหาดทรายขาวของอันดามันและอ่าวไทย',
    highlights: [
      'อุทยานแห่งชาติกว่า 150 แห่งทั่วประเทศ',
      'ทะเลหมอก ภูชี้ฟ้า ดอยอินทนนท์ และป่าดงพญาเย็น-เขาใหญ่',
      'จุดดำน้ำดูปะการังระดับท็อป 10 ของโลกที่หมู่เกาะสิมิลัน'
    ]
  },
  'feature-attractions': {
    title: 'สถานที่ท่องเที่ยวหลากหลาย ตอบโจทย์ทุกไลฟ์สไตล์',
    badge: 'หมวดหมู่ • สถานที่ท่องเที่ยวหลากหลาย',
    image: 'assets/images/phi_phi.jpg',
    desc: 'ไม่ว่าคุณจะเป็นสายลุย สายชิล สายถ่ายรูป หรือสายครอบครัว ประเทศไทยมีแหล่งท่องเที่ยวครบครัน ทั้งเมืองประวัติศาสตร์ ชุมชนริมน้ำ ตลาดน้ำ ธีมพาร์ค คาเฟ่ดีไซน์เก๋ และจุดชมวิวสุด Unseen',
    highlights: [
      'ตลาดน้ำโบราณและถนนคนเดินสุดคึกคัก',
      'แคมป์ปิ้ง เดินป่า และล่องแก่งผจญภัย',
      'จุดเช็กอินถ่ายรูปและคาเฟ่ระดับสากล'
    ]
  },
  'feature-food': {
    title: 'อาหารอร่อยขึ้นชื่อ สตรีทฟู้ดระดับโลก',
    badge: 'หมวดหมู่ • อาหารอร่อยขึ้นชื่อ',
    image: 'assets/images/phuket_oldtown.jpg',
    desc: 'สวรรค์ของนักชิม! อาหารไทยโดดเด่นด้วยรสชาติที่กลมกล่อม ทั้งเปรี้ยว หวาน เค็ม เผ็ด และความหอมของสมุนไพรพื้นบ้าน การันตีด้วยรางวัลมิชลินไกด์และชื่อเสียง Street Food ระดับโลก',
    highlights: [
      'ต้มยำกุ้ง ผัดไทย ส้มตำ และแกงมัสมั่นติดอันดับอาหารอร่อยที่สุดในโลก',
      'สตรีทฟู้ดเยาวราช ตลาดโต้รุ่ง และอาหารท้องถิ่น 4 ภาค',
      'ผลไม้ไทยตามฤดูกาล ทุเรียน มะม่วงน้ำดอกไม้ และมังคุด'
    ]
  },
  'feature-people': {
    title: 'ผู้คนน่ารัก เป็นกันเอง สยามเมืองยิ้ม',
    badge: 'หมวดหมู่ • มิตรไมตรีและรอยยิ้ม',
    image: 'assets/images/doi_suthep.jpg',
    desc: 'เอกลักษณ์ที่น่าประทับใจที่สุดของประเทศไทยคือไมตรีจิตและรอยยิ้มอันอบอุ่นจากคนไทย ที่พร้อมให้การต้อนรับและช่วยเหลือนักท่องเที่ยวด้วยความจริงใจดุจคนในครอบครัว',
    highlights: [
      'สัมผัสการบริการระดับโลกตามแบบฉบับไทย (Thai Hospitality)',
      'วิถีชุมชนท้องถิ่นที่อบอุ่นและเป็นกันเอง',
      'ความปลอดภัยและความสะดวกสบายในการท่องเที่ยว'
    ]
  },

  // Navigation Extras
  'recommended-trips': {
    title: 'ทริปท่องเที่ยวแนะนำประจำฤดูกาล',
    badge: 'แพลนท่องเที่ยว • แนะนำทริป',
    image: 'assets/images/doi_suthep_view.jpg',
    desc: 'รวมแผนการเดินทางท่องเที่ยวยอดนิยมทั่วไทย ทั้งทริปแอ่วเหนือรับลมหนาว ทริปเกาะสวรรค์แดนใต้ และทริปไหว้พระ 9 วัดในกรุงเทพฯ ครบทุกสไตล์',
    highlights: [
      'ทริป 3 วัน 2 คืน เชียงใหม่-ม่อนแจ่ม-ดอยสุเทพ',
      'ทริป One Day ดำน้ำเกาะพีพี-อ่าวมาหยา-ปิเละลากูน',
      'ทริปชิมของอร่อยรอบเกาะรัตนโกสินทร์และเยาวราช'
    ]
  },
  'hotels-restaurants': {
    title: 'ที่พักและร้านอาหารแนะนำทั่วไทย',
    badge: 'ข้อมูลท่องเที่ยว • ที่พักและร้านอาหาร',
    image: 'assets/images/phuket_oldtown.jpg',
    desc: 'ค้นพบที่พักหลากสไตล์ตั้งแต่พูลวิลล่าหรูริมทะเล รีสอร์ตวิวภูเขา โฮมสเตย์วิถีชุมชน ไปจนถึงร้านอาหารแนะนำระดับมิชลินและคาเฟ่บรรยากาศสุดชิลทั่วประเทศไทย',
    highlights: [
      'ที่พักติดชายหาดหัวหิน พัทยา ภูเก็ต และสมุย',
      'รีสอร์ตกลางสายหมอก เชียงใหม่ เชียงราย และเขาค้อ',
      'ร้านอาหารรสชาติต้นตำรับและสตรีทฟู้ดชื่อดัง'
    ]
  },
  'travel-info': {
    title: 'ข้อมูลการเดินทางท่องเที่ยวในประเทศไทย',
    badge: 'ข้อมูลการเดินทาง • คู่มือนักเดินทาง',
    image: 'assets/images/grand_palace.jpg',
    desc: 'วางแผนการเดินทางอย่างสะดวกสบายด้วยระบบคมนาคมที่เชื่อมโยงทั่วประเทศ ทั้งเที่ยวบินภายในประเทศ รถไฟทางคู่ รถโดยสารปรับอากาศ และระบบรถไฟฟ้า BTS/MRT ในกรุงเทพฯ',
    highlights: [
      'สายการบินในประเทศบินตรงสู่ทุกภูมิภาค',
      'รถไฟฟ้า BTS, MRT และเรือโดยสารในกรุงเทพฯ',
      'บริการรถเช่าพร้อมคนขับ และแอพพลิเคชันเรียกรถสะดวกสบาย'
    ]
  },
  'contact-us': {
    title: 'ติดต่อศูนย์ข้อมูลการท่องเที่ยว (Contact Us)',
    badge: 'บริการข้อมูลท่องเที่ยว • ททท.',
    image: 'assets/images/grand_palace.jpg',
    desc: 'สอบถามข้อมูลการท่องเที่ยว แนะนำเส้นทาง แจ้งเหตุฉุกเฉิน หรือขอรับแผ่นพับคู่มือการท่องเที่ยวได้ตลอด 24 ชั่วโมง ผ่านศูนย์บริการข้อมูลการท่องเที่ยว',
    highlights: [
      'สายด่วนการท่องเที่ยว (TAT Contact Center): โทร 1672',
      'ตำรวจท่องเที่ยว (Tourist Police): โทร 1155',
      'อีเมล: contact@tourismthailand.org'
    ]
  },
  'privacy-policy': {
    title: 'นโยบายความเป็นส่วนตัว (Privacy Policy)',
    badge: 'เอกสารทางกฎหมาย • ความปลอดภัยของข้อมูล',
    image: 'assets/images/grand_palace.jpg',
    desc: 'เราให้ความสำคัญสูงสุดกับการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้งาน เว็บไซต์นี้จัดทำขึ้นเพื่อการประชาสัมพันธ์การท่องเที่ยว ข้อมูลทั้งหมดจะถูกเก็บรักษาอย่างปลอดภัยตามมาตรฐาน พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)',
    highlights: [
      'เราไม่เปิดเผยข้อมูลส่วนบุคคลของคุณแก่บุคคลภายนอกโดยไม่ได้รับอนุญาต',
      'ใช้คุกกี้เฉพาะเพื่อเพิ่มประสิทธิภาพและประสบการณ์ในการใช้งานเว็บไซต์',
      'คุณสามารถติดต่อเพื่อขอตรวจสอบหรือลบข้อมูลได้ตลอดเวลา'
    ]
  },
  'terms-of-service': {
    title: 'ข้อตกลงและเงื่อนไขการใช้งาน (Terms of Services)',
    badge: 'เอกสารทางกฎหมาย • ข้อกำหนดการใช้งาน',
    image: 'assets/images/doi_suthep.jpg',
    desc: 'การเข้าชมและใช้งานเว็บไซต์นี้ถือว่าท่านยอมรับข้อตกลงและเงื่อนไขการใช้งาน ข้อมูล รูปภาพ และเนื้อหาบนเว็บไซต์มีลิขสิทธิ์เพื่อการส่งเสริมการท่องเที่ยวในประเทศไทย',
    highlights: [
      'เนื้อหาและรูปภาพสงวนลิขสิทธิ์สำหรับการเผยแพร่เพื่อการศึกษาและการท่องเที่ยว',
      'ห้ามนำรูปภาพหรือเนื้อหาไปใช้ในเชิงพาณิชย์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร',
      'ข้อมูลสถานที่และเวลาเปิดทำการอาจมีการเปลี่ยนแปลงตามประกาศของแต่ละสถานที่'
    ]
  }
};

function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'site-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; color: var(--accent-gold);">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function openModal(destKey) {
  const modalOverlay = document.getElementById('destModal');
  const data = allContentData[destKey] || allContentData['grand-palace'];
  if (!modalOverlay || !data) return;

  const modalImg = document.getElementById('modalImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const highlightsList = document.getElementById('modalHighlightsList');

  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = data.title;
  }
  if (modalBadge) modalBadge.textContent = data.badge;
  if (modalTitle) modalTitle.textContent = data.title;
  if (modalDesc) modalDesc.textContent = data.desc;

  if (highlightsList) {
    highlightsList.innerHTML = '';
    data.highlights.forEach(item => {
      const li = document.createElement('div');
      li.className = 'modal-highlight-item';
      li.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${item}</span>
      `;
      highlightsList.appendChild(li);
    });
  }

  modalOverlay.classList.add('active');
  document.body.classList.add('drawer-open');
}

function closeModal() {
  const modalOverlay = document.getElementById('destModal');
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.classList.remove('drawer-open');
}

function initAllModalsAndButtons() {
  const modalOverlay = document.getElementById('destModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  // Trigger buttons with data-dest
  document.querySelectorAll('[data-dest]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const destKey = btn.getAttribute('data-dest');
      openModal(destKey);
    });
  });

  // Destination cards whole card click
  document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'button') return;
      const btn = card.querySelector('.dest-btn');
      if (btn) {
        const destKey = btn.getAttribute('data-dest');
        openModal(destKey);
      }
    });
  });

  // Article cards whole card click
  document.querySelectorAll('.article-row-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const readMore = card.querySelector('.read-more-tag');
      if (readMore) {
        const destKey = readMore.getAttribute('data-dest');
        openModal(destKey);
      }
    });
  });

  // Social Icon buttons
  document.querySelectorAll('.social-icon-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = btn.getAttribute('aria-label') || 'โซเชียลมีเดีย';
      showToast(`กำลังเปิดหน้า ${platform} เที่ยวเมืองไทย...`);
    });
  });

  // Modal Close triggers
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}
