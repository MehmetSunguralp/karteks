// TÜM ÜRÜNLER – cPanel klasör yapısına göre otomatik gruplanmış
const BASE_IMAGE_URL = "https://dmstekstil.com/assets/images";

export const products = [
  // ================= AŞÇI GRUBU =================
  {
    id: 1,
    name: "Düz Önlük",
    category: ["önlük", "aşçı grubu"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/duz_onluk.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/duz_onluk2.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/duz_onluk3.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/duz_onluk4.webp`
    ],
    shortDescription: "Sade ve dayanıklı düz iş önlüğü.",
    description: "Düz iş önlüğü; mutfak, üretim ve servis alanlarında uzun süreli kullanım için tasarlanmış, hafif ve dayanıklı bir modeldir."
  },
  {
    id: 2,
    name: "Erkek Aşçı Önlüğü",
    category: ["önlük", "aşçı grubu"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/erkek_asci_onluk.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/erkek_asci_onluk2.webp`
    ],
    shortDescription: "Profesyonel erkek aşçı önlüğü.",
    description: "Erkek aşçı önlüğü, profesyonel mutfaklarda rahat hareket imkânı sunan ergonomik kesimi ve dayanıklı kumaşıyla öne çıkar."
  },
  {
    id: 3,
    name: "Kadın Aşçı Önlüğü",
    category: ["önlük", "aşçı grubu"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/kadin_asci_onluk.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/kadin_asci_onluk2.webp`
    ],
    shortDescription: "Kadınlara özel kesim aşçı önlüğü.",
    description: "Kadın aşçı önlüğü, vücut ergonomisine uygun kesimi ve dayanıklı yapısıyla yoğun mutfak temposuna uyum sağlar."
  },
  {
    id: 4,
    name: "Aşçı Önlüğü Takımı",
    category: ["önlük", "aşçı grubu"],
    images: [
      `${BASE_IMAGE_URL}/asci_grubu/onluk_takimi.webp`,
      `${BASE_IMAGE_URL}/asci_grubu/onluk_takimi2.webp`
    ],
    shortDescription: "Üst–alt aşçı önlüğü takımı.",
    description: "Aşçı önlüğü takımı, profesyonel mutfak kullanımı için tasarlanmış olup takım halinde pratik ve şık bir çözüm sunar."
  },

  // ================= BARET / BERE =================
  {
    id: 5,
    name: "Baret",
    category: ["baret", "iş güvenliği"],
    images: [
      `${BASE_IMAGE_URL}/baret/baret.webp`,
      `${BASE_IMAGE_URL}/baret/baret2.webp`,
      `${BASE_IMAGE_URL}/baret/baret3.webp`
    ],
    shortDescription: "İş güvenliği için koruyucu baret.",
    description: "Baret, şantiye ve endüstriyel alanlarda baş koruması sağlamak üzere üretilmiş, darbelere dayanıklı bir iş güvenliği ekipmanıdır."
  },
  {
    id: 6,
    name: "Bere",
    category: ["bere"],
    images: [
      `${BASE_IMAGE_URL}/bere/bere.webp`,
      `${BASE_IMAGE_URL}/bere/bere2.webp`,
      `${BASE_IMAGE_URL}/bere/bere3.webp`
    ],
    shortDescription: "Soğuk hava koşulları için bere.",
    description: "İş beresi, soğuk havalarda başı sıcak tutmak için tasarlanmış, hafif ve konforlu bir üründür."
  },

  // ================= BİSİKLET YAKA =================
  {
    id: 7,
    name: "Bisiklet Yaka Sweatshirt",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_erkek.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_erkek2.png.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_erkek3.png.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_erkek3.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_erkek4.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_erkek5.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_kadin.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_sweatshirt/sweatshirt_kadin2.webp`
    ],
    shortDescription: "Rahat kesim bisiklet yaka sweatshirt.",
    description: "Bisiklet yaka sweatshirt; iş ve günlük kullanım için uygun, dayanıklı kumaşı ve rahat kesimiyle öne çıkan bir modeldir."
  },
  {
    id: 8,
    name: "Bisiklet Yaka T-Shirt",
    category: ["t-shirt"],
    images: [
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt2.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt3.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt4.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt5.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt6.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt7.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt8.webp`,
      `${BASE_IMAGE_URL}/bisiklet_yaka_tshirt/bisiklet_yaka_tshirt9.webp`
    ],
    shortDescription: "Günlük kullanıma uygun bisiklet yaka tişört.",
    description: "Bisiklet yaka tişört; nefes alabilen kumaşı ve rahat kalıbıyla sıcak havalarda ideal bir kullanım sunar."
  },

  // ================= POLO YAKA =================
  {
    id: 9,
    name: "Polo Yaka Sweatshirt",
    category: ["sweatshirt"],
    images: [
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt2.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt3.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt4.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt5.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt6.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/erkek_polo_yaka_sweatshirt7.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/kadin_polo_yaka_sweatshirt.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_sweatshirt/kadin_polo_yaka_sweatshirt2.webp`
    ],
    shortDescription: "Polo yaka sweatshirt modeli.",
    description: "Polo yaka sweatshirt; klasik görünümü ve rahat yapısıyla hem iş hem günlük kullanım için uygundur."
  },
  {
    id: 10,
    name: "Polo Yaka T-Shirt",
    category: ["t-shirt"],
    images: [
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/polo_yaka_tshirt_erkek5.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/polo_yaka_tshirt_erkek.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/polo_yaka_tshirt_erkek2.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/polo_yaka_tshirt_erkek3.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/polo_yaka_tshirt_erkek4.webp`,
      `${BASE_IMAGE_URL}/polo_yaka_tshirt/polo_yaka_tshirt.webp`
    ],
    shortDescription: "Klasik polo yaka tişört.",
    description: "Polo yaka tişört, kurumsal ve günlük kullanım için uygun, şık ve dayanıklı bir modeldir."
  },
  // =================YELEK / İKAZ =================
  {
    id: 11,
    name: "İş Yeleği",
    category: ["yelek"],
    images: [
      `${BASE_IMAGE_URL}/yelek/yelek.webp`,
      `${BASE_IMAGE_URL}/yelek/yelek2.webp`,
      `${BASE_IMAGE_URL}/yelek/yelek3.webp`,
      `${BASE_IMAGE_URL}/yelek/yelek4.webp`,
      `${BASE_IMAGE_URL}/yelek/yelek5.webp`,
      `${BASE_IMAGE_URL}/yelek/yelek6.webp`,
      `${BASE_IMAGE_URL}/yelek/yelek7.webp`
    ],
    shortDescription: "Çok cepli iş yeleği.",
    description: "İş yeleği; saha ve fabrika ortamlarında pratik kullanım sunan, çok cepli ve dayanıklı bir üründür."
  },
  {
    id: 12,
    name: "İkaz Yeleği",
    category: ["ikaz yelekleri"],
    images: [
      `${BASE_IMAGE_URL}/ikaz_yelekleri/ikaz_yelegi.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/ikaz_yelegi2.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/ikaz_yelegi3.webp`
    ],
    shortDescription: "Reflektörlü ikaz yeleği.",
    description: "İkaz yeleği, yüksek görünürlük sağlayan reflektör bantlarıyla iş güvenliği için tasarlanmıştır."
  },
  {
    id: 13,
    name: "Çift Şerit İkaz Yeleği",
    category: ["ikaz yelekleri"],
    images: [
      `${BASE_IMAGE_URL}/ikaz_yelekleri/ikaz_yelegi_cift_serit.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/ikaz_yelegi_cift_serit2.webp`,
      `${BASE_IMAGE_URL}/ikaz_yelekleri/ikaz_yelegi_cift_serit3.webp`
    ],
    shortDescription: "Çift reflektör şeritli ikaz yeleği.",
    description: "Çift şeritli ikaz yeleği, artırılmış görünürlük sağlayarak özellikle gece çalışmalarında güvenlik sunar."
  },
  //---------------
  {
    id: 14,
    name: "Kadın Personel Önlüğü",
    category: ["önlük"],
    images: [
      `${BASE_IMAGE_URL}/onluk/kadin_personel_onluk.webp`,
	  `${BASE_IMAGE_URL}/onluk/kadin_personel_onluk2.webp`,
	  `${BASE_IMAGE_URL}/onluk/kadin_personel_onluk3.webp`,
	  `${BASE_IMAGE_URL}/onluk/kadin_personel_onluk4.webp`,
	  `${BASE_IMAGE_URL}/onluk/kadin_personel_onluk5.webp`,
    ],
    shortDescription: "Genel kullanım kadın önlüğü.",
    description: "Aşçı önlüğü takımı, profesyonel mutfak kullanımı için tasarlanmış olup takım halinde pratik ve şık bir çözüm sunar."
  },
  {
    id: 15,
    name: "Sağlıkçı Önlüğü",
    category: ["sağlıkçı", "önlük"],
    images: [
      `${BASE_IMAGE_URL}/saglikci/saglikci.webp`,
	  `${BASE_IMAGE_URL}/saglikci/saglikci2.webp`,
	  `${BASE_IMAGE_URL}/saglikci/saglikci3.webp`,
	  `${BASE_IMAGE_URL}/saglikci/saglikci4.webp`,
	  `${BASE_IMAGE_URL}/saglikci/saglikci5.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 16,
    name: "Güvenlik Montu",
    category: ["güvenlik"],
    images: [
      `${BASE_IMAGE_URL}/guvenlik/mont.webp`
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 17,
    name: "Güvenlik Pantolonu",
    category: ["güvenlik"],
    images: [
	  `${BASE_IMAGE_URL}/guvenlik/pantolon_on.webp`,
	  `${BASE_IMAGE_URL}/guvenlik/pantolon_arka.webp`
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 18,
    name: "Polar Hırka Çift Renk",
    category: ["polar"],
    images: [
	  `${BASE_IMAGE_URL}/polar/hırka_cift_renk2.webp`,
	  `${BASE_IMAGE_URL}/polar/hırka_cift_renk.webp`,
	  `${BASE_IMAGE_URL}/polar/hırka_cift_renk3.webp`,
	  `${BASE_IMAGE_URL}/polar/hırka_cift_renk4.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 19,
    name: "Polar Hırka Tek Cep",
    category: ["polar"],
    images: [
	  `${BASE_IMAGE_URL}/polar/hirka_tek_cep.webp`,
	  `${BASE_IMAGE_URL}/polar/hirka_tek_cep2.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 20,
    name: "Polar Hırka Cepsiz",
    category: ["polar"],
    images: [
	  `${BASE_IMAGE_URL}/polar/hirka_cepsiz.webp`,
	  `${BASE_IMAGE_URL}/polar/hirka_cepsiz2.webp`,
	  `${BASE_IMAGE_URL}/polar/hırka_cift_renk4.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 21,
    name: "Polar Hırka Cepsiz",
    category: ["polar"],
    images: [
	  `${BASE_IMAGE_URL}/polar/hirka_iki_cep.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 22,
    name: "Pantolon Reflektörlü",
    category: ["pantolon"],
    images: [
	  `${BASE_IMAGE_URL}/pantolon/pantolon_reflektor2.webp`,
	  `${BASE_IMAGE_URL}/pantolon/pantolon_reflektor3.webp`,
	  `${BASE_IMAGE_URL}/pantolon/pantolon_reflektor.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 23,
    name: "Pantolon Şeritli",
    category: ["pantolon"],
    images: [
	  `${BASE_IMAGE_URL}/pantolon/pantolon_cift_serit.webp`,
	  `${BASE_IMAGE_URL}/pantolon/pantolon_kirmizi_serit.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 24,
    name: "Erkek Tulum",
    category: ["tulum"],
    images: [
	  `${BASE_IMAGE_URL}/tulum/erkek_tulum.webp`,
	  `${BASE_IMAGE_URL}/tulum/erkek_tulum2.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 25,
    name: "Erkek Tulum Renkli Yaka",
    category: ["tulum"],
    images: [
	  `${BASE_IMAGE_URL}/tulum/erkek_tulum_renkli_yaka.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 26,
    name: "İş Önlüğü Takımı",
    category: ["önlük"],
    images: [
	  `${BASE_IMAGE_URL}/onluk/takim.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 26,
    name: "Yelek Reflektörlü",
    category: ["yelek"],
    images: [
	  `${BASE_IMAGE_URL}/yelek/yelek_reflektor.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 27,
    name: "Softshell Yelek",
    category: ["yelek", "softshell"],
    images: [
	  `${BASE_IMAGE_URL}/softshell/softshell_yelek.webp`,
	  `${BASE_IMAGE_URL}/softshell/softshell_yelek.webp`,
  	  `${BASE_IMAGE_URL}/softshell/softshell_yelek.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 28,
    name: "Softshell Ceket",
    category: ["ceket", "softshell"],
    images: [
	  `${BASE_IMAGE_URL}/softshell/softshell_ceket.webp`,
	  `${BASE_IMAGE_URL}/softshell/softshell_ceket2.webp`,
  	  `${BASE_IMAGE_URL}/softshell/softshell_ceket3.webp`,
	  `${BASE_IMAGE_URL}/softshell/softshell_ceket4.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 29,
    name: "Softshell Ceket Çift Renkli",
    category: ["ceket", "softshell"],
    images: [
	  `${BASE_IMAGE_URL}/softshell/softshell_ceket_cift_renk.webp`,
	  `${BASE_IMAGE_URL}/softshell/softshell_ceket_cift_renk2.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 30,
    name: "Oxford Kaban",
    category: ["mont"],
    images: [
	  `${BASE_IMAGE_URL}/mont/oxford_kaban.webp`,
	  `${BASE_IMAGE_URL}/mont/oxford_kaban2.webp`,
	  `${BASE_IMAGE_URL}/mont/oxford_kaban3.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 30,
    name: "Bondi Mont",
    category: ["mont"],
    images: [
	  `${BASE_IMAGE_URL}/mont/bondi_mont3.webp`,
	  `${BASE_IMAGE_URL}/mont/bondi_mont.webp`,
	  `${BASE_IMAGE_URL}/mont/bondi_mont2.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 30,
    name: "Sitona Kaban",
    category: ["mont"],
    images: [
	  `${BASE_IMAGE_URL}/mont/sitona_kaban.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 31,
    name: "Kot Pantolon Reflektörlü",
    category: ["pantolon"],
    images: [
	  `${BASE_IMAGE_URL}/pantolon/pantolon_kot_reflektorlu.webp`,
    ],
    shortDescription: "",
    description: ""
  },
  {
    id: 32,
    name: "Kargo Pantolon",
    category: ["pantolon"],
    images: [
	  `${BASE_IMAGE_URL}/pantolon/pantolon_kargo.webp`,
    ],
    shortDescription: "",
    description: ""
  },
];