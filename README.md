# 🌴 เที่ยวเมืองไทย (Travel Thailand) — สวยทุกที่..มีเสน่ห์ไม่ซ้ำใคร

เว็บไซต์แนะนำสถานที่ท่องเที่ยว ทริปเดินทาง ที่พักร้านอาหาร และข้อมูลการเดินทางทั่วประเทศไทย ออกแบบและพัฒนาด้วยแนวคิด **Warm Thai Earth Tones** ร่วมสมัย ถอดแบบจาก Figma มาพัฒนาเป็นเว็บไซต์จริงด้วยมาตรฐาน Production-Ready

---

## 🔗 ลิงก์ที่เกี่ยวข้อง (Project Links)

* 🌐 **Live Website**: [https://aanyikaaa-rgb.github.io/projectbyebye/](https://aanyikaaa-rgb.github.io/projectbyebye/)
* 🎨 **Figma Design**: [Figma Project Link](https://www.figma.com/design/4qYUukmuXxCxmJDGcn7TIy/078-%E0%B8%AD%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B4%E0%B8%81%E0%B8%B2?node-id=0-1&t=vxaNnbvufzl4PVoh-1)

---

## 🎯 วัตถุประสงค์และกลุ่มเป้าหมาย (Project Objectives)

* **วัตถุประสงค์ (Objectives)**: เพื่อสร้างเว็บไซต์รวบรวมข้อมูลท่องเที่ยวประเทศไทยที่ใช้งานง่าย สวยงาม ทันสมัย และโหลดได้อย่างรวดเร็ว โดยประยุกต์ใช้ทักษะการถอดรหัสงานออกแบบจาก Figma มาพัฒนาเป็นโค้ด HTML5, CSS3 และ JavaScript บริสุทธิ์
* **กลุ่มเป้าหมาย (Target Audience)**: นักท่องเที่ยวชาวไทยและต่างชาติ ผู้ที่มองหาสถานที่ท่องเที่ยวจัดแพลนทริป ค้นหาที่พัก ร้านอาหาร และเส้นทางการเดินทางทั่วไทย

---

## 🛠️ เทคโนโลยีที่ใช้ (Technology Stack)

| หมวดหมู่ (Category) | เทคโนโลยีที่ใช้ (Technology Used) |
| :--- | :--- |
| **Design** | Figma (UX/UI Layouts, Design System Tokens, Variants & Auto Layout) |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+ Vanilla JS) |
| **Framework** | Vanilla Web (ไม่ใช้ Framework / No Framework MPA) |
| **CSS / UI** | เขียน CSS เอง 100% (CSS Variables, Flexbox, CSS Grid, Glassmorphic Overlay, Animations) |
| **Assets** | Google Fonts (`Bai Jamjuree`, `Prompt`, `Sarabun`) & Inline Vector SVG Icons |
| **Version Control** | Git & GitHub |
| **Hosting** | GitHub Pages |
| **AI Tools** | Google Antigravity AI (Gemini 3.6 Flash / Claude 3.5 Sonnet) |
| **Testing** | Chrome DevTools, Responsive Design Mode & Lighthouse Performance Audit |

---

## ✨ ฟังก์ชันหลักของเว็บไซต์ (Features)

1. **Full-Width Cinematic Hero Banner**: สไลเดอร์ภาพพื้นหลังเปลี่ยนภาพนุ่มนวล พร้อมปุ่มควบคุมและจุดบอกสถานะ
2. **Live Search & Category Filtering**: ระบบค้นหาและเลือกหมวดหมู่สถานที่/ทริปแบบเรียลไทม์ด้วย JavaScript
3. **Card Inline Image Sliders**: สไลเดอร์ภาพแยกอิสระในแต่ละการ์ด รองรับการใช้นิ้วปัด (Touch Swipe) บนมือถือ และจะหยุดสไลด์อัตโนมัติเมื่อวางเมาส์ Hover
4. **Interactive Detail Modals**: ป๊อปอัพขยายข้อมูลรายละเอียดสถานที่ ทริปการเดินทาง Day-by-Day และคู่มือท่องเที่ยว
5. **Interactive Trip Planner & Checklist**: ตัวช่วยเลือกสไตล์ทริปเพื่อสร้างแผนเดินทางแนะนำพร้อมเช็กลิสต์จัดกระเป๋าที่โต้ตอบได้จริง
6. **Route Calculator & Preset Chips**: ระบบคำนวณระยะทาง/เวลาเดินทาง พร้อมปุ่มลัด 1-Click เส้นทางยอดนิยม (*กรุงเทพฯ ➔ เชียงใหม่*, *กรุงเทพฯ ➔ กระบี่*, *เชียงใหม่ ➔ ภูเก็ต*)
7. **Mobile Drawer Navigation**: เมนูสไลด์เข้าจากด้านข้างบนมือถือ พร้อมระบบ Backdrop Blur และการปิดด้วยปุ่ม Esc หรือคลิกฉากหลัง

---

## 🎨 การแปลงงานออกแบบจาก Figma (Design Implementation)

* **Color Palette (โทนสีตาม Figma Color Style)**:
  * `--bg-main` (`#F5EFE6`), `--bg-secondary` (`#EBE2D4`), `--bg-card` (`#E4DACB`): ผิวสัมผัสกระดาษสาและโทนทรายอบอุ่น
  * `--accent-gold` (`#C5A059`), `--accent-olive` (`#929567`), `--accent-bronze` (`#885B35`): สีทองคำ ไทยเฮอริเทจ และเขียวมะกอกธรรมชาติ
  * `--text-primary` (`#3E352B`): สีน้ำตาลเข้มอ่านง่าย เพิ่มความนุ่มนวลแทนสีดำบริสุทธิ์
* **Typography Hierarchy**:
  * **Headings**: `Bai Jamjuree` (ความร่วมสมัยและลายเส้นไทย)
  * **Body & Controls**: `Prompt` และ `Sarabun` (อ่านง่าย คมชัดทุกอุปกรณ์)
* **Auto Layout to Code Mapping**: แปลง Figma Auto Layout เป็น Flexbox & CSS Grid พร้อมกำหนด Border Radius ตั้งแต่ `8px` ถึง `9999px` (Pill Buttons) และใช้ Drop Shadow มิติชั้นลึก

---

## 📱 การรองรับทุกขนาดหน้าจอ (Responsive Design)

* **Mobile (< 768px)**: แสดงผลแบบ 1 Column, เปลี่ยนระบบ Nav เป็น Mobile Hamburger Drawer, รองรับการเลื่อน Touch Swipe บนสไลเดอร์
* **Tablet (768px - 1024px)**: แสดงผลแบบ 2 Column Grid, ปรับระยะ Spacing ให้พอดีกับหน้าจอสัมผัส
* **Desktop (> 1024px)**: แสดงผลแบบ Multi-Column Grids, Nav Bar แบบแนวนอนสมบูรณ์, มี Hero Photo Collage และควบคุมด้วยคอนเทนเนอร์สูงสุด `1240px`

---

## 🤖 การประยุกต์ใช้ AI ในการพัฒนา (AI Usage)

* **เครื่องมือที่ใช้ (Tools)**: Google Antigravity AI (Gemini 3.6 Flash / Claude 3.5 Sonnet)
* **ขั้นตอน & Prompt**:
  1. ใช้ AI วิเคราะห์ไฟล์ Figma เพื่อสกัด Design Tokens (Colors, Typography, Spacing) ออกมาเป็น CSS Variables
  2. ให้ AI ช่วยสร้างโครงสร้าง Semantic HTML5 และ Modular CSS
  3. ให้ AI พัฒนาสคริปต์ JavaScript สำหรับระบบสไลเดอร์ภาพ, Live Search, Category Filtering และ Interactive Modals
  4. ให้ AI ช่วย Refactor ปรับปรุงโค้ด ลบข้อมูลสถานที่ที่ไม่ต้องการ และแก้ไขบั๊กระบบโต้ตอบในปุ่มกด
* **ผลลัพธ์และการแก้ไข**: ช่วยลดเวลาในการเขียนโค้ดได้มากกว่า 70% ได้ซอร์สโค้ดที่เป็นระเบียบ ปราศจาก Error และประมวลผลบนเบราว์เซอร์ได้อย่างราบรื่น

---

## 🚀 การเผยแพร่เว็บไซต์ (Deployment)

* **Hosting**: GitHub Pages
* **Build Command**: ไม่ต้องมีขั้นตอน Build (Static Native HTML/CSS/JS)
* **ขั้นตอน Deploy**:
  1. Commit และ Push ซอร์สโค้ดทั้งหมดขึ้น GitHub Repository (`aanyikaaa-rgb/projectbyebye`)
  2. ไปที่ **Settings** ➔ **Pages** บน GitHub Repository
  3. ในส่วน **Build and deployment** เลือก Source เป็น `Deploy from a branch`
  4. เลือก Branch `main` / `root` แล้วกด Save เพื่อเผยแพร่แบบออนไลน์

---

## 💡 ปัญหาที่พบและสิ่งที่เรียนรู้ (Challenges & Learnings)

* **ปัญหาที่พบ (Challenges)**:
  * การทำให้ Card Inline Image Slider ทำงานแยกกันเป็นอิสระและรองรับ Touch Swipe บนมือถือโดยไม่พึ่งพา Library ภายนอก
  * การทำให้ปุ่มกดและ Modal Popup ทำงานได้ถูกต้อง 100% บนทุกเบราว์เซอร์โดยไม่โดน Event Bubbling รบกวน
* **แนวทางแก้ไข (Solutions)**:
  * เขียน Event Listener ครอบการทำงานของ Touch Events (`touchstart`, `touchend`) และใช้ `requestAnimationFrame` สำหรับแอนิเมชัน
  * ผูกฟังก์ชันเข้ากับ `window` Object ระดับ Global และระบุ `onclick` ให้กับปุ่มอย่างชัดเจน
* **สิ่งที่เรียนรู้ (Learnings)**:
  * ได้เรียนรู้เทคนิคการแปลง Figma Design System มาเป็นโค้ดเว็บจริงแบบ Pixel-Perfect
  * เข้าใจการสร้างเว็บแบบ Vanilla HTML/CSS/JS ที่เน้น Performance สูง และความสำคัญของการใช้ AI ช่วยพัฒนาซอฟต์แวร์อย่างมีประสิทธิภาพ

---

## 👤 ผู้จัดทำ (Author)

* **ชื่อ–นามสกุล**: นางสาวอัญญิกา น้อยปินตา
* **รหัสนักศึกษา**: 68319100078
