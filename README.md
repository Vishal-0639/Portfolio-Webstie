.
# ⚡ Vishal Dharsan P S — Developer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/LeetCode_API-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode" />
  <img src="https://img.shields.io/badge/EmailJS-EA580C?style=for-the-badge&logo=mailgun&logoColor=white" alt="EmailJS" />
</div>

<br />

A sleek, high-performance, dark-themed editorial developer portfolio engineered with **React** and **Vite**. Features custom Framer-inspired spring transitions, live dynamic LeetCode problem-solving sync, interactive 3D perspective tilt cards, a trailing canvas cursor, and secure EmailJS integration.

---

## ✨ Key Features

- **🖤 High-Fashion Dark & Red Editorial Design**: Pure black backgrounds (`#000000`) paired with vivid crimson red accents (`#ef4444`) and typography powered by *Bebas Neue* & *Inter*.
- **📈 Real-Time LeetCode Live Status Sync**: Automatically fetches and renders live problem-solving counts (Easy, Medium, Hard) and progress bars via a cached REST proxy.
- **🕶️ Interactive 3D Tilt Project Cards**: Dynamic mouse-driven 3D perspective cards with dark glassmorphic mockups and featured badges.
- **🖱️ Precision Custom Mouse Cursor**: Smooth lagging outer glow ring with active-element magnetic expansions (automatically disabled on touch devices).
- **🌓 Light & Dark Theme Switcher**: Toggle between the signature dark cinematic aesthetic and a clean slate-white theme with persistent `localStorage` preference.
- **💼 Dedicated Experience & Education Rosters**: Clear presentation of industry internships (Full-Stack & Frontend) alongside university academics and industry certifications (AWS, Meta, Infosys, IBM, Oracle).
- **✉️ Client-Side Email Dispatch**: Working contact form hooked into **EmailJS** with environment variable security.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend Core** | React 19, Vite, JavaScript (ES6+) |
| **Styling & Effects** | Modern CSS3 (Custom Properties, 3D Transforms, Backdrop Filter, Keyframes) |
| **Icons & Assets** | Lucide React |
| **APIs & Backend Services** | LeetCode GraphQL/REST Proxy, EmailJS Browser SDK |
| **Deployment** | Vercel / GitHub Pages |

---

## 📁 Project Structure

```text
vishal-portfolio/
├── public/
│   ├── projects/           # High-resolution project mockups
│   ├── profile.jpg         # Profile portrait
│   └── resume.pdf          # Latest resume PDF document
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar & theme switcher
│   │   ├── Hero.jsx        # Mariana-inspired headline hero & overlay portrait
│   │   ├── About.jsx       # Biography & academic highlights
│   │   ├── Skills.jsx      # Technical skills matrix
│   │   ├── Projects.jsx    # Projects showcase with 3D tilt cards
│   │   ├── ProjectCard.jsx # 3D perspective card component
│   │   ├── Experience.jsx  # Dedicated internships section
│   │   ├── Education.jsx   # Academic timeline
│   │   ├── DSA.jsx         # Live LeetCode sync & problem-solving dashboard
│   │   ├── Certifications.jsx # Verified credentials & licenses
│   │   ├── Contact.jsx     # EmailJS interactive contact form
│   │   ├── ThankYou.jsx    # Outro scene & social links
│   │   └── CustomCursor.jsx# Interactive spring trailing cursor
│   ├── portfolioData.js    # Centralized single-source-of-truth data configuration
│   ├── App.jsx             # Main application orchestrator & intersection observer
│   ├── App.css             # Component-level stylesheets & animations
│   ├── index.css           # Global typography, color variables & light/dark tokens
│   └── main.jsx            # React root mount
├── .env.example            # Environment variables template
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started Locally

### 1. Clone Repository
```bash
git clone https://github.com/Vishal-0639/Portfolio-Webstie.git
cd Portfolio-Webstie
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Fill in your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view the portfolio.

---

## 👨‍💻 Author

**Vishal Dharsan P S**
- 💼 **LinkedIn**: [vishal-dharsan-p-s](https://www.linkedin.com/in/vishal-dharsan-p-s)
- 🐙 **GitHub**: [@Vishal-0639](https://github.com/Vishal-0639)
- 💡 **LeetCode**: [@Vizz76](https://leetcode.com/u/Vizz76/)
- 📧 **Email**: [vishaldhar1106@gmail.com](mailto:vishaldhar1106@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
