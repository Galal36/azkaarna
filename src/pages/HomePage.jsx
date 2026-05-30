import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAzkar } from '../data/AzkarContext';
import { getCategoryName, isRtl } from '../data/helpers';
import InstallButton from '../components/InstallButton';

// Fallback icons for categories that don't carry one in the JSON
const ICON_MAP = {
  morning: '🌅', evening: '🌙', sleep: '✨', waking: '☀️',
  afterSalah: '🕌', wudu: '💧', travel: '🚗', home: '🏠',
  23: '🌅', 24: '📿', 25: '🤲', 26: '🌙',
};

const LANGUAGES = [
  { code: 'ar', label: 'AR' },
  { code: 'en', label: 'EN' },
  { code: 'ur', label: 'UR' },
  { code: 'id', label: 'ID' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { categories, loading } = useAzkar();
  const [lang, setLang] = useState(() => localStorage.getItem('rawda_lang') || 'ar');

  useEffect(() => {
    localStorage.setItem('rawda_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  // Read completed count for a category from localStorage
  const getCompletionCount = (cat) => {
    try {
      const saved = localStorage.getItem(`rawda_progress_${cat.category_id}`);
      return saved ? JSON.parse(saved).length : 0;
    } catch {
      return 0;
    }
  };

  const getSubtext = () => {
    switch (lang) {
      case 'en': return 'Choose your Azkar';
      case 'ur': return 'اپنے اذکار منتخب کریں';
      case 'id': return 'Pilih dzikir Anda';
      default:   return 'اختر أذكارك';
    }
  };

  const getCountLabel = (total) =>
    lang === 'ar' || lang === 'ur' ? `${total} أذكار` : `${total} Azkar`;

  // ── Loading screen ───────────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#F7F3EE', gap: '16px',
      }}>
        <div style={{ fontFamily: 'Amiri, serif', fontSize: '40px', color: '#C9A84C' }}>
          اذكارنا
        </div>
        <div style={{ fontSize: '13px', color: '#9A9A9A', fontFamily: '"DM Sans", sans-serif' }}>
          Loading…
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh' }}
    >
      {/* ── Top nav ──────────────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, height: '56px', background: '#F7F3EE',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px', zIndex: 10,
        borderBottom: '1px solid rgba(27,67,50,0.05)',
      }}>
        <div style={{
          fontFamily: 'Amiri, serif', fontSize: '22px',
          color: '#1B4332', fontWeight: 'bold',
        }}>
          اذكارنا
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {LANGUAGES.map((l) => (
            <button
              key={l.code} onClick={() => setLang(l.code)}
              style={{
                fontSize: '12px', padding: '4px 10px', borderRadius: '20px',
                cursor: 'pointer', transition: 'all 0.2s',
                ...(lang === l.code
                  ? { background: '#1B4332', color: 'white', border: 'none' }
                  : { background: 'transparent', color: '#1B4332', border: '1px solid #1B4332' }),
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Bismillah header ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ padding: '20px 16px 8px', textAlign: 'center' }}
      >
        <div dir="rtl" style={{
          fontFamily: 'Amiri, serif', fontSize: '22px',
          color: '#C9A84C', marginBottom: '4px',
        }}>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '14px', color: '#5C5C5C',
        }}>
          {getSubtext()}
        </div>
      </motion.section>

      {/* ── Install app button (only shows when installable) ─────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 16px 4px' }}>
        <InstallButton lang={lang} />
      </div>

      {/* ── Categories grid ──────────────────────────────────────────────── */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '12px', padding: '8px 16px 100px',
      }}>
        {categories.map((cat, index) => {
          const total = cat.azkar.length;
          const done  = getCompletionCount(cat);
          const progress   = total > 0 ? (done / total) * 100 : 0;
          const isComplete = done === total && total > 0;
          const icon = cat.icon || ICON_MAP[cat.category_id] || '📖';
          const name = getCategoryName(cat, lang);
          const rtl  = isRtl(lang);

          return (
            <motion.div
              key={String(cat.category_id)}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 300, damping: 24 }}
              whileHover={{ scale: 1.02, boxShadow: '0 4px 16px rgba(27,67,50,0.12)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/category/${cat.category_id}`)}
              style={{
                background: 'white', border: '1px solid rgba(27,67,50,0.12)',
                borderRadius: '16px', padding: '18px 14px', minHeight: '140px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>{icon}</div>

              <div
                dir={rtl ? 'rtl' : 'ltr'}
                style={{
                  color: '#1B4332', textAlign: 'center',
                  ...(rtl
                    ? { fontFamily: 'Amiri, serif', fontSize: '17px' }
                    : { fontFamily: '"DM Sans", sans-serif', fontSize: '14px', fontWeight: 500 }),
                }}
              >
                {name}
              </div>

              <div style={{ marginTop: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '11px', color: '#9A9A9A',
                }}>
                  {getCountLabel(total)}
                </div>

                {/* Progress bar */}
                <div style={{
                  width: '100%', height: '4px',
                  background: 'rgba(27,67,50,0.1)',
                  borderRadius: '4px', overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    style={{
                      height: '100%',
                      background: isComplete ? '#C9A84C' : '#1B4332',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Footer quote ─────────────────────────────────────────────────── */}
      <footer style={{ padding: '8px 16px 40px', textAlign: 'center' }}>
        <div dir="rtl" style={{
          fontFamily: 'Amiri, serif', fontSize: '18px',
          color: '#C9A84C', textAlign: 'center', marginBottom: '4px',
        }}>
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '13px', color: '#9A9A9A', marginBottom: '2px',
        }}>
          Verily, in the remembrance of Allah do hearts find rest.
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '12px', color: '#C0C0C0',
        }}>
          — Quran 13:28
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;