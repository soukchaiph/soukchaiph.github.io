# 📚 ห้องเรียนออนไลน์

เว็บไซต์บทเรียนออนไลน์ หลากหลายวิชา รองรับ PDF และรูปภาพ  
Deploy บน **GitHub Pages ฟรี** ไม่ต้องมีเซิร์ฟเวอร์!

---

## 🚀 วิธี Deploy ขึ้น GitHub Pages

### ขั้นตอนที่ 1 — สร้าง Repository ใหม่

1. ไปที่ [github.com](https://github.com) แล้ว **Sign in**
2. คลิก **"New repository"** (ปุ่มสีเขียว)
3. ตั้งชื่อ เช่น `my-lessons` หรือ `classroom`
4. เลือก **Public**
5. คลิก **"Create repository"**

### ขั้นตอนที่ 2 — อัปโหลดไฟล์

**วิธีง่าย (ไม่ต้องใช้ Git):**
1. ในหน้า Repository คลิก **"Add file" → "Upload files"**
2. ลากทั้งโฟลเดอร์ `lesson-website` ใส่ได้เลย
3. คลิก **"Commit changes"**

### ขั้นตอนที่ 3 — เปิด GitHub Pages

1. ไปที่ **Settings** (แถบด้านบนของ repo)
2. เลื่อนลงหา **"Pages"** ในเมนูซ้าย
3. ใต้ **Source** เลือก `Deploy from a branch`
4. Branch เลือก `main` → folder เลือก `/ (root)`
5. คลิก **Save**
6. รอสักครู่ แล้วเว็บจะอยู่ที่:  
   `https://ชื่อuser.github.io/ชื่อrepo/`

---

## ✏️ วิธีเพิ่มวิชาและบทเรียน

แก้ไขไฟล์ `assets/lessons.js` เพียงไฟล์เดียว!

### เพิ่มบทเรียนในวิชาที่มีอยู่

```js
// ใน SUBJECTS หาวิชาที่ต้องการ แล้วเพิ่มใน lessons array
{
  title: "บทที่ 4 — ตรีโกณมิติ",
  type: "pdf",                          // pdf / img / link
  url: "assets/pdfs/math-ch4.pdf",     // path ไปยังไฟล์
  desc: "sin cos tan และการประยุกต์ใช้"
}
```

### เพิ่มวิชาใหม่

```js
{
  id: "art",
  name: "ศิลปะ",
  icon: "🎨",
  color: "#FF6B6B",
  colorLight: "rgba(255,107,107,0.12)",
  desc: "วาดเส้น สี และประติมากรรม",
  lessons: [
    {
      title: "บทที่ 1 — ทฤษฎีสี",
      type: "pdf",
      url: "assets/pdfs/art-ch1.pdf",
      desc: "วงจรสี สีเสริม และสีตรงข้าม"
    }
  ]
}
```

### ประเภทของบทเรียน

| type | ความหมาย | วางไฟล์ที่ |
|------|-----------|-----------|
| `pdf` | ไฟล์ PDF | `assets/pdfs/` |
| `img` | รูปภาพ | `assets/images/` |
| `link` | ลิงก์ภายนอก | ใส่ URL เต็ม |

---

## 📁 โครงสร้างไฟล์

```
lesson-website/
├── index.html              ← หน้าหลัก (ไม่ต้องแก้)
├── assets/
│   ├── style.css           ← สไตล์ (ไม่ต้องแก้)
│   ├── app.js              ← logic (ไม่ต้องแก้)
│   ├── lessons.js          ← ✅ แก้ตรงนี้เพื่อเพิ่มบทเรียน
│   ├── pdfs/               ← วาง PDF ไว้ที่นี่
│   └── images/             ← วางรูปภาพไว้ที่นี่
└── README.md
```

---

## 💡 เคล็ดลับ

- ชื่อไฟล์ PDF/รูปภาพ **ห้ามมีช่องว่าง** ใช้ `-` แทน เช่น `math-chapter1.pdf`
- ไฟล์ PDF ขนาดใหญ่ GitHub รองรับได้สูงสุด 25MB ต่อไฟล์
- หากมีไฟล์เยอะมาก แนะนำให้ใช้ [Git LFS](https://git-lfs.com/)

---

สร้างด้วย ❤️ เพื่อการศึกษาที่เข้าถึงได้ทุกคน
