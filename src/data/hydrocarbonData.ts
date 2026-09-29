export interface HydrocarbonMolecule {
  nameSinhala: string;
  nameEnglish: string;
  category: 'alkane' | 'alkene' | 'alkyne' | 'derivative';
  molecularFormula: string;
  condensedFormula: string;
  carbonCount: number;
  hydrogenCount: number;
  boilingPoint: string;
  physicalState: string;
  commonUses: string;
  isomers?: {
    name: string;
    type: string;
    description: string;
  }[];
}

export interface PolymerData {
  id: string;
  nameSinhala: string;
  nameEnglish: string;
  tradeName?: string;
  type: 'synthetic' | 'natural';
  structureType: 'linear' | 'branched' | 'crosslinked';
  monomerSinhala: string;
  monomerEnglish: string;
  monomerFormula: string;
  repeatingUnit: string;
  properties: string[];
  uses: string[];
}

export interface QuizQuestion {
  id: number;
  questionNumber: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedTopic: string;
}

export interface EssayQuestion {
  id: number;
  title: string;
  subQuestions: {
    number: string;
    question: string;
    answer: string;
    marks: number;
  }[];
}

export interface GlossaryItem {
  id: string;
  sinhala: string;
  english: string;
  description: string;
  category: 'hydrocarbon' | 'polymer' | 'combustion' | 'general';
}

export const ALKANES_LIST: HydrocarbonMolecule[] = [
  {
    nameSinhala: 'මීතේන්',
    nameEnglish: 'Methane',
    category: 'alkane',
    molecularFormula: 'CH₄',
    condensedFormula: 'CH₄',
    carbonCount: 1,
    hydrogenCount: 4,
    boilingPoint: '-161.5 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'ජෛව වායුවේ (Biogas) සහ වගුරු වායුවේ ප්‍රධාන සංඝටකය, ස්වාභාවික වායු ඉන්ධනයක් ලෙස.'
  },
  {
    nameSinhala: 'එතේන්',
    nameEnglish: 'Ethane',
    category: 'alkane',
    molecularFormula: 'C₂H₆',
    condensedFormula: 'CH₃-CH₃',
    carbonCount: 2,
    hydrogenCount: 6,
    boilingPoint: '-88.6 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'ඛනිජ තෙල් ලිංවලින් නිදහස් වන ස්වාභාවික වායුවක්, එතීන් නිපදවීමට අමුද්‍රව්‍යයක් ලෙස.'
  },
  {
    nameSinhala: 'ප්‍රොපේන්',
    nameEnglish: 'Propane',
    category: 'alkane',
    molecularFormula: 'C₃H₈',
    condensedFormula: 'CH₃-CH₂-CH₃',
    carbonCount: 3,
    hydrogenCount: 8,
    boilingPoint: '-42 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'ද්‍රවීකෘත පෙට්‍රෝලියම් වායුවේ (L.P. Gas) ප්‍රධාන සංඝටකයක්.'
  },
  {
    nameSinhala: 'බියුටේන්',
    nameEnglish: 'Butane',
    category: 'alkane',
    molecularFormula: 'C₄H₁₀',
    condensedFormula: 'CH₃-CH₂-CH₂-CH₃',
    carbonCount: 4,
    hydrogenCount: 10,
    boilingPoint: '-0.5 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'L.P. Gas ගෘහස්ථ ගෑස් සිලින්ඩරවල සහ ගෑස් ලයිටර්වල ඉන්ධනයක් ලෙස.',
    isomers: [
      { name: 'n-බියුටේන් (සාමාන්‍ය බියුටේන්)', type: 'සරල දාමය', description: 'කාබන් පරමාණු 4 සෘජු රේඛීය දාමයකට බැඳී ඇත.' },
      { name: 'අයිසොබියුටේන් (2-මෙතිල්ප්‍රොපේන්)', type: 'ශාඛා දාමය', description: 'කාබන් 3 ක ප්‍රධාන දාමයක මැද කාබනයට මෙතිල් (-CH₃) ශාඛාවක් බැඳී ඇත.' }
    ]
  },
  {
    nameSinhala: 'පෙන්ටේන්',
    nameEnglish: 'Pentane',
    category: 'alkane',
    molecularFormula: 'C₅H₁₂',
    condensedFormula: 'CH₃-(CH₂)₃-CH₃',
    carbonCount: 5,
    hydrogenCount: 12,
    boilingPoint: '36.1 °C',
    physicalState: 'වාෂ්පශීලී ද්‍රවය (Volatile Liquid)',
    commonUses: 'විද්‍යාගාර තුළ කාබනික ද්‍රාවකයක් ලෙස, ෆෝම් ප්ලාස්ටික් පිඹීමට.',
    isomers: [
      { name: 'n-පෙන්ටේන්', type: 'සරල දාමය', description: 'කාබන් පරමාණු 5 ක් සෘජු දාමයක් ලෙස පිහිටයි.' },
      { name: 'අයිසොපෙන්ටේන් (2-මෙතිල්බියුටේන්)', type: 'තනි ශාඛාව', description: 'කාබන් 4 ක දාමයක දෙවන කාබනයට මෙතිල් කාණ්ඩයක් බැඳී ඇත.' },
      { name: 'නියෝපෙන්ටේන් (2,2-ඩයිමෙතිල්ප්‍රොපේන්)', type: 'ද්විත්ව ශාඛාව', description: 'මධ්‍ය කාබනය වටා මෙතිල් කාණ්ඩ 4 ක් සමමිතිකව පිහිටයි.' }
    ]
  },
  {
    nameSinhala: 'ඔක්ටේන්',
    nameEnglish: 'Octane',
    category: 'alkane',
    molecularFormula: 'C₈H₁₈',
    condensedFormula: 'CH₃-(CH₂)₆-CH₃',
    carbonCount: 8,
    hydrogenCount: 18,
    boilingPoint: '125.6 °C',
    physicalState: 'ද්‍රවය (Liquid)',
    commonUses: 'මෝටර් රථ සඳහා භාවිත වන පෙට්‍රල් ඉන්ධනයේ ප්‍රධානම සංඝටකය (Octane Rating මනින මිම්ම).'
  }
];

export const ALKENES_LIST: HydrocarbonMolecule[] = [
  {
    nameSinhala: 'එතීන් (එතිලීන්)',
    nameEnglish: 'Ethene (Ethylene)',
    category: 'alkene',
    molecularFormula: 'C₂H₄',
    condensedFormula: 'CH₂=CH₂',
    carbonCount: 2,
    hydrogenCount: 4,
    boilingPoint: '-103.7 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'පොලිතීන් බහුඅවයවිකය සෑදීමට මෙන්ම පලතුරු කෘත්‍රිමව ඉදුම් කරවීමට යොදාගනී.'
  },
  {
    nameSinhala: 'ප්‍රොපීන් (ප්‍රොපිලීන්)',
    nameEnglish: 'Propene (Propylene)',
    category: 'alkene',
    molecularFormula: 'C₃H₆',
    condensedFormula: 'CH₂=CH-CH₃',
    carbonCount: 3,
    hydrogenCount: 6,
    boilingPoint: '-47.6 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'පොලිප්‍රොපිලීන් (PP - රෙසින් කේත 5) ප්ලාස්ටික් බඳුන් හා යෝගට් කෝප්ප නිපදවීමට.'
  },
  {
    nameSinhala: 'බියුටීන්',
    nameEnglish: 'Butene',
    category: 'alkene',
    molecularFormula: 'C₄H₈',
    condensedFormula: 'CH₂=CH-CH₂-CH₃',
    carbonCount: 4,
    hydrogenCount: 8,
    boilingPoint: '-6.3 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'කෘත්‍රිම රබර් (Polybutene) සහ කාර්මික ඉන්ධන ආකලන සෑදීමට.',
    isomers: [
      { name: '1-බියුටීන්', type: 'ස්ථාන සමාවයවිකය', description: 'ද්විත්ව බන්ධනය 1 සහ 2 වන කාබන් පරමාණු අතර පිහිටයි (CH₂=CH-CH₂-CH₃).' },
      { name: '2-බියුටීන්', type: 'ස්ථාන සමාවයවිකය', description: 'ද්විත්ව බන්ධනය 2 සහ 3 වන මධ්‍ය කාබන් අතර පිහිටයි (CH₃-CH=CH-CH₃).' }
    ]
  }
];

export const ALKYNES_LIST: HydrocarbonMolecule[] = [
  {
    nameSinhala: 'එතයින් (ඇසිටලීන්)',
    nameEnglish: 'Ethyne (Acetylene)',
    category: 'alkyne',
    molecularFormula: 'C₂H₂',
    condensedFormula: 'CH≡CH',
    carbonCount: 2,
    hydrogenCount: 2,
    boilingPoint: '-84 °C (උත්ස්වේදනය)',
    physicalState: 'වායුව (Gas)',
    commonUses: 'ඔක්සි-ඇසිටලීන් දැල්ල (3300°C) මඟින් ලෝහ පෑස්සීම සහ කැපීම, විද්‍යාගාරයේදී CaC₂ මතට ජලය දැමීමෙන් පිළියෙල කිරීම, පලතුරු ඉදවීම.'
  },
  {
    nameSinhala: 'ප්‍රොපයින්',
    nameEnglish: 'Propyne (Methylacetylene)',
    category: 'alkyne',
    molecularFormula: 'C₃H₄',
    condensedFormula: 'CH≡C-CH₃',
    carbonCount: 3,
    hydrogenCount: 4,
    boilingPoint: '-23.2 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'විශේෂිත ලෝහ පෑස්සුම් වායුවක් (MAPP gas) ලෙස සහ කාබනික සංස්ලේෂණයේදී.'
  },
  {
    nameSinhala: '1-බියුටයින්',
    nameEnglish: '1-Butyne',
    category: 'alkyne',
    molecularFormula: 'C₄H₆',
    condensedFormula: 'CH≡C-CH₂-CH₃',
    carbonCount: 4,
    hydrogenCount: 6,
    boilingPoint: '8.08 °C',
    physicalState: 'වාෂ්පශීලී ද්‍රවය/වායුව',
    commonUses: 'කාබනික රසායනික සංස්ලේෂණය සඳහා අමුද්‍රව්‍යයක් ලෙස.',
    isomers: [
      { name: '1-බියුටයින්', type: 'ස්ථාන සමාවයවිකය', description: 'ත්‍රිත්ව බන්ධනය අග්‍රස්ථ කාබන් පරමාණුවේ පිහිටයි (CH≡C-CH₂-CH₃).' },
      { name: '2-බියුටයින්', type: 'ස්ථාන සමාවයවිකය', description: 'ත්‍රිත්ව බන්ධනය මැද කාබන් පරමාණු දෙක අතර පිහිටයි (CH₃-C≡C-CH₃).' }
    ]
  }
];

export const DERIVATIVES_LIST: HydrocarbonMolecule[] = [
  {
    nameSinhala: 'ක්ලෝරෝඑතීන් (වයිනයිල් ක්ලෝරයිඩ්)',
    nameEnglish: 'Chloroethene (Vinyl Chloride)',
    category: 'derivative',
    molecularFormula: 'C₂H₃Cl',
    condensedFormula: 'CH₂=CHCl',
    carbonCount: 2,
    hydrogenCount: 3,
    boilingPoint: '-13.4 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'පොලිවයිනයිල් ක්ලෝරයිඩ් (PVC) නළ හා බඳුන් නිපදවීම සඳහා ප්‍රධාන ඒකඅවයවිකය ලෙස.'
  },
  {
    nameSinhala: 'ටෙට්‍රාෆ්ලෝරෝඑතීන්',
    nameEnglish: 'Tetrafluoroethene (TFE)',
    category: 'derivative',
    molecularFormula: 'C₂F₄',
    condensedFormula: 'CF₂=CF₂',
    carbonCount: 2,
    hydrogenCount: 0,
    boilingPoint: '-76.3 °C',
    physicalState: 'වායුව (Gas)',
    commonUses: 'නොඇලෙන (Non-stick) ටෙෆ්ලෝන් (TEFLON) බඳුන් ආලේපනය සෑදීමේ ඒකඅවයවිකය ලෙස.'
  }
];

export const ALKENES_AND_DERIVATIVES: HydrocarbonMolecule[] = [
  ...ALKENES_LIST,
  ...ALKYNES_LIST,
  ...DERIVATIVES_LIST
];

export interface HydrocarbonComparison {
  familySinhala: string;
  familyEnglish: string;
  generalFormula: string;
  bondingType: string;
  saturation: string;
  reactivity: string;
  firstMember: string;
  bromineWaterReaction: string;
  combustionFlame: string;
  keyApplications: string;
}

export const HYDROCARBON_FAMILY_COMPARISON: HydrocarbonComparison[] = [
  {
    familySinhala: 'ඇල්කේන (Alkanes)',
    familyEnglish: 'Alkanes',
    generalFormula: 'CₙH₂ₙ₊₂ (n ≥ 1)',
    bondingType: 'C-C තනි සහසංයුජ බන්ධන පමණි',
    saturation: 'සංතෘප්ත (Saturated)',
    reactivity: 'සාපේක්ෂව අඩු ප්‍රතික්‍රියාශීලී (අක්‍රියයි)',
    firstMember: 'මීතේන් (CH₄)',
    bromineWaterReaction: 'අඳුරේදී ප්‍රතික්‍රියා නොකරයි (දුඹුරු පැහැය එලෙසම පවතී)',
    combustionFlame: 'පිරිසිදු නිල් දැල්ල (දැලි අවමයි, කාබන් % අඩුයි)',
    keyApplications: 'LPG, ස්වාභාවික වායුව, පෙට්‍රල්, ඩීසල්, ඉන්ධන'
  },
  {
    familySinhala: 'ඇල්කීන (Alkenes)',
    familyEnglish: 'Alkenes',
    generalFormula: 'CₙH₂ₙ (n ≥ 2)',
    bondingType: 'අවම එක් C=C ද්විත්ව බන්ධනයක්',
    saturation: 'අසංතෘප්ත (Unsaturated)',
    reactivity: 'ඉහළ ප්‍රතික්‍රියාශීලී (ආකලන ප්‍රතික්‍රියා)',
    firstMember: 'එතීන් / එතිලීන් (C₂H₄)',
    bromineWaterReaction: 'බ්‍රෝමීන් අණු 1ක් ආකලනය කර ක්ෂණිකව අවපැහැ කරයි',
    combustionFlame: 'දීප්තිමත් කහ දැල්ල, දැලි සහිත දුම පිටවේ',
    keyApplications: 'පොලිතීන්, PVC, ටෙෆ්ලෝන් ප්ලාස්ටික්, පලතුරු ඉදවීම'
  },
  {
    familySinhala: 'ඇල්කයින (Alkynes)',
    familyEnglish: 'Alkynes',
    generalFormula: 'CₙH₂ₙ₋₂ (n ≥ 2)',
    bondingType: 'අවම එක් C≡C ත්‍රිත්ව බන්ධනයක්',
    saturation: 'අතිශය අසංතෘප්ත (Highly Unsaturated)',
    reactivity: 'අතිශය ඉහළ ප්‍රතික්‍රියාශීලී (පියවර 2 ක ආකලන)',
    firstMember: 'එතයින් / ඇසිටලීන් (C₂H₂)',
    bromineWaterReaction: 'බ්‍රෝමීන් අණු 2ක් පියවරෙන් පියවර ආකලනය කර අවපැහැ කරයි',
    combustionFlame: 'වාතයේදී අධික දැලි සහිත දැඩි කහ දැල්ල; O₂ සමඟ 3300°C නිල් දැල්ල',
    keyApplications: 'ඔක්සි-ඇසිටලීන් ලෝහ පෑස්සුම් දැල්ල, කැල්සියම් කාබයිඩ් (CaC₂)'
  }
];

export const POLYMERS_LIST: PolymerData[] = [
  {
    id: 'polythene',
    nameSinhala: 'පොලිතීන් (පොලිඑතීන්)',
    nameEnglish: 'Polythene (Polyethylene)',
    type: 'synthetic',
    structureType: 'linear',
    monomerSinhala: 'එතීන්',
    monomerEnglish: 'Ethene',
    monomerFormula: 'CH₂=CH₂',
    repeatingUnit: '-[CH₂-CH₂]-ₙ',
    properties: [
      'විද්‍යුත් පරිවාරක වීම',
      'ජල රෝධක වීම',
      'වායු රෝධක වීම',
      'සැහැල්ලු බව',
      'ආතතිවලට ඔරොත්තු දීම සහ කල් පැවැත්ම'
    ],
    uses: [
      'ප්ලාස්ටික් බෝතල්',
      'සෙල්ලම් භාණ්ඩ',
      'පොලිතීන් පටල හා උර (Shopping bags)',
      'කුණුකසළ එකතු කරන බාල්දි',
      'දෘඪ ප්ලාස්ටික් කෙඳි'
    ]
  },
  {
    id: 'pvc',
    nameSinhala: 'පොලිවයිනයිල් ක්ලෝරයිඩ් (PVC)',
    nameEnglish: 'Polyvinyl Chloride (PVC)',
    tradeName: 'පොලික්ලෝරෝඑතීන්',
    type: 'synthetic',
    structureType: 'linear',
    monomerSinhala: 'ක්ලෝරෝඑතීන් (වයිනයිල් ක්ලෝරයිඩ්)',
    monomerEnglish: 'Chloroethene',
    monomerFormula: 'CH₂=CHCl',
    repeatingUnit: '-[CH₂-CH(Cl)]-ₙ',
    properties: [
      'ගින්නට ප්‍රතිරෝධී වීම (Flame retardant)',
      'විද්‍යුත් පරිවාරක වීම',
      'ජල රෝධක වීම',
      'සැහැල්ලු බව සහ ඉහළ යාන්ත්‍රික ශක්තිය'
    ],
    uses: [
      'වැහි පීලි (Rain gutters)',
      'ජල නළ (Water pipes)',
      'විදුලි වයර් ආවරණ කොන්ඩියුට් බට (Conduit pipes)',
      'නැමෙනසුලු හෝස් පයිප්ප'
    ]
  },
  {
    id: 'teflon',
    nameSinhala: 'පොලිටෙට්‍රාෆ්ලෝරෝඑතීන් (ටෙෆ්ලෝන්)',
    nameEnglish: 'Polytetrafluoroethene (PTFE / TEFLON)',
    tradeName: 'ටෙෆ්ලෝන් (TEFLON)',
    type: 'synthetic',
    structureType: 'linear',
    monomerSinhala: 'ටෙට්‍රාෆ්ලෝරෝඑතීන්',
    monomerEnglish: 'Tetrafluoroethene',
    monomerFormula: 'CF₂=CF₂',
    repeatingUnit: '-[CF₂-CF₂]-ₙ',
    properties: [
      'අධික තාපයට ඔරොත්තු දීම (Heat resistant)',
      'විද්‍යුත් පරිවාරක වීම',
      'රසායනිකව අතිශය අක්‍රිය වීම',
      'ඝර්ෂණය අතිශයින් අඩු නොඇලෙන මතුපිටක් තිබීම (Non-stick)'
    ],
    uses: [
      'ආහාර පිසීමට යොදාගන්නා නොඇලෙන (Non-stick) තැටි හා බඳුන් ආලේපනය',
      'හිම සපත්තු (Skis) පතුල් ආලේපනය',
      'කාර්මික ගෑස්කට් සහ මුද්‍රා'
    ]
  },
  {
    id: 'natural_rubber',
    nameSinhala: 'ස්වාභාවික රබර් (Natural Rubber)',
    nameEnglish: 'Natural Rubber (Polyisoprene)',
    type: 'natural',
    structureType: 'linear',
    monomerSinhala: 'අයිසොප්‍රීන් (Isoprene)',
    monomerEnglish: 'Isoprene (2-methylbuta-1,3-diene)',
    monomerFormula: 'CH₂=C(CH₃)-CH=CH₂',
    repeatingUnit: '-[CH₂-C(CH₃)=CH-CH₂]-ₙ',
    properties: [
      'ඉහළ ප්‍රත්‍යාස්ථතාව (Elasticity)',
      'ජලයට හා වාතයට අපාරගම්‍ය වීම',
      'ස්වභාවික තත්වයේදී උෂ්ණත්වය හමුවේ ඇලෙනසුලු හා මෘදු වීම'
    ],
    uses: [
      'රබර් කිරි (Latex) ආශ්‍රිත නිෂ්පාදන',
      'වල්කනයිස් කළ පසු: වාහන ටයර්, ටියුබ්, බැටරි ආවරණ, කර්මාන්තශාලා බෙල්ට්'
    ]
  }
];

export const CHAPTER_MCQS: QuizQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    question: 'එල්.පී. ගෑස් (L.P. Gas) යනු ප්‍රධාන වශයෙන් කුමන හයිඩ්‍රොකාබන දෙකෙහි මිශ්‍රණයක් ද?',
    options: [
      'A) මීතේන් සහ එතේන්',
      'B) ප්‍රොපේන් සහ බියුටේන්',
      'C) එතීන් සහ ප්‍රොපීන්',
      'D) පෙන්ටේන් සහ ඔක්ටේන්'
    ],
    correctIndex: 1,
    explanation: 'ගෘහස්ථ එල්.පී. ගෑස් (LPG) යනු ප්‍රධාන වශයෙන් ප්‍රොපේන් (C₃H₈) සහ බියුටේන් (C₄H₁₀) යන ඇල්කේන දෙකෙහි ද්‍රවීකෘත මිශ්‍රණයකි.',
    relatedTopic: '14.1 හයිඩ්‍රොකාබන ඉන්ධන'
  },
  {
    id: 2,
    questionNumber: 2,
    question: 'ඇල්කේන (Alkanes) කුලයේ සාමාජිකයන්ගේ පොදු අණුක සූත්‍රය කුමක්ද?',
    options: [
      'A) CₙH₂ₙ',
      'B) CₙH₂ₙ₊₂',
      'C) CₙH₂ₙ₋₂',
      'D) CₙHₙ'
    ],
    correctIndex: 1,
    explanation: 'ඇල්කේන යනු කාබන්-කාබන් තනි බන්ධන (C-C) පමණක් ඇති සංතෘප්ත හයිඩ්‍රොකාබන වේ. ඒවායේ පොදු සූත්‍රය CₙH₂ₙ₊₂ වේ.',
    relatedTopic: '14.1 ඇල්කේන පොදු සූත්‍රය'
  },
  {
    id: 3,
    questionNumber: 3,
    question: 'ඉටිපන්දමක් දැවීමේදී නිපදවෙන වායුව හුණු දියර (Lime water) කිරි පැහැ ගැන්වීමට හේතු වන්නේ කුමක්ද?',
    options: [
      'A) ජලවාෂ්ප පිටවීම (H₂O)',
      'B) කාබන් ඩයොක්සයිඩ් වායුව පිටවීම (CO₂)',
      'C) සල්ෆර් ඩයොක්සයිඩ් පිටවීම (SO₂)',
      'D) හයිඩ්‍රජන් වායුව පිටවීම (H₂)'
    ],
    correctIndex: 1,
    explanation: 'ඉටිවල කාබන් (C) අඩංගු බව ඔප්පු වන්නේ දහනයේදී පිටවන කාබන් ඩයොක්සයිඩ් (CO₂) වායුව හුණු දියර (Ca(OH)₂) සමඟ ප්‍රතික්‍රියා කර සුදු පැහැති කැල්සියම් කාබනේට් (CaCO₃) අවක්ෂේපය සෑදීමෙනි.',
    relatedTopic: 'ක්‍රියාකාරකම 14.1'
  },
  {
    id: 4,
    questionNumber: 4,
    question: 'පොලිවයිනයිල් ක්ලෝරයිඩ් (PVC) බහුඅවයවිකය සාදනු ලබන ඒකඅවයවිකය කුමක්ද?',
    options: [
      'A) එතීන් (C₂H₄)',
      'B) ක්ලෝරෝඑතීන් / වයිනයිල් ක්ලෝරයිඩ් (C₂H₃Cl)',
      'C) ටෙට්‍රාෆ්ලෝරෝඑතීන් (C₂F₄)',
      'D) අයිසොප්‍රීන්'
    ],
    correctIndex: 1,
    explanation: 'PVC සෑදෙන්නේ ක්ලෝරෝඑතීන් (CH₂=CHCl) අණු දහස් ගණනක් ආකලන බහුඅවයවීකරණය වීමෙනි.',
    relatedTopic: '14.2 & 14.3 එතීන ව්‍යුත්පන්න'
  },
  {
    id: 5,
    questionNumber: 5,
    question: 'ආහාර පිසින නොඇලෙන (Non-stick) බඳුන් ආලේප කිරීමට යොදාගන්නා ටෙෆ්ලෝන් (TEFLON) හි අඩංගු ඒකඅවයවිකය කුමක්ද?',
    options: [
      'A) එතීන්',
      'B) ක්ලෝරෝඑතීන්',
      'C) ටෙට්‍රාෆ්ලෝරෝඑතීන් (CF₂=CF₂)',
      'D) මෙතිල් මෙතැක්‍රිලේට්'
    ],
    correctIndex: 2,
    explanation: 'ටෙෆ්ලෝන් හෙවත් පොලිටෙට්‍රාෆ්ලෝරෝඑතීන් (PTFE) හි ඒකඅවයවිකය වන්නේ ටෙට්‍රාෆ්ලෝරෝඑතීන් (CF₂=CF₂) වේ.',
    relatedTopic: '14.3 ටෙෆ්ලෝන් බහුඅවයවිකය'
  },
  {
    id: 6,
    questionNumber: 6,
    question: 'ස්වාභාවික රබර් වල්කනයිස් කිරීමේදී (Vulcanization) රබර් සමඟ රත් කරන්නේ කුමන ද්‍රව්‍යයද?',
    options: [
      'A) කාබන් කුඩු',
      'B) සල්ෆර් (ගෙන්දගම්)',
      'C) පොස්පරස්',
      'D) සිලිකන්'
    ],
    correctIndex: 1,
    explanation: 'ස්වාභාවික රබර් සල්ෆර් (Sulfur) සමඟ රත් කළ විට රබර්වල රේඛීය දාම අතර සල්ෆර් හරස් බන්ධන ඇතිවී රබර්වල දෘඪතාව, කල්පැවැත්ම හා ප්‍රත්‍යාස්ථතාව විශාල ලෙස ඉහළ නගී.',
    relatedTopic: '14.3 රබර් වල්කනයිස් කිරීම'
  },
  {
    id: 7,
    questionNumber: 7,
    question: 'පහත සඳහන් ද්‍රව්‍ය අතරින් ස්වාභාවික බහුඅවයවිකයක් නොවන්නේ කුමක්ද?',
    options: [
      'A) ප්‍රෝටීන',
      'B) සෙලියුලෝස්',
      'C) නයිලෝන් (Nylon)',
      'D) පිෂ්ඨය (Starch)'
    ],
    correctIndex: 2,
    explanation: 'ප්‍රෝටීන, සෙලියුලෝස් සහ පිෂ්ඨය ශාක හා සතුන් තුළ ස්වාභාවිකව හමුවන බහුඅවයවික වේ. නයිලෝන් යනු කෘත්‍රිමව සංස්ලේෂණය කරන ලද බහුඅවයවිකයකි.',
    relatedTopic: '14.3 බහුඅවයවික වර්ගීකරණය'
  },
  {
    id: 8,
    questionNumber: 8,
    question: 'ජල නළ සඳහා යකඩ බට භාවිතයට වඩා PVC බට යොදාගැනීම සුදුසු වීමට හේතුවක් නොවන්නේ කුමක්ද?',
    options: [
      'A) PVC බට මල නොබැඳීම සහ නොදිරා පැවතීම',
      'B) සැහැල්ලු වීම සහ සවි කිරීම පහසු වීම',
      'C) PVC බට අධික උෂ්ණත්වයේදී පහසුවෙන් විලයනය නොවීම',
      'D) අභ්‍යන්තර පෘෂ්ඨය සිනිඳු බැවින් ජල ඝර්ෂණය අවම වීම'
    ],
    correctIndex: 2,
    explanation: 'PVC යනු තාපස්ථාප්‍ය ප්ලාස්ටික් වර්ගයක් බැවින් අධික උෂ්ණත්වයේදී මෘදු වී විරූපී වේ. එය වාසියක් නොව සීමාවකි. අනෙක් කරුණු 3 ම PVC බටවල ප්‍රධාන වාසි වේ.',
    relatedTopic: '14.3 PVC භාවිතයේ වාසි'
  },
  {
    id: 9,
    questionNumber: 9,
    question: 'කාබන් පරමාණු 4 ක් සහිත සරල ඇල්කේනය (බියුටේන්) සතුව පවතින ව්‍යුහ සමාවයවික (Isomers) ගණන කීයද?',
    options: [
      'A) 1',
      'B) 2',
      'C) 3',
      'D) 4'
    ],
    correctIndex: 1,
    explanation: 'බියුටේන් (C₄H₁₀) සඳහා ව්‍යුහ සමාවයවික 2 ක් ඇත: n-බියුටේන් (සරල දාමය) සහ 2-මෙතිල්ප්‍රොපේන් / අයිසොබියුටේන් (ශාඛා දාමය).',
    relatedTopic: '14.1 සමාවයවිකතාව'
  },
  {
    id: 10,
    questionNumber: 10,
    question: 'ප්ලාස්ටික් අපද්‍රව්‍ය කළමනාකරණයේ 4R මූලධර්මයට අයත් වන්නේ කුමක්ද?',
    options: [
      'A) Run, React, Refine, Release',
      'B) Reuse, Reduce, Replace, Recycle',
      'C) Repair, Remove, Resist, Restore',
      'D) Rust, React, Reheat, Reburn'
    ],
    correctIndex: 1,
    explanation: '4R මූලධර්මය යනු: Reuse (නැවත භාවිතය), Reduce (භාවිතය අවම කිරීම), Replace (පරිසර හිතකාමී ද්‍රව්‍යවලින් ආදේශ කිරීම), Recycle (ප්‍රතිචක්‍රීකරණය) වේ.',
    relatedTopic: '14.3 අපද්‍රව්‍ය කළමනාකරණය'
  }
];

export const CHAPTER_ESSAYS: EssayQuestion[] = [
  {
    id: 1,
    title: 'රචනා ප්‍රශ්නය 1: එල්.පී. ගෑස් (L.P. Gas) සහ පෙට්‍රල් දහනය',
    subQuestions: [
      {
        number: '(i)',
        question: 'එල්.පී. ගෑස් හි අඩංගු ප්‍රොපේන් සහ බියුටේන්වල අණුක සූත්‍ර ලියන්න.',
        answer: 'ප්‍රොපේන්: C₃H₈ | බියුටේන්: C₄H₁₀',
        marks: 2
      },
      {
        number: '(ii)',
        question: 'ප්‍රොපේන් වායුව සම්පූර්ණ දහනය සඳහා තුලිත රසායනික සමීකරණය ලියන්න.',
        answer: 'C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l) + තාපය',
        marks: 3
      },
      {
        number: '(iii)',
        question: 'ඉන්ධනයක් ලෙස දර භාවිතයට වඩා එල්.පී. ගෑස් භාවිතය පරිසරයට හිතකර වන්නේ ඇයි?',
        answer: 'L.P. ගෑස් සම්පූර්ණ දහනයට ලක්වන බැවින් දුම, අළු හෝ සබන් (C කණිකා) පිට නොවේ. CO₂ සහ H₂O පමණක් නිපදවමින් ඉහළ කැලරි අගයක් ලබාදෙයි.',
        marks: 2
      },
      {
        number: '(iv)',
        question: 'පෙට්‍රල් අසම්පූර්ණ දහනයේදී පරිසරයට මුදාහැරෙන අහිතකර සංඝටක දෙකක් නම් කරන්න.',
        answer: '1. කාබන් මොනොක්සයිඩ් (CO - විෂ වායුව) | 2. කාබන් අංශු / දැලි කුඩු (Soot / C particles)',
        marks: 2
      }
    ]
  },
  {
    id: 2,
    title: 'රචනා ප්‍රශ්නය 2: බහුඅවයවික සහ ප්ලාස්ටික් තාක්ෂණය',
    subQuestions: [
      {
        number: '(i)',
        question: 'පොලිතීන් සෑදෙන ආකලන බහුඅවයවීකරණ ප්‍රතික්‍රියාව සංක්ෂිප්ත සමීකරණයකින් දක්වන්න.',
        answer: 'n(CH₂=CH₂) → -[CH₂-CH₂]-ₙ',
        marks: 3
      },
      {
        number: '(ii)',
        question: 'ස්වාභාවික රබර් වල්කනයිස් කිරීමෙන් ලැබෙන වාසි දෙකක් සඳහන් කරන්න.',
        answer: '1. රබර්වල යාන්ත්‍රික ශක්තිය හා දෘඪතාව වැඩිවීම. 2. රස්නයට ඇලෙනසුලු වීම වැළකී ඉහළ තාප ප්‍රතිරෝධයක් සහ ප්‍රත්‍යාස්ථතාවක් ලැබීම.',
        marks: 2
      },
      {
        number: '(iii)',
        question: 'ප්ලාස්ටික් දහනය කිරීම පරිසරයට ඉතා අහිතකර වීමට හේතුව කුමක්ද?',
        answer: 'ප්ලාස්ටික් (විශේෂයෙන් PVC) දහනය කිරීමේදී ඩයොක්සින් (Dioxins) සහ ෆියුරාන් වැනි අතිශය විෂ සහිත, පිළිකා කාරක වායු පරිසරයට මුදාහැරෙන බැවිනි.',
        marks: 2
      }
    ]
  }
];

export interface PetroleumFraction {
  id: string;
  nameSinhala: string;
  nameEnglish: string;
  carbonRange: string;
  boilingPointRange: string;
  uses: string[];
  viscosity: 'අතිශය අඩු (Very Low)' | 'අඩු (Low)' | 'මධ්‍යස්ථ (Medium)' | 'ඉහළ (High)' | 'අතිශය ඉහළ (Very High)';
  volatility: 'ඉතා ඉහළ' | 'ඉහළ' | 'මධ්‍යස්ථ' | 'අඩු' | 'ඉතා අඩු';
  flammability: 'ක්ෂණිකව දැල්වේ (Highly Flammable)' | 'පහසුවෙන් දැල්වේ' | 'මධ්‍යස්ථව දැල්වේ' | 'රත් කළ විට පමණක් දැල්වේ';
  sootiness: 'දැලි රහිත නිල් දැල්ල' | 'ඉතා අඩු දැලි' | 'මධ්‍යස්ථ දැලි' | 'අධික දැලි සහිත කහ දැල්ල';
}

export interface PlasticCodeData {
  code: number;
  acronym: string;
  nameSinhala: string;
  nameEnglish: string;
  density: string;
  recyclability: string;
  examples: string[];
  healthImpact: string;
}

export const PETROLEUM_FRACTIONS: PetroleumFraction[] = [
  {
    id: 'refinery_gas',
    nameSinhala: 'පෙට්‍රෝලියම් වායු (පිරිපහදු වායුව)',
    nameEnglish: 'Refinery Gas (LPG)',
    carbonRange: 'C₁ - C₄',
    boilingPointRange: '< 20 °C',
    uses: [
      'ගෘහස්ථ එල්.පී. ගෑස් (L.P. Gas) සිලින්ඩර',
      'ගෑස් ලයිටර් (Butane lighters)',
      'කාර්මික තාපන උදුන්'
    ],
    viscosity: 'අතිශය අඩු (Very Low)',
    volatility: 'ඉතා ඉහළ',
    flammability: 'ක්ෂණිකව දැල්වේ (Highly Flammable)',
    sootiness: 'දැලි රහිත නිල් දැල්ල'
  },
  {
    id: 'petrol',
    nameSinhala: 'පෙට්‍රල් / ගැසොලින් (Petrol / Gasoline)',
    nameEnglish: 'Petrol (Gasoline)',
    carbonRange: 'C₅ - C₁₀',
    boilingPointRange: '40 °C - 150 °C',
    uses: [
      'මෝටර් රථ, යතුරුපැදි සහ ත්‍රිරෝද රථ ඉන්ධන',
      'කාබනික ද්‍රාවකයක් ලෙස (Dry cleaning & grease removal)'
    ],
    viscosity: 'අඩු (Low)',
    volatility: 'ඉහළ',
    flammability: 'ක්ෂණිකව දැල්වේ (Highly Flammable)',
    sootiness: 'ඉතා අඩු දැලි'
  },
  {
    id: 'naphtha',
    nameSinhala: 'නැප්තා (Naphtha)',
    nameEnglish: 'Naphtha',
    carbonRange: 'C₇ - C₁₁',
    boilingPointRange: '110 °C - 180 °C',
    uses: [
      'ප්ලාස්ටික් හා කෘත්‍රිම බහුඅවයවික නිෂ්පාදනයේ මූලික අමුද්‍රව්‍යය',
      'ඖෂධ, සායම් සහ කෘෂි රසායනික නිපදවීමට (Chemical Feedstock)'
    ],
    viscosity: 'අඩු (Low)',
    volatility: 'මධ්‍යස්ථ',
    flammability: 'පහසුවෙන් දැල්වේ',
    sootiness: 'මධ්‍යස්ථ දැලි'
  },
  {
    id: 'kerosene',
    nameSinhala: 'භූමිතෙල් / කෙරොසීන් (Kerosene)',
    nameEnglish: 'Kerosene (Paraffin oil)',
    carbonRange: 'C₁₀ - C₁₆',
    boilingPointRange: '180 °C - 260 °C',
    uses: [
      'ගුවන් යානා ජෙට් එන්ජින් ඉන්ධනය (Aviation Turbine Fuel - ATF)',
      'ගෘහස්ථ කුප්පි ලාම්පු හා භූමිතෙල් උදුන්'
    ],
    viscosity: 'මධ්‍යස්ථ (Medium)',
    volatility: 'මධ්‍යස්ථ',
    flammability: 'පහසුවෙන් දැල්වේ',
    sootiness: 'මධ්‍යස්ථ දැලි'
  },
  {
    id: 'diesel',
    nameSinhala: 'ඩීසල් / වායු තෙල් (Diesel / Gas oil)',
    nameEnglish: 'Diesel (Gas Oil)',
    carbonRange: 'C₁₄ - C₂₀',
    boilingPointRange: '260 °C - 340 °C',
    uses: [
      'බර වාහන (බස්, ලොරි), දුම්රිය එන්ජින් සහ විදුලි ජනක යන්ත්‍ර (Generators)'
    ],
    viscosity: 'ඉහළ (High)',
    volatility: 'අඩු',
    flammability: 'මධ්‍යස්ථව දැල්වේ',
    sootiness: 'අධික දැලි සහිත කහ දැල්ල'
  },
  {
    id: 'lubricants',
    nameSinhala: 'ලිහිසි තෙල් සහ ඉටි (Lubricating Oil & Paraffin Wax)',
    nameEnglish: 'Lubricants & Waxes',
    carbonRange: 'C₂₀ - C₅₀',
    boilingPointRange: '> 350 °C',
    uses: [
      'යන්ත්‍ර සූත්‍ර ඝර්ෂණය අවම කරන ලිහිසි තෙල්',
      'ඉටිපන්දම් නිෂ්පාදනය, වැස්ලින් සහ ඔප දැමීමේ ඉටි'
    ],
    viscosity: 'ඉහළ (High)',
    volatility: 'ඉතා අඩු',
    flammability: 'රත් කළ විට පමණක් දැල්වේ',
    sootiness: 'අධික දැලි සහිත කහ දැල්ල'
  },
  {
    id: 'bitumen',
    nameSinhala: 'බිටුමන් / තාර (Bitumen / Asphalt)',
    nameEnglish: 'Bitumen (Residue / Pitch)',
    carbonRange: '> C₅₀',
    boilingPointRange: 'අවශේෂය (නොඋතුරන ඝන/අර්ධ ඝන)',
    uses: [
      'මහාමාර්ග කාපට් කිරීම (Road surfacing)',
      'වහල හා පදනම් ජලරෝධනය (Waterproofing membranes)'
    ],
    viscosity: 'අතිශය ඉහළ (Very High)',
    volatility: 'ඉතා අඩු',
    flammability: 'රත් කළ විට පමණක් දැල්වේ',
    sootiness: 'අධික දැලි සහිත කහ දැල්ල'
  }
];

export const PLASTIC_RECYCLING_CODES: PlasticCodeData[] = [
  {
    code: 1,
    acronym: 'PETE / PET',
    nameSinhala: 'පොලිඑතිලීන් ටෙරෙෆ්තැලේට්',
    nameEnglish: 'Polyethylene Terephthalate',
    density: '1.38 g/cm³',
    recyclability: 'ඉහළින්ම ප්‍රතිචක්‍රීකරණය කළ හැකිය (100% Recyclable)',
    examples: ['බීම බෝතල්', 'පිරිසිදු පානීය ජල බෝතල්', 'ආහාර ඇසුරුම් බඳුන්'],
    healthImpact: 'එක් වරක් පමණක් භාවිතයට ආරක්ෂිතයි; නැවත නැවත භාවිතයේදී බැක්ටීරියා වර්ධනය විය හැක.'
  },
  {
    code: 2,
    acronym: 'HDPE',
    nameSinhala: 'ඉහළ ඝනත්ව පොලිතීන්',
    nameEnglish: 'High-Density Polyethylene',
    density: '0.95 g/cm³',
    recyclability: 'පහසුවෙන් ප්‍රතිචක්‍රීකරණය කළ හැකිය',
    examples: ['කිරි කැනිස්ටර්', 'ෂැම්පු සහ සේදුම් දියර බෝතල්', 'දෘඪ ප්ලාස්ටික් කූඩ'],
    healthImpact: 'ආහාර ගබඩා කිරීමට ඉතා ආරක්ෂිතයි; රසායනික කාන්දු අවමයි.'
  },
  {
    code: 3,
    acronym: 'PVC',
    nameSinhala: 'පොලිවයිනයිල් ක්ලෝරයිඩ්',
    nameEnglish: 'Polyvinyl Chloride',
    density: '1.40 g/cm³',
    recyclability: 'ප්‍රතිචක්‍රීකරණය අසීරුයි (විෂ වායු නිකුත් වේ)',
    examples: ['ජල නළ (Pipes)', 'වැහි පීලි', 'විදුලි වයර් ආවරණ (Conduit)'],
    healthImpact: 'පිළිස්සීමේදී ක්ලෝරින්, ඩයොක්සින් වැනි විෂ වායු පිටවන බැවින් ආහාර සඳහා නුසුදුසුයි.'
  },
  {
    code: 4,
    acronym: 'LDPE',
    nameSinhala: 'අඩු ඝනත්ව පොලිතීන්',
    nameEnglish: 'Low-Density Polyethylene',
    density: '0.92 g/cm³',
    recyclability: 'නැවත භාවිත කළ හැක, ප්‍රතිචක්‍රීකරණය මධ්‍යස්ථයි',
    examples: ['ෂොපින් බෑග්', 'ලන්ච් ෂීට්', 'ආහාර ඔතන තුනී පටල (Cling film)'],
    healthImpact: 'සාපේක්ෂව ආරක්ෂිතයි, එහෙත් ක්ෂුද්‍ර ප්ලාස්ටික් (Microplastics) පරිසරයට එක් කරයි.'
  },
  {
    code: 5,
    acronym: 'PP',
    nameSinhala: 'පොලිප්‍රොපිලීන්',
    nameEnglish: 'Polypropylene',
    density: '0.90 g/cm³',
    recyclability: 'ප්‍රතිචක්‍රීකරණය කළ හැකිය',
    examples: ['යෝගට් කෝප්ප', 'බෙහෙත් බෝතල්', 'මයික්‍රෝවේව් ආරක්ෂිත බඳුන්', 'බෝතල් මූඩි'],
    healthImpact: 'තාපයට ඉහළ ප්‍රතිරෝධයක් දක්වයි; උණුසුම් ආහාර සඳහාද ඉතා ආරක්ෂිතයි.'
  },
  {
    code: 6,
    acronym: 'PS',
    nameSinhala: 'පොලිස්ටයිරීන් (රිජිෆෝම්)',
    nameEnglish: 'Polystyrene',
    density: '1.05 g/cm³',
    recyclability: 'ප්‍රතිචක්‍රීකරණය අතිශය දුෂ්කරයි',
    examples: ['රිජිෆෝම් කෑම පෙට්ටි', 'ඉවතලන ප්ලාස්ටික් කෝප්ප', 'ඉලෙක්ට්‍රොනික ඇසුරුම්'],
    healthImpact: 'උණුසුම් හා තෙල් සහිත ආහාර දැමූ විට ස්ටයිරීන් (Styrene) විෂ කාන්දු විය හැක.'
  },
  {
    code: 7,
    acronym: 'OTHER',
    nameSinhala: 'අනෙකුත් බහු ස්ථර ප්ලාස්ටික්',
    nameEnglish: 'Other / Multi-layer Plastics',
    density: 'විචල්‍ය වේ',
    recyclability: 'සාමාන්‍යයෙන් ප්‍රතිචක්‍රීකරණය කළ නොහැක',
    examples: ['බිස්කට් සහ සුලු කෑම දවටන (Metallized foil)', 'පොලිකාබනේට් බෝතල්'],
    healthImpact: 'BPA (Bisphenol A) අඩංගු විය හැකි බැවින් පරිස්සමෙන් තෝරාගත යුතුය.'
  }
];

export const GLOSSARY: GlossaryItem[] = [
  { id: '1', sinhala: 'කාබනික සංයෝග', english: 'Organic compound', description: 'කාබන් මූලද්‍රව්‍යය ප්‍රධාන කොටගත් සංයෝග (කාබනේට්, බයිකාබනේට්, කාබන් ඔක්සයිඩ් හැර).', category: 'hydrocarbon' },
  { id: '2', sinhala: 'හයිඩ්‍රොකාබන', english: 'Hydrocarbon', description: 'කාබන් (C) සහ හයිඩ්‍රජන් (H) යන මූලද්‍රව්‍ය දෙකෙන් පමණක් සෑදුණු කාබනික සංයෝග.', category: 'hydrocarbon' },
  { id: '3', sinhala: 'ඇල්කේන', english: 'Alkanes', description: 'කාබන් පරමාණු අතර තනි සහසංයුජ බන්ධන පමණක් පවතින සංතෘප්ත හයිඩ්‍රොකාබන (පොදු සූත්‍රය: CₙH₂ₙ₊₂).', category: 'hydrocarbon' },
  { id: '4', sinhala: 'ඇල්කීන', english: 'Alkenes', description: 'කාබන් පරමාණු අතර අවම වශයෙන් එක් ද්විත්ව බන්ධනයක් (C=C) පවතින අසංතෘප්ත හයිඩ්‍රොකාබන (පොදු සූත්‍රය: CₙH₂ₙ).', category: 'hydrocarbon' },
  { id: '5', sinhala: 'බහුඅවයවිකය', english: 'Polymer', description: 'ඒකඅවයවික නමැති කුඩා අණු විශාල සංඛ්‍යාවක් එකිනෙක සම්බන්ධ වීමෙන් සෑදෙන යෝධ අණු.', category: 'polymer' },
  { id: '6', sinhala: 'ඒකඅවයවිකය', english: 'Monomer', description: 'බහුඅවයවිකයක් සෑදීමට දායක වන මූලික කුඩා අණුව (උදා: එතීන්).', category: 'polymer' },
  { id: '7', sinhala: 'පුනරාවර්තන ඒකකය', english: 'Repeating unit', description: 'බහුඅවයවික දාමයක නැවත නැවතත් පුනරාවර්තනය වන මූලික ව්‍යුහ ඒකකය.', category: 'polymer' },
  { id: '8', sinhala: 'වල්කනයිස් කිරීම', english: 'Vulcanization', description: 'ස්වාභාවික රබර් සල්ෆර් සමඟ රත් කර රේඛීය දාම අතර සල්ෆර් හරස් බන්ධන සාදා දෘඪතාව වැඩි කිරීමේ ක්‍රියාවලිය.', category: 'polymer' },
  { id: '9', sinhala: 'සමාවයවිකතාව', english: 'Isomerism', description: 'එකම අණුක සූත්‍රය තිබුණද වෙනස් ව්‍යුහාත්මක සැකැස්මක් සහිත සංයෝග පැවතීමේ සංසිද්ධිය.', category: 'hydrocarbon' },
  { id: '10', sinhala: 'ආකලන බහුඅවයවීකරණය', english: 'Addition Polymerization', description: 'ද්විත්ව බන්ධන බිඳහෙළමින් අතුරු ඵල රහිතව ඒකඅවයවික එකිනෙක ඈඳී බහුඅවයවිකය සෑදීම.', category: 'polymer' },
  { id: '11', sinhala: 'සම්පූර්ණ දහනය', english: 'Complete combustion', description: 'ප්‍රමාණවත් ඔක්සිජන් හමුවේ හයිඩ්‍රොකාබනයක් දහනය වී CO₂ සහ H₂O සාදමින් නිල් දැල්ලක් සමඟ දැවීම.', category: 'combustion' },
  { id: '12', sinhala: 'අසම්පූර්ණ දහනය', english: 'Incomplete combustion', description: 'අසතුටුදායක ඔක්සිජන් සැපයුමක් යටතේ දහනය වී විෂ සහිත CO සහ දැලි (C) සාදමින් කහ දැල්ලකින් දැවීම.', category: 'combustion' },
  { id: '13', sinhala: 'පොලිතීන්', english: 'Polythene', description: 'එතීන් වායුව බහුඅවයවීකරණයෙන් තනන සුලභ ප්ලාස්ටික් වර්ගය.', category: 'polymer' },
  { id: '14', sinhala: 'ටෙෆ්ලෝන්', english: 'Teflon (PTFE)', description: 'ටෙට්‍රාෆ්ලෝරෝඑතීන් බහුඅවයවීකරණයෙන් තනන, අධික තාපයට ඔරොත්තු දෙන නොඇලෙන බහුඅවයවිකය.', category: 'polymer' }
];
