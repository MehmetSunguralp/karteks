// TÜM ÜRÜNLER – İş kıyafetleri
const BASE_IMAGE_URL = "https://dmstekstil.com/assets/images";

export const products = [
  // ================= POLAR HIRKALAR =================
  {
    id: 1,
    code: "DMS-PL-001",
    name: "Polar Hırka Çift Renk",
    category: ["polar"],
    images: [
      `${BASE_IMAGE_URL}/polar/DMS-PL-001-LC.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-001-GR.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-001-KR.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-001-SY.webp`
    ],
    shortDescription: "Çift renkli polar hırka sıcak tutan kumaş yapısıyla soğuk havalarda koruma sağlar.",
    description: "Polar hırka çift renk, modern çift renk tasarımı ve sıcak tutan polar kumaş yapısıyla soğuk hava koşullarında ideal koruma sunar. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur. Çift renk detayıyla hem iş hem günlük kullanım için şık bir seçenektir."
  },
  {
    id: 2,
    code: "DMS-PL-002",
    name: "Polar Hırka Yarım Fermuar",
    category: ["polar"],
    images: [
      `${BASE_IMAGE_URL}/polar/DMS-PL-002-MV.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-002-GR.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-002-LC.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-002-LC2.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-002-TC.webp`
    ],
    shortDescription: "Yarım fermuarlı polar hırka pratik kullanım ve sıcak tutan yapı sunar.",
    description: "Polar hırka yarım fermuar, yarım fermuar detayıyla pratik kullanım imkanı sunan sıcak tutan polar kumaş yapısına sahiptir. Soğuk hava koşullarında ideal koruma sağlar. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur. Fermuar detayı sayesinde kolay giyilip çıkarılabilir."
  },
  {
    id: 3,
    code: "DMS-PL-003",
    name: "Polar Hırka Cepsiz",
    category: ["polar"],
    images: [
      `${BASE_IMAGE_URL}/polar/DMS-PL-003-KR.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-003-GR.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-003-LC.webp`
    ],
    shortDescription: "Cepsiz polar hırka minimal tasarım ve sıcak tutan yapı sunar.",
    description: "Polar hırka cepsiz, minimal tasarımı ve cepsiz yapısıyla hafif kullanım için ideal bir üründür. Sıcak tutan polar kumaş yapısıyla soğuk hava koşullarında koruma sağlar. Sade görünümü ve rahat kesimiyle hem iş hem günlük kullanım için uygundur. Dayanıklı malzemesiyle uzun ömürlü kullanım sunar."
  },
  {
    id: 4,
    code: "DMS-PL-004",
    name: "Polar Hırka Üç Cep",
    category: ["polar"],
    images: [
      `${BASE_IMAGE_URL}/polar/DMS-PL-004-MV.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-004-YL.webp`
    ],
    shortDescription: "Üç cepli polar hırka fonksiyonel cep detayları ve sıcak tutan yapı sunar.",
    description: "Polar hırka üç cep, fonksiyonel üç cep detayı ve sıcak tutan polar kumaş yapısıyla pratik kullanım sunar. Soğuk hava koşullarında ideal koruma sağlar. Geniş cepleri sayesinde eşyalarınızı güvenle taşıyabilirsiniz. Rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
  },
  {
    id: 5,
    code: "DMS-PL-005",
    name: "Polar Hırka Çift Renk",
    category: ["polar"],
    images: [
      `${BASE_IMAGE_URL}/polar/DMS-PL-005-YL.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-005-GR.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-005-LC.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-005-LCK.webp`,
      `${BASE_IMAGE_URL}/polar/DMS-PL-005-SY.webp`,
    ],
    shortDescription: "Çift renkli polar hırka modern tasarım ve sıcak tutan yapı sunar.",
    description: "Polar hırka çift renk, modern çift renk tasarımı ve sıcak tutan polar kumaş yapısıyla soğuk hava koşullarında ideal koruma sunar. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur. Çift renk detayıyla hem iş hem günlük kullanım için şık bir seçenektir."
  },

  // ================= MONT VE KABANLAR =================
  {
    id: 6,
    code: "DMS-MN-001",
    name: "Sitona Mont",
    category: ["mont"],
    images: [
      `${BASE_IMAGE_URL}/mont/DMS-MN-001-FSLC.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-001-LC.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-001-TC.webp`
    ],
    shortDescription: "Sitona mont dayanıklı kumaş ve soğuk hava koruması sunar.",
    description: "Sitona mont, kaliteli sitona kumaşı ve şık tasarımıyla hem iş hem günlük kullanım için uygun bir modeldir. Soğuk ve yağışlı hava koşullarında maksimum koruma sağlar. Su geçirmez yapısı, dayanıklı kumaşı ve fonksiyonel cep detaylarıyla zorlu iş koşullarında güvenilir koruma sunar."
  },
  {
    id: 7,
    code: "DMS-MN-002",
    name: "Oxford Kaban",
    category: ["mont"],
    images: [
      `${BASE_IMAGE_URL}/mont/DMS-MN-002-MV.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-002-FS.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-002-LC.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-002-LCFS.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-002-LCTC.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-002-TC.webp`
    ],
    shortDescription: "Oxford kaban dayanıklı kumaş ve su geçirmez yapı sunar.",
    description: "Oxford kaban, dayanıklı oxford kumaşı ve su geçirmez yapısıyla soğuk ve yağışlı havalarda koruma sağlayan bir modeldir. Fonksiyonel cep detayları ve ergonomik tasarımıyla zorlu iş koşullarında güvenilir koruma sunar. Hem iş hem günlük kullanım için uygundur."
  },
  {
    id: 8,
    code: "DMS-MN-003",
    name: "Rainbow Ceket",
    category: ["mont"],
    images: [
      `${BASE_IMAGE_URL}/mont/DMS-MN-003-KZ.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-003-MV.webp`,
      `${BASE_IMAGE_URL}/mont/DMS-MN-003-SR.webp`
    ],
    shortDescription: "Rainbow ceket renkli tasarım ve soğuk hava koruması sunar.",
    description: "Rainbow ceket, renkli tasarımı ve dayanıklı kumaş yapısıyla soğuk hava koşullarında koruma sağlar. Modern görünümü ve fonksiyonel yapısıyla dikkat çeken bir iş kıyafetidir. Rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
  },

  // ================= YELEKLER =================
  {
    id: 9,
    code: "DMS-YL-001",
    name: "Şişme Yelek",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-TC.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-BD.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-KH.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-KZ.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-MV.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-SY.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-001-TK.webp`
    ],
    shortDescription: "Şişme yelek çok cepli ve dayanıklı yapı sunar.",
    description: "Şişme yelek, saha ve fabrika ortamlarında pratik kullanım imkanı sunan çok fonksiyonlu bir iş kıyafetidir. Şişme özelliği sayesinde ek koruma sağlar. Geniş cepleri, dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 10,
    code: "DMS-YL-002",
    name: "Ripstop Yelek Çok Cepli",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-002-GR.webp`
    ],
    shortDescription: "Ripstop yelek çok cepli dayanıklı kumaş yapısı sunar.",
    description: "Ripstop yelek çok cepli, dayanıklı ripstop kumaş yapısı ve çok sayıda cep detayıyla pratik kullanım sunar. Saha ve fabrika ortamlarında ideal bir seçenektir. Geniş cepleri sayesinde eşyalarınızı güvenle taşıyabilirsiniz. Ergonomik tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 11,
    code: "DMS-YL-003",
    name: "Yelek Reflektörlü",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-003-SY.webp`
    ],
    shortDescription: "Reflektörlü yelek görünürlük artıran bantlar sunar.",
    description: "Yelek reflektörlü, görünürlüğü artıran reflektör bantlarıyla güvenlik sağlayan pratik bir iş kıyafetidir. Özellikle gece çalışmalarında ve düşük görünürlük koşullarında yüksek görünürlük sağlar. Dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 12,
    code: "DMS-YL-004",
    name: "Winto Yelek",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-004-LC.webp`
    ],
    shortDescription: "Winto yelek dayanıklı kumaş ve pratik kullanım sunar.",
    description: "Winto yelek, saha ve fabrika ortamlarında pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Özel kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir. Geniş cepleri ve fonksiyonel detaylarıyla pratik bir çözümdür."
  },
  {
    id: 13,
    code: "DMS-YL-005",
    name: "Kuma Yelek",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-005-GR.webp`,
      `${BASE_IMAGE_URL}/yelek/DMS-YL-005-LC.webp`
    ],
    shortDescription: "Kuma yelek dayanıklı kumaş ve pratik kullanım sunar.",
    description: "Kuma yelek, saha ve fabrika ortamlarında pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Özel kuma yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir. Geniş cepleri ve fonksiyonel detaylarıyla pratik bir çözümdür."
  },

  // ================= SOFTSHELL ÜRÜNLER =================
  {
    id: 14,
    code: "DMS-SS-001",
    name: "Softshell Ceket Çift Renk",
    category: ["softshell"],
    images: [
      `${BASE_IMAGE_URL}/softshell/DMS-SS-001-KZ.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-001-AT.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-001-SY.webp`
    ],
    shortDescription: "Çift renkli softshell ceket rüzgar geçirmeyen yapı sunar.",
    description: "Softshell ceket çift renk, modern çift renk tasarımı ve fonksiyonel yapısıyla dikkat çeken bir iş kıyafetidir. Rüzgar geçirmeyen yapısı ve nefes alabilen kumaş özelliğiyle dış mekan çalışmalarında maksimum konfor sağlar. Esnek yapısı ve dayanıklı malzemesiyle zorlu iş koşullarında güvenilir koruma sunar."
  },
  {
    id: 15,
    code: "DMS-SS-002",
    name: "Softshell Ceket İki Cep",
    category: ["softshell"],
    images: [
      `${BASE_IMAGE_URL}/softshell/DMS-SS-002-GR.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-002-GR 2.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-002-KZ.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-002-SY.webp`
    ],
    shortDescription: "İki cepli softshell ceket fonksiyonel cep detayları sunar.",
    description: "Softshell ceket iki cep, fonksiyonel iki cep detayı ve rüzgar geçirmeyen yapısıyla dış mekan çalışmalarında ideal koruma sunar. Nefes alabilen kumaş özelliği ve esnek yapısıyla maksimum konfor sağlar. Dayanıklı malzemesiyle zorlu iş koşullarında güvenilir koruma sunar."
  },
  {
    id: 16,
    code: "DMS-SS-003",
    name: "Softshell Yelek",
    category: ["softshell", "yelek"],
    images: [
      `${BASE_IMAGE_URL}/softshell/DMS-SS-003-HY.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-003-KZ.webp`,
      `${BASE_IMAGE_URL}/softshell/DMS-SS-003-SY.webp`
    ],
    shortDescription: "Softshell yelek rüzgar geçirmeyen yapı ve nefes alabilen kumaş sunar.",
    description: "Softshell yelek, rüzgar geçirmeyen yapısı ve nefes alabilen kumaşıyla dış mekan çalışmalarında ideal koruma sunar. Hafif yapısı ve esnek malzemesiyle maksimum konfor sağlar. Dayanıklı yapısıyla zorlu iş koşullarında güvenilir koruma sunar."
  },

  // ================= PANTOLONLAR =================
  {
    id: 17,
    code: "DMS-PN-001",
    name: "Kargo Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-001-KR.webp`
    ],
    shortDescription: "Kargo pantolon çok cepli dayanıklı kumaş yapısı sunar.",
    description: "Kargo pantolon, geniş cepleri ve dayanıklı yapısıyla pratik kullanım sunan, iş ve günlük kullanım için ideal bir modeldir. Çok sayıda cep detayı sayesinde eşyalarınızı güvenle taşıyabilirsiniz. Rahat kesimi ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 18,
    code: "DMS-PN-002",
    name: "Pantolon Şeritli",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-002-SY 2.webp`,
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-002-SY.webp`
    ],
    shortDescription: "Şeritli pantolon görünürlük artıran şerit detayları sunar.",
    description: "Pantolon şeritli, yan şerit detaylarıyla görünürlüğü artıran ve iş güvenliği sağlayan dayanıklı bir modeldir. Özellikle gece çalışmalarında güvenlik sağlar. Dayanıklı kumaş yapısı ve ergonomik kesimiyle uzun süreli kullanım için idealdir."
  },
  {
    id: 19,
    code: "DMS-PN-003",
    name: "Pantolon Reflektörlü",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-003-GR.webp`,
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-003-KH.webp`,
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-003-KT.webp`,
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-003-SY.webp`
    ],
    shortDescription: "Reflektörlü pantolon görünürlük artıran bantlar sunar.",
    description: "Pantolon reflektörlü, görünürlüğü artıran reflektör bantlarıyla özellikle gece çalışmalarında güvenlik sağlar. Dayanıklı kumaş yapısı ve ergonomik kesimiyle uzun süreli kullanım için idealdir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 20,
    code: "DMS-PN-004",
    name: "Poliüretan Pantolon Reflektörlü",
    category: ["pantolon", "yüksek görünürlük"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-004-FS.webp`
    ],
    shortDescription: "Poliüretan pantolon reflektörlü yüksek görünürlük sunar.",
    description: "Poliüretan pantolon reflektörlü, özel poliüretan kumaş yapısı ve reflektör bantlarıyla yüksek görünürlük sağlar. Özellikle gece çalışmalarında ve düşük görünürlük koşullarında güvenlik sağlar. Dayanıklı yapısı ve ergonomik kesimiyle uzun süreli kullanım için idealdir."
  },
  {
    id: 21,
    code: "DMS-PN-005",
    name: "Pötikare Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-005-GR.webp`
    ],
    shortDescription: "Pötikare pantolon desenli kumaş ve dayanıklı yapı sunar.",
    description: "Pötikare pantolon, desenli kumaş yapısı ve dayanıklı malzemesiyle hem iş hem günlük kullanım için uygun bir modeldir. Rahat kesimi ve ergonomik tasarımıyla uzun süreli kullanım için idealdir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 22,
    code: "DMS-PN-006",
    name: "Osaka Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-006-BY.webp`,
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-006-GR.webp`,
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-006-LC.webp`
    ],
    shortDescription: "Osaka pantolon dayanıklı kumaş ve rahat kesim sunar.",
    description: "Osaka pantolon, dayanıklı kumaş yapısı ve rahat kesimiyle yoğun iş temposuna uyum sağlar. Ergonomik tasarımı ve geniş cepleriyle pratik kullanım sunar. Sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 23,
    code: "DMS-PN-007",
    name: "Bağcıklı Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-007-SY.webp`
    ],
    shortDescription: "Bağcıklı pantolon ayarlanabilir bel ve dayanıklı yapı sunar.",
    description: "Bağcıklı pantolon, ayarlanabilir bel detayı ve dayanıklı kumaş yapısıyla pratik kullanım sunar. Rahat kesimi ve ergonomik tasarımıyla uzun süreli kullanım için idealdir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 24,
    code: "DMS-SS-004",
    name: "Softshell Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-SS-004-SY.webp`
    ],
    shortDescription: "Softshell pantolon rüzgar geçirmeyen yapı sunar.",
    description: "Softshell pantolon, rüzgar geçirmeyen yapısı ve nefes alabilen kumaş özelliğiyle dış mekan çalışmalarında ideal koruma sunar. Esnek yapısı ve dayanıklı malzemesiyle zorlu iş koşullarında güvenilir koruma sunar. Rahat kesimiyle uzun süreli kullanım için uygundur."
  },

  // ================= İKAZ YELEKLERİ =================
  {
    id: 25,
    code: "DMS-IY-001",
    name: "İkaz Yeleği Çok Reflektörlü",
    category: ["Yüksek Görünürlük", "aksesuar", "yelek"],
    images: [
      `${BASE_IMAGE_URL}/ikaz_yelekleri/DMS-IY-001-TC.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/DMS-IY-001-FS.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/DMS-IY-001-MV.webp`,
    ],
    shortDescription: "Çok reflektörlü ikaz yeleği yüksek görünürlük sağlar.",
    description: "İkaz yeleği çok reflektörlü, çok sayıda reflektör bant detayıyla özellikle gece çalışmalarında ve düşük görünürlük koşullarında yüksek görünürlük sağlar. Artırılmış reflektör detaylarıyla maksimum güvenlik sunar. Parlak renk seçenekleriyle iş güvenliği için ideal bir seçenektir."
  },
  {
    id: 26,
    code: "DMS-IY-002",
    name: "İkaz Yeleği",
    category: ["Yüksek Görünürlük", "aksesuar", "yelek"],
    images: [
      `${BASE_IMAGE_URL}/ikaz_yelekleri/DMS-IY-002-FS.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/DMS-IY-002-KZ.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/DMS-IY-002-TC.webp`
    ],
    shortDescription: "İkaz yeleği reflektör bantlarıyla yüksek görünürlük sunar.",
    description: "İkaz yeleği, yüksek görünürlük sağlayan reflektör bantlarıyla iş güvenliği için tasarlanmıştır. Özellikle gece çalışmalarında ve düşük görünürlük koşullarında yüksek görünürlük sağlar. Reflektör bantları ve parlak renk seçenekleriyle güvenlik sağlar."
  },

  // ================= SWEATSHIRT =================
  {
    id: 27,
    code: "DMS-BS-001",
    name: "Bisiklet Yaka Sweatshirt",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-GR.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-TC.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-BD.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-BY.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-LC.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-MV.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-PB.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/DMS-BS-001-SY.webp`,
    ],
    shortDescription: "Bisiklet yaka sweatshirt rahat kesim ve dayanıklı kumaş sunar.",
    description: "Bisiklet yaka sweatshirt, modern tasarımı ve rahat kesimiyle hem iş hem günlük kullanım için ideal bir seçenektir. Nefes alabilen kumaş yapısı ve dayanıklı malzemesiyle uzun ömürlü kullanım sunar. Rahat kesimi sayesinde uzun süreli kullanım için uygundur."
  },
  {
    id: 28,
    code: "DMS-PS-001",
    name: "Polo Yaka Sweatshirt",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-TK.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-BD.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-BY.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-GR.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-HY.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-LC.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-PB.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-SY.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-001-TC.webp`,
    ],
    shortDescription: "Polo yaka sweatshirt klasik görünüm ve rahat yapı sunar.",
    description: "Polo yaka sweatshirt, klasik polo yaka tasarımı ve rahat kesimiyle hem iş hem günlük kullanım için ideal bir seçenektir. Dayanıklı kumaş yapısı ve şık görünümüyle uzun ömürlü kullanım sunar. Kurumsal görünümü sayesinde profesyonel ortamlarda da kullanılabilir."
  },
  {
    id: 29,
    code: "DMS-PS-002",
    name: "Sweatshirt Reflektörlü",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-002-LC.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-002-FS.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/DMS-PS-002-TC.webp`
    ],
    shortDescription: "Reflektörlü sweatshirt görünürlük artıran bantlar sunar.",
    description: "Sweatshirt reflektörlü, görünürlüğü artıran reflektör bantlarıyla özellikle gece çalışmalarında güvenlik sağlar. Klasik polo yaka tasarımı ve rahat kesimiyle hem iş hem günlük kullanım için uygundur. Dayanıklı kumaş yapısıyla uzun ömürlü kullanım sunar."
  },
  {
    id: 30,
    code: "DMS-KS-001",
    name: "Sweatshirt Kapüşonlu ve Reflektörlü",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/kapsonlu_sweatshirt/DMS-KS-001-FS.webp`,
      `${BASE_IMAGE_URL}/kapsonlu_sweatshirt/DMS-KS-001-LC.webp`
    ],
    shortDescription: "Kapüşonlu reflektörlü sweatshirt baş koruması ve görünürlük sunar.",
    description: "Sweatshirt kapüşonlu ve reflektörlü, kapüşon detayı ve reflektör bantlarıyla hem baş koruması hem yüksek görünürlük sağlar. Sıcak tutan kumaş yapısıyla soğuk hava koşullarında ideal koruma sunar. Rahat kesimi ve dayanıklı malzemesiyle uzun ömürlü kullanım sağlar."
  },
  {
    id: 31,
    code: "DMS-KS-002",
    name: "Sweatshirt Yarım Fermuar ve Reflektörlü",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/kapsonlu_sweatshirt/DMS-KS-002-TC.webp`
    ],
    shortDescription: "Yarım fermuarlı reflektörlü sweatshirt pratik kullanım sunar.",
    description: "Sweatshirt yarım fermuar ve reflektörlü, yarım fermuar detayı ve reflektör bantlarıyla pratik kullanım ve yüksek görünürlük sağlar. Sıcak tutan kumaş yapısıyla soğuk hava koşullarında ideal koruma sunar. Fermuar detayı sayesinde kolay giyilip çıkarılabilir."
  },

  // ================= T-SHIRT =================
  {
    id: 32,
    code: "DMS-BT-001",
    name: "Bisiklet Yaka T-Shirt",
    category: ["t-shirt"],
    images: [
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-SY.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-BY.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-GR.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-KZ.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-LC.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-MV.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-PB.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-SR.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-001-TC.webp`
    ],
    shortDescription: "Bisiklet yaka tişört nefes alabilen kumaş ve rahat kalıp sunar.",
    description: "Bisiklet yaka tişört, sıcak hava koşullarında rahatlık sağlayan nefes alabilen kumaş yapısına sahiptir. Ergonomik kesimi ve dayanıklı malzemesiyle iş ve günlük kullanım için uygundur. Rahat kalıbı sayesinde uzun süreli kullanım için idealdir."
  },
  {
    id: 33,
    code: "DMS-BT-002",
    name: "T-Shirt Reflektörlü",
    category: ["t-shirt"],
    images: [
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-002-FS.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-002-LC.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/DMS-BT-002-TC.webp`
    ],
    shortDescription: "Reflektörlü tişört görünürlük artıran bantlar sunar.",
    description: "T-Shirt reflektörlü, görünürlüğü artıran reflektör bantlarıyla özellikle gece çalışmalarında güvenlik sağlar. Nefes alabilen kumaş yapısı ve rahat kalıbıyla sıcak havalarda ideal kullanım sunar. Ergonomik kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
  },
  {
    id: 34,
    code: "DMS-PT-001",
    name: "Polo Yaka T-Shirt",
    category: ["t-shirt"],
    images: [
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/DMS-PT-001-GR.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/DMS-PT-001-BD.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/DMS-PT-001-BY.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/DMS-PT-001-PB.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/DMS-PT-001-SY.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/DMS-PT-001-TK.webp`
    ],
    shortDescription: "Polo yaka tişört kurumsal görünüm ve dayanıklı yapı sunar.",
    description: "Polo yaka tişört, klasik polo yaka tasarımı ve nefes alabilen kumaş yapısıyla üretilmiştir. Kurumsal görünümü ve dayanıklı malzemesiyle hem iş hem günlük kullanım için uygundur. Şık tasarımı sayesinde profesyonel ortamlarda da kullanılabilir."
  },

  // ================= ÖNLÜKLER =================
  {
    id: 35,
    code: "DMS-ON-001",
    name: "Ekose Önlük",
    category: ["önlük"],
    images: [
      `${BASE_IMAGE_URL}/onluk/DMS-ON-001-MV.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-001-BY.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-001-KZ.webp`,
    ],
    shortDescription: "Ekose önlük desenli kumaş ve dayanıklı yapı sunar.",
    description: "Ekose önlük, desenli kumaş yapısı ve dayanıklı malzemesiyle mutfak, üretim ve servis alanlarında kullanım için tasarlanmıştır. Kolay temizlenebilir kumaş yapısı, ergonomik kesimi ve pratik kullanımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 36,
    code: "DMS-ON-002",
    name: "İş Gönlüğü",
    category: ["önlük"],
    images: [
      `${BASE_IMAGE_URL}/onluk/DMS-ON-002-BD.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-002-BY.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-002-LC.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-002-SY.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-002-TK.webp`
    ],
    shortDescription: "İş gönlüğü rahat kesim ve dayanıklı yapı sunar.",
    description: "İş gönlüğü, çeşitli sektörlerde kullanıma uygun, rahat kesimi ve dayanıklı yapısıyla pratik bir çözümdür. Mutfak, üretim ve servis alanlarında kullanım için tasarlanmıştır. Kolay temizlenebilir kumaş yapısı ve ergonomik kesimiyle uzun süreli kullanım için idealdir."
  },
  {
    id: 37,
    code: "DMS-ON-003",
    name: "Apron Önlük",
    category: ["önlük"],
    images: [
      `${BASE_IMAGE_URL}/onluk/DMS-ON-003-BY.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-003-KZ.webp`,
      `${BASE_IMAGE_URL}/onluk/DMS-ON-003-SY.webp`
    ],
    shortDescription: "Apron önlük pratik kullanım ve dayanıklı yapı sunar.",
    description: "Apron önlük, mutfak ve servis alanlarında kullanım için tasarlanmış pratik bir önlük modelidir. Kolay temizlenebilir kumaş yapısı, ergonomik kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için idealdir. Pratik kullanımı sayesinde günlük işlerde tercih edilir."
  },
  {
    id: 38,
    code: "DMS-AG-001",
    name: "Kolluklu Önlük",
    category: ["mutfak", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-001-KZ.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-001-MV.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-001-SY.webp`
    ],
    shortDescription: "Kolluklu önlük kol koruması ve hijyenik yapı sunar.",
    description: "Kolluklu önlük, kolluk detayıyla kol koruması sağlayan profesyonel mutfak personeli için tasarlanmış bir önlük modelidir. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
  },
  {
    id: 39,
    code: "DMS-AG-002",
    name: "Erkek Aşçı Ceketi",
    category: ["mutfak", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-002-BY.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-002-SY.webp`
    ],
    shortDescription: "Erkek aşçı ceketi ergonomik kesim ve dayanıklı yapı sunar.",
    description: "Erkek aşçı ceketi, profesyonel mutfaklarda rahat hareket imkânı sunan ergonomik kesimi ve dayanıklı kumaşıyla öne çıkar. Hijyenik kumaş yapısı ve kolay temizlenebilir özelliğiyle mutfak personeline rahat çalışma imkanı sağlar."
  },
  {
    id: 40,
    code: "DMS-AG-003",
    name: "Kadın Aşçı Ceketi",
    category: ["mutfak", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-003-SY.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-003-BY.webp`,
    ],
    shortDescription: "Kadın aşçı ceketi özel kesim ve ergonomik yapı sunar.",
    description: "Kadın aşçı ceketi, vücut ergonomisine uygun kesimi ve dayanıklı yapısıyla yoğun mutfak temposuna uyum sağlar. Hijyenik kumaş yapısı ve kolay temizlenebilir özelliğiyle mutfak personeline rahat çalışma imkanı sağlar."
  },
  {
    id: 41,
    code: "DMS-AG-004",
    name: "Düz Önlük",
    category: ["mutfak", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-004-MV.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-004-BY.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-004-KZ.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-004-SY.webp`
    ],
    shortDescription: "Düz önlük sade tasarım ve dayanıklı yapı sunar.",
    description: "Düz önlük, sade ve dayanıklı düz iş önlüğü olarak mutfak, üretim ve servis alanlarında uzun süreli kullanım için tasarlanmıştır. Hafif ve dayanıklı bir modeldir. Kolay temizlenebilir kumaş yapısı ve ergonomik kesimiyle pratik kullanım sunar."
  },
  {
    id: 42,
    code: "DMS-AG-005",
    name: "Aşçı Takımı Külahlı",
    category: ["mutfak", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-005-KZ.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-005-BY.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-005-MV.webp`
    ],
    shortDescription: "Aşçı takımı külahlı baş koruması ve hijyenik yapı sunar.",
    description: "Aşçı takımı külahlı, baş koruması sağlayan külah detayı ve profesyonel mutfak kullanımı için tasarlanmış olup takım halinde pratik ve şık bir çözüm sunar. Hijyenik kumaş yapısı ve kolay temizlenebilir özelliğiyle mutfak personeline rahat çalışma imkanı sağlar."
  },
  {
    id: 43,
    code: "DMS-AG-006",
    name: "Apron Önlük Askılı",
    category: ["mutfak", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-006-BY.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-006-KZ.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/DMS-AG-006-SY.webp`
    ],
    shortDescription: "Apron önlük askılı pratik kullanım ve dayanıklı yapı sunar.",
    description: "Apron önlük askılı, askılı detayıyla pratik kullanım sunan profesyonel mutfak personeli için tasarlanmış bir önlük modelidir. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
  },

  // ================= TULUMLAR =================
  {
    id: 44,
    code: "DMS-TL-001",
    name: "Paddock Tulum",
    category: ["tulum"],
    images: [
      `${BASE_IMAGE_URL}/tulum/DMS-TL-001-GR.webp`
    ],
    shortDescription: "Paddock tulum tek parça yapı ve dayanıklı kumaş sunar.",
    description: "Paddock tulum, tek parça yapısıyla pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Ergonomik kesimi, geniş cepleri ve sağlam dikiş yapısıyla yoğun iş temposuna uyum sağlar. Özel kumaş yapısı sayesinde zorlu iş koşullarında güvenilir koruma sunar."
  },
  {
    id: 45,
    code: "DMS-TL-002",
    name: "Thor Tulum",
    category: ["tulum"],
    images: [
      `${BASE_IMAGE_URL}/tulum/DMS-TL-002-FS.webp`
    ],
    shortDescription: "Thor tulum dayanıklı kumaş ve ergonomik kesim sunar.",
    description: "Thor tulum, tek parça yapısıyla pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Özel kumaş yapısı ve ergonomik kesimiyle yoğun iş temposuna uyum sağlar. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 46,
    code: "DMS-TL-003",
    name: "Rescue Tulum",
    category: ["tulum"],
    images: [
      `${BASE_IMAGE_URL}/tulum/DMS-TL-003-LC.webp`,
      `${BASE_IMAGE_URL}/tulum/DMS-TL-003-SY.webp`,
      `${BASE_IMAGE_URL}/tulum/DMS-TL-003-GR.webp`,
    ],
    shortDescription: "Rescue tulum kurtarma operasyonları için dayanıklı yapı sunar.",
    description: "Rescue tulum, kurtarma operasyonları için tasarlanmış tek parça yapısıyla pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Ergonomik kesimi, geniş cepleri ve sağlam dikiş yapısıyla yoğun iş temposuna uyum sağlar. Özel kumaş yapısı sayesinde zorlu koşullarda güvenilir koruma sunar."
  },

  // ================= GÜVENLİK KIYAFETLERİ =================
  {
    id: 47,
    code: "DMS-GV-001",
    name: "Güvenlik Mont",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-001.webp`
    ],
    shortDescription: "Güvenlik mont soğuk hava koruması ve dayanıklı yapı sunar.",
    description: "Güvenlik montu, soğuk hava koşullarında koruma sağlayan, dayanıklı ve fonksiyonel bir güvenlik kıyafetidir. Güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetidir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 48,
    code: "DMS-GV-002",
    name: "Güvenlik Pantolon",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-002.webp`
    ],
    shortDescription: "Güvenlik pantolonu dayanıklı kumaş ve fonksiyonel yapı sunar.",
    description: "Güvenlik pantolonu, güvenlik personeli için tasarlanmış, dayanıklı kumaşı ve fonksiyonel yapısıyla profesyonel kullanım sunar. Ergonomik kesimi ve geniş cepleriyle uzun süreli kullanım için idealdir. Sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 49,
    code: "DMS-GV-003",
    name: "Güvenlik Yağmurluk",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-003.webp`
    ],
    shortDescription: "Güvenlik yağmurluğu su geçirmez yapı ve koruma sunar.",
    description: "Güvenlik yağmurluğu, yağışlı hava koşullarında su geçirmez yapısıyla koruma sağlayan güvenlik personeli için özel tasarlanmış bir kıyafettir. Hafif malzemesi ve nefes alabilen özelliğiyle pratik kullanım sunar. Dayanıklı yapısıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 50,
    code: "DMS-GV-004",
    name: "Güvenlik Uzun Kol T-Shirt",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-004.webp`
    ],
    shortDescription: "Güvenlik uzun kol tişört kol koruması ve dayanıklı yapı sunar.",
    description: "Güvenlik uzun kol T-Shirt, güvenlik personeli için özel tasarlanmış uzun kol detayıyla kol koruması sağlayan profesyonel bir iş kıyafetidir. Dayanıklı kumaş yapısı ve ergonomik kesimiyle uzun süreli kullanım için uygundur. Nefes alabilen kumaş yapısı sayesinde rahat kullanım sunar."
  },
  {
    id: 51,
    code: "DMS-GV-005",
    name: "Güvenlik Kısa Kol T-Shirt",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-005.webp`
    ],
    shortDescription: "Güvenlik kısa kol tişört rahat kullanım ve dayanıklı yapı sunar.",
    description: "Güvenlik kısa kol T-Shirt, güvenlik personeli için özel tasarlanmış kısa kol detayıyla sıcak havalarda rahat kullanım sunan profesyonel bir iş kıyafetidir. Dayanıklı kumaş yapısı ve ergonomik kesimiyle uzun süreli kullanım için uygundur. Nefes alabilen kumaş yapısı sayesinde ideal kullanım sunar."
  },
  {
    id: 52,
    code: "DMS-GV-006",
    name: "Güvenlik Sweatshirt",
    category: ["güvenlik", "sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-006.webp`
    ],
    shortDescription: "Güvenlik sweatshirt sıcak tutan yapı ve dayanıklı kumaş sunar.",
    description: "Güvenlik sweatshirt, güvenlik personeli için özel tasarlanmış sıcak tutan kumaş yapısıyla soğuk hava koşullarında koruma sağlayan profesyonel bir iş kıyafetidir. Dayanıklı kumaş yapısı ve ergonomik kesimiyle uzun süreli kullanım için uygundur. Rahat kesimi sayesinde uzun süreli kullanım için idealdir."
  },

  // ================= SAĞLIKÇI KIYAFETLERİ =================
  {
    id: 53,
    code: "DMS-SG-001",
    name: "Sağlıkçı Desenli Önlük",
    category: ["sağlıkçı", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-001-MV.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-001-LC.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-001-PB.webp`
    ],
    shortDescription: "Desenli sağlıkçı önlük hijyenik yapı ve dayanıklı kumaş sunar.",
    description: "Sağlıkçı desenli önlük, desenli kumaş yapısı ve hijyenik özelliğiyle sağlık sektöründe kullanım için özel olarak tasarlanmıştır. Kolay temizlenebilir özelliği ve ergonomik kesimiyle sağlık personeline rahat çalışma imkanı sağlar. Dayanıklı yapısıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 54,
    code: "DMS-SG-002",
    name: "Düz Sağlıkçı Önlük",
    category: ["sağlıkçı", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-002-TK.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-002-BD.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-002-BY.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-002-MV.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-002-SY.webp`,
    ],
    shortDescription: "Düz sağlıkçı önlük sade tasarım ve hijyenik yapı sunar.",
    description: "Düz sağlıkçı önlük, sade tasarımı ve hijyenik kumaş yapısıyla sağlık sektöründe kullanım için özel olarak tasarlanmıştır. Kolay temizlenebilir özelliği ve ergonomik kesimiyle sağlık personeline rahat çalışma imkanı sağlar. Dayanıklı yapısıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 55,
    code: "DMS-SG-003",
    name: "Uzun Sağlıkçı Önlük Yırtmaçlı",
    category: ["sağlıkçı", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-003-GR.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-003-BD.webp`,
      `${BASE_IMAGE_URL}/saglikci/DMS-SG-003-MV.webp`
    ],
    shortDescription: "Uzun sağlıkçı önlük yırtmaçlı pratik kullanım ve hijyenik yapı sunar.",
    description: "Uzun sağlıkçı önlük yırtmaçlı, yırtmaç detayıyla pratik kullanım sunan ve hijyenik kumaş yapısıyla sağlık sektöründe kullanım için özel olarak tasarlanmıştır. Uzun kesimi sayesinde daha fazla koruma sağlar. Kolay temizlenebilir özelliği ve ergonomik kesimiyle sağlık personeline rahat çalışma imkanı sağlar."
  },

  // ================= YAĞMURLUK =================
  {
    id: 56,
    code: "DMS-YG-001",
    name: "Uzun Yağmurluk",
    category: ["yağmurluk", "yüksek görünürlük"],
    images: [
      `${BASE_IMAGE_URL}/yagmurluk/DMS-YG-001-FS.webp`,
      `${BASE_IMAGE_URL}/yagmurluk/DMS-YG-001-LC.webp`
    ],
    shortDescription: "Uzun yağmurluk su geçirmez yapı ve yüksek görünürlük sunar.",
    description: "Uzun yağmurluk, uzun kesimi ve su geçirmez yapısıyla yağışlı hava koşullarında maksimum koruma sağlar. Yüksek görünürlük özelliği sayesinde özellikle gece çalışmalarında güvenlik sağlar. Hafif malzemesi ve nefes alabilen özelliğiyle pratik kullanım sunar."
  },
  {
    id: 57,
    code: "DMS-YG-002",
    name: "Yağmurluk Ceket",
    category: ["yağmurluk", "ceket"],
    images: [
      `${BASE_IMAGE_URL}/yagmurluk/DMS-YG-002-LC.webp`
    ],
    shortDescription: "Yağmurluk ceket su geçirmez yapı ve pratik kullanım sunar.",
    description: "Yağmurluk ceket, su geçirmez yapısıyla yağışlı hava koşullarında koruma sağlamak üzere tasarlanmıştır. Ceket kesimi sayesinde pratik kullanım sunar. Hafif malzemesi, nefes alabilen özelliği ve dayanıklı yapısıyla ideal bir dış giyim ürünüdür."
  },

  // ================= AKSESUARLAR =================
  {
    id: 58,
    code: "DMS-BR-001",
    name: "Baret",
    category: ["baret", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/baret/DMS-BR-001-MV.webp`,
      `${BASE_IMAGE_URL}/baret/DMS-BR-001-SR.webp`,
      `${BASE_IMAGE_URL}/baret/DMS-BR-001-TC.webp`
    ],
    shortDescription: "Baret baş koruması sağlayan darbelere dayanıklı ekipmandır.",
    description: "Baret, şantiye ve endüstriyel alanlarda baş koruması için kullanılan temel güvenlik ekipmanıdır. Darbelere dayanıklı yapısı ve hafif tasarımıyla günlük kullanım için uygundur. İş güvenliği standartlarına uygun olarak üretilmiştir."
  },
  {
    id: 59,
    code: "DMS-BR-002",
    name: "Kep",
    category: ["baret", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/bere/DMS-BR-002-TC.webp`
    ],
    shortDescription: "Kep baş koruması sağlayan pratik aksesuardır.",
    description: "Kep, soğuk hava koşullarında başı sıcak tutmak için tasarlanmış pratik bir aksesuardır. Hafif ve konforlu yapısıyla dış mekan çalışmalarında ideal koruma sağlar. Pratik kullanımı sayesinde günlük işlerde tercih edilir."
  },
  {
    id: 60,
    code: "DMS-BR-003",
    name: "Polar Bere",
    category: ["bere", "aksesuar", "polar"],
    images: [
      `${BASE_IMAGE_URL}/bere/DMS-BR-003-SY.webp`
    ],
    shortDescription: "Polar bere sıcak tutan polar kumaş yapısı sunar.",
    description: "Polar bere, sıcak tutan polar kumaş yapısıyla soğuk hava koşullarında başı sıcak tutmak için tasarlanmış pratik bir aksesuardır. Hafif ve konforlu yapısıyla dış mekan çalışmalarında ideal koruma sağlar. Polar kumaş sayesinde maksimum sıcaklık sağlar."
  },
  {
    id: 61,
    code: "DMS-BR-004",
    name: "Kumaş Bere",
    category: ["bere", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/bere/DMS-BR-004-GR.webp`,
      `${BASE_IMAGE_URL}/bere/DMS-BR-004-MV.webp`,
      `${BASE_IMAGE_URL}/bere/DMS-BR-004-SY.webp`
    ],
    shortDescription: "Kumaş bere sıcak tutan kumaş yapısı ve pratik kullanım sunar.",
    description: "Kumaş bere, sıcak tutan kumaş yapısıyla soğuk hava koşullarında başı sıcak tutmak için tasarlanmış pratik bir aksesuardır. Hafif ve konforlu yapısıyla dış mekan çalışmalarında ideal koruma sağlar. Dayanıklı kumaş yapısıyla uzun ömürlü kullanım sunar."
  },
  {
    id: 62,
    code: "DMS-EB-001",
    name: "Boyunluk/Eldiven Takımı",
    category: ["boyunluk", "eldiven", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/boyunluk_eldiven/DMS-EB-001-LC.webp`,
      `${BASE_IMAGE_URL}/boyunluk_eldiven/DMS-EB-001-KZ 1.webp`,
      `${BASE_IMAGE_URL}/boyunluk_eldiven/DMS-EB-001-KZ.webp`,
      `${BASE_IMAGE_URL}/boyunluk_eldiven/DMS-EB-001-LC 1.webp`,
      `${BASE_IMAGE_URL}/boyunluk_eldiven/DMS-EB-001-LC 2.webp`,
      `${BASE_IMAGE_URL}/boyunluk_eldiven/DMS-EB-001-SY.webp`
    ],
    shortDescription: "Boyunluk eldiven takımı soğuk hava koruması sunar.",
    description: "Boyunluk ve eldiven takımı, soğuk hava koşullarında boyun ve el koruması için tasarlanmıştır. Sıcak tutan yapısı ve esnek malzemesiyle rahat kullanım imkanı sunar. Takım halinde kullanım sayesinde pratik bir çözümdür."
  },
  {
    id: 63,
    code: "DMS-MS-001",
    name: "Epdm/Pc Tam Yüz Maske",
    category: ["maske", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/maske/DMS-MS-001.webp`
    ],
    shortDescription: "Tam yüz maske solunum koruması ve filtreleme sunar.",
    description: "EPDM/PC tam yüz maske, tam yüz koruması sağlayan ve tozlu, partiküllü çalışma ortamlarında solunum koruması sağlamak üzere tasarlanmıştır. Nefes alabilir yapısı ve gelişmiş filtreleme özelliğiyle güvenli çalışma imkanı sunar."
  },
  {
    id: 64,
    code: "DMS-MS-002",
    name: "Duman ve Toz Maskesi",
    category: ["maske", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/maske/DMS-MS-002.webp`
    ],
    shortDescription: "Duman toz maskesi solunum koruması ve filtreleme sunar.",
    description: "Duman ve toz maskesi, dumanlı ve tozlu çalışma ortamlarında solunum koruması sağlamak üzere tasarlanmıştır. Özel filtreleme özelliği sayesinde hem duman hem toz partiküllerine karşı koruma sağlar. Nefes alabilir yapısıyla güvenli çalışma imkanı sunar."
  },
  {
    id: 65,
    code: "DMS-MS-003",
    name: "Toz Maskesi",
    category: ["maske", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/maske/DMS-MS-003.webp`
    ],
    shortDescription: "Toz maskesi partikül koruması ve filtreleme sunar.",
    description: "Toz maskesi, tozlu çalışma ortamlarında solunum koruması sağlamak üzere tasarlanmıştır. Nefes alabilir yapısı ve filtreleme özelliğiyle güvenli çalışma imkanı sunar. Hafif yapısı sayesinde uzun süreli kullanım için uygundur."
  },

  // ================= DİĞER ÜRÜNLER =================
  {
    id: 66,
    code: "DMS-GM-001",
    name: "Düz ömlek",
    category: ["gömlek"],
    images: [
      `${BASE_IMAGE_URL}/gomlek/DMS-GM-001-KZ.webp`,
      `${BASE_IMAGE_URL}/gomlek/DMS-GM-001-BY.webp`,
    ],
    shortDescription: "Düz gömlek profesyonel görünüm ve dayanıklı yapı sunar.",
    description: "Düz gömlek, kurumsal ve profesyonel ortamlarda kullanım için tasarlanmıştır. Dayanıklı kumaş yapısı, kolay ütülenebilir özelliği ve şık tasarımıyla uzun süreli kullanım için idealdir. Sade tasarımı sayesinde profesyonel görünüm sağlar."
  },
  {
    id: 67,
    code: "DMS-KT-001",
    name: "Kot Ceket Reflektörlü",
    category: ["kot", "ceket"],
    images: [
      `${BASE_IMAGE_URL}/kot/DMS-KT-001.webp`
    ],
    shortDescription: "Kot ceket reflektörlü görünürlük artıran bantlar sunar.",
    description: "Kot ceket reflektörlü, dayanıklı kot kumaşı ve reflektör bantlarıyla hem konfor hem güvenlik sunan bir üründür. Özellikle gece çalışmalarında görünürlüğü artırır. Modern görünümü ve pratik yapısıyla hem iş hem günlük kullanım için ideal bir seçenektir."
  },
  {
    id: 68,
    code: "DMS-KT-002",
    name: "Kot Pantolon",
    category: ["kot", "pantolon"],
    images: [
      `${BASE_IMAGE_URL}/kot/DMS-KT-002.webp`
    ],
    shortDescription: "Kot pantolon dayanıklı kumaş ve rahat kesim sunar.",
    description: "Kot pantolon, dayanıklı kot kumaşı ve ergonomik tasarımıyla yoğun iş temposuna uyum sağlar. Modern görünümü ve pratik yapısıyla hem iş hem günlük kullanım için ideal bir seçenektir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 69,
    code: "DMS-KT-003",
    name: "Kot Gömlek",
    category: ["kot", "gömlek"],
    images: [
      `${BASE_IMAGE_URL}/kot/DMS-KT-003.webp`
    ],
    shortDescription: "Kot gömlek dayanıklı kumaş ve modern tasarım sunar.",
    description: "Kot gömlek, dayanıklı kot kumaşı ve modern tasarımıyla hem iş hem günlük kullanım için uygundur. Ergonomik kesimi ve pratik yapısıyla uzun süreli kullanım için idealdir. Kolay ütülenebilir özelliği sayesinde pratik kullanım sunar."
  },
  {
    id: 70,
    code: "DMS-AY-001",
    name: "Jüpiter Ayakkabı",
    category: ["ayakkabı"],
    images: [
      `${BASE_IMAGE_URL}/ayakkabi/DMS-AY-001.webp`
    ],
    shortDescription: "Jüpiter ayakkabı dayanıklı yapı ve ayak koruması sunar.",
    description: "Jüpiter ayakkabı, çalışma ortamlarında ayak koruması sağlamak üzere tasarlanmıştır. Dayanıklı malzeme yapısı, kaymaz taban özelliği ve ergonomik tasarımıyla uzun süreli kullanım için idealdir. İş güvenliği standartlarına uygun olarak üretilmiştir."
  },
  {
    id: 71,
    code: "DMS-AY-002",
    name: "Kompozit Ayakkabı",
    category: ["ayakkabı"],
    images: [
      `${BASE_IMAGE_URL}/ayakkabi/DMS-AY-002.webp`
    ],
    shortDescription: "Kompozit ayakkabı özel malzeme ve ayak koruması sunar.",
    description: "Kompozit ayakkabı, özel kompozit malzeme yapısıyla çalışma ortamlarında ayak koruması sağlamak üzere tasarlanmıştır. Dayanıklı yapısı, kaymaz taban özelliği ve ergonomik tasarımıyla uzun süreli kullanım için idealdir. İş güvenliği standartlarına uygundur."
  },
  {
    id: 72,
    code: "DMS-AY-003",
    name: "Bağcık Ayarlı Bot",
    category: ["ayakkabı"],
    images: [
      `${BASE_IMAGE_URL}/ayakkabi/DMS-AY-003.webp`
    ],
    shortDescription: "Bağcık ayarlı bot ayarlanabilir bağcık ve ayak koruması sunar.",
    description: "Bağcık ayarlı bot, ayarlanabilir bağcık detayıyla pratik kullanım sunan ve çalışma ortamlarında ayak koruması sağlamak üzere tasarlanmıştır. Dayanıklı malzeme yapısı, kaymaz taban özelliği ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 73,
    code: "DMS-AF-001",
    name: "Alev Almaz Başlık",
    category: ["alev almaz", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/alev_almaz/DMS-AF-001-LC.webp`
    ],
    shortDescription: "Alev almaz başlık yüksek sıcaklık koruması sunar.",
    description: "Alev almaz başlık, yüksek sıcaklıklara ve alevlere karşı koruma sağlayan özel kumaş yapısıyla üretilmiştir. Baş koruması sağlayan bu aksesuar, endüstriyel alanlarda ve riskli iş ortamlarında güvenli çalışma imkanı sunar."
  },
  {
    id: 74,
    code: "DMS-AF-002",
    name: "Alev Almaz Ceket",
    category: ["alev almaz", "ceket"],
    images: [
      `${BASE_IMAGE_URL}/alev_almaz/DMS-AF-002-LC.webp`
    ],
    shortDescription: "Alev almaz ceket yüksek sıcaklık koruması sunar.",
    description: "Alev almaz ceket, yüksek sıcaklıklara ve alevlere karşı koruma sağlayan özel kumaş yapısıyla üretilmiştir. Endüstriyel alanlarda ve riskli iş ortamlarında güvenli çalışma imkanı sunar. Dayanıklı yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 75,
    code: "DMS-AF-003",
    name: "Alev Almaz Pantolon",
    category: ["alev almaz", "pantolon"],
    images: [
      `${BASE_IMAGE_URL}/alev_almaz/DMS-AF-003-LC.webp`
    ],
    shortDescription: "Alev almaz pantolon yüksek sıcaklık koruması sunar.",
    description: "Alev almaz pantolon, yüksek sıcaklıklara ve alevlere karşı koruma sağlayan özel kumaş yapısıyla üretilmiştir. Endüstriyel alanlarda ve riskli iş ortamlarında güvenli çalışma imkanı sunar. Dayanıklı yapısı ve ergonomik kesimiyle uzun süreli kullanım için idealdir."
  },
  {
    id: 76,
    code: "DMS-YT-001",
    name: "Çok Cepli Yelek",
    category: ["yelek pantolon takımı"],
    images: [
      `${BASE_IMAGE_URL}/yelek_pantolon_takim/DMS-YT-001.webp`
    ],
    shortDescription: "Çok cepli yelek fonksiyonel cep detayları ve pratik kullanım sunar.",
    description: "Çok cepli yelek, çok sayıda cep detayıyla pratik kullanım sunan bir iş kıyafetidir. Saha ve fabrika ortamlarında eşyalarınızı güvenle taşıyabilirsiniz. Dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 77,
    code: "DMS-YT-002",
    name: "Çok Cepli Pantolon",
    category: ["yelek pantolon takımı", "pantolon"],
    images: [
      `${BASE_IMAGE_URL}/yelek_pantolon_takim/DMS-YT-002.webp`
    ],
    shortDescription: "Çok cepli pantolon fonksiyonel cep detayları ve pratik kullanım sunar.",
    description: "Çok cepli pantolon, çok sayıda cep detayıyla pratik kullanım sunan bir iş kıyafetidir. Geniş cepleri sayesinde eşyalarınızı güvenle taşıyabilirsiniz. Dayanıklı kumaş yapısı, ergonomik kesimi ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 78,
    code: "DMS-YT-003",
    name: "Çift Renk Sweatshirt",
    category: ["yelek pantolon takımı", "sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/yelek_pantolon_takim/DMS-YT-003.webp`
    ],
    shortDescription: "Çift renk sweatshirt modern tasarım ve sıcak tutan yapı sunar.",
    description: "Çift renk sweatshirt, modern çift renk tasarımı ve sıcak tutan kumaş yapısıyla soğuk hava koşullarında ideal koruma sunar. Rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur. Çift renk detayıyla hem iş hem günlük kullanım için şık bir seçenektir."
  }
];
