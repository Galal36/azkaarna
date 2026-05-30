import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAzkar } from '../data/AzkarContext';
import {
  getCategoryById, getCategoryName,
  getAzkarTitle, getTranslation, getRepeatCount, isRtl,
} from '../data/helpers';

const CategoryPage = () => {
  const { id: categoryId } = useParams();
  const navigate  = useNavigate();
  const location  = useLocation();
  const { categories, loading } = useAzkar();
  const [lang] = useState(() => localStorage.getItem('rawda_lang') || 'ar');
  const rtl = isRtl(lang);

  const category  = getCategoryById(categories, categoryId);
  const azkarList = category?.azkar || [];
  const total     = azkarList.length;

  const [counts, setCounts]             = useState({});
  const [completedIds, setCompletedIds] = useState([]);
  const [pendingResetId, setPendingResetId] = useState(null);
  const cardRefs     = useRef({});
  const resetTimerRef = useRef(null);

  // Load saved state once the azkar list is populated
  useEffect(() => {
    if (azkarList.length === 0) return;

    const saved = {};
    azkarList.forEach((a) => {
      const v = localStorage.getItem(`rawda_count_${a.id}`);
      saved[a.id] = v ? parseInt(v, 10) : 0;
    });
    setCounts(saved);

    try {
      const prog = localStorage.getItem(`rawda_progress_${categoryId}`);
      setCompletedIds(prog ? JSON.parse(prog) : []);
    } catch {
      setCompletedIds([]);
    }
  }, [azkarList.length, categoryId]);

  // Scroll back to the dhikr the user just came from
  useEffect(() => {
    const targetId = location.state?.scrollToId;
    if (!targetId || azkarList.length === 0) return;
    requestAnimationFrame(() => {
      const el = cardRefs.current[targetId];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }, [azkarList.length, location.state?.scrollToId]);

  // ── Handlers ────────────────────────────────────────────────────────────
  const handleTap = (dhikr) => {
    const rep = getRepeatCount(dhikr);
    const cur = counts[dhikr.id] || 0;
    if (cur >= rep) return;

    const next = cur + 1;
    const newCounts = { ...counts, [dhikr.id]: next };
    setCounts(newCounts);
    localStorage.setItem(`rawda_count_${dhikr.id}`, next);
    if (navigator.vibrate) navigator.vibrate(25);

    if (next >= rep && !completedIds.includes(String(dhikr.id))) {
      const newComp = [...completedIds, String(dhikr.id)];
      setCompletedIds(newComp);
      localStorage.setItem(`rawda_progress_${categoryId}`, JSON.stringify(newComp));
    }
  };

  const execReset = (dhikrId) => {
    clearTimeout(resetTimerRef.current);
    setPendingResetId(null);
    const newCounts = { ...counts, [dhikrId]: 0 };
    setCounts(newCounts);
    localStorage.removeItem(`rawda_count_${dhikrId}`);
    const newComp = completedIds.filter((id) => id !== String(dhikrId));
    setCompletedIds(newComp);
    localStorage.setItem(`rawda_progress_${categoryId}`, JSON.stringify(newComp));
    if (navigator.vibrate) navigator.vibrate([30, 30, 30]);
  };

  const handleReset = (dhikrId) => {
    if (pendingResetId === dhikrId) {
      execReset(dhikrId);
    } else {
      clearTimeout(resetTimerRef.current);
      setPendingResetId(dhikrId);
      resetTimerRef.current = setTimeout(() => setPendingResetId(null), 2000);
    }
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
  if (!category) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#9A9A9A',
        fontFamily: '"DM Sans", sans-serif' }}>
        Category not found.
      </div>
    );
  }

  const completedCount  = completedIds.length;
  const progressPercent = total > 0 ? (completedCount / total) * 100 : 0;
  const catName         = getCategoryName(category, lang);

  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh',
      fontFamily: '"DM Sans", sans-serif' }}>

      {/* ── Sticky header ──────────────────────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'white',
        height: '56px', borderBottom: '1px solid rgba(27,67,50,0.1)',
        display: 'flex', alignItems: 'center',
        padding: '0 16px', justifyContent: 'space-between',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none', border: 'none', padding: '8px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', color: '#1B4332', marginLeft: '-8px',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>

        <h1 style={{
          fontSize: '16px', fontWeight: 600, color: '#1B4332',
          margin: 0, textAlign: 'center', flex: 1,
          fontFamily: rtl ? 'Amiri, serif' : '"DM Sans", sans-serif',
          direction: rtl ? 'rtl' : 'ltr',
        }}>
          {catName}
        </h1>

        <span style={{ fontSize: '13px', color: '#9A9A9A', width: '40px', textAlign: 'right' }}>
          {completedCount} / {total}
        </span>
      </header>

      {/* ── Progress bar ───────────────────────────────────────────────── */}
      <div style={{
        position: 'sticky', top: '56px', zIndex: 99, height: '3px',
        backgroundColor: 'rgba(27,67,50,0.1)', width: '100%',
      }}>
        <motion.div
          initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4 }}
          style={{ height: '100%', backgroundColor: '#1B4332' }}
        />
      </div>

      {/* ── Azkar list ─────────────────────────────────────────────────── */}
      <main style={{ padding: '12px 16px 100px', display: 'flex',
        flexDirection: 'column', gap: '16px' }}>
        <AnimatePresence>
          {azkarList.map((dhikr, index) => {
            const rep          = getRepeatCount(dhikr);
            const currentCount = counts[dhikr.id] || 0;
            const isCompleted  = currentCount >= rep;
            const title        = getAzkarTitle(dhikr, lang);
            const translation  = getTranslation(dhikr, lang);

            return (
              <motion.div
                key={String(dhikr.id)}
                ref={(el) => { cardRefs.current[dhikr.id] = el; }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(27,67,50,0.08)',
                  borderLeft: `4px solid ${isCompleted ? '#C9A84C' : '#1B4332'}`,
                  borderRadius: '16px', padding: '20px',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                {/* Card header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1 }}>
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <div style={{
                        width: '26px', height: '26px', borderRadius: '50%',
                        backgroundColor: isCompleted ? '#C9A84C' : '#1B4332',
                        color: 'white', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '11px', fontWeight: 600,
                      }}>
                        {dhikr.order_in_category}
                      </div>
                      {isCompleted && (
                        <div style={{
                          position: 'absolute', top: '-4px', right: '-5px',
                          width: '14px', height: '14px', borderRadius: '50%',
                          backgroundColor: '#1B4332', border: '2px solid white',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '7px', color: 'white', fontWeight: 700,
                        }}>
                          ✓
                        </div>
                      )}
                    </div>
                    {title && (
                      <h2 style={{
                        fontSize: '15px', fontWeight: 600, color: '#1B4332', margin: 0,
                        fontFamily: rtl ? 'Amiri, serif' : 'inherit',
                        direction: rtl ? 'rtl' : 'ltr',
                      }}>
                        {title}
                      </h2>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                    <motion.button
                      onClick={(e) => { e.stopPropagation(); handleReset(dhikr.id); }}
                      animate={pendingResetId === dhikr.id
                        ? { scale: [1, 1.05, 1] }
                        : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontSize: '13px', cursor: 'pointer',
                        padding: '5px 10px', display: 'flex', alignItems: 'center', gap: '4px',
                        borderRadius: '6px',
                        fontFamily: lang === 'en' ? '"DM Sans", sans-serif' : 'Amiri, serif',
                        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
                        color:           pendingResetId === dhikr.id ? '#B91C1C' : '#5C5C5C',
                        backgroundColor: pendingResetId === dhikr.id ? 'rgba(185,28,28,0.08)' : 'rgba(27,67,50,0.03)',
                        border:          pendingResetId === dhikr.id ? '1px solid rgba(185,28,28,0.4)' : '1px solid rgba(27,67,50,0.15)',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>↺</span>
                      <span>
                        {pendingResetId === dhikr.id
                          ? (lang === 'ar' ? 'تأكيد؟' : lang === 'ur' ? 'پکا؟' : 'Sure?')
                          : (lang === 'ar' ? 'إعادة' : lang === 'ur' ? 'دوبارہ' : 'Reset')}
                      </span>
                    </motion.button>
                    <div style={{
                      backgroundColor: 'rgba(201,168,76,0.12)', color: '#C9A84C',
                      fontSize: '11px', padding: '3px 8px', borderRadius: '10px', fontWeight: 600,
                    }}>
                      × {rep}
                    </div>
                  </div>
                </div>

                {/* Arabic text */}
                <p style={{
                  fontFamily: 'Amiri, serif', fontSize: '20px', lineHeight: 1.8,
                  color: '#1C1C1C', textAlign: 'center', direction: 'rtl',
                  whiteSpace: 'pre-wrap', margin: '8px 0',
                }}>
                  {dhikr.text.arabic}
                </p>

                {/* Translation */}
                {translation && (
                  <p style={{
                    fontSize: lang === 'ur' ? '15px' : '13px',
                    color: '#5C5C5C', lineHeight: 1.7, margin: '0',
                    direction: rtl ? 'rtl' : 'ltr',
                    fontFamily: lang === 'ur' ? 'Amiri, serif' : '"DM Sans", sans-serif',
                    borderTop: '1px solid rgba(27,67,50,0.06)',
                    paddingTop: '10px',
                  }}>
                    {translation}
                  </p>
                )}

                {/* Counter */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  {rep > 1 && (
                    <div style={{ fontSize: '18px', fontWeight: 600,
                      color: isCompleted ? '#C9A84C' : '#1B4332' }}>
                      <motion.span key={currentCount}
                        initial={{ scale: 1.2 }} animate={{ scale: 1 }}>
                        {currentCount}
                      </motion.span>
                      <span style={{ color: '#9A9A9A', marginLeft: '4px', fontSize: '14px' }}>
                        / {rep}
                      </span>
                    </div>
                  )}

                  <motion.button
                    whileTap={{ scale: 0.97 }} onClick={() => handleTap(dhikr)}
                    style={{
                      width: '100%', height: '52px', borderRadius: '12px',
                      backgroundColor: isCompleted ? '#C9A84C' : '#1B4332',
                      color: 'white', border: 'none', fontSize: '14px', fontWeight: 600,
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', transition: 'background-color 0.3s',
                    }}
                  >
                    {isCompleted ? (
                      <span style={{
                        fontFamily: rtl ? 'Amiri, serif' : 'inherit',
                        fontSize: rtl ? '18px' : '14px',
                        direction: rtl ? 'rtl' : 'ltr',
                      }}>
                        ✓ {rtl ? `تم العدد ${currentCount}` : `Completed ${currentCount}`}
                      </span>
                    ) : (
                      <span style={{ fontFamily: rtl ? 'Amiri, serif' : 'inherit' }}>
                        {rtl ? 'اضغط للعد' : 'Tap to count'}
                      </span>
                    )}
                  </motion.button>
                </div>

                {/* Footer: reference + detail link */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginTop: '4px', paddingTop: '12px',
                  borderTop: '1px solid rgba(27,67,50,0.05)',
                }}>
                  <div style={{
                    fontSize: '11px', color: '#9A9A9A',
                    maxWidth: '55%', direction: 'rtl', fontFamily: 'Amiri, serif',
                  }}>
                    {dhikr.reference?.arabic || ''}
                  </div>
                  <button
                    onClick={() => navigate(`/dhikr/${dhikr.id}`)}
                    style={{
                      background: 'none', border: 'none', color: '#C9A84C',
                      fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                      padding: '4px 8px', borderRadius: '4px',
                      backgroundColor: 'rgba(201,168,76,0.05)',
                    }}
                  >
                    {rtl ? 'الترجمة والتفاصيل ←' : 'Translation & Details →'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default CategoryPage;