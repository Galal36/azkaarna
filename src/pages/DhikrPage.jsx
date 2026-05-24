import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_AZKAR, AZKAR_BY_CATEGORY } from '../data/azkar';

const DhikrPage = () => {
  const { id: dhikrId } = useParams();
  const navigate = useNavigate();
  const [lang] = useState(() => localStorage.getItem('rawda_lang') || 'ar');

  const dhikr = ALL_AZKAR.find(d => d.id === dhikrId);
  
  if (!dhikr) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Dhikr not found</div>;
  }

  const categoryAzkar = AZKAR_BY_CATEGORY[dhikr.category] || [];
  const totalInCategory = categoryAzkar.length;
  
  const countKey = `rawda_count_${dhikr.id}`;
  const progressKey = `rawda_progress_${dhikr.category}`;

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(countKey);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showTranslit, setShowTranslit] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [completed, setCompleted] = useState(count >= dhikr.repetitions);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    localStorage.setItem(countKey, count);
    if (count >= dhikr.repetitions && !completed) {
      handleCompletion();
    }
  }, [count]);

  const handleCompletion = () => {
    setCompleted(true);
    setShowCelebration(true);
    
    const savedProgress = localStorage.getItem(progressKey);
    let progress = savedProgress ? JSON.parse(savedProgress) : [];
    if (!progress.includes(dhikr.id)) {
      progress.push(dhikr.id);
      localStorage.setItem(progressKey, JSON.stringify(progress));
    }
  };

  const handleTap = () => {
    if (count < dhikr.repetitions) {
      const newCount = count + 1;
      setCount(newCount);
      if (navigator.vibrate) navigator.vibrate(25);
    }
  };

  const handleReset = () => {
    setCount(0);
    setCompleted(false);
    setShowCelebration(false);
    localStorage.removeItem(countKey);
  };

  const getTitle = () => {
    return dhikr.title[lang] || dhikr.title.ar;
  };

  const getTranslation = () => {
    return dhikr.translation[lang] || "—";
  };

  const isRtl = lang === 'ar' || lang === 'ur';

  const renderDots = () => {
    const total = dhikr.repetitions;
    if (total <= 1) return null;

    let dots = [];
    const maxDots = 10;
    const numDots = Math.min(total, maxDots);
    
    for (let i = 1; i <= numDots; i++) {
      const threshold = total > maxDots ? (total / maxDots) * i : i;
      const isFilled = count >= threshold;
      const isCurrent = count < threshold && (i === 1 || count >= (total / maxDots) * (i - 1));
      
      dots.push(
        <motion.div
          key={i}
          animate={isCurrent && !completed ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={isCurrent && !completed ? { repeat: Infinity, duration: 1.5 } : {}}
          style={{
            width: isCurrent && !completed ? '12px' : '10px',
            height: isCurrent && !completed ? '12px' : '10px',
            borderRadius: '50%',
            background: isFilled ? '#1B4332' : (isCurrent && !completed ? '#C9A84C' : 'rgba(27,67,50,0.15)'),
            margin: '0 3px'
          }}
        />
      );
    }
    return <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>{dots}</div>;
  };

  const goToAdjacent = (dir) => {
    const currentIndex = categoryAzkar.findIndex(d => d.id === dhikr.id);
    const nextIndex = currentIndex + dir;
    if (nextIndex >= 0 && nextIndex < totalInCategory) {
      navigate(`/dhikr/${categoryAzkar[nextIndex].id}`);
    }
  };

  return (
    <motion.div
      key={dhikr.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.35 }}
      style={{
        backgroundColor: '#F7F3EE',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        fontFamily: '"DM Sans", sans-serif'
      }}
    >
      <header style={{
        height: '52px',
        backgroundColor: 'white',
        borderBottom: '1px solid rgba(27,67,50,0.08)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        justifyContent: 'space-between'
      }}>
        <button 
          onClick={() => navigate(`/category/${dhikr.category}`)}
          style={{ background: 'none', border: 'none', color: '#1B4332', fontSize: '20px', cursor: 'pointer' }}
        >
          ←
        </button>
        <div style={{ fontSize: '13px', color: '#9A9A9A' }}>
          {dhikr.order} / {totalInCategory}
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} style={{ 
              fontSize: '8px', 
              color: i < (dhikr.order * 10 / totalInCategory) ? '#1B4332' : 'rgba(27,67,50,0.2)' 
            }}>
              ●
            </span>
          ))}
        </div>
      </header>

      <div style={{ padding: '16px 20px 8px' }}>
        <h1 style={{
          margin: 0,
          color: '#1B4332',
          textAlign: isRtl ? 'right' : 'left',
          direction: isRtl ? 'rtl' : 'ltr',
          fontFamily: isRtl ? 'Amiri, serif' : '"DM Sans", sans-serif',
          fontSize: isRtl ? '20px' : '18px',
          fontWeight: isRtl ? 400 : 600
        }}>
          {getTitle()}
        </h1>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x < -50) goToAdjacent(1);
          if (offset.x > 50) goToAdjacent(-1);
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{
          margin: '0 16px',
          backgroundColor: 'white',
          border: '1.5px solid rgba(201,168,76,0.5)',
          borderRadius: '20px',
          padding: dhikr.arabic.length <= 40 ? '40px 20px' : '28px 20px',
          maxHeight: '260px',
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p style={{
          fontFamily: 'Amiri, serif',
          fontSize: dhikr.arabic.length <= 40 ? '34px' : '22px',
          lineHeight: 2.0,
          color: '#1C1C1C',
          textAlign: 'center',
          direction: 'rtl',
          whiteSpace: 'pre-wrap',
          margin: 0
        }}>
          {dhikr.arabic}
        </p>
      </motion.div>

      <div style={{ margin: '12px 16px 0' }}>
        <div style={{ borderBottom: '1px solid rgba(27,67,50,0.05)' }}>
          <button 
            onClick={() => setShowTranslit(!showTranslit)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#5C5C5C'
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
                  fontSize: '13px', 
                  fontStyle: 'italic', 
                  color: '#7A7A7A', 
                  lineHeight: 1.8, 
                  padding: '0 0 12px' 
                }}>
                  {dhikr.transliteration}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ borderBottom: '1px solid rgba(27,67,50,0.05)' }}>
          <button 
            onClick={() => setShowTranslation(!showTranslation)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#5C5C5C'
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
                  color: '#1C1C1C', 
                  lineHeight: 1.7, 
                  padding: '0 0 12px',
                  direction: lang === 'ur' ? 'rtl' : 'ltr',
                  fontFamily: lang === 'ur' ? 'Amiri, serif' : 'inherit'
                }}>
                  {getTranslation()}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div style={{ margin: '8px 16px 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ background: 'rgba(27,67,50,0.08)', color: '#1B4332', fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
            {dhikr.source.grade}
          </span>
          <span style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C', fontSize: '11px', padding: '2px 8px', borderRadius: '10px' }}>
            {dhikr.source.book}
          </span>
        </div>
        {lang === 'en' && dhikr.note && dhikr.note.en && (
          <p style={{ fontSize: '12px', color: '#9A9A9A', fontStyle: 'italic', margin: '4px 0' }}>
            {dhikr.note.en}
          </p>
        )}
      </div>

      <footer style={{
        marginTop: 'auto',
        padding: '20px 16px',
        backgroundColor: 'white',
        borderTop: '1px solid rgba(27,67,50,0.08)'
      }}>
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                backgroundColor: 'rgba(201,168,76,0.08)',
                borderRadius: '12px',
                padding: '12px',
                margin: '0 auto 12px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '36px', color: '#C9A84C' }}>✓</span>
              <span style={{ fontFamily: 'Amiri, serif', fontSize: '22px', color: '#C9A84C' }}>الحمد لله</span>
            </motion.div>
          )}
        </AnimatePresence>

        {dhikr.repetitions > 1 && (
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <motion.span
              key={count}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              style={{
                fontSize: '56px',
                fontWeight: 700,
                color: count === dhikr.repetitions ? '#C9A84C' : '#1B4332',
                display: 'inline-block'
              }}
            >
              {count}
            </motion.span>
            <span style={{ fontSize: '24px', color: '#9A9A9A', marginLeft: '4px' }}>
              / {dhikr.repetitions}
            </span>
          </div>
        )}

        {renderDots()}

        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleTap}
          style={{
            width: '100%',
            height: '72px',
            borderRadius: '18px',
            backgroundColor: completed ? '#C9A84C' : '#1B4332',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.4s'
          }}
        >
          {completed ? (
            <span style={{ 
              fontFamily: isRtl ? 'Amiri, serif' : 'inherit', 
              fontSize: isRtl ? '20px' : '16px',
              fontWeight: isRtl ? 400 : 500,
              direction: isRtl ? 'rtl' : 'ltr'
            }}>
              ✓ {isRtl ? `تم العدد ${count}` : `Completed ${count}`}
            </span>
          ) : (
            <span style={{ 
              fontFamily: isRtl ? 'Amiri, serif' : 'inherit',
              fontSize: isRtl ? '18px' : '16px',
              fontWeight: isRtl ? 400 : 500
            }}>
              {isRtl ? "اضغط للعد" : "Tap to count"}
            </span>
          )}
        </motion.button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <button 
            onClick={() => goToAdjacent(-1)}
            disabled={dhikr.order === 1}
            style={{ 
              background: 'none', border: 'none', color: '#1B4332', fontSize: '13px', 
              opacity: dhikr.order === 1 ? 0.3 : 1, cursor: 'pointer' 
            }}
          >
            {isRtl ? "← السابق" : "← Prev"}
          </button>
          
          <button 
            onClick={handleReset}
            style={{ background: 'none', border: 'none', color: '#9A9A9A', fontSize: '12px', cursor: 'pointer' }}
          >
            ↺ Reset
          </button>

          <button 
            onClick={() => goToAdjacent(1)}
            disabled={dhikr.order === totalInCategory}
            style={{ 
              background: 'none', border: 'none', color: '#1B4332', fontSize: '13px', 
              opacity: dhikr.order === totalInCategory ? 0.3 : 1, cursor: 'pointer' 
            }}
          >
            {isRtl ? "التالي →" : "Next →"}
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

export default DhikrPage;
