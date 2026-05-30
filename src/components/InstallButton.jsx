import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Labels per language
const LABELS = {
  ar: 'ثبّت التطبيق',
  en: 'Install App',
  ur: 'ایپ انسٹال کریں',
  id: 'Instal Aplikasi',
};

// iOS install instructions (Safari has no beforeinstallprompt)
const IOS_HINT = {
  ar: 'اضغط زر المشاركة ⬆️ ثم اختر «أضف إلى الشاشة الرئيسية»',
  en: 'Tap the Share button ⬆️, then choose “Add to Home Screen”',
  ur: 'شیئر بٹن ⬆️ دبائیں، پھر «ہوم اسکرین میں شامل کریں» منتخب کریں',
  id: 'Ketuk tombol Bagikan ⬆️, lalu pilih “Tambahkan ke Layar Utama”',
};

// Desktop / other browsers when no native prompt is available yet
const MANUAL_HINT = {
  ar: 'افتح قائمة المتصفح ⋮ ثم اختر «تثبيت التطبيق»',
  en: 'Open the browser menu ⋮ and choose “Install app”',
  ur: 'براؤزر مینو ⋮ کھولیں اور «ایپ انسٹال کریں» منتخب کریں',
  id: 'Buka menu browser ⋮ lalu pilih “Instal aplikasi”',
};

const isStandalone = () =>
  window.matchMedia?.('(display-mode: standalone)').matches ||
  window.navigator.standalone === true;

const isIos = () =>
  /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
  !window.MSStream;

const InstallButton = ({ lang = 'ar' }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(isStandalone());
  const [hint, setHint] = useState('');
  const ios = isIos();

  useEffect(() => {
    // Fired by Chromium browsers when the PWA is installable
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const handleClick = async () => {
    if (deferredPrompt) {
      // Native install prompt (Chrome / Edge / Android)
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setInstalled(true);
      setDeferredPrompt(null);
      return;
    }
    // No native prompt available → show manual instructions
    const hints = ios ? IOS_HINT : MANUAL_HINT;
    setHint((prev) => (prev ? '' : (hints[lang] || hints.ar)));
  };

  // Already installed → nothing to show.
  if (installed) return null;

  const label = LABELS[lang] || LABELS.ar;
  const rtl = lang === 'ar' || lang === 'ur';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.04, boxShadow: '0 6px 18px rgba(27,67,50,0.35)' }}
        whileTap={{ scale: 0.96 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
          color: '#ffffff', border: 'none', cursor: 'pointer',
          padding: '12px 24px', borderRadius: '26px',
          fontSize: '15px', fontWeight: 600,
          fontFamily: rtl ? 'Amiri, serif' : '"DM Sans", sans-serif',
          boxShadow: '0 4px 14px rgba(27,67,50,0.25)',
          transition: 'box-shadow 0.2s',
        }}
      >
        {/* Download icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        {label}
      </motion.button>

      <AnimatePresence>
        {hint && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            dir={rtl ? 'rtl' : 'ltr'}
            style={{
              maxWidth: '320px', textAlign: 'center',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12.5px', color: '#5C5C5C',
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.35)',
              borderRadius: '12px', padding: '8px 12px',
            }}
          >
            {hint}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InstallButton;
