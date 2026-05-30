# Azkaarna — Islamic Azkar App

Azkaarna is a high-performance, mobile-first Progressive Web App (PWA) for reading and counting your daily Islamic Adhkar. Built with a focus on **simplicity, speed, and offline resilience**.

 **Live site:** [https://azkaarna.com](https://azkaarna.com)

---

##  Free & Focused — the heart of Azkaarna

The most important value of this app is to give you a **free, distraction-free space for dhikr**:

- **100% free** — no payments, no subscriptions, no locked features.
- **No ads, ever** — nothing to interrupt or distract you from the remembrance of Allah.
- **No tracking, no clutter** — a calm, minimal interface so your focus stays on the words, not the screen.
- **Yours, offline** — your progress is saved locally on your own device.

> أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ — *Verily, in the remembrance of Allah do hearts find rest.* (Quran 13:28)

---

##  Installable everywhere

Azkaarna works as a normal website **and** installs like a native app — no app store needed.

- **Use it online:** just open [azkaarna.com](https://azkaarna.com) in any modern browser.
- **Install on mobile (Android):** open the site in Chrome and tap the green **"Install App"** button on the home page (or use the browser menu → *Install app / Add to Home Screen*).
- **Install on iPhone / iPad:** open the site in Safari, tap the **Share** button ⬆️, then choose **"Add to Home Screen"**.
- **Install on desktop (Chrome / Edge):** click the green **"Install App"** button on the home page, or the install icon in the address bar.

Once installed, it launches full-screen and **works fully offline** thanks to its service worker.

---

##  Features

1. **Free & ad-free** — distraction-free remembrance, always.
2. **Interactive counters** — a digital tasbih for each dhikr with haptic feedback.
3. **100% offline support** — works anywhere via service workers (PWA).
4. **Installable** — add to your home screen on mobile or desktop.
5. **Multi-language** — Arabic, English, Urdu, and Indonesian.
6. **Mobile-first design** — optimized for thumb reach, centered on desktop.
7. **High-quality typography** — authentic Amiri font for Arabic text.
8. **Progress persistence** — your daily progress is saved locally and automatically.

---

##  Tech Stack

| Area | Technology |
| --- | --- |
| **Framework** | [React 18](https://react.dev/) |
| **Build tool** | [Vite 5](https://vitejs.dev/) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **PWA / offline** | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (Workbox) |
| **Data** | Static JSON (`public/azkar.json`), no backend required |
| **Typography** | Amiri (Arabic) & DM Sans (Latin) |
| **Deployment** | Nginx · Linux VPS · Let's Encrypt (HTTPS) |
AI LLM: Claude.
---

##  Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Galal36/azkaarna.git
   cd azkaarna
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

##  Contributing

**Azkaarna is open for anyone to contribute** — developers, designers, translators, and reviewers are all welcome. This is a *sadaqah jariyah* (ongoing charity) project, and every contribution is genuinely appreciated.

If you're a developer and would like to help, **please reach out by email:**

📧 **galalmostafa362587@gmail.com**

You can also contribute the usual way:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

##  Roadmap

There are **many features planned** to make Azkaarna better, In-Shaa-Allah. This is an ongoing effort and a lot more is on the way in the future. If you'd like to help shape what comes next, get in touch using the email above.

---

##  License

Distributed under the MIT License. See `LICENSE` for more information.

---

*May Allah reward all contributors and users of this application.*
