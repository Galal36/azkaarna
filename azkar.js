// ============================================================
//  azkar.js  —  Hisnul Muslim dataset
//  Arabic text is the primary source. All other fields derive.
//  Sources cited per dhikr for scholarly trust badges.
// ============================================================

export const CATEGORIES = [
  { id: "morning",   slug: "morning",   icon: "🌅", nameAr: "أذكار الصباح",       nameEn: "Morning Azkar",       nameUr: "صبح کے اذکار",         nameId: "Dzikir Pagi"       },
  { id: "evening",   slug: "evening",   icon: "🌙", nameAr: "أذكار المساء",       nameEn: "Evening Azkar",       nameUr: "شام کے اذکار",         nameId: "Dzikir Sore"       },
  { id: "sleep",     slug: "sleep",     icon: "🌙", nameAr: "أذكار النوم",        nameEn: "Before Sleep",        nameUr: "سونے کے اذکار",        nameId: "Dzikir Tidur"      },
  { id: "waking",    slug: "waking",    icon: "☀️", nameAr: "أذكار الاستيقاظ",   nameEn: "Upon Waking",         nameUr: "بیدار ہونے کے اذکار",  nameId: "Dzikir Bangun"     },
  { id: "afterSalah",slug: "afterSalah",icon: "🕌", nameAr: "أذكار بعد الصلاة",  nameEn: "After Prayer",        nameUr: "نماز کے بعد کے اذکار", nameId: "Dzikir Setelah Shalat" },
  { id: "wudu",      slug: "wudu",      icon: "💧", nameAr: "أذكار الوضوء",      nameEn: "Wudu Azkar",          nameUr: "وضو کے اذکار",         nameId: "Dzikir Wudhu"      },
  { id: "travel",    slug: "travel",    icon: "🚗", nameAr: "أذكار السفر",        nameEn: "Travel Azkar",        nameUr: "سفر کے اذکار",         nameId: "Dzikir Perjalanan" },
  { id: "home",      slug: "home",      icon: "🏠", nameAr: "أذكار المنزل",       nameEn: "Home Azkar",          nameUr: "گھر کے اذکار",         nameId: "Dzikir Rumah"      },
];

// ============================================================
//  MORNING AZKAR  أذكار الصباح
// ============================================================
const morning = [
  {
    id: "m01",
    category: "morning",
    order: 1,
    repetitions: 1,
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\n\nاللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ardh. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ardh. Wa la ya'uduhu hifdhuhuma wa Huwal-'Aliyyul-'Adhim.",
    translation: {
      en: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      ur: "اللہ، اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ رہنے والا اور سب کو تھامے رکھنے والا ہے۔ اسے نہ اونگھ آتی ہے نہ نیند۔ آسمانوں اور زمین میں جو کچھ ہے وہ اسی کا ہے۔ کون ہے جو اس کی اجازت کے بغیر اس کے پاس سفارش کر سکے؟ وہ جانتا ہے جو کچھ ان کے سامنے ہے اور جو کچھ ان کے پیچھے ہے۔ وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کر سکتے مگر جتنا وہ چاہے۔ اس کی کرسی آسمانوں اور زمین کو محیط ہے اور ان کی حفاظت اسے نہیں تھکاتی۔ وہ بلند و برتر ہے۔",
      id: "Allah, tidak ada tuhan selain Dia, Yang Mahahidup, Yang terus menerus mengurus makhluk-Nya. Dia tidak mengantuk dan tidak tidur. Milik-Nyalah apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu pun tentang ilmu-Nya, melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Pemeliharaan keduanya tidak membebani-Nya. Dialah Yang Mahatinggi, Mahaagung.",
    },
    title: { ar: "آية الكرسي", en: "Ayat al-Kursi", ur: "آیت الکرسی", id: "Ayat Kursi" },
    source: { book: "البخاري", ref: "2311", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Whoever recites this when he wakes up in the morning will be protected from Jinn until the evening.", ar: "من قالها حين يُصبح حُفِظ من الجنّ حتى يمسي." },
  },
  {
    id: "m02",
    category: "morning",
    order: 2,
    repetitions: 3,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nقُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration: "Bismillahir-Rahmanir-Rahim. Qul Huwal-lahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.",
    translation: {
      en: "In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.",
      ur: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔ کہو: وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔ نہ اس نے کسی کو جنا اور نہ وہ کسی سے جنا گیا۔ اور کوئی اس کا ہمسر نہیں ہے۔",
      id: "Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tiada beranak dan tiada pula diperanakkan. Dan tidak ada seorang pun yang setara dengan Dia.",
    },
    title: { ar: "سورة الإخلاص", en: "Surah Al-Ikhlas", ur: "سورة الاخلاص", id: "Surah Al-Ikhlas" },
    source: { book: "أبو داود والترمذي والنسائي", ref: "5082", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Recite 3 times — it will suffice you against everything.", ar: "تكفيك كل شيء إذا قُرئت ثلاث مرات." },
  },
  {
    id: "m03",
    category: "morning",
    order: 3,
    repetitions: 3,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration: "Qul a'udhu bi-Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad.",
    translation: {
      en: "Say: I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.",
      ur: "کہو: میں پناہ مانگتا ہوں صبح کے رب کی، ہر اس چیز کے شر سے جو اس نے پیدا کی، اور اندھیری رات کے شر سے جب وہ چھا جائے، اور گرہوں میں پھونک مارنے والیوں کے شر سے، اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔",
      id: "Katakanlah: Aku berlindung kepada Tuhan yang menguasai subuh, dari kejahatan makhluk-Nya, dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul, dan dari kejahatan pendengki bila ia dengki.",
    },
    title: { ar: "سورة الفلق", en: "Surah Al-Falaq", ur: "سورة الفلق", id: "Surah Al-Falaq" },
    source: { book: "أبو داود والترمذي والنسائي", ref: "5082", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "m04",
    category: "morning",
    order: 4,
    repetitions: 3,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration: "Qul a'udhu bi-Rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Al-ladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
    translation: {
      en: "Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the breasts of mankind, from among the jinn and mankind.",
      ur: "کہو: میں پناہ مانگتا ہوں لوگوں کے رب کی، لوگوں کے بادشاہ کی، لوگوں کے معبود کی، وسوسہ ڈالنے والے پیچھے ہٹنے والے کے شر سے، جو لوگوں کے سینوں میں وسوسہ ڈالتا ہے، جنوں اور انسانوں میں سے۔",
      id: "Katakanlah: Aku berlindung kepada Tuhan manusia, Raja manusia, Sembahan manusia, dari kejahatan bisikan setan yang biasa bersembunyi, yang membisikkan kejahatan ke dalam dada manusia, dari jin dan manusia.",
    },
    title: { ar: "سورة الناس", en: "Surah An-Nas", ur: "سورة الناس", id: "Surah An-Nas" },
    source: { book: "أبو داود والترمذي والنسائي", ref: "5082", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "m05",
    category: "morning",
    order: 5,
    repetitions: 1,
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhal-yawm, wa khayra ma ba'dah. Wa a'udhu bika min sharri ma fi hadhal-yawm, wa sharri ma ba'dah. Rabbi a'udhu bika minal-kasali, wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nar, wa 'adhabin fil-qabr.",
    translation: {
      en: "We have entered a new morning and with it all dominion belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. My Lord, I ask You for the good of this day and the good of what follows it, and I take refuge in You from the evil of this day and the evil of what follows it. My Lord, I take refuge in You from laziness and the misery of old age. My Lord, I take refuge in You from the punishment of the Fire and the punishment of the grave.",
      ur: "ہم نے صبح کی اور اللہ کی ساری بادشاہی نے صبح کی۔ تمام تعریفیں اللہ کے لیے ہیں۔ اللہ کے سوا کوئی معبود نہیں، اکیلا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہی ہے اور اسی کے لیے تعریف ہے اور وہ ہر چیز پر قادر ہے۔ اے رب! میں تجھ سے اس دن کی بھلائی اور اس کے بعد کی بھلائی مانگتا ہوں۔ اور اس دن کے شر اور اس کے بعد کے شر سے تیری پناہ مانگتا ہوں۔ اے رب! میں سستی اور بڑھاپے کی تکلیف سے تیری پناہ مانگتا ہوں۔ اے رب! آگ کے عذاب اور قبر کے عذاب سے تیری پناہ مانگتا ہوں۔",
      id: "Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah. Segala puji bagi Allah. Tiada Tuhan selain Allah semata, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan pujian. Dia Maha Kuasa atas segala sesuatu. Ya Rabb, aku memohon kepada-Mu kebaikan hari ini dan kebaikan sesudahnya. Dan aku berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya. Ya Rabb, aku berlindung kepada-Mu dari kemalasan dan kesengsaraan di hari tua. Ya Rabb, aku berlindung kepada-Mu dari siksa neraka dan siksa kubur.",
    },
    title: { ar: "دعاء الصباح", en: "Morning Supplication", ur: "صبح کی دعا", id: "Doa Pagi" },
    source: { book: "مسلم", ref: "2723", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "m06",
    category: "morning",
    order: 6,
    repetitions: 1,
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allahumma anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't. Abu'u laka bi ni'matika 'alayya, wa abu'u bi dhanbi, faghfir li, fa'innahu la yaghfirudh-dhunuba illa Anta.",
    translation: {
      en: "O Allah, You are my Lord. None has the right to be worshipped except You. You created me and I am your servant. I am upon Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge your favor upon me and I acknowledge my sin. So forgive me, for none forgives sins except You.",
      ur: "اے اللہ! تو میرا رب ہے۔ تیرے سوا کوئی معبود نہیں۔ تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں۔ اور میں اپنی طاقت کے مطابق تیرے عہد و وعدے پر قائم ہوں۔ جو کچھ میں نے کیا اس کے شر سے تیری پناہ مانگتا ہوں۔ تیری نعمت کا میرے اوپر اقرار کرتا ہوں اور اپنے گناہ کا بھی اقرار کرتا ہوں۔ پس مجھے بخش دے کیونکہ گناہوں کو تیرے سوا کوئی نہیں بخشتا۔",
      id: "Ya Allah, Engkau adalah Tuhanku. Tiada Tuhan selain Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu. Aku berada di atas janji dan perjanjian-Mu sesuai kemampuanku. Aku berlindung kepada-Mu dari kejahatan apa yang aku perbuat. Aku mengakui nikmat-Mu atasku, dan aku mengakui dosaku. Maka ampunilah aku, karena sesungguhnya tiada yang mengampuni dosa kecuali Engkau.",
    },
    title: { ar: "سيد الاستغفار", en: "Master of Forgiveness", ur: "سید الاستغفار", id: "Sayyidul Istighfar" },
    source: { book: "البخاري", ref: "6306", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Whoever says this with certainty in the morning and dies before evening will be from the people of Paradise, and likewise in the evening.", ar: "من قالها موقناً بها حين يُصبح فمات من يومه دخل الجنة." },
  },
  {
    id: "m07",
    category: "morning",
    order: 7,
    repetitions: 1,
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    transliteration: "Allahumma inni as'alukal-'afwa wal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fi dini wa dunyaya wa ahli wa mali. Allahumas-tur 'awrati wa amin raw'ati. Allahummah-fazni min bayni yadayya wa min khalfi, wa 'an yamini wa 'an shimali, wa min fawqi, wa a'udhu bi'azamatika an ughtala min tahti.",
    translation: {
      en: "O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and calm my fears. O Allah, guard me from what is in front of me and behind me, to my right and to my left, and from above me. I seek refuge in Your greatness from being struck down from beneath me.",
      ur: "اے اللہ! میں دنیا اور آخرت میں تجھ سے معافی اور عافیت مانگتا ہوں۔ اے اللہ! میں اپنے دین، دنیا، گھر والوں اور مال میں تجھ سے معافی اور عافیت مانگتا ہوں۔ اے اللہ! میری پردہ پوشی فرما اور میرے خوف دور فرما۔ اے اللہ! میرے سامنے سے، پیچھے سے، دائیں سے، بائیں سے اور اوپر سے میری حفاظت فرما۔ اور میں تیری عظمت سے پناہ مانگتا ہوں کہ مجھے نیچے سے ہلاک کیا جائے۔",
      id: "Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan di dunia dan akhirat. Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan dalam agamaku, duniaku, keluargaku, dan hartaku. Ya Allah, tutupilah auratku dan amankanlah ketakutanku. Ya Allah, jagalah aku dari depan dan belakangku, dari kanan dan kiriku, serta dari atasku. Dan aku berlindung dengan keagungan-Mu agar tidak dibinasakan dari bawahku.",
    },
    title: { ar: "دعاء العافية", en: "Dua for Well-being", ur: "عافیت کی دعا", id: "Doa Keselamatan" },
    source: { book: "أبو داود وابن ماجه", ref: "5074", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "m08",
    category: "morning",
    order: 8,
    repetitions: 100,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "SubhanAllahi wa bihamdih",
    translation: {
      en: "Glory be to Allah and praise be to Him.",
      ur: "اللہ پاک ہے اور تمام تعریفیں اسی کے لیے ہیں۔",
      id: "Maha Suci Allah dan segala puji bagi-Nya.",
    },
    title: { ar: "التسبيح والحمد", en: "Glorification & Praise", ur: "تسبیح و حمد", id: "Tasbih & Tahmid" },
    source: { book: "مسلم", ref: "2692", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Whoever says this 100 times a day, his sins will be forgiven even if they were like the foam of the sea.", ar: "من قالها مئة مرة حُطَّت خطاياه وإن كانت مثل زبد البحر." },
  },
  {
    id: "m09",
    category: "morning",
    order: 9,
    repetitions: 10,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in qadir.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.",
      ur: "اللہ کے سوا کوئی معبود نہیں، اکیلا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہی ہے اور اسی کے لیے تمام تعریفیں ہیں۔ اور وہ ہر چیز پر قادر ہے۔",
      id: "Tiada Tuhan selain Allah, semata-mata tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian. Dia Maha Kuasa atas segala sesuatu.",
    },
    title: { ar: "التوحيد", en: "Tawhid Declaration", ur: "اعلان توحید", id: "Deklarasi Tauhid" },
    source: { book: "مسلم", ref: "2693", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Recite 10 times in the morning — equals freeing 4 slaves, 100 good deeds recorded, 100 sins erased, and protection from Shaytan.", ar: "من قالها عشر مرات كان كمن أعتق أربعة أنفس من ولد إسماعيل." },
  },
  {
    id: "m10",
    category: "morning",
    order: 10,
    repetitions: 3,
    arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    transliteration: "Raditu billahi Rabba, wa bil-Islami dinan, wa bi-Muhammadin sallallahu 'alayhi wa sallama Nabiyya.",
    translation: {
      en: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (ﷺ) as my Prophet.",
      ur: "میں اللہ کو اپنا رب مان کر، اسلام کو اپنا دین مان کر اور محمد صلی اللہ علیہ وسلم کو اپنا نبی مان کر راضی ہوں۔",
      id: "Aku ridha Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad shallallahu 'alaihi wasallam sebagai nabiku.",
    },
    title: { ar: "الرضا", en: "Contentment", ur: "رضا", id: "Ridha" },
    source: { book: "أبو داود والترمذي والنسائي وابن ماجه", ref: "5072", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Whoever says this 3 times in the morning and evening, Allah will please him on the Day of Judgement.", ar: "حق على الله أن يُرضيه يوم القيامة." },
  },
];

// ============================================================
//  EVENING AZKAR  أذكار المساء
// ============================================================
const evening = [
  {
    id: "e01",
    category: "evening",
    order: 1,
    repetitions: 1,
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\n\nاللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ardh. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ardh. Wa la ya'uduhu hifdhuhuma wa Huwal-'Aliyyul-'Adhim.",
    translation: {
      en: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      ur: "اللہ، اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ رہنے والا اور سب کو تھامے رکھنے والا ہے۔ اسے نہ اونگھ آتی ہے نہ نیند۔ آسمانوں اور زمین میں جو کچھ ہے وہ اسی کا ہے۔",
      id: "Allah, tidak ada tuhan selain Dia, Yang Mahahidup, Yang terus menerus mengurus makhluk-Nya. Dia tidak mengantuk dan tidak tidur.",
    },
    title: { ar: "آية الكرسي", en: "Ayat al-Kursi", ur: "آیت الکرسی", id: "Ayat Kursi" },
    source: { book: "البخاري", ref: "2311", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "e02",
    category: "evening",
    order: 2,
    repetitions: 1,
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
    transliteration: "Amysaina wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in qadir. Rabbi as'aluka khayra ma fi hadhihil-laylah, wa khayra ma ba'daha. Wa a'udhu bika min sharri ma fi hadhihil-laylah, wa sharri ma ba'daha. Rabbi a'udhu bika minal-kasal, wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nar, wa 'adhabin fil-qabr.",
    translation: {
      en: "We have entered a new evening and with it all dominion belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. My Lord, I ask You for the good of this night and the good of what follows it, and I take refuge in You from the evil of this night and the evil of what follows it. My Lord, I take refuge in You from laziness and the misery of old age. My Lord, I take refuge in You from the punishment of the Fire and the punishment of the grave.",
      ur: "ہم نے شام کی اور اللہ کی ساری بادشاہی نے شام کی۔ تمام تعریفیں اللہ کے لیے ہیں۔ اللہ کے سوا کوئی معبود نہیں، اکیلا، کوئی شریک نہیں اس کا۔ اسی کی بادشاہی اور اسی کی تعریف ہے اور وہ ہر چیز پر قادر ہے۔ اے رب! اس رات کی بھلائی اور اس کے بعد کی بھلائی مانگتا ہوں۔ اس رات کے شر اور اس کے بعد کے شر سے پناہ مانگتا ہوں۔",
      id: "Kami telah memasuki waktu sore dan kerajaan hanya milik Allah. Segala puji bagi Allah. Tiada Tuhan selain Allah semata, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian. Dia Maha Kuasa atas segala sesuatu. Ya Rabb, aku memohon kepada-Mu kebaikan malam ini dan kebaikan sesudahnya.",
    },
    title: { ar: "دعاء المساء", en: "Evening Supplication", ur: "شام کی دعا", id: "Doa Sore" },
    source: { book: "مسلم", ref: "2723", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "e03",
    category: "evening",
    order: 3,
    repetitions: 100,
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "SubhanAllahi wa bihamdih",
    translation: {
      en: "Glory be to Allah and praise be to Him.",
      ur: "اللہ پاک ہے اور تمام تعریفیں اسی کے لیے ہیں۔",
      id: "Maha Suci Allah dan segala puji bagi-Nya.",
    },
    title: { ar: "التسبيح والحمد", en: "Glorification & Praise", ur: "تسبیح و حمد", id: "Tasbih & Tahmid" },
    source: { book: "مسلم", ref: "2692", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "e04",
    category: "evening",
    order: 4,
    repetitions: 1,
    arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    transliteration: "Allahumma inni amsaytu ush-hiduka wa ush-hidu hamalata 'arshika wa mala'ikataka wa jami'a khalqika annaka Antallahu la ilaha illa Anta wahdaka la sharika lak, wa anna Muhammadan 'abduka wa rasuluk.",
    translation: {
      en: "O Allah, I have entered a new evening calling You to witness, and calling to witness the bearers of Your Throne, Your angels, and all of Your creation, that You are Allah. None has the right to be worshipped except You, alone, without partner, and that Muhammad is Your slave and Your Messenger.",
      ur: "اے اللہ! میں نے شام کی اور تجھے گواہ بناتا ہوں، تیرے عرش اٹھانے والوں کو، تیرے فرشتوں کو اور تمام مخلوق کو کہ تو ہی اللہ ہے۔ تیرے سوا کوئی معبود نہیں، اکیلا، کوئی شریک نہیں تیرا۔ اور یہ کہ محمد تیرے بندے اور رسول ہیں۔",
      id: "Ya Allah, aku memasuki waktu sore menjadikan-Mu sebagai saksi, dan menjadikan para pembawa 'Arsy-Mu, para malaikat-Mu, dan seluruh makhluk-Mu sebagai saksi bahwa Engkau adalah Allah. Tiada Tuhan selain Engkau semata, tidak ada sekutu bagi-Mu, dan bahwa Muhammad adalah hamba dan utusan-Mu.",
    },
    title: { ar: "الإشهاد", en: "Declaration at Evening", ur: "شام کا اقرار", id: "Persaksian Sore" },
    source: { book: "أبو داود", ref: "5069", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Recite 4 times — Allah will free a quarter of you from the Fire each time.", ar: "من قالها أربع مرات أعتقه الله من النار ربعه." },
    repetitions: 4,
  },
];

// ============================================================
//  SLEEP AZKAR  أذكار النوم
// ============================================================
const sleep = [
  {
    id: "s01",
    category: "sleep",
    order: 1,
    repetitions: 1,
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya.",
    translation: {
      en: "In Your name, O Allah, I die and I live.",
      ur: "اے اللہ! تیرے نام سے مرتا ہوں اور جیتا ہوں۔",
      id: "Dengan nama-Mu ya Allah, aku mati dan aku hidup.",
    },
    title: { ar: "دعاء النوم", en: "Sleep Supplication", ur: "سونے کی دعا", id: "Doa Tidur" },
    source: { book: "البخاري", ref: "6324", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "s02",
    category: "sleep",
    order: 2,
    repetitions: 33,
    arabic: "سُبْحَانَ اللَّهِ",
    transliteration: "SubhanAllah",
    translation: {
      en: "Glory be to Allah.",
      ur: "اللہ پاک ہے۔",
      id: "Maha Suci Allah.",
    },
    title: { ar: "التسبيح قبل النوم", en: "Tasbeeh before Sleep", ur: "سونے سے پہلے تسبیح", id: "Tasbih Sebelum Tidur" },
    source: { book: "البخاري", ref: "3705", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Recite SubhanAllah 33, Alhamdulillah 33, Allahu Akbar 34. Better than a servant for you.", ar: "هو خير لك من خادم." },
  },
  {
    id: "s03",
    category: "sleep",
    order: 3,
    repetitions: 33,
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation: {
      en: "All praise is for Allah.",
      ur: "تمام تعریفیں اللہ کے لیے ہیں۔",
      id: "Segala puji bagi Allah.",
    },
    title: { ar: "التحميد قبل النوم", en: "Tahmeed before Sleep", ur: "سونے سے پہلے تحمید", id: "Tahmid Sebelum Tidur" },
    source: { book: "البخاري", ref: "3705", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "s04",
    category: "sleep",
    order: 4,
    repetitions: 34,
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translation: {
      en: "Allah is the Greatest.",
      ur: "اللہ سب سے بڑا ہے۔",
      id: "Allah Maha Besar.",
    },
    title: { ar: "التكبير قبل النوم", en: "Takbeer before Sleep", ur: "سونے سے پہلے تکبیر", id: "Takbir Sebelum Tidur" },
    source: { book: "البخاري", ref: "3705", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "s05",
    category: "sleep",
    order: 5,
    repetitions: 1,
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    transliteration: "Allahumma qini 'adhabaka yawma tab'athu 'ibadak.",
    translation: {
      en: "O Allah, protect me from Your punishment on the Day You resurrect Your servants.",
      ur: "اے اللہ! مجھے اپنے عذاب سے بچا جس دن تو اپنے بندوں کو اٹھائے گا۔",
      id: "Ya Allah, lindungilah aku dari siksa-Mu pada hari Engkau membangkitkan hamba-hamba-Mu.",
    },
    title: { ar: "الاستعاذة من عذاب القبر", en: "Protection from Punishment", ur: "عذاب سے پناہ", id: "Perlindungan dari Azab" },
    source: { book: "أبو داود والترمذي", ref: "5045", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Recite 3 times on your right side.", ar: "تُقال ثلاث مرات على الجنب الأيمن." },
    repetitions: 3,
  },
  {
    id: "s06",
    category: "sleep",
    order: 6,
    repetitions: 1,
    arabic: "اللَّهُمَّ بِاسْمِكَ أَحْيَا وَبِاسْمِكَ أَمُوتُ",
    transliteration: "Allahumma bismika ahya wa bismika amut.",
    translation: {
      en: "O Allah, with Your name I live and with Your name I die.",
      ur: "اے اللہ! تیرے نام سے جیتا ہوں اور تیرے نام سے مرتا ہوں۔",
      id: "Ya Allah, dengan nama-Mu aku hidup dan dengan nama-Mu aku mati.",
    },
    title: { ar: "دعاء ما قبل النوم", en: "Before Sleeping Dua", ur: "سونے سے پہلے دعا", id: "Doa Sebelum Tidur" },
    source: { book: "البخاري", ref: "6312", grade: "صحيح", gradeEn: "Sahih" },
  },
];

// ============================================================
//  WAKING AZKAR  أذكار الاستيقاظ
// ============================================================
const waking = [
  {
    id: "w01",
    category: "waking",
    order: 1,
    repetitions: 1,
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
    translation: {
      en: "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.",
      ur: "تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں موت دینے کے بعد زندگی بخشی اور اسی کی طرف اٹھنا ہے۔",
      id: "Segala puji bagi Allah yang telah menghidupkan kami kembali setelah mematikan kami dan kepada-Nya-lah kami akan dibangkitkan.",
    },
    title: { ar: "دعاء الاستيقاظ", en: "Upon Waking", ur: "بیداری کی دعا", id: "Doa Bangun Tidur" },
    source: { book: "البخاري", ref: "6312", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "w02",
    category: "waking",
    order: 2,
    repetitions: 1,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي",
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in qadir. SubhanAllah, walhamdu lillah, wa la ilaha illallah, wallahu akbar. Wa la hawla wa la quwwata illa billahil-'Aliyyil-'Adhim. Rabbighfir li.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. Glory be to Allah. All praise is for Allah. None has the right to be worshipped except Allah. Allah is the greatest. There is no power and no might except with Allah, the Most High, the Most Great. O Lord, forgive me.",
      ur: "اللہ کے سوا کوئی معبود نہیں، اکیلا، کوئی شریک نہیں اس کا۔ اسی کی بادشاہی اور اسی کے لیے تعریف ہے اور وہ ہر چیز پر قادر ہے۔ اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اللہ سب سے بڑا ہے۔ اللہ کی توفیق کے بغیر نہ کوئی طاقت ہے نہ قوت جو بلند و عظیم ہے۔ اے رب! مجھے بخش دے۔",
      id: "Tiada Tuhan selain Allah semata, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian. Dia Maha Kuasa atas segala sesuatu. Maha Suci Allah. Segala puji bagi Allah. Tiada Tuhan selain Allah. Allah Maha Besar. Tiada daya dan kekuatan kecuali dari Allah Yang Maha Tinggi lagi Maha Agung. Ya Tuhan, ampunilah aku.",
    },
    title: { ar: "ذكر الاستيقاظ", en: "Dhikr Upon Waking", ur: "بیداری کا ذکر", id: "Dzikir Bangun" },
    source: { book: "البخاري", ref: "1154", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Whoever says this upon waking at night and then asks forgiveness will be forgiven.", ar: "من تعارَّ من الليل فقال ذلك ثم استغفر غُفر له." },
  },
];

// ============================================================
//  AFTER SALAH  أذكار بعد الصلاة
// ============================================================
const afterSalah = [
  {
    id: "as01",
    category: "afterSalah",
    order: 1,
    repetitions: 3,
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah",
    translation: {
      en: "I seek forgiveness from Allah.",
      ur: "میں اللہ سے معافی مانگتا ہوں۔",
      id: "Aku memohon ampun kepada Allah.",
    },
    title: { ar: "الاستغفار", en: "Seeking Forgiveness", ur: "استغفار", id: "Istighfar" },
    source: { book: "مسلم", ref: "591", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "as02",
    category: "afterSalah",
    order: 2,
    repetitions: 1,
    arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram.",
    translation: {
      en: "O Allah, You are Peace and from You is peace. Blessed are You, O Possessor of majesty and honor.",
      ur: "اے اللہ! تو سلامتی ہے اور تجھ سے سلامتی ہے۔ بابرکت ہے تو اے جلال و اکرام والے۔",
      id: "Ya Allah, Engkau adalah As-Salam (Sejahtera) dan dari-Mu keselamatan. Maha Berkah Engkau wahai Dzat Pemilik Keagungan dan Kemuliaan.",
    },
    title: { ar: "السلام والبركة", en: "Peace & Blessing", ur: "سلام اور برکت", id: "Salam & Berkah" },
    source: { book: "مسلم", ref: "591", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "as03",
    category: "afterSalah",
    order: 3,
    repetitions: 33,
    arabic: "سُبْحَانَ اللَّهِ",
    transliteration: "SubhanAllah",
    translation: {
      en: "Glory be to Allah.",
      ur: "اللہ پاک ہے۔",
      id: "Maha Suci Allah.",
    },
    title: { ar: "التسبيح", en: "Tasbeeh", ur: "تسبیح", id: "Tasbih" },
    source: { book: "مسلم", ref: "597", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "as04",
    category: "afterSalah",
    order: 4,
    repetitions: 33,
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation: {
      en: "All praise is for Allah.",
      ur: "تمام تعریفیں اللہ کے لیے ہیں۔",
      id: "Segala puji bagi Allah.",
    },
    title: { ar: "التحميد", en: "Tahmeed", ur: "تحمید", id: "Tahmid" },
    source: { book: "مسلم", ref: "597", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "as05",
    category: "afterSalah",
    order: 5,
    repetitions: 34,
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translation: {
      en: "Allah is the Greatest.",
      ur: "اللہ سب سے بڑا ہے۔",
      id: "Allah Maha Besar.",
    },
    title: { ar: "التكبير", en: "Takbeer", ur: "تکبیر", id: "Takbir" },
    source: { book: "مسلم", ref: "597", grade: "صحيح", gradeEn: "Sahih" },
  },
  {
    id: "as06",
    category: "afterSalah",
    order: 6,
    repetitions: 1,
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ",
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in qadir. La hawla wa la quwwata illa billah. La ilaha illallah wa la na'budu illa iyyah. Lahun-ni'matu wa lahul-fadhl wa lahuth-thana'ul-hasan. La ilaha illallah mukhlisina lahud-din wa law karihal-kafirun.",
    translation: {
      en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent. There is no might and no power except with Allah. None has the right to be worshipped except Allah, and we do not worship any other besides Him. His is all blessing, His is all grace, and to Him belongs all beautiful praise. None has the right to be worshipped except Allah, and we make our religion sincerely for Him, even though the disbelievers dislike it.",
      ur: "اللہ کے سوا کوئی معبود نہیں، اکیلا، کوئی شریک نہیں اس کا۔ اسی کی بادشاہی اور اسی کے لیے تعریف ہے اور وہ ہر چیز پر قادر ہے۔ اللہ کی توفیق کے بغیر نہ طاقت ہے نہ قوت۔ اللہ کے سوا کوئی معبود نہیں اور ہم صرف اسی کی عبادت کرتے ہیں۔ اسی کی نعمت ہے اور اسی کا فضل ہے اور اسی کے لیے اچھی تعریف ہے۔ اللہ کے سوا کوئی معبود نہیں، ہم خالص اسی کے لیے دین کو مانتے ہیں اگرچہ کافر ناپسند کریں۔",
      id: "Tiada Tuhan selain Allah semata, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian. Dia Maha Kuasa atas segala sesuatu. Tiada daya dan kekuatan kecuali dari Allah. Tiada Tuhan selain Allah dan kami tidak menyembah selain Dia. Bagi-Nya segala nikmat, karunia, dan pujian yang baik. Tiada Tuhan selain Allah dengan mengikhlaskan agama bagi-Nya walaupun orang-orang kafir tidak menyukainya.",
    },
    title: { ar: "ختم التسبيح", en: "Completion after Tasbeeh", ur: "تسبیح کا اختتام", id: "Penutup Tasbih" },
    source: { book: "مسلم", ref: "594", grade: "صحيح", gradeEn: "Sahih" },
  },
];

// ============================================================
//  WUDU AZKAR  أذكار الوضوء
// ============================================================
const wudu = [
  {
    id: "wu01",
    category: "wudu",
    order: 1,
    repetitions: 1,
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillah",
    translation: {
      en: "In the name of Allah.",
      ur: "اللہ کے نام سے۔",
      id: "Dengan nama Allah.",
    },
    title: { ar: "قبل الوضوء", en: "Before Wudu", ur: "وضو سے پہلے", id: "Sebelum Wudhu" },
    source: { book: "أبو داود والترمذي", ref: "101", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Say this before beginning wudu.", ar: "تُقال قبل الشروع في الوضوء." },
  },
  {
    id: "wu02",
    category: "wudu",
    order: 2,
    repetitions: 1,
    arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
    translation: {
      en: "I bear witness that none has the right to be worshipped except Allah alone, without partner, and I bear witness that Muhammad is His slave and His Messenger.",
      ur: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، اکیلا، کوئی شریک نہیں اس کا۔ اور میں گواہی دیتا ہوں کہ محمد اس کے بندے اور رسول ہیں۔",
      id: "Aku bersaksi bahwa tiada Tuhan selain Allah semata, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya.",
    },
    title: { ar: "بعد الوضوء", en: "After Wudu", ur: "وضو کے بعد", id: "Setelah Wudhu" },
    source: { book: "مسلم", ref: "234", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Say this after completing wudu — the eight gates of Paradise will be opened for you.", ar: "فُتحت له أبواب الجنة الثمانية." },
  },
  {
    id: "wu03",
    category: "wudu",
    order: 3,
    repetitions: 1,
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    transliteration: "Allahumma-j'alni minat-tawwabina waj'alni minal-mutatahhirin.",
    translation: {
      en: "O Allah, make me of those who constantly repent and make me of those who purify themselves.",
      ur: "اے اللہ! مجھے توبہ کرنے والوں میں سے بنا اور مجھے پاکیزگی اختیار کرنے والوں میں سے بنا۔",
      id: "Ya Allah, jadikanlah aku termasuk orang-orang yang bertobat dan jadikanlah aku termasuk orang-orang yang menyucikan diri.",
    },
    title: { ar: "دعاء الوضوء", en: "Dua of Wudu", ur: "وضو کی دعا", id: "Doa Wudhu" },
    source: { book: "الترمذي", ref: "55", grade: "صحيح", gradeEn: "Sahih" },
  },
];

// ============================================================
//  TRAVEL AZKAR  أذكار السفر
// ============================================================
const travel = [
  {
    id: "t01",
    category: "travel",
    order: 1,
    repetitions: 3,
    arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالأَهْلِ",
    transliteration: "Allahu Akbar (×3). SubHanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin. Wa inna ila Rabbina la-munqalibun. Allahumma inna nas'aluka fi safarina hadhal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dah. Allahumma Antas-sahibu fis-safari wal-khalifatu fil-ahl. Allahumma inni a'udhu bika min wa'tha'is-safari wa ka'abatil-mandhami wa su'il-munqalabi fil-mali wal-ahl.",
    translation: {
      en: "Allah is the Greatest (×3). How perfect He is, the One Who has placed this (vehicle) at our service, and we ourselves would not have been capable of that, and to our Lord is our final destiny. O Allah, we ask You on this our journey for goodness and piety, and for works that are pleasing to You. O Allah, make this journey of ours easy for us and let its distance be short for us. O Allah, You are the Companion on the journey and the Successor over the family. O Allah, I seek refuge with You from the difficulties of travel, from having a change of heart, and from the evil sights, and I seek refuge with You from an ill fate with regards to wealth and family.",
      ur: "اللہ سب سے بڑا ہے (×3)۔ پاک ہے وہ جس نے یہ سواری ہمارے لیے مسخر کی حالانکہ ہم اسے قابو کرنے کے اہل نہ تھے اور ہم اپنے رب کی طرف لوٹنے والے ہیں۔ اے اللہ! ہم تجھ سے اس سفر میں نیکی اور تقویٰ مانگتے ہیں اور ایسا عمل جو تجھے پسند ہو۔ اے اللہ! ہم پر یہ سفر آسان فرما اور اس کی دوری ہم پر سمیٹ دے۔ اے اللہ! تو سفر میں ساتھی ہے اور گھر میں نگہبان۔ اے اللہ! میں سفر کی مشقت، غمگین منظر اور مال و گھر والوں کے بارے میں برے انجام سے تیری پناہ مانگتا ہوں۔",
      id: "Allah Maha Besar (×3). Maha Suci Dzat yang telah menundukkan kendaraan ini untuk kami, padahal kami tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami. Ya Allah, kami memohon kepada-Mu kebaikan dan ketakwaan dalam perjalanan kami ini, serta amalan yang Engkau ridhai. Ya Allah, mudahkanlah perjalanan kami ini dan perpendeklah jaraknya bagi kami. Ya Allah, Engkau adalah teman perjalanan dan pengganti atas keluarga. Ya Allah, aku berlindung kepada-Mu dari kesusahan perjalanan, pemandangan yang menyedihkan, dan dari keburukan dalam harta dan keluarga.",
    },
    title: { ar: "دعاء السفر", en: "Travel Supplication", ur: "سفر کی دعا", id: "Doa Perjalanan" },
    source: { book: "مسلم", ref: "1342", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Say this when boarding any vehicle or departing on a journey.", ar: "يُقال عند ركوب السيارة أو الطائرة أو عند بداية السفر." },
  },
  {
    id: "t02",
    category: "travel",
    order: 2,
    repetitions: 1,
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ الْقَرْيَةِ وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا فِيهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ أَهْلِهَا وَشَرِّ مَا فِيهَا",
    transliteration: "Allahumma inni as'aluka khayra hadhihil-qaryati wa khayra ahlaha wa khayra ma fiha, wa a'udhu bika min sharriha wa sharri ahliha wa sharri ma fiha.",
    translation: {
      en: "O Allah, I ask You for the good of this town, the good of its people, and the good of what is in it. And I seek refuge in You from its evil, the evil of its people, and the evil of what is in it.",
      ur: "اے اللہ! میں اس بستی کی بھلائی، اس کے باشندوں کی بھلائی اور اس میں موجود چیزوں کی بھلائی تجھ سے مانگتا ہوں۔ اور اس کے شر، اس کے باشندوں کے شر اور اس میں موجود چیزوں کے شر سے تیری پناہ مانگتا ہوں۔",
      id: "Ya Allah, aku memohon kepada-Mu kebaikan kota ini, kebaikan penduduknya, dan kebaikan apa yang ada di dalamnya. Dan aku berlindung kepada-Mu dari kejahatannya, kejahatan penduduknya, dan kejahatan apa yang ada di dalamnya.",
    },
    title: { ar: "دعاء القرية", en: "Entering a Town", ur: "شہر میں داخل ہونے کی دعا", id: "Doa Memasuki Kota" },
    source: { book: "ابن السني", ref: "524", grade: "صحيح", gradeEn: "Sahih" },
  },
];

// ============================================================
//  HOME AZKAR  أذكار المنزل
// ============================================================
const home = [
  {
    id: "h01",
    category: "home",
    order: 1,
    repetitions: 1,
    arabic: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'alallahi Rabbina tawakkalna.",
    translation: {
      en: "In the name of Allah we enter, in the name of Allah we leave, and upon Allah our Lord we place our trust.",
      ur: "اللہ کے نام سے داخل ہوئے، اللہ کے نام سے نکلے اور اپنے رب اللہ پر توکل کیا۔",
      id: "Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah Tuhan kami kami bertawakal.",
    },
    title: { ar: "دخول المنزل", en: "Entering the Home", ur: "گھر میں داخل ہونا", id: "Memasuki Rumah" },
    source: { book: "أبو داود", ref: "5096", grade: "صحيح", gradeEn: "Sahih" },
    note: { en: "Say this upon entering your home, then greet your family with salaam.", ar: "يُقال عند دخول البيت ثم يُسلَّم على أهله." },
  },
  {
    id: "h02",
    category: "home",
    order: 2,
    repetitions: 1,
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Allahumma inni as'aluka khayral-mawliji wa khayral-makhraj. Bismillahi walajna wa bismillahi kharajna wa 'alallahi Rabbina tawakkalna.",
    translation: {
      en: "O Allah, I ask You for the good of the entering and the good of the leaving. In the name of Allah we enter, and in the name of Allah we leave, and upon Allah our Lord we place our trust.",
      ur: "اے اللہ! میں داخل ہونے کی بھلائی اور نکلنے کی بھلائی تجھ سے مانگتا ہوں۔ اللہ کے نام سے داخل ہوئے اور اللہ کے نام سے نکلے اور اپنے رب اللہ پر بھروسہ کیا۔",
      id: "Ya Allah, aku memohon kepada-Mu kebaikan masuk dan kebaikan keluar. Dengan nama Allah kami masuk, dan dengan nama Allah kami keluar, serta kepada Allah Tuhan kami kami bertawakal.",
    },
    title: { ar: "دعاء دخول البيت", en: "Home Entry Dua", ur: "گھر میں داخل ہونے کی دعا", id: "Doa Masuk Rumah" },
    source: { book: "أبو داود", ref: "5096", grade: "صحيح", gradeEn: "Sahih" },
  },
];

// ============================================================
//  COMBINED EXPORT
// ============================================================
export const ALL_AZKAR = [
  ...morning,
  ...evening,
  ...sleep,
  ...waking,
  ...afterSalah,
  ...wudu,
  ...travel,
  ...home,
];

export const AZKAR_BY_CATEGORY = {
  morning,
  evening,
  sleep,
  waking,
  afterSalah,
  wudu,
  travel,
  home,
};

export default ALL_AZKAR;
