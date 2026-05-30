// ─── Language key mapping ──────────────────────────────────────────────────
export const LANG_KEY = {
    ar: 'arabic',
    en: 'english',
    ur: 'urdu',
    id: 'indonesian',
  };
  
  export const isRtl = (lang) => lang === 'ar' || lang === 'ur';
  
  // ─── Category helpers ──────────────────────────────────────────────────────
  export function getCategoryById(categories, id) {
    return categories.find((c) => String(c.category_id) === String(id)) || null;
  }
  
  export function getCategoryName(category, lang) {
    if (!category?.name) return '';
    const key = LANG_KEY[lang] || 'arabic';
    return category.name[key] || category.name.arabic || '';
  }
  
  // ─── Azkar helpers ────────────────────────────────────────────────────────
  /** Searches all categories and returns { azkar, category } or null */
  export function findAzkarById(categories, id) {
    for (const cat of categories) {
      const found = cat.azkar.find((a) => String(a.id) === String(id));
      if (found) return { azkar: found, category: cat };
    }
    return null;
  }
  
  /** repeat_count (new schema) or repetitions (legacy) */
  export function getRepeatCount(azkar) {
    return azkar?.repeat_count ?? azkar?.repetitions ?? 1;
  }
  
  /** Title in selected language — optional field */
  export function getAzkarTitle(azkar, lang) {
    if (!azkar?.title) return '';
    const key = LANG_KEY[lang] || 'arabic';
    return azkar.title[key] || azkar.title.arabic || '';
  }
  
  /** Translation in selected language */
  export function getTranslation(azkar, lang) {
    if (!azkar?.text?.translation) return '';
    const key = LANG_KEY[lang] || 'arabic';
    return azkar.text.translation[key] || '';
  }
  
  /**
   * Transliteration in selected language.
   * Legacy azkar only have English; falls back gracefully.
   */
  export function getTransliteration(azkar, lang) {
    const t = azkar?.text?.transliteration;
    if (!t) return '';
    const key = LANG_KEY[lang] || 'english';
    return t[key] || t.english || '';
  }
  
  /**
   * Note text — new schema stores a plain English string,
   * legacy schema stored note.en / note.ar
   */
  export function getNote(azkar) {
    if (typeof azkar?.note === 'string') return azkar.note;
    if (azkar?.note?.en) return azkar.note.en;
    return '';
  }
  
  /** Full reference string in selected language, falls back to Arabic */
  export function getReference(azkar, lang) {
    if (!azkar?.reference) return '';
    const key = LANG_KEY[lang] || 'arabic';
    return azkar.reference.translation?.[key] || azkar.reference.arabic || '';
  }