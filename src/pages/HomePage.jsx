import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CATEGORIES_DATA = [
  { id:"morning",    emoji:"🌅", ar:"أذكار الصباح",      en:"Morning Azkar",    ur:"صبح کے اذکار",      id_:"Dzikir Pagi",     total:10 },
  { id:"evening",    emoji:"🌙", ar:"أذكار المساء",      en:"Evening Azkar",    ur:"شام کے اذکار",      id_:"Dzikir Sore",     total:8  },
  { id:"sleep",      emoji:"✨", ar:"أذكار النوم",       en:"Before Sleep",     ur:"سونے کے اذکار",     id_:"Dzikir Tidur",    total:6  },
  { id:"waking",     emoji:"☀️", ar:"أذكار الاستيقاظ",  en:"Upon Waking",      ur:"بیدار ہونے پر",     id_:"Dzikir Bangun",   total:4  },
  { id:"afterSalah", emoji:"🕌", ar:"أذكار بعد الصلاة", en:"After Prayer",     ur:"نماز کے بعد",       id_:"Setelah Shalat",  total:6  },
  { id:"wudu",       emoji:"💧", ar:"أذكار الوضوء",     en:"Wudu",             ur:"وضو کے اذکار",      id_:"Wudhu",           total:3  },
  { id:"travel",     emoji:"🌍", ar:"أذكار السفر",      en:"Travel",           ur:"سفر کے اذکار",      id_:"Perjalanan",      total:4  },
  { id:"home",       emoji:"🏠", ar:"أذكار المنزل",     en:"Home",             ur:"گھر کے اذکار",      id_:"Rumah",           total:3  },
];

const HomePage = ({ onCategorySelect }) => {
  const navigate = useNavigate();
  const [lang, setLang] = useState(() => localStorage.getItem('rawda_lang') || 'ar');
  const [completionData, setCompletionData] = useState(() => {
    const saved = localStorage.getItem('rawda_progress');
    try {
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('rawda_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
  }, [lang]);

  const getSubtext = () => {
    switch (lang) {
      case 'en': return "Choose your Azkar";
      case 'ur': return "اپنے اذکار منتخب کریں";
      case 'id': return "Pilih dzikir Anda";
      default: return "اختر أذكارك";
    }
  };

  const getCategoryName = (cat) => {
    if (lang === 'ar') return cat.ar;
    if (lang === 'ur') return cat.ur;
    if (lang === 'id') return cat.id_;
    return cat.en;
  };

  const getCountLabel = (total) => {
    if (lang === 'ar' || lang === 'ur') return `${total} أذكار`;
    return `${total} Azkar`;
  };

  const languages = [
    { code: 'ar', label: 'AR' },
    { code: 'en', label: 'EN' },
    { code: 'ur', label: 'UR' },
    { code: 'id', label: 'ID' },
  ];

  const handleCardClick = (id) => {
    if (onCategorySelect) onCategorySelect(id);
    navigate(`/category/${id}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: '100vh' }}
    >
      {/* TOP BAR */}
      <nav style={{
        position: 'sticky',
        top: 0,
        height: '56px',
        background: '#F7F3EE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        zIndex: 10,
        borderBottom: '1px solid rgba(27,67,50,0.05)'
      }}>
        <div style={{
          fontFamily: 'Amiri, serif',
          fontSize: '22px',
          color: '#1B4332',
          fontWeight: 'bold'
        }}>
          اذكارنا
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              style={{
                fontSize: '12px',
                padding: '4px 10px',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                ...(lang === l.code ? {
                  background: '#1B4332',
                  color: 'white',
                  border: 'none'
                } : {
                  background: 'transparent',
                  color: '#1B4332',
                  border: '1px solid #1B4332'
                })
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>

      {/* GREETING SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{ padding: '20px 16px 8px', textAlign: 'center' }}
      >
        <div 
          dir="rtl"
          style={{
            fontFamily: 'Amiri, serif',
            fontSize: '22px',
            color: '#C9A84C',
            marginBottom: '4px',
            textAlign: 'center'
          }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '14px',
          color: '#5C5C5C',
          textAlign: 'center'
        }}>
          {getSubtext()}
        </div>
      </motion.section>

      {/* CATEGORIES GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        padding: '8px 16px 100px'
      }}>
        {CATEGORIES_DATA.map((category, index) => {
          const done = completionData[category.id] || 0;
          const progress = (done / category.total) * 100;
          const isComplete = done === category.total && category.total > 0;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 300, damping: 24 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(27,67,50,0.12)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCardClick(category.id)}
              style={{
                background: 'white',
                border: '1px solid rgba(27,67,50,0.12)',
                borderRadius: '16px',
                padding: '18px 14px',
                height: '140px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>
                {category.emoji}
              </div>
              <div 
                dir={(lang === 'ar' || lang === 'ur') ? "rtl" : "ltr"}
                style={{
                  color: '#1B4332',
                  textAlign: 'center',
                  ...(lang === 'ar' || lang === 'ur' ? {
                    fontFamily: 'Amiri, serif',
                    fontSize: '17px'
                  } : {
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500
                  })
                }}
              >
                {getCategoryName(category)}
              </div>
              <div style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                color: '#9A9A9A',
                marginTop: '4px'
              }}>
                {getCountLabel(category.total)}
              </div>
              
              {/* Progress Bar */}
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(27,67,50,0.1)',
                borderRadius: '4px',
                marginTop: '12px',
                overflow: 'hidden'
              }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.05) }}
                  style={{
                    height: '100%',
                    background: isComplete ? '#C9A84C' : '#1B4332',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* BOTTOM QUOTE */}
      <footer style={{ padding: '8px 16px 40px', textAlign: 'center' }}>
        <div 
          dir="rtl"
          style={{
            fontFamily: 'Amiri, serif',
            fontSize: '18px',
            color: '#C9A84C',
            textAlign: 'center',
            marginBottom: '4px'
          }}
        >
          أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '13px',
          color: '#9A9A9A',
          textAlign: 'center',
          marginBottom: '2px'
        }}>
          Verily, in the remembrance of Allah do hearts find rest.
        </div>
        <div style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '12px',
          color: '#C0C0C0',
          textAlign: 'center'
        }}>
          — Quran 13:28
        </div>
      </footer>
    </motion.div>
  );
};

export default HomePage;
