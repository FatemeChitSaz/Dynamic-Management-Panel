# Dynamic Management Panel

یک پنل مدیریتی (Dashboard) ساخته‌شده با React و Vite که اطلاعات کاربران، پست‌ها، تسک‌ها و کامنت‌ها را از یک API نمایش می‌دهد و امکان جست‌وجو، ویرایش و حذف را فراهم می‌کند.

🔗 **لینک پروژه:** [dynamic-management-panel-git-main-abcde25.vercel.app](https://dynamic-management-panel-git-main-abcde25.vercel.app/)
![دمو پروژه](./assets/Display.gif)

---

## 📋 فهرست مطالب

- [ویژگی‌ها](#-ویژگی‌ها)
- [تکنولوژی‌های استفاده‌شده](#-تکنولوژی‌های-استفاده‌شده)
- [ساختار پروژه](#-ساختار-پروژه)
- [نصب و اجرا](#-نصب-و-اجرا)
- [منبع داده](#-منبع-داده)
- [محدودیت‌های شناخته‌شده](#-محدودیت‌های-شناخته‌شده)
- [نقشه‌ی راه (بهبودهای آینده)](#-نقشه‌ی-راه-بهبودهای-آینده)

---

## ✨ ویژگی‌ها

- **مدیریت کاربران:** مشاهده، جست‌وجو، ویرایش و حذف کاربران
- **مدیریت پست‌ها:** مشاهده‌ی لیست پست‌ها به همراه اطلاعات نویسنده
- **مدیریت تسک‌ها:** مشاهده‌ی وضعیت تسک‌ها و تغییر اولویت آن‌ها
- **مدیریت کامنت‌ها:** مشاهده و حذف کامنت‌ها به همراه پست مرتبط
- **رابط کاربری راست‌به‌چپ (RTL):** طراحی‌شده برای زبان فارسی
- **طراحی واکنش‌گرا (Responsive):** سازگار با اندازه‌های مختلف صفحه‌نمایش

---

## 🛠 تکنولوژی‌های استفاده‌شده

| ابزار | کاربرد |
|---|---|
| [React](https://react.dev) | ساخت رابط کاربری |
| [Vite](https://vitejs.dev) | ابزار build و dev server سریع |
| [Tailwind CSS](https://tailwindcss.com) | استایل‌دهی |
| [React Router](https://reactrouter.com) | مسیریابی بین صفحات |
| [Heroicons](https://heroicons.com) | آیکون‌ها |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com) | API نمونه برای داده‌های تست |

---

## 📁 ساختار پروژه

```
src/
├── API/
│   └── API.js              # لایه‌ی متمرکز ارتباط با سرور
├── hooks/
│   └── getData.js          # هوک عمومی fetch داده
├── component/
│   └── layout/
│       ├── Navbar.jsx
│       └── Sidebar.jsx
├── Users/
│   ├── Users.jsx
│   ├── UserTable.jsx
│   ├── UserAction.jsx
│   ├── UserSearchFilter.jsx
│   ├── EditUserModal.jsx
│   └── UserDetailModal.jsx
├── Posts/
│   ├── Posts.jsx
│   ├── PostList.jsx
│   └── PostDetailsModall.jsx
├── Tasks/
│   ├── Tasks.jsx
│   └── TasksList.jsx
├── comments/
│   ├── Comments.jsx
│   ├── CommentList.jsx
│   └── commentsDetailsModal.jsx
├── App.jsx
└── main.jsx
```

---

## 🚀 نصب و اجرا

### پیش‌نیازها
- [Node.js](https://nodejs.org) نسخه‌ی ۱۸ یا بالاتر
- npm یا yarn

### مراحل نصب

```bash
# کلون کردن پروژه
git clone https://github.com/FatemeChitSaz/Dynamic-Management-Panel.git

# ورود به پوشه‌ی پروژه
cd Dynamic-Management-Panel

# نصب پکیج‌ها
npm install

# اجرای پروژه در حالت توسعه
npm run dev
```

پس از اجرا، پروژه روی آدرس زیر در دسترس خواهد بود:
```
http://localhost:5173
```

### ساخت نسخه‌ی نهایی (Production Build)

```bash
npm run build
```

---

## 🌐 منبع داده

این پروژه از [JSONPlaceholder](https://jsonplaceholder.typicode.com) به‌عنوان یک **fake REST API** برای شبیه‌سازی داده‌ها استفاده می‌کند. تمام عملیات خواندن (`GET`) واقعی هستند، اما داده‌ها به‌صورت دائمی روی سرور ذخیره (persist) نمی‌شوند — یعنی عملیات ویرایش و حذف پس از رفرش صفحه به حالت اولیه بازمی‌گردند.

Endpoint‌های استفاده‌شده:
- `/users` — لیست کاربران
- `/posts` — لیست پست‌ها
- `/todos` — لیست تسک‌ها
- `/comments` — لیست کامنت‌ها

---

## ⚠️ محدودیت‌های شناخته‌شده

- به دلیل استفاده از JSONPlaceholder، تغییرات (ویرایش/حذف) پس از رفرش صفحه ذخیره نمی‌مانند.
- فیلد "اولویت" (priority) در تسک‌ها صرفاً یک ویژگی سمت کلاینت است و در API واقعی وجود ندارد.
- بدون احراز هویت (authentication) — این پروژه صرفاً برای نمایش قابلیت‌های فرانت‌اند طراحی شده است.

---

## 🗺 نقشه‌ی راه (بهبودهای آینده)

- [ ] اتصال به یک بک‌اند واقعی برای ذخیره‌سازی دائمی
- [ ] افزودن صفحه‌بندی (Pagination) برای لیست‌های بزرگ
- [ ] افزودن تست‌های واحد (Unit Tests)
- [ ] پیاده‌سازی احراز هویت کاربران

---

## 📄 لایسنس

این پروژه صرفاً جهت یادگیری و نمایش مهارت ساخته شده است.
