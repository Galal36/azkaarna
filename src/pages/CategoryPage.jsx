import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AZKAR_BY_CATEGORY, CATEGORIES } from '../data/azkar';

const CategoryPage = () => {
  const { id: categoryId } = useParams();
  const navigate = useNavigate();
  const [lang] = useState(() => localStorage.getItem('rawda_lang') || 'ar');
  
  // Get data for the current category
  const azkarList = AZKAR_BY_CATEGORY[categoryId] || [];
  const categoryInfo = CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[0];

  // State for counts and completed IDs
  const [counts, setCounts] = useState(() => {
    const savedCounts = {};
    azkarList.forEach(dhikr => {
      const saved = localStorage.getItem(`rawda_count_${dhikr.id}`);
      savedCounts[dhikr.id] = saved ? parseInt(saved, 10) : 0;
    });
    return savedCounts;
  });

  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem(`rawda_progress_${categoryId}`);
    return saved ? JSON.parse(saved) : [];
  });

  const storageKey = `rawda_progress_${categoryId}`;

  const handleTap = (dhikr) => {
    const currentCount = counts[dhikr.id] || 0;
    if (currentCount < dhikr.repetitions) {
      const newCount = currentCount + 1;
      
      // Update counts state
      const newCounts = { ...counts, [dhikr.id]: newCount };
      setCounts(newCounts);
      localStorage.setItem(`rawda_count_${dhikr.id}`, newCount);

      if (navigator.vibrate) navigator.vibrate(25);

      // Handle completion
      if (newCount >= dhikr.repetitions && !completedIds.includes(dhikr.id)) {
        const newCompleted = [...completedIds, dhikr.id];
        setCompletedIds(newCompleted);
        localStorage.setItem(storageKey, JSON.stringify(newCompleted));
      }
    }
  };

  const handleIndividualReset = (dhikrId) => {
    if (window.confirm("Reset count for this item?")) {
      const newCounts = { ...counts, [dhikrId]: 0 };
      setCounts(newCounts);
      localStorage.removeItem(`rawda_count_${dhikrId}`);
      
      const newCompleted = completedIds.filter(id => id !== dhikrId);
      setCompletedIds(newCompleted);
      localStorage.setItem(storageKey, JSON.stringify(newCompleted));
    }
  };

  const getCategoryDisplayName = () => {
    if (lang === 'ar') return categoryInfo.nameAr;
    if (lang === 'ur') return categoryInfo.nameUr;
    if (lang === 'id') return categoryInfo.nameId;
    return categoryInfo.nameEn;
  };

  const total = azkarList.length;
  const completedCount = completedIds.length;
  const progressPercent = (completedCount / total) * 100;

  const isRtl = lang === 'ar' || lang === 'ur';

  return (
    <div style={{ 
      backgroundColor: '#F7F3EE', 
      minHeight: '100vh',
      fontFamily: '"DM Sans", sans-serif'
    }}>
      {/* Sticky Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
        height: '56px',
        borderBottom: '1px solid rgba(27,67,50,0.1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        justifyContent: 'space-between'
      }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: '#1B4332',
            marginLeft: '-8px'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <h1 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: '#1B4332',
          margin: 0,
          textAlign: 'center',
          flex: 1
        }}>
          {getCategoryDisplayName()}
        </h1>

        <span style={{
          fontSize: '13px',
          color: '#9A9A9A',
          width: '40px',
          textAlign: 'right'
        }}>
          {completedCount} / {total}
        </span>
      </header>

      {/* Progress Bar */}
      <div style={{
        position: 'sticky',
        top: '56px',
        zIndex: 99,
        height: '3px',
        backgroundColor: 'rgba(27,67,50,0.1)',
        width: '100%'
      }}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4 }}
          style={{
            height: '100%',
            backgroundColor: '#1B4332'
          }}
        />
      </div>

      {/* Scrollable List */}
      <main style={{
        padding: '12px 16px 100px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <AnimatePresence>
          {azkarList.map((dhikr, index) => {
            const currentCount = counts[dhikr.id] || 0;
            const isCompleted = currentCount >= dhikr.repetitions;
            const title = dhikr.title[lang] || dhikr.title.ar;

            return (
              <motion.div
                key={dhikr.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(27,67,50,0.08)',
                  borderLeft: `4px solid ${isCompleted ? '#C9A84C' : '#1B4332'}`,
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                }}
              >
                {/* Header Row: Title & Reps */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: isCompleted ? '#C9A84C' : '#1B4332',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 600
                    }}>
                      {isCompleted ? '✓' : dhikr.order}
                    </div>
                    <h2 style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#1B4332',
                      margin: 0,
                      fontFamily: (lang === 'ar' || lang === 'ur') ? 'Amiri, serif' : 'inherit'
                    }}>
                      {title}
                    </h2>
                  </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIndividualReset(dhikr.id);
                        }}
                        style={{
                          fontSize: '11px',
                          color: '#5C5C5C',
                          cursor: 'pointer',
                          padding: '4px 8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          borderRadius: '6px',
                          backgroundColor: 'rgba(27,67,50,0.03)',
                          border: '1px solid rgba(27,67,50,0.15)',
                          transition: 'all 0.2s',
                          fontFamily: '"DM Sans", sans-serif'
                        }}
                      >
                        <span style={{ fontSize: '14px' }}>↺</span>
                        <span>{isRtl ? "إعادة" : "Reset"}</span>
                      </button>
                      <div style={{
                        backgroundColor: 'rgba(201,168,76,0.12)',
                        color: '#C9A84C',
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '10px',
                        fontWeight: 600
                      }}>
                        × {dhikr.repetitions}
                      </div>
                    </div>
                  </div>

                {/* Full Arabic Text */}
                <p style={{
                  fontFamily: 'Amiri, serif',
                  fontSize: '20px',
                  lineHeight: 1.8,
                  color: '#1C1C1C',
                  textAlign: 'center',
                  direction: 'rtl',
                  whiteSpace: 'pre-wrap',
                  margin: '8px 0'
                }}>
                  {dhikr.arabic}
                </p>

                {/* Counter UI */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  {dhikr.repetitions > 1 && (
                    <div style={{ fontSize: '18px', fontWeight: 600, color: isCompleted ? '#C9A84C' : '#1B4332' }}>
                      <motion.span key={currentCount} initial={{ scale: 1.2 }} animate={{ scale: 1 }}>
                        {currentCount}
                      </motion.span>
                      <span style={{ color: '#9A9A9A', marginLeft: '4px', fontSize: '14px' }}>/ {dhikr.repetitions}</span>
                    </div>
                  )}

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleTap(dhikr)}
                    style={{
                      width: '100%',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: isCompleted ? '#C9A84C' : '#1B4332',
                      color: 'white',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    {isCompleted ? (
                      <span style={{ 
                        fontFamily: isRtl ? 'Amiri, serif' : 'inherit', 
                        fontSize: isRtl ? '18px' : '14px',
                        direction: isRtl ? 'rtl' : 'ltr'
                      }}>
                        ✓ {isRtl ? `تم العدد ${currentCount}` : `Completed ${currentCount}`}
                      </span>
                    ) : (
                      <span>{isRtl ? "اضغط للعد" : "Tap to count"}</span>
                    )}
                  </motion.button>
                </div>

                {/* Footer Row: Source & Translation Link */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '4px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(27,67,50,0.05)'
                }}>
                  <div style={{ fontSize: '11px', color: '#9A9A9A' }}>
                    {dhikr.source.grade} | {dhikr.source.book}
                  </div>
                  <button
                    onClick={() => navigate(`/dhikr/${dhikr.id}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#C9A84C',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(201,168,76,0.05)'
                    }}
                  >
                    {isRtl ? "الترجمة والتفاصيل ←" : "Translation & Details →"}
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
