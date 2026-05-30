import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAzkar } from '../data/AzkarContext';
import {
  findAzkarById, getAzkarTitle, getTranslation, getTransliteration,
  getNote, getRepeatCount, isRtl,
} from '../data/helpers';

const DhikrPage = () => {
  const { id: dhikrId } = useParams();
  const navigate        = useNavigate();
  const { categories, loading } = useAzkar();
  const [lang] = useState(() => localStorage.getItem('rawda_lang') || 'ar');
  const rtl = isRtl(lang);

  // ── Derive data from context ─────────────────────────────────────────────
  const result        = findAzkarById(categories, dhikrId);
  const dhikr         = result?.azkar;
  const category      = result?.category;
  const categoryAzkar = category?.azkar || [];
  const totalInCat    = categoryAzkar.length;
  const rep           = dhikr ? getRepeatCount(dhikr) : 1;

  // ── Local state ──────────────────────────────────────────────────────────
  const [count, setCount] = useState(() => {
    const v = localStorage.getItem(`rawda_count_${dhikrId}`);
    return v ? parseInt(v, 10) : 0;
  });
  const [showTranslit,    setShowTranslit]    = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confirmingReset, setConfirmingReset] = useState(false);
  const resetTimerRef = React.useRef(null);

  // Derived — no separate state needed
  const completed = dhikr ? count >= rep : false;

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`rawda_count_${dhikrId}`, count);
  }, [count, dhikrId]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleTap = () => {
    if (!dhikr || count >= rep) return;
    const next = count + 1;
    setCount(next);
    if (navigator.vibrate) navigator.vibrate(25);

    if (next >= rep) {
      setShowCelebration(true);
      // Update category progress in localStorage
      const pKey  = `rawda_progress_${category.category_id}`;
      const saved = localStorage.getItem(pKey);
      let prog    = [];
      try { prog = saved ? JSON.parse(saved) : []; } catch { prog = []; }
      if (!prog.includes(String(dhikrId))) {
        prog.push(String(dhikrId));
        localStorage.setItem(pKey, JSON.stringify(prog));
      }
    }
  };

  const handleReset = () => {
    if (confirmingReset) {
      clearTimeout(resetTimerRef.current);
      setConfirmingReset(false);
      setCount(0);
      setShowCelebration(false);
      localStorage.removeItem(`rawda_count_${dhikrId}`);
      if (navigator.vibrate) navigator.vibrate([30, 30, 30]);
    } else {
      setConfirmingReset(true);
      resetTimerRef.current = setTimeout(() => setConfirmingReset(false), 2000);
    }
  };

  const goToAdjacent = (dir) => {
    if (!dhikr) return;
    const idx  = categoryAzkar.findIndex((a) => String(a.id) === String(dhikrId));
    const next = idx + dir;
    if (next >= 0 && next < totalInCat) {
      navigate(`/dhikr/${categoryAzkar[next].id}`);
    }
  };

  // ── Dot progress indicator ───────────────────────────────────────────────
  const renderDots = () => {
    if (rep <= 1) return null;
    const MAX  = 10;
    const dots = Math.min(rep, MAX);
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        {Array.from({ length: dots }, (_, i) => {
          const threshold = rep > MAX ? (rep / MAX) * (i + 1) : i + 1;
          const filled    = count >= threshold;
          const current   = !filled && (i === 0 || count >= (rep / MAX) * i);
          return (
            <motion.div
              key={i}
              animate={current && !completed ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={current && !completed ? { repeat: Infinity, duration: 1.5 } : {}}
              style={{
                width:  current && !completed ? '12px' : '10px',
                height: current && !completed ? '12px' : '10px',
                borderRadius: '50%', margin: '0 3px',
                background: filled
                  ? '#1B4332'
                  : current && !completed
                    ? '#C9A84C'
                    : 'rgba(27,67,50,0.15)',
              }}
            />
          );
        })}
      </div>
    );
  };

  // ── Guards ───────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#9A9A9A',
        fontFamily: '"DM Sans", sans-serif' }}>
        Loading…
      </div>
    );
  }
  if (!dhikr) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#9A9A9A',
        fontFamily: '"DM Sans", sans-serif' }}>
        Dhikr not found.
      </div>
    );
  }

  const currentIndex    = categoryAzkar.findIndex((a) => String(a.id) === String(dhikrId));
  const title           = getAzkarTitle(dhikr, lang);
  const transliteration = getTransliteration(dhikr, lang);
  const translation     = getTranslation(dhikr, lang);
  const note            = getNote(dhikr);

  return (
    <motion.div
      key={String(dhikrId)}
      initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.35 }}
      style={{
        backgroundColor: '#F7F3EE', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        overflowX: 'hidden', fontFamily: '"DM Sans", sans-serif',
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header style={{
        height: '52px', backgroundColor: 'white',
        borderBottom: '1px solid rgba(27,67,50,0.08)',
        display: 'flex', alignItems: 'center',
        padding: '0 16px', justifyContent: 'space-between',
      }}>
        <button
          onClick={() => navigate(`/category/${category.category_id}`, { state: { scrollToId: dhikrId } })}
          style={{ background: 'none', border: 'none', color: '#1B4332',
            fontSize: '20px', cursor: 'pointer' }}
        >
          ←
        </button>

        <div style={{ fontSize: '13px', color: '#9A9A9A' }}>
          {currentIndex + 1} / {totalInCat}
        </div>

        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} style={{
              fontSize: '8px',
              color: i < ((currentIndex + 1) * 10 / totalInCat)
                ? '#1B4332'
                : 'rgba(27,67,50,0.2)',
            }}>●</span>
          ))}
        </div>
      </header>

      {/* ── Title ───────────────────────────────────────────────────────── */}
      {title && (
        <div style={{ padding: '16px 20px 8px' }}>
          <h1 style={{
            margin: 0, color: '#1B4332',
            textAlign: rtl ? 'right' : 'left',
            direction: rtl ? 'rtl' : 'ltr',
            fontFamily: rtl ? 'Amiri, serif' : '"DM Sans", sans-serif',
            fontSize: rtl ? '20px' : '18px',
            fontWeight: rtl ? 400 : 600,
          }}>
            {title}
          </h1>
        </div>
      )}

      {/* ── Floating Arabic card (drag to navigate) ──────────────────── */}
      <motion.div
        drag="x" dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, { offset }) => {
          if (offset.x < -50) goToAdjacent(1);
          if (offset.x > 50)  goToAdjacent(-1);
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        style={{
          margin: '0 16px',
          backgroundColor: 'white',
          border: '1.5px solid rgba(201,168,76,0.5)',
          borderRadius: '20px',
          padding: dhikr.text.arabic.length <= 40 ? '40px 20px' : '28px 20px',
          maxHeight: '260px', overflowY: 'auto',
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        }}
      >
        <p style={{
          fontFamily: 'Amiri, serif',
          fontSize: dhikr.text.arabic.length <= 40 ? '34px' : '22px',
          lineHeight: 2.0, color: '#1C1C1C', textAlign: 'center',
          direction: 'rtl', whiteSpace: 'pre-wrap', margin: 0,
        }}>
          {dhikr.text.arabic}
        </p>
      </motion.div>

      {/* ── Collapsible: Transliteration ─────────────────────────────── */}
      <div style={{ margin: '12px 16px 0' }}>
        {transliteration && (
          <div style={{ borderBottom: '1px solid rgba(27,67,50,0.05)' }}>
            <button
              onClick={() => setShowTranslit(!showTranslit)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '12px 0', background: 'none',
                border: 'none', cursor: 'pointer', fontSize: '13px', color: '#5C5C5C',
              }}
            >
              <span>النطق / Transliteration</span>
              <span>{showTranslit ? '▲' : '▼'}</span>
            </button>
            <AnimatePresence>
              {showTranslit && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{
                    fontSize: '13px', fontStyle: 'italic',
                    color: '#7A7A7A', lineHeight: 1.8, padding: '0 0 12px',
                  }}>
                    {transliteration}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* ── Collapsible: Translation ─────────────────────────────────── */}
        {translation && (
          <div style={{ borderBottom: '1px solid rgba(27,67,50,0.05)' }}>
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '12px 0', background: 'none',
                border: 'none', cursor: 'pointer', fontSize: '13px', color: '#5C5C5C',
              }}
            >
              <span>الترجمة / Translation</span>
              <span>{showTranslation ? '▲' : '▼'}</span>
            </button>
            <AnimatePresence>
              {showTranslation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{
                    fontSize: lang === 'ur' ? '16px' : '14px',
                    color: '#1C1C1C', lineHeight: 1.7, padding: '0 0 12px',
                    direction: rtl ? 'rtl' : 'ltr',
                    fontFamily: lang === 'ur' ? 'Amiri, serif' : 'inherit',
                  }}>
                    {translation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* ── Reference & note ─────────────────────────────────────────── */}
      <div style={{ margin: '8px 16px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {dhikr.reference?.arabic && (
          <div style={{
            background: 'rgba(27,67,50,0.06)', borderRadius: '8px',
            padding: '6px 10px', fontSize: '11px', color: '#5C5C5C',
            direction: 'rtl', textAlign: 'right', fontFamily: 'Amiri, serif',
          }}>
            {dhikr.reference.arabic}
          </div>
        )}
        {note && lang === 'en' && (
          <p style={{ fontSize: '12px', color: '#9A9A9A', fontStyle: 'italic', margin: 0 }}>
            {note}
          </p>
        )}
      </div>

      {/* ── Footer: counter + buttons ──────────────────────────────────── */}
      <footer style={{
        marginTop: 'auto', padding: '20px 16px',
        backgroundColor: 'white', borderTop: '1px solid rgba(27,67,50,0.08)',
      }}>
        {/* Celebration banner */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              style={{
                backgroundColor: 'rgba(201,168,76,0.08)', borderRadius: '12px',
                padding: '12px', margin: '0 auto 12px', textAlign: 'center',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}
            >
              <span style={{ fontSize: '36px', color: '#C9A84C' }}>✓</span>
              <span style={{ fontFamily: 'Amiri, serif', fontSize: '22px', color: '#C9A84C' }}>
                الحمد لله
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Big counter */}
        {rep > 1 && (
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <motion.span
              key={count} initial={{ scale: 1.3 }} animate={{ scale: 1 }}
              style={{
                fontSize: '56px', fontWeight: 700, display: 'inline-block',
                color: count === rep ? '#C9A84C' : '#1B4332',
              }}
            >
              {count}
            </motion.span>
            <span style={{ fontSize: '24px', color: '#9A9A9A', marginLeft: '4px' }}>
              / {rep}
            </span>
          </div>
        )}

        {renderDots()}

        {/* Main tap button */}
        <motion.button
          whileTap={{ scale: 0.96 }} onClick={handleTap}
          style={{
            width: '100%', height: '72px', borderRadius: '18px',
            backgroundColor: completed ? '#C9A84C' : '#1B4332',
            border: 'none', color: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background-color 0.4s',
          }}
        >
          {completed ? (
            <span style={{
              fontFamily: rtl ? 'Amiri, serif' : 'inherit',
              fontSize: rtl ? '20px' : '16px',
              fontWeight: rtl ? 400 : 500,
            }}>
              ✓ {rtl ? `تم العدد ${count}` : `Completed ${count}`}
            </span>
          ) : (
            <span style={{
              fontFamily: rtl ? 'Amiri, serif' : 'inherit',
              fontSize: rtl ? '18px' : '16px',
            }}>
              {rtl ? 'اضغط للعد' : 'Tap to count'}
            </span>
          )}
        </motion.button>

        {/* Prev / Reset / Next */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginTop: '12px',
        }}>
          <button
            onClick={() => goToAdjacent(-1)} disabled={currentIndex === 0}
            style={{
              background: 'none', border: 'none', color: '#1B4332',
              fontSize: '13px', cursor: 'pointer',
              opacity: currentIndex === 0 ? 0.3 : 1,
            }}
          >
            {rtl ? '← السابق' : '← Prev'}
          </button>

          <motion.button
            onClick={handleReset}
            animate={confirmingReset ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              border: 'none', cursor: 'pointer', fontSize: '15px',
              padding: '5px 12px', borderRadius: '8px',
              transition: 'background-color 0.2s, color 0.2s',
              color:           confirmingReset ? '#B91C1C' : '#9A9A9A',
              backgroundColor: confirmingReset ? 'rgba(185,28,28,0.08)' : 'transparent',
              fontFamily: lang === 'en' ? '"DM Sans", sans-serif' : 'Amiri, serif',
            }}
          >
            ↺ {confirmingReset
              ? (lang === 'ar' ? 'تأكيد؟' : lang === 'ur' ? 'پکا؟' : 'Sure?')
              : (lang === 'ar' ? 'إعادة للصفر' : lang === 'ur' ? 'دوبارہ' : 'Reset')}
          </motion.button>

          <button
            onClick={() => goToAdjacent(1)} disabled={currentIndex === totalInCat - 1}
            style={{
              background: 'none', border: 'none', color: '#1B4332',
              fontSize: '13px', cursor: 'pointer',
              opacity: currentIndex === totalInCat - 1 ? 0.3 : 1,
            }}
          >
            {rtl ? 'التالي →' : 'Next →'}
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

export default DhikrPage;