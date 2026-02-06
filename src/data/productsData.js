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
    shortDescription: "Polar hırka, sıcak tutan polar kumaşı ve rahat kesimiyle soğuk havalarda ideal koruma sağlar.",
    description: "Polar hırka, soğuk hava koşullarında sıcak tutan polar kumaş yapısıyla üretilmiştir. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
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
    shortDescription: "Polar hırka, sıcak tutan polar kumaşı ve rahat kesimiyle soğuk havalarda ideal koruma sağlar.",
    description: "Polar hırka, soğuk hava koşullarında sıcak tutan polar kumaş yapısıyla üretilmiştir. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
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
    shortDescription: "Polar hırka, sıcak tutan polar kumaşı ve rahat kesimiyle soğuk havalarda ideal koruma sağlar.",
    description: "Polar hırka, soğuk hava koşullarında sıcak tutan polar kumaş yapısıyla üretilmiştir. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
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
    shortDescription: "Polar hırka, sıcak tutan polar kumaşı ve rahat kesimiyle soğuk havalarda ideal koruma sağlar.",
    description: "Polar hırka, soğuk hava koşullarında sıcak tutan polar kumaş yapısıyla üretilmiştir. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
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
    shortDescription: "Polar hırka, sıcak tutan polar kumaşı ve rahat kesimiyle soğuk havalarda ideal koruma sağlar.",
    description: "Polar hırka, soğuk hava koşullarında sıcak tutan polar kumaş yapısıyla üretilmiştir. Hafif ve nefes alabilen özelliği, rahat kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için uygundur."
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
    shortDescription: "İş montu, soğuk hava koşullarında koruma sağlayan dayanıklı ve fonksiyonel dış giyim ürünüdür.",
    description: "İş montu, soğuk ve yağışlı hava koşullarında maksimum koruma sağlamak üzere tasarlanmıştır. Su geçirmez yapısı, dayanıklı kumaşı ve fonksiyonel cep detaylarıyla zorlu iş koşullarında güvenilir koruma sunar."
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
    shortDescription: "İş montu, soğuk hava koşullarında koruma sağlayan dayanıklı ve fonksiyonel dış giyim ürünüdür.",
    description: "İş montu, soğuk ve yağışlı hava koşullarında maksimum koruma sağlamak üzere tasarlanmıştır. Su geçirmez yapısı, dayanıklı kumaşı ve fonksiyonel cep detaylarıyla zorlu iş koşullarında güvenilir koruma sunar."
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
    shortDescription: "İş montu, soğuk hava koşullarında koruma sağlayan dayanıklı ve fonksiyonel dış giyim ürünüdür.",
    description: "İş montu, soğuk ve yağışlı hava koşullarında maksimum koruma sağlamak üzere tasarlanmıştır. Su geçirmez yapısı, dayanıklı kumaşı ve fonksiyonel cep detaylarıyla zorlu iş koşullarında güvenilir koruma sunar."
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
    shortDescription: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım sunan, çok cepli ve dayanıklı bir üründür.",
    description: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım imkanı sunan çok fonksiyonlu bir iş kıyafetidir. Geniş cepleri, dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 10,
    code: "DMS-YL-002",
    name: "Ripstop Yelek Çok Cepli",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-002-GR.webp`
    ],
    shortDescription: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım sunan, çok cepli ve dayanıklı bir üründür.",
    description: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım imkanı sunan çok fonksiyonlu bir iş kıyafetidir. Geniş cepleri, dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 11,
    code: "DMS-YL-003",
    name: "Yelek Reflektörlü",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-003-SY.webp`
    ],
    shortDescription: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım sunan, çok cepli ve dayanıklı bir üründür.",
    description: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım imkanı sunan çok fonksiyonlu bir iş kıyafetidir. Geniş cepleri, dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 12,
    code: "DMS-YL-004",
    name: "Winto Yelek",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/DMS-YL-004-LC.webp`
    ],
    shortDescription: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım sunan, çok cepli ve dayanıklı bir üründür.",
    description: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım imkanı sunan çok fonksiyonlu bir iş kıyafetidir. Geniş cepleri, dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
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
    shortDescription: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım sunan, çok cepli ve dayanıklı bir üründür.",
    description: "İş yeleği, saha ve fabrika ortamlarında pratik kullanım imkanı sunan çok fonksiyonlu bir iş kıyafetidir. Geniş cepleri, dayanıklı kumaş yapısı ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
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
    shortDescription: "Softshell iş kıyafeti, rüzgar geçirmeyen yapısı ve nefes alabilen kumaşıyla dış mekan çalışmalarında ideal koruma sunar.",
    description: "Softshell iş kıyafeti, rüzgar geçirmeyen yapısı ve nefes alabilen kumaş özelliğiyle dış mekan çalışmalarında maksimum konfor sağlar. Esnek yapısı ve dayanıklı malzemesiyle zorlu iş koşullarında güvenilir koruma sunar."
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
    shortDescription: "Softshell iş kıyafeti, rüzgar geçirmeyen yapısı ve nefes alabilen kumaşıyla dış mekan çalışmalarında ideal koruma sunar.",
    description: "Softshell iş kıyafeti, rüzgar geçirmeyen yapısı ve nefes alabilen kumaş özelliğiyle dış mekan çalışmalarında maksimum konfor sağlar. Esnek yapısı ve dayanıklı malzemesiyle zorlu iş koşullarında güvenilir koruma sunar."
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
    shortDescription: "Softshell iş kıyafeti, rüzgar geçirmeyen yapısı ve nefes alabilen kumaşıyla dış mekan çalışmalarında ideal koruma sunar.",
    description: "Softshell iş kıyafeti, rüzgar geçirmeyen yapısı ve nefes alabilen kumaş özelliğiyle dış mekan çalışmalarında maksimum konfor sağlar. Esnek yapısı ve dayanıklı malzemesiyle zorlu iş koşullarında güvenilir koruma sunar."
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
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
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
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
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
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 20,
    code: "DMS-PN-004",
    name: "Poliüretan Pantolon Reflektörlü",
    category: ["pantolon", "yüksek görünürlük"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-004-FS.webp`
    ],
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 21,
    code: "DMS-PN-005",
    name: "Pötikare Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-005-GR.webp`
    ],
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
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
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 23,
    code: "DMS-PN-007",
    name: "Bağcıklı Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-PN-007-SY.webp`
    ],
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
  },
  {
    id: 24,
    code: "DMS-SS-004",
    name: "Softshell Pantolon",
    category: ["pantolon"],
    images: [
      `${BASE_IMAGE_URL}/pantolon/DMS-SS-004-SY.webp`
    ],
    shortDescription: "İş pantolonu, dayanıklı kumaşı ve fonksiyonel yapısıyla yoğun iş temposuna uyum sağlar.",
    description: "İş pantolonu, çalışma ortamlarında rahat hareket imkanı sunan ergonomik kesimi ve dayanıklı kumaş yapısıyla üretilmiştir. Geniş cepleri ve sağlam dikiş yapısıyla uzun ömürlü kullanım sağlar."
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
    shortDescription: "İkaz yeleği, yüksek görünürlük sağlayan reflektör bantlarıyla iş güvenliği için tasarlanmıştır.",
    description: "İkaz yeleği, özellikle gece çalışmalarında ve düşük görünürlük koşullarında yüksek görünürlük sağlamak üzere tasarlanmıştır. Reflektör bantları ve parlak renk seçenekleriyle güvenlik sağlar."
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
    shortDescription: "İkaz yeleği, yüksek görünürlük sağlayan reflektör bantlarıyla iş güvenliği için tasarlanmıştır.",
    description: "İkaz yeleği, özellikle gece çalışmalarında ve düşük görünürlük koşullarında yüksek görünürlük sağlamak üzere tasarlanmıştır. Reflektör bantları ve parlak renk seçenekleriyle güvenlik sağlar."
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
    shortDescription: "Bisiklet yaka sweatshirt, rahat kesimi ve dayanıklı kumaşıyla iş ve günlük kullanım için uygundur.",
    description: "Bisiklet yaka sweatshirt, modern tasarımı ve rahat kesimiyle hem iş hem günlük kullanım için ideal bir seçenektir. Nefes alabilen kumaş yapısı ve dayanıklı malzemesiyle uzun ömürlü kullanım sunar."
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
    shortDescription: "Polo yaka sweatshirt, klasik görünümü ve rahat yapısıyla hem iş hem günlük kullanım için uygundur.",
    description: "Polo yaka sweatshirt, klasik polo yaka tasarımı ve rahat kesimiyle hem iş hem günlük kullanım için ideal bir seçenektir. Dayanıklı kumaş yapısı ve şık görünümüyle uzun ömürlü kullanım sunar."
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
    shortDescription: "Polo yaka sweatshirt, klasik görünümü ve rahat yapısıyla hem iş hem günlük kullanım için uygundur.",
    description: "Polo yaka sweatshirt, klasik polo yaka tasarımı ve rahat kesimiyle hem iş hem günlük kullanım için ideal bir seçenektir. Dayanıklı kumaş yapısı ve şık görünümüyle uzun ömürlü kullanım sunar."
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
    shortDescription: "Kapşonlu sweatshirt, kapşon detayı ve sıcak tutan yapısıyla soğuk havalarda ideal koruma sunar.",
    description: "Kapşonlu sweatshirt, kapşon detayı ve sıcak tutan kumaş yapısıyla soğuk hava koşullarında kullanım için tasarlanmıştır. Rahat kesimi ve dayanıklı malzemesiyle uzun ömürlü kullanım sağlar."
  },
  {
    id: 31,
    code: "DMS-KS-002",
    name: "Sweatshirt Yarım Fermuar ve Reflektörlü",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/kapsonlu_sweatshirt/DMS-KS-002-TC.webp`
    ],
    shortDescription: "Kapşonlu sweatshirt, kapşon detayı ve sıcak tutan yapısıyla soğuk havalarda ideal koruma sunar.",
    description: "Kapşonlu sweatshirt, kapşon detayı ve sıcak tutan kumaş yapısıyla soğuk hava koşullarında kullanım için tasarlanmıştır. Rahat kesimi ve dayanıklı malzemesiyle uzun ömürlü kullanım sağlar."
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
    shortDescription: "Bisiklet yaka tişört, nefes alabilen kumaşı ve rahat kalıbıyla sıcak havalarda ideal kullanım sunar.",
    description: "Bisiklet yaka tişört, sıcak hava koşullarında rahatlık sağlayan nefes alabilen kumaş yapısına sahiptir. Ergonomik kesimi ve dayanıklı malzemesiyle iş ve günlük kullanım için uygundur."
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
    shortDescription: "Bisiklet yaka tişört, nefes alabilen kumaşı ve rahat kalıbıyla sıcak havalarda ideal kullanım sunar.",
    description: "Bisiklet yaka tişört, sıcak hava koşullarında rahatlık sağlayan nefes alabilen kumaş yapısına sahiptir. Ergonomik kesimi ve dayanıklı malzemesiyle iş ve günlük kullanım için uygundur."
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
    shortDescription: "Polo yaka tişört, kurumsal ve günlük kullanım için uygun, şık ve dayanıklı bir modeldir.",
    description: "Polo yaka tişört, klasik polo yaka tasarımı ve nefes alabilen kumaş yapısıyla üretilmiştir. Kurumsal görünümü ve dayanıklı malzemesiyle hem iş hem günlük kullanım için uygundur."
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
    shortDescription: "İş önlüğü, çeşitli sektörlerde kullanıma uygun, rahat kesimi ve dayanıklı yapısıyla pratik bir çözümdür.",
    description: "İş önlüğü, mutfak, üretim ve servis alanlarında kullanım için tasarlanmıştır. Kolay temizlenebilir kumaş yapısı, ergonomik kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için idealdir."
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
    shortDescription: "İş önlüğü, çeşitli sektörlerde kullanıma uygun, rahat kesimi ve dayanıklı yapısıyla pratik bir çözümdür.",
    description: "İş önlüğü, mutfak, üretim ve servis alanlarında kullanım için tasarlanmıştır. Kolay temizlenebilir kumaş yapısı, ergonomik kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için idealdir."
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
    shortDescription: "İş önlüğü, çeşitli sektörlerde kullanıma uygun, rahat kesimi ve dayanıklı yapısıyla pratik bir çözümdür.",
    description: "İş önlüğü, mutfak, üretim ve servis alanlarında kullanım için tasarlanmıştır. Kolay temizlenebilir kumaş yapısı, ergonomik kesimi ve dayanıklı malzemesiyle uzun süreli kullanım için idealdir."
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
    shortDescription: "Profesyonel mutfak personeli için tasarlanmış aşçı grubu kıyafetleri, hijyenik ve dayanıklı yapıdadır.",
    description: "Aşçı grubu kıyafetleri, profesyonel mutfak ortamlarında kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Profesyonel mutfak personeli için tasarlanmış aşçı grubu kıyafetleri, hijyenik ve dayanıklı yapıdadır.",
    description: "Aşçı grubu kıyafetleri, profesyonel mutfak ortamlarında kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Profesyonel mutfak personeli için tasarlanmış aşçı grubu kıyafetleri, hijyenik ve dayanıklı yapıdadır.",
    description: "Aşçı grubu kıyafetleri, profesyonel mutfak ortamlarında kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Profesyonel mutfak personeli için tasarlanmış aşçı grubu kıyafetleri, hijyenik ve dayanıklı yapıdadır.",
    description: "Aşçı grubu kıyafetleri, profesyonel mutfak ortamlarında kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Profesyonel mutfak personeli için tasarlanmış aşçı grubu kıyafetleri, hijyenik ve dayanıklı yapıdadır.",
    description: "Aşçı grubu kıyafetleri, profesyonel mutfak ortamlarında kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Profesyonel mutfak personeli için tasarlanmış aşçı grubu kıyafetleri, hijyenik ve dayanıklı yapıdadır.",
    description: "Aşçı grubu kıyafetleri, profesyonel mutfak ortamlarında kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle mutfak personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "İş tulumu, tek parça yapısıyla pratik kullanım sunan, dayanıklı kumaşı ve ergonomik kesimiyle yoğun iş temposuna uyum sağlar.",
    description: "İş tulumu, tek parça yapısıyla pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Ergonomik kesimi, geniş cepleri ve sağlam dikiş yapısıyla yoğun iş temposuna uyum sağlar."
  },
  {
    id: 45,
    code: "DMS-TL-002",
    name: "Thor Tulum",
    category: ["tulum"],
    images: [
      `${BASE_IMAGE_URL}/tulum/DMS-TL-002-FS.webp`
    ],
    shortDescription: "İş tulumu, tek parça yapısıyla pratik kullanım sunan, dayanıklı kumaşı ve ergonomik kesimiyle yoğun iş temposuna uyum sağlar.",
    description: "İş tulumu, tek parça yapısıyla pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Ergonomik kesimi, geniş cepleri ve sağlam dikiş yapısıyla yoğun iş temposuna uyum sağlar."
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
    shortDescription: "İş tulumu, tek parça yapısıyla pratik kullanım sunan, dayanıklı kumaşı ve ergonomik kesimiyle yoğun iş temposuna uyum sağlar.",
    description: "İş tulumu, tek parça yapısıyla pratik kullanım imkanı sunan dayanıklı bir iş kıyafetidir. Ergonomik kesimi, geniş cepleri ve sağlam dikiş yapısıyla yoğun iş temposuna uyum sağlar."
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
    shortDescription: "Güvenlik personeli için özel tasarlanmış kıyafetler, profesyonel görünüm ve dayanıklı yapıdadır.",
    description: "Güvenlik kıyafetleri, güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetleridir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 48,
    code: "DMS-GV-002",
    name: "Güvenlik Pantolon",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-002.webp`
    ],
    shortDescription: "Güvenlik personeli için özel tasarlanmış kıyafetler, profesyonel görünüm ve dayanıklı yapıdadır.",
    description: "Güvenlik kıyafetleri, güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetleridir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 49,
    code: "DMS-GV-003",
    name: "Güvenlik Yağmurluk",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-003.webp`
    ],
    shortDescription: "Güvenlik personeli için özel tasarlanmış kıyafetler, profesyonel görünüm ve dayanıklı yapıdadır.",
    description: "Güvenlik kıyafetleri, güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetleridir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 50,
    code: "DMS-GV-004",
    name: "Güvenlik Uzun Kol T-Shirt",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-004.webp`
    ],
    shortDescription: "Güvenlik personeli için özel tasarlanmış kıyafetler, profesyonel görünüm ve dayanıklı yapıdadır.",
    description: "Güvenlik kıyafetleri, güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetleridir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 51,
    code: "DMS-GV-005",
    name: "Güvenlik Kısa Kol T-Shirt",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-005.webp`
    ],
    shortDescription: "Güvenlik personeli için özel tasarlanmış kıyafetler, profesyonel görünüm ve dayanıklı yapıdadır.",
    description: "Güvenlik kıyafetleri, güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetleridir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
  },
  {
    id: 52,
    code: "DMS-GV-006",
    name: "Güvenlik Sweatshirt",
    category: ["güvenlik", "sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/DMS-GV-006.webp`
    ],
    shortDescription: "Güvenlik personeli için özel tasarlanmış kıyafetler, profesyonel görünüm ve dayanıklı yapıdadır.",
    description: "Güvenlik kıyafetleri, güvenlik personeli için özel olarak tasarlanmış profesyonel iş kıyafetleridir. Dayanıklı kumaş yapısı, fonksiyonel detayları ve şık tasarımıyla uzun süreli kullanım için uygundur."
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
    shortDescription: "Sağlık personeli için özel tasarlanmış kıyafetler, hijyenik ve dayanıklı yapıdadır.",
    description: "Sağlıkçı kıyafetleri, sağlık sektöründe kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle sağlık personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Sağlık personeli için özel tasarlanmış kıyafetler, hijyenik ve dayanıklı yapıdadır.",
    description: "Sağlıkçı kıyafetleri, sağlık sektöründe kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle sağlık personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Sağlık personeli için özel tasarlanmış kıyafetler, hijyenik ve dayanıklı yapıdadır.",
    description: "Sağlıkçı kıyafetleri, sağlık sektöründe kullanım için özel olarak tasarlanmıştır. Hijyenik kumaş yapısı, kolay temizlenebilir özelliği ve ergonomik kesimiyle sağlık personeline rahat çalışma imkanı sağlar."
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
    shortDescription: "Yağmurluk, su geçirmez yapısı ve hafif malzemesiyle yağışlı hava koşullarında koruma sağlar.",
    description: "Yağmurluk, yağışlı hava koşullarında su geçirmez yapısıyla koruma sağlamak üzere tasarlanmıştır. Hafif malzemesi, nefes alabilen özelliği ve pratik kullanımıyla ideal bir dış giyim ürünüdür."
  },
  {
    id: 57,
    code: "DMS-YG-002",
    name: "Yağmurluk Ceket",
    category: ["yağmurluk", "ceket"],
    images: [
      `${BASE_IMAGE_URL}/yagmurluk/DMS-YG-002-LC.webp`
    ],
    shortDescription: "Yağmurluk, su geçirmez yapısı ve hafif malzemesiyle yağışlı hava koşullarında koruma sağlar.",
    description: "Yağmurluk, yağışlı hava koşullarında su geçirmez yapısıyla koruma sağlamak üzere tasarlanmıştır. Hafif malzemesi, nefes alabilen özelliği ve pratik kullanımıyla ideal bir dış giyim ürünüdür."
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
    shortDescription: "İş güvenliği bareti, baş koruması sağlayan darbelere dayanıklı koruyucu ekipmandır.",
    description: "İş güvenliği bareti, şantiye ve endüstriyel alanlarda baş koruması için kullanılan temel güvenlik ekipmanıdır. Darbelere dayanıklı yapısı ve hafif tasarımıyla günlük kullanım için uygundur."
  },
  {
    id: 59,
    code: "DMS-BR-002",
    name: "Kep",
    category: ["baret", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/bere/DMS-BR-002-TC.webp`
    ],
    shortDescription: "Soğuk hava koşullarında baş koruması sağlayan iş beresi, sıcak tutan yapıdadır.",
    description: "İş beresi, soğuk hava koşullarında başı sıcak tutmak için tasarlanmış pratik bir aksesuardır. Hafif ve konforlu yapısıyla dış mekan çalışmalarında ideal koruma sağlar."
  },
  {
    id: 60,
    code: "DMS-BR-003",
    name: "Polar Bere",
    category: ["bere", "aksesuar", "polar"],
    images: [
      `${BASE_IMAGE_URL}/bere/DMS-BR-003-SY.webp`
    ],
    shortDescription: "Soğuk hava koşullarında baş koruması sağlayan iş beresi, sıcak tutan yapıdadır.",
    description: "İş beresi, soğuk hava koşullarında başı sıcak tutmak için tasarlanmış pratik bir aksesuardır. Hafif ve konforlu yapısıyla dış mekan çalışmalarında ideal koruma sağlar."
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
    shortDescription: "Soğuk hava koşullarında baş koruması sağlayan iş beresi, sıcak tutan yapıdadır.",
    description: "İş beresi, soğuk hava koşullarında başı sıcak tutmak için tasarlanmış pratik bir aksesuardır. Hafif ve konforlu yapısıyla dış mekan çalışmalarında ideal koruma sağlar."
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
    shortDescription: "Boyunluk ve eldiven seti, soğuk hava koşullarında ek koruma sağlayan pratik aksesuarlardır.",
    description: "Boyunluk ve eldiven seti, soğuk hava koşullarında boyun ve el koruması için tasarlanmıştır. Sıcak tutan yapısı ve esnek malzemesiyle rahat kullanım imkanı sunar."
  },
  {
    id: 63,
    code: "DMS-MS-001",
    name: "Epdm/Pc Tam Yüz Maske",
    category: ["maske", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/maske/DMS-MS-001.webp`
    ],
    shortDescription: "İş maskesi, toz ve partiküllere karşı koruma sağlayan temel güvenlik ekipmanıdır.",
    description: "İş maskesi, tozlu ve partiküllü çalışma ortamlarında solunum koruması sağlamak üzere tasarlanmıştır. Nefes alabilir yapısı ve filtreleme özelliğiyle güvenli çalışma imkanı sunar."
  },
  {
    id: 64,
    code: "DMS-MS-002",
    name: "Duman ve Toz Maskesi",
    category: ["maske", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/maske/DMS-MS-002.webp`
    ],
    shortDescription: "İş maskesi, toz ve partiküllere karşı koruma sağlayan temel güvenlik ekipmanıdır.",
    description: "İş maskesi, tozlu ve partiküllü çalışma ortamlarında solunum koruması sağlamak üzere tasarlanmıştır. Nefes alabilir yapısı ve filtreleme özelliğiyle güvenli çalışma imkanı sunar."
  },
  {
    id: 65,
    code: "DMS-MS-003",
    name: "Toz Maskesi",
    category: ["maske", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/maske/DMS-MS-003.webp`
    ],
    shortDescription: "İş maskesi, toz ve partiküllere karşı koruma sağlayan temel güvenlik ekipmanıdır.",
    description: "İş maskesi, tozlu ve partiküllü çalışma ortamlarında solunum koruması sağlamak üzere tasarlanmıştır. Nefes alabilir yapısı ve filtreleme özelliğiyle güvenli çalışma imkanı sunar."
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
    shortDescription: "İş gömleği, profesyonel görünümü ve dayanıklı yapısıyla kurumsal kullanım için uygundur.",
    description: "İş gömleği, kurumsal ve profesyonel ortamlarda kullanım için tasarlanmıştır. Dayanıklı kumaş yapısı, kolay ütülenebilir özelliği ve şık tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 67,
    code: "DMS-KT-001",
    name: "Kot Ceket Reflektörlü",
    category: ["kot", "ceket"],
    images: [
      `${BASE_IMAGE_URL}/kot/DMS-KT-001.webp`
    ],
    shortDescription: "Kot iş kıyafeti, dayanıklı kot kumaşı ve modern tasarımıyla hem iş hem günlük kullanım için uygundur.",
    description: "Kot iş kıyafeti, dayanıklı kot kumaşı ve ergonomik tasarımıyla yoğun iş temposuna uyum sağlar. Modern görünümü ve pratik yapısıyla hem iş hem günlük kullanım için ideal bir seçenektir."
  },
  {
    id: 68,
    code: "DMS-KT-002",
    name: "Kot Pantolon",
    category: ["kot", "pantolon"],
    images: [
      `${BASE_IMAGE_URL}/kot/DMS-KT-002.webp`
    ],
    shortDescription: "Kot iş kıyafeti, dayanıklı kot kumaşı ve modern tasarımıyla hem iş hem günlük kullanım için uygundur.",
    description: "Kot iş kıyafeti, dayanıklı kot kumaşı ve ergonomik tasarımıyla yoğun iş temposuna uyum sağlar. Modern görünümü ve pratik yapısıyla hem iş hem günlük kullanım için ideal bir seçenektir."
  },
  {
    id: 69,
    code: "DMS-KT-003",
    name: "Kot Gömlek",
    category: ["kot", "gömlek"],
    images: [
      `${BASE_IMAGE_URL}/kot/DMS-KT-003.webp`
    ],
    shortDescription: "Kot iş kıyafeti, dayanıklı kot kumaşı ve modern tasarımıyla hem iş hem günlük kullanım için uygundur.",
    description: "Kot iş kıyafeti, dayanıklı kot kumaşı ve ergonomik tasarımıyla yoğun iş temposuna uyum sağlar. Modern görünümü ve pratik yapısıyla hem iş hem günlük kullanım için ideal bir seçenektir."
  },
  {
    id: 70,
    code: "DMS-AY-001",
    name: "Jüpiter Ayakkabı",
    category: ["ayakkabı"],
    images: [
      `${BASE_IMAGE_URL}/ayakkabi/DMS-AY-001.webp`
    ],
    shortDescription: "İş güvenliği standartlarına uygun, dayanıklı ve konforlu iş ayakkabıları.",
    description: "İş ayakkabıları, çalışma ortamlarında ayak koruması sağlamak üzere tasarlanmıştır. Dayanıklı malzeme yapısı, kaymaz taban özelliği ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 71,
    code: "DMS-AY-002",
    name: "Kompozit Ayakkabı",
    category: ["ayakkabı"],
    images: [
      `${BASE_IMAGE_URL}/ayakkabi/DMS-AY-002.webp`
    ],
    shortDescription: "İş güvenliği standartlarına uygun, dayanıklı ve konforlu iş ayakkabıları.",
    description: "İş ayakkabıları, çalışma ortamlarında ayak koruması sağlamak üzere tasarlanmıştır. Dayanıklı malzeme yapısı, kaymaz taban özelliği ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 72,
    code: "DMS-AY-003",
    name: "Bağcık Ayarlı Bot",
    category: ["ayakkabı"],
    images: [
      `${BASE_IMAGE_URL}/ayakkabi/DMS-AY-003.webp`
    ],
    shortDescription: "İş güvenliği standartlarına uygun, dayanıklı ve konforlu iş ayakkabıları.",
    description: "İş ayakkabıları, çalışma ortamlarında ayak koruması sağlamak üzere tasarlanmıştır. Dayanıklı malzeme yapısı, kaymaz taban özelliği ve ergonomik tasarımıyla uzun süreli kullanım için idealdir."
  },
  {
    id: 73,
    code: "DMS-AF-001",
    name: "Alev Almaz Başlık",
    category: ["alev almaz", "aksesuar"],
    images: [
      `${BASE_IMAGE_URL}/alev_almaz/DMS-AF-001-LC.webp`
    ],
    shortDescription: "Alev almaz özellikli iş kıyafeti, yüksek sıcaklıklara dayanıklı koruyucu kumaş yapısıyla güvenlik sağlar.",
    description: "Alev almaz iş kıyafeti, yüksek sıcaklıklara ve alevlere karşı koruma sağlayan özel kumaş yapısıyla üretilmiştir. Endüstriyel alanlarda ve riskli iş ortamlarında güvenli çalışma imkanı sunar."
  },
  {
    id: 74,
    code: "DMS-AF-002",
    name: "Alev Almaz Ceket",
    category: ["alev almaz", "ceket"],
    images: [
      `${BASE_IMAGE_URL}/alev_almaz/DMS-AF-002-LC.webp`
    ],
    shortDescription: "Alev almaz özellikli iş kıyafeti, yüksek sıcaklıklara dayanıklı koruyucu kumaş yapısıyla güvenlik sağlar.",
    description: "Alev almaz iş kıyafeti, yüksek sıcaklıklara ve alevlere karşı koruma sağlayan özel kumaş yapısıyla üretilmiştir. Endüstriyel alanlarda ve riskli iş ortamlarında güvenli çalışma imkanı sunar."
  },
  {
    id: 75,
    code: "DMS-AF-003",
    name: "Alev Almaz Pantolon",
    category: ["alev almaz", "pantolon"],
    images: [
      `${BASE_IMAGE_URL}/alev_almaz/DMS-AF-003-LC.webp`
    ],
    shortDescription: "Alev almaz özellikli iş kıyafeti, yüksek sıcaklıklara dayanıklı koruyucu kumaş yapısıyla güvenlik sağlar.",
    description: "Alev almaz iş kıyafeti, yüksek sıcaklıklara ve alevlere karşı koruma sağlayan özel kumaş yapısıyla üretilmiştir. Endüstriyel alanlarda ve riskli iş ortamlarında güvenli çalışma imkanı sunar."
  },
  {
    id: 76,
    code: "DMS-YT-001",
    name: "Çok Cepli Yelek",
    category: ["yelek pantolon takımı"],
    images: [
      `${BASE_IMAGE_URL}/yelek_pantolon_takim/DMS-YT-001.webp`
    ],
    shortDescription: "Yelek pantolon takımı, takım halinde şık görünüm sağlayan ve pratik kullanım sunan bir üründür.",
    description: "Yelek pantolon takımı, üst ve alt parçadan oluşan takım halinde kullanım için tasarlanmıştır. Uyumlu tasarımı, dayanıklı kumaş yapısı ve fonksiyonel detaylarıyla profesyonel görünüm sağlar."
  },
  {
    id: 77,
    code: "DMS-YT-002",
    name: "Çok Cepli Pantolon",
    category: ["yelek pantolon takımı", "pantolon"],
    images: [
      `${BASE_IMAGE_URL}/yelek_pantolon_takim/DMS-YT-002.webp`
    ],
    shortDescription: "Yelek pantolon takımı, takım halinde şık görünüm sağlayan ve pratik kullanım sunan bir üründür.",
    description: "Yelek pantolon takımı, üst ve alt parçadan oluşan takım halinde kullanım için tasarlanmıştır. Uyumlu tasarımı, dayanıklı kumaş yapısı ve fonksiyonel detaylarıyla profesyonel görünüm sağlar."
  },
  {
    id: 78,
    code: "DMS-YT-003",
    name: "Çift Renk Sweatshirt",
    category: ["yelek pantolon takımı", "sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/yelek_pantolon_takim/DMS-YT-003.webp`
    ],
    shortDescription: "Yelek pantolon takımı, takım halinde şık görünüm sağlayan ve pratik kullanım sunan bir üründür.",
    description: "Yelek pantolon takımı, üst ve alt parçadan oluşan takım halinde kullanım için tasarlanmıştır. Uyumlu tasarımı, dayanıklı kumaş yapısı ve fonksiyonel detaylarıyla profesyonel görünüm sağlar."
  }
];
