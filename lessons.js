/**
 * ====================================================
 *  lessons.js — ข้อมูลวิชาและบทเรียนทั้งหมด
 * ====================================================
 *  วิธีเพิ่มวิชาใหม่:
 *  1. copy object ใน SUBJECTS แล้ว แก้ id, name, icon, color, desc
 *  2. เพิ่ม lessons ใน array ของวิชานั้น
 *
 *  ประเภทของ lesson (type):
 *    "pdf"  → ไฟล์ PDF  (วางไว้ที่ assets/pdfs/ชื่อไฟล์.pdf)
 *    "img"  → รูปภาพ    (วางไว้ที่ assets/images/ชื่อไฟล์.jpg)
 *    "link" → ลิงก์ภายนอก (ใส่ url เต็ม)
 * ====================================================
 */

const SUBJECTS = [
  {
    id: "math",
    name: "คณิตศาสตร์",
    icon: "📐",
    color: "#845EF7",           // สีพื้นหลัง card-top
    colorLight: "rgba(132,94,247,0.12)",
    desc: "ตัวเลข สมการ เรขาคณิต และสถิติ",
    lessons: [
      {
        title: "บทที่ 1 — จำนวนและการดำเนินการ",
        type: "pdf",
        url: "assets/pdfs/math-ch1.pdf",
        desc: "บวก ลบ คูณ หาร จำนวนเต็มและทศนิยม"
      },
      {
        title: "บทที่ 2 — สมการเชิงเส้น",
        type: "pdf",
        url: "assets/pdfs/math-ch2.pdf",
        desc: "การแก้สมการตัวแปรเดียวและสองตัวแปร"
      },
      {
        title: "บทที่ 3 — เรขาคณิต",
        type: "img",
        url: "assets/images/math-geo.jpg",
        desc: "มุม รูปสามเหลี่ยม วงกลม และพื้นที่"
      }
    ]
  },
  {
    id: "science",
    name: "วิทยาศาสตร์",
    icon: "🔬",
    color: "#20C997",
    colorLight: "rgba(32,201,151,0.12)",
    desc: "ฟิสิกส์ เคมี ชีววิทยา และโลก-อวกาศ",
    lessons: [
      {
        title: "บทที่ 1 — สสารและการเปลี่ยนแปลง",
        type: "pdf",
        url: "assets/pdfs/sci-ch1.pdf",
        desc: "สถานะของสสาร การเปลี่ยนสถานะ และโมเลกุล"
      },
      {
        title: "บทที่ 2 — แรงและการเคลื่อนที่",
        type: "pdf",
        url: "assets/pdfs/sci-ch2.pdf",
        desc: "แรง ความเร็ว ความเร่ง กฎของนิวตัน"
      },
      {
        title: "อินโฟกราฟิก — ระบบสุริยะ",
        type: "img",
        url: "assets/images/sci-solar.jpg",
        desc: "ดาวเคราะห์ทั้ง 8 ดวงและข้อมูลสำคัญ"
      }
    ]
  },
  {
    id: "thai",
    name: "ภาษาไทย",
    icon: "📖",
    color: "#FF922B",
    colorLight: "rgba(255,146,43,0.12)",
    desc: "การอ่าน การเขียน ไวยากรณ์ และวรรณคดี",
    lessons: [
      {
        title: "บทที่ 1 — ชนิดของคำ",
        type: "pdf",
        url: "assets/pdfs/thai-ch1.pdf",
        desc: "คำนาม คำกริยา คำวิเศษณ์ และคำสันธาน"
      },
      {
        title: "บทที่ 2 — การเขียนเรียงความ",
        type: "pdf",
        url: "assets/pdfs/thai-ch2.pdf",
        desc: "โครงสร้าง การย่อหน้า และการใช้ภาษาที่ถูกต้อง"
      },
      {
        title: "สรุปวรรณคดีสำคัญ",
        type: "img",
        url: "assets/images/thai-lit.jpg",
        desc: "ราชาธิราช สามก๊ก รามเกียรติ์ และอื่นๆ"
      }
    ]
  },
  {
    id: "social",
    name: "สังคมศึกษา",
    icon: "🌍",
    color: "#339AF0",
    colorLight: "rgba(51,154,240,0.12)",
    desc: "ประวัติศาสตร์ ภูมิศาสตร์ หน้าที่พลเมือง",
    lessons: [
      {
        title: "บทที่ 1 — ประวัติศาสตร์ไทย",
        type: "pdf",
        url: "assets/pdfs/social-ch1.pdf",
        desc: "สมัยสุโขทัย อยุธยา รัตนโกสินทร์"
      },
      {
        title: "บทที่ 2 — ภูมิศาสตร์ประเทศไทย",
        type: "pdf",
        url: "assets/pdfs/social-ch2.pdf",
        desc: "ที่ตั้ง ภูมิภาค ทรัพยากรธรรมชาติ"
      },
      {
        title: "แผนที่ประเทศไทย",
        type: "img",
        url: "assets/images/social-map.jpg",
        desc: "แผนที่ 77 จังหวัดพร้อมชื่อ"
      }
    ]
  },
  {
    id: "english",
    name: "ภาษาอังกฤษ",
    icon: "🇬🇧",
    color: "#F06595",
    colorLight: "rgba(240,101,149,0.12)",
    desc: "Grammar, Vocabulary, Reading & Writing",
    lessons: [
      {
        title: "Unit 1 — Present Tenses",
        type: "pdf",
        url: "assets/pdfs/eng-ch1.pdf",
        desc: "Simple Present, Present Continuous, Present Perfect"
      },
      {
        title: "Unit 2 — Vocabulary: Daily Life",
        type: "pdf",
        url: "assets/pdfs/eng-ch2.pdf",
        desc: "คำศัพท์ที่ใช้ในชีวิตประจำวัน 200 คำ"
      }
    ]
  },
  {
    id: "computer",
    name: "คอมพิวเตอร์",
    icon: "💻",
    color: "#FF6B6B",
    colorLight: "rgba(255,107,107,0.12)",
    desc: "พื้นฐานคอมพิวเตอร์ อินเทอร์เน็ต และการเขียนโปรแกรม",
    lessons: [
      {
        title: "บทที่ 1 — พื้นฐานคอมพิวเตอร์",
        type: "pdf",
        url: "assets/pdfs/comp-ch1.pdf",
        desc: "Hardware, Software, Input/Output Devices"
      },
      {
        title: "บทที่ 2 — อินเทอร์เน็ตและความปลอดภัย",
        type: "pdf",
        url: "assets/pdfs/comp-ch2.pdf",
        desc: "การใช้อินเทอร์เน็ตอย่างปลอดภัยและถูกต้อง"
      }
    ]
  }
];
